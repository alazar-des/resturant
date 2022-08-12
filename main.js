/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/thlo.jpg */ "./src/asset/thlo.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/hmbash.jpeg */ "./src/asset/hmbash.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbody {\n  font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n#content {\n  position: relative;\n}\n\n.header {\n  position: sticky;\n  top: 0;\n  display: flex;\n\tjustify-content: space-between;\n\talign-items: flex-start;\n\tpadding: 0 7.5vw;\n  align-items: center;\n  height: 15vh;\n  z-index: 10;\n  color: #ffffff;\n  margin-top: -15vh;\n}\n\n.nav ul {\n  display: flex;\n\tgap: 1rem;\n\talign-items: center;\n}\n\n.nav ul li {\n\tlist-style: none;\n\ttext-transform: uppercase;\n\tfont-size: 0.75rem;\n\tfont-weight: 600;\n}\n\n.nav ul li:hover {\n  cursor: pointer;\n  color: #df6310;\n}\n\n.scroll,\n.nohero {\n  background-color: #ffffff;\n  color: black;\n}\n\n.footerContainer {\n\twidth: 100%;\n  bottom: 0;\n\tbackground-color: #df6310;\n\tcolor: #ffffff;\n  display: grid;\n  place-items: center;\n}\n\n.contact {\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\tbackground-color: #1A1F23;\n\tcolor: #fcfcfc;\n  font-size: 0.75rem;\n  padding-top: 10vh;\n  padding-bottom: 10vh;\n}\n\n.contact h4,\n.contact p {\n  text-align: center;\n}\n\n.contact h4 {\n  font-size: 0.9rem;\n}\n\n.footer-container {\n  width: 100%;\n  height: 35vh;\n  display: grid;\n  place-content: center;\n}\n\n.footer-container h1 {\n  text-align: center;\n}\n\n.hero {\n  max-width: 100vw;\n  width: 100vw;\n  height: 100vh;\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center;\n  color: white;\n  display: grid;\n  align-items: center;\n  color: #df6310;\n}\n\n.logo {\n  color: #df6310;\n}\n\n.hero div {\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n  padding-left: 7.5vw;\n  line-height: 3em;\n}\n\n.hero h1 {\n  font-size: 3rem;\n}\n\n.hero h3 {\n  font-size: 1.5rem;\n}\n\n.hero button {\n  background-color: transparent;\n  border: 1px solid #ffffff;\n  color: #ffffff;\n  padding: 0.75rem 1.5rem;\n  text-transform: uppercase;\n  font-size: 0.7rem;\n  cursor: pointer;\n}\n\n.hero button:hover {\n  color: #df6310;\n  border: 1px solid #df6310;\n}\n\n.reservation,\n.specials,\n.history {\n  padding: 10vh 10vw 20vh;\n}\n\n.menu-page {\n  padding: 15vh 0 5vh;\n}\n\n.specials h2 {\n  margin-bottom: 2.5rem;\n  text-align: center;\n  font-size: 28px;\n  color: #df6310;\n  text-transform: capitalize;\n}\n\n.specials .card-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 3rem;\n}\n\n.card-container .card {\n  display: grid;\n  justify-items: center;\n}\n\n.card h3 {\n  text-transform: capitalize;\n  color: #1A1F23;\n}\n\n.card p {\n  text-align: center;\n  font-size: 0.85rem;\n  color: #1A1F23;\n}\n\n.card .price {\n  font-size: 1.2rem;\n  color: #df6310;\n  margin: 0.25rem;\n}\n\n.specials img {\n  width: 180px;\n  height: 140px;\n  border-radius: 25px;\n  margin-bottom: 0.5rem;\n}\n\n.reservation {\n  margin-top: 15vh;\n}\n\n.reservation form {\n  padding: 0.5rem 5rem;\n  display: grid;\n}\n\n.reservation h1,\n.reservation p,\n.history h1,\n.history p {\n  text-align: center;\n}\n\n.reservation h1,\n.history h1 {\n  color: #df6310;\n  font-size: 28px;\n  text-transform: capitalize;\n  margin-bottom: 0.5rem;\n}\n\n.reservation p,\n.history p {\n  color: #1A1F23;\n  font-size: 0.9rem;\n}\n\n.reservation .form-container {\n  margin-top: 2rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 2rem 4rem;\n}\n\n.reservation form input,\n.reservation form textarea {\n  padding: 0.5rem;\n  font: 1.15;\n  color: #1A1F23;\n  border: none;\n}\n\n.reservation form input:focus,\n.reservation form textarea:focus {\n  outline: none;\n  border: 1px solid #df6310;\n}\n\n.reservation form textarea {\n  margin-top: 2rem;\n  margin-bottom: 3rem;\n  width: 100%;\n}\n\n.reservation form button,\n.history button {\n  color: #ffffff;\n  padding: 0.75rem 2rem;\n  text-transform: uppercase;\n  font-size: 0.7rem;\n  cursor: pointer;\n  background-color: #df6310;\n  border: none;\n  justify-self: center;\n}\n\n.reservation form button:hover,\n.history button:hover {\n  background-color: #ffffff;\n  color: #df6310;\n  border: 1px solid #df6310;\n}\n\n.history {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n  justify-self: center;\n}\n\n.about-img {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n\n.about-img img {\n  width: 150px;\n  height: 210px;\n}\n\n.content {\n  display: grid;\n  place-content: center;\n}\n\n.content button {\n  margin-top: 2rem;\n}\n\n.about-hero {\n  max-width: 100vw;\n  width: 100vw;\n  height: 60vh;\n  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  background-position: center;\n  color: #df6310;\n  text-align: center;\n  display: grid;\n  place-content: center;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbody {\n  font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n#content {\n  position: relative;\n}\n\n.header {\n  position: sticky;\n  top: 0;\n  display: flex;\n\tjustify-content: space-between;\n\talign-items: flex-start;\n\tpadding: 0 7.5vw;\n  align-items: center;\n  height: 15vh;\n  z-index: 10;\n  color: #ffffff;\n  margin-top: -15vh;\n}\n\n.nav ul {\n  display: flex;\n\tgap: 1rem;\n\talign-items: center;\n}\n\n.nav ul li {\n\tlist-style: none;\n\ttext-transform: uppercase;\n\tfont-size: 0.75rem;\n\tfont-weight: 600;\n}\n\n.nav ul li:hover {\n  cursor: pointer;\n  color: #df6310;\n}\n\n.scroll,\n.nohero {\n  background-color: #ffffff;\n  color: black;\n}\n\n.footerContainer {\n\twidth: 100%;\n  bottom: 0;\n\tbackground-color: #df6310;\n\tcolor: #ffffff;\n  display: grid;\n  place-items: center;\n}\n\n.contact {\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\tbackground-color: #1A1F23;\n\tcolor: #fcfcfc;\n  font-size: 0.75rem;\n  padding-top: 10vh;\n  padding-bottom: 10vh;\n}\n\n.contact h4,\n.contact p {\n  text-align: center;\n}\n\n.contact h4 {\n  font-size: 0.9rem;\n}\n\n.footer-container {\n  width: 100%;\n  height: 35vh;\n  display: grid;\n  place-content: center;\n}\n\n.footer-container h1 {\n  text-align: center;\n}\n\n.hero {\n  max-width: 100vw;\n  width: 100vw;\n  height: 100vh;\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./asset/thlo.jpg);\n  background-size: cover;\n  background-position: center;\n  color: white;\n  display: grid;\n  align-items: center;\n  color: #df6310;\n}\n\n.logo {\n  color: #df6310;\n}\n\n.hero div {\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n  padding-left: 7.5vw;\n  line-height: 3em;\n}\n\n.hero h1 {\n  font-size: 3rem;\n}\n\n.hero h3 {\n  font-size: 1.5rem;\n}\n\n.hero button {\n  background-color: transparent;\n  border: 1px solid #ffffff;\n  color: #ffffff;\n  padding: 0.75rem 1.5rem;\n  text-transform: uppercase;\n  font-size: 0.7rem;\n  cursor: pointer;\n}\n\n.hero button:hover {\n  color: #df6310;\n  border: 1px solid #df6310;\n}\n\n.reservation,\n.specials,\n.history {\n  padding: 10vh 10vw 20vh;\n}\n\n.menu-page {\n  padding: 15vh 0 5vh;\n}\n\n.specials h2 {\n  margin-bottom: 2.5rem;\n  text-align: center;\n  font-size: 28px;\n  color: #df6310;\n  text-transform: capitalize;\n}\n\n.specials .card-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 3rem;\n}\n\n.card-container .card {\n  display: grid;\n  justify-items: center;\n}\n\n.card h3 {\n  text-transform: capitalize;\n  color: #1A1F23;\n}\n\n.card p {\n  text-align: center;\n  font-size: 0.85rem;\n  color: #1A1F23;\n}\n\n.card .price {\n  font-size: 1.2rem;\n  color: #df6310;\n  margin: 0.25rem;\n}\n\n.specials img {\n  width: 180px;\n  height: 140px;\n  border-radius: 25px;\n  margin-bottom: 0.5rem;\n}\n\n.reservation {\n  margin-top: 15vh;\n}\n\n.reservation form {\n  padding: 0.5rem 5rem;\n  display: grid;\n}\n\n.reservation h1,\n.reservation p,\n.history h1,\n.history p {\n  text-align: center;\n}\n\n.reservation h1,\n.history h1 {\n  color: #df6310;\n  font-size: 28px;\n  text-transform: capitalize;\n  margin-bottom: 0.5rem;\n}\n\n.reservation p,\n.history p {\n  color: #1A1F23;\n  font-size: 0.9rem;\n}\n\n.reservation .form-container {\n  margin-top: 2rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 2rem 4rem;\n}\n\n.reservation form input,\n.reservation form textarea {\n  padding: 0.5rem;\n  font: 1.15;\n  color: #1A1F23;\n  border: none;\n}\n\n.reservation form input:focus,\n.reservation form textarea:focus {\n  outline: none;\n  border: 1px solid #df6310;\n}\n\n.reservation form textarea {\n  margin-top: 2rem;\n  margin-bottom: 3rem;\n  width: 100%;\n}\n\n.reservation form button,\n.history button {\n  color: #ffffff;\n  padding: 0.75rem 2rem;\n  text-transform: uppercase;\n  font-size: 0.7rem;\n  cursor: pointer;\n  background-color: #df6310;\n  border: none;\n  justify-self: center;\n}\n\n.reservation form button:hover,\n.history button:hover {\n  background-color: #ffffff;\n  color: #df6310;\n  border: 1px solid #df6310;\n}\n\n.history {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n  justify-self: center;\n}\n\n.about-img {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n\n.about-img img {\n  width: 150px;\n  height: 210px;\n}\n\n.content {\n  display: grid;\n  place-content: center;\n}\n\n.content button {\n  margin-top: 2rem;\n}\n\n.about-hero {\n  max-width: 100vw;\n  width: 100vw;\n  height: 60vh;\n  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(./asset/hmbash.jpeg);\n  background-size: cover;\n  background-position: center;\n  color: #df6310;\n  text-align: center;\n  display: grid;\n  place-content: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ about)
/* harmony export */ });
/* harmony import */ var _asset_dorho_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset/dorho.jpg */ "./src/asset/dorho.jpg");
/* harmony import */ var _asset_fata_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/fata.jpg */ "./src/asset/fata.jpg");



