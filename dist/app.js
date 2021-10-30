/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Components/App.js":
/*!*******************************!*\
  !*** ./src/Components/App.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Snake */ \"./src/Components/Snake.js\");\n/* harmony import */ var _Target__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Target */ \"./src/Components/Target.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar App = /*#__PURE__*/function () {\n  function App(_ref) {\n    var ctx = _ref.ctx,\n        canvas = _ref.canvas;\n\n    _classCallCheck(this, App);\n\n    this.model = {\n      step: 20,\n      width: 16,\n      height: 16,\n      loose: false\n    };\n    this.ctx = ctx;\n    this.canvas = canvas;\n    this.snake = new _Snake__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      width: this.model.width,\n      height: this.model.height,\n      ctx: ctx,\n      step: this.model.step\n    });\n    this.target = new _Target__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      ctx: ctx,\n      width: this.model.width,\n      height: this.model.height,\n      step: this.model.step\n    });\n  }\n\n  _createClass(App, [{\n    key: \"draw\",\n    value: function draw(oldDate) {\n      var _this = this;\n\n      requestAnimationFrame(function () {\n        var date = Date.now();\n\n        if (date - oldDate >= 300) {\n          _this.draw(date);\n\n          _this.ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);\n\n          _this.snake.draw();\n\n          _this.target.draw();\n        } else {\n          _this.draw(oldDate);\n        }\n      }, this.canvas);\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.draw(Date.now());\n    }\n  }]);\n\n  return App;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9BcHAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUU7QUFDRixxQkFBNkI7QUFBQSxRQUFmQyxHQUFlLFFBQWZBLEdBQWU7QUFBQSxRQUFWQyxNQUFVLFFBQVZBLE1BQVU7O0FBQUE7O0FBQ3pCLFNBQUtDLEtBQUwsR0FBYTtBQUNUQyxNQUFBQSxJQUFJLEVBQUUsRUFERztBQUVUQyxNQUFBQSxLQUFLLEVBQUUsRUFGRTtBQUdUQyxNQUFBQSxNQUFNLEVBQUUsRUFIQztBQUlUQyxNQUFBQSxLQUFLLEVBQUU7QUFKRSxLQUFiO0FBTUEsU0FBS04sR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBRUEsU0FBS00sS0FBTCxHQUFhLElBQUlWLDhDQUFKLENBQVU7QUFDbkJPLE1BQUFBLEtBQUssRUFBRSxLQUFLRixLQUFMLENBQVdFLEtBREM7QUFFbkJDLE1BQUFBLE1BQU0sRUFBRSxLQUFLSCxLQUFMLENBQVdHLE1BRkE7QUFHbkJMLE1BQUFBLEdBQUcsRUFBSEEsR0FIbUI7QUFJbkJHLE1BQUFBLElBQUksRUFBRSxLQUFLRCxLQUFMLENBQVdDO0FBSkUsS0FBVixDQUFiO0FBTUEsU0FBS0ssTUFBTCxHQUFjLElBQUlWLCtDQUFKLENBQVc7QUFDckJFLE1BQUFBLEdBQUcsRUFBSEEsR0FEcUI7QUFFckJJLE1BQUFBLEtBQUssRUFBRSxLQUFLRixLQUFMLENBQVdFLEtBRkc7QUFHckJDLE1BQUFBLE1BQU0sRUFBRSxLQUFLSCxLQUFMLENBQVdHLE1BSEU7QUFJckJGLE1BQUFBLElBQUksRUFBRSxLQUFLRCxLQUFMLENBQVdDO0FBSkksS0FBWCxDQUFkO0FBTUg7Ozs7V0FHRCxjQUFLTSxPQUFMLEVBQWM7QUFBQTs7QUFDVkMsTUFBQUEscUJBQXFCLENBQUMsWUFBTTtBQUN4QixZQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxFQUFiOztBQUNBLFlBQUlGLElBQUksR0FBR0YsT0FBUCxJQUFrQixHQUF0QixFQUEyQjtBQUN2QixlQUFJLENBQUNLLElBQUwsQ0FBVUgsSUFBVjs7QUFDQSxlQUFJLENBQUNYLEdBQUwsQ0FBU2UsU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFJLENBQUNkLE1BQUwsQ0FBWUcsS0FBckMsRUFBNEMsS0FBSSxDQUFDSCxNQUFMLENBQVlJLE1BQXhEOztBQUNBLGVBQUksQ0FBQ0UsS0FBTCxDQUFXTyxJQUFYOztBQUNBLGVBQUksQ0FBQ04sTUFBTCxDQUFZTSxJQUFaO0FBQ0gsU0FMRCxNQUtPO0FBQ0gsZUFBSSxDQUFDQSxJQUFMLENBQVVMLE9BQVY7QUFDSDtBQUNKLE9BVm9CLEVBVWxCLEtBQUtSLE1BVmEsQ0FBckI7QUFXSDs7O1dBRUQsaUJBQVE7QUFDSixXQUFLYSxJQUFMLENBQVVGLElBQUksQ0FBQ0MsR0FBTCxFQUFWO0FBQ0g7Ozs7OztBQUdMLGlFQUFlZCxHQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1taXgvLi9zcmMvQ29tcG9uZW50cy9BcHAuanM/YWVhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU25ha2UgZnJvbSBcIi4vU25ha2VcIjtcbmltcG9ydCBUYXJnZXQgZnJvbSBcIi4vVGFyZ2V0XCI7XG5cbmNsYXNzIEFwcHtcbiAgICBjb25zdHJ1Y3Rvcih7IGN0eCwgY2FudmFzIH0pIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IHtcbiAgICAgICAgICAgIHN0ZXA6IDIwLFxuICAgICAgICAgICAgd2lkdGg6IDE2LFxuICAgICAgICAgICAgaGVpZ2h0OiAxNixcbiAgICAgICAgICAgIGxvb3NlOiBmYWxzZSxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG5cbiAgICAgICAgdGhpcy5zbmFrZSA9IG5ldyBTbmFrZSh7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy5tb2RlbC53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5tb2RlbC5oZWlnaHQsXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgICAgICBzdGVwOiB0aGlzLm1vZGVsLnN0ZXBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gbmV3IFRhcmdldCh7XG4gICAgICAgICAgICBjdHgsXG4gICAgICAgICAgICB3aWR0aDogdGhpcy5tb2RlbC53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5tb2RlbC5oZWlnaHQsXG4gICAgICAgICAgICBzdGVwOiB0aGlzLm1vZGVsLnN0ZXAsXG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBkcmF3KG9sZERhdGUpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBEYXRlLm5vdygpXG4gICAgICAgICAgICBpZiAoZGF0ZSAtIG9sZERhdGUgPj0gMzAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3KGRhdGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNuYWtlLmRyYXcoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5kcmF3KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhdyhvbGREYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcy5jYW52YXMpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmRyYXcoRGF0ZS5ub3coKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il0sIm5hbWVzIjpbIlNuYWtlIiwiVGFyZ2V0IiwiQXBwIiwiY3R4IiwiY2FudmFzIiwibW9kZWwiLCJzdGVwIiwid2lkdGgiLCJoZWlnaHQiLCJsb29zZSIsInNuYWtlIiwidGFyZ2V0Iiwib2xkRGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRhdGUiLCJEYXRlIiwibm93IiwiZHJhdyIsImNsZWFyUmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/App.js\n");

