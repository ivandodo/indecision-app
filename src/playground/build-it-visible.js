console.log('BuildItVisible.js is running');

const app = {
    title: 'Visibility'
}

let visible = false;
const changeVisibility = () => {
    visible = !visible;
    renderApp();
}

const renderApp = () => {
    let template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={changeVisibility}>{visible?'Hide details':'Show details'}</button>
            {visible && <p>Here are the details</p>}
        </div>
    );
    ReactDOM.render(template,appRoot);    
}

const appRoot = document.getElementById('app');

renderApp();
