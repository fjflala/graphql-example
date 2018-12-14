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
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-2163566303" + " " + "list-view"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Poller+One",
        rel: "stylesheet",
        className: "jsx-2163566303"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Raleway",
        rel: "stylesheet",
        className: "jsx-2163566303"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2163566303",
        css: "body,html{background-color:#151515;margin:0;padding:0;color:#f4f4f4;font-family:'Raleway',cursive;}.ui-list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;list-style:none;margin:0;padding:0;}.ui-item{-webkit-flex:1 0 20%;-ms-flex:1 0 20%;flex:1 0 20%;background-color:#f5f5f5;border-radius:4px;color:#333;margin:16px;padding:16px;}.ui-item__title{margin:0 0 8px;font-family:'Poller One',cursive;}.ui-item__title{margin:0 0 8px;}.ui-item__image{max-width:100%;margin-left:-16px;margin-right:-16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZyYW5jaXNjby9Qcm9qZWN0cy9ncmFwaFFML2V4YW1wbGVzL25leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0QyQixBQUlzQyxBQVFaLEFBUUEsQUFTRSxBQUtBLEFBSUEsZUFSbUIsQUFLcEMsQUFJb0IsVUFsQ1QsUUFtQ1UsQ0FsQ1QsVUFDSSxJQXdCaEIsR0FWMkIsQ0FvQjNCLE1BakNpQyxnQkFLaEIsRUFTRyxZQWJwQixNQWNhLFdBQ0MsWUFDQyxhQUNmLENBWmtCLGdCQUNQLFNBQ0MsVUFDWiIsImZpbGUiOiIvaG9tZS9mcmFuY2lzY28vUHJvamVjdHMvZ3JhcGhRTC9leGFtcGxlcy9uZXh0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCBzdGFyd2Fyc1NlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvc3RhcndhcnMuc2VydmljZSc7XG5cblxuLy8gZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuLy8gICA8dWw+XG4vLyAgICAgPGxpPjxMaW5rIGhyZWY9Jy9iJyBhcz0nL2EnPjxhPmE8L2E+PC9MaW5rPjwvbGk+XG4vLyAgICAgPGxpPjxMaW5rIGhyZWY9Jy9hJyBhcz0nL2InPjxhPmI8L2E+PC9MaW5rPjwvbGk+XG4vLyAgICAgPGxpPlxuLy8gICAgICAgPExpbmtcbi8vICAgICAgICAgaHJlZj17e3BhdGhuYW1lOiAnL3Bvc3RzJywgcXVlcnk6IHsgaWQ6ICcyJyB9fX1cbi8vICAgICAgICAgYXM9Jy9wb3N0cy8yJ1xuLy8gICAgICAgPlxuLy8gICAgICAgICA8YT5wb3N0ICMyPC9hPlxuLy8gICAgICAgPC9MaW5rPlxuLy8gICAgIDwvbGk+XG4vLyAgIDwvdWw+XG4vLyApXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHN0YXJ3YXJzU2VydmljZSgpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogcmVzLmRhdGEuZ2V0UGVyc29ucyB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0SW1hZ2UodHlwZSkge1xuICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgZHJvaWQ6ICdodHRwOi8vdGhlaW5zcGlyYXRpb25ncmlkLmNvbS9hcHAvdXBsb2Fkcy8yMDE1LzA5L2lsbHVzdHJhdGlvbi1mbGF0LXN0YXItd2Fycy0wMS04MDV4ODA1LmpwZycsXG4gICAgICBodW1hbjogJ2h0dHA6Ly90aGVpbnNwaXJhdGlvbmdyaWQuY29tL2FwcC91cGxvYWRzLzIwMTUvMDkvaWxsdXN0cmF0aW9uLWZsYXQtc3Rhci13YXJzLTA1LTgwNXg4MDUuanBnJyxcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXNbdHlwZV07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImxpc3Qtdmlld1wiPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvbGxlcitPbmVcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXlcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgIGJvZHksXG4gICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGNvbG9yOiAjZjRmNGY0O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JywgY3Vyc2l2ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudWktbGlzdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVpLWl0ZW0ge1xuICAgICAgICAgICAgZmxleDogMSAwIDIwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIG1hcmdpbjogMTZweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVpLWl0ZW1fX3RpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDhweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9sbGVyIE9uZScsIGN1cnNpdmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVpLWl0ZW1fX3RpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDhweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudWktaXRlbV9faW1hZ2Uge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVpLWxpc3RcIj5cbiAgICAgICAgICB7QXJyYXkuaXNBcnJheSh0aGlzLnN0YXRlLmRhdGEpICYmIHRoaXMuc3RhdGUuZGF0YS5tYXAocGVyc29uID0+IChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ1aS1pdGVtXCIga2V5PXtwZXJzb24ubmFtZX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWktaXRlbV9faW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ1aS1pdGVtX19pbWFnZVwiIHNyYz17dGhpcy5nZXRJbWFnZShwZXJzb24uc3BlY2llc1swXS5uYW1lLnRvTG93ZXJDYXNlKCkpfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInVpLWl0ZW1fX3RpdGxlXCI+e3BlcnNvbi5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVpLWl0ZW1fX3R5cGVcIj5cbiAgICAgICAgICAgICAgICB7cGVyc29uLnNwZWNpZXNbMF0ubmFtZX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/home/francisco/Projects/graphQL/examples/next/pages/index.js */"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-2163566303" + " " + "ui-list"
      }, Array.isArray(this.state.data) && this.state.data.map(function (person) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: person.name,
          className: "jsx-2163566303" + " " + "ui-item"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-2163566303" + " " + "ui-item__image-container"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: _this3.getImage(person.species[0].name.toLowerCase()),
          className: "jsx-2163566303" + " " + "ui-item__image"
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          className: "jsx-2163566303" + " " + "ui-item__title"
        }, person.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "jsx-2163566303" + " " + "ui-item__type"
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
//# sourceMappingURL=index.js.8e4ede344e2a9f04e863.hot-update.js.map