/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/apolloServer.js":
/*!*****************************!*\
  !*** ./api/apolloServer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema */ \"./api/schema/index.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.\\n\\n  # This \\\"Book\\\" type defines the queryable fields for every book in our data source.\\n  type Book {\\n    title: String\\n    author: String\\n  }\\n\\n  # The \\\"Query\\\" type is special: it lists all of the available queries that\\n  # clients can execute, along with the return type for each. In this\\n  # case, the \\\"books\\\" query returns an array of zero or more Books (defined above).\\n  type Query {\\n    books: [Book]\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\nvar debug = debug__WEBPACK_IMPORTED_MODULE_0___default()(\"api:graphql\");\ndebug(\"setting up apollo configuration\");\n\nvar ProtectedApolloServer = /*#__PURE__*/function (_ApolloServer) {\n  _inherits(ProtectedApolloServer, _ApolloServer);\n\n  var _super = _createSuper(ProtectedApolloServer);\n\n  function ProtectedApolloServer() {\n    _classCallCheck(this, ProtectedApolloServer);\n\n    return _super.apply(this, arguments);\n  }\n\n  return ProtectedApolloServer;\n}(apollo_server_express__WEBPACK_IMPORTED_MODULE_1__[\"ApolloServer\"]);\n\nvar typeDefs = Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_1__[\"gql\"])(_templateObject());\nvar _books = [{\n  title: \"Harry Potter and the Chamber of Secrets\",\n  author: \"J.K. Rowling\"\n}, {\n  title: \"Jurassic Park\",\n  author: \"Michael Crichton\"\n}]; // Resolvers define the technique for fetching the types defined in the\n// schema. This resolver retrieves books from the \"books\" array above.\n\nvar resolvers = {\n  Query: {\n    books: function books() {\n      return _books;\n    }\n  }\n};\nvar apolloServer = new apollo_server_express__WEBPACK_IMPORTED_MODULE_1__[\"ApolloServer\"]({\n  schema: _schema__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  context: function context(_ref) {\n    var req = _ref.req,\n        res = _ref.res;\n    return {\n      req: req\n    };\n  },\n  playground:  true && {\n    settings: {\n      \"editor.theme\": \"light\"\n    },\n    tabs: [{\n      endpoint:  false ? undefined : \"http://localhost:\".concat(\"5000\", \"/api\")\n    }]\n  },\n  introspection: \"development\" !== \"production\"\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (apolloServer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvYXBvbGxvU2VydmVyLmpzP2U1ODAiXSwibmFtZXMiOlsiZGVidWciLCJEZWJ1ZyIsIlByb3RlY3RlZEFwb2xsb1NlcnZlciIsIkFwb2xsb1NlcnZlciIsInR5cGVEZWZzIiwiZ3FsIiwiYm9va3MiLCJ0aXRsZSIsImF1dGhvciIsInJlc29sdmVycyIsIlF1ZXJ5IiwiYXBvbGxvU2VydmVyIiwic2NoZW1hIiwiY29udGV4dCIsInJlcSIsInJlcyIsInBsYXlncm91bmQiLCJwcm9jZXNzIiwic2V0dGluZ3MiLCJ0YWJzIiwiZW5kcG9pbnQiLCJpbnRyb3NwZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLDRDQUFLLENBQUMsYUFBRCxDQUFuQjtBQUNBRCxLQUFLLENBQUMsaUNBQUQsQ0FBTDs7SUFFTUUscUI7Ozs7Ozs7Ozs7OztFQUE4QkMsa0U7O0FBRXBDLElBQU1DLFFBQVEsR0FBR0MsaUVBQUgsbUJBQWQ7QUFpQkEsSUFBTUMsTUFBSyxHQUFHLENBQ1o7QUFDRUMsT0FBSyxFQUFFLHlDQURUO0FBRUVDLFFBQU0sRUFBRTtBQUZWLENBRFksRUFLWjtBQUNFRCxPQUFLLEVBQUUsZUFEVDtBQUVFQyxRQUFNLEVBQUU7QUFGVixDQUxZLENBQWQsQyxDQVdBO0FBQ0E7O0FBQ0EsSUFBTUMsU0FBUyxHQUFHO0FBQ2hCQyxPQUFLLEVBQUU7QUFDTEosU0FBSyxFQUFFO0FBQUEsYUFBTUEsTUFBTjtBQUFBO0FBREY7QUFEUyxDQUFsQjtBQU1BLElBQU1LLFlBQVksR0FBRyxJQUFJUixrRUFBSixDQUFpQjtBQUNwQ1MsUUFBTSxFQUFOQSwrQ0FEb0M7QUFFcENDLFNBQU8sRUFBRSx1QkFBa0I7QUFBQSxRQUFmQyxHQUFlLFFBQWZBLEdBQWU7QUFBQSxRQUFWQyxHQUFVLFFBQVZBLEdBQVU7QUFDekIsV0FBTztBQUNMRCxTQUFHLEVBQUhBO0FBREssS0FBUDtBQUdELEdBTm1DO0FBT3BDRSxZQUFVLEVBQUVDLEtBQUEsSUFBeUM7QUFDbkRDLFlBQVEsRUFBRTtBQUNSLHNCQUFnQjtBQURSLEtBRHlDO0FBSW5EQyxRQUFJLEVBQUUsQ0FDSjtBQUNFQyxjQUFRLEVBQ05ILE1BQUEsR0FDSUEsU0FESiw4QkFFd0JBLE1BRnhCO0FBRkosS0FESTtBQUo2QyxHQVBqQjtBQW9CcENJLGVBQWEsRUFBRUosYUFBQSxLQUF5QjtBQXBCSixDQUFqQixDQUFyQjtBQXVCZU4sMkVBQWYiLCJmaWxlIjoiLi9hcGkvYXBvbGxvU2VydmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERlYnVnIGZyb20gXCJkZWJ1Z1wiO1xyXG5pbXBvcnQgeyBBcG9sbG9TZXJ2ZXIsIGdxbCB9IGZyb20gXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIjtcclxuXHJcbmltcG9ydCBzY2hlbWEgZnJvbSBcIi4vc2NoZW1hXCI7XHJcblxyXG5jb25zdCBkZWJ1ZyA9IERlYnVnKFwiYXBpOmdyYXBocWxcIik7XHJcbmRlYnVnKFwic2V0dGluZyB1cCBhcG9sbG8gY29uZmlndXJhdGlvblwiKTtcclxuXHJcbmNsYXNzIFByb3RlY3RlZEFwb2xsb1NlcnZlciBleHRlbmRzIEFwb2xsb1NlcnZlciB7fVxyXG5cclxuY29uc3QgdHlwZURlZnMgPSBncWxgXHJcbiAgIyBDb21tZW50cyBpbiBHcmFwaFFMIHN0cmluZ3MgKHN1Y2ggYXMgdGhpcyBvbmUpIHN0YXJ0IHdpdGggdGhlIGhhc2ggKCMpIHN5bWJvbC5cclxuXHJcbiAgIyBUaGlzIFwiQm9va1wiIHR5cGUgZGVmaW5lcyB0aGUgcXVlcnlhYmxlIGZpZWxkcyBmb3IgZXZlcnkgYm9vayBpbiBvdXIgZGF0YSBzb3VyY2UuXHJcbiAgdHlwZSBCb29rIHtcclxuICAgIHRpdGxlOiBTdHJpbmdcclxuICAgIGF1dGhvcjogU3RyaW5nXHJcbiAgfVxyXG5cclxuICAjIFRoZSBcIlF1ZXJ5XCIgdHlwZSBpcyBzcGVjaWFsOiBpdCBsaXN0cyBhbGwgb2YgdGhlIGF2YWlsYWJsZSBxdWVyaWVzIHRoYXRcclxuICAjIGNsaWVudHMgY2FuIGV4ZWN1dGUsIGFsb25nIHdpdGggdGhlIHJldHVybiB0eXBlIGZvciBlYWNoLiBJbiB0aGlzXHJcbiAgIyBjYXNlLCB0aGUgXCJib29rc1wiIHF1ZXJ5IHJldHVybnMgYW4gYXJyYXkgb2YgemVybyBvciBtb3JlIEJvb2tzIChkZWZpbmVkIGFib3ZlKS5cclxuICB0eXBlIFF1ZXJ5IHtcclxuICAgIGJvb2tzOiBbQm9va11cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBib29rcyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJIYXJyeSBQb3R0ZXIgYW5kIHRoZSBDaGFtYmVyIG9mIFNlY3JldHNcIixcclxuICAgIGF1dGhvcjogXCJKLksuIFJvd2xpbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkp1cmFzc2ljIFBhcmtcIixcclxuICAgIGF1dGhvcjogXCJNaWNoYWVsIENyaWNodG9uXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbi8vIFJlc29sdmVycyBkZWZpbmUgdGhlIHRlY2huaXF1ZSBmb3IgZmV0Y2hpbmcgdGhlIHR5cGVzIGRlZmluZWQgaW4gdGhlXHJcbi8vIHNjaGVtYS4gVGhpcyByZXNvbHZlciByZXRyaWV2ZXMgYm9va3MgZnJvbSB0aGUgXCJib29rc1wiIGFycmF5IGFib3ZlLlxyXG5jb25zdCByZXNvbHZlcnMgPSB7XHJcbiAgUXVlcnk6IHtcclxuICAgIGJvb2tzOiAoKSA9PiBib29rcyxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgYXBvbGxvU2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XHJcbiAgc2NoZW1hLFxyXG4gIGNvbnRleHQ6ICh7IHJlcSwgcmVzIH0pID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlcSxcclxuICAgIH07XHJcbiAgfSxcclxuICBwbGF5Z3JvdW5kOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYge1xyXG4gICAgc2V0dGluZ3M6IHtcclxuICAgICAgXCJlZGl0b3IudGhlbWVcIjogXCJsaWdodFwiLFxyXG4gICAgfSxcclxuICAgIHRhYnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGVuZHBvaW50OlxyXG4gICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgICAgICAgICAgID8gcHJvY2Vzcy5lbnYuSEVST0tVX1BST0RVQ1RJT05fVVJMICsgcHJvY2Vzcy5lbnYuUExBWUdST1VORF9VUkxcclxuICAgICAgICAgICAgOiBgaHR0cDovL2xvY2FsaG9zdDoke3Byb2Nlc3MuZW52LlBPUlR9L2FwaWAsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgaW50cm9zcGVjdGlvbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwb2xsb1NlcnZlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/apolloServer.js\n");

