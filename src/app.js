console.log('App.js is running');

let app = {
    title:'Indecision app',
    subtitle:'Put your life in the hands of a computer',
    options:['One','Two']
};

let template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const appRoot = document.getElementById('app');

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {    
    count--;
    renderCounterApp();
};
const reset = () => {    
    count = 0;
    renderCounterApp();
};

const renderCounterApp = () => {
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(template2, appRoot);    
};

renderCounterApp();