function about() {
  const container = document.createElement('div');
  container.classList.add('about-container');

  const hero = document.createElement('div');
  hero.classList.add('about-hero');

  const heading = document.createElement('h1');
  heading.textContent = 'About Us';

  hero.appendChild(heading);

  const content = document.createElement('div');
  content.classList.add('history');

  const text = document.createElement('div');
  text.classList.add('content');
  const title = document.createElement('h1');
  title.textContent = 'History';
  const disc = document.createElement('p');
  disc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam diam diam, ac venenatis elit vehicula eget. Sed vehicula aliquam lectus ac consectetur.';
  const button = document.createElement('button');
  button.textContent = 'More';
  text.appendChild(title);
  text.appendChild(disc);
  text.appendChild(button);

  const img = document.createElement('div');
  img.classList.add('about-img');
  const img1 = new Image();
  img1.src = _asset_fata_jpg__WEBPACK_IMPORTED_MODULE_1__;
  const img2 = new Image();
  img2.src = _asset_dorho_jpg__WEBPACK_IMPORTED_MODULE_0__;
  img.appendChild(img1);
  img.appendChild(img2);

  content.appendChild(text);
  content.appendChild(img);

  container.appendChild(hero);
  container.appendChild(content);

  return container;
}

/***/ }),

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ items)
/* harmony export */ });
function items(foods, text) {
  const container = document.createElement('div');
  container.classList.add('specials');
  
  const h2 = document.createElement('h2');
  h2.textContent = text;
  
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-container');

  for (const name in foods) {
    const card = document.createElement('div');
    card.classList.add('card');
  
    const img = new Image();
    img.src = foods[name].img;
    card.appendChild(img);
  
    const h3 = document.createElement('h3');
    h3.textContent = name;
    card.appendChild(h3);

    if (foods[name].price) {
      const price = document.createElement('p');
      price.classList.add('price');
      price.textContent = '$' + foods[name].price;
      card.appendChild(price);
    }
  
    const p = document.createElement('p');
    p.textContent = foods[name].disc;
    card.appendChild(p);
  
    cardContainer.appendChild(card);
  }
  container.appendChild(h2);
  container.appendChild(cardContainer);
  
  return container;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _asset_thlo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset/thlo.jpg */ "./src/asset/thlo.jpg");
/* harmony import */ var _asset_hlbet_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/hlbet.jpg */ "./src/asset/hlbet.jpg");
/* harmony import */ var _asset_dorho_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset/dorho.jpg */ "./src/asset/dorho.jpg");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card */ "./src/card.js");






