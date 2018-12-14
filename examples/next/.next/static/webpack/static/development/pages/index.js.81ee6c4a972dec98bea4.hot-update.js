webpackHotUpdate("static/development/pages/index.js",{

/***/ "./services/schemas/query.graphql":
/*!****************************************!*\
  !*** ./services/schemas/query.graphql ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"getPerson"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"getPersons"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"limit"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]}],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Person"}}},"directives":[]}]}],"loc":{"start":0,"end":145}};
    doc.loc.source = {"body":"# scalar Int\n\ntype Query {\n  getPerson(id: Int): Person\n  getPersons(limit: Int): [Person]\n}\n\n# type Query {\n#   hello(name: String): String!\n# }","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ })

})
//# sourceMappingURL=index.js.81ee6c4a972dec98bea4.hot-update.js.map