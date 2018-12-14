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
        className: "jsx-965452141" + " " + "list-view"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Poller+One",
        rel: "stylesheet",
        className: "jsx-965452141"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Raleway",
        rel: "stylesheet",
        className: "jsx-965452141"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "965452141",
        css: "body,html{background-color:#151515;margin:0;padding:0;color:#f4f4f4;font-family:'Raleway',cursive;}.list-view{max-width:75%;margin:0 auto;}.list-view__logo{max-width:100%;}.list-view__logo-container{max-width:30%;margin:32px auto;}.ui-list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;list-style:none;margin:0;padding:0;}.ui-item{-webkit-flex:1 3 20%;-ms-flex:1 3 20%;flex:1 3 20%;background-color:#f5f5f5;border-radius:4px;color:#333;margin:16px;padding:16px;overflow:hidden;}.ui-item__title{margin:0 0 8px;font-family:'Poller One',cursive;}.ui-item__image{max-width:100%;border-top-right-radius:4px;border-top-left-radius:4px;}.ui-item__image-container{margin-left:-16px;margin-right:-16px;margin-top:-16px;border-top-right-radius:4px;border-top-left-radius:4px;margin-bottom:8px;}.ui-item__button-container{margin-right:-16px;margin-left:-16px;margin-bottom:-16px;margin-top:16px;}.ui-item__button{display:block;width:100%;-webkit-text-decoration:none;text-decoration:none;background-color:#333;color:#f5f5f5;padding:16px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;box-sizing:border-box;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZyYW5jaXNjby9Qcm9qZWN0cy9ncmFwaFFML2V4YW1wbGVzL25leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUQyQixBQUlzQyxBQVFYLEFBS0MsQUFJRCxBQUtELEFBUUEsQUFVRSxBQUtBLEFBTUcsQUFTQyxBQU9MLGNBMURBLEFBU0csQUFrRE4sQ0F0RGIsQUEyQm9DLEFBS04sR0FNVCxDQVNELE1BNURULEFBb0VZLEdBM0R2QixHQVNBLEdBakJZLEdBbURPLEFBU0csTUFmTyxDQTVDYixJQXVDaEIsR0FYMkIsR0F1QkcsR0FTWixDQTNEZSxZQTRDakMsR0FnQkEsQ0F6Q2lCLENBK0NPLENBdENKLE1BdUJTLE1BbEQ3QixNQTRCYSxHQXNDRyxRQXJDRixJQXNCTSxFQWdCTCxNQXJDQSxPQXNDa0IsR0FoQmpDLEdBckJrQixDQVpBLGVBYWxCLENBWlcsUUFpRHFCLENBaERwQixVQUNaLG1CQWdEd0Isc0JBQ0osa0JBQ3BCIiwiZmlsZSI6Ii9ob21lL2ZyYW5jaXNjby9Qcm9qZWN0cy9ncmFwaFFML2V4YW1wbGVzL25leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IHN0YXJ3YXJzU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9zdGFyd2Fycy5zZXJ2aWNlJztcblxuLy8gZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuLy8gICA8dWw+XG4vLyAgICAgPGxpPjxMaW5rIGhyZWY9Jy9iJyBhcz0nL2EnPjxhPmE8L2E+PC9MaW5rPjwvbGk+XG4vLyAgICAgPGxpPjxMaW5rIGhyZWY9Jy9hJyBhcz0nL2InPjxhPmI8L2E+PC9MaW5rPjwvbGk+XG4vLyAgICAgPGxpPlxuLy8gICAgICAgPExpbmtcbi8vICAgICAgICAgaHJlZj17e3BhdGhuYW1lOiAnL3Bvc3RzJywgcXVlcnk6IHsgaWQ6ICcyJyB9fX1cbi8vICAgICAgICAgYXM9Jy9wb3N0cy8yJ1xuLy8gICAgICAgPlxuLy8gICAgICAgICA8YT5wb3N0ICMyPC9hPlxuLy8gICAgICAgPC9MaW5rPlxuLy8gICAgIDwvbGk+XG4vLyAgIDwvdWw+XG4vLyApXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHN0YXJ3YXJzU2VydmljZS5nZXRQZXJzb25zKClcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiByZXMuZGF0YS5nZXRQZXJzb25zIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBnZXRJbWFnZSh0eXBlKSB7XG4gICAgY29uc3QgdHlwZXMgPSB7XG4gICAgICBkcm9pZDogJ2h0dHA6Ly90aGVpbnNwaXJhdGlvbmdyaWQuY29tL2FwcC91cGxvYWRzLzIwMTUvMDkvaWxsdXN0cmF0aW9uLWZsYXQtc3Rhci13YXJzLTAxLTgwNXg4MDUuanBnJyxcbiAgICAgIGh1bWFuOiAnaHR0cDovL3RoZWluc3BpcmF0aW9uZ3JpZC5jb20vYXBwL3VwbG9hZHMvMjAxNS8wOS9pbGx1c3RyYXRpb24tZmxhdC1zdGFyLXdhcnMtMDUtODA1eDgwNS5qcGcnLFxuICAgIH07XG5cbiAgICByZXR1cm4gdHlwZXNbdHlwZV07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImxpc3Qtdmlld1wiPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvbGxlcitPbmVcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXlcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgIGJvZHksXG4gICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGNvbG9yOiAjZjRmNGY0O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JywgY3Vyc2l2ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGlzdC12aWV3IHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNzUlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpc3Qtdmlld19fbG9nbyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpc3Qtdmlld19fbG9nby1jb250YWluZXIge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgICAgICAgICBtYXJnaW46IDMycHggYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudWktbGlzdCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVpLWl0ZW0ge1xuICAgICAgICAgICAgZmxleDogMSAzIDIwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIG1hcmdpbjogMTZweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51aS1pdGVtX190aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCA4cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1BvbGxlciBPbmUnLCBjdXJzaXZlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51aS1pdGVtX19pbWFnZSB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51aS1pdGVtX19pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudWktaXRlbV9fYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTE2cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAudWktaXRlbV9fYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgY29sb3I6ICNmNWY1ZjU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC12aWV3X19sb2dvLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibGlzdC12aWV3X19sb2dvXCIgc3JjPVwiaHR0cHM6Ly93d3cuY2xpcGFydG1heC5jb20vcG5nL2Z1bGwvNi02NTQ2N19zdGFyLXdhcnMtbG9nby1wbmctZmlsZS1zdGFyLXdhcnMtdHJhbnNwYXJlbnQtYmFja2dyb3VuZC5wbmdcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVpLWxpc3RcIj5cbiAgICAgICAgICB7QXJyYXkuaXNBcnJheSh0aGlzLnN0YXRlLmRhdGEpICYmIHRoaXMuc3RhdGUuZGF0YS5tYXAocGVyc29uID0+IChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ1aS1pdGVtXCIga2V5PXtwZXJzb24ubmFtZX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWktaXRlbV9faW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ1aS1pdGVtX19pbWFnZVwiIHNyYz17dGhpcy5nZXRJbWFnZShwZXJzb24uc3BlY2llc1swXS5uYW1lLnRvTG93ZXJDYXNlKCkpfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInVpLWl0ZW1fX3RpdGxlXCI+e3BlcnNvbi5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVpLWl0ZW1fX3R5cGVcIj5cbiAgICAgICAgICAgICAgICB7cGVyc29uLnNwZWNpZXNbMF0ubmFtZX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpLWl0ZW1fX2J1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgaHJlZj17e3BhdGhuYW1lOiAnL3BlcnNvbicsIHF1ZXJ5OiB7IGlkOiAnMicgfX19XG4gICAgICAgICAgICAgICAgICBhcz0nL3BlcnNvbi8yJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVpLWl0ZW1fX2J1dHRvblwiPlZlciBtw6FzPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/home/francisco/Projects/graphQL/examples/next/pages/index.js */"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-965452141" + " " + "list-view__logo-container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://www.clipartmax.com/png/full/6-65467_star-wars-logo-png-file-star-wars-transparent-background.png",
        className: "jsx-965452141" + " " + "list-view__logo"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-965452141" + " " + "ui-list"
      }, Array.isArray(this.state.data) && this.state.data.map(function (person) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: person.name,
          className: "jsx-965452141" + " " + "ui-item"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-965452141" + " " + "ui-item__image-container"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: _this3.getImage(person.species[0].name.toLowerCase()),
          className: "jsx-965452141" + " " + "ui-item__image"
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
          className: "jsx-965452141" + " " + "ui-item__title"
        }, person.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "jsx-965452141" + " " + "ui-item__type"
        }, person.species[0].name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-965452141" + " " + "ui-item__button-container"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: {
            pathname: '/person',
            query: {
              id: '2'
            }
          },
          as: "/person/2"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          className: "jsx-965452141" + " " + "ui-item__button"
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
//# sourceMappingURL=index.js.070f4c011e8cc2ce814d.hot-update.js.map