/***/ }),

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _sentry_node__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sentry/node */ \"@sentry/node\");\n/* harmony import */ var _sentry_node__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sentry_node__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _webpack_config_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../webpack.config.js */ \"./webpack.config.js\");\n/* harmony import */ var _webpack_config_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _apolloServer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./apolloServer */ \"./api/apolloServer.js\");\n/* harmony import */ var _shared_db_db__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/db/db */ \"./shared/db/db.js\");\n\n\n\n\n\n\n\n\n\n\nvar debug = debug__WEBPACK_IMPORTED_MODULE_2___default()(\"api\");\ndebug(\"logging with debug enabled :-)\");\ndebug(\"Starting Server <-->\");\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar port =  true ? parseInt(\"5000\", 10) : undefined;\nvar compiler = webpack__WEBPACK_IMPORTED_MODULE_3___default()(_webpack_config_js__WEBPACK_IMPORTED_MODULE_7___default.a);\nprocess.env === \"production\" ? _sentry_node__WEBPACK_IMPORTED_MODULE_6__[\"init\"]({\n  dsn: \"https://6d36e889e7854877ad60d4246f28241f@o330131.ingest.sentry.io/5241786\"\n}) : null;\nprocess.env === \"production\" ? app.use(_sentry_node__WEBPACK_IMPORTED_MODULE_6__[\"Handlers\"].requestHandler()) : null;\napp.use(cors__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_1___default()());\napp.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4___default()(compiler, {\n  publicPath: _webpack_config_js__WEBPACK_IMPORTED_MODULE_7___default.a.output.publicPath\n}));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](\"public\"));\napp.get(\"/\", function (req, res) {\n  return res.sendFile(\"index.html\");\n});\napp.get(\"/debug-sentry\", function mainHandler(req, res) {\n  throw new Error(\"My first Sentry error!\");\n});\nObject(_shared_db_db__WEBPACK_IMPORTED_MODULE_9__[\"connectMongoDB\"])().then(function (db) {\n  debug(\"connection db object \".concat(db));\n  _apolloServer__WEBPACK_IMPORTED_MODULE_8__[\"default\"].applyMiddleware({\n    app: app,\n    path: \"/api\"\n  });\n  _apolloServer__WEBPACK_IMPORTED_MODULE_8__[\"default\"].context = function (_ref) {\n    var req = _ref.req,\n        res = _ref.res;\n    return {\n      req: req,\n      db: db\n    };\n  }, app.listen(port, function () {\n    return debug(\"GraphQL Server running on port \".concat(port, \"/api\"));\n  });\n});\n\nif (process.env === \"production\") {\n  app.use(_sentry_node__WEBPACK_IMPORTED_MODULE_6__[\"Handlers\"].errorHandler());\n  app.use(function onError(err, req, res, next) {\n    // The error id is attached to `res.sentry` to be returned\n    // and optionally displayed to the user for support.\n    res.statusCode = 500;\n    res.end(res.sentry + \"\\n\");\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvaW5kZXguanM/NmNjYyJdLCJuYW1lcyI6WyJkZWJ1ZyIsIkRlYnVnIiwiYXBwIiwiZXhwcmVzcyIsInBvcnQiLCJwcm9jZXNzIiwicGFyc2VJbnQiLCJjb21waWxlciIsIndlYnBhY2siLCJjb25maWciLCJlbnYiLCJTZW50cnkiLCJkc24iLCJTRU5UUllfRFNOIiwidXNlIiwicmVxdWVzdEhhbmRsZXIiLCJjb3JzIiwiY29tcHJlc3Npb24iLCJ3ZWJwYWNrRGV2TWlkZGxld2FyZSIsInB1YmxpY1BhdGgiLCJvdXRwdXQiLCJnZXQiLCJyZXEiLCJyZXMiLCJzZW5kRmlsZSIsIm1haW5IYW5kbGVyIiwiRXJyb3IiLCJjb25uZWN0TW9uZ29EQiIsInRoZW4iLCJkYiIsImFwb2xsb1NlcnZlciIsImFwcGx5TWlkZGxld2FyZSIsInBhdGgiLCJQTEFZR1JPVU5EX1VSTCIsImNvbnRleHQiLCJsaXN0ZW4iLCJlcnJvckhhbmRsZXIiLCJvbkVycm9yIiwiZXJyIiwibmV4dCIsInN0YXR1c0NvZGUiLCJlbmQiLCJzZW50cnkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLDRDQUFLLENBQUMsS0FBRCxDQUFuQjtBQUNBRCxLQUFLLENBQUMsZ0NBQUQsQ0FBTDtBQUNBQSxLQUFLLENBQUMsc0JBQUQsQ0FBTDtBQUVBLElBQU1FLEdBQUcsR0FBR0MsOENBQU8sRUFBbkI7QUFDQSxJQUFNQyxJQUFJLEdBQUdDLEtBQUEsR0FBbUJDLFFBQVEsQ0FBQ0QsTUFBRCxFQUFtQixFQUFuQixDQUEzQixHQUFvRCxTQUFqRTtBQUNBLElBQU1FLFFBQVEsR0FBR0MsOENBQU8sQ0FBQ0MseURBQUQsQ0FBeEI7QUFFQUosT0FBTyxDQUFDSyxHQUFSLEtBQWdCLFlBQWhCLEdBQ0lDLGlEQUFBLENBQVk7QUFBRUMsS0FBRyxFQUFFUCwyRUFBc0JRO0FBQTdCLENBQVosQ0FESixHQUVJLElBRko7QUFJQVIsT0FBTyxDQUFDSyxHQUFSLEtBQWdCLFlBQWhCLEdBQStCUixHQUFHLENBQUNZLEdBQUosQ0FBUUgscURBQUEsQ0FBZ0JJLGNBQWhCLEVBQVIsQ0FBL0IsR0FBMkUsSUFBM0U7QUFDQWIsR0FBRyxDQUFDWSxHQUFKLENBQVFFLDJDQUFJLEVBQVo7QUFDQWQsR0FBRyxDQUFDWSxHQUFKLENBQVFHLGtEQUFXLEVBQW5CO0FBQ0FmLEdBQUcsQ0FBQ1ksR0FBSixDQUNFSSw2REFBb0IsQ0FBQ1gsUUFBRCxFQUFXO0FBQzdCWSxZQUFVLEVBQUVWLHlEQUFNLENBQUNXLE1BQVAsQ0FBY0Q7QUFERyxDQUFYLENBRHRCO0FBS0FqQixHQUFHLENBQUNZLEdBQUosQ0FBUVgsOENBQU8sVUFBUCxDQUFlLFFBQWYsQ0FBUjtBQUVBRCxHQUFHLENBQUNtQixHQUFKLENBQVEsR0FBUixFQUFhLFVBQUNDLEdBQUQsRUFBTUMsR0FBTjtBQUFBLFNBQWNBLEdBQUcsQ0FBQ0MsUUFBSixDQUFhLFlBQWIsQ0FBZDtBQUFBLENBQWI7QUFDQXRCLEdBQUcsQ0FBQ21CLEdBQUosQ0FBUSxlQUFSLEVBQXlCLFNBQVNJLFdBQVQsQ0FBcUJILEdBQXJCLEVBQTBCQyxHQUExQixFQUErQjtBQUN0RCxRQUFNLElBQUlHLEtBQUosQ0FBVSx3QkFBVixDQUFOO0FBQ0QsQ0FGRDtBQUlBQyxvRUFBYyxHQUFHQyxJQUFqQixDQUFzQixVQUFDQyxFQUFELEVBQVE7QUFDNUI3QixPQUFLLGdDQUF5QjZCLEVBQXpCLEVBQUw7QUFDQUMsdURBQVksQ0FBQ0MsZUFBYixDQUE2QjtBQUFFN0IsT0FBRyxFQUFIQSxHQUFGO0FBQU84QixRQUFJLEVBQUUzQixNQUEwQjRCO0FBQXZDLEdBQTdCO0FBQ0NILHVEQUFZLENBQUNJLE9BQWIsR0FBdUIsZ0JBQWtCO0FBQUEsUUFBZlosR0FBZSxRQUFmQSxHQUFlO0FBQUEsUUFBVkMsR0FBVSxRQUFWQSxHQUFVO0FBQ3hDLFdBQU87QUFDTEQsU0FBRyxFQUFIQSxHQURLO0FBRUxPLFFBQUUsRUFBRkE7QUFGSyxLQUFQO0FBSUQsR0FMRCxFQU1FM0IsR0FBRyxDQUFDaUMsTUFBSixDQUFXL0IsSUFBWCxFQUFpQjtBQUFBLFdBQU1KLEtBQUssMENBQW1DSSxJQUFuQyxVQUFYO0FBQUEsR0FBakIsQ0FORjtBQU9ELENBVkQ7O0FBWUEsSUFBSUMsT0FBTyxDQUFDSyxHQUFSLEtBQWdCLFlBQXBCLEVBQWtDO0FBQ2hDUixLQUFHLENBQUNZLEdBQUosQ0FBUUgscURBQUEsQ0FBZ0J5QixZQUFoQixFQUFSO0FBQ0FsQyxLQUFHLENBQUNZLEdBQUosQ0FBUSxTQUFTdUIsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0JoQixHQUF0QixFQUEyQkMsR0FBM0IsRUFBZ0NnQixJQUFoQyxFQUFzQztBQUM1QztBQUNBO0FBQ0FoQixPQUFHLENBQUNpQixVQUFKLEdBQWlCLEdBQWpCO0FBQ0FqQixPQUFHLENBQUNrQixHQUFKLENBQVFsQixHQUFHLENBQUNtQixNQUFKLEdBQWEsSUFBckI7QUFDRCxHQUxEO0FBTUQiLCJmaWxlIjoiLi9hcGkvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSBcImNvbXByZXNzaW9uXCI7XHJcbmltcG9ydCBEZWJ1ZyBmcm9tIFwiZGVidWdcIjtcclxuaW1wb3J0IHdlYnBhY2sgZnJvbSBcIndlYnBhY2tcIjtcclxuaW1wb3J0IHdlYnBhY2tEZXZNaWRkbGV3YXJlIGZyb20gXCJ3ZWJwYWNrLWRldi1taWRkbGV3YXJlXCI7XHJcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XHJcbmltcG9ydCAqIGFzIFNlbnRyeSBmcm9tIFwiQHNlbnRyeS9ub2RlXCI7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi93ZWJwYWNrLmNvbmZpZy5qc1wiO1xyXG5pbXBvcnQgYXBvbGxvU2VydmVyIGZyb20gXCIuL2Fwb2xsb1NlcnZlclwiO1xyXG5pbXBvcnQgeyBjb25uZWN0TW9uZ29EQiB9IGZyb20gXCIuLi9zaGFyZWQvZGIvZGJcIjtcclxuXHJcbmNvbnN0IGRlYnVnID0gRGVidWcoXCJhcGlcIik7XHJcbmRlYnVnKFwibG9nZ2luZyB3aXRoIGRlYnVnIGVuYWJsZWQgOi0pXCIpO1xyXG5kZWJ1ZyhcIlN0YXJ0aW5nIFNlcnZlciA8LS0+XCIpO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCA/IHBhcnNlSW50KHByb2Nlc3MuZW52LlBPUlQsIDEwKSA6IDQwMDA7XHJcbmNvbnN0IGNvbXBpbGVyID0gd2VicGFjayhjb25maWcpO1xyXG5cclxucHJvY2Vzcy5lbnYgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgPyBTZW50cnkuaW5pdCh7IGRzbjogcHJvY2Vzcy5lbnYuU0VOVFJZX0RTTiB9KVxyXG4gIDogbnVsbDtcclxuXHJcbnByb2Nlc3MuZW52ID09PSBcInByb2R1Y3Rpb25cIiA/IGFwcC51c2UoU2VudHJ5LkhhbmRsZXJzLnJlcXVlc3RIYW5kbGVyKCkpIDogbnVsbDtcclxuYXBwLnVzZShjb3JzKCkpO1xyXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xyXG5hcHAudXNlKFxyXG4gIHdlYnBhY2tEZXZNaWRkbGV3YXJlKGNvbXBpbGVyLCB7XHJcbiAgICBwdWJsaWNQYXRoOiBjb25maWcub3V0cHV0LnB1YmxpY1BhdGgsXHJcbiAgfSlcclxuKTtcclxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhcInB1YmxpY1wiKSk7XHJcblxyXG5hcHAuZ2V0KFwiL1wiLCAocmVxLCByZXMpID0+IHJlcy5zZW5kRmlsZShcImluZGV4Lmh0bWxcIikpO1xyXG5hcHAuZ2V0KFwiL2RlYnVnLXNlbnRyeVwiLCBmdW5jdGlvbiBtYWluSGFuZGxlcihyZXEsIHJlcykge1xyXG4gIHRocm93IG5ldyBFcnJvcihcIk15IGZpcnN0IFNlbnRyeSBlcnJvciFcIik7XHJcbn0pO1xyXG5cclxuY29ubmVjdE1vbmdvREIoKS50aGVuKChkYikgPT4ge1xyXG4gIGRlYnVnKGBjb25uZWN0aW9uIGRiIG9iamVjdCAke2RifWApO1xyXG4gIGFwb2xsb1NlcnZlci5hcHBseU1pZGRsZXdhcmUoeyBhcHAsIHBhdGg6IHByb2Nlc3MuZW52LlBMQVlHUk9VTkRfVVJMIH0pO1xyXG4gIChhcG9sbG9TZXJ2ZXIuY29udGV4dCA9ICh7IHJlcSwgcmVzIH0pID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlcSxcclxuICAgICAgZGIsXHJcbiAgICB9O1xyXG4gIH0pLFxyXG4gICAgYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiBkZWJ1ZyhgR3JhcGhRTCBTZXJ2ZXIgcnVubmluZyBvbiBwb3J0ICR7cG9ydH0vYXBpYCkpO1xyXG59KTtcclxuXHJcbmlmIChwcm9jZXNzLmVudiA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICBhcHAudXNlKFNlbnRyeS5IYW5kbGVycy5lcnJvckhhbmRsZXIoKSk7XHJcbiAgYXBwLnVzZShmdW5jdGlvbiBvbkVycm9yKGVyciwgcmVxLCByZXMsIG5leHQpIHtcclxuICAgIC8vIFRoZSBlcnJvciBpZCBpcyBhdHRhY2hlZCB0byBgcmVzLnNlbnRyeWAgdG8gYmUgcmV0dXJuZWRcclxuICAgIC8vIGFuZCBvcHRpb25hbGx5IGRpc3BsYXllZCB0byB0aGUgdXNlciBmb3Igc3VwcG9ydC5cclxuICAgIHJlcy5zdGF0dXNDb2RlID0gNTAwO1xyXG4gICAgcmVzLmVuZChyZXMuc2VudHJ5ICsgXCJcXG5cIik7XHJcbiAgfSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/index.js\n");

