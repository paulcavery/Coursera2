"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigureStore = void 0;

var _redux = require("redux");

var _reducer = require("./reducer");

var ConfigureStore = function ConfigureStore() {
  var store = (0, _redux.createStore)(_reducer.Reducer, // reducer
  _reducer.initialState // our initialState
  );
  return store;
};

exports.ConfigureStore = ConfigureStore;