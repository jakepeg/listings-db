module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aIwK");


/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "aIwK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2Eek");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("XoMD");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Jo+v");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4mXO");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pLtp");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("dpnd");








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }




const Create = props => {
  const defaultData = {
    name: '',
    description: '',
    rating: '',
    image: '',
    cover: '',
    longDesc: ''
  };
  const formData = defaultData;
  const {
    0: form,
    1: setForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(formData);

  const handleChange = event => {
    const target = event.target;
    const name = target.name;
    setForm(_objectSpread({}, form, {
      [name]: target.value
    }));
  };

  const handleCategoryChange = event => {
    const {
      options
    } = event.target;
    const optionsLength = options.length;
    let value = [];

    for (let i = 0; i < optionsLength; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    setForm(_objectSpread({}, form, {
      category: value.toString()
    }));
  };

  const submitForm = () => {
    Object(_actions__WEBPACK_IMPORTED_MODULE_8__[/* createActivity */ "b"])(_objectSpread({}, form));
  };

  return __jsx("form", null, __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "name"
  }, "Name"), __jsx("input", {
    value: form.name,
    onChange: handleChange,
    type: "text",
    className: "form-control",
    id: "name",
    name: "name",
    "aria-describedby": "emailHelp",
    placeholder: "Lord of the Rings"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "description"
  }, "Description"), __jsx("input", {
    onChange: handleChange,
    value: form.description,
    type: "text",
    className: "form-control",
    id: "description",
    name: "description",
    placeholder: "Somewhere in Middle-earth..."
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "description"
  }, "Rating"), __jsx("input", {
    onChange: handleChange,
    value: form.rating,
    type: "number",
    max: "5",
    min: "0",
    className: "form-control",
    id: "rating",
    name: "rating",
    placeholder: "3"
  }), __jsx("small", {
    id: "emailHelp",
    className: "form-text text-muted"
  }, "Max: 5, Min: 0 ")), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "image"
  }, "Image"), __jsx("input", {
    onChange: handleChange,
    value: form.image,
    type: "text",
    className: "form-control",
    id: "image",
    name: "image",
    placeholder: "http://....."
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "cover"
  }, "Cover"), __jsx("input", {
    onChange: handleChange,
    value: form.cover,
    type: "text",
    className: "form-control",
    id: "cover",
    name: "cover",
    placeholder: "http://......"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "longDesc"
  }, "Long Description"), __jsx("textarea", {
    onChange: handleChange,
    value: form.longDesc,
    className: "form-control",
    id: "longDesc",
    name: "longDesc",
    rows: "3"
  })), __jsx("div", {
    className: "form-group"
  }, __jsx("label", {
    htmlFor: "category"
  }, "Category"), __jsx("select", {
    onChange: handleCategoryChange,
    multiple: true,
    className: "form-control",
    id: "category",
    name: "category"
  }, __jsx("option", null, "Adventure Sports"), __jsx("option", null, "Attractions"), __jsx("option", null, "Art, Crafts and Cooking"), __jsx("option", null, "Birthday Parties"), __jsx("option", null, "Events"), __jsx("option", null, "Holiday Camps"), __jsx("option", null, "Parks and Skate Parks"), __jsx("option", null, "Performing Arts"), __jsx("option", null, "Play Centres"), __jsx("option", null, "Sport and Games"), __jsx("option", null, "Theme Parks and Water Parks"))), __jsx("button", {
    onClick: submitForm,
    type: "button",
    className: "btn btn-primary"
  }, "Add Activity"));
};

/* harmony default export */ __webpack_exports__["default"] = (Create);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dpnd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CATEGORY_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getActivities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getActivityById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return updateActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteActivity; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const BASE_URL = "https://doozone.now.sh"; // const BASE_URL = 'http://localhost:3000'
// const BASE_URL = 'https://doozone.now.sh'

const ACTIVITY_DATA = [];
const CATEGORY_DATA = [{
  id: 'c-00',
  name: 'All Activities'
}, {
  id: 'c-12',
  name: 'Accademic'
}, {
  id: 'c-01',
  name: 'Adventure Sports'
}, {
  id: 'c-02',
  name: 'Attractions'
}, {
  id: 'c-03',
  name: 'Art, Crafts and Cooking'
}, {
  id: 'c-04',
  name: 'Birthday Parties'
}, {
  id: 'c-05',
  name: 'Events'
}, {
  id: 'c-06',
  name: 'Holiday Camps'
}, {
  id: 'c-07',
  name: 'Parks and Skate Parks'
}, {
  id: 'c-08',
  name: 'Performing Arts'
}, {
  id: 'c-09',
  name: 'Play Centres'
}, {
  id: 'c-10',
  name: 'Sport and Games'
}, {
  id: 'c-11',
  name: 'Theme Parks and Water Parks'
}];
const CATEGORY_LIST = [{
  value: 'c-00',
  label: 'All Activities'
}, {
  value: 'c-12',
  label: 'Accademic'
}, {
  value: 'c-01',
  label: 'Adventure Sports'
}, {
  value: 'c-02',
  label: 'Art, Crafts and Cooking'
}, {
  value: 'c-03',
  label: 'Attractions'
}, {
  value: 'c-04',
  label: 'Birthday Parties'
}, {
  value: 'c-05',
  label: 'Events'
}, {
  value: 'c-06',
  label: 'Holiday Camps'
}, {
  value: 'c-07',
  label: 'Parks and Skate Parks'
}, {
  value: 'c-08',
  label: 'Performing Arts'
}, {
  value: 'c-09',
  label: 'Play Centres'
}, {
  value: 'c-10',
  label: 'Sport and Games'
}, {
  value: 'c-11',
  label: 'Theme Parks and Water Parks'
}];
const getCategories = () => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA); // reject('Cannot fetch category data')
    }, 20);
  });
};
const getActivities = () => {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${BASE_URL}/api/v1/activities`).then(res => res.data);
};
const createActivity = activity => {
  activity.id = Math.random().toString(36).substr(2, 7);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${BASE_URL}/api/v1/activities`, activity).then(res => res.data);
};
const getActivityById = id => {
  console.log(id);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${BASE_URL}/api/v1/activities/${id}`).then(res => res.data);
};
const updateActivity = activity => {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`${BASE_URL}/api/v1/activities/${activity.id}`, activity).then(res => res.data);
};
const deleteActivity = id => {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`${BASE_URL}/api/v1/activities/${id}`).then(res => res.data);
};

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });