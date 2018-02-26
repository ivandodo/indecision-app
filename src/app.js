console.log('App.js is running');

var app = {
    title:'Indecision app',
    subtitle:'Subtitle'
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
    </div>
);

var appRoot = document.getElementById('app');

var userName = 'Mike';
var userAge = 33;
var userLocation  = 'Belgrade';

var user = {
    name: 'Ivan',
    age: 33,
    location: 'Belgrade'
};

var template2 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age : {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

ReactDOM.render(template, appRoot);