/***/ }),

/***/ "./api/queries/story/index.js":
/*!************************************!*\
  !*** ./api/queries/story/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stories */ \"./api/queries/story/stories.js\");\n\nvar StoryQueries = {\n  Query: {\n    allStories: _stories__WEBPACK_IMPORTED_MODULE_0__[\"allStories\"],\n    storyById: _stories__WEBPACK_IMPORTED_MODULE_0__[\"storyById\"],\n    primaryStories: _stories__WEBPACK_IMPORTED_MODULE_0__[\"primaryStories\"],\n    recentStories: _stories__WEBPACK_IMPORTED_MODULE_0__[\"recentStories\"],\n    stories: _stories__WEBPACK_IMPORTED_MODULE_0__[\"stories\"]\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (StoryQueries);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvcXVlcmllcy9zdG9yeS9pbmRleC5qcz8wNTA3Il0sIm5hbWVzIjpbIlN0b3J5UXVlcmllcyIsIlF1ZXJ5IiwiYWxsU3RvcmllcyIsInN0b3J5QnlJZCIsInByaW1hcnlTdG9yaWVzIiwicmVjZW50U3RvcmllcyIsInN0b3JpZXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQVFBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsT0FBSyxFQUFFO0FBQ0xDLGNBQVUsRUFBVkEsbURBREs7QUFFTEMsYUFBUyxFQUFUQSxrREFGSztBQUdMQyxrQkFBYyxFQUFkQSx1REFISztBQUlMQyxpQkFBYSxFQUFiQSxzREFKSztBQUtMQyxXQUFPLEVBQVBBLGdEQUFPQTtBQUxGO0FBRFksQ0FBckI7QUFVZU4sMkVBQWYiLCJmaWxlIjoiLi9hcGkvcXVlcmllcy9zdG9yeS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgYWxsU3RvcmllcyxcclxuICBzdG9yeUJ5SWQsXHJcbiAgcHJpbWFyeVN0b3JpZXMsXHJcbiAgcmVjZW50U3RvcmllcyxcclxuICBzdG9yaWVzLFxyXG59IGZyb20gXCIuL3N0b3JpZXNcIjtcclxuXHJcbmNvbnN0IFN0b3J5UXVlcmllcyA9IHtcclxuICBRdWVyeToge1xyXG4gICAgYWxsU3RvcmllcyxcclxuICAgIHN0b3J5QnlJZCxcclxuICAgIHByaW1hcnlTdG9yaWVzLFxyXG4gICAgcmVjZW50U3RvcmllcyxcclxuICAgIHN0b3JpZXMsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3J5UXVlcmllcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/queries/story/index.js\n");

/***/ }),

/***/ "./api/queries/story/stories.js":
/*!**************************************!*\
  !*** ./api/queries/story/stories.js ***!
  \**************************************/
/*! exports provided: allStories, storyById, primaryStories, recentStories, stories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allStories\", function() { return allStories; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storyById\", function() { return storyById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"primaryStories\", function() { return primaryStories; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"recentStories\", function() { return recentStories; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"stories\", function() { return stories; });\n/* harmony import */ var _shared_db_queries_story__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/db/queries/story */ \"./shared/db/queries/story.js\");\n\nvar allStories = function allStories(_, __, _ref) {\n  var db = _ref.db;\n  return Object(_shared_db_queries_story__WEBPACK_IMPORTED_MODULE_0__[\"getAllStories\"])(db)();\n};\nvar storyById = function storyById(_, _ref2, _ref3) {\n  var ID = _ref2.ID;\n  var db = _ref3.db;\n  return Object(_shared_db_queries_story__WEBPACK_IMPORTED_MODULE_0__[\"getStoryById\"])(db, ID)();\n};\nvar primaryStories = function primaryStories(_, __, _ref4) {\n  var db = _ref4.db;\n  return Object(_shared_db_queries_story__WEBPACK_IMPORTED_MODULE_0__[\"getPrimayStories\"])(db)();\n};\nvar recentStories = function recentStories(_, __, _ref5) {\n  var db = _ref5.db;\n  return Object(_shared_db_queries_story__WEBPACK_IMPORTED_MODULE_0__[\"getRecentStories\"])(db)();\n};\nvar stories = function stories(_, _ref6, _ref7) {\n  var first = _ref6.first,\n      after = _ref6.after;\n  var db = _ref7.db;\n  return Object(_shared_db_queries_story__WEBPACK_IMPORTED_MODULE_0__[\"getStories\"])(db, first, after)();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvcXVlcmllcy9zdG9yeS9zdG9yaWVzLmpzPzk3NGEiXSwibmFtZXMiOlsiYWxsU3RvcmllcyIsIl8iLCJfXyIsImRiIiwiZ2V0QWxsU3RvcmllcyIsInN0b3J5QnlJZCIsIklEIiwiZ2V0U3RvcnlCeUlkIiwicHJpbWFyeVN0b3JpZXMiLCJnZXRQcmltYXlTdG9yaWVzIiwicmVjZW50U3RvcmllcyIsImdldFJlY2VudFN0b3JpZXMiLCJzdG9yaWVzIiwiZmlyc3QiLCJhZnRlciIsImdldFN0b3JpZXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxDQUFELEVBQUlDLEVBQUosUUFBbUI7QUFBQSxNQUFUQyxFQUFTLFFBQVRBLEVBQVM7QUFDM0MsU0FBT0MsOEVBQWEsQ0FBQ0QsRUFBRCxDQUFiLEVBQVA7QUFDRCxDQUZNO0FBSUEsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0osQ0FBRCxnQkFBdUI7QUFBQSxNQUFqQkssRUFBaUIsU0FBakJBLEVBQWlCO0FBQUEsTUFBVEgsRUFBUyxTQUFUQSxFQUFTO0FBQzlDLFNBQU9JLDZFQUFZLENBQUNKLEVBQUQsRUFBS0csRUFBTCxDQUFaLEVBQVA7QUFDRCxDQUZNO0FBSUEsSUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDUCxDQUFELEVBQUlDLEVBQUosU0FBbUI7QUFBQSxNQUFUQyxFQUFTLFNBQVRBLEVBQVM7QUFDL0MsU0FBT00saUZBQWdCLENBQUNOLEVBQUQsQ0FBaEIsRUFBUDtBQUNELENBRk07QUFJQSxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNULENBQUQsRUFBSUMsRUFBSixTQUFtQjtBQUFBLE1BQVRDLEVBQVMsU0FBVEEsRUFBUztBQUM5QyxTQUFPUSxpRkFBZ0IsQ0FBQ1IsRUFBRCxDQUFoQixFQUFQO0FBQ0QsQ0FGTTtBQUlBLElBQU1TLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNYLENBQUQsZ0JBQWlDO0FBQUEsTUFBM0JZLEtBQTJCLFNBQTNCQSxLQUEyQjtBQUFBLE1BQXBCQyxLQUFvQixTQUFwQkEsS0FBb0I7QUFBQSxNQUFUWCxFQUFTLFNBQVRBLEVBQVM7QUFDdEQsU0FBT1ksMkVBQVUsQ0FBQ1osRUFBRCxFQUFLVSxLQUFMLEVBQVlDLEtBQVosQ0FBVixFQUFQO0FBQ0QsQ0FGTSIsImZpbGUiOiIuL2FwaS9xdWVyaWVzL3N0b3J5L3N0b3JpZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGdldEFsbFN0b3JpZXMsXHJcbiAgZ2V0U3RvcnlCeUlkLFxyXG4gIGdldFByaW1heVN0b3JpZXMsXHJcbiAgZ2V0UmVjZW50U3RvcmllcyxcclxuICBnZXRTdG9yaWVzLFxyXG59IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvZGIvcXVlcmllcy9zdG9yeVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFsbFN0b3JpZXMgPSAoXywgX18sIHsgZGIgfSkgPT4ge1xyXG4gIHJldHVybiBnZXRBbGxTdG9yaWVzKGRiKSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3J5QnlJZCA9IChfLCB7IElEIH0sIHsgZGIgfSkgPT4ge1xyXG4gIHJldHVybiBnZXRTdG9yeUJ5SWQoZGIsIElEKSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByaW1hcnlTdG9yaWVzID0gKF8sIF9fLCB7IGRiIH0pID0+IHtcclxuICByZXR1cm4gZ2V0UHJpbWF5U3RvcmllcyhkYikoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWNlbnRTdG9yaWVzID0gKF8sIF9fLCB7IGRiIH0pID0+IHtcclxuICByZXR1cm4gZ2V0UmVjZW50U3RvcmllcyhkYikoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yaWVzID0gKF8sIHsgZmlyc3QsIGFmdGVyIH0sIHsgZGIgfSkgPT4ge1xyXG4gIHJldHVybiBnZXRTdG9yaWVzKGRiLCBmaXJzdCwgYWZ0ZXIpKCk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/queries/story/stories.js\n");

/***/ }),

/***/ "./api/queries/user/all-users.js":
/*!***************************************!*\
  !*** ./api/queries/user/all-users.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_db_queries_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/db/queries/user */ \"./shared/db/queries/user.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_, __, _ref) {\n  var db = _ref.db;\n  return Object(_shared_db_queries_user__WEBPACK_IMPORTED_MODULE_0__[\"getAllUsers\"])(db)();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvcXVlcmllcy91c2VyL2FsbC11c2Vycy5qcz9hOGI4Il0sIm5hbWVzIjpbIl8iLCJfXyIsImRiIiwiZ2V0QWxsVXNlcnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVlLHlFQUFDQSxDQUFELEVBQUlDLEVBQUosUUFBbUI7QUFBQSxNQUFUQyxFQUFTLFFBQVRBLEVBQVM7QUFDaEMsU0FBT0MsMkVBQVcsQ0FBQ0QsRUFBRCxDQUFYLEVBQVA7QUFDRCxDQUZEIiwiZmlsZSI6Ii4vYXBpL3F1ZXJpZXMvdXNlci9hbGwtdXNlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBbGxVc2VycyB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvZGIvcXVlcmllcy91c2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoXywgX18sIHsgZGIgfSkgPT4ge1xyXG4gIHJldHVybiBnZXRBbGxVc2VycyhkYikoKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/queries/user/all-users.js\n");

