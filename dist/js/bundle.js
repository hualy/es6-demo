/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _layer = __webpack_require__(1);

var _layer2 = _interopRequireDefault(_layer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function layer() {
    return {
        name: 'layer',
        tpl: _layer2.default
    };
} /**
   * Created by Administrator on 2017/3/18.
   */
exports.default = layer;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title></title>\r\n</head>\r\n<body>\r\n\r\n</body>\r\n</html>";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Administrator on 2017/3/18.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _layer = __webpack_require__(0);

var _layer2 = _interopRequireDefault(_layer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App() {
    var NUM = 1;
    // alert(NUM);
    var app = document.getElementById("app");
    var layer = new _layer2.default();
    app.innerHTML = layer.tpl;
    // console.log(layer);
    var name = 'zach';
    while (true) {
        var _name = 'obama';
        console.log(_name);
        break;
    }
    console.log(name);
    var a = [];

    var _loop = function _loop(i) {
        a[i] = function () {
            console.log(i);
        };
    };

    for (var i = 0; i < 10; i++) {
        _loop(i);
    }
    a[6](); // 6

    var Animal = function () {
        function Animal() {
            _classCallCheck(this, Animal);

            this.type = 'animal';
        }

        _createClass(Animal, [{
            key: 'says',
            value: function says(say) {
                var _this = this;

                setTimeout(function () {
                    var hello = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'hualy';

                    console.log(_this.type + ' says ' + say + hello);
                }, 10000);
            }
        }]);

        return Animal;
    }();

    var animal = new Animal();
    animal.says("hua");

    var Cat = function (_Animal) {
        _inherits(Cat, _Animal);

        function Cat() {
            _classCallCheck(this, Cat);

            var _this2 = _possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).call(this));

            _this2.type = 'cat';
            return _this2;
        }

        return Cat;
    }(Animal);

    var cat = new Cat();
    cat.says("hello");
    var obj = {
        count: 2
    };
    document.getElementById("template").innerHTML = 'There ar <b>' + obj.count + '</b> items';
    var dog = { type: 'animal', many: 2 };
    var type = dog.type,
        many = dog.many;

    console.log(type, many);
    function hello() {
        for (var _len = arguments.length, types = Array(_len), _key = 0; _key < _len; _key++) {
            types[_key] = arguments[_key];
        }

        console.log(types);
    }
    hello('a', 'b', 'c');
};
new App();

/***/ })
/******/ ]);