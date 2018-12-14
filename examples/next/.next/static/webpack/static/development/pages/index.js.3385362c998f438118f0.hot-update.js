webpackHotUpdate("static/development/pages/index.js",{

/***/ "./services/starwars.service.js":
/*!**************************************!*\
  !*** ./services/starwars.service.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 *  Example using the Start Wars API & ¡Imports!
 */
// const { GraphQLServer } = require('graphql-yoga');
var graphql = __webpack_require__(/*! graphql */ "../../node_modules/graphql/index.mjs").graphql;

var axios = __webpack_require__(/*! axios */ "../../node_modules/axios/index.js");

var _require = __webpack_require__(/*! graphql-tools */ "../../node_modules/graphql-tools/dist/index.js"),
    makeExecutableSchema = _require.makeExecutableSchema,
    mergeSchemas = _require.mergeSchemas;

var typePerson = __webpack_require__(/*! ./schemas/person.graphql */ "./services/schemas/person.graphql");

var typePlanet = __webpack_require__(/*! ./schemas/planet.graphql */ "./services/schemas/planet.graphql");

var typeSpecie = __webpack_require__(/*! ./schemas/specie.graphql */ "./services/schemas/specie.graphql");

var typeFilm = __webpack_require__(/*! ./schemas/film.graphql */ "./services/schemas/film.graphql");

var typeQuery = __webpack_require__(/*! ./schemas/query.graphql */ "./services/schemas/query.graphql");

var _require2 = __webpack_require__(/*! graphql/language/printer */ "../../node_modules/graphql/language/printer.mjs"),
    print = _require2.print;
/**
 *  Resolvers
 *  In this object you'll map all the types defined on typeDefs
 *  You can mutate the data here, and make API calls for every type or attribute of the type
 */


var resolvers = {
  Person: {
    homeworld: function () {
      var _homeworld = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(root) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get(root.homeworld);

              case 2:
                response = _context.sent;
                return _context.abrupt("return", response.data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function homeworld(_x) {
        return _homeworld.apply(this, arguments);
      }

      return homeworld;
    }(),
    species: function species(root) {
      var promises = root.species.map(
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(url) {
          var response;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return axios.get(url);

                case 2:
                  response = _context2.sent;
                  return _context2.abrupt("return", response.data);

                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function (_x2) {
          return _ref.apply(this, arguments);
        };
      }());
      return Promise.all(promises);
    },
    films: function films(root) {
      var promises = root.films.map(
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(url) {
          var response;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return axios.get(url);

                case 2:
                  response = _context3.sent;
                  return _context3.abrupt("return", response.data);

                case 4:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        return function (_x3) {
          return _ref2.apply(this, arguments);
        };
      }());
      return Promise.all(promises);
    }
  },
  Query: {
    getPersons: function () {
      var _getPersons = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(_, _ref3) {
        var limit, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                limit = _ref3.limit;
                _context4.next = 3;
                return axios.get("https://swapi.co/api/people");

              case 3:
                response = _context4.sent;
                return _context4.abrupt("return", response.data.results.slice(0, limit));

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getPersons(_x4, _x5) {
        return _getPersons.apply(this, arguments);
      }

      return getPersons;
    }(),
    getPerson: function () {
      var _getPerson = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(_, _ref4) {
        var id, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = _ref4.id;
                _context5.next = 3;
                return axios.get("https://swapi.co/api/people/".concat(id));

              case 3:
                response = _context5.sent;
                return _context5.abrupt("return", response.data);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getPerson(_x6, _x7) {
        return _getPerson.apply(this, arguments);
      }

      return getPerson;
    }()
  }
};
var schemaQuery = makeExecutableSchema({
  typeDefs: [print(typeFilm), print(typePerson), print(typePlanet), print(typeSpecie), print(typeQuery)],
  resolvers: resolvers
});
/**
 *  This will export the new schema
 */

var getPersons =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(name) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return graphql(schemaQuery, "{ \n    getPersons(limit: 9) {\n      name\n      species {\n        name\n      }\n    } \n  }");

          case 2:
            return _context6.abrupt("return", _context6.sent);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function getPersons(_x8) {
    return _ref5.apply(this, arguments);
  };
}();

var getPersonById =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(name) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return graphql(schemaQuery, "{ \n    getPersons(limit: 9) {\n      name\n      height\n      mass\n      hair_color\n      skin_color\n      eye_color\n      birth_year\n      gender\n      homeworld {\n        name\n      }\n      species {\n        name\n      }\n      films {\n        title\n      }\n    } \n  }");

          case 2:
            return _context7.abrupt("return", _context7.sent);

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function getPersonById(_x9) {
    return _ref6.apply(this, arguments);
  };
}();

module.exports = {
  getPersonById: getPersonById,
  getPersons: getPersons
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.3385362c998f438118f0.hot-update.js.map