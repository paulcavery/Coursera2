"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dishes = void 0;

var _dishes = require("../shared/dishes");

var Dishes = function Dishes() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _dishes.DISHES;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return state;
  }
};

exports.Dishes = Dishes;