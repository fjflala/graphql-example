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
        className: "jsx-3192774400" + " " + "list-view"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Poller+One",
        rel: "stylesheet",
        className: "jsx-3192774400"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Raleway",
        rel: "stylesheet",
        className: "jsx-3192774400"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3192774400",
        css: "body,html{background-color:#151515;margin:0;padding:0;color:#f4f4f4;font-family:'Raleway',cursive;}.ui-list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;list-style:none;margin:0;padding:0;}.ui-item{-webkit-flex:1 0 20%;-ms-flex:1 0 20%;flex:1 0 20%;background-color:#f5f5f5;border-radius:4px;color:#333;margin:16px;padding:16px;}.ui-item__title{margin:0 0 8px;font-family:'Poller One',cursive;}.ui-item__title{margin:0 0 8px;}.ui-item__image{max-width:100%;border-top-right-radius:4px;border-top-left-radius:4px;}.ui-item__image-container{margin-left:-16px;margin-right:-16px;margin-top:-16px;border-top-right-radius:4px;border-top-left-radius:4px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZyYW5jaXNjby9Qcm9qZWN0cy9ncmFwaFFML2V4YW1wbGVzL25leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0QyQixBQUlzQyxBQVFaLEFBUUEsQUFTRSxBQUtBLEFBSUEsQUFNRyxlQWRnQixBQUtwQyxBQUk4QixHQU1ULE9BeENWLFNBQ0MsR0F3Q08sTUFOVSxDQWpDYixJQXdCaEIsR0FWMkIsR0EwQkcsSUF2Q0csWUFpQ2pDLElBNUJpQixFQVNHLE1BMEJTLE1BdkM3QixNQWNhLFdBQ0MsSUF5QmQsUUF4QmUsYUFDZixDQVprQixnQkFDUCxTQUNDLFVBQ1oiLCJmaWxlIjoiL2hvbWUvZnJhbmNpc2NvL1Byb2plY3RzL2dyYXBoUUwvZXhhbXBsZXMvbmV4dC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgc3RhcndhcnNTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL3N0YXJ3YXJzLnNlcnZpY2UnO1xuXG5cbi8vIGV4cG9ydCBkZWZhdWx0ICgpID0+IChcbi8vICAgPHVsPlxuLy8gICAgIDxsaT48TGluayBocmVmPScvYicgYXM9Jy9hJz48YT5hPC9hPjwvTGluaz48L2xpPlxuLy8gICAgIDxsaT48TGluayBocmVmPScvYScgYXM9Jy9iJz48YT5iPC9hPjwvTGluaz48L2xpPlxuLy8gICAgIDxsaT5cbi8vICAgICAgIDxMaW5rXG4vLyAgICAgICAgIGhyZWY9e3twYXRobmFtZTogJy9wb3N0cycsIHF1ZXJ5OiB7IGlkOiAnMicgfX19XG4vLyAgICAgICAgIGFzPScvcG9zdHMvMidcbi8vICAgICAgID5cbi8vICAgICAgICAgPGE+cG9zdCAjMjwvYT5cbi8vICAgICAgIDwvTGluaz5cbi8vICAgICA8L2xpPlxuLy8gICA8L3VsPlxuLy8gKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YTogW10sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBzdGFyd2Fyc1NlcnZpY2UoKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IHJlcy5kYXRhLmdldFBlcnNvbnMgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldEltYWdlKHR5cGUpIHtcbiAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgIGRyb2lkOiAnaHR0cDovL3RoZWluc3BpcmF0aW9uZ3JpZC5jb20vYXBwL3VwbG9hZHMvMjAxNS8wOS9pbGx1c3RyYXRpb24tZmxhdC1zdGFyLXdhcnMtMDEtODA1eDgwNS5qcGcnLFxuICAgICAgaHVtYW46ICdodHRwOi8vdGhlaW5zcGlyYXRpb25ncmlkLmNvbS9hcHAvdXBsb2Fkcy8yMDE1LzA5L2lsbHVzdHJhdGlvbi1mbGF0LXN0YXItd2Fycy0wNS04MDV4ODA1LmpwZycsXG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzW3R5cGVdO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJsaXN0LXZpZXdcIj5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb2xsZXIrT25lXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5XCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICBib2R5LFxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTUxNTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBjb2xvcjogI2Y0ZjRmNDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIGN1cnNpdmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVpLWxpc3Qge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51aS1pdGVtIHtcbiAgICAgICAgICAgIGZsZXg6IDEgMCAyMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICBtYXJnaW46IDE2cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51aS1pdGVtX190aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCA4cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1BvbGxlciBPbmUnLCBjdXJzaXZlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51aS1pdGVtX190aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCA4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVpLWl0ZW1fX2ltYWdlIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVpLWl0ZW1fX2ltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE2cHg7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWktbGlzdFwiPlxuICAgICAgICAgIHtBcnJheS5pc0FycmF5KHRoaXMuc3RhdGUuZGF0YSkgJiYgdGhpcy5zdGF0ZS5kYXRhLm1hcChwZXJzb24gPT4gKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInVpLWl0ZW1cIiBrZXk9e3BlcnNvbi5uYW1lfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aS1pdGVtX19pbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInVpLWl0ZW1fX2ltYWdlXCIgc3JjPXt0aGlzLmdldEltYWdlKHBlcnNvbi5zcGVjaWVzWzBdLm5hbWUudG9Mb3dlckNhc2UoKSl9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidWktaXRlbV9fdGl0bGVcIj57cGVyc29uLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidWktaXRlbV9fdHlwZVwiPlxuICAgICAgICAgICAgICAgIHtwZXJzb24uc3BlY2llc1swXS5uYW1lfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/home/francisco/Projects/graphQL/examples/next/pages/index.js */"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3192774400" + " " + "ui-list"
      }, Array.isArray(this.state.data) && this.state.data.map(function (person) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: person.name,
          className: "jsx-3192774400" + " " + "ui-item"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-3192774400" + " " + "ui-item__image-container"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: _this3.getImage(person.species[0].name.toLowerCase()),
          className: "jsx-3192774400" + " " + "ui-item__image"
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          className: "jsx-3192774400" + " " + "ui-item__title"
        }, person.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "jsx-3192774400" + " " + "ui-item__type"
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
//# sourceMappingURL=index.js.3a2c831c504b8dd3fa65.hot-update.js.map