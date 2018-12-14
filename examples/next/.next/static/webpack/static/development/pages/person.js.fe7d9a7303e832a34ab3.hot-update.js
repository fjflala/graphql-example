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
        className: "jsx-3832734316" + " " + "detail-view"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Poller+One",
        rel: "stylesheet",
        className: "jsx-3832734316"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Raleway",
        rel: "stylesheet",
        className: "jsx-3832734316"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3832734316",
        css: "body,html{background-color:#151515;margin:0;padding:0;color:#f4f4f4;font-family:'Raleway',cursive;padding-bottom:100px;}.list-view__logo{max-width:100%;}.list-view__logo-container{max-width:30%;margin:32px auto;}.ui-detail{background-color:#f5f5f5;max-width:30%;margin:0 auto;border-radius:4px;color:#333;}.ui-detail__title{padding:0;margin:0 0 8px;font-family:'Poller One',cursive;}.ui-detail__info{box-sizing:border-box;padding:16px;}.ui-detail__image-container{max-height:350px;overflow:hidden;}.ui-detail__image{max-width:100%;margin-top:-150px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZyYW5jaXNjby9Qcm9qZWN0cy9ncmFwaFFML2V4YW1wbGVzL25leHQvcGFnZXMvcGVyc29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDMkIsQUFJc0MsQUFTVixBQUlELEFBS1csQUFRZixBQU1ZLEFBS0wsQUFLRixVQWZBLElBYkUsQ0FKbkIsQUFpQ29CLEVBTEYsS0FMSCxHQWhDSixBQWtCSyxBQVNvQixNQWJwQyxFQXdCQSxBQUtBLENBMUNZLENBZ0NaLElBZGdCLEtBakJBLFNBa0JJLEtBakJhLEFBeUJqQyxhQVBhLFdBQ2IsTUFsQnVCLHFCQUN2QiIsImZpbGUiOiIvaG9tZS9mcmFuY2lzY28vUHJvamVjdHMvZ3JhcGhRTC9leGFtcGxlcy9uZXh0L3BhZ2VzL3BlcnNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3RhcndhcnNTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL3N0YXJ3YXJzLnNlcnZpY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWxWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyAoeyBxdWVyeTogeyBpZCB9IH0pIHtcbiAgICByZXR1cm4geyBwZXJzb25JRDogaWQgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHt9XG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBzdGFyd2Fyc1NlcnZpY2UuZ2V0UGVyc29uQnlJZCh0aGlzLnByb3BzLnBlcnNvbklEKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGF0YTogcmVzLmRhdGEuZ2V0UGVyc29uXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgfVxuXG4gIGdldEltYWdlKHR5cGUpIHtcbiAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgIGRyb2lkOiAnaHR0cDovL3RoZWluc3BpcmF0aW9uZ3JpZC5jb20vYXBwL3VwbG9hZHMvMjAxNS8wOS9pbGx1c3RyYXRpb24tZmxhdC1zdGFyLXdhcnMtMDEtODA1eDgwNS5qcGcnLFxuICAgICAgaHVtYW46ICdodHRwOi8vdGhlaW5zcGlyYXRpb25ncmlkLmNvbS9hcHAvdXBsb2Fkcy8yMDE1LzA5L2lsbHVzdHJhdGlvbi1mbGF0LXN0YXItd2Fycy0wNS04MDV4ODA1LmpwZycsXG4gICAgfTtcblxuICAgIHJldHVybiB0eXBlc1t0eXBlXTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRldGFpbC12aWV3XCI+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9sbGVyK09uZVwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheVwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgY29sb3I6ICNmNGY0ZjQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBjdXJzaXZlO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAubGlzdC12aWV3X19sb2dvIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGlzdC12aWV3X19sb2dvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMzJweCBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAudWktZGV0YWlsIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVpLWRldGFpbF9fdGl0bGUge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDhweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9sbGVyIE9uZScsIGN1cnNpdmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVpLWRldGFpbF9faW5mbyB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudWktZGV0YWlsX19pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMzUwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51aS1kZXRhaWxfX2ltYWdlIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LXZpZXdfX2xvZ28tY29udGFpbmVyXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsaXN0LXZpZXdfX2xvZ29cIiBzcmM9XCJodHRwczovL3d3dy5jbGlwYXJ0bWF4LmNvbS9wbmcvZnVsbC82LTY1NDY3X3N0YXItd2Fycy1sb2dvLXBuZy1maWxlLXN0YXItd2Fycy10cmFuc3BhcmVudC1iYWNrZ3JvdW5kLnBuZ1wiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cInVpLWRldGFpbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWktZGV0YWlsX19pbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidWktZGV0YWlsX19pbWFnZVwiIHNyYz17dGhpcy5nZXRJbWFnZSh0aGlzLnN0YXRlLmRhdGEuc3BlY2llcyAmJiB0aGlzLnN0YXRlLmRhdGEuc3BlY2llc1swXS5uYW1lLnRvTG93ZXJDYXNlKCkpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWktZGV0YWlsX19pbmZvXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidWktZGV0YWlsX190aXRsZVwiPnt0aGlzLnN0YXRlLmRhdGEubmFtZX0gKHt0aGlzLnN0YXRlLmRhdGEuc3BlY2llcyAmJiB0aGlzLnN0YXRlLmRhdGEuc3BlY2llc1swXS5uYW1lfSk8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aS1kZXRhaWxfX2luZm8tcm93XCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ1aS1kZXRhaWxfX2luZm8tbGFiZWxcIj5QZXJzb25hbCBJbmZvPC9sYWJlbD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5Hw6luZXJvPC9zdHJvbmc+PGJyIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMuc3RhdGUuZGF0YS5nZW5kZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+QcOxbyBkZSBOYWNpbWllbnRvPC9zdHJvbmc+PGJyIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMuc3RhdGUuZGF0YS5iaXJ0aF95ZWFyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPlBsYW5ldGE8L3N0cm9uZz48YnIgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj57dGhpcy5zdGF0ZS5kYXRhLmhvbWV3b3JsZCAmJiB0aGlzLnN0YXRlLmRhdGEuaG9tZXdvcmxkLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWktZGV0YWlsX19pbmZvLXJvd1wiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidWktZGV0YWlsX19pbmZvLWxhYmVsXCI+UGVsaWN1bGFzPC9sYWJlbD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5maWxtcyAmJiB0aGlzLnN0YXRlLmRhdGEuZmlsbXMubWFwKGZ1bmN0aW9uKGVsZW0pe1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0udGl0bGU7XG4gICAgICAgICAgICAgICAgfSkuam9pbignLCAnKX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/home/francisco/Projects/graphQL/examples/next/pages/person.js */"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3832734316" + " " + "list-view__logo-container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://www.clipartmax.com/png/full/6-65467_star-wars-logo-png-file-star-wars-transparent-background.png",
        className: "jsx-3832734316" + " " + "list-view__logo"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
        className: "jsx-3832734316" + " " + "ui-detail"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3832734316" + " " + "ui-detail__image-container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: this.getImage(this.state.data.species && this.state.data.species[0].name.toLowerCase()),
        className: "jsx-3832734316" + " " + "ui-detail__image"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3832734316" + " " + "ui-detail__info"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3832734316" + " " + "ui-detail__title"
      }, this.state.data.name, " (", this.state.data.species && this.state.data.species[0].name, ")"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3832734316" + " " + "ui-detail__info-row"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "jsx-3832734316" + " " + "ui-detail__info-label"
      }, "Personal Info"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3832734316"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        className: "jsx-3832734316"
      }, "G\xE9nero"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-3832734316"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-3832734316"
      }, this.state.data.gender)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3832734316"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        className: "jsx-3832734316"
      }, "A\xF1o de Nacimiento"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-3832734316"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-3832734316"
      }, this.state.data.birth_year)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3832734316"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        className: "jsx-3832734316"
      }, "Planeta"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-3832734316"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-3832734316"
      }, this.state.data.homeworld && this.state.data.homeworld.name))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3832734316" + " " + "ui-detail__info-row"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "jsx-3832734316" + " " + "ui-detail__info-label"
      }, "Peliculas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-3832734316"
      }, this.state.data.films && this.state.data.films.map(function (elem) {
        return elem.title;
      }).join(', '))))));
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
//# sourceMappingURL=person.js.fe7d9a7303e832a34ab3.hot-update.js.map