function home() {
  const homeContainer = document.createElement('div');
  homeContainer.classList.add('home-container');

  const foods = {
    thlo: {
      disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
      img: _asset_thlo_jpg__WEBPACK_IMPORTED_MODULE_0__,
    },
    hlbet: {
      disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
      img: _asset_hlbet_jpg__WEBPACK_IMPORTED_MODULE_1__,
    },
    dorho: {
      disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
      img: _asset_dorho_jpg__WEBPACK_IMPORTED_MODULE_2__,
    }
  }

  homeContainer.appendChild(hero());
  homeContainer.appendChild((0,_card__WEBPACK_IMPORTED_MODULE_3__["default"])(foods, 'our specials'));
  
  return homeContainer;
}

function hero() {
  const hero = document.createElement('div');
  hero.classList.add('hero');

  const container = document.createElement('div');

  const heroHeading = document.createElement('h1');
  heroHeading.textContent = "welcome to Tuum";
  container.appendChild(heroHeading);

  const heroSub = document.createElement('h3');
  heroSub.textContent = "We serve with love";
  container.appendChild(heroSub);

  const actionButton = document.createElement('button');
  actionButton.textContent = 'view menu';
  container.appendChild(actionButton);

  hero.appendChild(container);

  return hero;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _asset_thlo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asset/thlo.jpg */ "./src/asset/thlo.jpg");
/* harmony import */ var _asset_gaat_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/gaat.jpg */ "./src/asset/gaat.jpg");
/* harmony import */ var _asset_hlbet_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset/hlbet.jpg */ "./src/asset/hlbet.jpg");
/* harmony import */ var _asset_dorho_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asset/dorho.jpg */ "./src/asset/dorho.jpg");
/* harmony import */ var _asset_aynet_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asset/aynet.jpg */ "./src/asset/aynet.jpg");
/* harmony import */ var _asset_fata_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asset/fata.jpg */ "./src/asset/fata.jpg");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card */ "./src/card.js");








function menu() {
	const menu = document.createElement('div');
  menu.classList.add('menu-page');

	const foods = {
		thlo: {
		  disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
		  img: _asset_thlo_jpg__WEBPACK_IMPORTED_MODULE_0__,
      price: 10,
		},
    dorho: {
		  disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
		  img: _asset_dorho_jpg__WEBPACK_IMPORTED_MODULE_3__,
      price: 8,
		},
		hlbet: {
		  disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
		  img: _asset_hlbet_jpg__WEBPACK_IMPORTED_MODULE_2__,
      price: 4,
		},
		gaat: {
		  disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
		  img: _asset_gaat_jpg__WEBPACK_IMPORTED_MODULE_1__,
      price: 5,
		},
    aynet: {
		  disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
		  img: _asset_aynet_jpg__WEBPACK_IMPORTED_MODULE_4__,
      price: 4,
		},
    fata: {
		  disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
		  img: _asset_fata_jpg__WEBPACK_IMPORTED_MODULE_5__,
      price: 3,
		},
	}

  menu.appendChild((0,_card__WEBPACK_IMPORTED_MODULE_6__["default"])(foods, 'our menu'));

  return menu;
}

/***/ }),

/***/ "./src/reservation.js":
/*!****************************!*\
  !*** ./src/reservation.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ reservation)
/* harmony export */ });
function reservation() {
  const container = document.createElement('div');
  container.classList.add('reservation');

  const title = document.createElement('h1');
  title.textContent = 'book a table';

  const text = document.createElement('p');
  text.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod';

  container.appendChild(title);
  container.appendChild(text);
  container.appendChild(form());

  return container;
}

function form() {
  const form = document.createElement('form');
  form.setAttribute('method', 'post');
  form.classList.add('reservation-form');

  const formContainer = document.createElement('div');
  formContainer.classList.add('form-container');

  const name = document.createElement('input');
  name.setAttribute('type', 'text');
  name.setAttribute('name', 'name');
  name.setAttribute('id', 'name');
  name.setAttribute('placeholder', 'Your Name');

  const phone = document.createElement('input');
  phone.setAttribute('type', 'tel');
  phone.setAttribute('name', 'phoneNumber');
  phone.setAttribute('id', 'phone');
  phone.setAttribute('placeholder', 'Your Phone Number');

  const date = document.createElement('input');
  date.setAttribute('type', 'date');
  date.setAttribute('name', 'date');
  date.setAttribute('id', 'date');

  const time = document.createElement('input');
  time.setAttribute('type', 'time');
  time.setAttribute('name', 'time');
  time.setAttribute('id', 'time');

  formContainer.appendChild(name);
  formContainer.appendChild(phone);
  formContainer.appendChild(date);
  formContainer.appendChild(time);

  const message = document.createElement('textarea');
  message.setAttribute('placeholder', 'Enter Your Requirements.');
  message.setAttribute('id', 'message');
  message.setAttribute('rows', '8');

  const submit = document.createElement('button');
  submit.setAttribute('type', 'submit');
  submit.textContent = 'Submit';

  form.appendChild(formContainer);
  form.appendChild(message);
  form.appendChild(submit);

  return form;
}

/***/ }),

/***/ "./src/asset/aynet.jpg":
/*!*****************************!*\
  !*** ./src/asset/aynet.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45c45bfddaabae2b6470.jpg";

/***/ }),

/***/ "./src/asset/dorho.jpg":
/*!*****************************!*\
  !*** ./src/asset/dorho.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9e11b9dd04b9a308664.jpg";

/***/ }),

/***/ "./src/asset/fata.jpg":
/*!****************************!*\
  !*** ./src/asset/fata.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51093304bcbab099f42a.jpg";

/***/ }),

/***/ "./src/asset/gaat.jpg":
/*!****************************!*\
  !*** ./src/asset/gaat.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ed370ddb2f1671df614.jpg";

/***/ }),

/***/ "./src/asset/hlbet.jpg":
/*!*****************************!*\
  !*** ./src/asset/hlbet.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c5af04a57c22cb201cdc.jpg";

/***/ }),

/***/ "./src/asset/hmbash.jpeg":
/*!*******************************!*\
  !*** ./src/asset/hmbash.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11c92cfb5b488664223d.jpeg";

/***/ }),

/***/ "./src/asset/thlo.jpg":
/*!****************************!*\
  !*** ./src/asset/thlo.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "002c95de6e66ceec6b33.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _reservation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservation */ "./src/reservation.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");






(function() {
  const content = document.querySelector('#content');
  content.appendChild(header());
  content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
  content.appendChild(footer());

  window.onscroll = function () {handleScroll()}
})();

function handleScroll() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.querySelector('.header').classList.add('scroll');
  } else {
    document.querySelector('.header').classList.remove('scroll');
  }
}

function nav() {
  const nav = document.createElement('div');
	nav.classList.add("nav");

	const ul = document.createElement('ul');

	const home = document.createElement('li');
	home.classList.add('home');
	home.textContent = "home";
  home.addEventListener('click', handleHome);
	
	const about = document.createElement('li');
	about.classList.add('about');
	about.textContent = "about";
  about.addEventListener('click', handleAbout);

	const menu = document.createElement('li');
	menu.classList.add('menu');
	menu.textContent = "menu";
  menu.addEventListener('click', handleMenu);

	const reservation = document.createElement('li');
	reservation.classList.add('nav-reservation');
	reservation.textContent = "reservation";
  reservation.addEventListener('click', handleReservation);

	ul.appendChild(home);
	ul.appendChild(about);
	ul.appendChild(menu);
	ul.appendChild(reservation);

	nav.appendChild(ul);

  return nav;
}

