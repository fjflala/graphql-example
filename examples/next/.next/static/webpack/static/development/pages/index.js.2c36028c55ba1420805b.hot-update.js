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
    value: function getImage() {
      var types = {
        droid: 'http://theinspirationgrid.com/app/uploads/2015/09/illustration-flat-star-wars-01-805x805.jpg',
        human: 'http://theinspirationgrid.com/app/uploads/2015/09/illustration-flat-star-wars-05-805x805.jpg'
      };
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-706657198" + " " + "list-view"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Poller+One",
        rel: "stylesheet",
        className: "jsx-706657198"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Raleway",
        rel: "stylesheet",
        className: "jsx-706657198"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "706657198",
        css: "body,html{background-color:#151515;margin:0;padding:0;color:#f4f4f4;font-family:'Raleway',cursive;}.ui-list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;list-style:none;margin:0;padding:0;}.ui-item{-webkit-flex:1 0 20%;-ms-flex:1 0 20%;flex:1 0 20%;background-color:#f5f5f5;border-radius:4px;color:#333;margin:16px;padding:16px;}.ui-item__title{margin:0 0 8px;font-family:'Poller One',cursive;}.ui-item__title{margin:0 0 8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZyYW5jaXNjby9Qcm9qZWN0cy9ncmFwaFFML2V4YW1wbGVzL25leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0QyQixBQUlzQyxBQVFaLEFBUUEsQUFTRSxBQUtBLGVBSm1CLEFBS3BDLFVBOUJXLFNBQ0MsVUFDSSxJQXdCaEIsR0FWMkIsT0FiTSxnQkFLaEIsRUFTRyxZQWJwQixNQWNhLFdBQ0MsWUFDQyxhQUNmLENBWmtCLGdCQUNQLFNBQ0MsVUFDWiIsImZpbGUiOiIvaG9tZS9mcmFuY2lzY28vUHJvamVjdHMvZ3JhcGhRTC9leGFtcGxlcy9uZXh0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmltcG9ydCBzdGFyd2Fyc1NlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvc3RhcndhcnMuc2VydmljZSc7XG5cblxuLy8gZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuLy8gICA8dWw+XG4vLyAgICAgPGxpPjxMaW5rIGhyZWY9Jy9iJyBhcz0nL2EnPjxhPmE8L2E+PC9MaW5rPjwvbGk+XG4vLyAgICAgPGxpPjxMaW5rIGhyZWY9Jy9hJyBhcz0nL2InPjxhPmI8L2E+PC9MaW5rPjwvbGk+XG4vLyAgICAgPGxpPlxuLy8gICAgICAgPExpbmtcbi8vICAgICAgICAgaHJlZj17e3BhdGhuYW1lOiAnL3Bvc3RzJywgcXVlcnk6IHsgaWQ6ICcyJyB9fX1cbi8vICAgICAgICAgYXM9Jy9wb3N0cy8yJ1xuLy8gICAgICAgPlxuLy8gICAgICAgICA8YT5wb3N0ICMyPC9hPlxuLy8gICAgICAgPC9MaW5rPlxuLy8gICAgIDwvbGk+XG4vLyAgIDwvdWw+XG4vLyApXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHN0YXJ3YXJzU2VydmljZSgpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YTogcmVzLmRhdGEuZ2V0UGVyc29ucyB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0SW1hZ2UoKSB7XG4gICAgY29uc3QgdHlwZXMgPSB7XG4gICAgICBkcm9pZDogJ2h0dHA6Ly90aGVpbnNwaXJhdGlvbmdyaWQuY29tL2FwcC91cGxvYWRzLzIwMTUvMDkvaWxsdXN0cmF0aW9uLWZsYXQtc3Rhci13YXJzLTAxLTgwNXg4MDUuanBnJyxcbiAgICAgIGh1bWFuOiAnaHR0cDovL3RoZWluc3BpcmF0aW9uZ3JpZC5jb20vYXBwL3VwbG9hZHMvMjAxNS8wOS9pbGx1c3RyYXRpb24tZmxhdC1zdGFyLXdhcnMtMDUtODA1eDgwNS5qcGcnLFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibGlzdC12aWV3XCI+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9sbGVyK09uZVwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheVwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgY29sb3I6ICNmNGY0ZjQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBjdXJzaXZlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51aS1saXN0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudWktaXRlbSB7XG4gICAgICAgICAgICBmbGV4OiAxIDAgMjAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgbWFyZ2luOiAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudWktaXRlbV9fdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgOHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQb2xsZXIgT25lJywgY3Vyc2l2ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudWktaXRlbV9fdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWktbGlzdFwiPlxuICAgICAgICAgIHtBcnJheS5pc0FycmF5KHRoaXMuc3RhdGUuZGF0YSkgJiYgdGhpcy5zdGF0ZS5kYXRhLm1hcChwZXJzb24gPT4gKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInVpLWl0ZW1cIiBrZXk9e3BlcnNvbi5uYW1lfT5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInVpLWl0ZW1fX3RpdGxlXCI+e3BlcnNvbi5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVpLWl0ZW1fX3R5cGVcIj5cbiAgICAgICAgICAgICAgICB7cGVyc29uLnNwZWNpZXNbMF0ubmFtZX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/home/francisco/Projects/graphQL/examples/next/pages/index.js */"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-706657198" + " " + "ui-list"
      }, Array.isArray(this.state.data) && this.state.data.map(function (person) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: person.name,
          className: "jsx-706657198" + " " + "ui-item"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          className: "jsx-706657198" + " " + "ui-item__title"
        }, person.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "jsx-706657198" + " " + "ui-item__type"
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
//# sourceMappingURL=index.js.2c36028c55ba1420805b.hot-update.js.map