/***/ }),

/***/ "./src/Components/Rectangle.js":
/*!*************************************!*\
  !*** ./src/Components/Rectangle.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _methods_randomColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../methods/randomColor */ \"./src/methods/randomColor.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Rectangle = function Rectangle(x, y, width, height) {\n  var direction = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'right';\n\n  _classCallCheck(this, Rectangle);\n\n  this.x = x;\n  this.y = y;\n  this.oldX = x;\n  this.oldY = x;\n  this.width = width;\n  this.height = height;\n  this.direction = direction;\n  this.color = (0,_methods_randomColor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rectangle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9SZWN0YW5nbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztJQUVNQyxZQUNGLG1CQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLEtBQWxCLEVBQXlCQyxNQUF6QixFQUFzRDtBQUFBLE1BQXJCQyxTQUFxQix1RUFBVCxPQUFTOztBQUFBOztBQUNsRCxPQUFLSixDQUFMLEdBQVNBLENBQVQ7QUFDQSxPQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxPQUFLSSxJQUFMLEdBQVlMLENBQVo7QUFDQSxPQUFLTSxJQUFMLEdBQVlOLENBQVo7QUFFQSxPQUFLRSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxPQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxPQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLE9BQUtHLEtBQUwsR0FBYVQsZ0VBQVcsRUFBeEI7QUFDSDs7QUFHTCxpRUFBZUMsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtbWl4Ly4vc3JjL0NvbXBvbmVudHMvUmVjdGFuZ2xlLmpzPzYwMmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJhbmRvbUNvbG9yIGZyb20gXCIuLi9tZXRob2RzL3JhbmRvbUNvbG9yXCI7XG5cbmNsYXNzIFJlY3RhbmdsZSB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgZGlyZWN0aW9uID0gJ3JpZ2h0Jykge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLm9sZFggPSB4O1xuICAgICAgICB0aGlzLm9sZFkgPSB4O1xuXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICB0aGlzLmNvbG9yID0gcmFuZG9tQ29sb3IoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY3RhbmdsZTsiXSwibmFtZXMiOlsicmFuZG9tQ29sb3IiLCJSZWN0YW5nbGUiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiZGlyZWN0aW9uIiwib2xkWCIsIm9sZFkiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/Rectangle.js\n");

