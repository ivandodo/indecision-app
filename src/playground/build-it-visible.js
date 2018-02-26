class Visible extends React.Component {
    constructor(props){
        super(props);

        this.changeVisibility = this.changeVisibility.bind(this);
        this.state = {
            visible: false
        };
    }

    changeVisibility(){
        this.setState( (prevState) => {
            return {
                visible: !prevState.visible
            };
        });
    };

    render(){
        return (
            <div>
                <h1>Visibility</h1>
                <button onClick={this.changeVisibility}>{this.state.visible?'Hide details':'Show details'}</button>
                {this.state.visible && <p>Here are the details</p>}
            </div>
        )
    }
}

ReactDOM.render(<Visible />, document.getElementById('app'));
// console.log('BuildItVisible.js is running');

// const app = {
//     title: 'Visibility'
// }

// let visible = false;
// const changeVisibility = () => {
//     visible = !visible;
//     renderApp();
// }

// const renderApp = () => {
//     let template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={changeVisibility}>{visible?'Hide details':'Show details'}</button>
//             {visible && <p>Here are the details</p>}
//         </div>
//     );
//     ReactDOM.render(template,appRoot);    
// }

// const appRoot = document.getElementById('app');

// renderApp();
