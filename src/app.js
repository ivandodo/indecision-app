class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);        
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: ['Thing one','Thing two','Thing three']
        }
    }

    handleRemoveAll() {
        this.setState( () => {
            return {
                options: []
            };
        });
    };

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNum]);
    };

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleRemoveAll={this.handleRemoveAll}
                />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render(){
        return (
        <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
        </div>
        )
    }
}

class Action extends React.Component {
    render(){
        return (            
        <div>
            <button 
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
            >
                What should I do?
            </button>
        </div>
        )
    }
}

class Options extends React.Component {
    
    handleRemoveAll() {
        console.log(this.props.options);
    };

    render(){
        return (            
        <div>
            <button onClick={this.props.handleRemoveAll}>Remove all</button>
            {
                this.props.options.map( (option) =>
                    <Option key={option} optionText={option} />
                )
            }
        </div>
        )
    }
}

class Option extends React.Component {
    render(){
        return (            
        <div>
            {this.props.optionText}
        </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
    
        const option = e.target.elements.option.value;
        if (option){
            alert(option);
            e.target.elements.option.value = '';
        }
    }
    

    render(){
        return (            
        <div>
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button type="submit">Add option</button>
            </form>
        </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));