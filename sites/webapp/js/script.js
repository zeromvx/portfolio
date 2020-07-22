"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var navList = document.querySelector(".nav-list"); // nav links list

var navbar = document.querySelector(".navbar"); // navbar block

var toggleBtn = document.querySelector(".toggle-btn");
var icon = document.querySelector(".toggle-icon"); // toggle-line

var navbarBtn = document.querySelector(".navbar__btn"); //adaptive toggle btn

toggleBtn.addEventListener("click", function () {
  navList.classList.toggle("nav-list-active");
  icon.classList.toggle("open");

  if (navList.classList.contains("nav-list-active")) {
    navList.style.height = "300px";

    var _iterator = _createForOfIteratorHelper(navList.children),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        item.style.opacity = 1;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    navList.style.height = "0";

    var _iterator2 = _createForOfIteratorHelper(navList.children),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _item = _step2.value;
        _item.style.opacity = 0;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
}); // add background, box-shadow for navbar and change color for btn when we scrolled navbar

document.addEventListener("scroll", function () {
  if (pageYOffset > navbar.offsetHeight) {
    navbar.style.background = "#59687C";
    navbar.style.boxShadow = "0 7px 10px rgba(0, 9, 128, 0.035), 0 9px 18px rgba(0, 9, 128, 0.05)";
    navbarBtn.classList.add('navbar__btn--active');
  } else {
    navbar.style.background = "transparent";
    navbar.style.boxShadow = "none";
    navbarBtn.classList.remove('navbar__btn--active');
  }
});