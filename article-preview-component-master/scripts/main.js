"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var sectionShare = document.getElementById("section-share");
var tooltip = document.getElementById("tooltip");

var _Array$from = Array.from(sectionShare.children),
    _Array$from2 = _slicedToArray(_Array$from, 5),
    userAvatar = _Array$from2[0],
    userInfo = _Array$from2[1],
    textShare = _Array$from2[2],
    iconsSocial = _Array$from2[3],
    bShare = _Array$from2[4];

var openShare = false;

var showShare = function showShare() {
  var windowWidth = window.innerWidth;

  if (windowWidth < 768) {
    if (openShare === false) {
      userAvatar.classList.replace("block", "hidden");
      userInfo.classList.replace("flex", "hidden");
      textShare.classList.replace("hidden", "inline");
      iconsSocial.classList.replace("hidden", "flex");
      sectionShare.classList.add("bg-Very-Dark-Grayish-Blue");
      bShare.classList.replace("bg-Light-Grayish-Blue", "bg-Desaturated-Dark-Blue");
      bShare.firstElementChild.firstElementChild.setAttribute('fill', '#ECF2F8');
    } else {
      userAvatar.classList.replace("hidden", "block");
      userInfo.classList.replace("hidden", "flex");
      textShare.classList.replace("inline", "hidden");
      iconsSocial.classList.replace("flex", "hidden");
      sectionShare.classList.remove("bg-Very-Dark-Grayish-Blue");
      bShare.classList.replace("bg-Desaturated-Dark-Blue", "bg-Light-Grayish-Blue");
      bShare.firstElementChild.firstElementChild.setAttribute('fill', '#6E8098');
    }

    openShare = !openShare;
  } else {
    if (openShare === false) {
      tooltip.classList.replace("md:hidden", "md:flex");
      bShare.classList.replace("bg-Light-Grayish-Blue", "bg-Desaturated-Dark-Blue");
      bShare.firstElementChild.firstElementChild.setAttribute('fill', '#ECF2F8');
    } else {
      tooltip.classList.replace("md:flex", "md:hidden");
      bShare.classList.replace("bg-Desaturated-Dark-Blue", "bg-Light-Grayish-Blue");
      bShare.firstElementChild.firstElementChild.setAttribute('fill', '#6E8098');
    }

    openShare = !openShare;
  }
}; // Events


bShare.addEventListener("click", showShare);
window.addEventListener('resize', function () {
  if (window.innerWidth >= 730 && window.innerWidth <= 800 && bShare.classList.contains("bg-Desaturated-Dark-Blue")) {
    showShare();
  }
});