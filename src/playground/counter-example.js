class Counter extends React.Component {
    constructor(props){
        super(props);

        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount(){
        try{        
            const json = localStorage.getItem('counter');
            const count = parseInt(JSON.parse(json));
            
            if(count && !isNaN(count)){
                this.setState(() => ({ count }));
            }
        } catch (e) {
            //Do nothing
        }
    }

    componentDidUpdate(){
        const json = JSON.stringify(this.state.count);
        localStorage.setItem('counter', json);        
    }

    addOne() {
        this.setState( (prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    };

    minusOne() {
        this.setState( (prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    };

    reset(){
        this.setState( () => {
            return {
                count: 0
            };
        });
    };

    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

// Counter.defaultProps = {
//     counter : 0
// };

ReactDOM.render(<Counter />, document.getElementById('app'));