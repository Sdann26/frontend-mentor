"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var button = document.getElementById("generator-button");
var idquote = document.getElementById("id-quote");
var quote = document.getElementById("quote");
var rspt;

var generatedSentence = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://api.adviceslip.com/advice', {
              method: 'GET',
              cache: 'no-cache'
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              return data.slip;
            });

          case 2:
            rspt = _context.sent;
            idquote.textContent = rspt.id;
            quote.textContent = "\u201C".concat(rspt.advice, "\u201D");

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function generatedSentence() {
    return _ref.apply(this, arguments);
  };
}();

button.addEventListener('click', generatedSentence);