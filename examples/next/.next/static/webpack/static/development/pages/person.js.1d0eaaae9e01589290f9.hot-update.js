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

/**
 * Module depenencies
 */

/**
 * Import Service with GraphQL
 */


/**
 * DetailView component
 */

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
        className: "jsx-1118947973" + " " + "detail-view"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Poller+One",
        rel: "stylesheet",
        className: "jsx-1118947973"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Raleway",
        rel: "stylesheet",
        className: "jsx-1118947973"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1118947973",
        css: "body,html{background-color:#151515;margin:0;padding:0;color:#f4f4f4;font-family:'Raleway',cursive;padding-bottom:100px;}.list-view__logo{max-width:100%;}.list-view__logo-container{max-width:30%;margin:32px auto;}.ui-detail{background-color:#f5f5f5;max-width:30%;margin:0 auto;border-radius:4px;color:#333;}.ui-detail__title{padding:0;margin:0 0 8px;font-family:'Poller One',cursive;}.ui-detail__info{box-sizing:border-box;padding:16px;}.ui-detail__image-container{max-height:300px;overflow:hidden;border-top-right-radius:4px;border-top-left-radius:4px;}.ui-detail__image{max-width:100%;margin-top:-50px;border-top-right-radius:4px;border-top-left-radius:4px;}.ui-detail__info-row{border-bottom:1px solid #ccc;margin:0 -16px;padding:0 16px;}.ui-detail__info-row:last-child{border-bottom:1px solid transparent;}.ui-detail__info-label{display:block;border-bottom:1px solid #ccc;margin:0 -16px;padding:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZyYW5jaXNjby9Qcm9qZWN0cy9ncmFwaFFML2V4YW1wbGVzL25leHQvcGFnZXMvcGVyc29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEMkIsQUFJc0MsQUFTVixBQUlELEFBS1csQUFRZixBQU1ZLEFBS0wsQUFPRixBQU9jLEFBTU8sQUFJdEIsVUFsQ0MsSUFiRSxBQWdEWSxDQXBEL0IsQUFtQ21CLEVBUEQsS0FMSCxHQWhDSixBQWtCSyxBQVNvQixJQXdCbkIsRUFyQ2pCLENBK0I4QixDQVBBLENBckNsQixDQWdDWixDQXdCQSxHQXRDZ0IsSUEyQ0MsQ0E1REQsQUFrREMsU0FoQ0csS0FqQmEsQUF5QmpDLEFBbUNlLENBVmYsQ0FQNkIsQ0FQQSxVQWxCaEIsQUEyQ2IsV0ExQ0EsS0F5QkEsQ0EzQ3VCLEFBb0N2QixxQkFuQ0EiLCJmaWxlIjoiL2hvbWUvZnJhbmNpc2NvL1Byb2plY3RzL2dyYXBoUUwvZXhhbXBsZXMvbmV4dC9wYWdlcy9wZXJzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1vZHVsZSBkZXBlbmVuY2llc1xuICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIEltcG9ydCBTZXJ2aWNlIHdpdGggR3JhcGhRTFxuICovXG5pbXBvcnQgc3RhcndhcnNTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL3N0YXJ3YXJzLnNlcnZpY2UnO1xuXG4vKipcbiAqIERldGFpbFZpZXcgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERldGFpbFZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICh7IHF1ZXJ5OiB7IGlkIH0gfSkge1xuICAgIHJldHVybiB7IHBlcnNvbklEOiBpZCB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YToge31cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHN0YXJ3YXJzU2VydmljZS5nZXRQZXJzb25CeUlkKHRoaXMucHJvcHMucGVyc29uSUQpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkYXRhOiByZXMuZGF0YS5nZXRQZXJzb25cbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICB9XG5cbiAgZ2V0SW1hZ2UodHlwZSkge1xuICAgIGNvbnN0IHR5cGVzID0ge1xuICAgICAgZHJvaWQ6ICdodHRwOi8vdGhlaW5zcGlyYXRpb25ncmlkLmNvbS9hcHAvdXBsb2Fkcy8yMDE1LzA5L2lsbHVzdHJhdGlvbi1mbGF0LXN0YXItd2Fycy0wMS04MDV4ODA1LmpwZycsXG4gICAgICBodW1hbjogJ2h0dHA6Ly90aGVpbnNwaXJhdGlvbmdyaWQuY29tL2FwcC91cGxvYWRzLzIwMTUvMDkvaWxsdXN0cmF0aW9uLWZsYXQtc3Rhci13YXJzLTA1LTgwNXg4MDUuanBnJyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHR5cGVzW3R5cGVdO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGV0YWlsLXZpZXdcIj5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb2xsZXIrT25lXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5XCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICBib2R5LFxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTUxNTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBjb2xvcjogI2Y0ZjRmNDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIGN1cnNpdmU7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5saXN0LXZpZXdfX2xvZ28ge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5saXN0LXZpZXdfX2xvZ28tY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMzAlO1xuICAgICAgICAgICAgbWFyZ2luOiAzMnB4IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC51aS1kZXRhaWwge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgICAgIG1heC13aWR0aDogMzAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudWktZGV0YWlsX190aXRsZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgOHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQb2xsZXIgT25lJywgY3Vyc2l2ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudWktZGV0YWlsX19pbmZvIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51aS1kZXRhaWxfX2ltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51aS1kZXRhaWxfX2ltYWdlIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudWktZGV0YWlsX19pbmZvLXJvdyB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgIG1hcmdpbjogMCAtMTZweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudWktZGV0YWlsX19pbmZvLXJvdzpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudWktZGV0YWlsX19pbmZvLWxhYmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBtYXJnaW46IDAgLTE2cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3Qtdmlld19fbG9nby1jb250YWluZXJcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxpc3Qtdmlld19fbG9nb1wiIHNyYz1cImh0dHBzOi8vd3d3LmNsaXBhcnRtYXguY29tL3BuZy9mdWxsLzYtNjU0Njdfc3Rhci13YXJzLWxvZ28tcG5nLWZpbGUtc3Rhci13YXJzLXRyYW5zcGFyZW50LWJhY2tncm91bmQucG5nXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwidWktZGV0YWlsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aS1kZXRhaWxfX2ltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ1aS1kZXRhaWxfX2ltYWdlXCIgc3JjPXt0aGlzLmdldEltYWdlKHRoaXMuc3RhdGUuZGF0YS5zcGVjaWVzICYmIHRoaXMuc3RhdGUuZGF0YS5zcGVjaWVzWzBdLm5hbWUudG9Mb3dlckNhc2UoKSl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aS1kZXRhaWxfX2luZm9cIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ1aS1kZXRhaWxfX3RpdGxlXCI+e3RoaXMuc3RhdGUuZGF0YS5uYW1lfSAoe3RoaXMuc3RhdGUuZGF0YS5zcGVjaWVzICYmIHRoaXMuc3RhdGUuZGF0YS5zcGVjaWVzWzBdLm5hbWV9KTwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpLWRldGFpbF9faW5mby1yb3dcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInVpLWRldGFpbF9faW5mby1sYWJlbFwiPkluZm9ybWFjacOzbiBwZXJzb25hbDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+R8OpbmVybzwvc3Ryb25nPjxiciAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnN0YXRlLmRhdGEuZ2VuZGVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPkHDsW8gZGUgTmFjaW1pZW50bzwvc3Ryb25nPjxiciAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnN0YXRlLmRhdGEuYmlydGhfeWVhcn08L3NwYW4+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5QbGFuZXRhPC9zdHJvbmc+PGJyIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3RoaXMuc3RhdGUuZGF0YS5ob21ld29ybGQgJiYgdGhpcy5zdGF0ZS5kYXRhLmhvbWV3b3JsZC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpLWRldGFpbF9faW5mby1yb3dcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInVpLWRldGFpbF9faW5mby1sYWJlbFwiPjxzdHJvbmc+UGVsaWN1bGFzPC9zdHJvbmc+PC9sYWJlbD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5maWxtcyAmJiB0aGlzLnN0YXRlLmRhdGEuZmlsbXMubWFwKGZ1bmN0aW9uKGVsZW0pe1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0udGl0bGU7XG4gICAgICAgICAgICAgICAgfSkuam9pbignLCAnKX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/home/francisco/Projects/graphQL/examples/next/pages/person.js */"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1118947973" + " " + "list-view__logo-container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://www.clipartmax.com/png/full/6-65467_star-wars-logo-png-file-star-wars-transparent-background.png",
        className: "jsx-1118947973" + " " + "list-view__logo"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
        className: "jsx-1118947973" + " " + "ui-detail"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1118947973" + " " + "ui-detail__image-container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: this.getImage(this.state.data.species && this.state.data.species[0].name.toLowerCase()),
        className: "jsx-1118947973" + " " + "ui-detail__image"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1118947973" + " " + "ui-detail__info"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-1118947973" + " " + "ui-detail__title"
      }, this.state.data.name, " (", this.state.data.species && this.state.data.species[0].name, ")"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1118947973" + " " + "ui-detail__info-row"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "jsx-1118947973" + " " + "ui-detail__info-label"
      }, "Informaci\xF3n personal"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1118947973"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        className: "jsx-1118947973"
      }, "G\xE9nero"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-1118947973"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1118947973"
      }, this.state.data.gender)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1118947973"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        className: "jsx-1118947973"
      }, "A\xF1o de Nacimiento"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-1118947973"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1118947973"
      }, this.state.data.birth_year)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1118947973"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        className: "jsx-1118947973"
      }, "Planeta"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-1118947973"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-1118947973"
      }, this.state.data.homeworld && this.state.data.homeworld.name))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1118947973" + " " + "ui-detail__info-row"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "jsx-1118947973" + " " + "ui-detail__info-label"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        className: "jsx-1118947973"
      }, "Peliculas")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1118947973"
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
//# sourceMappingURL=person.js.1d0eaaae9e01589290f9.hot-update.js.map