/***/ }),

/***/ "./api/queries/user/current-user.js":
/*!******************************************!*\
  !*** ./api/queries/user/current-user.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (args) {\n  if (args.id) return args.loaders.user.load(args.id);\n  if (args.username) return loaders.userByUsername.load(args.username);\n  return null;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvcXVlcmllcy91c2VyL2N1cnJlbnQtdXNlci5qcz8zYzVlIl0sIm5hbWVzIjpbImFyZ3MiLCJpZCIsImxvYWRlcnMiLCJ1c2VyIiwibG9hZCIsInVzZXJuYW1lIiwidXNlckJ5VXNlcm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQWUseUVBQUFBLElBQUksRUFBSTtBQUNyQixNQUFJQSxJQUFJLENBQUNDLEVBQVQsRUFBYSxPQUFPRCxJQUFJLENBQUNFLE9BQUwsQ0FBYUMsSUFBYixDQUFrQkMsSUFBbEIsQ0FBdUJKLElBQUksQ0FBQ0MsRUFBNUIsQ0FBUDtBQUNiLE1BQUlELElBQUksQ0FBQ0ssUUFBVCxFQUFtQixPQUFPSCxPQUFPLENBQUNJLGNBQVIsQ0FBdUJGLElBQXZCLENBQTRCSixJQUFJLENBQUNLLFFBQWpDLENBQVA7QUFDbkIsU0FBTyxJQUFQO0FBQ0QsQ0FKRCIsImZpbGUiOiIuL2FwaS9xdWVyaWVzL3VzZXIvY3VycmVudC11c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXJncyA9PiB7XHJcbiAgaWYgKGFyZ3MuaWQpIHJldHVybiBhcmdzLmxvYWRlcnMudXNlci5sb2FkKGFyZ3MuaWQpO1xyXG4gIGlmIChhcmdzLnVzZXJuYW1lKSByZXR1cm4gbG9hZGVycy51c2VyQnlVc2VybmFtZS5sb2FkKGFyZ3MudXNlcm5hbWUpO1xyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/queries/user/current-user.js\n");

/***/ }),

/***/ "./api/queries/user/index.js":
/*!***********************************!*\
  !*** ./api/queries/user/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-user */ \"./api/queries/user/current-user.js\");\n/* harmony import */ var _all_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-users */ \"./api/queries/user/all-users.js\");\n\n\nvar UserQueries = {\n  Query: {\n    currentUser: _current_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    getAllUsers: _all_users__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserQueries);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvcXVlcmllcy91c2VyL2luZGV4LmpzPzk1Y2YiXSwibmFtZXMiOlsiVXNlclF1ZXJpZXMiLCJRdWVyeSIsImN1cnJlbnRVc2VyIiwiZ2V0QWxsVXNlcnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUc7QUFDbEJDLE9BQUssRUFBRTtBQUNMQyxlQUFXLEVBQVhBLHFEQURLO0FBRUxDLGVBQVcsRUFBWEEsa0RBQVdBO0FBRk47QUFEVyxDQUFwQjtBQU9lSCwwRUFBZiIsImZpbGUiOiIuL2FwaS9xdWVyaWVzL3VzZXIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3VycmVudFVzZXIgZnJvbSBcIi4vY3VycmVudC11c2VyXCI7XHJcbmltcG9ydCBnZXRBbGxVc2VycyBmcm9tIFwiLi9hbGwtdXNlcnNcIjtcclxuXHJcbmNvbnN0IFVzZXJRdWVyaWVzID0ge1xyXG4gIFF1ZXJ5OiB7XHJcbiAgICBjdXJyZW50VXNlcixcclxuICAgIGdldEFsbFVzZXJzXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclF1ZXJpZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/queries/user/index.js\n");

/***/ }),

/***/ "./api/schema/index.js":
/*!*****************************!*\
  !*** ./api/schema/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tools */ \"graphql-tools\");\n/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tools__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ \"./api/types/index.js\");\n/* harmony import */ var _queries_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../queries/user */ \"./api/queries/user/index.js\");\n/* harmony import */ var _queries_story__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../queries/story */ \"./api/queries/story/index.js\");\n\n\n\n\n\n\nvar debug = debug__WEBPACK_IMPORTED_MODULE_0___default()(\"api:schema\");\ndebug(\"creating schema for graphql\");\nvar IS_PROD = \"development\" === \"production\";\nvar ROOT = \"\\ntype Query{\\n    dummy:String\\n}\\ntype Mutation{\\n    dummy:String\\n}\\nschema{\\n    query:Query\\n    mutation:Mutation\\n}\\n\";\nvar resolvers = Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"merge\"])({}, _queries_user__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _queries_story__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nvar schema = Object(graphql_tools__WEBPACK_IMPORTED_MODULE_1__[\"makeExecutableSchema\"])({\n  typeDefs: [ROOT, _types__WEBPACK_IMPORTED_MODULE_3__[\"User\"], _types__WEBPACK_IMPORTED_MODULE_3__[\"Story\"]],\n  resolvers: resolvers\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (schema);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvc2NoZW1hL2luZGV4LmpzPzBmOTEiXSwibmFtZXMiOlsiZGVidWciLCJEZWJ1ZyIsIklTX1BST0QiLCJwcm9jZXNzIiwiUk9PVCIsInJlc29sdmVycyIsIm1lcmdlIiwiVXNlclF1ZXJpZXMiLCJTdG9yeVF1ZXJpZXMiLCJzY2hlbWEiLCJtYWtlRXhlY3V0YWJsZVNjaGVtYSIsInR5cGVEZWZzIiwiVXNlciIsIlN0b3J5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0MsNENBQUssQ0FBQyxZQUFELENBQW5CO0FBQ0FELEtBQUssQ0FBQyw2QkFBRCxDQUFMO0FBRUEsSUFBTUUsT0FBTyxHQUFHQyxhQUFBLEtBQXlCLFlBQXpDO0FBRUEsSUFBTUMsSUFBSSxrSUFBVjtBQWFBLElBQU1DLFNBQVMsR0FBR0Msb0RBQUssQ0FBQyxFQUFELEVBQUtDLHFEQUFMLEVBQWtCQyxzREFBbEIsQ0FBdkI7QUFFQSxJQUFNQyxNQUFNLEdBQUdDLDBFQUFvQixDQUFDO0FBQ2xDQyxVQUFRLEVBQUUsQ0FBQ1AsSUFBRCxFQUFPUSwyQ0FBUCxFQUFhQyw0Q0FBYixDQUR3QjtBQUVsQ1IsV0FBUyxFQUFUQTtBQUZrQyxDQUFELENBQW5DO0FBS2VJLHFFQUFmIiwiZmlsZSI6Ii4vYXBpL3NjaGVtYS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEZWJ1ZyBmcm9tIFwiZGVidWdcIjtcclxuaW1wb3J0IHtcclxuICBtYWtlRXhlY3V0YWJsZVNjaGVtYSxcclxuICBhZGRTY2hlbWFMZXZlbFJlc29sdmVGdW5jdGlvbixcclxufSBmcm9tIFwiZ3JhcGhxbC10b29sc1wiO1xyXG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbmltcG9ydCB7IFVzZXIsIFN0b3J5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCBVc2VyUXVlcmllcyBmcm9tIFwiLi4vcXVlcmllcy91c2VyXCI7XHJcbmltcG9ydCBTdG9yeVF1ZXJpZXMgZnJvbSBcIi4uL3F1ZXJpZXMvc3RvcnlcIjtcclxuXHJcbmNvbnN0IGRlYnVnID0gRGVidWcoXCJhcGk6c2NoZW1hXCIpO1xyXG5kZWJ1ZyhcImNyZWF0aW5nIHNjaGVtYSBmb3IgZ3JhcGhxbFwiKTtcclxuXHJcbmNvbnN0IElTX1BST0QgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCI7XHJcblxyXG5jb25zdCBST09UID0gYFxyXG50eXBlIFF1ZXJ5e1xyXG4gICAgZHVtbXk6U3RyaW5nXHJcbn1cclxudHlwZSBNdXRhdGlvbntcclxuICAgIGR1bW15OlN0cmluZ1xyXG59XHJcbnNjaGVtYXtcclxuICAgIHF1ZXJ5OlF1ZXJ5XHJcbiAgICBtdXRhdGlvbjpNdXRhdGlvblxyXG59XHJcbmA7XHJcblxyXG5jb25zdCByZXNvbHZlcnMgPSBtZXJnZSh7fSwgVXNlclF1ZXJpZXMsIFN0b3J5UXVlcmllcyk7XHJcblxyXG5jb25zdCBzY2hlbWEgPSBtYWtlRXhlY3V0YWJsZVNjaGVtYSh7XHJcbiAgdHlwZURlZnM6IFtST09ULCBVc2VyLCBTdG9yeV0sXHJcbiAgcmVzb2x2ZXJzLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNjaGVtYTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/schema/index.js\n");

/***/ }),

/***/ "./api/types/index.js":
/*!****************************!*\
  !*** ./api/types/index.js ***!
  \****************************/
/*! exports provided: User, Story */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./api/types/user.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _stories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stories */ \"./api/types/stories.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Story\", function() { return _stories__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvdHlwZXMvaW5kZXguanM/NDY2MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EiLCJmaWxlIjoiLi9hcGkvdHlwZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCBTdG9yeSBmcm9tIFwiLi9zdG9yaWVzXCI7XHJcblxyXG5leHBvcnQgeyBVc2VyLCBTdG9yeSB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/types/index.js\n");

/***/ }),

/***/ "./api/types/stories.js":
/*!******************************!*\
  !*** ./api/types/stories.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Story = \"\\n    type Story{\\n        _id:ID!\\n        category: String,\\n    shortDesc: String,\\n    fullStory: String,\\n    createdBy: String,\\n    createdAt: String,\\n    thumbnail: String,\\n    isPrimary: Boolean\\n    }\\n\\n    type PageInfo{\\n        endCursor:ID!\\n        hasNextPage:Boolean!\\n    }\\n\\n    type StoryEdge{\\n        cursor:ID!\\n        node:Story!\\n    }\\n\\n    type StoryConnection{\\n        edges:[StoryEdge]\\n        pageInfo:PageInfo\\n    }\\n\\n\\n    extend type Query{\\n        allStories:[Story]\\n        storyById(ID:String):Story\\n        primaryStories:[Story]\\n        recentStories:[Story]\\n        stories(first:Int!,after:ID):StoryConnection\\n    }\\n\\n\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (Story);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvdHlwZXMvc3Rvcmllcy5qcz82MDQ5Il0sIm5hbWVzIjpbIlN0b3J5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLElBQU1BLEtBQUssd3FCQUFYO0FBc0NlQSxvRUFBZiIsImZpbGUiOiIuL2FwaS90eXBlcy9zdG9yaWVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU3RvcnkgPSBgXHJcbiAgICB0eXBlIFN0b3J5e1xyXG4gICAgICAgIF9pZDpJRCFcclxuICAgICAgICBjYXRlZ29yeTogU3RyaW5nLFxyXG4gICAgc2hvcnREZXNjOiBTdHJpbmcsXHJcbiAgICBmdWxsU3Rvcnk6IFN0cmluZyxcclxuICAgIGNyZWF0ZWRCeTogU3RyaW5nLFxyXG4gICAgY3JlYXRlZEF0OiBTdHJpbmcsXHJcbiAgICB0aHVtYm5haWw6IFN0cmluZyxcclxuICAgIGlzUHJpbWFyeTogQm9vbGVhblxyXG4gICAgfVxyXG5cclxuICAgIHR5cGUgUGFnZUluZm97XHJcbiAgICAgICAgZW5kQ3Vyc29yOklEIVxyXG4gICAgICAgIGhhc05leHRQYWdlOkJvb2xlYW4hXHJcbiAgICB9XHJcblxyXG4gICAgdHlwZSBTdG9yeUVkZ2V7XHJcbiAgICAgICAgY3Vyc29yOklEIVxyXG4gICAgICAgIG5vZGU6U3RvcnkhXHJcbiAgICB9XHJcblxyXG4gICAgdHlwZSBTdG9yeUNvbm5lY3Rpb257XHJcbiAgICAgICAgZWRnZXM6W1N0b3J5RWRnZV1cclxuICAgICAgICBwYWdlSW5mbzpQYWdlSW5mb1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBleHRlbmQgdHlwZSBRdWVyeXtcclxuICAgICAgICBhbGxTdG9yaWVzOltTdG9yeV1cclxuICAgICAgICBzdG9yeUJ5SWQoSUQ6U3RyaW5nKTpTdG9yeVxyXG4gICAgICAgIHByaW1hcnlTdG9yaWVzOltTdG9yeV1cclxuICAgICAgICByZWNlbnRTdG9yaWVzOltTdG9yeV1cclxuICAgICAgICBzdG9yaWVzKGZpcnN0OkludCEsYWZ0ZXI6SUQpOlN0b3J5Q29ubmVjdGlvblxyXG4gICAgfVxyXG5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3J5O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/types/stories.js\n");

/***/ }),

