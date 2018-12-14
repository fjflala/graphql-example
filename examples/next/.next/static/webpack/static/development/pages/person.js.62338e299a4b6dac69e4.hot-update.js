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
    key: "getImage",
    value: function getImage(type) {
      var types = {
        droid: 'http://theinspirationgrid.com/app/uploads/2015/09/illustration-flat-star-wars-01-805x805.jpg',
        human: 'http://theinspirationgrid.com/app/uploads/2015/09/illustration-flat-star-wars-05-805x805.jpg'
      };
      return types[type];
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-2436794947" + " " + "detail-view"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Poller+One",
        rel: "stylesheet",
        className: "jsx-2436794947"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Raleway",
        rel: "stylesheet",
        className: "jsx-2436794947"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2436794947",
        css: "body,html{background-color:#151515;margin:0;padding:0;color:#f4f4f4;font-family:'Raleway',cursive;}.list-view__logo{max-width:100%;}.list-view__logo-container{max-width:30%;margin:32px auto;}.ui-detail{background-color:#f5f5f5;max-width:50%;margin:0 auto;border-radius:4px;color:#333;}.ui-detail__title{padding:0;margin:0 0 8px;font-family:'Poller One',cursive;}.ui-detail__info{box-sizing:border-box;padding:16px;}.ui-detail__image-container{max-height:350px;overflow:hidden;}.ui-detail__image{max-width:100%;margin-top:-150px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZyYW5jaXNjby9Qcm9qZWN0cy9ncmFwaFFML2V4YW1wbGVzL25leHQvcGFnZXMvcGVyc29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDMkIsQUFJc0MsQUFRVixBQUlELEFBS1csQUFRZixBQU1ZLEFBS0wsQUFLRixVQWZBLElBYkUsQ0FKbkIsQUFpQ29CLEVBTEYsS0FMSCxHQS9CSixBQWlCSyxBQVNvQixNQWJwQyxFQXdCQSxBQUtBLENBekNZLENBK0JaLElBZGdCLEtBaEJBLFNBaUJJLEtBaEJhLEFBd0JqQyxhQVBhLFdBQ2IsTUFqQkEiLCJmaWxlIjoiL2hvbWUvZnJhbmNpc2NvL1Byb2plY3RzL2dyYXBoUUwvZXhhbXBsZXMvbmV4dC9wYWdlcy9wZXJzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0YXJ3YXJzU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9zdGFyd2Fycy5zZXJ2aWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV0YWlsVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgKHsgcXVlcnk6IHsgaWQgfSB9KSB7XG4gICAgcmV0dXJuIHsgcGVyc29uSUQ6IGlkIH07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiB7fVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgc3RhcndhcnNTZXJ2aWNlLmdldFBlcnNvbkJ5SWQodGhpcy5wcm9wcy5wZXJzb25JRClcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRhdGE6IHJlcy5kYXRhLmdldFBlcnNvblxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gIH1cblxuICBnZXRJbWFnZSh0eXBlKSB7XG4gICAgY29uc3QgdHlwZXMgPSB7XG4gICAgICBkcm9pZDogJ2h0dHA6Ly90aGVpbnNwaXJhdGlvbmdyaWQuY29tL2FwcC91cGxvYWRzLzIwMTUvMDkvaWxsdXN0cmF0aW9uLWZsYXQtc3Rhci13YXJzLTAxLTgwNXg4MDUuanBnJyxcbiAgICAgIGh1bWFuOiAnaHR0cDovL3RoZWluc3BpcmF0aW9uZ3JpZC5jb20vYXBwL3VwbG9hZHMvMjAxNS8wOS9pbGx1c3RyYXRpb24tZmxhdC1zdGFyLXdhcnMtMDUtODA1eDgwNS5qcGcnLFxuICAgIH07XG5cbiAgICByZXR1cm4gdHlwZXNbdHlwZV07XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkZXRhaWwtdmlld1wiPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvbGxlcitPbmVcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXlcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgIGJvZHksXG4gICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGNvbG9yOiAjZjRmNGY0O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JywgY3Vyc2l2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLmxpc3Qtdmlld19fbG9nbyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpc3Qtdmlld19fbG9nby1jb250YWluZXIge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgICAgICAgICBtYXJnaW46IDMycHggYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLnVpLWRldGFpbCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51aS1kZXRhaWxfX3RpdGxlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCA4cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1BvbGxlciBPbmUnLCBjdXJzaXZlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51aS1kZXRhaWxfX2luZm8ge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVpLWRldGFpbF9faW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudWktZGV0YWlsX19pbWFnZSB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC12aWV3X19sb2dvLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibGlzdC12aWV3X19sb2dvXCIgc3JjPVwiaHR0cHM6Ly93d3cuY2xpcGFydG1heC5jb20vcG5nL2Z1bGwvNi02NTQ2N19zdGFyLXdhcnMtbG9nby1wbmctZmlsZS1zdGFyLXdhcnMtdHJhbnNwYXJlbnQtYmFja2dyb3VuZC5wbmdcIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJ1aS1kZXRhaWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpLWRldGFpbF9faW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInVpLWRldGFpbF9faW1hZ2VcIiBzcmM9e3RoaXMuZ2V0SW1hZ2UodGhpcy5zdGF0ZS5kYXRhLnNwZWNpZXMgJiYgdGhpcy5zdGF0ZS5kYXRhLnNwZWNpZXNbMF0ubmFtZS50b0xvd2VyQ2FzZSgpKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpLWRldGFpbF9faW5mb1wiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInVpLWRldGFpbF9fdGl0bGVcIj57dGhpcy5zdGF0ZS5kYXRhLm5hbWV9ICh7dGhpcy5zdGF0ZS5kYXRhLnNwZWNpZXMgJiYgdGhpcy5zdGF0ZS5kYXRhLnNwZWNpZXNbMF0ubmFtZX0pPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWktZGV0YWlsX19pbmZvLXJvd1wiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidWktZGV0YWlsX19pbmZvLWxhYmVsXCI+UGVyc29uYWwgSW5mbzwvbGFiZWw+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+R8OpbmVybzwvc3Ryb25nPjxiciAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnN0YXRlLmRhdGEuZ2VuZGVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPkHDsW8gZGUgTmFjaW1pZW50bzwvc3Ryb25nPjxiciAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnN0YXRlLmRhdGEuYmlydGhfeWVhcn08L3NwYW4+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/home/francisco/Projects/graphQL/examples/next/pages/person.js */"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2436794947" + " " + "list-view__logo-container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://www.clipartmax.com/png/full/6-65467_star-wars-logo-png-file-star-wars-transparent-background.png",
        className: "jsx-2436794947" + " " + "list-view__logo"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
        className: "jsx-2436794947" + " " + "ui-detail"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2436794947" + " " + "ui-detail__image-container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: this.getImage(this.state.data.species && this.state.data.species[0].name.toLowerCase()),
        className: "jsx-2436794947" + " " + "ui-detail__image"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2436794947" + " " + "ui-detail__info"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-2436794947" + " " + "ui-detail__title"
      }, this.state.data.name, " (", this.state.data.species && this.state.data.species[0].name, ")"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2436794947" + " " + "ui-detail__info-row"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "jsx-2436794947" + " " + "ui-detail__info-label"
      }, "Personal Info"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2436794947"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        className: "jsx-2436794947"
      }, "G\xE9nero"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-2436794947"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-2436794947"
      }, this.state.data.gender)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-2436794947"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        className: "jsx-2436794947"
      }, "A\xF1o de Nacimiento"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-2436794947"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-2436794947"
      }, this.state.data.birth_year))))));
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
//# sourceMappingURL=person.js.62338e299a4b6dac69e4.hot-update.js.map