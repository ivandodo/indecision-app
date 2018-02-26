'use strict';

console.log('App.js is running');

var app = {
    title: 'Indecision app',
    subtitle: 'Put your life in the hands of a computer',
    selections: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    if (option) {
        app.selections.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var removeAll = function removeAll() {
    if (app.selections.length > 0) {
        app.selections = [];
        renderApp();
    }
};

var makeDecision = function makeDecision() {
    var randomNum = Math.floor(Math.random() * app.selections.length);
    alert(app.selections[randomNum]);
};

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.selections.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'button',
            { disabled: app.selections.length === 0, onClick: makeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove all'
        ),
        React.createElement(
            'ol',
            null,
            app.selections.map(function (selection) {
                return React.createElement(
                    'li',
                    { key: selection },
                    selection
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                { type: 'submit' },
                'Add option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

renderApp();
