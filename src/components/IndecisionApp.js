import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    
    state = {
        options: [],
        selectedOption: undefined
    };

    handleRemoveAll = () => {
        this.setState( () => ({options: []}) )
    };

    handleRemove = (optionPassedIn) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option!=optionPassedIn)
        }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        this.setState(() => ({
            selectedOption: this.state.options[randomNum]
        }));
        //alert(this.state.options[randomNum]);
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item!';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option already exists!';
        }


        this.setState( (prevState) => ({options: prevState.options.concat(option)}));
    };

    clearSelected = () => {        
        this.setState(() => ({
            selectedOption: undefined
        }));
    }

    componentDidMount(){
        try{        
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            
            if(options){
                this.setState(() => ({ options }));
            }
        } catch (e) {
            //Do nothing
        }
    };

    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    };

    componentWillUnmount(){
        console.log('Component will unmount!');
    };

    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div  className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options} 
                            handleRemoveAll={this.handleRemoveAll}
                            handleRemove={this.handleRemove}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                    <OptionModal
                        selectedOption={this.state.selectedOption}
                        clearSelected={this.clearSelected}
                    />
                </div>
            </div>
        )
    };
};

IndecisionApp.defaultProps = {
    options: []
};