/***/ "./api/types/user.js":
/*!***************************!*\
  !*** ./api/types/user.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar User = \"\\n    type User{\\n        id:ID!\\n        name:String\\n        firstName:String\\n        lastName:String\\n        userName:String\\n        email:String\\n        password:String\\n        profilePhoto:String\\n        coverPhoto:String,\\n        gender:String\\n        dob:String\\n        isOnline:Boolean\\n    }\\n\\n    extend type Query{\\n        user(id:ID,userName:String,firstName:String,lastName:String):User\\n        currentUser:User\\n        searchUsers(searchQry:String):[User]\\n        getAllUsers:[User]\\n    }\\n\\n    extend type Mutation{\\n        addUser(firstName:String,lastName:String,userName:String,email:String,password:String):User\\n    }\\n\\n\\n\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcGkvdHlwZXMvdXNlci5qcz84Y2ZhIl0sIm5hbWVzIjpbIlVzZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsSUFBTUEsSUFBSSx5cEJBQVY7QUE4QmVBLG1FQUFmIiwiZmlsZSI6Ii4vYXBpL3R5cGVzL3VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBVc2VyID0gYFxyXG4gICAgdHlwZSBVc2Vye1xyXG4gICAgICAgIGlkOklEIVxyXG4gICAgICAgIG5hbWU6U3RyaW5nXHJcbiAgICAgICAgZmlyc3ROYW1lOlN0cmluZ1xyXG4gICAgICAgIGxhc3ROYW1lOlN0cmluZ1xyXG4gICAgICAgIHVzZXJOYW1lOlN0cmluZ1xyXG4gICAgICAgIGVtYWlsOlN0cmluZ1xyXG4gICAgICAgIHBhc3N3b3JkOlN0cmluZ1xyXG4gICAgICAgIHByb2ZpbGVQaG90bzpTdHJpbmdcclxuICAgICAgICBjb3ZlclBob3RvOlN0cmluZyxcclxuICAgICAgICBnZW5kZXI6U3RyaW5nXHJcbiAgICAgICAgZG9iOlN0cmluZ1xyXG4gICAgICAgIGlzT25saW5lOkJvb2xlYW5cclxuICAgIH1cclxuXHJcbiAgICBleHRlbmQgdHlwZSBRdWVyeXtcclxuICAgICAgICB1c2VyKGlkOklELHVzZXJOYW1lOlN0cmluZyxmaXJzdE5hbWU6U3RyaW5nLGxhc3ROYW1lOlN0cmluZyk6VXNlclxyXG4gICAgICAgIGN1cnJlbnRVc2VyOlVzZXJcclxuICAgICAgICBzZWFyY2hVc2VycyhzZWFyY2hRcnk6U3RyaW5nKTpbVXNlcl1cclxuICAgICAgICBnZXRBbGxVc2VyczpbVXNlcl1cclxuICAgIH1cclxuXHJcbiAgICBleHRlbmQgdHlwZSBNdXRhdGlvbntcclxuICAgICAgICBhZGRVc2VyKGZpcnN0TmFtZTpTdHJpbmcsbGFzdE5hbWU6U3RyaW5nLHVzZXJOYW1lOlN0cmluZyxlbWFpbDpTdHJpbmcscGFzc3dvcmQ6U3RyaW5nKTpVc2VyXHJcbiAgICB9XHJcblxyXG5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/types/user.js\n");

/***/ }),

/***/ "./shared/db/create-query.js":
/*!***********************************!*\
  !*** ./shared/db/create-query.js ***!
  \***********************************/
/*! exports provided: createReadQuery, createWriteQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createReadQuery\", function() { return createReadQuery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createWriteQuery\", function() { return createWriteQuery; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar createReadQuery = function createReadQuery(callback) {\n  return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var input, result;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            input = callback();\n            _context.next = 4;\n            return input.query;\n\n          case 4:\n            result = _context.sent;\n            return _context.abrupt(\"return\", result);\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(\"Error\", _context.t0);\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 8]]);\n  }));\n};\nvar createWriteQuery = function createWriteQuery(callback) {\n  return /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    var input, result;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            input = callback();\n            _context2.next = 4;\n            return input.query;\n\n          case 4:\n            result = _context2.sent;\n\n            if (!(typeof result.run === \"function\")) {\n              _context2.next = 7;\n              break;\n            }\n\n            throw new Error(\"Error in write query\");\n\n          case 7:\n            return _context2.abrupt(\"return\", result);\n\n          case 10:\n            _context2.prev = 10;\n            _context2.t0 = _context2[\"catch\"](0);\n            console.log(\"Error\", _context2.t0);\n\n          case 13:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 10]]);\n  }));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaGFyZWQvZGIvY3JlYXRlLXF1ZXJ5LmpzPzBmMjUiXSwibmFtZXMiOlsiY3JlYXRlUmVhZFF1ZXJ5IiwiY2FsbGJhY2siLCJpbnB1dCIsInF1ZXJ5IiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZVdyaXRlUXVlcnkiLCJydW4iLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsUUFBUSxFQUFJO0FBQ3pDLDhFQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUdDLGlCQUZILEdBRVdELFFBQVEsRUFGbkI7QUFBQTtBQUFBLG1CQUdrQkMsS0FBSyxDQUFDQyxLQUh4Qjs7QUFBQTtBQUdHQyxrQkFISDtBQUFBLDZDQUlJQSxNQUpKOztBQUFBO0FBQUE7QUFBQTtBQU1IQyxtQkFBTyxDQUFDQyxHQUFSLENBQVksT0FBWjs7QUFORztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFQO0FBU0QsQ0FWTTtBQVdBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQU4sUUFBUSxFQUFJO0FBQzFDLDhFQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUdDLGlCQUZILEdBRVdELFFBQVEsRUFGbkI7QUFBQTtBQUFBLG1CQUdrQkMsS0FBSyxDQUFDQyxLQUh4Qjs7QUFBQTtBQUdHQyxrQkFISDs7QUFBQSxrQkFJQyxPQUFPQSxNQUFNLENBQUNJLEdBQWQsS0FBc0IsVUFKdkI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0JBS0ssSUFBSUMsS0FBSixDQUFVLHNCQUFWLENBTEw7O0FBQUE7QUFBQSw4Q0FNSUwsTUFOSjs7QUFBQTtBQUFBO0FBQUE7QUFRSEMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7O0FBUkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBUDtBQVdELENBWk0iLCJmaWxlIjoiLi9zaGFyZWQvZGIvY3JlYXRlLXF1ZXJ5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNyZWF0ZVJlYWRRdWVyeSA9IGNhbGxiYWNrID0+IHtcclxuICByZXR1cm4gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaW5wdXQgPSBjYWxsYmFjaygpO1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBpbnB1dC5xdWVyeTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcbmV4cG9ydCBjb25zdCBjcmVhdGVXcml0ZVF1ZXJ5ID0gY2FsbGJhY2sgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBpbnB1dCA9IGNhbGxiYWNrKCk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGlucHV0LnF1ZXJ5O1xyXG4gICAgICBpZiAodHlwZW9mIHJlc3VsdC5ydW4gPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciBpbiB3cml0ZSBxdWVyeVwiKTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./shared/db/create-query.js\n");

/***/ }),

/***/ "./shared/db/db.js":
/*!*************************!*\
  !*** ./shared/db/db.js ***!
  \*************************/
/*! exports provided: connectMongoDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectMongoDB\", function() { return connectMongoDB; });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar debug = debug__WEBPACK_IMPORTED_MODULE_1___default()(\"shared:db\");\nvar url = \"mongodb+srv://Abhinav22:Abhinav22@mumbai-cluster-4oquc.mongodb.net/\";\nvar db = null;\nvar connectMongoDB = function connectMongoDB() {\n  if (db) {\n    return db;\n  }\n\n  return mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect(url).then(function (client) {\n    debug(\"connected successfully to mongodb\", client);\n    return db = client.db(\"TheMirror\");\n  })[\"catch\"](function (error) {\n    return debug(\"Error connecting to mongodb \".concat(error));\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaGFyZWQvZGIvZGIuanM/MDIxZSJdLCJuYW1lcyI6WyJkZWJ1ZyIsIkRlYnVnIiwidXJsIiwicHJvY2VzcyIsImRiIiwiY29ubmVjdE1vbmdvREIiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJ0aGVuIiwiY2xpZW50IiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUdDLDRDQUFLLENBQUMsV0FBRCxDQUFuQjtBQUNBLElBQU1DLEdBQUcsR0FBR0MscUVBQVo7QUFDQSxJQUFJQyxFQUFFLEdBQUcsSUFBVDtBQUNPLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUNsQyxNQUFJRCxFQUFKLEVBQVE7QUFDTixXQUFPQSxFQUFQO0FBQ0Q7O0FBQ0QsU0FBT0UsbURBQVcsQ0FBQ0MsT0FBWixDQUFvQkwsR0FBcEIsRUFDSk0sSUFESSxDQUNDLFVBQUNDLE1BQUQsRUFBWTtBQUNoQlQsU0FBSyxDQUFDLG1DQUFELEVBQXNDUyxNQUF0QyxDQUFMO0FBQ0EsV0FBUUwsRUFBRSxHQUFHSyxNQUFNLENBQUNMLEVBQVAsQ0FBVUQsV0FBVixDQUFiO0FBQ0QsR0FKSSxXQUtFLFVBQUNPLEtBQUQ7QUFBQSxXQUFXVixLQUFLLHVDQUFnQ1UsS0FBaEMsRUFBaEI7QUFBQSxHQUxGLENBQVA7QUFNRCxDQVZNIiwiZmlsZSI6Ii4vc2hhcmVkL2RiL2RiLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQsIFNlcnZlciB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCBEZWJ1ZyBmcm9tIFwiZGVidWdcIjtcclxuXHJcbmNvbnN0IGRlYnVnID0gRGVidWcoXCJzaGFyZWQ6ZGJcIik7XHJcbmNvbnN0IHVybCA9IHByb2Nlc3MuZW52Lk1PTkdPX1VSTDtcclxubGV0IGRiID0gbnVsbDtcclxuZXhwb3J0IGNvbnN0IGNvbm5lY3RNb25nb0RCID0gKCkgPT4ge1xyXG4gIGlmIChkYikge1xyXG4gICAgcmV0dXJuIGRiO1xyXG4gIH1cclxuICByZXR1cm4gTW9uZ29DbGllbnQuY29ubmVjdCh1cmwpXHJcbiAgICAudGhlbigoY2xpZW50KSA9PiB7XHJcbiAgICAgIGRlYnVnKFwiY29ubmVjdGVkIHN1Y2Nlc3NmdWxseSB0byBtb25nb2RiXCIsIGNsaWVudCk7XHJcbiAgICAgIHJldHVybiAoZGIgPSBjbGllbnQuZGIocHJvY2Vzcy5lbnYuREJfTkFNRSkpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGRlYnVnKGBFcnJvciBjb25uZWN0aW5nIHRvIG1vbmdvZGIgJHtlcnJvcn1gKSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./shared/db/db.js\n");

/***/ }),

