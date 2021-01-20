"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comments = void 0;

var _comments = require("../shared/comments");

var Comments = function Comments() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _comments.COMMENTS;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return state;
  }
};

exports.Comments = Comments;