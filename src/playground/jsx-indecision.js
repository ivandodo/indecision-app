console.log('App.js is running');

let app = {
    title:'Indecision app',
    subtitle:'Put your life in the hands of a computer',
    selections:[]
};

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    if (option){
        app.selections.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const removeAll = () => {
    if (app.selections.length > 0){
        app.selections = [];
        renderApp();
    }
};

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.selections.length);
    alert(app.selections[randomNum]);
}

const renderApp = () => {
    let template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.selections.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.selections.length===0} onClick={makeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove all</button>
            <ol>
                {
                    app.selections.map( (selection) =><li key={selection}>{selection}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button type="submit">Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);    
}

const appRoot = document.getElementById('app');

renderApp();