function header() {
  const header = document.createElement('div');
  header.classList.add('header');

  const logo = document.createElement('h1');
  logo.classList.add('logo');
  logo.textContent = "Tuum";

  header.appendChild(logo);
  header.appendChild(nav());

  return header;
}

function footer() {
  const footerContainer = document.createElement('div');
  footerContainer.classList.add('footerContainer');

  const contact = document.createElement('div');
  contact.classList.add('contact');

  const address = document.createElement('div');
  address.classList.add('address');
  const h4 = document.createElement('h4');
  h4.textContent = "Address";
  const add = document.createElement('p');
  add.textContent = "Romanat Mekelle, Tigray"
  address.appendChild(h4);
  address.appendChild(add);

  const follow = document.createElement('div');
  const hf = document.createElement('h4');
  hf.textContent = "Follow";
  follow.appendChild(hf)  

  const info = document.createElement('div');
  const hi = document.createElement('h4');
  hi.textContent = "Contact";
  info.appendChild(hi);
  const email = document.createElement('p');
  email.textContent = "info@resturant.com";
  const phone = document.createElement('p');
  phone.textContent = "+251914000000";
  info.appendChild(email);
  info.appendChild(phone);

  contact.appendChild(address);
  contact.appendChild(follow);
  contact.appendChild(info);

  const footer = document.createElement('div');
  footer.classList.add("footer-container");
  const footerLogo = document.createElement('h1');
  footerLogo.textContent = "Tuum";
  footer.appendChild(footerLogo);
  footer.appendChild(nav());

  footerContainer.appendChild(contact);
  footerContainer.appendChild(footer);

  return footerContainer;
}

function handleHome(e) {
  document.querySelector('.header').classList.remove('nohero');
  content.removeChild(content.childNodes[1]);
  content.insertBefore((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])(), content.childNodes[1]);
}

function handleAbout(e) {
  document.querySelector('.header').classList.remove('nohero');
  content.removeChild(content.childNodes[1]);
  content.insertBefore((0,_about__WEBPACK_IMPORTED_MODULE_1__["default"])(), content.childNodes[1]);
}

function handleMenu(e) {
  document.querySelector('.header').classList.remove('nohero');
  document.querySelector('.header').classList.add('nohero');
  content.removeChild(content.childNodes[1]);
  content.insertBefore((0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])(), content.childNodes[1]);
}

