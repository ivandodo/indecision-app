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

let user = {
    name: 'Ivan',
    age: 33,
    location: 'Belgrade'
};

function getLocation(location){    
    return location ? <p>Location: {location}</p> : undefined;
}

const template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonimous'}</h1>
        {(user.age && user.age >= 18) && <p>Age : {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

ReactDOM.render(template, appRoot);