/***/ "./shared/db/index.js":
/*!****************************!*\
  !*** ./shared/db/index.js ***!
  \****************************/
/*! exports provided: createReadQuery, createWriteQuery, connectMongoDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-query */ \"./shared/db/create-query.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createReadQuery\", function() { return _create_query__WEBPACK_IMPORTED_MODULE_0__[\"createReadQuery\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createWriteQuery\", function() { return _create_query__WEBPACK_IMPORTED_MODULE_0__[\"createWriteQuery\"]; });\n\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db */ \"./shared/db/db.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"connectMongoDB\", function() { return _db__WEBPACK_IMPORTED_MODULE_1__[\"connectMongoDB\"]; });\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaGFyZWQvZGIvaW5kZXguanM/NDAxYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBIiwiZmlsZSI6Ii4vc2hhcmVkL2RiL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUmVhZFF1ZXJ5LCBjcmVhdGVXcml0ZVF1ZXJ5IH0gZnJvbSBcIi4vY3JlYXRlLXF1ZXJ5XCI7XHJcbmltcG9ydCB7IGNvbm5lY3RNb25nb0RCIH0gZnJvbSBcIi4vZGJcIjtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVJlYWRRdWVyeSwgY3JlYXRlV3JpdGVRdWVyeSwgY29ubmVjdE1vbmdvREIgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./shared/db/index.js\n");

/***/ }),

/***/ "./shared/db/queries/story.js":
/*!************************************!*\
  !*** ./shared/db/queries/story.js ***!
  \************************************/
/*! exports provided: getAllStories, getStoryById, getPrimayStories, getRecentStories, getStories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllStories\", function() { return getAllStories; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStoryById\", function() { return getStoryById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPrimayStories\", function() { return getPrimayStories; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRecentStories\", function() { return getRecentStories; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStories\", function() { return getStories; });\n/* harmony import */ var _create_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-query */ \"./shared/db/create-query.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar getAllStories = function getAllStories(db) {\n  return Object(_create_query__WEBPACK_IMPORTED_MODULE_0__[\"createReadQuery\"])(function () {\n    return {\n      query: db.collection(\"stories\").find({}).toArray().then(function (res) {\n        return res;\n      })\n    };\n  });\n};\nvar getStoryById = function getStoryById(db, ID) {\n  return Object(_create_query__WEBPACK_IMPORTED_MODULE_0__[\"createReadQuery\"])(function () {\n    return {\n      query: db.collection(\"stories\").find({\n        _id: Object(mongodb__WEBPACK_IMPORTED_MODULE_1__[\"ObjectId\"])(ID)\n      }).toArray().then(function (res) {\n        console.log(res, ID);\n        return res[0];\n      })\n    };\n  });\n};\nvar getPrimayStories = function getPrimayStories(db) {\n  return Object(_create_query__WEBPACK_IMPORTED_MODULE_0__[\"createReadQuery\"])(function () {\n    return {\n      query: db.collection(\"stories\").find({\n        isPrimary: true\n      }).sort({\n        _id: -1\n      }).limit(5).toArray().then(function (res) {\n        return res;\n      })\n    };\n  });\n};\nvar getRecentStories = function getRecentStories(db) {\n  return Object(_create_query__WEBPACK_IMPORTED_MODULE_0__[\"createReadQuery\"])(function () {\n    return {\n      query: db.collection(\"stories\").find({\n        isPrimary: false\n      }).sort({\n        id: -1\n      }).toArray().then(function (res) {\n        return res;\n      })\n    };\n  });\n};\nvar getStories = function getStories(db, first, after) {\n  var endCursor = null;\n  var cursorNumeric = Buffer.from(after, \"base64\").toString(\"ascii\");\n  if (!cursorNumeric) cursorNumeric = 0;\n  return Object(_create_query__WEBPACK_IMPORTED_MODULE_0__[\"createReadQuery\"])(function () {\n    return {\n      query: db.collection(\"stories\").find({\n        isPrimary: false,\n        _id: {\n          $gt: Object(mongodb__WEBPACK_IMPORTED_MODULE_1__[\"ObjectId\"])(cursorNumeric)\n        }\n      }).limit(first).toArray().then(function (res) {\n        return {\n          edges: res.map(function (story, index) {\n            if (index === res.length - 1) {\n              endCursor = Buffer.from(story._id.toString()).toString(\"base64\");\n              return {\n                cursor: endCursor,\n                node: story\n              };\n            }\n\n            return {\n              cursor: Buffer.from(story._id.toString()).toString(\"base64\"),\n              node: story\n            };\n          }),\n          pageInfo: {\n            endCursor: endCursor,\n            hasNextPage: new Promise(function (resolve, reject) {\n              db.collection(\"stories\").find({\n                isPrimary: false,\n                _id: {\n                  $gt: Object(mongodb__WEBPACK_IMPORTED_MODULE_1__[\"ObjectId\"])(Buffer.from(endCursor, \"base64\").toString(\"ascii\"))\n                }\n              }).count(function (err, count) {\n                if (count > 0) resolve(true);else resolve(false);\n              });\n            })\n          }\n        };\n      })\n    };\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaGFyZWQvZGIvcXVlcmllcy9zdG9yeS5qcz9mMTI5Il0sIm5hbWVzIjpbImdldEFsbFN0b3JpZXMiLCJkYiIsImNyZWF0ZVJlYWRRdWVyeSIsInF1ZXJ5IiwiY29sbGVjdGlvbiIsImZpbmQiLCJ0b0FycmF5IiwidGhlbiIsInJlcyIsImdldFN0b3J5QnlJZCIsIklEIiwiX2lkIiwiT2JqZWN0SWQiLCJjb25zb2xlIiwibG9nIiwiZ2V0UHJpbWF5U3RvcmllcyIsImlzUHJpbWFyeSIsInNvcnQiLCJsaW1pdCIsImdldFJlY2VudFN0b3JpZXMiLCJpZCIsImdldFN0b3JpZXMiLCJmaXJzdCIsImFmdGVyIiwiZW5kQ3Vyc29yIiwiY3Vyc29yTnVtZXJpYyIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIiRndCIsImVkZ2VzIiwibWFwIiwic3RvcnkiLCJpbmRleCIsImxlbmd0aCIsImN1cnNvciIsIm5vZGUiLCJwYWdlSW5mbyIsImhhc05leHRQYWdlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjb3VudCIsImVyciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsRUFBRDtBQUFBLFNBQzNCQyxxRUFBZSxDQUFDO0FBQUEsV0FBTztBQUNyQkMsV0FBSyxFQUFFRixFQUFFLENBQ05HLFVBREksQ0FDTyxTQURQLEVBRUpDLElBRkksQ0FFQyxFQUZELEVBR0pDLE9BSEksR0FJSkMsSUFKSSxDQUlDLFVBQUNDLEdBQUQ7QUFBQSxlQUFTQSxHQUFUO0FBQUEsT0FKRDtBQURjLEtBQVA7QUFBQSxHQUFELENBRFk7QUFBQSxDQUF0QjtBQVNBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNSLEVBQUQsRUFBS1MsRUFBTDtBQUFBLFNBQzFCUixxRUFBZSxDQUFDO0FBQUEsV0FBTztBQUNyQkMsV0FBSyxFQUFFRixFQUFFLENBQ05HLFVBREksQ0FDTyxTQURQLEVBRUpDLElBRkksQ0FFQztBQUFFTSxXQUFHLEVBQUVDLHdEQUFRLENBQUNGLEVBQUQ7QUFBZixPQUZELEVBR0pKLE9BSEksR0FJSkMsSUFKSSxDQUlDLFVBQUNDLEdBQUQsRUFBUztBQUNiSyxlQUFPLENBQUNDLEdBQVIsQ0FBWU4sR0FBWixFQUFpQkUsRUFBakI7QUFDQSxlQUFPRixHQUFHLENBQUMsQ0FBRCxDQUFWO0FBQ0QsT0FQSTtBQURjLEtBQVA7QUFBQSxHQUFELENBRFc7QUFBQSxDQUFyQjtBQVlBLElBQU1PLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ2QsRUFBRDtBQUFBLFNBQzlCQyxxRUFBZSxDQUFDO0FBQUEsV0FBTztBQUNyQkMsV0FBSyxFQUFFRixFQUFFLENBQ05HLFVBREksQ0FDTyxTQURQLEVBRUpDLElBRkksQ0FFQztBQUFFVyxpQkFBUyxFQUFFO0FBQWIsT0FGRCxFQUdKQyxJQUhJLENBR0M7QUFBRU4sV0FBRyxFQUFFLENBQUM7QUFBUixPQUhELEVBSUpPLEtBSkksQ0FJRSxDQUpGLEVBS0paLE9BTEksR0FNSkMsSUFOSSxDQU1DLFVBQUNDLEdBQUQ7QUFBQSxlQUFTQSxHQUFUO0FBQUEsT0FORDtBQURjLEtBQVA7QUFBQSxHQUFELENBRGU7QUFBQSxDQUF6QjtBQVdBLElBQU1XLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ2xCLEVBQUQ7QUFBQSxTQUM5QkMscUVBQWUsQ0FBQztBQUFBLFdBQU87QUFDckJDLFdBQUssRUFBRUYsRUFBRSxDQUNORyxVQURJLENBQ08sU0FEUCxFQUVKQyxJQUZJLENBRUM7QUFBRVcsaUJBQVMsRUFBRTtBQUFiLE9BRkQsRUFHSkMsSUFISSxDQUdDO0FBQUVHLFVBQUUsRUFBRSxDQUFDO0FBQVAsT0FIRCxFQUlKZCxPQUpJLEdBS0pDLElBTEksQ0FLQyxVQUFDQyxHQUFEO0FBQUEsZUFBU0EsR0FBVDtBQUFBLE9BTEQ7QUFEYyxLQUFQO0FBQUEsR0FBRCxDQURlO0FBQUEsQ0FBekI7QUFVQSxJQUFNYSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDcEIsRUFBRCxFQUFLcUIsS0FBTCxFQUFZQyxLQUFaLEVBQXNCO0FBQzlDLE1BQUlDLFNBQVMsR0FBRyxJQUFoQjtBQUNBLE1BQUlDLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlKLEtBQVosRUFBbUIsUUFBbkIsRUFBNkJLLFFBQTdCLENBQXNDLE9BQXRDLENBQXBCO0FBQ0EsTUFBSSxDQUFDSCxhQUFMLEVBQW9CQSxhQUFhLEdBQUcsQ0FBaEI7QUFDcEIsU0FBT3ZCLHFFQUFlLENBQUM7QUFBQSxXQUFPO0FBQzVCQyxXQUFLLEVBQUVGLEVBQUUsQ0FDTkcsVUFESSxDQUNPLFNBRFAsRUFFSkMsSUFGSSxDQUVDO0FBQ0pXLGlCQUFTLEVBQUUsS0FEUDtBQUVKTCxXQUFHLEVBQUU7QUFBRWtCLGFBQUcsRUFBRWpCLHdEQUFRLENBQUNhLGFBQUQ7QUFBZjtBQUZELE9BRkQsRUFNSlAsS0FOSSxDQU1FSSxLQU5GLEVBT0poQixPQVBJLEdBUUpDLElBUkksQ0FRQyxVQUFDQyxHQUFEO0FBQUEsZUFBVTtBQUNkc0IsZUFBSyxFQUFFdEIsR0FBRyxDQUFDdUIsR0FBSixDQUFRLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUMvQixnQkFBSUEsS0FBSyxLQUFLekIsR0FBRyxDQUFDMEIsTUFBSixHQUFhLENBQTNCLEVBQThCO0FBQzVCVix1QkFBUyxHQUFHRSxNQUFNLENBQUNDLElBQVAsQ0FBWUssS0FBSyxDQUFDckIsR0FBTixDQUFVaUIsUUFBVixFQUFaLEVBQWtDQSxRQUFsQyxDQUEyQyxRQUEzQyxDQUFaO0FBQ0EscUJBQU87QUFDTE8sc0JBQU0sRUFBRVgsU0FESDtBQUVMWSxvQkFBSSxFQUFFSjtBQUZELGVBQVA7QUFJRDs7QUFDRCxtQkFBTztBQUNMRyxvQkFBTSxFQUFFVCxNQUFNLENBQUNDLElBQVAsQ0FBWUssS0FBSyxDQUFDckIsR0FBTixDQUFVaUIsUUFBVixFQUFaLEVBQWtDQSxRQUFsQyxDQUEyQyxRQUEzQyxDQURIO0FBRUxRLGtCQUFJLEVBQUVKO0FBRkQsYUFBUDtBQUlELFdBWk0sQ0FETztBQWNkSyxrQkFBUSxFQUFFO0FBQ1JiLHFCQUFTLEVBQUVBLFNBREg7QUFFUmMsdUJBQVcsRUFBRSxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQzVDeEMsZ0JBQUUsQ0FBQ0csVUFBSCxDQUFjLFNBQWQsRUFDR0MsSUFESCxDQUNRO0FBQ0pXLHlCQUFTLEVBQUUsS0FEUDtBQUVKTCxtQkFBRyxFQUFFO0FBQ0hrQixxQkFBRyxFQUFFakIsd0RBQVEsQ0FDWGMsTUFBTSxDQUFDQyxJQUFQLENBQVlILFNBQVosRUFBdUIsUUFBdkIsRUFBaUNJLFFBQWpDLENBQTBDLE9BQTFDLENBRFc7QUFEVjtBQUZELGVBRFIsRUFTR2MsS0FUSCxDQVNTLFVBQUNDLEdBQUQsRUFBTUQsS0FBTixFQUFnQjtBQUNyQixvQkFBSUEsS0FBSyxHQUFHLENBQVosRUFBZUYsT0FBTyxDQUFDLElBQUQsQ0FBUCxDQUFmLEtBQ0tBLE9BQU8sQ0FBQyxLQUFELENBQVA7QUFDTixlQVpIO0FBYUQsYUFkWTtBQUZMO0FBZEksU0FBVjtBQUFBLE9BUkQ7QUFEcUIsS0FBUDtBQUFBLEdBQUQsQ0FBdEI7QUEyQ0QsQ0EvQ00iLCJmaWxlIjoiLi9zaGFyZWQvZGIvcXVlcmllcy9zdG9yeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVJlYWRRdWVyeSB9IGZyb20gXCIuLi9jcmVhdGUtcXVlcnlcIjtcclxuaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFsbFN0b3JpZXMgPSAoZGIpID0+XHJcbiAgY3JlYXRlUmVhZFF1ZXJ5KCgpID0+ICh7XHJcbiAgICBxdWVyeTogZGJcclxuICAgICAgLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgIC5maW5kKHt9KVxyXG4gICAgICAudG9BcnJheSgpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcyksXHJcbiAgfSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0b3J5QnlJZCA9IChkYiwgSUQpID0+XHJcbiAgY3JlYXRlUmVhZFF1ZXJ5KCgpID0+ICh7XHJcbiAgICBxdWVyeTogZGJcclxuICAgICAgLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgIC5maW5kKHsgX2lkOiBPYmplY3RJZChJRCkgfSlcclxuICAgICAgLnRvQXJyYXkoKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLCBJRCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc1swXTtcclxuICAgICAgfSksXHJcbiAgfSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByaW1heVN0b3JpZXMgPSAoZGIpID0+XHJcbiAgY3JlYXRlUmVhZFF1ZXJ5KCgpID0+ICh7XHJcbiAgICBxdWVyeTogZGJcclxuICAgICAgLmNvbGxlY3Rpb24oXCJzdG9yaWVzXCIpXHJcbiAgICAgIC5maW5kKHsgaXNQcmltYXJ5OiB0cnVlIH0pXHJcbiAgICAgIC5zb3J0KHsgX2lkOiAtMSB9KVxyXG4gICAgICAubGltaXQoNSlcclxuICAgICAgLnRvQXJyYXkoKVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMpLFxyXG4gIH0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSZWNlbnRTdG9yaWVzID0gKGRiKSA9PlxyXG4gIGNyZWF0ZVJlYWRRdWVyeSgoKSA9PiAoe1xyXG4gICAgcXVlcnk6IGRiXHJcbiAgICAgIC5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAuZmluZCh7IGlzUHJpbWFyeTogZmFsc2UgfSlcclxuICAgICAgLnNvcnQoeyBpZDogLTEgfSlcclxuICAgICAgLnRvQXJyYXkoKVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMpLFxyXG4gIH0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdG9yaWVzID0gKGRiLCBmaXJzdCwgYWZ0ZXIpID0+IHtcclxuICBsZXQgZW5kQ3Vyc29yID0gbnVsbDtcclxuICBsZXQgY3Vyc29yTnVtZXJpYyA9IEJ1ZmZlci5mcm9tKGFmdGVyLCBcImJhc2U2NFwiKS50b1N0cmluZyhcImFzY2lpXCIpO1xyXG4gIGlmICghY3Vyc29yTnVtZXJpYykgY3Vyc29yTnVtZXJpYyA9IDA7XHJcbiAgcmV0dXJuIGNyZWF0ZVJlYWRRdWVyeSgoKSA9PiAoe1xyXG4gICAgcXVlcnk6IGRiXHJcbiAgICAgIC5jb2xsZWN0aW9uKFwic3Rvcmllc1wiKVxyXG4gICAgICAuZmluZCh7XHJcbiAgICAgICAgaXNQcmltYXJ5OiBmYWxzZSxcclxuICAgICAgICBfaWQ6IHsgJGd0OiBPYmplY3RJZChjdXJzb3JOdW1lcmljKSB9LFxyXG4gICAgICB9KVxyXG4gICAgICAubGltaXQoZmlyc3QpXHJcbiAgICAgIC50b0FycmF5KClcclxuICAgICAgLnRoZW4oKHJlcykgPT4gKHtcclxuICAgICAgICBlZGdlczogcmVzLm1hcCgoc3RvcnksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBpZiAoaW5kZXggPT09IHJlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgIGVuZEN1cnNvciA9IEJ1ZmZlci5mcm9tKHN0b3J5Ll9pZC50b1N0cmluZygpKS50b1N0cmluZyhcImJhc2U2NFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IGVuZEN1cnNvcixcclxuICAgICAgICAgICAgICBub2RlOiBzdG9yeSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogQnVmZmVyLmZyb20oc3RvcnkuX2lkLnRvU3RyaW5nKCkpLnRvU3RyaW5nKFwiYmFzZTY0XCIpLFxyXG4gICAgICAgICAgICBub2RlOiBzdG9yeSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgcGFnZUluZm86IHtcclxuICAgICAgICAgIGVuZEN1cnNvcjogZW5kQ3Vyc29yLFxyXG4gICAgICAgICAgaGFzTmV4dFBhZ2U6IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgZGIuY29sbGVjdGlvbihcInN0b3JpZXNcIilcclxuICAgICAgICAgICAgICAuZmluZCh7XHJcbiAgICAgICAgICAgICAgICBpc1ByaW1hcnk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgX2lkOiB7XHJcbiAgICAgICAgICAgICAgICAgICRndDogT2JqZWN0SWQoXHJcbiAgICAgICAgICAgICAgICAgICAgQnVmZmVyLmZyb20oZW5kQ3Vyc29yLCBcImJhc2U2NFwiKS50b1N0cmluZyhcImFzY2lpXCIpXHJcbiAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmNvdW50KChlcnIsIGNvdW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPiAwKSByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pKSxcclxuICB9KSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./shared/db/queries/story.js\n");