/***/ }),

/***/ "./src/Components/Snake.js":
/*!*********************************!*\
  !*** ./src/Components/Snake.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rectangle */ \"./src/Components/Rectangle.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Snake = /*#__PURE__*/function () {\n  function Snake(_ref) {\n    var ctx = _ref.ctx,\n        step = _ref.step,\n        width = _ref.width,\n        height = _ref.height;\n\n    _classCallCheck(this, Snake);\n\n    this.ctx = ctx;\n    this.model = {\n      width: width,\n      height: height,\n      step: step,\n      x: 0,\n      y: Math.floor(innerHeight / 2 - 14),\n      items: [],\n      count: 2,\n      direction: 'right'\n    };\n    this.events();\n  }\n\n  _createClass(Snake, [{\n    key: \"fillItemsArray\",\n    value: function fillItemsArray() {\n      /** Fill Items **/\n      var _this$model = this.model,\n          items = _this$model.items,\n          count = _this$model.count,\n          x = _this$model.x,\n          y = _this$model.y,\n          width = _this$model.width,\n          height = _this$model.height,\n          step = _this$model.step;\n\n      for (var i = 0; i < count; i++) {\n        if (i === 0) {\n          items.push(new _Rectangle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]((count - 1) * step, y, width, height));\n        } else {\n          var _items;\n\n          var prevX = (_items = items[i - 1]) === null || _items === void 0 ? void 0 : _items.x;\n          items.push(new _Rectangle__WEBPACK_IMPORTED_MODULE_0__[\"default\"](prevX - step, y, width, height));\n        }\n      }\n    }\n  }, {\n    key: \"moveItems\",\n    value: function moveItems(el, i) {\n      var _this$model2 = this.model,\n          items = _this$model2.items,\n          step = _this$model2.step,\n          direction = _this$model2.direction,\n          width = _this$model2.width;\n      var prev = items[i - 1];\n      el.oldX = el.x;\n      el.oldY = el.y;\n\n      if (i === 0) {\n        switch (direction) {\n          case 'right':\n            {\n              var newVal = step + el.x;\n\n              if (newVal > innerWidth) {\n                el.x = 0;\n              } else {\n                el.x = newVal;\n              }\n\n              break;\n            }\n\n          case 'left':\n            {\n              var _newVal = el.x - step;\n\n              if (_newVal < 0) {\n                el.x = innerWidth - innerWidth % step;\n              } else {\n                el.x = _newVal;\n              }\n\n              break;\n            }\n\n          case 'top':\n            {\n              var _newVal2 = el.y - step;\n\n              if (_newVal2 < 0) {\n                el.y = innerHeight - step - (innerHeight - step) % step;\n              } else {\n                el.y = _newVal2;\n              }\n\n              break;\n            }\n\n          case 'down':\n            {\n              var _newVal3 = el.y + step;\n\n              if (_newVal3 > innerHeight) {\n                el.y = 0;\n              } else {\n                el.y = _newVal3;\n              }\n\n              break;\n            }\n        }\n      } else {\n        el.x = prev.oldX;\n        el.y = prev.oldY;\n      }\n    }\n  }, {\n    key: \"events\",\n    value: function events() {\n      var _this = this;\n\n      document.addEventListener('keydown', function (_ref2) {\n        var code = _ref2.code;\n        var direction = _this.model.direction;\n\n        if (code === 'ArrowUp' && direction !== 'down') {\n          _this.model.direction = 'top';\n        } else if (code === 'ArrowDown' && direction !== 'top') {\n          _this.model.direction = 'down';\n        } else if (code === 'ArrowRight' && direction !== 'left') {\n          _this.model.direction = 'right';\n        } else if (code === 'ArrowLeft' && direction !== 'right') {\n          _this.model.direction = 'left';\n        }\n      });\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      var _this2 = this;\n\n      /** fill array Items **/\n      var items = this.model.items;\n\n      if (!items.length) {\n        this.fillItemsArray();\n      }\n\n      ;\n      items.map(function (el, i) {\n        _this2.ctx.fillStyle = el.color;\n\n        _this2.moveItems(el, i);\n\n        _this2.ctx.fillRect(el.x, el.y, el.width, el.height);\n      });\n    }\n  }]);\n\n  return Snake;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Snake);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsQ0FBQ2EsS0FBeEI7O0FBQ0EsY0FBSSxDQUFDQyxTQUFMLENBQWVkLEVBQWYsRUFBbUJILENBQW5COztBQUNBLGNBQUksQ0FBQ2QsR0FBTCxDQUFTZ0MsUUFBVCxDQUFrQmYsRUFBRSxDQUFDWixDQUFyQixFQUF3QlksRUFBRSxDQUFDWCxDQUEzQixFQUE4QlcsRUFBRSxDQUFDZixLQUFqQyxFQUF3Q2UsRUFBRSxDQUFDZCxNQUEzQztBQUNILE9BSkQ7QUFPSDs7Ozs7O0FBR0wsaUVBQWVKLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LW1peC8uL3NyYy9Db21wb25lbnRzL1NuYWtlLmpzPzAzYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlY3RhbmdsZSBmcm9tICcuL1JlY3RhbmdsZSc7XG5cbmNsYXNzIFNuYWtlIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGN0eCwgc3RlcCwgd2lkdGgsIGhlaWdodCB9KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLm1vZGVsID0ge1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBzdGVwLFxuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IE1hdGguZmxvb3IoKGlubmVySGVpZ2h0IC8gMikgLSAxNCksXG4gICAgICAgICAgICBpdGVtczogW10sXG4gICAgICAgICAgICBjb3VudDogMixcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XG4gICAgfVxuXG4gICAgZmlsbEl0ZW1zQXJyYXkoKSB7XG4gICAgICAgIC8qKiBGaWxsIEl0ZW1zICoqL1xuICAgICAgICBjb25zdCB7IGl0ZW1zLCBjb3VudCwgeCwgeSwgd2lkdGgsIGhlaWdodCwgc3RlcCB9ID0gdGhpcy5tb2RlbDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChuZXcgUmVjdGFuZ2xlKChjb3VudCAtIDEpICogc3RlcCwgeSwgd2lkdGgsIGhlaWdodCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2WCA9IGl0ZW1zWyBpIC0gMSBdPy54O1xuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2gobmV3IFJlY3RhbmdsZShwcmV2WCAtIHN0ZXAsIHksIHdpZHRoLCBoZWlnaHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVJdGVtcyhlbCwgaSkge1xuICAgICAgICBjb25zdCB7IGl0ZW1zLCBzdGVwLCBkaXJlY3Rpb24sIHdpZHRoIH0gPSB0aGlzLm1vZGVsO1xuICAgICAgICBsZXQgcHJldiAgPSBpdGVtc1sgaSAtIDEgXTtcblxuICAgICAgICBlbC5vbGRYID0gZWwueDtcbiAgICAgICAgZWwub2xkWSA9IGVsLnk7XG5cbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnIDoge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdWYWwgPSBzdGVwICsgZWwueDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbCA+IGlubmVyV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwueCA9IG5ld1ZhbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JyA6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VmFsID0gZWwueCAtIHN0ZXA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWwgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC54ID0gaW5uZXJXaWR0aCAtIChpbm5lcldpZHRoICUgc3RlcCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC54ID0gbmV3VmFsO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ3RvcCcgOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1ZhbCA9IGVsLnkgLSBzdGVwO1xuICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBlbC55ID0gKGlubmVySGVpZ2h0IC0gc3RlcCkgLSAoaW5uZXJIZWlnaHQgLSBzdGVwKSAlIHN0ZXA7XG4gICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnkgPSBuZXdWYWw7XG4gICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2Rvd24nIDoge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdWYWwgPSBlbC55ICsgc3RlcDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsID4gaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLnkgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwueSA9IG5ld1ZhbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLnggPSBwcmV2Lm9sZFg7XG4gICAgICAgICAgICBlbC55ID0gcHJldi5vbGRZO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKHsgY29kZSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGRpcmVjdGlvbiB9ICA9IHRoaXMubW9kZWw7XG5cbiAgICAgICAgICAgIGlmIChjb2RlID09PSAnQXJyb3dVcCcgJiYgZGlyZWN0aW9uICE9PSAnZG93bicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLmRpcmVjdGlvbiA9ICd0b3AnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSAnQXJyb3dEb3duJyAmJiBkaXJlY3Rpb24gIT09ICd0b3AnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5kaXJlY3Rpb24gPSAnZG93bic7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvZGUgPT09ICdBcnJvd1JpZ2h0JyAmJiBkaXJlY3Rpb24gIT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuZGlyZWN0aW9uID0gJ3JpZ2h0JztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gJ0Fycm93TGVmdCcgJiYgZGlyZWN0aW9uICE9PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5kaXJlY3Rpb24gPSAnbGVmdCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBkcmF3KCkge1xuICAgICAgICAvKiogZmlsbCBhcnJheSBJdGVtcyAqKi9cbiAgICAgICAgY29uc3QgeyBpdGVtcyB9ID0gdGhpcy5tb2RlbDtcbiAgICAgICAgaWYgKCFpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsbEl0ZW1zQXJyYXkoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpdGVtcy5tYXAoKGVsLCBpKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBlbC5jb2xvcjtcbiAgICAgICAgICAgIHRoaXMubW92ZUl0ZW1zKGVsLCBpKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KGVsLngsIGVsLnksIGVsLndpZHRoLCBlbC5oZWlnaHQpO1xuICAgICAgICB9KTtcblxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbmFrZTsiXSwibmFtZXMiOlsiUmVjdGFuZ2xlIiwiU25ha2UiLCJjdHgiLCJzdGVwIiwid2lkdGgiLCJoZWlnaHQiLCJtb2RlbCIsIngiLCJ5IiwiTWF0aCIsImZsb29yIiwiaW5uZXJIZWlnaHQiLCJpdGVtcyIsImNvdW50IiwiZGlyZWN0aW9uIiwiZXZlbnRzIiwiaSIsInB1c2giLCJwcmV2WCIsImVsIiwicHJldiIsIm9sZFgiLCJvbGRZIiwibmV3VmFsIiwiaW5uZXJXaWR0aCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvZGUiLCJsZW5ndGgiLCJmaWxsSXRlbXNBcnJheSIsIm1hcCIsImZpbGxTdHlsZSIsImNvbG9yIiwibW92ZUl0ZW1zIiwiZmlsbFJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/Snake.js\n");

