'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Visible = function (_React$Component) {
    _inherits(Visible, _React$Component);

    function Visible(props) {
        _classCallCheck(this, Visible);

        var _this = _possibleConstructorReturn(this, (Visible.__proto__ || Object.getPrototypeOf(Visible)).call(this, props));

        _this.changeVisibility = _this.changeVisibility.bind(_this);
        _this.state = {
            visible: false
        };
        return _this;
    }

    _createClass(Visible, [{
        key: 'changeVisibility',
        value: function changeVisibility() {
            this.setState(function (prevState) {
                return {
                    visible: !prevState.visible
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Visibility'
                ),
                React.createElement(
                    'button',
                    { onClick: this.changeVisibility },
                    this.state.visible ? 'Hide details' : 'Show details'
                ),
                this.state.visible && React.createElement(
                    'p',
                    null,
                    'Here are the details'
                )
            );
        }
    }]);

    return Visible;
}(React.Component);

ReactDOM.render(React.createElement(Visible, null), document.getElementById('app'));
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