function handleReservation(e) {
  document.querySelector('.header').classList.remove('nohero');
  document.querySelector('.header').classList.add('nohero');
  content.removeChild(content.childNodes[1]);
  content.insertBefore((0,_reservation__WEBPACK_IMPORTED_MODULE_3__["default"])(), content.childNodes[1]);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8saUZBQWlGLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSw2QkFBNkIsY0FBYyxlQUFlLEdBQUcsVUFBVSxtRUFBbUUsR0FBRyxjQUFjLHVCQUF1QixHQUFHLGFBQWEscUJBQXFCLFdBQVcsa0JBQWtCLG1DQUFtQyw0QkFBNEIscUJBQXFCLHdCQUF3QixpQkFBaUIsZ0JBQWdCLG1CQUFtQixzQkFBc0IsR0FBRyxhQUFhLGtCQUFrQixjQUFjLHdCQUF3QixHQUFHLGdCQUFnQixxQkFBcUIsOEJBQThCLHVCQUF1QixxQkFBcUIsR0FBRyxzQkFBc0Isb0JBQW9CLG1CQUFtQixHQUFHLHVCQUF1Qiw4QkFBOEIsaUJBQWlCLEdBQUcsc0JBQXNCLGdCQUFnQixjQUFjLDhCQUE4QixtQkFBbUIsa0JBQWtCLHdCQUF3QixHQUFHLGNBQWMsZ0JBQWdCLGtCQUFrQixrQ0FBa0MsOEJBQThCLG1CQUFtQix1QkFBdUIsc0JBQXNCLHlCQUF5QixHQUFHLDhCQUE4Qix1QkFBdUIsR0FBRyxpQkFBaUIsc0JBQXNCLEdBQUcsdUJBQXVCLGdCQUFnQixpQkFBaUIsa0JBQWtCLDBCQUEwQixHQUFHLDBCQUEwQix1QkFBdUIsR0FBRyxXQUFXLHFCQUFxQixpQkFBaUIsa0JBQWtCLCtGQUErRiwyQkFBMkIsZ0NBQWdDLGlCQUFpQixrQkFBa0Isd0JBQXdCLG1CQUFtQixHQUFHLFdBQVcsbUJBQW1CLEdBQUcsZUFBZSwyRUFBMkUsd0JBQXdCLHFCQUFxQixHQUFHLGNBQWMsb0JBQW9CLEdBQUcsY0FBYyxzQkFBc0IsR0FBRyxrQkFBa0Isa0NBQWtDLDhCQUE4QixtQkFBbUIsNEJBQTRCLDhCQUE4QixzQkFBc0Isb0JBQW9CLEdBQUcsd0JBQXdCLG1CQUFtQiw4QkFBOEIsR0FBRyx5Q0FBeUMsNEJBQTRCLEdBQUcsZ0JBQWdCLHdCQUF3QixHQUFHLGtCQUFrQiwwQkFBMEIsdUJBQXVCLG9CQUFvQixtQkFBbUIsK0JBQStCLEdBQUcsK0JBQStCLGtCQUFrQixpRUFBaUUsY0FBYyxHQUFHLDJCQUEyQixrQkFBa0IsMEJBQTBCLEdBQUcsY0FBYywrQkFBK0IsbUJBQW1CLEdBQUcsYUFBYSx1QkFBdUIsdUJBQXVCLG1CQUFtQixHQUFHLGtCQUFrQixzQkFBc0IsbUJBQW1CLG9CQUFvQixHQUFHLG1CQUFtQixpQkFBaUIsa0JBQWtCLHdCQUF3QiwwQkFBMEIsR0FBRyxrQkFBa0IscUJBQXFCLEdBQUcsdUJBQXVCLHlCQUF5QixrQkFBa0IsR0FBRyxpRUFBaUUsdUJBQXVCLEdBQUcsbUNBQW1DLG1CQUFtQixvQkFBb0IsK0JBQStCLDBCQUEwQixHQUFHLGlDQUFpQyxtQkFBbUIsc0JBQXNCLEdBQUcsa0NBQWtDLHFCQUFxQixrQkFBa0IsaUVBQWlFLG1CQUFtQixHQUFHLDBEQUEwRCxvQkFBb0IsZUFBZSxtQkFBbUIsaUJBQWlCLEdBQUcsc0VBQXNFLGtCQUFrQiw4QkFBOEIsR0FBRyxnQ0FBZ0MscUJBQXFCLHdCQUF3QixnQkFBZ0IsR0FBRyxnREFBZ0QsbUJBQW1CLDBCQUEwQiw4QkFBOEIsc0JBQXNCLG9CQUFvQiw4QkFBOEIsaUJBQWlCLHlCQUF5QixHQUFHLDREQUE0RCw4QkFBOEIsbUJBQW1CLDhCQUE4QixHQUFHLGNBQWMsa0JBQWtCLG1DQUFtQyxjQUFjLHdCQUF3Qix5QkFBeUIsR0FBRyxnQkFBZ0Isa0JBQWtCLGdCQUFnQix3QkFBd0IsR0FBRyxvQkFBb0IsaUJBQWlCLGtCQUFrQixHQUFHLGNBQWMsa0JBQWtCLDBCQUEwQixHQUFHLHFCQUFxQixxQkFBcUIsR0FBRyxpQkFBaUIscUJBQXFCLGlCQUFpQixpQkFBaUIsb0dBQW9HLDJCQUEyQixnQ0FBZ0MsbUJBQW1CLHVCQUF1QixrQkFBa0IsMEJBQTBCLEdBQUcsbUJBQW1CO0FBQ25wWTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1oxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QmE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSw4RkFBYyxHQUFHLDhGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZzQztBQUNGOztBQUVyQjtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDRDQUFJO0FBQ2pCO0FBQ0EsYUFBYSw2Q0FBSztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzlDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDb0M7QUFDRTtBQUNBO0FBQ1g7OztBQUdaO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDRDQUFJO0FBQ2YsS0FBSztBQUNMO0FBQ0E7QUFDQSxXQUFXLDZDQUFLO0FBQ2hCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsV0FBVyw2Q0FBSztBQUNoQjtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLGlEQUFLO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERvQztBQUNBO0FBQ0U7QUFDQTtBQUNEO0FBQ0Y7QUFDUjs7QUFFWjtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUyw0Q0FBSTtBQUNiO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxTQUFTLDZDQUFLO0FBQ2Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFNBQVMsNkNBQUs7QUFDZDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsU0FBUyw0Q0FBSTtBQUNiO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxTQUFTLDZDQUFLO0FBQ2Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFNBQVMsNENBQUk7QUFDYjtBQUNBLEdBQUc7QUFDSDs7QUFFQSxtQkFBbUIsaURBQUs7O0FBRXhCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaERlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0EwQjtBQUNFO0FBQ0Y7QUFDYztBQUNuQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFJO0FBQzFCOztBQUVBLGlDQUFpQztBQUNqQyxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlEQUFJO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrREFBSztBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpREFBSTtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3REFBVztBQUNsQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVyYW50Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50Ly4vc3JjL2NhcmQuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50Ly4vc3JjL3Jlc2VydmF0aW9uLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3R1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0L3RobG8uanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldC9obWJhc2guanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXHRwYWRkaW5nOiAwIDcuNXZ3O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTV2aDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBtYXJnaW4tdG9wOiAtMTV2aDtcXG59XFxuXFxuLm5hdiB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMXJlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2IHVsIGxpIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0Zm9udC1zaXplOiAwLjc1cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5uYXYgdWwgbGk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNkZjYzMTA7XFxufVxcblxcbi5zY3JvbGwsXFxuLm5vaGVybyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZm9vdGVyQ29udGFpbmVyIHtcXG5cXHR3aWR0aDogMTAwJTtcXG4gIGJvdHRvbTogMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGY2MzEwO1xcblxcdGNvbG9yOiAjZmZmZmZmO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0IHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMxQTFGMjM7XFxuXFx0Y29sb3I6ICNmY2ZjZmM7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBwYWRkaW5nLXRvcDogMTB2aDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHZoO1xcbn1cXG5cXG4uY29udGFjdCBoNCxcXG4uY29udGFjdCBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QgaDQge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5mb290ZXItY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzNXZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3Rlci1jb250YWluZXIgaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGVybyB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogI2RmNjMxMDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgY29sb3I6ICNkZjYzMTA7XFxufVxcblxcbi5oZXJvIGRpdiB7XFxuICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xcbiAgcGFkZGluZy1sZWZ0OiA3LjV2dztcXG4gIGxpbmUtaGVpZ2h0OiAzZW07XFxufVxcblxcbi5oZXJvIGgxIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmhlcm8gaDMge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5oZXJvIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVybyBidXR0b246aG92ZXIge1xcbiAgY29sb3I6ICNkZjYzMTA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGY2MzEwO1xcbn1cXG5cXG4ucmVzZXJ2YXRpb24sXFxuLnNwZWNpYWxzLFxcbi5oaXN0b3J5IHtcXG4gIHBhZGRpbmc6IDEwdmggMTB2dyAyMHZoO1xcbn1cXG5cXG4ubWVudS1wYWdlIHtcXG4gIHBhZGRpbmc6IDE1dmggMCA1dmg7XFxufVxcblxcbi5zcGVjaWFscyBoMiB7XFxuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBjb2xvcjogI2RmNjMxMDtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbn1cXG5cXG4uc3BlY2lhbHMgLmNhcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICBnYXA6IDNyZW07XFxufVxcblxcbi5jYXJkLWNvbnRhaW5lciAuY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2FyZCBoMyB7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIGNvbG9yOiAjMUExRjIzO1xcbn1cXG5cXG4uY2FyZCBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gIGNvbG9yOiAjMUExRjIzO1xcbn1cXG5cXG4uY2FyZCAucHJpY2Uge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBjb2xvcjogI2RmNjMxMDtcXG4gIG1hcmdpbjogMC4yNXJlbTtcXG59XFxuXFxuLnNwZWNpYWxzIGltZyB7XFxuICB3aWR0aDogMTgwcHg7XFxuICBoZWlnaHQ6IDE0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnJlc2VydmF0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDE1dmg7XFxufVxcblxcbi5yZXNlcnZhdGlvbiBmb3JtIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSA1cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnJlc2VydmF0aW9uIGgxLFxcbi5yZXNlcnZhdGlvbiBwLFxcbi5oaXN0b3J5IGgxLFxcbi5oaXN0b3J5IHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucmVzZXJ2YXRpb24gaDEsXFxuLmhpc3RvcnkgaDEge1xcbiAgY29sb3I6ICNkZjYzMTA7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLnJlc2VydmF0aW9uIHAsXFxuLmhpc3RvcnkgcCB7XFxuICBjb2xvcjogIzFBMUYyMztcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4ucmVzZXJ2YXRpb24gLmZvcm0tY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcbiAgZ2FwOiAycmVtIDRyZW07XFxufVxcblxcbi5yZXNlcnZhdGlvbiBmb3JtIGlucHV0LFxcbi5yZXNlcnZhdGlvbiBmb3JtIHRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGZvbnQ6IDEuMTU7XFxuICBjb2xvcjogIzFBMUYyMztcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnJlc2VydmF0aW9uIGZvcm0gaW5wdXQ6Zm9jdXMsXFxuLnJlc2VydmF0aW9uIGZvcm0gdGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZjYzMTA7XFxufVxcblxcbi5yZXNlcnZhdGlvbiBmb3JtIHRleHRhcmVhIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5yZXNlcnZhdGlvbiBmb3JtIGJ1dHRvbixcXG4uaGlzdG9yeSBidXR0b24ge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBwYWRkaW5nOiAwLjc1cmVtIDJyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGY2MzEwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5yZXNlcnZhdGlvbiBmb3JtIGJ1dHRvbjpob3ZlcixcXG4uaGlzdG9yeSBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGNvbG9yOiAjZGY2MzEwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RmNjMxMDtcXG59XFxuXFxuLmhpc3Rvcnkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdhcDogNHJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmFib3V0LWltZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWJvdXQtaW1nIGltZyB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDIxMHB4O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCBidXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLmFib3V0LWhlcm8ge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogNjB2aDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMjUpLCByZ2JhKDAsIDAsIDAsIDAuMjUpKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBjb2xvcjogI2RmNjMxMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsU0FBUztDQUNULFVBQVU7QUFDWDs7QUFFQTtFQUNFLDhEQUE4RDtBQUNoRTs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sYUFBYTtDQUNkLDhCQUE4QjtDQUM5Qix1QkFBdUI7Q0FDdkIsZ0JBQWdCO0VBQ2YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7Q0FDZCxTQUFTO0NBQ1QsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtDQUNDLFdBQVc7RUFDVixTQUFTO0NBQ1YseUJBQXlCO0NBQ3pCLGNBQWM7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGFBQWE7Q0FDYiw2QkFBNkI7Q0FDN0IseUJBQXlCO0NBQ3pCLGNBQWM7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYiw0R0FBMEY7RUFDMUYsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHNFQUFzRTtFQUN0RSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBOzs7RUFHRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDREQUE0RDtFQUM1RCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtBQUNmOztBQUVBOzs7O0VBSUUsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw0REFBNEQ7RUFDNUQsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBOztFQUVFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLDhHQUErRjtFQUMvRixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXHRwYWRkaW5nOiAwIDcuNXZ3O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTV2aDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBtYXJnaW4tdG9wOiAtMTV2aDtcXG59XFxuXFxuLm5hdiB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMXJlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2IHVsIGxpIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0Zm9udC1zaXplOiAwLjc1cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5uYXYgdWwgbGk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNkZjYzMTA7XFxufVxcblxcbi5zY3JvbGwsXFxuLm5vaGVybyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZm9vdGVyQ29udGFpbmVyIHtcXG5cXHR3aWR0aDogMTAwJTtcXG4gIGJvdHRvbTogMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGY2MzEwO1xcblxcdGNvbG9yOiAjZmZmZmZmO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0IHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMxQTFGMjM7XFxuXFx0Y29sb3I6ICNmY2ZjZmM7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBwYWRkaW5nLXRvcDogMTB2aDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHZoO1xcbn1cXG5cXG4uY29udGFjdCBoNCxcXG4uY29udGFjdCBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhY3QgaDQge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5mb290ZXItY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzNXZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3Rlci1jb250YWluZXIgaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGVybyB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSksIHVybCguL2Fzc2V0L3RobG8uanBnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjZGY2MzEwO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBjb2xvcjogI2RmNjMxMDtcXG59XFxuXFxuLmhlcm8gZGl2IHtcXG4gIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XFxuICBwYWRkaW5nLWxlZnQ6IDcuNXZ3O1xcbiAgbGluZS1oZWlnaHQ6IDNlbTtcXG59XFxuXFxuLmhlcm8gaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4uaGVybyBoMyB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmhlcm8gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZXJvIGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogI2RmNjMxMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZjYzMTA7XFxufVxcblxcbi5yZXNlcnZhdGlvbixcXG4uc3BlY2lhbHMsXFxuLmhpc3Rvcnkge1xcbiAgcGFkZGluZzogMTB2aCAxMHZ3IDIwdmg7XFxufVxcblxcbi5tZW51LXBhZ2Uge1xcbiAgcGFkZGluZzogMTV2aCAwIDV2aDtcXG59XFxuXFxuLnNwZWNpYWxzIGgyIHtcXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGNvbG9yOiAjZGY2MzEwO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi5zcGVjaWFscyAuY2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gIGdhcDogM3JlbTtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIC5jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkIGgzIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgY29sb3I6ICMxQTFGMjM7XFxufVxcblxcbi5jYXJkIHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xcbiAgY29sb3I6ICMxQTFGMjM7XFxufVxcblxcbi5jYXJkIC5wcmljZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGNvbG9yOiAjZGY2MzEwO1xcbiAgbWFyZ2luOiAwLjI1cmVtO1xcbn1cXG5cXG4uc3BlY2lhbHMgaW1nIHtcXG4gIHdpZHRoOiAxODBweDtcXG4gIGhlaWdodDogMTQwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4ucmVzZXJ2YXRpb24ge1xcbiAgbWFyZ2luLXRvcDogMTV2aDtcXG59XFxuXFxuLnJlc2VydmF0aW9uIGZvcm0ge1xcbiAgcGFkZGluZzogMC41cmVtIDVyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ucmVzZXJ2YXRpb24gaDEsXFxuLnJlc2VydmF0aW9uIHAsXFxuLmhpc3RvcnkgaDEsXFxuLmhpc3RvcnkgcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5yZXNlcnZhdGlvbiBoMSxcXG4uaGlzdG9yeSBoMSB7XFxuICBjb2xvcjogI2RmNjMxMDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4ucmVzZXJ2YXRpb24gcCxcXG4uaGlzdG9yeSBwIHtcXG4gIGNvbG9yOiAjMUExRjIzO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5yZXNlcnZhdGlvbiAuZm9ybS1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICBnYXA6IDJyZW0gNHJlbTtcXG59XFxuXFxuLnJlc2VydmF0aW9uIGZvcm0gaW5wdXQsXFxuLnJlc2VydmF0aW9uIGZvcm0gdGV4dGFyZWEge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZm9udDogMS4xNTtcXG4gIGNvbG9yOiAjMUExRjIzO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucmVzZXJ2YXRpb24gZm9ybSBpbnB1dDpmb2N1cyxcXG4ucmVzZXJ2YXRpb24gZm9ybSB0ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RmNjMxMDtcXG59XFxuXFxuLnJlc2VydmF0aW9uIGZvcm0gdGV4dGFyZWEge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnJlc2VydmF0aW9uIGZvcm0gYnV0dG9uLFxcbi5oaXN0b3J5IGJ1dHRvbiB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHBhZGRpbmc6IDAuNzVyZW0gMnJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZjYzMTA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnJlc2VydmF0aW9uIGZvcm0gYnV0dG9uOmhvdmVyLFxcbi5oaXN0b3J5IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgY29sb3I6ICNkZjYzMTA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGY2MzEwO1xcbn1cXG5cXG4uaGlzdG9yeSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiA0cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYWJvdXQtaW1nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hYm91dC1pbWcgaW1nIHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMjEwcHg7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4uYWJvdXQtaGVybyB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiA2MHZoO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4yNSksIHJnYmEoMCwgMCwgMCwgMC4yNSkpLCB1cmwoLi9hc3NldC9obWJhc2guanBlZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgY29sb3I6ICNkZjYzMTA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZG9yaG8gZnJvbSAnLi9hc3NldC9kb3Joby5qcGcnO1xuaW1wb3J0IGZhdGEgZnJvbSAnLi9hc3NldC9mYXRhLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFib3V0KCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVyby5jbGFzc0xpc3QuYWRkKCdhYm91dC1oZXJvJyk7XG5cbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnQWJvdXQgVXMnO1xuXG4gIGhlcm8uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2hpc3RvcnknKTtcblxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRleHQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ0hpc3RvcnknO1xuICBjb25zdCBkaXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkaXNjLnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEV0aWFtIGFsaXF1YW0gZGlhbSBkaWFtLCBhYyB2ZW5lbmF0aXMgZWxpdCB2ZWhpY3VsYSBlZ2V0LiBTZWQgdmVoaWN1bGEgYWxpcXVhbSBsZWN0dXMgYWMgY29uc2VjdGV0dXIuJztcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdNb3JlJztcbiAgdGV4dC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHRleHQuYXBwZW5kQ2hpbGQoZGlzYyk7XG4gIHRleHQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1nLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWltZycpO1xuICBjb25zdCBpbWcxID0gbmV3IEltYWdlKCk7XG4gIGltZzEuc3JjID0gZmF0YTtcbiAgY29uc3QgaW1nMiA9IG5ldyBJbWFnZSgpO1xuICBpbWcyLnNyYyA9IGRvcmhvO1xuICBpbWcuYXBwZW5kQ2hpbGQoaW1nMSk7XG4gIGltZy5hcHBlbmRDaGlsZChpbWcyKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHRleHQpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGltZyk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm8pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpdGVtcyhmb29kcywgdGV4dCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NwZWNpYWxzJyk7XG4gIFxuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGgyLnRleHRDb250ZW50ID0gdGV4dDtcbiAgXG4gIGNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkLWNvbnRhaW5lcicpO1xuXG4gIGZvciAoY29uc3QgbmFtZSBpbiBmb29kcykge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9IGZvb2RzW25hbWVdLmltZztcbiAgICBjYXJkLmFwcGVuZENoaWxkKGltZyk7XG4gIFxuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoMy50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChoMyk7XG5cbiAgICBpZiAoZm9vZHNbbmFtZV0ucHJpY2UpIHtcbiAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgcHJpY2UuY2xhc3NMaXN0LmFkZCgncHJpY2UnKTtcbiAgICAgIHByaWNlLnRleHRDb250ZW50ID0gJyQnICsgZm9vZHNbbmFtZV0ucHJpY2U7XG4gICAgICBjYXJkLmFwcGVuZENoaWxkKHByaWNlKTtcbiAgICB9XG4gIFxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC50ZXh0Q29udGVudCA9IGZvb2RzW25hbWVdLmRpc2M7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChwKTtcbiAgXG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgfVxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaDIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZENvbnRhaW5lcik7XG4gIFxuICByZXR1cm4gY29udGFpbmVyO1xufSIsImltcG9ydCB0aGxvIGZyb20gJy4vYXNzZXQvdGhsby5qcGcnO1xuaW1wb3J0IGhsYmV0IGZyb20gJy4vYXNzZXQvaGxiZXQuanBnJztcbmltcG9ydCBkb3JobyBmcm9tICcuL2Fzc2V0L2RvcmhvLmpwZyc7XG5pbXBvcnQgaXRlbXMgZnJvbSAnLi9jYXJkJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCkge1xuICBjb25zdCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9tZS1jb250YWluZXInKTtcblxuICBjb25zdCBmb29kcyA9IHtcbiAgICB0aGxvOiB7XG4gICAgICBkaXNjOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQuJyxcbiAgICAgIGltZzogdGhsbyxcbiAgICB9LFxuICAgIGhsYmV0OiB7XG4gICAgICBkaXNjOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQuJyxcbiAgICAgIGltZzogaGxiZXQsXG4gICAgfSxcbiAgICBkb3Jobzoge1xuICAgICAgZGlzYzogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0LicsXG4gICAgICBpbWc6IGRvcmhvLFxuICAgIH1cbiAgfVxuXG4gIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVybygpKTtcbiAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtcyhmb29kcywgJ291ciBzcGVjaWFscycpKTtcbiAgXG4gIHJldHVybiBob21lQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBoZXJvKCkge1xuICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlcm8uY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnN0IGhlcm9IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVyb0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIndlbGNvbWUgdG8gVHV1bVwiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVyb0hlYWRpbmcpO1xuXG4gIGNvbnN0IGhlcm9TdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBoZXJvU3ViLnRleHRDb250ZW50ID0gXCJXZSBzZXJ2ZSB3aXRoIGxvdmVcIjtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm9TdWIpO1xuXG4gIGNvbnN0IGFjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhY3Rpb25CdXR0b24udGV4dENvbnRlbnQgPSAndmlldyBtZW51JztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGlvbkJ1dHRvbik7XG5cbiAgaGVyby5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIHJldHVybiBoZXJvO1xufSIsImltcG9ydCB0aGxvIGZyb20gJy4vYXNzZXQvdGhsby5qcGcnO1xuaW1wb3J0IGdhYXQgZnJvbSAnLi9hc3NldC9nYWF0LmpwZyc7XG5pbXBvcnQgaGxiZXQgZnJvbSAnLi9hc3NldC9obGJldC5qcGcnO1xuaW1wb3J0IGRvcmhvIGZyb20gJy4vYXNzZXQvZG9yaG8uanBnJztcbmltcG9ydCBheW5ldCBmcm9tICcuL2Fzc2V0L2F5bmV0LmpwZydcbmltcG9ydCBmYXRhIGZyb20gJy4vYXNzZXQvZmF0YS5qcGcnXG5pbXBvcnQgaXRlbXMgZnJvbSAnLi9jYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpIHtcblx0Y29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUtcGFnZScpO1xuXG5cdGNvbnN0IGZvb2RzID0ge1xuXHRcdHRobG86IHtcblx0XHQgIGRpc2M6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dC4nLFxuXHRcdCAgaW1nOiB0aGxvLFxuICAgICAgcHJpY2U6IDEwLFxuXHRcdH0sXG4gICAgZG9yaG86IHtcblx0XHQgIGRpc2M6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dC4nLFxuXHRcdCAgaW1nOiBkb3JobyxcbiAgICAgIHByaWNlOiA4LFxuXHRcdH0sXG5cdFx0aGxiZXQ6IHtcblx0XHQgIGRpc2M6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dC4nLFxuXHRcdCAgaW1nOiBobGJldCxcbiAgICAgIHByaWNlOiA0LFxuXHRcdH0sXG5cdFx0Z2FhdDoge1xuXHRcdCAgZGlzYzogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0LicsXG5cdFx0ICBpbWc6IGdhYXQsXG4gICAgICBwcmljZTogNSxcblx0XHR9LFxuICAgIGF5bmV0OiB7XG5cdFx0ICBkaXNjOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQuJyxcblx0XHQgIGltZzogYXluZXQsXG4gICAgICBwcmljZTogNCxcblx0XHR9LFxuICAgIGZhdGE6IHtcblx0XHQgIGRpc2M6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dC4nLFxuXHRcdCAgaW1nOiBmYXRhLFxuICAgICAgcHJpY2U6IDMsXG5cdFx0fSxcblx0fVxuXG4gIG1lbnUuYXBwZW5kQ2hpbGQoaXRlbXMoZm9vZHMsICdvdXIgbWVudScpKTtcblxuICByZXR1cm4gbWVudTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNlcnZhdGlvbigpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyZXNlcnZhdGlvbicpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnYm9vayBhIHRhYmxlJztcblxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCc7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSgpKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBmb3JtKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBmb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ3Bvc3QnKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKCdyZXNlcnZhdGlvbi1mb3JtJyk7XG5cbiAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJyk7XG5cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIG5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgbmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmFtZScpO1xuICBuYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZScpO1xuICBuYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBOYW1lJyk7XG5cbiAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBwaG9uZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGVsJyk7XG4gIHBob25lLnNldEF0dHJpYnV0ZSgnbmFtZScsICdwaG9uZU51bWJlcicpO1xuICBwaG9uZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Bob25lJyk7XG4gIHBob25lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBQaG9uZSBOdW1iZXInKTtcblxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICBkYXRlLnNldEF0dHJpYnV0ZSgnbmFtZScsICdkYXRlJyk7XG4gIGRhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlJyk7XG5cbiAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRpbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RpbWUnKTtcbiAgdGltZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGltZScpO1xuICB0aW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAndGltZScpO1xuXG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQobmFtZSk7XG4gIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmUpO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpO1xuICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWUpO1xuXG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBtZXNzYWdlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgWW91ciBSZXF1aXJlbWVudHMuJyk7XG4gIG1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICdtZXNzYWdlJyk7XG4gIG1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdyb3dzJywgJzgnKTtcblxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgc3VibWl0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gIHJldHVybiBmb3JtO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IGFib3V0IGZyb20gJy4vYWJvdXQnO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCByZXNlcnZhdGlvbiBmcm9tICcuL3Jlc2VydmF0aW9uJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJ1xuXG4oZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChob21lKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3RlcigpKTtcblxuICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7aGFuZGxlU2Nyb2xsKCl9XG59KSgpO1xuXG5mdW5jdGlvbiBoYW5kbGVTY3JvbGwoKSB7XG4gIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA+IDEwIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiAxMCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5jbGFzc0xpc3QuYWRkKCdzY3JvbGwnKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbmF2KCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0bmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XG5cblx0Y29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG5cdGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcblx0aG9tZS50ZXh0Q29udGVudCA9IFwiaG9tZVwiO1xuICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlSG9tZSk7XG5cdFxuXHRjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdGFib3V0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XG5cdGFib3V0LnRleHRDb250ZW50ID0gXCJhYm91dFwiO1xuICBhYm91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUFib3V0KTtcblxuXHRjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0bWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cdG1lbnUudGV4dENvbnRlbnQgPSBcIm1lbnVcIjtcbiAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU1lbnUpO1xuXG5cdGNvbnN0IHJlc2VydmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0cmVzZXJ2YXRpb24uY2xhc3NMaXN0LmFkZCgnbmF2LXJlc2VydmF0aW9uJyk7XG5cdHJlc2VydmF0aW9uLnRleHRDb250ZW50ID0gXCJyZXNlcnZhdGlvblwiO1xuICByZXNlcnZhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVJlc2VydmF0aW9uKTtcblxuXHR1bC5hcHBlbmRDaGlsZChob21lKTtcblx0dWwuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuXHR1bC5hcHBlbmRDaGlsZChtZW51KTtcblx0dWwuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb24pO1xuXG5cdG5hdi5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgcmV0dXJuIG5hdjtcbn1cblxuZnVuY3Rpb24gaGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcbiAgbG9nby50ZXh0Q29udGVudCA9IFwiVHV1bVwiO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdigpKTtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBmb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyQ29udGFpbmVyJyk7XG5cbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcblxuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFkZHJlc3MuY2xhc3NMaXN0LmFkZCgnYWRkcmVzcycpO1xuICBjb25zdCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGg0LnRleHRDb250ZW50ID0gXCJBZGRyZXNzXCI7XG4gIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYWRkLnRleHRDb250ZW50ID0gXCJSb21hbmF0IE1la2VsbGUsIFRpZ3JheVwiXG4gIGFkZHJlc3MuYXBwZW5kQ2hpbGQoaDQpO1xuICBhZGRyZXNzLmFwcGVuZENoaWxkKGFkZCk7XG5cbiAgY29uc3QgZm9sbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgaGYudGV4dENvbnRlbnQgPSBcIkZvbGxvd1wiO1xuICBmb2xsb3cuYXBwZW5kQ2hpbGQoaGYpICBcblxuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgaGkudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgaW5mby5hcHBlbmRDaGlsZChoaSk7XG4gIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBlbWFpbC50ZXh0Q29udGVudCA9IFwiaW5mb0ByZXN0dXJhbnQuY29tXCI7XG4gIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwaG9uZS50ZXh0Q29udGVudCA9IFwiKzI1MTkxNDAwMDAwMFwiO1xuICBpbmZvLmFwcGVuZENoaWxkKGVtYWlsKTtcbiAgaW5mby5hcHBlbmRDaGlsZChwaG9uZSk7XG5cbiAgY29udGFjdC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChmb2xsb3cpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGluZm8pO1xuXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3Rlci1jb250YWluZXJcIik7XG4gIGNvbnN0IGZvb3RlckxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBmb290ZXJMb2dvLnRleHRDb250ZW50ID0gXCJUdXVtXCI7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJMb2dvKTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKG5hdigpKTtcblxuICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gIHJldHVybiBmb290ZXJDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUhvbWUoZSkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuY2xhc3NMaXN0LnJlbW92ZSgnbm9oZXJvJyk7XG4gIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5jaGlsZE5vZGVzWzFdKTtcbiAgY29udGVudC5pbnNlcnRCZWZvcmUoaG9tZSgpLCBjb250ZW50LmNoaWxkTm9kZXNbMV0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVBYm91dChlKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdub2hlcm8nKTtcbiAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmNoaWxkTm9kZXNbMV0pO1xuICBjb250ZW50Lmluc2VydEJlZm9yZShhYm91dCgpLCBjb250ZW50LmNoaWxkTm9kZXNbMV0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVNZW51KGUpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLmNsYXNzTGlzdC5yZW1vdmUoJ25vaGVybycpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuY2xhc3NMaXN0LmFkZCgnbm9oZXJvJyk7XG4gIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5jaGlsZE5vZGVzWzFdKTtcbiAgY29udGVudC5pbnNlcnRCZWZvcmUobWVudSgpLCBjb250ZW50LmNoaWxkTm9kZXNbMV0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVSZXNlcnZhdGlvbihlKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5jbGFzc0xpc3QucmVtb3ZlKCdub2hlcm8nKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLmNsYXNzTGlzdC5hZGQoJ25vaGVybycpO1xuICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuY2hpbGROb2Rlc1sxXSk7XG4gIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKHJlc2VydmF0aW9uKCksIGNvbnRlbnQuY2hpbGROb2Rlc1sxXSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9