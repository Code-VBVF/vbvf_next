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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Livestream; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_util_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/util/index */ \"./src/util/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_components_stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/stream */ \"./src/components/stream.js\");\n/* harmony import */ var _src_css_livestream_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/css/livestream.module.scss */ \"./src/css/livestream.module.scss\");\n/* harmony import */ var _src_css_livestream_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_css_livestream_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _src_components_memorial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/memorial-service */ \"./src/components/memorial-service.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar sortBy = __webpack_require__(/*! lodash.sortby */ \"./node_modules/lodash.sortby/index.js\");\nvar __N_SSG = true;\nfunction Livestream(param) {\n    var data = param.data, previousVideos = param.previousVideos, whichStream = param.whichStream;\n    var _this = this;\n    var createMarkup = function createMarkup(video) {\n        var ref;\n        return {\n            __html: (ref = video.embed) === null || ref === void 0 ? void 0 : ref.html\n        };\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data === null || data === void 0 ? void 0 : data.wednesdaySeries[0]), wednesdaySeries = ref[0], setWednesdaySeries = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data === null || data === void 0 ? void 0 : data.sundaySeries[0]), sundaySeries = ref1[0], setSundaySeries = ref1[1];\n    var ref2;\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((ref2 = previousVideos === null || previousVideos === void 0 ? void 0 : previousVideos.data) !== null && ref2 !== void 0 ? ref2 : null), sundayArchiveVideos = ref3[0], setSundayArchiveVideos = ref3[1];\n    var streamArchive = function() {\n        var _this1 = _this;\n        var sortedVideos = sortBy(sundayArchiveVideos, \"last_user_action_event_date\").reverse().slice(0, 3);\n        return sortedVideos.map(function(video) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: video.name\n                    }, void 0, false, {\n                        fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_src_css_livestream_module_scss__WEBPACK_IMPORTED_MODULE_6___default().livestreamArchiveVideoPlayer),\n                        dangerouslySetInnerHTML: createMarkup(video)\n                    }, void 0, false, {\n                        fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, _this1)\n                ]\n            }, void 0, true);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_src_css_livestream_module_scss__WEBPACK_IMPORTED_MODULE_6___default().livestream),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Livestream\"\n            }, void 0, false, {\n                fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            whichStream === \"wednesday\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_stream__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                streamUrl: \"https://vimeo.com/event/49116/embed\",\n                title: wednesdaySeries.title,\n                description: wednesdaySeries.description,\n                seriesLink: \"/bible-studies/\".concat(wednesdaySeries.title),\n                notesUrl: wednesdaySeries.notesUrl,\n                questionUrl: wednesdaySeries.questionUrl\n            }, void 0, false, {\n                fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n                lineNumber: 89,\n                columnNumber: 9\n            }, this) : whichStream === \"sunday\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_stream__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                streamUrl: \"https://vimeo.com/event/51649/embed\",\n                title: sundaySeries.title,\n                description: sundaySeries.description,\n                seriesLink: \"/bible-studies/\".concat(sundaySeries.title),\n                notesUrl: sundaySeries.notesUrl,\n                questionUrl: sundaySeries.questionUrl\n            }, void 0, false, {\n                fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n                lineNumber: 98,\n                columnNumber: 9\n            }, this) : whichStream === \"memorial\" ? // return memorial service\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_memorial_service__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n                lineNumber: 109,\n                columnNumber: 9\n            }, this) : whichStream === \"guestTeacher\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_stream__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                streamUrl: \"https://vimeo.com/event/51649/embed\",\n                title: \"\",\n                description: \"\"\n            }, void 0, false, {\n                fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n                lineNumber: 111,\n                columnNumber: 9\n            }, this) : whichStream === \"christmas\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_stream__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                streamUrl: \"https://vimeo.com/event/51649/embed\",\n                title: \"Christmas Eve Service\",\n                description: \"Luke 2:22-35\"\n            }, void 0, false, {\n                fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n                lineNumber: 117,\n                columnNumber: 9\n            }, this) : //return livestream archive\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_src_css_livestream_module_scss__WEBPACK_IMPORTED_MODULE_6___default().livestreamArchive),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Verse by Verse Fellowship livestreams its Sunday services. While there's not a service streaming right now, please feel free to check out some of our recent services below. Recordings of our services are available on our\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/bible-studies\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        children: \"Bible Studies\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n                                        lineNumber: 132,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n                                    lineNumber: 131,\n                                    columnNumber: 15\n                                }, this),\n                                \" \",\n                                \"page.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n                            lineNumber: 126,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n                        lineNumber: 125,\n                        columnNumber: 11\n                    }, this),\n                    streamArchive()\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n                lineNumber: 124,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mitch/code/vbvf_next/pages/livestream.js\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n};\n_s(Livestream, \"qsqEnIjZB39hNKv06gJ9NBleAF8=\");\n_c = Livestream;\nvar _c;\n$RefreshReg$(_c, \"Livestream\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saXZlc3RyZWFtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF3QztBQUMyQjtBQUN0QztBQUVpQjtBQUVTO0FBQ1U7O0FBRWpFLElBQUlPLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyw0REFBZSxDQUFDOztBQTJDdEIsU0FBU0MsVUFBVSxDQUFDLEtBQXFDLEVBQUU7UUFBckNDLElBQUksR0FBTixLQUFxQyxDQUFuQ0EsSUFBSSxFQUFFQyxjQUFjLEdBQXRCLEtBQXFDLENBQTdCQSxjQUFjLEVBQUVDLFdBQVcsR0FBbkMsS0FBcUMsQ0FBYkEsV0FBVzs7UUEyQjNEQyxZQUFZLEdBQXJCLFNBQVNBLFlBQVksQ0FBQ0MsS0FBSyxFQUFFO1lBQ1ZBLEdBQVc7UUFBNUIsT0FBTztZQUFFQyxNQUFNLEVBQUVELENBQUFBLEdBQVcsR0FBWEEsS0FBSyxDQUFDRSxLQUFLLGNBQVhGLEdBQVcsV0FBTSxHQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLEdBQVcsQ0FBRUcsSUFBSTtTQUFFLENBQUM7S0FDdEM7O0lBNUJELElBQThDaEIsR0FFN0MsR0FGNkNBLCtDQUFRLENBQ3BEUyxJQUFJLGFBQUpBLElBQUksV0FBaUIsR0FBckJBLEtBQUFBLENBQXFCLEdBQXJCQSxJQUFJLENBQUVRLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FDekIsRUFGTUEsZUFBZSxHQUF3QmpCLEdBRTdDLEdBRnFCLEVBQUVrQixrQkFBa0IsR0FBSWxCLEdBRTdDLEdBRnlDO0lBRzFDLElBQXdDQSxJQUErQixHQUEvQkEsK0NBQVEsQ0FBQ1MsSUFBSSxhQUFKQSxJQUFJLFdBQWMsR0FBbEJBLEtBQUFBLENBQWtCLEdBQWxCQSxJQUFJLENBQUVVLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFoRUEsWUFBWSxHQUFxQm5CLElBQStCLEdBQXBELEVBQUVvQixlQUFlLEdBQUlwQixJQUErQixHQUFuQztRQUVsQ1UsSUFBb0I7SUFEdEIsSUFBc0RWLElBRXJELEdBRnFEQSwrQ0FBUSxDQUM1RFUsQ0FBQUEsSUFBb0IsR0FBcEJBLGNBQWMsYUFBZEEsY0FBYyxXQUFNLEdBQXBCQSxLQUFBQSxDQUFvQixHQUFwQkEsY0FBYyxDQUFFRCxJQUFJLGNBQXBCQyxJQUFvQixjQUFwQkEsSUFBb0IsR0FBSSxJQUFJLENBQzdCLEVBRk1XLG1CQUFtQixHQUE0QnJCLElBRXJELEdBRnlCLEVBQUVzQixzQkFBc0IsR0FBSXRCLElBRXJELEdBRmlEO0lBSWxELElBQU11QixhQUFhLEdBQUcsV0FBTTs7UUFDMUIsSUFBTUMsWUFBWSxHQUFHbEIsTUFBTSxDQUN6QmUsbUJBQW1CLEVBQ25CLDZCQUE2QixDQUM5QixDQUNFSSxPQUFPLEVBQUUsQ0FDVEMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDZCxPQUFPRixZQUFZLENBQUNHLEdBQUcsQ0FBQyxTQUFDZCxLQUFLO2lDQUM1Qjs7a0NBQ0UsOERBQUNlLElBQUU7a0NBQUVmLEtBQUssQ0FBQ2dCLElBQUk7Ozs7OzhCQUFNO2tDQUNyQiw4REFBQ0MsS0FBRzt3QkFDRkMsU0FBUyxFQUFFM0IscUdBQW1DO3dCQUM5QzZCLHVCQUF1QixFQUFFckIsWUFBWSxDQUFDQyxLQUFLLENBQUM7Ozs7OzhCQUN2Qzs7NEJBQ047U0FDSixDQUFDLENBQUM7S0FDSjtJQU1ELHFCQUNFLDhEQUFDaUIsS0FBRztRQUFDQyxTQUFTLEVBQUUzQixtRkFBaUI7OzBCQUMvQiw4REFBQytCLElBQUU7MEJBQUMsWUFBVTs7Ozs7b0JBQUs7WUFFbEJ4QixXQUFXLEtBQUssV0FBVyxpQkFDMUIsOERBQUNSLDhEQUFNO2dCQUNMaUMsU0FBUyxFQUFDLHFDQUFxQztnQkFDL0NDLEtBQUssRUFBRXBCLGVBQWUsQ0FBQ29CLEtBQUs7Z0JBQzVCQyxXQUFXLEVBQUVyQixlQUFlLENBQUNxQixXQUFXO2dCQUN4Q0MsVUFBVSxFQUFFLGlCQUFnQixDQUF3QixPQUF0QnRCLGVBQWUsQ0FBQ29CLEtBQUssQ0FBRTtnQkFDckRHLFFBQVEsRUFBRXZCLGVBQWUsQ0FBQ3VCLFFBQVE7Z0JBQ2xDQyxXQUFXLEVBQUV4QixlQUFlLENBQUN3QixXQUFXOzs7OztvQkFDeEMsR0FDQTlCLFdBQVcsS0FBSyxRQUFRLGlCQUMxQiw4REFBQ1IsOERBQU07Z0JBQ0xpQyxTQUFTLEVBQUMscUNBQXFDO2dCQUMvQ0MsS0FBSyxFQUFFbEIsWUFBWSxDQUFDa0IsS0FBSztnQkFDekJDLFdBQVcsRUFBRW5CLFlBQVksQ0FBQ21CLFdBQVc7Z0JBQ3JDQyxVQUFVLEVBQUUsaUJBQWdCLENBQXFCLE9BQW5CcEIsWUFBWSxDQUFDa0IsS0FBSyxDQUFFO2dCQUNsREcsUUFBUSxFQUFFckIsWUFBWSxDQUFDcUIsUUFBUTtnQkFDL0JDLFdBQVcsRUFBRXRCLFlBQVksQ0FBQ3NCLFdBQVc7Ozs7O29CQUNyQyxHQUNBOUIsV0FBVyxLQUFLLFVBQVUsR0FDNUIsMEJBQTBCOzBCQUUxQiw4REFBQ04sd0VBQWU7Ozs7b0JBQUcsR0FDakJNLFdBQVcsS0FBSyxjQUFjLGlCQUNoQyw4REFBQ1IsOERBQU07Z0JBQ0xpQyxTQUFTLEVBQUMscUNBQXFDO2dCQUMvQ0MsS0FBSyxFQUFDLEVBQUU7Z0JBQ1JDLFdBQVcsRUFBQyxFQUFFOzs7OztvQkFDZCxHQUNBM0IsV0FBVyxLQUFLLFdBQVcsaUJBQzdCLDhEQUFDUiw4REFBTTtnQkFDTGlDLFNBQVMsRUFBQyxxQ0FBcUM7Z0JBQy9DQyxLQUFLLEVBQUMsdUJBQXVCO2dCQUM3QkMsV0FBVyxFQUFDLGNBQWM7Ozs7O29CQUMxQixHQUVGLDJCQUEyQjswQkFDM0IsOERBQUNSLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRTNCLDBGQUF3Qjs7a0NBQ3RDLDhEQUFDMEIsS0FBRztrQ0FDRiw0RUFBQ2EsR0FBQzs7Z0NBQUMsOE5BSTRCO2dDQUFDLEdBQUc7OENBQ2pDLDhEQUFDekMsa0RBQUk7b0NBQUMwQyxJQUFJLEVBQUMsZ0JBQWdCOzhDQUN6Qiw0RUFBQ0MsR0FBQztrREFBQyxlQUFhOzs7Ozs0Q0FBSTs7Ozs7d0NBQ2Y7Z0NBQUMsR0FBRztnQ0FBQyxPQUVkOzs7Ozs7Z0NBQUk7Ozs7OzRCQUNBO29CQUNMdEIsYUFBYSxFQUFFOzs7Ozs7b0JBQ1o7Ozs7OztZQUVKLENBQ047Q0FDSDtHQXpGdUJmLFVBQVU7QUFBVkEsS0FBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9saXZlc3RyZWFtLmpzPzdiYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpc092ZXIsIGxpdmVzdHJlYW1IYXBwZW5pbmdOb3cgfSBmcm9tIFwiLi4vc3JjL3V0aWwvaW5kZXhcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuaW1wb3J0IFN0cmVhbSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc3RyZWFtXCI7XG5pbXBvcnQgeyBzYW5pdHkgfSBmcm9tIFwiLi4vc3JjL3V0aWwvaW5kZXhcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3NyYy9jc3MvbGl2ZXN0cmVhbS5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IE1lbW9yaWFsU2VydmljZSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvbWVtb3JpYWwtc2VydmljZVwiO1xuXG52YXIgc29ydEJ5ID0gcmVxdWlyZShcImxvZGFzaC5zb3J0YnlcIik7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3Qgd2hpY2hTdHJlYW0gPSBhd2FpdCBsaXZlc3RyZWFtSGFwcGVuaW5nTm93KCk7XG4gIGlmICh3aGljaFN0cmVhbSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHByZXZpb3VzU2VydmljZVZpZGVvcyA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLnZpbWVvLmNvbS9tZS9wcm9qZWN0cy8ke3Byb2Nlc3MuZW52LlZJTUVPX0ZPTERFUn0vdmlkZW9zP3NvcnQ9ZGF0ZSZkaXJlY3Rpb249ZGVzY2AsXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBwcm9jZXNzLmVudi5WSU1FT19LRVksXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCBwcmV2aW91c1ZpZGVvcyA9IGF3YWl0IHByZXZpb3VzU2VydmljZVZpZGVvcy5qc29uKCk7XG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgcHJldmlvdXNWaWRlb3MgfSB9O1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHF1ZXJ5ID0gYHsnd2VkbmVzZGF5U2VyaWVzJzogKltfdHlwZSA9PSBcInNlcmllc1wiICYmIG1lZXRpbmdUaW1lLmRheSA9PSBcIldlZG5lc2RheVwiICYmIGVuZERhdGUgPiBub3coKV17XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZW5kRGF0ZSxcbiAgaXNWYnZtaVN0dWR5LFxuICAnbm90ZXNVcmwnOiBsZXNzb25zfG9yZGVyKGxlc3Nvbk51bWJlciBkZXNjKVswXS5ub3Rlcy5hc3NldC0+dXJsLFxuICAncXVlc3Rpb25VcmwnOmxlc3NvbnN8b3JkZXIobGVzc29uTnVtYmVyIGRlc2MpWzBdLnF1ZXN0aW9ucy5hc3NldC0+dXJsfSxcbidzdW5kYXlTZXJpZXMnOiAqW190eXBlID09IFwic2VyaWVzXCIgJiYgbWVldGluZ1RpbWUuZGF5ID09IFwiU3VuZGF5XCIgJiYgZW5kRGF0ZSA+IG5vdygpXXtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBlbmREYXRlLFxuICBpc1Zidm1pU3R1ZHksXG4gICdub3Rlc1VybCc6IGxlc3NvbnN8b3JkZXIobGVzc29uTnVtYmVyIGRlc2MpWzBdLm5vdGVzLmFzc2V0LT51cmwsXG4gICdxdWVzdGlvblVybCc6bGVzc29uc3xvcmRlcihsZXNzb25OdW1iZXIgZGVzYylbMF0ucXVlc3Rpb25zLmFzc2V0LT51cmxcbn19YDtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNhbml0eS5mZXRjaChxdWVyeSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgZGF0YTogcmVzLFxuICAgICAgICB3aGljaFN0cmVhbSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXZlc3RyZWFtKHsgZGF0YSwgcHJldmlvdXNWaWRlb3MsIHdoaWNoU3RyZWFtIH0pIHtcbiAgY29uc3QgW3dlZG5lc2RheVNlcmllcywgc2V0V2VkbmVzZGF5U2VyaWVzXSA9IHVzZVN0YXRlKFxuICAgIGRhdGE/LndlZG5lc2RheVNlcmllc1swXVxuICApO1xuICBjb25zdCBbc3VuZGF5U2VyaWVzLCBzZXRTdW5kYXlTZXJpZXNdID0gdXNlU3RhdGUoZGF0YT8uc3VuZGF5U2VyaWVzWzBdKTtcbiAgY29uc3QgW3N1bmRheUFyY2hpdmVWaWRlb3MsIHNldFN1bmRheUFyY2hpdmVWaWRlb3NdID0gdXNlU3RhdGUoXG4gICAgcHJldmlvdXNWaWRlb3M/LmRhdGEgPz8gbnVsbFxuICApO1xuXG4gIGNvbnN0IHN0cmVhbUFyY2hpdmUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc29ydGVkVmlkZW9zID0gc29ydEJ5KFxuICAgICAgc3VuZGF5QXJjaGl2ZVZpZGVvcyxcbiAgICAgIFwibGFzdF91c2VyX2FjdGlvbl9ldmVudF9kYXRlXCJcbiAgICApXG4gICAgICAucmV2ZXJzZSgpXG4gICAgICAuc2xpY2UoMCwgMyk7XG4gICAgcmV0dXJuIHNvcnRlZFZpZGVvcy5tYXAoKHZpZGVvKSA9PiAoXG4gICAgICA8PlxuICAgICAgICA8aDM+e3ZpZGVvLm5hbWV9PC9oMz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpdmVzdHJlYW1BcmNoaXZlVmlkZW9QbGF5ZXJ9XG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2NyZWF0ZU1hcmt1cCh2aWRlbyl9XG4gICAgICAgID48L2Rpdj5cbiAgICAgIDwvPlxuICAgICkpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZU1hcmt1cCh2aWRlbykge1xuICAgIHJldHVybiB7IF9faHRtbDogdmlkZW8uZW1iZWQ/Lmh0bWwgfTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXZlc3RyZWFtfT5cbiAgICAgIDxoMT5MaXZlc3RyZWFtPC9oMT5cblxuICAgICAge3doaWNoU3RyZWFtID09PSBcIndlZG5lc2RheVwiID8gKCAvL2lmIGl0J3Mgd2VkbmVzZGF5IHJldHVybiB0aGUgYWN0aXZlIHNlcmllcyBoYXBwZW5pbmcgb24gd2VkbmVzZGF5XG4gICAgICAgIDxTdHJlYW1cbiAgICAgICAgICBzdHJlYW1Vcmw9XCJodHRwczovL3ZpbWVvLmNvbS9ldmVudC80OTExNi9lbWJlZFwiXG4gICAgICAgICAgdGl0bGU9e3dlZG5lc2RheVNlcmllcy50aXRsZX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17d2VkbmVzZGF5U2VyaWVzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIHNlcmllc0xpbms9e2AvYmlibGUtc3R1ZGllcy8ke3dlZG5lc2RheVNlcmllcy50aXRsZX1gfVxuICAgICAgICAgIG5vdGVzVXJsPXt3ZWRuZXNkYXlTZXJpZXMubm90ZXNVcmx9XG4gICAgICAgICAgcXVlc3Rpb25Vcmw9e3dlZG5lc2RheVNlcmllcy5xdWVzdGlvblVybH1cbiAgICAgICAgLz5cbiAgICAgICkgOiB3aGljaFN0cmVhbSA9PT0gXCJzdW5kYXlcIiA/ICggLy9yZXR1cm4gc3VuZGF5IHN0cmVhbVxuICAgICAgICA8U3RyZWFtXG4gICAgICAgICAgc3RyZWFtVXJsPVwiaHR0cHM6Ly92aW1lby5jb20vZXZlbnQvNTE2NDkvZW1iZWRcIlxuICAgICAgICAgIHRpdGxlPXtzdW5kYXlTZXJpZXMudGl0bGV9XG4gICAgICAgICAgZGVzY3JpcHRpb249e3N1bmRheVNlcmllcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICBzZXJpZXNMaW5rPXtgL2JpYmxlLXN0dWRpZXMvJHtzdW5kYXlTZXJpZXMudGl0bGV9YH1cbiAgICAgICAgICBub3Rlc1VybD17c3VuZGF5U2VyaWVzLm5vdGVzVXJsfVxuICAgICAgICAgIHF1ZXN0aW9uVXJsPXtzdW5kYXlTZXJpZXMucXVlc3Rpb25Vcmx9XG4gICAgICAgIC8+XG4gICAgICApIDogd2hpY2hTdHJlYW0gPT09IFwibWVtb3JpYWxcIiA/ICggLy8gZW52aXJvbm1lbnQgdmFyaWFibGUgaXMgbWVtb3JpYWxcbiAgICAgICAgLy8gcmV0dXJuIG1lbW9yaWFsIHNlcnZpY2VcblxuICAgICAgICA8TWVtb3JpYWxTZXJ2aWNlIC8+XG4gICAgICApIDogd2hpY2hTdHJlYW0gPT09IFwiZ3Vlc3RUZWFjaGVyXCIgPyAoIC8vcmV0dXJuaW5nIGNvbXBvbmVudCB3aXRoIG5vIGRlc2NyaXB0aW9uIGZvciBndWVzdCB0ZWFjaGVyXG4gICAgICAgIDxTdHJlYW1cbiAgICAgICAgICBzdHJlYW1Vcmw9XCJodHRwczovL3ZpbWVvLmNvbS9ldmVudC81MTY0OS9lbWJlZFwiXG4gICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiXCJcbiAgICAgICAgLz5cbiAgICAgICkgOiB3aGljaFN0cmVhbSA9PT0gXCJjaHJpc3RtYXNcIiA/ICggLy9yZXR1cm5pbmcgY29tcG9uZW50IHdpdGggbm8gZGVzY3JpcHRpb24gZm9yIGd1ZXN0IHRlYWNoZXJcbiAgICAgICAgPFN0cmVhbVxuICAgICAgICAgIHN0cmVhbVVybD1cImh0dHBzOi8vdmltZW8uY29tL2V2ZW50LzUxNjQ5L2VtYmVkXCJcbiAgICAgICAgICB0aXRsZT1cIkNocmlzdG1hcyBFdmUgU2VydmljZVwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJMdWtlIDI6MjItMzVcIlxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgLy9yZXR1cm4gbGl2ZXN0cmVhbSBhcmNoaXZlXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGl2ZXN0cmVhbUFyY2hpdmV9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVmVyc2UgYnkgVmVyc2UgRmVsbG93c2hpcCBsaXZlc3RyZWFtcyBpdHMgU3VuZGF5IHNlcnZpY2VzLiBXaGlsZVxuICAgICAgICAgICAgICB0aGVyZSdzIG5vdCBhIHNlcnZpY2Ugc3RyZWFtaW5nIHJpZ2h0IG5vdywgcGxlYXNlIGZlZWwgZnJlZSB0b1xuICAgICAgICAgICAgICBjaGVjayBvdXQgc29tZSBvZiBvdXIgcmVjZW50IHNlcnZpY2VzIGJlbG93LiBSZWNvcmRpbmdzIG9mIG91clxuICAgICAgICAgICAgICBzZXJ2aWNlcyBhcmUgYXZhaWxhYmxlIG9uIG91cntcIiBcIn1cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9iaWJsZS1zdHVkaWVzXCI+XG4gICAgICAgICAgICAgICAgPGE+QmlibGUgU3R1ZGllczwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPntcIiBcIn1cbiAgICAgICAgICAgICAgcGFnZS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7c3RyZWFtQXJjaGl2ZSgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImlzT3ZlciIsIkxpbmsiLCJTdHJlYW0iLCJzdHlsZXMiLCJNZW1vcmlhbFNlcnZpY2UiLCJzb3J0QnkiLCJyZXF1aXJlIiwiTGl2ZXN0cmVhbSIsImRhdGEiLCJwcmV2aW91c1ZpZGVvcyIsIndoaWNoU3RyZWFtIiwiY3JlYXRlTWFya3VwIiwidmlkZW8iLCJfX2h0bWwiLCJlbWJlZCIsImh0bWwiLCJ3ZWRuZXNkYXlTZXJpZXMiLCJzZXRXZWRuZXNkYXlTZXJpZXMiLCJzdW5kYXlTZXJpZXMiLCJzZXRTdW5kYXlTZXJpZXMiLCJzdW5kYXlBcmNoaXZlVmlkZW9zIiwic2V0U3VuZGF5QXJjaGl2ZVZpZGVvcyIsInN0cmVhbUFyY2hpdmUiLCJzb3J0ZWRWaWRlb3MiLCJyZXZlcnNlIiwic2xpY2UiLCJtYXAiLCJoMyIsIm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJsaXZlc3RyZWFtQXJjaGl2ZVZpZGVvUGxheWVyIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJsaXZlc3RyZWFtIiwiaDEiLCJzdHJlYW1VcmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic2VyaWVzTGluayIsIm5vdGVzVXJsIiwicXVlc3Rpb25VcmwiLCJsaXZlc3RyZWFtQXJjaGl2ZSIsInAiLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/livestream.js\n"));

/***/ })

});