/***/ }),

/***/ "./src/Components/Target.js":
/*!**********************************!*\
  !*** ./src/Components/Target.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _methods_randomColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../methods/randomColor */ \"./src/methods/randomColor.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Target = /*#__PURE__*/function () {\n  function Target(_ref) {\n    var ctx = _ref.ctx,\n        width = _ref.width,\n        height = _ref.height,\n        step = _ref.step;\n\n    _classCallCheck(this, Target);\n\n    this.model = {\n      width: width,\n      height: height,\n      step: step,\n      x: null,\n      y: null,\n      color: (0,_methods_randomColor__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    };\n    this.ctx = ctx;\n  }\n\n  _createClass(Target, [{\n    key: \"randomNumber\",\n    value: function randomNumber(max) {\n      return Math.floor(Math.random() * max);\n    }\n  }, {\n    key: \"remove\",\n    value: function remove() {\n      this.model.x = null;\n      this.model.y = null;\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      var _this$model = this.model,\n          x = _this$model.x,\n          y = _this$model.y,\n          width = _this$model.width,\n          height = _this$model.height,\n          step = _this$model.step;\n\n      if (x === null && y === null) {\n        var newX = this.randomNumber(innerWidth - width);\n        var newY = this.randomNumber(innerHeight - height);\n        newX = newX - newX % step;\n        newY = newY - newY % step;\n        this.model.x = newX;\n        this.model.y = newY;\n      }\n\n      this.ctx.fillStyle = this.model.color; // console.log(this.model.color);\n\n      this.ctx.fillRect(this.model.x, this.model.y, width, height);\n    }\n  }]);\n\n  return Target;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Target);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9UYXJnZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUM7QUFDRix3QkFBMEM7QUFBQSxRQUE1QkMsR0FBNEIsUUFBNUJBLEdBQTRCO0FBQUEsUUFBdkJDLEtBQXVCLFFBQXZCQSxLQUF1QjtBQUFBLFFBQWhCQyxNQUFnQixRQUFoQkEsTUFBZ0I7QUFBQSxRQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUE7O0FBQ3RDLFNBQUtDLEtBQUwsR0FBYTtBQUNUSCxNQUFBQSxLQUFLLEVBQUxBLEtBRFM7QUFFVEMsTUFBQUEsTUFBTSxFQUFOQSxNQUZTO0FBR1RDLE1BQUFBLElBQUksRUFBSkEsSUFIUztBQUlURSxNQUFBQSxDQUFDLEVBQUUsSUFKTTtBQUtUQyxNQUFBQSxDQUFDLEVBQUUsSUFMTTtBQU1UQyxNQUFBQSxLQUFLLEVBQUVULGdFQUFXO0FBTlQsS0FBYjtBQVFBLFNBQUtFLEdBQUwsR0FBV0EsR0FBWDtBQUNIOzs7O1dBRUQsc0JBQWFRLEdBQWIsRUFBa0I7QUFDZCxhQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCSCxHQUEzQixDQUFQO0FBQ0g7OztXQUdELGtCQUFTO0FBQ0wsV0FBS0osS0FBTCxDQUFXQyxDQUFYLEdBQWUsSUFBZjtBQUNBLFdBQUtELEtBQUwsQ0FBV0UsQ0FBWCxHQUFlLElBQWY7QUFDSDs7O1dBRUQsZ0JBQU87QUFDSCx3QkFBc0MsS0FBS0YsS0FBM0M7QUFBQSxVQUFRQyxDQUFSLGVBQVFBLENBQVI7QUFBQSxVQUFXQyxDQUFYLGVBQVdBLENBQVg7QUFBQSxVQUFjTCxLQUFkLGVBQWNBLEtBQWQ7QUFBQSxVQUFxQkMsTUFBckIsZUFBcUJBLE1BQXJCO0FBQUEsVUFBNkJDLElBQTdCLGVBQTZCQSxJQUE3Qjs7QUFFQSxVQUFJRSxDQUFDLEtBQUssSUFBTixJQUFjQyxDQUFDLEtBQUssSUFBeEIsRUFBOEI7QUFDMUIsWUFBSU0sSUFBSSxHQUFHLEtBQUtDLFlBQUwsQ0FBa0JDLFVBQVUsR0FBR2IsS0FBL0IsQ0FBWDtBQUNBLFlBQUljLElBQUksR0FBRyxLQUFLRixZQUFMLENBQWtCRyxXQUFXLEdBQUdkLE1BQWhDLENBQVg7QUFFQVUsUUFBQUEsSUFBSSxHQUFHQSxJQUFJLEdBQUlBLElBQUksR0FBR1QsSUFBdEI7QUFDQVksUUFBQUEsSUFBSSxHQUFHQSxJQUFJLEdBQUlBLElBQUksR0FBR1osSUFBdEI7QUFFQSxhQUFLQyxLQUFMLENBQVdDLENBQVgsR0FBZU8sSUFBZjtBQUNBLGFBQUtSLEtBQUwsQ0FBV0UsQ0FBWCxHQUFlUyxJQUFmO0FBQ0g7O0FBQ0QsV0FBS2YsR0FBTCxDQUFTaUIsU0FBVCxHQUFxQixLQUFLYixLQUFMLENBQVdHLEtBQWhDLENBYkcsQ0FjSDs7QUFDQSxXQUFLUCxHQUFMLENBQVNrQixRQUFULENBQWtCLEtBQUtkLEtBQUwsQ0FBV0MsQ0FBN0IsRUFBZ0MsS0FBS0QsS0FBTCxDQUFXRSxDQUEzQyxFQUE4Q0wsS0FBOUMsRUFBcURDLE1BQXJEO0FBQ0g7Ozs7OztBQUdMLGlFQUFlSCxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1taXgvLi9zcmMvQ29tcG9uZW50cy9UYXJnZXQuanM/OGIzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmFuZG9tQ29sb3IgZnJvbSBcIi4uL21ldGhvZHMvcmFuZG9tQ29sb3JcIjtcblxuY2xhc3MgVGFyZ2V0IHtcbiAgICBjb25zdHJ1Y3Rvcih7IGN0eCwgd2lkdGgsIGhlaWdodCwgc3RlcCB9KSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIHN0ZXAsXG4gICAgICAgICAgICB4OiBudWxsLFxuICAgICAgICAgICAgeTogbnVsbCxcbiAgICAgICAgICAgIGNvbG9yOiByYW5kb21Db2xvcigpLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIH1cblxuICAgIHJhbmRvbU51bWJlcihtYXgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG4gICAgfVxuXG5cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMubW9kZWwueCA9IG51bGw7XG4gICAgICAgIHRoaXMubW9kZWwueSA9IG51bGw7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgY29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzdGVwIH0gPSB0aGlzLm1vZGVsO1xuXG4gICAgICAgIGlmICh4ID09PSBudWxsICYmIHkgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBuZXdYID0gdGhpcy5yYW5kb21OdW1iZXIoaW5uZXJXaWR0aCAtIHdpZHRoKTtcbiAgICAgICAgICAgIGxldCBuZXdZID0gdGhpcy5yYW5kb21OdW1iZXIoaW5uZXJIZWlnaHQgLSBoZWlnaHQpO1xuXG4gICAgICAgICAgICBuZXdYID0gbmV3WCAtIChuZXdYICUgc3RlcCk7XG4gICAgICAgICAgICBuZXdZID0gbmV3WSAtIChuZXdZICUgc3RlcCk7XG5cbiAgICAgICAgICAgIHRoaXMubW9kZWwueCA9IG5ld1g7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnkgPSBuZXdZO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMubW9kZWwuY29sb3I7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubW9kZWwuY29sb3IpO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLm1vZGVsLngsIHRoaXMubW9kZWwueSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXJnZXQ7Il0sIm5hbWVzIjpbInJhbmRvbUNvbG9yIiwiVGFyZ2V0IiwiY3R4Iiwid2lkdGgiLCJoZWlnaHQiLCJzdGVwIiwibW9kZWwiLCJ4IiwieSIsImNvbG9yIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibmV3WCIsInJhbmRvbU51bWJlciIsImlubmVyV2lkdGgiLCJuZXdZIiwiaW5uZXJIZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/Target.js\n");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/App */ \"./src/Components/App.js\");\nvar canvas = document.getElementById(\"canvas\");\nvar ctx = canvas.getContext(\"2d\");\ncanvas.width = innerWidth;\ncanvas.height = innerHeight;\n\nwindow.app = new _Components_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  ctx: ctx,\n  canvas: canvas\n});\napp.start();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLElBQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFFQUosTUFBTSxDQUFDSyxLQUFQLEdBQWVDLFVBQWY7QUFDQU4sTUFBTSxDQUFDTyxNQUFQLEdBQWdCQyxXQUFoQjtBQUVBO0FBRUFFLE1BQU0sQ0FBQ0MsR0FBUCxHQUFhLElBQUlGLHVEQUFKLENBQVE7QUFBRU4sRUFBQUEsR0FBRyxFQUFIQSxHQUFGO0FBQU9ILEVBQUFBLE1BQU0sRUFBTkE7QUFBUCxDQUFSLENBQWI7QUFDQVcsR0FBRyxDQUFDQyxLQUFKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1taXgvLi9zcmMvYXBwLmpzPzExMTIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG5jYW52YXMud2lkdGggPSBpbm5lcldpZHRoO1xuY2FudmFzLmhlaWdodCA9IGlubmVySGVpZ2h0O1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vQ29tcG9uZW50cy9BcHAnO1xuXG53aW5kb3cuYXBwID0gbmV3IEFwcCh7IGN0eCwgY2FudmFzIH0pO1xuYXBwLnN0YXJ0KCk7XG5cblxuIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJBcHAiLCJ3aW5kb3ciLCJhcHAiLCJzdGFydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/methods/randomColor.js":
