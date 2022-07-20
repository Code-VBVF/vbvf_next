"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/livestream",{

/***/ "./pages/livestream.js":
/*!*****************************!*\
  !*** ./pages/livestream.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Livestream; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_util_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/util/index */ \"./src/util/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_components_stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/stream */ \"./src/components/stream.js\");\n/* harmony import */ var _src_css_livestream_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/css/livestream.module.scss */ \"./src/css/livestream.module.scss\");\n/* harmony import */ var _src_css_livestream_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_css_livestream_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _src_components_memorial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/memorial-service */ \"./src/components/memorial-service.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar sortBy = __webpack_require__(/*! lodash.sortby */ \"./node_modules/lodash.sortby/index.js\");\nvar __N_SSG = true;\nfunction Livestream(param) {\n    var data = param.data, previousVideos = param.previousVideos;\n    var _this = this;\n    var createMarkup = function createMarkup(video) {\n        var ref;\n        return {\n            __html: (ref = video.embed) === null || ref === void 0 ? void 0 : ref.html\n        };\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data === null || data === void 0 ? void 0 : data.wednesdaySeries[0]), wednesdaySeries = ref[0], setWednesdaySeries = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data === null || data === void 0 ? void 0 : data.sundaySeries[0]), sundaySeries = ref1[0], setSundaySeries = ref1[1];\n    var ref2;\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((ref2 = previousVideos === null || previousVideos === void 0 ? void 0 : previousVideos.data) !== null && ref2 !== void 0 ? ref2 : null), sundayArchiveVideos = ref3[0], setSundayArchiveVideos = ref3[1];\n    console.log(data);\n    var streamArchive = function() {\n        var _this1 = _this;\n        var sortedVideos = sortBy(sundayArchiveVideos, \"last_user_action_event_date\").reverse().slice(0, 3);\n        return sortedVideos.map(function(video) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: video.name\n                    }, void 0, false, {\n                        fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_src_css_livestream_module_scss__WEBPACK_IMPORTED_MODULE_6___default().livestreamArchiveVideoPlayer),\n                        dangerouslySetInnerHTML: createMarkup(video)\n                    }, void 0, false, {\n                        fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, _this1)\n                ]\n            }, void 0, true);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_src_css_livestream_module_scss__WEBPACK_IMPORTED_MODULE_6___default().livestream),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Livestream\"\n            }, void 0, false, {\n                fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            (0,_src_util_index__WEBPACK_IMPORTED_MODULE_2__.livestreamHappeningNow)() === \"wednesday\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_stream__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                streamUrl: \"https://vimeo.com/event/49116/embed\",\n                title: wednesdaySeries.title,\n                description: wednesdaySeries.description,\n                seriesLink: \"/bible-studies/\".concat(wednesdaySeries.title),\n                notesUrl: wednesdaySeries.notesUrl,\n                questionUrl: wednesdaySeries.questionUrl\n            }, void 0, false, {\n                fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, this) : (0,_src_util_index__WEBPACK_IMPORTED_MODULE_2__.livestreamHappeningNow)() === \"sunday\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_stream__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                streamUrl: \"https://vimeo.com/event/51649/embed\",\n                title: sundaySeries.title,\n                description: sundaySeries.description,\n                seriesLink: \"/bible-studies/\".concat(sundaySeries.title),\n                notesUrl: sundaySeries.notesUrl,\n                questionUrl: sundaySeries.questionUrl\n            }, void 0, false, {\n                fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, this) : (0,_src_util_index__WEBPACK_IMPORTED_MODULE_2__.livestreamHappeningNow)() === \"memorial\" ? // return memorial service\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_memorial_service__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n                lineNumber: 107,\n                columnNumber: 9\n            }, this) : (0,_src_util_index__WEBPACK_IMPORTED_MODULE_2__.livestreamHappeningNow)() === \"guestTeacher\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_stream__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                streamUrl: \"https://vimeo.com/event/51649/embed\",\n                title: \"\",\n                description: \"\"\n            }, void 0, false, {\n                fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n                lineNumber: 109,\n                columnNumber: 9\n            }, this) : (0,_src_util_index__WEBPACK_IMPORTED_MODULE_2__.livestreamHappeningNow)() === \"christmas\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_stream__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                streamUrl: \"https://vimeo.com/event/51649/embed\",\n                title: \"Christmas Eve Service\",\n                description: \"Luke 2:22-35\"\n            }, void 0, false, {\n                fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n                lineNumber: 115,\n                columnNumber: 9\n            }, this) : //return livestream archive\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_src_css_livestream_module_scss__WEBPACK_IMPORTED_MODULE_6___default().livestreamArchive),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Verse by Verse Fellowship livestreams its Sunday services. While there's not a service streaming right now, please feel free to check out some of our recent services below. Recordings of our services are available on our\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/bible-studies\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        children: \"Bible Studies\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n                                        lineNumber: 130,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n                                    lineNumber: 129,\n                                    columnNumber: 15\n                                }, this),\n                                \" \",\n                                \"page.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n                            lineNumber: 124,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n                        lineNumber: 123,\n                        columnNumber: 11\n                    }, this),\n                    streamArchive()\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n                lineNumber: 122,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, this);\n};\n_s(Livestream, \"qsqEnIjZB39hNKv06gJ9NBleAF8=\");\n_c = Livestream;\nvar _c;\n$RefreshReg$(_c, \"Livestream\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhOzs7Ozs0Q0FBSTs7Ozs7d0NBQ2Y7Z0NBQUMsR0FBRztnQ0FBQyxPQUVkOzs7Ozs7Z0NBQUk7Ozs7OzRCQUNBO29CQUNMdEIsYUFBYSxFQUFFOzs7Ozs7b0JBQ1o7Ozs7OztZQUVKLENBQ047Q0FDSDtHQXpGdUJoQixVQUFVO0FBQVZBLEtBQUFBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGl2ZXN0cmVhbS5qcz83YmE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaXNPdmVyLCBsaXZlc3RyZWFtSGFwcGVuaW5nTm93IH0gZnJvbSBcIi4uL3NyYy91dGlsL2luZGV4XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCBTdHJlYW0gZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3N0cmVhbVwiO1xuaW1wb3J0IHsgc2FuaXR5IH0gZnJvbSBcIi4uL3NyYy91dGlsL2luZGV4XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zcmMvY3NzL2xpdmVzdHJlYW0ubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBNZW1vcmlhbFNlcnZpY2UgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL21lbW9yaWFsLXNlcnZpY2VcIjtcblxudmFyIHNvcnRCeSA9IHJlcXVpcmUoXCJsb2Rhc2guc29ydGJ5XCIpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGlmIChsaXZlc3RyZWFtSGFwcGVuaW5nTm93KCkgPT09IG51bGwpIHtcbiAgICBjb25zdCBwcmV2aW91c1NlcnZpY2VWaWRlb3MgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS52aW1lby5jb20vbWUvcHJvamVjdHMvJHtwcm9jZXNzLmVudi5WSU1FT19GT0xERVJ9L3ZpZGVvcz9kaXJlY3Rpb249ZGVzY2AsXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBwcm9jZXNzLmVudi5WSU1FT19LRVksXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCBwcmV2aW91c1ZpZGVvcyA9IGF3YWl0IHByZXZpb3VzU2VydmljZVZpZGVvcy5qc29uKCk7XG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgcHJldmlvdXNWaWRlb3MgfSB9O1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHF1ZXJ5ID0gYHsnd2VkbmVzZGF5U2VyaWVzJzogKltfdHlwZSA9PSBcInNlcmllc1wiICYmIG1lZXRpbmdUaW1lLmRheSA9PSBcIldlZG5lc2RheVwiICYmIGVuZERhdGUgPiBub3coKV17XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZW5kRGF0ZSxcbiAgaXNWYnZtaVN0dWR5LFxuICAnbm90ZXNVcmwnOiBsZXNzb25zfG9yZGVyKGxlc3Nvbk51bWJlciBkZXNjKVswXS5ub3Rlcy5hc3NldC0+dXJsLFxuICAncXVlc3Rpb25VcmwnOmxlc3NvbnN8b3JkZXIobGVzc29uTnVtYmVyIGRlc2MpWzBdLnF1ZXN0aW9ucy5hc3NldC0+dXJsfSxcbidzdW5kYXlTZXJpZXMnOiAqW190eXBlID09IFwic2VyaWVzXCIgJiYgbWVldGluZ1RpbWUuZGF5ID09IFwiU3VuZGF5XCIgJiYgZW5kRGF0ZSA+IG5vdygpXXtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBlbmREYXRlLFxuICBpc1Zidm1pU3R1ZHksXG4gICdub3Rlc1VybCc6IGxlc3NvbnN8b3JkZXIobGVzc29uTnVtYmVyIGRlc2MpWzBdLm5vdGVzLmFzc2V0LT51cmwsXG4gICdxdWVzdGlvblVybCc6bGVzc29uc3xvcmRlcihsZXNzb25OdW1iZXIgZGVzYylbMF0ucXVlc3Rpb25zLmFzc2V0LT51cmxcbn19YDtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNhbml0eS5mZXRjaChxdWVyeSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgZGF0YTogcmVzLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpdmVzdHJlYW0oeyBkYXRhLCBwcmV2aW91c1ZpZGVvcyB9KSB7XG4gIGNvbnN0IFt3ZWRuZXNkYXlTZXJpZXMsIHNldFdlZG5lc2RheVNlcmllc10gPSB1c2VTdGF0ZShcbiAgICBkYXRhPy53ZWRuZXNkYXlTZXJpZXNbMF1cbiAgKTtcbiAgY29uc3QgW3N1bmRheVNlcmllcywgc2V0U3VuZGF5U2VyaWVzXSA9IHVzZVN0YXRlKGRhdGE/LnN1bmRheVNlcmllc1swXSk7XG4gIGNvbnN0IFtzdW5kYXlBcmNoaXZlVmlkZW9zLCBzZXRTdW5kYXlBcmNoaXZlVmlkZW9zXSA9IHVzZVN0YXRlKFxuICAgIHByZXZpb3VzVmlkZW9zPy5kYXRhID8/IG51bGxcbiAgKTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIGNvbnN0IHN0cmVhbUFyY2hpdmUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc29ydGVkVmlkZW9zID0gc29ydEJ5KFxuICAgICAgc3VuZGF5QXJjaGl2ZVZpZGVvcyxcbiAgICAgIFwibGFzdF91c2VyX2FjdGlvbl9ldmVudF9kYXRlXCJcbiAgICApXG4gICAgICAucmV2ZXJzZSgpXG4gICAgICAuc2xpY2UoMCwgMyk7XG4gICAgcmV0dXJuIHNvcnRlZFZpZGVvcy5tYXAoKHZpZGVvKSA9PiAoXG4gICAgICA8PlxuICAgICAgICA8aDM+e3ZpZGVvLm5hbWV9PC9oMz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpdmVzdHJlYW1BcmNoaXZlVmlkZW9QbGF5ZXJ9XG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2NyZWF0ZU1hcmt1cCh2aWRlbyl9XG4gICAgICAgID48L2Rpdj5cbiAgICAgIDwvPlxuICAgICkpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZU1hcmt1cCh2aWRlbykge1xuICAgIHJldHVybiB7IF9faHRtbDogdmlkZW8uZW1iZWQ/Lmh0bWwgfTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXZlc3RyZWFtfT5cbiAgICAgIDxoMT5MaXZlc3RyZWFtPC9oMT5cblxuICAgICAge2xpdmVzdHJlYW1IYXBwZW5pbmdOb3coKSA9PT0gXCJ3ZWRuZXNkYXlcIiA/ICggLy9pZiBpdCdzIHdlZG5lc2RheSByZXR1cm4gdGhlIGFjdGl2ZSBzZXJpZXMgaGFwcGVuaW5nIG9uIHdlZG5lc2RheVxuICAgICAgICA8U3RyZWFtXG4gICAgICAgICAgc3RyZWFtVXJsPVwiaHR0cHM6Ly92aW1lby5jb20vZXZlbnQvNDkxMTYvZW1iZWRcIlxuICAgICAgICAgIHRpdGxlPXt3ZWRuZXNkYXlTZXJpZXMudGl0bGV9XG4gICAgICAgICAgZGVzY3JpcHRpb249e3dlZG5lc2RheVNlcmllcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICBzZXJpZXNMaW5rPXtgL2JpYmxlLXN0dWRpZXMvJHt3ZWRuZXNkYXlTZXJpZXMudGl0bGV9YH1cbiAgICAgICAgICBub3Rlc1VybD17d2VkbmVzZGF5U2VyaWVzLm5vdGVzVXJsfVxuICAgICAgICAgIHF1ZXN0aW9uVXJsPXt3ZWRuZXNkYXlTZXJpZXMucXVlc3Rpb25Vcmx9XG4gICAgICAgIC8+XG4gICAgICApIDogbGl2ZXN0cmVhbUhhcHBlbmluZ05vdygpID09PSBcInN1bmRheVwiID8gKCAvL3JldHVybiBzdW5kYXkgc3RyZWFtXG4gICAgICAgIDxTdHJlYW1cbiAgICAgICAgICBzdHJlYW1Vcmw9XCJodHRwczovL3ZpbWVvLmNvbS9ldmVudC81MTY0OS9lbWJlZFwiXG4gICAgICAgICAgdGl0bGU9e3N1bmRheVNlcmllcy50aXRsZX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17c3VuZGF5U2VyaWVzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIHNlcmllc0xpbms9e2AvYmlibGUtc3R1ZGllcy8ke3N1bmRheVNlcmllcy50aXRsZX1gfVxuICAgICAgICAgIG5vdGVzVXJsPXtzdW5kYXlTZXJpZXMubm90ZXNVcmx9XG4gICAgICAgICAgcXVlc3Rpb25Vcmw9e3N1bmRheVNlcmllcy5xdWVzdGlvblVybH1cbiAgICAgICAgLz5cbiAgICAgICkgOiBsaXZlc3RyZWFtSGFwcGVuaW5nTm93KCkgPT09IFwibWVtb3JpYWxcIiA/ICggLy8gZW52aXJvbm1lbnQgdmFyaWFibGUgaXMgbWVtb3JpYWxcbiAgICAgICAgLy8gcmV0dXJuIG1lbW9yaWFsIHNlcnZpY2VcblxuICAgICAgICA8TWVtb3JpYWxTZXJ2aWNlIC8+XG4gICAgICApIDogbGl2ZXN0cmVhbUhhcHBlbmluZ05vdygpID09PSBcImd1ZXN0VGVhY2hlclwiID8gKCAvL3JldHVybmluZyBjb21wb25lbnQgd2l0aCBubyBkZXNjcmlwdGlvbiBmb3IgZ3Vlc3QgdGVhY2hlclxuICAgICAgICA8U3RyZWFtXG4gICAgICAgICAgc3RyZWFtVXJsPVwiaHR0cHM6Ly92aW1lby5jb20vZXZlbnQvNTE2NDkvZW1iZWRcIlxuICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIlwiXG4gICAgICAgIC8+XG4gICAgICApIDogbGl2ZXN0cmVhbUhhcHBlbmluZ05vdygpID09PSBcImNocmlzdG1hc1wiID8gKCAvL3JldHVybmluZyBjb21wb25lbnQgd2l0aCBubyBkZXNjcmlwdGlvbiBmb3IgZ3Vlc3QgdGVhY2hlclxuICAgICAgICA8U3RyZWFtXG4gICAgICAgICAgc3RyZWFtVXJsPVwiaHR0cHM6Ly92aW1lby5jb20vZXZlbnQvNTE2NDkvZW1iZWRcIlxuICAgICAgICAgIHRpdGxlPVwiQ2hyaXN0bWFzIEV2ZSBTZXJ2aWNlXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkx1a2UgMjoyMi0zNVwiXG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICAvL3JldHVybiBsaXZlc3RyZWFtIGFyY2hpdmVcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXZlc3RyZWFtQXJjaGl2ZX0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBWZXJzZSBieSBWZXJzZSBGZWxsb3dzaGlwIGxpdmVzdHJlYW1zIGl0cyBTdW5kYXkgc2VydmljZXMuIFdoaWxlXG4gICAgICAgICAgICAgIHRoZXJlJ3Mgbm90IGEgc2VydmljZSBzdHJlYW1pbmcgcmlnaHQgbm93LCBwbGVhc2UgZmVlbCBmcmVlIHRvXG4gICAgICAgICAgICAgIGNoZWNrIG91dCBzb21lIG9mIG91ciByZWNlbnQgc2VydmljZXMgYmVsb3cuIFJlY29yZGluZ3Mgb2Ygb3VyXG4gICAgICAgICAgICAgIHNlcnZpY2VzIGFyZSBhdmFpbGFibGUgb24gb3Vye1wiIFwifVxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2JpYmxlLXN0dWRpZXNcIj5cbiAgICAgICAgICAgICAgICA8YT5CaWJsZSBTdHVkaWVzPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+e1wiIFwifVxuICAgICAgICAgICAgICBwYWdlLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtzdHJlYW1BcmNoaXZlKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiaXNPdmVyIiwibGl2ZXN0cmVhbUhhcHBlbmluZ05vdyIsIkxpbmsiLCJTdHJlYW0iLCJzdHlsZXMiLCJNZW1vcmlhbFNlcnZpY2UiLCJzb3J0QnkiLCJyZXF1aXJlIiwiTGl2ZXN0cmVhbSIsImRhdGEiLCJwcmV2aW91c1ZpZGVvcyIsImNyZWF0ZU1hcmt1cCIsInZpZGVvIiwiX19odG1sIiwiZW1iZWQiLCJodG1sIiwid2VkbmVzZGF5U2VyaWVzIiwic2V0V2VkbmVzZGF5U2VyaWVzIiwic3VuZGF5U2VyaWVzIiwic2V0U3VuZGF5U2VyaWVzIiwic3VuZGF5QXJjaGl2ZVZpZGVvcyIsInNldFN1bmRheUFyY2hpdmVWaWRlb3MiLCJjb25zb2xlIiwibG9nIiwic3RyZWFtQXJjaGl2ZSIsInNvcnRlZFZpZGVvcyIsInJldmVyc2UiLCJzbGljZSIsIm1hcCIsImgzIiwibmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImxpdmVzdHJlYW1BcmNoaXZlVmlkZW9QbGF5ZXIiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsImxpdmVzdHJlYW0iLCJoMSIsInN0cmVhbVVybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzZXJpZXNMaW5rIiwibm90ZXNVcmwiLCJxdWVzdGlvblVybCIsImxpdmVzdHJlYW1BcmNoaXZlIiwicCIsImhyZWYiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/livestream.js\n"));

/***/ })

});