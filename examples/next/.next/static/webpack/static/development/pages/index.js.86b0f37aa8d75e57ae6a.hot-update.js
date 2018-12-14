webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListView; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_starwars_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/starwars.service */ "./services/starwars.service.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // export default () => (
//   <ul>
//     <li><Link href='/b' as='/a'><a>a</a></Link></li>
//     <li><Link href='/a' as='/b'><a>b</a></Link></li>
//     <li>
//       <Link
//         href={{pathname: '/posts', query: { id: '2' }}}
//         as='/posts/2'
//       >
//         <a>post #2</a>
//       </Link>
//     </li>
//   </ul>
// )

var ListView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ListView, _React$Component);

  function ListView(props) {
    var _this;

    _classCallCheck(this, ListView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ListView).call(this, props));
    _this.state = {
      data: []
    };
    return _this;
  }

  _createClass(ListView, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      Object(_services_starwars_service__WEBPACK_IMPORTED_MODULE_3__["default"])().then(function (res) {
        _this2.setState({
          data: res.data.getPersons
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-1252195522" + " " + "list-view"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1252195522",
        css: "body,html{background-color:#151515;margin:0;padding:0;color:#f4f4f4;}.ui-list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;list-style:none;}.ui-item{-webkit-flex:1 0 20%;-ms-flex:1 0 20%;flex:1 0 20%;background-color:#f5f5f5;border-radius:4px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZyYW5jaXNjby9Qcm9qZWN0cy9ncmFwaFFML2V4YW1wbGVzL25leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUMyQixBQUlzQyxBQU9aLEFBTUEseUJBWkosU0FDQyxVQUNJLE9BV1csT0FWM0IsZ0JBSWlCLEVBT0csa0JBQ1AsV0FDYiwwQkFSa0IsZ0JBQ2xCIiwiZmlsZSI6Ii9ob21lL2ZyYW5jaXNjby9Qcm9qZWN0cy9ncmFwaFFML2V4YW1wbGVzL25leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IHN0YXJ3YXJzU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9zdGFyd2Fycy5zZXJ2aWNlJztcblxuXG4vLyBleHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4vLyAgIDx1bD5cbi8vICAgICA8bGk+PExpbmsgaHJlZj0nL2InIGFzPScvYSc+PGE+YTwvYT48L0xpbms+PC9saT5cbi8vICAgICA8bGk+PExpbmsgaHJlZj0nL2EnIGFzPScvYic+PGE+YjwvYT48L0xpbms+PC9saT5cbi8vICAgICA8bGk+XG4vLyAgICAgICA8TGlua1xuLy8gICAgICAgICBocmVmPXt7cGF0aG5hbWU6ICcvcG9zdHMnLCBxdWVyeTogeyBpZDogJzInIH19fVxuLy8gICAgICAgICBhcz0nL3Bvc3RzLzInXG4vLyAgICAgICA+XG4vLyAgICAgICAgIDxhPnBvc3QgIzI8L2E+XG4vLyAgICAgICA8L0xpbms+XG4vLyAgICAgPC9saT5cbi8vICAgPC91bD5cbi8vIClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgc3RhcndhcnNTZXJ2aWNlKClcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiByZXMuZGF0YS5nZXRQZXJzb25zIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImxpc3Qtdmlld1wiPlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgIGJvZHksXG4gICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGNvbG9yOiAjZjRmNGY0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51aS1saXN0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51aS1pdGVtIHtcbiAgICAgICAgICAgIGZsZXg6IDEgMCAyMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1aS1saXN0XCI+XG4gICAgICAgICAge0FycmF5LmlzQXJyYXkodGhpcy5zdGF0ZS5kYXRhKSAmJiB0aGlzLnN0YXRlLmRhdGEubWFwKHBlcnNvbiA9PiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidWktaXRlbVwiIGtleT17cGVyc29uLm5hbWV9PlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidWktaXRlbV9fdGl0bGVcIj57cGVyc29uLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidWktaXRlbV9fdHlwZVwiPlxuICAgICAgICAgICAgICAgIHtwZXJzb24uc3BlY2llc1swXS5uYW1lfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/home/francisco/Projects/graphQL/examples/next/pages/index.js */"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-1252195522" + " " + "ui-list"
      }, Array.isArray(this.state.data) && this.state.data.map(function (person) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: person.name,
          className: "jsx-1252195522" + " " + "ui-item"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          className: "jsx-1252195522" + " " + "ui-item__title"
        }, person.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "jsx-1252195522" + " " + "ui-item__type"
        }, person.species[0].name));
      })));
    }
  }]);

  return ListView;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.86b0f37aa8d75e57ae6a.hot-update.js.map