/***/ }),

/***/ "./shared/db/queries/user.js":
/*!***********************************!*\
  !*** ./shared/db/queries/user.js ***!
  \***********************************/
/*! exports provided: getUserByEmail, getAllUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUserByEmail\", function() { return getUserByEmail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllUsers\", function() { return getAllUsers; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ \"./shared/db/index.js\");\n\nvar getUserByEmail = Object(___WEBPACK_IMPORTED_MODULE_0__[\"createReadQuery\"])(function (userObj) {\n  if (userObj[0] === \"{\") {\n    var user = JSON.parse(userObj);\n\n    if (user.email) {\n      return {\n        query: Object(___WEBPACK_IMPORTED_MODULE_0__[\"connectMongoDB\"])().users.find({\n          email: user.email\n        })\n      };\n    }\n  }\n});\nvar getAllUsers = function getAllUsers(db) {\n  return Object(___WEBPACK_IMPORTED_MODULE_0__[\"createReadQuery\"])(function () {\n    return {\n      query: db.collection(\"users\").find({}).toArray().then(function (res) {\n        return res.map(function (user) {\n          return {\n            email: user.email\n          };\n        });\n      })\n    };\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaGFyZWQvZGIvcXVlcmllcy91c2VyLmpzPzkyYTUiXSwibmFtZXMiOlsiZ2V0VXNlckJ5RW1haWwiLCJjcmVhdGVSZWFkUXVlcnkiLCJ1c2VyT2JqIiwidXNlciIsIkpTT04iLCJwYXJzZSIsImVtYWlsIiwicXVlcnkiLCJjb25uZWN0TW9uZ29EQiIsInVzZXJzIiwiZmluZCIsImdldEFsbFVzZXJzIiwiZGIiLCJjb2xsZWN0aW9uIiwidG9BcnJheSIsInRoZW4iLCJyZXMiLCJtYXAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxjQUFjLEdBQUdDLHlEQUFlLENBQUMsVUFBQUMsT0FBTyxFQUFJO0FBQ3ZELE1BQUlBLE9BQU8sQ0FBQyxDQUFELENBQVAsS0FBZSxHQUFuQixFQUF3QjtBQUN0QixRQUFJQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxPQUFYLENBQVg7O0FBQ0EsUUFBSUMsSUFBSSxDQUFDRyxLQUFULEVBQWdCO0FBQ2QsYUFBTztBQUNMQyxhQUFLLEVBQUVDLHdEQUFjLEdBQUdDLEtBQWpCLENBQXVCQyxJQUF2QixDQUE0QjtBQUFFSixlQUFLLEVBQUVILElBQUksQ0FBQ0c7QUFBZCxTQUE1QjtBQURGLE9BQVA7QUFHRDtBQUNGO0FBQ0YsQ0FUNEMsQ0FBdEM7QUFXQSxJQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxFQUFFO0FBQUEsU0FDM0JYLHlEQUFlLENBQUM7QUFBQSxXQUFPO0FBQ3JCTSxXQUFLLEVBQUVLLEVBQUUsQ0FDTkMsVUFESSxDQUNPLE9BRFAsRUFFSkgsSUFGSSxDQUVDLEVBRkQsRUFHSkksT0FISSxHQUlKQyxJQUpJLENBSUMsVUFBQUMsR0FBRztBQUFBLGVBQUlBLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLFVBQUFkLElBQUk7QUFBQSxpQkFBSztBQUFFRyxpQkFBSyxFQUFFSCxJQUFJLENBQUNHO0FBQWQsV0FBTDtBQUFBLFNBQVosQ0FBSjtBQUFBLE9BSko7QUFEYyxLQUFQO0FBQUEsR0FBRCxDQURZO0FBQUEsQ0FBdEIiLCJmaWxlIjoiLi9zaGFyZWQvZGIvcXVlcmllcy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUmVhZFF1ZXJ5LCBjcmVhdGVXcml0ZVF1ZXJ5LCBjb25uZWN0TW9uZ29EQiB9IGZyb20gXCIuLi9cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyQnlFbWFpbCA9IGNyZWF0ZVJlYWRRdWVyeSh1c2VyT2JqID0+IHtcclxuICBpZiAodXNlck9ialswXSA9PT0gXCJ7XCIpIHtcclxuICAgIGxldCB1c2VyID0gSlNPTi5wYXJzZSh1c2VyT2JqKTtcclxuICAgIGlmICh1c2VyLmVtYWlsKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcXVlcnk6IGNvbm5lY3RNb25nb0RCKCkudXNlcnMuZmluZCh7IGVtYWlsOiB1c2VyLmVtYWlsIH0pXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxVc2VycyA9IGRiID0+XHJcbiAgY3JlYXRlUmVhZFF1ZXJ5KCgpID0+ICh7XHJcbiAgICBxdWVyeTogZGJcclxuICAgICAgLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKVxyXG4gICAgICAuZmluZCh7fSlcclxuICAgICAgLnRvQXJyYXkoKVxyXG4gICAgICAudGhlbihyZXMgPT4gcmVzLm1hcCh1c2VyID0+ICh7IGVtYWlsOiB1c2VyLmVtYWlsIH0pKSlcclxuICB9KSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./shared/db/queries/user.js\n");

/***/ }),

