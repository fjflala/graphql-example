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

      _services_starwars_service__WEBPACK_IMPORTED_MODULE_3__["default"].getPersons().then(function (res) {
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
        className: "jsx-3915326050" + " " + "list-view"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Poller+One",
        rel: "stylesheet",
        className: "jsx-3915326050"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Raleway",
        rel: "stylesheet",
        className: "jsx-3915326050"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3915326050",
        css: "body,html{background-color:#151515;margin:0;padding:0;color:#f4f4f4;font-family:'Raleway',cursive;}.list-view{max-width:75%;margin:0 auto;}.list-view__logo{max-width:100%;}.list-view__logo-container{max-width:30%;margin:32px auto;}.ui-list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;list-style:none;margin:0;padding:0;}.ui-item{-webkit-flex:1 3 20%;-ms-flex:1 3 20%;flex:1 3 20%;background-color:#f5f5f5;border-radius:4px;color:#333;margin:16px;padding:16px;overflow:hidden;}.ui-item__title{margin:0 0 8px;font-family:'Poller One',cursive;}.ui-item__title{margin:0 0 8px;}.ui-item__image{max-width:100%;border-top-right-radius:4px;border-top-left-radius:4px;}.ui-item__image-container{margin-left:-16px;margin-right:-16px;margin-top:-16px;border-top-right-radius:4px;border-top-left-radius:4px;margin-bottom:8px;}.ui-item__button-container{margin-right:-16px;margin-left:-16px;margin-bottom:-16px;margin-top:16px;}.ui-item__button{display:block;width:100%;-webkit-text-decoration:none;text-decoration:none;background-color:#333;color:#f5f5f5;padding:16px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;box-sizing:border-box;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZyYW5jaXNjby9Qcm9qZWN0cy9ncmFwaFFML2V4YW1wbGVzL25leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0QyQixBQUlzQyxBQVFYLEFBS0MsQUFJRCxBQUtELEFBUUEsQUFVRSxBQUtBLEFBSUEsQUFNRyxBQVNDLEFBT0wsY0E5REEsQUFTRyxBQXNETixDQTFEYixBQTJCb0MsQUFLcEMsQUFJOEIsR0FNVCxDQVNELE1BaEVULEFBd0VZLEdBL0R2QixHQVNBLEdBakJZLEdBdURPLEFBU0csTUFmTyxDQWhEYixJQXVDaEIsR0FYMkIsR0EyQkcsR0FTWixDQS9EZSxZQWdEakMsR0FnQkEsQ0E3Q2lCLENBbURPLENBMUNKLE1BMkJTLE1BdEQ3QixNQTRCYSxHQTBDRyxRQXpDRixJQTBCTSxFQWdCTCxNQXpDQSxPQTBDa0IsR0FoQmpDLEdBekJrQixDQVpBLGVBYWxCLENBWlcsUUFxRHFCLENBcERwQixVQUNaLG1CQW9Ed0Isc0JBQ0osa0JBQ3BCIiwiZmlsZSI6Ii9ob21lL2ZyYW5jaXNjby9Qcm9qZWN0cy9ncmFwaFFML2V4YW1wbGVzL25leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IHN0YXJ3YXJzU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9zdGFyd2Fycy5zZXJ2aWNlJztcblxuXG4vLyBleHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4vLyAgIDx1bD5cbi8vICAgICA8bGk+PExpbmsgaHJlZj0nL2InIGFzPScvYSc+PGE+YTwvYT48L0xpbms+PC9saT5cbi8vICAgICA8bGk+PExpbmsgaHJlZj0nL2EnIGFzPScvYic+PGE+YjwvYT48L0xpbms+PC9saT5cbi8vICAgICA8bGk+XG4vLyAgICAgICA8TGlua1xuLy8gICAgICAgICBocmVmPXt7cGF0aG5hbWU6ICcvcG9zdHMnLCBxdWVyeTogeyBpZDogJzInIH19fVxuLy8gICAgICAgICBhcz0nL3Bvc3RzLzInXG4vLyAgICAgICA+XG4vLyAgICAgICAgIDxhPnBvc3QgIzI8L2E+XG4vLyAgICAgICA8L0xpbms+XG4vLyAgICAgPC9saT5cbi8vICAgPC91bD5cbi8vIClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgc3RhcndhcnNTZXJ2aWNlLmdldFBlcnNvbnMoKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IHJlcy5kYXRhLmdldFBlcnNvbnMgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldEltYWdlKHR5cGUpIHtcbiAgICBjb25zdCB0eXBlcyA9IHtcbiAgICAgIGRyb2lkOiAnaHR0cDovL3RoZWluc3BpcmF0aW9uZ3JpZC5jb20vYXBwL3VwbG9hZHMvMjAxNS8wOS9pbGx1c3RyYXRpb24tZmxhdC1zdGFyLXdhcnMtMDEtODA1eDgwNS5qcGcnLFxuICAgICAgaHVtYW46ICdodHRwOi8vdGhlaW5zcGlyYXRpb25ncmlkLmNvbS9hcHAvdXBsb2Fkcy8yMDE1LzA5L2lsbHVzdHJhdGlvbi1mbGF0LXN0YXItd2Fycy0wNS04MDV4ODA1LmpwZycsXG4gICAgfTtcblxuICAgIHJldHVybiB0eXBlc1t0eXBlXTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibGlzdC12aWV3XCI+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9sbGVyK09uZVwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UmFsZXdheVwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgY29sb3I6ICNmNGY0ZjQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBjdXJzaXZlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5saXN0LXZpZXcge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA3NSU7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGlzdC12aWV3X19sb2dvIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGlzdC12aWV3X19sb2dvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMzJweCBhdXRvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51aS1saXN0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudWktaXRlbSB7XG4gICAgICAgICAgICBmbGV4OiAxIDMgMjAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgbWFyZ2luOiAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVpLWl0ZW1fX3RpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDhweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9sbGVyIE9uZScsIGN1cnNpdmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVpLWl0ZW1fX3RpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDhweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudWktaXRlbV9faW1hZ2Uge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudWktaXRlbV9faW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTZweDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVpLWl0ZW1fX2J1dHRvbi1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLnVpLWl0ZW1fX2J1dHRvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICAgICAgICAgIGNvbG9yOiAjZjVmNWY1O1xuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3Qtdmlld19fbG9nby1jb250YWluZXJcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxpc3Qtdmlld19fbG9nb1wiIHNyYz1cImh0dHBzOi8vd3d3LmNsaXBhcnRtYXguY29tL3BuZy9mdWxsLzYtNjU0Njdfc3Rhci13YXJzLWxvZ28tcG5nLWZpbGUtc3Rhci13YXJzLXRyYW5zcGFyZW50LWJhY2tncm91bmQucG5nXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1aS1saXN0XCI+XG4gICAgICAgICAge0FycmF5LmlzQXJyYXkodGhpcy5zdGF0ZS5kYXRhKSAmJiB0aGlzLnN0YXRlLmRhdGEubWFwKHBlcnNvbiA9PiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidWktaXRlbVwiIGtleT17cGVyc29uLm5hbWV9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpLWl0ZW1fX2ltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidWktaXRlbV9faW1hZ2VcIiBzcmM9e3RoaXMuZ2V0SW1hZ2UocGVyc29uLnNwZWNpZXNbMF0ubmFtZS50b0xvd2VyQ2FzZSgpKX0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ1aS1pdGVtX190aXRsZVwiPntwZXJzb24ubmFtZX08L2gzPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1aS1pdGVtX190eXBlXCI+XG4gICAgICAgICAgICAgICAge3BlcnNvbi5zcGVjaWVzWzBdLm5hbWV9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aS1pdGVtX19idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9e3twYXRobmFtZTogJy9wZXJzb24nLCBxdWVyeTogeyBpZDogJzInIH19fVxuICAgICAgICAgICAgICAgICAgYXM9Jy9wZXJzb24vMidcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1aS1pdGVtX19idXR0b25cIj5WZXIgbcOhczwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/home/francisco/Projects/graphQL/examples/next/pages/index.js */"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3915326050" + " " + "list-view__logo-container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://www.clipartmax.com/png/full/6-65467_star-wars-logo-png-file-star-wars-transparent-background.png",
        className: "jsx-3915326050" + " " + "list-view__logo"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3915326050" + " " + "ui-list"
      }, Array.isArray(this.state.data) && this.state.data.map(function (person) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: person.name,
          className: "jsx-3915326050" + " " + "ui-item"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-3915326050" + " " + "ui-item__image-container"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: _this3.getImage(person.species[0].name.toLowerCase()),
          className: "jsx-3915326050" + " " + "ui-item__image"
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          className: "jsx-3915326050" + " " + "ui-item__title"
        }, person.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "jsx-3915326050" + " " + "ui-item__type"
        }, person.species[0].name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-3915326050" + " " + "ui-item__button-container"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: {
            pathname: '/person',
            query: {
              id: '2'
            }
          },
          as: "/person/2"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          className: "jsx-3915326050" + " " + "ui-item__button"
        }, "Ver m\xE1s"))));
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
//# sourceMappingURL=index.js.379f1ffc6e5f287e6051.hot-update.js.map