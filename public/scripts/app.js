'use strict';

console.log('App.js is running');

var app = {
    title: 'Indecision app',
    subtitle: 'Subtitle'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    )
);

var appRoot = document.getElementById('app');

var userName = 'Mike';
var userAge = 33;
var userLocation = 'Belgrade';

var user = {
    name: 'Ivan',
    age: 33,
    location: 'Belgrade'
};

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age : ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

ReactDOM.render(template, appRoot);
