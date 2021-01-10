"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reducer = exports.initialState = void 0;

var _dishes = require("../shared/dishes");

var _comments = require("../shared/comments");

var _promotions = require("../shared/promotions");

var _leaders = require("../shared/leaders");

var initialState = {
  dishes: _dishes.DISHES,
  comments: _comments.COMMENTS,
  promotions: _promotions.PROMOTIONS,
  leaders: _leaders.LEADERS
};
exports.initialState = initialState;

var Reducer = function Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return state;
};

exports.Reducer = Reducer;