/*!************************************!*\
  !*** ./src/methods/randomColor.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar randomColor = function randomColor() {\n  return \"rgb(\".concat(Math.floor(Math.random() * 255), \",\").concat(Math.floor(Math.random() * 255), \",\").concat(Math.floor(Math.random() * 255), \")\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (randomColor);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWV0aG9kcy9yYW5kb21Db2xvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0Qix1QkFBZUMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixHQUEzQixDQUFmLGNBQW9ERixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEdBQTNCLENBQXBELGNBQXlGRixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEdBQTNCLENBQXpGO0FBQ0gsQ0FGRDs7QUFJQSxpRUFBZUgsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtbWl4Ly4vc3JjL21ldGhvZHMvcmFuZG9tQ29sb3IuanM/OTFkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByYW5kb21Db2xvciA9ICgpID0+IHtcbiAgICByZXR1cm4gYHJnYigkeyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTUpIH0sJHsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU1KSB9LCR7IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NSkgfSlgXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJhbmRvbUNvbG9yOyJdLCJuYW1lcyI6WyJyYW5kb21Db2xvciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/methods/randomColor.js\n");

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1taXgvLi9zcmMvYXBwLnNjc3M/NTZkZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktest_mix"] = self["webpackChunktest_mix"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["app"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;