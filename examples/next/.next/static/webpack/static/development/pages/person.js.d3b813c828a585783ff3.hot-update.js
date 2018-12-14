webpackHotUpdate("static/development/pages/person.js",{

/***/ "./pages/person.js":
/*!*************************!*\
  !*** ./pages/person.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DetailView; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_starwars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/starwars.service */ "./services/starwars.service.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var DetailView =
/*#__PURE__*/
function (_Component) {
  _inherits(DetailView, _Component);

  _createClass(DetailView, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var id = _ref.query.id;
      return {
        personID: id
      };
    }
  }]);

  function DetailView(props) {
    var _this;

    _classCallCheck(this, DetailView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DetailView).call(this, props));
    _this.state = {
      data: {}
    };
    return _this;
  }

  _createClass(DetailView, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      _services_starwars_service__WEBPACK_IMPORTED_MODULE_2__["default"].getPersonById(this.props.personID).then(function (res) {
        _this2.setState({
          data: res.data.getPerson
        });
      }).catch(console.error);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-4048923878" + " " + "detail-view"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4048923878",
        css: "body,html{background-color:#151515;margin:0;padding:0;color:#f4f4f4;font-family:'Raleway',cursive;}.list-view__logo{max-width:100%;}.list-view__logo-container{max-width:30%;margin:32px auto;}.ui-detail{background-color:#f5f5f5;max-width:50%;margin:0 auto;border-radius:4px;color:#333;padding:16px;box-sizing:border-box;}.ui-detail__title{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZyYW5jaXNjby9Qcm9qZWN0cy9ncmFwaFFML2V4YW1wbGVzL25leHQvcGFnZXMvcGVyc29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCMkIsQUFJc0MsQUFRVixBQUlELEFBS1csQUFVaEIsU0FDQyxLQWZPLENBSm5CLElBb0JBLE1BNUJXLEFBaUJLLE1BSmhCLEdBWlksS0FpQkksS0FoQkEsU0FpQkksS0FoQmEsYUFpQnBCLFdBQ0UsTUFqQmYsT0FrQndCLHNCQUN4QiIsImZpbGUiOiIvaG9tZS9mcmFuY2lzY28vUHJvamVjdHMvZ3JhcGhRTC9leGFtcGxlcy9uZXh0L3BhZ2VzL3BlcnNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3RhcndhcnNTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL3N0YXJ3YXJzLnNlcnZpY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWxWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoeyBxdWVyeTogeyBpZCB9IH0pIHtcbiAgICByZXR1cm4geyBwZXJzb25JRDogaWQgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHt9XG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBzdGFyd2Fyc1NlcnZpY2UuZ2V0UGVyc29uQnlJZCh0aGlzLnByb3BzLnBlcnNvbklEKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGF0YTogcmVzLmRhdGEuZ2V0UGVyc29uXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRldGFpbC12aWV3XCI+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgY29sb3I6ICNmNGY0ZjQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBjdXJzaXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAubGlzdC12aWV3X19sb2dvIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGlzdC12aWV3X19sb2dvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMzJweCBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAudWktZGV0YWlsIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudWktZGV0YWlsX190aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3Qtdmlld19fbG9nby1jb250YWluZXJcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxpc3Qtdmlld19fbG9nb1wiIHNyYz1cImh0dHBzOi8vd3d3LmNsaXBhcnRtYXguY29tL3BuZy9mdWxsLzYtNjU0Njdfc3Rhci13YXJzLWxvZ28tcG5nLWZpbGUtc3Rhci13YXJzLXRyYW5zcGFyZW50LWJhY2tncm91bmQucG5nXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwidWktZGV0YWlsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aS1kZXRhaWxfX2ltYWdlXCI+XG4gICAgICAgICAgICA8aW1nIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aS1kZXRhaWxfX2luZm9cIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ1aS1kZXRhaWxfX3RpdGxlXCI+e3RoaXMuc3RhdGUuZGF0YS5uYW1lfTwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/home/francisco/Projects/graphQL/examples/next/pages/person.js */"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4048923878" + " " + "list-view__logo-container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://www.clipartmax.com/png/full/6-65467_star-wars-logo-png-file-star-wars-transparent-background.png",
        className: "jsx-4048923878" + " " + "list-view__logo"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
        className: "jsx-4048923878" + " " + "ui-detail"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4048923878" + " " + "ui-detail__image"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "jsx-4048923878"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4048923878" + " " + "ui-detail__info"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-4048923878" + " " + "ui-detail__title"
      }, this.state.data.name))));
    }
  }]);

  return DetailView;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/person")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=person.js.d3b813c828a585783ff3.hot-update.js.map