/***/ "./webpack.config.js":
/*!***************************!*\
  !*** ./webpack.config.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__(/*! path */ \"path\");\n\nvar nodeExternals = __webpack_require__(/*! webpack-node-externals */ \"webpack-node-externals\");\n\nvar NodemonPlugin = __webpack_require__(/*! nodemon-webpack-plugin */ \"nodemon-webpack-plugin\");\n\nvar Dotenv = __webpack_require__(/*! dotenv-webpack */ \"dotenv-webpack\"); // const htmlWebpackPlugin = require(\"html-webpack-plugin\");\n\n\nmodule.exports = {\n  entry: {\n    server: [\"@babel/polyfill\", \"./api/index.js\"]\n  },\n  output: {\n    path: path.resolve(__dirname, \"public\"),\n    publicPath: \"/\",\n    filename: \"[name].js\"\n  },\n  target: \"node\",\n  mode:  false ? undefined : \"development\",\n  devtool: \"eval-source-map\",\n  module: {\n    rules: [{\n      test: /\\.(js|jsx)$/,\n      exclude: /node_nodules/,\n      use: {\n        loader: \"babel-loader\"\n      }\n    }, {\n      test: /\\.html/,\n      loader: \"html-loader\"\n    }]\n  },\n  externals: [nodeExternals()],\n  plugins: [// new NodemonPlugin(),\n  // new htmlWebpackPlugin({\n  //   template: \"./index.html\"\n  // })\n  new Dotenv()]\n};\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWJwYWNrLmNvbmZpZy5qcz9iYTY2Il0sIm5hbWVzIjpbInBhdGgiLCJyZXF1aXJlIiwibm9kZUV4dGVybmFscyIsIk5vZGVtb25QbHVnaW4iLCJEb3RlbnYiLCJtb2R1bGUiLCJleHBvcnRzIiwiZW50cnkiLCJzZXJ2ZXIiLCJvdXRwdXQiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwicHVibGljUGF0aCIsImZpbGVuYW1lIiwidGFyZ2V0IiwibW9kZSIsInByb2Nlc3MiLCJkZXZ0b29sIiwicnVsZXMiLCJ0ZXN0IiwiZXhjbHVkZSIsInVzZSIsImxvYWRlciIsImV4dGVybmFscyIsInBsdWdpbnMiXSwibWFwcGluZ3MiOiJBQUFBLHFEQUFNQSxJQUFJLEdBQUdDLG1CQUFPLENBQUMsa0JBQUQsQ0FBcEI7O0FBQ0EsSUFBTUMsYUFBYSxHQUFHRCxtQkFBTyxDQUFDLHNEQUFELENBQTdCOztBQUNBLElBQU1FLGFBQWEsR0FBR0YsbUJBQU8sQ0FBQyxzREFBRCxDQUE3Qjs7QUFDQSxJQUFNRyxNQUFNLEdBQUdILG1CQUFPLENBQUMsc0NBQUQsQ0FBdEIsQyxDQUVBOzs7QUFFQUksTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZDLE9BQUssRUFBRTtBQUNMQyxVQUFNLEVBQUUsQ0FBQyxpQkFBRCxFQUFvQixnQkFBcEI7QUFESCxHQURRO0FBSWZDLFFBQU0sRUFBRTtBQUNOVCxRQUFJLEVBQUVBLElBQUksQ0FBQ1UsT0FBTCxDQUFhQyxTQUFiLEVBQXdCLFFBQXhCLENBREE7QUFFTkMsY0FBVSxFQUFFLEdBRk47QUFHTkMsWUFBUSxFQUFFO0FBSEosR0FKTztBQVNmQyxRQUFNLEVBQUUsTUFUTztBQVVmQyxNQUFJLEVBQUVDLE1BQUEsR0FBd0MsU0FBeEMsR0FBdUQsYUFWOUM7QUFXZkMsU0FBTyxFQUFFLGlCQVhNO0FBWWZaLFFBQU0sRUFBRTtBQUNOYSxTQUFLLEVBQUUsQ0FDTDtBQUNFQyxVQUFJLEVBQUUsYUFEUjtBQUVFQyxhQUFPLEVBQUUsY0FGWDtBQUdFQyxTQUFHLEVBQUU7QUFDSEMsY0FBTSxFQUFFO0FBREw7QUFIUCxLQURLLEVBUUw7QUFDRUgsVUFBSSxFQUFFLFFBRFI7QUFFRUcsWUFBTSxFQUFFO0FBRlYsS0FSSztBQURELEdBWk87QUEyQmZDLFdBQVMsRUFBRSxDQUFDckIsYUFBYSxFQUFkLENBM0JJO0FBNEJmc0IsU0FBTyxFQUFFLENBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFJcEIsTUFBSixFQUxPO0FBNUJNLENBQWpCLEMiLCJmaWxlIjoiLi93ZWJwYWNrLmNvbmZpZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcclxuY29uc3Qgbm9kZUV4dGVybmFscyA9IHJlcXVpcmUoXCJ3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzXCIpO1xyXG5jb25zdCBOb2RlbW9uUGx1Z2luID0gcmVxdWlyZShcIm5vZGVtb24td2VicGFjay1wbHVnaW5cIik7XHJcbmNvbnN0IERvdGVudiA9IHJlcXVpcmUoXCJkb3RlbnYtd2VicGFja1wiKTtcclxuXHJcbi8vIGNvbnN0IGh0bWxXZWJwYWNrUGx1Z2luID0gcmVxdWlyZShcImh0bWwtd2VicGFjay1wbHVnaW5cIik7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBlbnRyeToge1xyXG4gICAgc2VydmVyOiBbXCJAYmFiZWwvcG9seWZpbGxcIiwgXCIuL2FwaS9pbmRleC5qc1wiXSxcclxuICB9LFxyXG4gIG91dHB1dDoge1xyXG4gICAgcGF0aDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJwdWJsaWNcIiksXHJcbiAgICBwdWJsaWNQYXRoOiBcIi9cIixcclxuICAgIGZpbGVuYW1lOiBcIltuYW1lXS5qc1wiLFxyXG4gIH0sXHJcbiAgdGFyZ2V0OiBcIm5vZGVcIixcclxuICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBcInByb2R1Y3Rpb25cIiA6IFwiZGV2ZWxvcG1lbnRcIixcclxuICBkZXZ0b29sOiBcImV2YWwtc291cmNlLW1hcFwiLFxyXG4gIG1vZHVsZToge1xyXG4gICAgcnVsZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRlc3Q6IC9cXC4oanN8anN4KSQvLFxyXG4gICAgICAgIGV4Y2x1ZGU6IC9ub2RlX25vZHVsZXMvLFxyXG4gICAgICAgIHVzZToge1xyXG4gICAgICAgICAgbG9hZGVyOiBcImJhYmVsLWxvYWRlclwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXN0OiAvXFwuaHRtbC8sXHJcbiAgICAgICAgbG9hZGVyOiBcImh0bWwtbG9hZGVyXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgZXh0ZXJuYWxzOiBbbm9kZUV4dGVybmFscygpXSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICAvLyBuZXcgTm9kZW1vblBsdWdpbigpLFxyXG4gICAgLy8gbmV3IGh0bWxXZWJwYWNrUGx1Z2luKHtcclxuICAgIC8vICAgdGVtcGxhdGU6IFwiLi9pbmRleC5odG1sXCJcclxuICAgIC8vIH0pXHJcbiAgICBuZXcgRG90ZW52KCksXHJcbiAgXSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./webpack.config.js\n");

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi @babel/polyfill ./api/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"@babel/polyfill");
module.exports = __webpack_require__(/*! ./api/index.js */"./api/index.js");


/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcG9seWZpbGxcIj83MDhkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBiYWJlbC9wb2x5ZmlsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9wb2x5ZmlsbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@babel/polyfill\n");

/***/ }),

/***/ "@sentry/node":
/*!*******************************!*\
  !*** external "@sentry/node" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@sentry/node\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2VudHJ5L25vZGVcIj83MThmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBzZW50cnkvbm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzZW50cnkvbm9kZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@sentry/node\n");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyLWV4cHJlc3NcIj8yMmYzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImFwb2xsby1zZXJ2ZXItZXhwcmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-server-express\n");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiP2Y3OTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiY29tcHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb21wcmVzc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///compression\n");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCI/N2U5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjb3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///cors\n");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"debug\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZWJ1Z1wiP2IyYzciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZGVidWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZWJ1Z1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///debug\n");

/***/ }),

/***/ "dotenv-webpack":
/*!*********************************!*\
  !*** external "dotenv-webpack" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv-webpack\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnYtd2VicGFja1wiPzRmMWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZG90ZW52LXdlYnBhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnYtd2VicGFja1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///dotenv-webpack\n");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCI/MjJmZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJleHByZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///express\n");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tools\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRvb2xzXCI/MjRjYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJncmFwaHFsLXRvb2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10b29sc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tools\n");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIj85N2RlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImxvZGFzaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///lodash\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "nodemon-webpack-plugin":
/*!*****************************************!*\
  !*** external "nodemon-webpack-plugin" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nodemon-webpack-plugin\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlbW9uLXdlYnBhY2stcGx1Z2luXCI/NDg0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJub2RlbW9uLXdlYnBhY2stcGx1Z2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZW1vbi13ZWJwYWNrLXBsdWdpblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///nodemon-webpack-plugin\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJwYWNrXCI/YzZhOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ3ZWJwYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2VicGFja1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///webpack\n");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJwYWNrLWRldi1taWRkbGV3YXJlXCI/OWEyYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ3ZWJwYWNrLWRldi1taWRkbGV3YXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2VicGFjay1kZXYtbWlkZGxld2FyZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///webpack-dev-middleware\n");

/***/ }),

/***/ "webpack-node-externals":
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-node-externals\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzXCI/YzFiZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ3ZWJwYWNrLW5vZGUtZXh0ZXJuYWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2VicGFjay1ub2RlLWV4dGVybmFsc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///webpack-node-externals\n");

/***/ })

/******/ });