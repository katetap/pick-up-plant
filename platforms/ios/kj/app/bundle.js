require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app-root.xml": "./app-root.xml",
	"./app.css": "./app.css",
	"./app.ts": "./app.ts",
	"./head/head-page.ts": "./head/head-page.ts",
	"./head/head-page.xml": "./head/head-page.xml",
	"./list/list-page.ts": "./list/list-page.ts",
	"./list/list-page.xml": "./list/list-page.xml",
	"./list/list-view-model.ts": "./list/list-view-model.ts",
	"./no/no-page.ts": "./no/no-page.ts",
	"./no/no-page.xml": "./no/no-page.xml",
	"./no/no-view-model.ts": "./no/no-view-model.ts",
	"./observable-property-decorator.ts": "./observable-property-decorator.ts",
	"./shared/room-service.ts": "./shared/room-service.ts",
	"./yes/yes-page.ts": "./yes/yes-page.ts",
	"./yes/yes-page.xml": "./yes/yes-page.xml"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app-root.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Frame defaultPage=\"head/head-page\"/>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app-root.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./app-root.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"'nativescript-theme-core/css/core.light.css'"},{"type":"rule","selectors":[".grey"],"declarations":[{"type":"declaration","property":"background-color","value":"#E8E8E8"},{"type":"declaration","property":"color","value":"#000000"}]},{"type":"rule","selectors":[".white"],"declarations":[{"type":"declaration","property":"background-color","value":"#FFFFFF"}]},{"type":"rule","selectors":[".fon"],"declarations":[{"type":"declaration","property":"justify-content","value":"center"},{"type":"declaration","property":"align-items","value":"center"},{"type":"declaration","property":"background-size","value":"cover"},{"type":"declaration","property":"background-image","value":"url(\"~/images/background5.jpg\")"}]},{"type":"rule","selectors":[".form"],"declarations":[{"type":"declaration","property":"margin","value":"20"}]},{"type":"rule","selectors":[".qws"],"declarations":[{"type":"declaration","property":"position","value":"absolute"},{"type":"declaration","property":"width","value":"345pt"},{"type":"declaration","property":"height","value":"186pt"},{"type":"declaration","property":"margin","value":"450px 15px 15px"},{"type":"declaration","property":"border-radius","value":"15"}]},{"type":"rule","selectors":[".bar"],"declarations":[{"type":"declaration","property":"width","value":"20"},{"type":"declaration","property":"height","value":"18"}]},{"type":"rule","selectors":[".f"],"declarations":[{"type":"declaration","property":"width","value":"20"},{"type":"declaration","property":"height","value":"20"}]},{"type":"rule","selectors":[".question"],"declarations":[{"type":"declaration","property":"margin","value":"3px"},{"type":"declaration","property":"font-family","value":"'Open Sans', 'OpenSans-Bold'"},{"type":"declaration","property":"font-weight","value":"normal"},{"type":"declaration","property":"font-size","value":"24px"},{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"color","value":"rgb(0, 0, 0)"}]},{"type":"rule","selectors":[".color"],"declarations":[{"type":"declaration","property":"color","value":"rgb(195, 0, 255)"}]},{"type":"rule","selectors":[".scroll-view-separator"],"declarations":[{"type":"declaration","property":"background-color","value":"#FFFFFF"},{"type":"declaration","property":"clip-path","value":"polygon(0 75%, 100% 25%, 100% 100%, 0 100%)"}]},{"type":"rule","selectors":[".font"],"declarations":[{"type":"declaration","property":"font-size","value":"24px"}]},{"type":"rule","selectors":[".yn"],"declarations":[{"type":"declaration","property":"margin","value":"40px 130px 15px"}]},{"type":"rule","selectors":[".navItem"],"declarations":[{"type":"declaration","property":"width","value":"24%"},{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":[".action-bar"],"declarations":[{"type":"declaration","property":"background-color","value":"#B5B5B5"},{"type":"declaration","property":"color","value":"rgb(0, 0, 0)"}]},{"type":"rule","selectors":[".action-bar-label"],"declarations":[{"type":"declaration","property":"font-family","value":"'Open Sans'"},{"type":"declaration","property":"font-weight","value":"normal"},{"type":"declaration","property":"background-color","value":"#B5B5B5"},{"type":"declaration","property":"font-size","value":"20px"},{"type":"declaration","property":"color","value":"rgb(0, 0, 0)"}]},{"type":"rule","selectors":[".item-name"],"declarations":[{"type":"declaration","property":"color","value":"#303c47"},{"type":"declaration","property":"font-family","value":"'Open Sans', 'OpenSans-Bold'"},{"type":"declaration","property":"font-weight","value":"normal"},{"type":"declaration","property":"padding","value":"2"}]},{"type":"rule","selectors":[".item-desc"],"declarations":[{"type":"declaration","property":"color","value":"#303c47"},{"type":"declaration","property":"font-family","value":"'Open Sans', 'OpenSans-Regular'"},{"type":"declaration","property":"padding","value":"2"}]},{"type":"rule","selectors":[".item-price"],"declarations":[{"type":"declaration","property":"color","value":"#c40404"},{"type":"declaration","property":"font-family","value":"'Open Sans', 'OpenSans-Bold'"},{"type":"declaration","property":"font-weight","value":"bold"},{"type":"declaration","property":"padding","value":"2"}]},{"type":"rule","selectors":[".textdesc"],"declarations":[{"type":"declaration","property":"font-size","value":"13px"},{"type":"declaration","property":"color","value":"#B5B5B5"}]},{"type":"rule","selectors":[".hm"],"declarations":[{"type":"declaration","property":"margin-top","value":"120px"}]},{"type":"rule","selectors":[".backgroundblur"],"declarations":[{"type":"declaration","property":"justify-content","value":"center"},{"type":"declaration","property":"align-items","value":"center"},{"type":"declaration","property":"background-size","value":"cover"},{"type":"declaration","property":"background-image","value":"url(\"~/images/.backgroundblur.jpg\")"}]},{"type":"rule","selectors":[".tollbar"],"declarations":[{"type":"declaration","property":"position","value":"absolute"},{"type":"declaration","property":"width","value":"375pt"},{"type":"declaration","property":"height","value":"44pt"},{"type":"declaration","property":"background-color","value":"#E8E8E8"}]},{"type":"rule","selectors":[".roompatemeters"],"declarations":[{"type":"declaration","property":"background-color","value":"rgb(255, 255, 255)"},{"type":"declaration","property":"color","value":"rgb(0, 0, 0)"},{"type":"declaration","property":"font-size","value":"24px"},{"type":"declaration","property":"font-family","value":"'Open Sans', 'OpenSans-Bold'"},{"type":"declaration","property":"font-weight","value":"normal"}]}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./app.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/application");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__);

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        
tns_core_modules_application__WEBPACK_IMPORTED_MODULE_0__["run"]({ moduleName: 'app-root' });
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./app.ts" });
    });
} 
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./head/head-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateYes", function() { return navigateYes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateNo", function() { return navigateNo; });
function navigateYes(args) {
    var button = args.object;
    var page = button.page;
    page.frame.navigate("yes/yes-page.xml");
}
function navigateNo(args) {
    var button = args.object;
    var page = button.page;
    page.frame.navigate("no/no-page.xml");
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./head/head-page.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./head/head-page.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./head/head-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page loaded=\"pageLoaded\" class=\"page\"  xmlns:lv=\"nativescript-ui-listview\">\r\n\t<FlexboxLayout class=\"fon\">\r\n\t    <StackLayout class=\"qws\">\t\r\n            <Label class=\"question\" text=\"Планируете ли вы уделять время комнатными растениями?\" textWrap=\"true\"></Label>\r\n\t        <StackLayout orientation=\"horizontal\" horizontalAlignment=\"center\">\r\n                <Button text=\"Да\" tap=\"navigateYes\" class=\"color font yn\" />\r\n                <Button text=\"Нет\" tap=\"navigateNo\" class=\"color font yn\"/>\r\n            </StackLayout>\r\n        </StackLayout>\r\n\t</FlexboxLayout>\r\n</Page>\r\n"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./head/head-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./head/head-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./list/list-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNavigatingTo", function() { return onNavigatingTo; });
/* harmony import */ var _list_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./list/list-view-model.ts");

function onNavigatingTo(args) {
    var page = args.object;
    page.actionBarHidden = false;
    page.bindingContext = new _list_view_model__WEBPACK_IMPORTED_MODULE_0__["ListViewModel"](page.navigationContext);
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./list/list-page.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./list/list-page.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./list/list-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("nativescript-ui-listview", function() { return __webpack_require__("nativescript-ui-listview"); });
global.registerModule("nativescript-ui-listview/RadListView", function() { return __webpack_require__("nativescript-ui-listview"); });
global.registerModule("nativescript-ui-listview/RadListView.listViewLayout", function() { return __webpack_require__("nativescript-ui-listview"); });
global.registerModule("nativescript-ui-listview/ListViewLinearLayout", function() { return __webpack_require__("nativescript-ui-listview"); });
global.registerModule("nativescript-ui-listview/RadListView.itemTemplate", function() { return __webpack_require__("nativescript-ui-listview"); });

module.exports = "<Page navigatingTo=\"onNavigatingTo\" class=\"page\" xmlns:lv=\"nativescript-ui-listview\">\r\n\t\r\n    <ActionBar class=\"action-bar-label\">\r\n            <Label text=\"{{roomType}}\"></Label>\r\n\t\t\t<NavigationButton icon=\"~/images/back_v.png\" tap=\"goBack\" />\r\n\t\t\t<ActionItem icon=\"~/images/heart_violet.png\" ios.position=\"right\" tap=\"{{ toggleFavouritesFilter }}\" class=\"f\"/>           \r\n\t</ActionBar>\r\n\r\n\t\r\n \t<GridLayout columns=\"*\" >\r\n\t\t<lv:RadListView id=\"list-view\" row=\"0\" items=\"{{ items }}\" marginRight=\"-2\" backgroundColor=\"#e6e6e6\"  itemLoading=\"{{ onItemLoading }}\">\r\n\t\t\t<lv:RadListView.listViewLayout>\r\n    \t\t\t<lv:ListViewLinearLayout scrollDirection=\"Vertical\"/>\r\n\t\t\t</lv:RadListView.listViewLayout>\r\n\t\t\t<lv:RadListView.itemTemplate>\r\n\t\t\t\t<StackLayout margin=\"10 15 10 15\" borderRadius=\"10\" backgroundColor=\"white\" padding=\"1\" orientation=\"horizontal\" >\r\n\t\t\t\t\t<Image src=\"{{ image }}\" width=\"115\" height=\"115\" stretch=\"aspectFill\" />\r\n\t\t\t\t\t<StackLayout orientation=\"vertical\" width=\"200\" height=\"115\"  >\r\n\t\t\t\t\t\t<Label text=\"{{ name }}\" class=\"item-name \" textWrap=\"true\" />\r\n\t\t\t\t\t\t<Label text=\"{{ desc }}\" class=\"item-desc textdesc\" textWrap=\"true\" />\t\t\t\t\t\r\n\t\t\t\t\t</StackLayout>\t\r\n\t\t\t\t\t<StackLayout orientation=\"vertical\" margin=\"3\" >\r\n\t\t\t\t\t\t\t<Image src=\"~/images/more.png\" width=\"23\" height=\"21\" stretch=\"aspectFill\" />\r\n\t\t\t\t\t\t\t<Image src=\"~/images/heart_outline_white.png\" width=\"23\" height=\"21\" stretch=\"aspectFill\" class=\"hm\" \r\n\t\t\t\t\t\t\tsrc=\"{{ favourite ? '~/images/heart_solid_violet.png' : '~/images/heart_outline_white.png'}}\" tap=\"{{ toggleFavourite }}\" />\r\n\t\t\t\t\t</StackLayout>\r\n\t\t\t\t</StackLayout>\t\t\t\t\r\n\t\t\t</lv:RadListView.itemTemplate>\r\n\t\t</lv:RadListView>\r\n\t</GridLayout>\r\n\t\r\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./list/list-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./list/list-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./list/list-view-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewModel", function() { return ListViewModel; });
/* harmony import */ var _shared_room_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./shared/room-service.ts");
var Observable = __webpack_require__("tns-core-modules/data/observable").Observable;

var ListViewModel = /** @class */ (function () {
    function ListViewModel(res) {
        this.showFavouritesFilter = false;
        this._roomService = new _shared_room_service__WEBPACK_IMPORTED_MODULE_0__["RoomService"]();
        this._roomService = _shared_room_service__WEBPACK_IMPORTED_MODULE_0__["RoomService"].getInstance();
        this.items = this._roomService.filter(res);
        this.roomType = res.roomType;
    }
    ListViewModel.prototype.toggleFavouritesFilter = function (args) {
        var image = args.object;
        var listView = image.page.getViewById("list-view");
        if (this.showFavouritesFilter) {
            listView.filteringFunction = undefined;
            image.src = "~/images/heart_line.jpg";
            this.showFavouritesFilter = false;
        }
        else {
            listView.filteringFunction = function (item) {
                return item.favourite;
            };
            image.src = "~/images/heart_solid.jpg";
            this.showFavouritesFilter = true;
        }
    };
    ListViewModel.prototype.toggleFavourite = function (args) {
        var image = args.object;
        var listView = image.page.getViewById("list-view");
        var itemData = image.bindingContext;
        if (itemData.favourite) {
            image.src = "~/images/heart_outline_white.png";
            itemData.favourite = false;
        }
        else {
            image.src = "~/images/heart_solid_violet.png";
            itemData.favourite = true;
        }
    };
    return ListViewModel;
}());

; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./list/list-view-model.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./list/list-view-model.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./no/no-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageLoaded", function() { return pageLoaded; });
/* harmony import */ var _no_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./no/no-view-model.ts");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new _no_view_model__WEBPACK_IMPORTED_MODULE_0__["NoViewModel"]();
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./no/no-page.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./no/no-page.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./no/no-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("nativescript-ui-listview", function() { return __webpack_require__("nativescript-ui-listview"); });
global.registerModule("nativescript-ui-listview/RadListView", function() { return __webpack_require__("nativescript-ui-listview"); });
global.registerModule("nativescript-ui-listview/RadListView.listViewLayout", function() { return __webpack_require__("nativescript-ui-listview"); });
global.registerModule("nativescript-ui-listview/ListViewLinearLayout", function() { return __webpack_require__("nativescript-ui-listview"); });
global.registerModule("nativescript-ui-listview/RadListView.itemTemplate", function() { return __webpack_require__("nativescript-ui-listview"); });

module.exports = "<Page loaded=\"pageLoaded\" class=\"page\" xmlns:lv=\"nativescript-ui-listview\">\r\n\r\n\t<ActionBar class=\"action-bar-label\">\r\n            <Label text=\"Комнатные растения\"></Label>\r\n\t\t\t<NavigationButton icon=\"~/images/back_v.png\" tap=\"goBack\" />\r\n\t\t\t<ActionItem icon=\"~/images/heart_violet.png\" ios.position=\"right\" tap=\"{{ toggleFavouritesFilter }}\" class=\"f\"/>           \r\n\t</ActionBar>\r\n\r\n \t<GridLayout columns=\"*\" >\r\n\t\t<lv:RadListView id=\"list-view\" row=\"0\" items=\"{{ items }}\" marginRight=\"-2\" backgroundColor=\"#e6e6e6\"  itemLoading=\"{{ onItemLoading }}\">\r\n\t\t\t<lv:RadListView.listViewLayout>\r\n    \t\t\t<lv:ListViewLinearLayout scrollDirection=\"Vertical\"/>\r\n\t\t\t</lv:RadListView.listViewLayout>\r\n\t\t\t<lv:RadListView.itemTemplate>\r\n\t\t\t\t<StackLayout margin=\"10 15 10 15\" borderRadius=\"10\" backgroundColor=\"white\" padding=\"1\" orientation=\"horizontal\" >\r\n\t\t\t\t\t<Image src=\"{{ image }}\" width=\"115\" height=\"115\" stretch=\"aspectFill\" />\r\n\t\t\t\t\t<StackLayout orientation=\"vertical\" width=\"200\" height=\"115\"  >\r\n\t\t\t\t\t\t<Label text=\"{{ name }}\" class=\"item-name \" textWrap=\"true\" />\r\n\t\t\t\t\t\t<Label text=\"{{ desc }}\" class=\"item-desc textdesc\" textWrap=\"true\" />\t\t\t\t\t\r\n\t\t\t\t\t</StackLayout>\t\r\n\t\t\t\t\t<StackLayout orientation=\"vertical\" margin=\"3\" >\r\n\t\t\t\t\t\t\t<Image src=\"~/images/more.png\" width=\"23\" height=\"21\" stretch=\"aspectFill\" />\r\n\t\t\t\t\t\t\t<Image src=\"~/images/heart_outline_white.png\" width=\"23\" height=\"21\" stretch=\"aspectFill\" class=\"hm\" \r\n\t\t\t\t\t\t\tsrc=\"{{ favourite ? '~/images/heart_solid_violet.png' : '~/images/heart_outline_white.png'}}\" tap=\"{{ toggleFavourite }}\" />\r\n\t\t\t\t\t</StackLayout>\r\n\t\t\t\t</StackLayout>\t\t\t\t\r\n\t\t\t</lv:RadListView.itemTemplate>\r\n\t\t</lv:RadListView>\r\n\t</GridLayout>\r\n\r\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./no/no-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./no/no-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./no/no-view-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoViewModel", function() { return NoViewModel; });
var Observable = __webpack_require__("tns-core-modules/data/observable").Observable;
var NoViewModel = /** @class */ (function (_super) {
    __extends(NoViewModel, _super);
    function NoViewModel() {
        var _this = _super.call(this) || this;
        _this.showFavouritesFilter = false;
        _this.items = [
            { name: "Суккуленты", desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю", price: "300", image: "~/images/суккуленты.jpg" },
            { name: "Кипарисовик", desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю", price: "200", image: "~/images/кипарисовик.jpg" },
            { name: "Хамедорея элегантс", desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю", price: "350", image: "~/images/сансевиерия.jpg" },
            { name: "Сансевиерия", desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю", price: "400", image: "~/images/хамедорея.jpg" },
            { name: "Кактус", desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю", price: "500", image: "~/images/кактус.jpg" }
        ];
        return _this;
    }
    NoViewModel.prototype.toggleFavouritesFilter = function (args) {
        var image = args.object;
        var listView = image.page.getViewById("list-view");
        if (this.showFavouritesFilter) {
            listView.filteringFunction = undefined;
            image.src = "~/images/heart_line.jpg";
            this.showFavouritesFilter = false;
        }
        else {
            listView.filteringFunction = function (item) {
                return item.favourite;
            };
            image.src = "~/images/heart_solid.jpg";
            this.showFavouritesFilter = true;
        }
    };
    NoViewModel.prototype.toggleFavourite = function (args) {
        var image = args.object;
        var listView = image.page.getViewById("list-view");
        var itemData = image.bindingContext;
        if (itemData.favourite) {
            image.src = "~/images/heart_outline_white.png";
            itemData.favourite = false;
        }
        else {
            image.src = "~/images/heart_solid_violet.png";
            itemData.favourite = true;
        }
    };
    return NoViewModel;
}(Observable));

; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./no/no-view-model.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./no/no-view-model.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./observable-property-decorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableProperty", function() { return ObservableProperty; });
function ObservableProperty() {
    return function (target, propertyKey) {
        Object.defineProperty(target, propertyKey, {
            get: function () {
                return this["_" + propertyKey];
            },
            set: function (value) {
                if (this["_" + propertyKey] === value) {
                    return;
                }
                this["_" + propertyKey] = value;
                this.notifyPropertyChange(propertyKey, value);
            },
            enumerable: true,
            configurable: true
        });
    };
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./observable-property-decorator.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./observable-property-decorator.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./shared/room-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return RoomService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filters", function() { return Filters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flower", function() { return Flower; });
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/data/observable-array");
/* harmony import */ var tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/data/observable");
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_1__);


var RoomService = /** @class */ (function (_super) {
    __extends(RoomService, _super);
    function RoomService() {
        var _this = _super.call(this) || this;
        _this._items = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_0__["ObservableArray"]();
        _this.data = [
            {
                name: "Суккуленты",
                desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю",
                image: "~/images/суккуленты.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор", "Ванная"],
                windowsCount: ["0", "1", "2", "3"],
                sun: true,
                preferences: ["не выбрано"]
            },
            {
                name: "Кипарисовик",
                desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю",
                image: "~/images/кипарисовик.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор", "Спальная"],
                windowsCount: ["0", "1", "2", "3"],
                sun: true,
                preferences: ["не выбрано"]
            },
            {
                name: "Хамедорея элегантс",
                desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю",
                image: "~/images/сансевиерия.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор", "Ванная", "Спальная"],
                windowsCount: ["1", "2", "3"],
                sun: true,
                preferences: ["не выбрано"]
            },
            {
                name: "Сансевиерия",
                desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю",
                image: "~/images/хамедорея.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор"],
                windowsCount: ["1", "2", "3"],
                sun: true,
                preferences: ["не выбрано"]
            },
            {
                name: "Кактус",
                desc: "Поливать 1 раз в неделю",
                image: "~/images/кактус.jpg",
                roomType: ["Кухня", "Коридор"],
                windowsCount: ["0", "1", "2", "3"],
                sun: false,
                preferences: ["не выбрано"]
            },
            {
                name: "Грёнскан",
                desc: "Размещать в хорошо освещенном солнечном месте , частый полив",
                image: "~/images/гренскан.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор"],
                windowsCount: ["1", "2", "3"],
                sun: true,
                preferences: ["не выбрано"]
            },
            {
                name: "Алое Вера",
                desc: "Предпочитает теплую среду,ограниченный полив",
                image: "~/images/алое вера.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор", "Спальная"],
                windowsCount: ["1", "2", "3"],
                sun: true,
                preferences: ["не выбрано"]
            },
            {
                name: "Бромелия",
                desc: "Опрыскивайте раз в неделю, поливайте в розетку растения, умеренный полив",
                image: "~/images/бромелия.jpg",
                roomType: ["Ванная", "Кухня"],
                windowsCount: ["1", "2", "3"],
                sun: true,
                preferences: ["с запахом", "с цветком"]
            },
            {
                name: "Зантедеския",
                desc: "Размещать в хорошо освещенном солнечном месте, умеренный полив",
                image: "~/images/зантедеския.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор", "Спальная", "Ванная"],
                windowsCount: ["1", "2", "3"],
                sun: true,
                preferences: ["с запахом", "с цветком"]
            },
            {
                name: "Вриезия",
                desc: "Поливать 1 раза в неделю",
                image: "~/images/вриезия.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор", "Спальная", "Ванная"],
                windowsCount: ["1", "2", "3"],
                sun: true,
                preferences: ["с запахом", "с цветком"]
            },
            {
                name: "Хризантема",
                desc: "Размещать в хорошо освещенном солнечном месте, умеренный полив",
                image: "~/images/хризантема.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор"],
                windowsCount: ["1", "2", "3"],
                sun: true,
                preferences: ["с запахом", "с цветком"]
            },
            {
                name: "Фаленопсис",
                desc: "Размещать в хорошо освещенном солнечном месте, поддерживайте влагу, погружать в емкость с водой",
                image: "~/images/фаленопсис.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор", "Спальная", "Ванная"],
                windowsCount: ["1", "2", "3"],
                sun: true,
                preferences: ["с запахом", "с цветком"]
            },
            {
                name: "Тилландсия",
                desc: "Размещать в затененном месте, умеренный полив",
                image: "~/images/тилландсия.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор", "Ванная", "Спальная"],
                windowsCount: ["0"],
                sun: false,
                preferences: ["с запахом", "с цветком"]
            },
            {
                name: "Фикус микрокарпа гинсенг",
                desc: "Умеренный полив",
                image: "~/images/фикус микрокарпа гинсенг.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор"],
                windowsCount: ["0", "1", "2", "3"],
                sun: false,
                preferences: ["не выбрано"]
            },
            {
                name: "Драцена",
                desc: "Поместить цветок в вазу с чистой водой (уровень воды 5 см), менять воду один раз в две недели",
                image: "~/images/драцена.jpg",
                roomType: ["Кухня", "Ванная"],
                windowsCount: ["0", "1", "2", "3"],
                sun: false,
                preferences: ["не выбрано"]
            },
            {
                name: "Гималайамикс",
                desc: "Умеренный полив",
                image: "~/images/гималайамикс.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор"],
                windowsCount: ["0", "1", "2", "3"],
                sun: false,
                preferences: ["не выбрано"]
            },
            {
                name: "Шлюмбергера",
                desc: "Размещать в хорошо освещенном солнечном месте, умеренный полив",
                image: "~/images/шлюмбергера.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор"],
                windowsCount: ["1", "2", "3"],
                sun: true,
                preferences: ["c цветком"]
            },
            {
                name: "Крестовник фикусовидный",
                desc: "Поливать 2 раза в неделю",
                image: "~/images/крестовник фикусовидный.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор"],
                windowsCount: ["1", "2", "3"],
                sun: false,
                preferences: ["не выбрано"]
            },
            {
                name: "Гейхера",
                desc: "Поливать 2 раза в неделю",
                image: "~/images/гейхера.jpg",
                roomType: ["Ванная", "Кухня"],
                windowsCount: ["0"],
                sun: false,
                preferences: ["не выбрано"]
            },
            {
                name: "Шеффлера арборикола",
                desc: "Размещать в хорошо освещенном солнечном месте, ограниченный полив",
                image: "~/images/шеффлера арборикола.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор"],
                windowsCount: ["1", "2", "3"],
                sun: true,
                preferences: ["не выбрано"]
            }
        ];
        RoomService._instance = _this;
        _this._items.push(_this.data);
        return _this;
    }
    RoomService.getInstance = function () {
        return RoomService._instance;
    };
    RoomService.prototype.checkMass = function (mass, res) {
        var check = false;
        mass.forEach(function (element) {
            if (element == res)
                check = true;
        });
        return check;
    };
    RoomService.prototype.filter = function (res) {
        var _this = this;
        var items1 = new tns_core_modules_data_observable_array__WEBPACK_IMPORTED_MODULE_0__["ObservableArray"]();
        this._items.forEach(function (element) {
            if (element.sun == res.sun && _this.checkMass(element.roomType, res.roomType) && _this.checkMass(element.windowsCount, res.windowsCount) && _this.checkMass(element.preferences, res.preferences)) {
                items1.push(element);
            }
        });
        return items1;
    };
    Object.defineProperty(RoomService.prototype, "res", {
        get: function () {
            return this._res;
        },
        set: function (value) {
            this._res = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoomService.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (val) {
            this._items = val;
        },
        enumerable: true,
        configurable: true
    });
    RoomService._instance = new RoomService();
    return RoomService;
}(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]));

var Filters = /** @class */ (function () {
    function Filters() {
    }
    return Filters;
}());

var Flower = /** @class */ (function () {
    function Flower(name, desc, image, sun, roomType, windowsCount, preferences) {
        this.name = name;
        this.desc = desc;
        this.image = image;
        this.sun = sun;
        this.windowsCount = windowsCount;
        this.roomType = roomType;
        this.preferences = preferences;
    }
    return Flower;
}());

; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./shared/room-service.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./shared/room-service.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./yes/yes-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNavigatingTo", function() { return onNavigatingTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onListPickerLoaded", function() { return onListPickerLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onListPickerLoaded1", function() { return onListPickerLoaded1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onListPickerLoaded2", function() { return onListPickerLoaded2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSwitchLoaded", function() { return onSwitchLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateList", function() { return navigateList; });
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/data/observable");
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_room_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./shared/room-service.ts");
/* harmony import */ var tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tns-core-modules/ui/frame");
/* harmony import */ var tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_2__);



var typeOfRoom = ["Кухня", "Гостиная", "Коридор", "Ванная", "Спальная"];
var preferences = ["не выбрано", "с запахом", "с цветком"];
var windowsCount = ["0", "1", "2", "3"];
var res = new _shared_room_service__WEBPACK_IMPORTED_MODULE_1__["Filters"]();
res.roomType = "Кухня";
res.preferences = "не выбрано";
res.sun = false;
res.windowsCount = "0";
function onNavigatingTo(args) {
    var page = args.object;
    var vm = Object(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__["fromObject"])({
        typeOfRoom: typeOfRoom,
        preferences: preferences,
        windowsCount: windowsCount
    });
    page.bindingContext = vm;
}
function onListPickerLoaded(fargs) {
    var listPickerComponent = fargs.object;
    listPickerComponent.on("selectedIndexChange", function (args) {
        var picker = args.object;
        res.roomType = typeOfRoom[picker.selectedIndex];
    });
}
function onListPickerLoaded1(fargs) {
    var listPickerComponent = fargs.object;
    listPickerComponent.on("selectedIndexChange", function (args) {
        var picker = args.object;
        console.log("index: " + picker.selectedIndex + "; item\" " + preferences[picker.selectedIndex]);
        res.preferences = preferences[picker.selectedIndex];
    });
}
function onListPickerLoaded2(fargs) {
    var listPickerComponent = fargs.object;
    listPickerComponent.on("selectedIndexChange", function (args) {
        var picker = args.object;
        res.windowsCount = windowsCount[picker.selectedIndex];
    });
}
function onSwitchLoaded(argsloaded) {
    var mySwitch = argsloaded.object;
    mySwitch.on("checkedChange", function (args) {
        var sw = args.object;
        var isChecked = sw.checked;
        res.sun = isChecked;
    });
}
function navigateList(args) {
    var topmostFrame = tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_2__["Frame"].topmost();
    topmostFrame.navigate({
        moduleName: "list/list-page",
        context: res
    });
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./yes/yes-page.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./yes/yes-page.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./yes/yes-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page loaded=\"onPageLoaded\" class=\"page\" xmlns:lv=\"nativescript-ui-listview\" navigatingTo=\"onNavigatingTo\">   \r\n    \r\n    <ActionBar class=\"action-bar-label\">\r\n            <Label text=\"Параметры\"></Label>\r\n\t\t\t<NavigationButton icon=\"~/images/back_v.png\" tap=\"goBack\" />         \r\n\t</ActionBar>\r\n\r\n    <ScrollView>\r\n      <StackLayout> \r\n            <GridLayout rows=\"50, auto, 50, auto,50, auto,50\" columns=\"*, *\" class=\"form\" color=\"black\"  >\r\n\t\t\t\t<Label row=\"0\" col=\"0\" text=\"Тип комнаты\" horizontalAlignment=\"left\" class=\"label\" />\r\n\t\t\t\t<ListPicker row=\"0\" col=\"1\" items=\"{{ typeOfRoom }}\" selectedIndex=\"0\" loaded=\"onListPickerLoaded\" color=\"black\" />\r\n                <StackLayout row=\"1\" col=\"0\" colSpan=\"2\" class=\"hr-light\" />\r\n\r\n                <Label row=\"2\" col=\"0\" text=\"Количество окон в комнате\" horizontalAlignment=\"left\" class=\"label\" textWrap=\"true\"/>\r\n\t\t\t\t<ListPicker row=\"2\" col=\"1\" items=\"{{ windowsCount }}\" selectedIndex=\"0\" loaded=\"onListPickerLoaded2\" color=\"black\" />\r\n                <StackLayout row=\"3\" col=\"0\" colSpan=\"2\" class=\"hr-light\" />\r\n        \r\n                <Label row=\"4\" col=\"0\" text=\"Солнечная сторона\" horizontalAlignment=\"left\" class=\"label\" textWrap=\"true\" />\r\n                <Switch row=\"4\" col=\"1\" checked=\"false\" loaded=\"onSwitchLoaded\"  backgroundColor=\"rgb(195, 0, 255)\" color=\"white\" horizontalAlignment=\"right\"/>\r\n                <StackLayout row=\"5\" col=\"0\" colSpan=\"2\" class=\"hr-light\" />\r\n\r\n                <Label row=\"6\" col=\"0\" text=\"Предпочтения:\" horizontalAlignment=\"left\" class=\"label\" />\r\n\t\t\t\t<ListPicker row=\"6\" col=\"1\" items=\"{{ preferences }}\" selectedIndex=\"0\" loaded=\"onListPickerLoaded1\" color=\"black\"/>\r\n\t\t\t</GridLayout>\r\n       \r\n            <Button  text=\"Подобрать\"  tap=\"navigateList\" class=\"color font\"/>\r\n\r\n      </StackLayout>\t\r\n    </ScrollView>\r\n</Page>\r\n"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./yes/yes-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./yes/yes-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "nativescript-ui-listview":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-listview");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/data/observable":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/data/observable");

/***/ }),

/***/ "tns-core-modules/data/observable-array":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/data/observable-array");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./app.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvb3QueG1sIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLnRzIiwid2VicGFjazovLy8uL2hlYWQvaGVhZC1wYWdlLnRzIiwid2VicGFjazovLy8uL2hlYWQvaGVhZC1wYWdlLnhtbCIsIndlYnBhY2s6Ly8vLi9saXN0L2xpc3QtcGFnZS50cyIsIndlYnBhY2s6Ly8vLi9saXN0L2xpc3QtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vLy4vbGlzdC9saXN0LXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vbm8vbm8tcGFnZS50cyIsIndlYnBhY2s6Ly8vLi9uby9uby1wYWdlLnhtbCIsIndlYnBhY2s6Ly8vLi9uby9uby12aWV3LW1vZGVsLnRzIiwid2VicGFjazovLy8uL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yLnRzIiwid2VicGFjazovLy8uL3NoYXJlZC9yb29tLXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4veWVzL3llcy1wYWdlLnRzIiwid2VicGFjazovLy8uL3llcy95ZXMtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNKOzs7Ozs7OztBQ3BDQSwyRDtBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLHlDQUF5QztBQUNwRSxLQUFLO0FBQ0wsQzs7Ozs7Ozs7QUNSQSx3SEFBMEUsbUJBQU8sQ0FBQyw0REFBNEMsR0FBRyxrQkFBa0Isa0NBQWtDLFVBQVUsd0VBQXdFLEVBQUUscURBQXFELHFFQUFxRSxFQUFFLDBEQUEwRCxFQUFFLEVBQUUsc0RBQXNELHFFQUFxRSxFQUFFLEVBQUUsb0RBQW9ELG1FQUFtRSxFQUFFLCtEQUErRCxFQUFFLGtFQUFrRSxFQUFFLCtGQUErRixFQUFFLEVBQUUscURBQXFELHNEQUFzRCxFQUFFLEVBQUUsb0RBQW9ELDhEQUE4RCxFQUFFLHdEQUF3RCxFQUFFLHlEQUF5RCxFQUFFLG1FQUFtRSxFQUFFLDZEQUE2RCxFQUFFLEVB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QUFTLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUMzQixHQUFHLENBQUMsR0FBRyxHQUFJLFNBQVMsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFTSxTQUFTLFlBQVksQ0FBQyxJQUFlO0lBQ3hDLElBQU0sWUFBWSxHQUFVLCtEQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDNUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUNsQixVQUFVLEVBQUUsZ0JBQWdCO1FBQzVCLE9BQU8sRUFBRSxHQUFHO0tBQ2YsQ0FBQztBQUVOLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVELDRwQkFBNHBCLGNBQWMsMldBQTJXLGdCQUFnQiwrdUJBQSt1QixlQUFlLHFRO0FBQ255RCxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQiw2Q0FBNkM7QUFDeEUsS0FBSztBQUNMLEM7Ozs7Ozs7O0FDUkEscUQ7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLGlFOzs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7QUNBQSxtRTs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSxvRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAtcm9vdC54bWxcIjogXCIuL2FwcC1yb290LnhtbFwiLFxuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiLFxuXHRcIi4vYXBwLnRzXCI6IFwiLi9hcHAudHNcIixcblx0XCIuL2hlYWQvaGVhZC1wYWdlLnRzXCI6IFwiLi9oZWFkL2hlYWQtcGFnZS50c1wiLFxuXHRcIi4vaGVhZC9oZWFkLXBhZ2UueG1sXCI6IFwiLi9oZWFkL2hlYWQtcGFnZS54bWxcIixcblx0XCIuL2xpc3QvbGlzdC1wYWdlLnRzXCI6IFwiLi9saXN0L2xpc3QtcGFnZS50c1wiLFxuXHRcIi4vbGlzdC9saXN0LXBhZ2UueG1sXCI6IFwiLi9saXN0L2xpc3QtcGFnZS54bWxcIixcblx0XCIuL2xpc3QvbGlzdC12aWV3LW1vZGVsLnRzXCI6IFwiLi9saXN0L2xpc3Qtdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vbm8vbm8tcGFnZS50c1wiOiBcIi4vbm8vbm8tcGFnZS50c1wiLFxuXHRcIi4vbm8vbm8tcGFnZS54bWxcIjogXCIuL25vL25vLXBhZ2UueG1sXCIsXG5cdFwiLi9uby9uby12aWV3LW1vZGVsLnRzXCI6IFwiLi9uby9uby12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvci50c1wiOiBcIi4vb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3IudHNcIixcblx0XCIuL3NoYXJlZC9yb29tLXNlcnZpY2UudHNcIjogXCIuL3NoYXJlZC9yb29tLXNlcnZpY2UudHNcIixcblx0XCIuL3llcy95ZXMtcGFnZS50c1wiOiBcIi4veWVzL3llcy1wYWdlLnRzXCIsXG5cdFwiLi95ZXMveWVzLXBhZ2UueG1sXCI6IFwiLi95ZXMveWVzLXBhZ2UueG1sXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopKD88IVxcXFwuXFxcXC9cXFxcYnRlc3RzXFxcXGJcXFxcLy4qPylcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPEZyYW1lIGRlZmF1bHRQYWdlPVxcXCJoZWFkL2hlYWQtcGFnZVxcXCIvPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC1yb290LnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL2FwcC1yb290LnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIiduYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3MnXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ncmV5XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNFOEU4RThcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiMwMDAwMDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIud2hpdGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI0ZGRkZGRlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mb25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJqdXN0aWZ5LWNvbnRlbnRcIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbGlnbi1pdGVtc1wiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtc2l6ZVwiLFwidmFsdWVcIjpcImNvdmVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1pbWFnZVwiLFwidmFsdWVcIjpcInVybChcXFwifi9pbWFnZXMvYmFja2dyb3VuZDUuanBnXFxcIilcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZm9ybVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnF3c1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiYWJzb2x1dGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjM0NXB0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTg2cHRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI0NTBweCAxNXB4IDE1cHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiMTVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjE4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucXVlc3Rpb25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIzcHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LWZhbWlseVwiLFwidmFsdWVcIjpcIidPcGVuIFNhbnMnLCAnT3BlblNhbnMtQm9sZCdcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIm5vcm1hbFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjI0cHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMCwgMCwgMClcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuY29sb3JcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYigxOTUsIDAsIDI1NSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2Nyb2xsLXZpZXctc2VwYXJhdG9yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNGRkZGRkZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjbGlwLXBhdGhcIixcInZhbHVlXCI6XCJwb2x5Z29uKDAgNzUlLCAxMDAlIDI1JSwgMTAwJSAxMDAlLCAwIDEwMCUpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZvbnRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyNHB4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnluXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiNDBweCAxMzBweCAxNXB4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm5hdkl0ZW1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjI0JVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYWN0aW9uLWJhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjQjVCNUI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMCwgMCwgMClcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYWN0aW9uLWJhci1sYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiJ09wZW4gU2FucydcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIm5vcm1hbFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjQjVCNUI1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjBweFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDAsIDAsIDApXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLml0ZW0tbmFtZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzMwM2M0N1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiJ09wZW4gU2FucycsICdPcGVuU2Fucy1Cb2xkJ1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwibm9ybWFsXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaXRlbS1kZXNjXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjMzAzYzQ3XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1mYW1pbHlcIixcInZhbHVlXCI6XCInT3BlbiBTYW5zJywgJ09wZW5TYW5zLVJlZ3VsYXInXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaXRlbS1wcmljZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2M0MDQwNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiJ09wZW4gU2FucycsICdPcGVuU2Fucy1Cb2xkJ1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiYm9sZFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHRkZXNjXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTNweFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI0I1QjVCNVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5obVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIxMjBweFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iYWNrZ3JvdW5kYmx1clwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImp1c3RpZnktY29udGVudFwiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImFsaWduLWl0ZW1zXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1zaXplXCIsXCJ2YWx1ZVwiOlwiY292ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWltYWdlXCIsXCJ2YWx1ZVwiOlwidXJsKFxcXCJ+L2ltYWdlcy8uYmFja2dyb3VuZGJsdXIuanBnXFxcIilcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudG9sbGJhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiYWJzb2x1dGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjM3NXB0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNDRwdFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjRThFOEU4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnJvb21wYXRlbWV0ZXJzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYigyNTUsIDI1NSwgMjU1KVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDAsIDAsIDApXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjRweFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtZmFtaWx5XCIsXCJ2YWx1ZVwiOlwiJ09wZW4gU2FucycsICdPcGVuU2Fucy1Cb2xkJ1wifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwibm9ybWFsXCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC5jc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL2FwcC5jc3NcIiB9KTtcbiAgICB9KTtcbn0gIiwiaW1wb3J0ICogYXMgYXBwIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24nO1xuYXBwLnJ1bih7IG1vZHVsZU5hbWU6ICdhcHAtcm9vdCcgfSk7XG4vKlxuRG8gbm90IHBsYWNlIGFueSBjb2RlIGFmdGVyIHRoZSBhcHBsaWNhdGlvbiBoYXMgYmVlbiBzdGFydGVkIGFzIGl0IHdpbGwgbm90XG5iZSBleGVjdXRlZCBvbiBpT1MuXG4qL1xuIiwiaW1wb3J0IHsgRXZlbnREYXRhLCBmcm9tT2JqZWN0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZVllcyhhcmdzOiBFdmVudERhdGEpIHtcclxuICAgIGNvbnN0IGJ1dHRvbjogQnV0dG9uID0gPEJ1dHRvbj5hcmdzLm9iamVjdDtcclxuICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSBidXR0b24ucGFnZTtcclxuICAgIHBhZ2UuZnJhbWUubmF2aWdhdGUoXCJ5ZXMveWVzLXBhZ2UueG1sXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGVObyhhcmdzOiBFdmVudERhdGEpIHtcclxuICAgIGNvbnN0IGJ1dHRvbjogQnV0dG9uID0gPEJ1dHRvbj5hcmdzLm9iamVjdDtcclxuICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSBidXR0b24ucGFnZTtcclxuICAgIHBhZ2UuZnJhbWUubmF2aWdhdGUoXCJuby9uby1wYWdlLnhtbFwiKTtcclxufSIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIGxvYWRlZD1cXFwicGFnZUxvYWRlZFxcXCIgY2xhc3M9XFxcInBhZ2VcXFwiICB4bWxuczpsdj1cXFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XFxcIj5cXHJcXG5cXHQ8RmxleGJveExheW91dCBjbGFzcz1cXFwiZm9uXFxcIj5cXHJcXG5cXHQgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJxd3NcXFwiPlxcdFxcclxcbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwicXVlc3Rpb25cXFwiIHRleHQ9XFxcItCf0LvQsNC90LjRgNGD0LXRgtC1INC70Lgg0LLRiyDRg9C00LXQu9GP0YLRjCDQstGA0LXQvNGPINC60L7QvNC90LDRgtC90YvQvNC4INGA0LDRgdGC0LXQvdC40Y/QvNC4P1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuXFx0ICAgICAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwi0JTQsFxcXCIgdGFwPVxcXCJuYXZpZ2F0ZVllc1xcXCIgY2xhc3M9XFxcImNvbG9yIGZvbnQgeW5cXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwi0J3QtdGCXFxcIiB0YXA9XFxcIm5hdmlnYXRlTm9cXFwiIGNsYXNzPVxcXCJjb2xvciBmb250IHluXFxcIi8+XFxyXFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0PC9GbGV4Ym94TGF5b3V0PlxcclxcbjwvUGFnZT5cXHJcXG5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9oZWFkL2hlYWQtcGFnZS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9oZWFkL2hlYWQtcGFnZS54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XHJcbmltcG9ydCB7IExpc3RWaWV3TW9kZWwgfSBmcm9tICcuL2xpc3Qtdmlldy1tb2RlbCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xyXG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xyXG4gICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSBmYWxzZTtcclxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgTGlzdFZpZXdNb2RlbChwYWdlLm5hdmlnYXRpb25Db250ZXh0KTtcclxufVxyXG4iLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCIpOyB9KTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9SYWRMaXN0Vmlld1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIik7IH0pO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L1JhZExpc3RWaWV3Lmxpc3RWaWV3TGF5b3V0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiKTsgfSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvTGlzdFZpZXdMaW5lYXJMYXlvdXRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCIpOyB9KTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9SYWRMaXN0Vmlldy5pdGVtVGVtcGxhdGVcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCIpOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIG5hdmlnYXRpbmdUbz1cXFwib25OYXZpZ2F0aW5nVG9cXFwiIGNsYXNzPVxcXCJwYWdlXFxcIiB4bWxuczpsdj1cXFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XFxcIj5cXHJcXG5cXHRcXHJcXG4gICAgPEFjdGlvbkJhciBjbGFzcz1cXFwiYWN0aW9uLWJhci1sYWJlbFxcXCI+XFxyXFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7cm9vbVR5cGV9fVxcXCI+PC9MYWJlbD5cXHJcXG5cXHRcXHRcXHQ8TmF2aWdhdGlvbkJ1dHRvbiBpY29uPVxcXCJ+L2ltYWdlcy9iYWNrX3YucG5nXFxcIiB0YXA9XFxcImdvQmFja1xcXCIgLz5cXHJcXG5cXHRcXHRcXHQ8QWN0aW9uSXRlbSBpY29uPVxcXCJ+L2ltYWdlcy9oZWFydF92aW9sZXQucG5nXFxcIiBpb3MucG9zaXRpb249XFxcInJpZ2h0XFxcIiB0YXA9XFxcInt7IHRvZ2dsZUZhdm91cml0ZXNGaWx0ZXIgfX1cXFwiIGNsYXNzPVxcXCJmXFxcIi8+ICAgICAgICAgICBcXHJcXG5cXHQ8L0FjdGlvbkJhcj5cXHJcXG5cXHJcXG5cXHRcXHJcXG4gXFx0PEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKlxcXCIgPlxcclxcblxcdFxcdDxsdjpSYWRMaXN0VmlldyBpZD1cXFwibGlzdC12aWV3XFxcIiByb3c9XFxcIjBcXFwiIGl0ZW1zPVxcXCJ7eyBpdGVtcyB9fVxcXCIgbWFyZ2luUmlnaHQ9XFxcIi0yXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNlNmU2ZTZcXFwiICBpdGVtTG9hZGluZz1cXFwie3sgb25JdGVtTG9hZGluZyB9fVxcXCI+XFxyXFxuXFx0XFx0XFx0PGx2OlJhZExpc3RWaWV3Lmxpc3RWaWV3TGF5b3V0PlxcclxcbiAgICBcXHRcXHRcXHQ8bHY6TGlzdFZpZXdMaW5lYXJMYXlvdXQgc2Nyb2xsRGlyZWN0aW9uPVxcXCJWZXJ0aWNhbFxcXCIvPlxcclxcblxcdFxcdFxcdDwvbHY6UmFkTGlzdFZpZXcubGlzdFZpZXdMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0PGx2OlJhZExpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXHJcXG5cXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgbWFyZ2luPVxcXCIxMCAxNSAxMCAxNVxcXCIgYm9yZGVyUmFkaXVzPVxcXCIxMFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCJ3aGl0ZVxcXCIgcGFkZGluZz1cXFwiMVxcXCIgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiID5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8SW1hZ2Ugc3JjPVxcXCJ7eyBpbWFnZSB9fVxcXCIgd2lkdGg9XFxcIjExNVxcXCIgaGVpZ2h0PVxcXCIxMTVcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiIC8+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgd2lkdGg9XFxcIjIwMFxcXCIgaGVpZ2h0PVxcXCIxMTVcXFwiICA+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcInt7IG5hbWUgfX1cXFwiIGNsYXNzPVxcXCJpdGVtLW5hbWUgXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgLz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwie3sgZGVzYyB9fVxcXCIgY2xhc3M9XFxcIml0ZW0tZGVzYyB0ZXh0ZGVzY1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiBtYXJnaW49XFxcIjNcXFwiID5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9tb3JlLnBuZ1xcXCIgd2lkdGg9XFxcIjIzXFxcIiBoZWlnaHQ9XFxcIjIxXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIiAvPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL2hlYXJ0X291dGxpbmVfd2hpdGUucG5nXFxcIiB3aWR0aD1cXFwiMjNcXFwiIGhlaWdodD1cXFwiMjFcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiIGNsYXNzPVxcXCJobVxcXCIgXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0c3JjPVxcXCJ7eyBmYXZvdXJpdGUgPyAnfi9pbWFnZXMvaGVhcnRfc29saWRfdmlvbGV0LnBuZycgOiAnfi9pbWFnZXMvaGVhcnRfb3V0bGluZV93aGl0ZS5wbmcnfX1cXFwiIHRhcD1cXFwie3sgdG9nZ2xlRmF2b3VyaXRlIH19XFxcIiAvPlxcclxcblxcdFxcdFxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHQ8L2x2OlJhZExpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXHJcXG5cXHRcXHQ8L2x2OlJhZExpc3RWaWV3PlxcclxcblxcdDwvR3JpZExheW91dD5cXHJcXG5cXHRcXHJcXG48L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vbGlzdC9saXN0LXBhZ2UueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vbGlzdC9saXN0LXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsImltcG9ydCB7IE9ic2VydmFibGVQcm9wZXJ0eSB9IGZyb20gXCIuLi9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvclwiO1xyXG5jb25zdCBPYnNlcnZhYmxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpLk9ic2VydmFibGU7XHJcbmltcG9ydCB7IGlzSU9TIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgIFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xyXG5pbXBvcnQgeyBSb29tU2VydmljZSwgRmlsdGVycyB9IGZyb20gXCIuLi9zaGFyZWQvcm9vbS1zZXJ2aWNlXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RWaWV3TW9kZWwge1xyXG4gICAgcHJpdmF0ZSBzaG93RmF2b3VyaXRlc0ZpbHRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX3Jvb21TZXJ2aWNlOiBSb29tU2VydmljZSA9IG5ldyBSb29tU2VydmljZSgpO1xyXG4gICAgcHVibGljIGl0ZW1zO1xyXG4gICAgcHVibGljIHJvb21UeXBlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJlczogRmlsdGVycykge1xyXG4gICAgICAgIHRoaXMuX3Jvb21TZXJ2aWNlID0gUm9vbVNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5fcm9vbVNlcnZpY2UuZmlsdGVyKHJlcyk7XHJcbiAgICAgICAgdGhpcy5yb29tVHlwZSA9IHJlcy5yb29tVHlwZTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVGYXZvdXJpdGVzRmlsdGVyKGFyZ3MpIHtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGNvbnN0IGxpc3RWaWV3ID0gPFJhZExpc3RWaWV3PmltYWdlLnBhZ2UuZ2V0Vmlld0J5SWQoXCJsaXN0LXZpZXdcIik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNob3dGYXZvdXJpdGVzRmlsdGVyKSB7XHJcbiAgICAgICAgICAgIGxpc3RWaWV3LmZpbHRlcmluZ0Z1bmN0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBcIn4vaW1hZ2VzL2hlYXJ0X2xpbmUuanBnXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Zhdm91cml0ZXNGaWx0ZXIgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaXN0Vmlldy5maWx0ZXJpbmdGdW5jdGlvbiA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5mYXZvdXJpdGU7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IFwifi9pbWFnZXMvaGVhcnRfc29saWQuanBnXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Zhdm91cml0ZXNGaWx0ZXIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVGYXZvdXJpdGUoYXJncykge1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gYXJncy5vYmplY3Q7XHJcbiAgICAgICAgY29uc3QgbGlzdFZpZXcgPSA8UmFkTGlzdFZpZXc+aW1hZ2UucGFnZS5nZXRWaWV3QnlJZChcImxpc3Qtdmlld1wiKTtcclxuICAgICAgICBjb25zdCBpdGVtRGF0YSA9IGltYWdlLmJpbmRpbmdDb250ZXh0O1xyXG4gICAgICAgIGlmIChpdGVtRGF0YS5mYXZvdXJpdGUpIHtcclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gXCJ+L2ltYWdlcy9oZWFydF9vdXRsaW5lX3doaXRlLnBuZ1wiO1xyXG4gICAgICAgICAgICBpdGVtRGF0YS5mYXZvdXJpdGUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBcIn4vaW1hZ2VzL2hlYXJ0X3NvbGlkX3Zpb2xldC5wbmdcIjtcclxuICAgICAgICAgICAgaXRlbURhdGEuZmF2b3VyaXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcclxuaW1wb3J0IHsgTm9WaWV3TW9kZWwgfSBmcm9tICcuL25vLXZpZXctbW9kZWwnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VMb2FkZWQoYXJnczogRXZlbnREYXRhKSB7XHJcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xyXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBOb1ZpZXdNb2RlbCgpO1xyXG59IiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiKTsgfSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvUmFkTGlzdFZpZXdcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCIpOyB9KTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9SYWRMaXN0Vmlldy5saXN0Vmlld0xheW91dFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIik7IH0pO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L0xpc3RWaWV3TGluZWFyTGF5b3V0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiKTsgfSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvUmFkTGlzdFZpZXcuaXRlbVRlbXBsYXRlXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiKTsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSBsb2FkZWQ9XFxcInBhZ2VMb2FkZWRcXFwiIGNsYXNzPVxcXCJwYWdlXFxcIiB4bWxuczpsdj1cXFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XFxcIj5cXHJcXG5cXHJcXG5cXHQ8QWN0aW9uQmFyIGNsYXNzPVxcXCJhY3Rpb24tYmFyLWxhYmVsXFxcIj5cXHJcXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwi0JrQvtC80L3QsNGC0L3Ri9C1INGA0LDRgdGC0LXQvdC40Y9cXFwiPjwvTGFiZWw+XFxyXFxuXFx0XFx0XFx0PE5hdmlnYXRpb25CdXR0b24gaWNvbj1cXFwifi9pbWFnZXMvYmFja192LnBuZ1xcXCIgdGFwPVxcXCJnb0JhY2tcXFwiIC8+XFxyXFxuXFx0XFx0XFx0PEFjdGlvbkl0ZW0gaWNvbj1cXFwifi9pbWFnZXMvaGVhcnRfdmlvbGV0LnBuZ1xcXCIgaW9zLnBvc2l0aW9uPVxcXCJyaWdodFxcXCIgdGFwPVxcXCJ7eyB0b2dnbGVGYXZvdXJpdGVzRmlsdGVyIH19XFxcIiBjbGFzcz1cXFwiZlxcXCIvPiAgICAgICAgICAgXFxyXFxuXFx0PC9BY3Rpb25CYXI+XFxyXFxuXFxyXFxuIFxcdDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcIipcXFwiID5cXHJcXG5cXHRcXHQ8bHY6UmFkTGlzdFZpZXcgaWQ9XFxcImxpc3Qtdmlld1xcXCIgcm93PVxcXCIwXFxcIiBpdGVtcz1cXFwie3sgaXRlbXMgfX1cXFwiIG1hcmdpblJpZ2h0PVxcXCItMlxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjZTZlNmU2XFxcIiAgaXRlbUxvYWRpbmc9XFxcInt7IG9uSXRlbUxvYWRpbmcgfX1cXFwiPlxcclxcblxcdFxcdFxcdDxsdjpSYWRMaXN0Vmlldy5saXN0Vmlld0xheW91dD5cXHJcXG4gICAgXFx0XFx0XFx0PGx2Okxpc3RWaWV3TGluZWFyTGF5b3V0IHNjcm9sbERpcmVjdGlvbj1cXFwiVmVydGljYWxcXFwiLz5cXHJcXG5cXHRcXHRcXHQ8L2x2OlJhZExpc3RWaWV3Lmxpc3RWaWV3TGF5b3V0PlxcclxcblxcdFxcdFxcdDxsdjpSYWRMaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxyXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IG1hcmdpbj1cXFwiMTAgMTUgMTAgMTVcXFwiIGJvcmRlclJhZGl1cz1cXFwiMTBcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwid2hpdGVcXFwiIHBhZGRpbmc9XFxcIjFcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIiA+XFxyXFxuXFx0XFx0XFx0XFx0XFx0PEltYWdlIHNyYz1cXFwie3sgaW1hZ2UgfX1cXFwiIHdpZHRoPVxcXCIxMTVcXFwiIGhlaWdodD1cXFwiMTE1XFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIiAvPlxcclxcblxcdFxcdFxcdFxcdFxcdDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIHdpZHRoPVxcXCIyMDBcXFwiIGhlaWdodD1cXFwiMTE1XFxcIiAgPlxcclxcblxcdFxcdFxcdFxcdFxcdFxcdDxMYWJlbCB0ZXh0PVxcXCJ7eyBuYW1lIH19XFxcIiBjbGFzcz1cXFwiaXRlbS1uYW1lIFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIC8+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcInt7IGRlc2MgfX1cXFwiIGNsYXNzPVxcXCJpdGVtLWRlc2MgdGV4dGRlc2NcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgbWFyZ2luPVxcXCIzXFxcIiA+XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PEltYWdlIHNyYz1cXFwifi9pbWFnZXMvbW9yZS5wbmdcXFwiIHdpZHRoPVxcXCIyM1xcXCIgaGVpZ2h0PVxcXCIyMVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCIgLz5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9oZWFydF9vdXRsaW5lX3doaXRlLnBuZ1xcXCIgd2lkdGg9XFxcIjIzXFxcIiBoZWlnaHQ9XFxcIjIxXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIiBjbGFzcz1cXFwiaG1cXFwiIFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHNyYz1cXFwie3sgZmF2b3VyaXRlID8gJ34vaW1hZ2VzL2hlYXJ0X3NvbGlkX3Zpb2xldC5wbmcnIDogJ34vaW1hZ2VzL2hlYXJ0X291dGxpbmVfd2hpdGUucG5nJ319XFxcIiB0YXA9XFxcInt7IHRvZ2dsZUZhdm91cml0ZSB9fVxcXCIgLz5cXHJcXG5cXHRcXHRcXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcclxcblxcdFxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0PC9sdjpSYWRMaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxyXFxuXFx0XFx0PC9sdjpSYWRMaXN0Vmlldz5cXHJcXG5cXHQ8L0dyaWRMYXlvdXQ+XFxyXFxuXFxyXFxuPC9QYWdlPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL25vL25vLXBhZ2UueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vbm8vbm8tcGFnZS54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZVByb3BlcnR5IH0gZnJvbSBcIi4uL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yXCI7XHJcbmNvbnN0IE9ic2VydmFibGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIikuT2JzZXJ2YWJsZTtcclxuaW1wb3J0IHsgIFJhZExpc3RWaWV3IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBOb1ZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xyXG4gICAgcHJpdmF0ZSBzaG93RmF2b3VyaXRlc0ZpbHRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBpdGVtczogeyBuYW1lOiBzdHJpbmcsIGRlc2M6IHN0cmluZywgcHJpY2U6IHN0cmluZywgaW1hZ2U6IHN0cmluZ31bXSA9IFtcclxuICAgICAgICB7IG5hbWU6IFwi0KHRg9C60LrRg9C70LXQvdGC0YtcIiwgZGVzYzogXCLQoNCw0LfQvNC10YnQsNGC0Ywg0LIg0YXQvtGA0L7RiNC+INC+0YHQstC10YnQtdC90L3QvtC8INC80LXRgdGC0LUsINC/0L7Qu9C40LLQsNGC0YwgMSDRgNCw0Lcg0LIg0L3QtdC00LXQu9GOXCIsIHByaWNlOiBcIjMwMFwiLCBpbWFnZTogXCJ+L2ltYWdlcy/RgdGD0LrQutGD0LvQtdC90YLRiy5qcGdcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCLQmtC40L/QsNGA0LjRgdC+0LLQuNC6XCIsIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDQvNC10YHRgtC1LCDQv9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLCBwcmljZTogXCIyMDBcIiwgaW1hZ2U6IFwifi9pbWFnZXMv0LrQuNC/0LDRgNC40YHQvtCy0LjQui5qcGdcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCLQpdCw0LzQtdC00L7RgNC10Y8g0Y3Qu9C10LPQsNC90YLRgVwiLCBkZXNjOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0LzQtdGB0YLQtSwg0L/QvtC70LjQstCw0YLRjCAxINGA0LDQtyDQsiDQvdC10LTQtdC70Y5cIiwgcHJpY2U6IFwiMzUwXCIsIGltYWdlOiBcIn4vaW1hZ2VzL9GB0LDQvdGB0LXQstC40LXRgNC40Y8uanBnXCJ9LFxyXG4gICAgICAgIHsgbmFtZTogXCLQodCw0L3RgdC10LLQuNC10YDQuNGPXCIsIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDQvNC10YHRgtC1LCDQv9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLCBwcmljZTogXCI0MDBcIiwgaW1hZ2U6IFwifi9pbWFnZXMv0YXQsNC80LXQtNC+0YDQtdGPLmpwZ1wiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcItCa0LDQutGC0YPRgVwiLCBkZXNjOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0LzQtdGB0YLQtSwg0L/QvtC70LjQstCw0YLRjCAxINGA0LDQtyDQsiDQvdC10LTQtdC70Y5cIiwgcHJpY2U6IFwiNTAwXCIsIGltYWdlOiBcIn4vaW1hZ2VzL9C60LDQutGC0YPRgS5qcGdcIiB9XHJcbiAgICBdO1xyXG5cclxuICBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUZhdm91cml0ZXNGaWx0ZXIoYXJncykge1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gYXJncy5vYmplY3Q7XHJcbiAgICAgICAgY29uc3QgbGlzdFZpZXcgPSA8UmFkTGlzdFZpZXc+aW1hZ2UucGFnZS5nZXRWaWV3QnlJZChcImxpc3Qtdmlld1wiKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0Zhdm91cml0ZXNGaWx0ZXIpIHtcclxuICAgICAgICAgICAgbGlzdFZpZXcuZmlsdGVyaW5nRnVuY3Rpb24gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IFwifi9pbWFnZXMvaGVhcnRfbGluZS5qcGdcIjtcclxuICAgICAgICAgICAgdGhpcy5zaG93RmF2b3VyaXRlc0ZpbHRlciA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxpc3RWaWV3LmZpbHRlcmluZ0Z1bmN0aW9uID0gKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmZhdm91cml0ZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gXCJ+L2ltYWdlcy9oZWFydF9zb2xpZC5qcGdcIjtcclxuICAgICAgICAgICAgdGhpcy5zaG93RmF2b3VyaXRlc0ZpbHRlciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUZhdm91cml0ZShhcmdzKSB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBhcmdzLm9iamVjdDtcclxuICAgICAgICBjb25zdCBsaXN0VmlldyA9IDxSYWRMaXN0Vmlldz5pbWFnZS5wYWdlLmdldFZpZXdCeUlkKFwibGlzdC12aWV3XCIpO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1EYXRhID0gaW1hZ2UuYmluZGluZ0NvbnRleHQ7XHJcbiAgICAgICAgaWYgKGl0ZW1EYXRhLmZhdm91cml0ZSkge1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBcIn4vaW1hZ2VzL2hlYXJ0X291dGxpbmVfd2hpdGUucG5nXCI7XHJcbiAgICAgICAgICAgIGl0ZW1EYXRhLmZhdm91cml0ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IFwifi9pbWFnZXMvaGVhcnRfc29saWRfdmlvbGV0LnBuZ1wiO1xyXG4gICAgICAgICAgICBpdGVtRGF0YS5mYXZvdXJpdGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iLCIvKipcblRoaXMgZmlsZSBkZWZpbmVzIGEgZGVjb3JhdG9yIHlvdSBjYW4gdXNlIHRvIGVuYWJsZSB0d28td2F5XG5iaW5kaW5nIG9uIHZpZXctbW9kZWwgcHJvcGVydGllcy5cblxuRm9yIGV4YW1wbGU6XG5cbmltcG9ydCB7IE9ic2VydmFibGVQcm9wZXJ0eSB9IGZyb20gXCIuLi9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuXG5AT2JzZXJ2YWJsZVByb3BlcnR5KCkgbXlQcm9wZXJ0eTogYm9vbGVhbiA9IHRydWU7XG5cblJlYWQgbW9yZSBhdCBodHRwczovL3d3dy5uYXRpdmVzY3JpcHQub3JnL2Jsb2cvbmF0aXZlc2NyaXB0LW9ic2VydmFibGUtbWFnaWMtc3RyaW5nLXByb3BlcnR5LW5hbWUtYmUtZ29uZVxuKiovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gT2JzZXJ2YWJsZVByb3BlcnR5KCkge1xuICAgIHJldHVybiAodGFyZ2V0OiBPYnNlcnZhYmxlLCBwcm9wZXJ0eUtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbXCJfXCIgKyBwcm9wZXJ0eUtleV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNbXCJfXCIgKyBwcm9wZXJ0eUtleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzW1wiX1wiICsgcHJvcGVydHlLZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZShwcm9wZXJ0eUtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbiIsImltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUm9vbVNlcnZpY2UgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcclxuICAgcHJpdmF0ZSBfcmVzOiBib29sZWFuO1xyXG5cclxuICAgcHJpdmF0ZSBfaXRlbXM6IE9ic2VydmFibGVBcnJheTxGbG93ZXI+ID0gbmV3IE9ic2VydmFibGVBcnJheTxGbG93ZXI+KCk7XHJcblxyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCk6IFJvb21TZXJ2aWNlIHsgXHJcbiAgICByZXR1cm4gUm9vbVNlcnZpY2UuX2luc3RhbmNlOyBcclxuICAgIH0gXHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBSb29tU2VydmljZSA9IG5ldyBSb29tU2VydmljZSgpO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgc3VwZXIoKTtcclxuICAgICAgICBSb29tU2VydmljZS5faW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zLnB1c2godGhpcy5kYXRhKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2hlY2tNYXNzKG1hc3M6IHN0cmluZ1tdLCByZXM6IHN0cmluZyk6IGJvb2xlYW57XHJcbiAgICAgIGxldCBjaGVjazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICBtYXNzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQgPT0gcmVzKVxyXG4gICAgICAgICAgY2hlY2sgPSB0cnVlO1xyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gY2hlY2s7XHJcbiAgICB9XHJcblxyXG4gICBmaWx0ZXIocmVzOiBGaWx0ZXJzKTogT2JzZXJ2YWJsZUFycmF5PEZsb3dlcj4ge1xyXG4gICAgbGV0IGl0ZW1zMTogT2JzZXJ2YWJsZUFycmF5PEZsb3dlcj4gPSBuZXcgT2JzZXJ2YWJsZUFycmF5PEZsb3dlcj4oKTsgIFxyXG4gICAgdGhpcy5faXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgaWYoZWxlbWVudC5zdW4gPT0gcmVzLnN1biAmJiB0aGlzLmNoZWNrTWFzcyhlbGVtZW50LnJvb21UeXBlLCByZXMucm9vbVR5cGUpICYmIHRoaXMuY2hlY2tNYXNzKGVsZW1lbnQud2luZG93c0NvdW50LCByZXMud2luZG93c0NvdW50KSAmJiB0aGlzLmNoZWNrTWFzcyhlbGVtZW50LnByZWZlcmVuY2VzLCByZXMucHJlZmVyZW5jZXMpKXtcclxuICAgICAgICAgICAgaXRlbXMxLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBpdGVtczE7XHJcbiAgfVxyXG5cclxuICAgIHNldCByZXModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgdGhpcy5fcmVzID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHJlcygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3JlcztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaXRlbXMgKHZhbDogT2JzZXJ2YWJsZUFycmF5PEZsb3dlcj4pIHtcclxuICAgICAgdGhpcy5faXRlbXMgPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGl0ZW1zICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGE6IEZsb3dlciBbXSA9IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0KHRg9C60LrRg9C70LXQvdGC0YtcIixcclxuICAgICAgICBkZXNjOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0LzQtdGB0YLQtSwg0L/QvtC70LjQstCw0YLRjCAxINGA0LDQtyDQsiDQvdC10LTQtdC70Y5cIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/RgdGD0LrQutGD0LvQtdC90YLRiy5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JPQvtGB0YLQuNC90LDRj1wiLFwi0JrQvtGA0LjQtNC+0YBcIixcItCS0LDQvdC90LDRj1wiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjBcIixcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLQvdC1INCy0YvQsdGA0LDQvdC+XCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQmtC40L/QsNGA0LjRgdC+0LLQuNC6XCIsXHJcbiAgICAgICAgZGVzYzogXCLQoNCw0LfQvNC10YnQsNGC0Ywg0LIg0YXQvtGA0L7RiNC+INC+0YHQstC10YnQtdC90L3QvtC8INC80LXRgdGC0LUsINC/0L7Qu9C40LLQsNGC0YwgMSDRgNCw0Lcg0LIg0L3QtdC00LXQu9GOXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LrQuNC/0LDRgNC40YHQvtCy0LjQui5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JPQvtGB0YLQuNC90LDRj1wiLFwi0JrQvtGA0LjQtNC+0YBcIixcItCh0L/QsNC70YzQvdCw0Y9cIl0sXHJcbiAgICAgICAgd2luZG93c0NvdW50OiBbXCIwXCIsXCIxXCIsXCIyXCIsXCIzXCJdLFxyXG4gICAgICAgIHN1bjogdHJ1ZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0KXQsNC80LXQtNC+0YDQtdGPINGN0LvQtdCz0LDQvdGC0YFcIixcclxuICAgICAgICBkZXNjOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0LzQtdGB0YLQtSwg0L/QvtC70LjQstCw0YLRjCAxINGA0LDQtyDQsiDQvdC10LTQtdC70Y5cIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/RgdCw0L3RgdC10LLQuNC10YDQuNGPLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiLFwi0JLQsNC90L3QsNGPXCIsXCLQodC/0LDQu9GM0L3QsNGPXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IHRydWUsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItC90LUg0LLRi9Cx0YDQsNC90L5cIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCh0LDQvdGB0LXQstC40LXRgNC40Y9cIixcclxuICAgICAgICBkZXNjOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0LzQtdGB0YLQtSwg0L/QvtC70LjQstCw0YLRjCAxINGA0LDQtyDQsiDQvdC10LTQtdC70Y5cIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/RhdCw0LzQtdC00L7RgNC10Y8uanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCT0L7RgdGC0LjQvdCw0Y9cIixcItCa0L7RgNC40LTQvtGAXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IHRydWUsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItC90LUg0LLRi9Cx0YDQsNC90L5cIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCa0LDQutGC0YPRgVwiLFxyXG4gICAgICAgIGRlc2M6IFwi0J/QvtC70LjQstCw0YLRjCAxINGA0LDQtyDQsiDQvdC10LTQtdC70Y5cIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/QutCw0LrRgtGD0YEuanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCa0L7RgNC40LTQvtGAXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMFwiLFwiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IGZhbHNlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLQvdC1INCy0YvQsdGA0LDQvdC+XCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQk9GA0ZHQvdGB0LrQsNC9XCIsXHJcbiAgICAgICAgZGVzYzogXCLQoNCw0LfQvNC10YnQsNGC0Ywg0LIg0YXQvtGA0L7RiNC+INC+0YHQstC10YnQtdC90L3QvtC8INGB0L7Qu9C90LXRh9C90L7QvCDQvNC10YHRgtC1ICwg0YfQsNGB0YLRi9C5INC/0L7Qu9C40LJcIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/Qs9GA0LXQvdGB0LrQsNC9LmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLQvdC1INCy0YvQsdGA0LDQvdC+XCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQkNC70L7QtSDQktC10YDQsFwiLFxyXG4gICAgICAgIGRlc2M6IFwi0J/RgNC10LTQv9C+0YfQuNGC0LDQtdGCINGC0LXQv9C70YPRjiDRgdGA0LXQtNGDLNC+0LPRgNCw0L3QuNGH0LXQvdC90YvQuSDQv9C+0LvQuNCyXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LDQu9C+0LUg0LLQtdGA0LAuanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCT0L7RgdGC0LjQvdCw0Y9cIixcItCa0L7RgNC40LTQvtGAXCIsXCLQodC/0LDQu9GM0L3QsNGPXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IHRydWUsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItC90LUg0LLRi9Cx0YDQsNC90L5cIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCR0YDQvtC80LXQu9C40Y9cIixcclxuICAgICAgICBkZXNjOiBcItCe0L/RgNGL0YHQutC40LLQsNC50YLQtSDRgNCw0Lcg0LIg0L3QtdC00LXQu9GOLCDQv9C+0LvQuNCy0LDQudGC0LUg0LIg0YDQvtC30LXRgtC60YMg0YDQsNGB0YLQtdC90LjRjywg0YPQvNC10YDQtdC90L3Ri9C5INC/0L7Qu9C40LJcIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/QsdGA0L7QvNC10LvQuNGPLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQktCw0L3QvdCw0Y9cIixcItCa0YPRhdC90Y9cIl0sXHJcbiAgICAgICAgd2luZG93c0NvdW50OiBbXCIxXCIsXCIyXCIsXCIzXCJdLFxyXG4gICAgICAgIHN1bjogdHJ1ZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0YEg0LfQsNC/0LDRhdC+0LxcIiwgXCLRgSDRhtCy0LXRgtC60L7QvFwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0JfQsNC90YLQtdC00LXRgdC60LjRj1wiLFxyXG4gICAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDRgdC+0LvQvdC10YfQvdC+0Lwg0LzQtdGB0YLQtSwg0YPQvNC10YDQtdC90L3Ri9C5INC/0L7Qu9C40LJcIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/Qt9Cw0L3RgtC10LTQtdGB0LrQuNGPLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiLFwi0KHQv9Cw0LvRjNC90LDRj1wiLFwi0JLQsNC90L3QsNGPXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IHRydWUsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItGBINC30LDQv9Cw0YXQvtC8XCIsIFwi0YEg0YbQstC10YLQutC+0LxcIl1cclxuICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCS0YDQuNC10LfQuNGPXCIsXHJcbiAgICAgICAgZGVzYzogXCLQn9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC30LAg0LIg0L3QtdC00LXQu9GOXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LLRgNC40LXQt9C40Y8uanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCT0L7RgdGC0LjQvdCw0Y9cIixcItCa0L7RgNC40LTQvtGAXCIsXCLQodC/0LDQu9GM0L3QsNGPXCIsXCLQktCw0L3QvdCw0Y9cIl0sXHJcbiAgICAgICAgd2luZG93c0NvdW50OiBbXCIxXCIsXCIyXCIsXCIzXCJdLFxyXG4gICAgICAgIHN1bjogdHJ1ZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0YEg0LfQsNC/0LDRhdC+0LxcIiwgXCLRgSDRhtCy0LXRgtC60L7QvFwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0KXRgNC40LfQsNC90YLQtdC80LBcIixcclxuICAgICAgICBkZXNjOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0YHQvtC70L3QtdGH0L3QvtC8INC80LXRgdGC0LUsINGD0LzQtdGA0LXQvdC90YvQuSDQv9C+0LvQuNCyXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0YXRgNC40LfQsNC90YLQtdC80LAuanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCT0L7RgdGC0LjQvdCw0Y9cIixcItCa0L7RgNC40LTQvtGAXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IHRydWUsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItGBINC30LDQv9Cw0YXQvtC8XCIsIFwi0YEg0YbQstC10YLQutC+0LxcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCk0LDQu9C10L3QvtC/0YHQuNGBXCIsXHJcbiAgICAgICAgZGVzYzogXCLQoNCw0LfQvNC10YnQsNGC0Ywg0LIg0YXQvtGA0L7RiNC+INC+0YHQstC10YnQtdC90L3QvtC8INGB0L7Qu9C90LXRh9C90L7QvCDQvNC10YHRgtC1LCDQv9C+0LTQtNC10YDQttC40LLQsNC50YLQtSDQstC70LDQs9GDLCDQv9C+0LPRgNGD0LbQsNGC0Ywg0LIg0LXQvNC60L7RgdGC0Ywg0YEg0LLQvtC00L7QuVwiLFxyXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9GE0LDQu9C10L3QvtC/0YHQuNGBLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiLFwi0KHQv9Cw0LvRjNC90LDRj1wiLFwi0JLQsNC90L3QsNGPXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IHRydWUsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItGBINC30LDQv9Cw0YXQvtC8XCIsIFwi0YEg0YbQstC10YLQutC+0LxcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCi0LjQu9C70LDQvdC00YHQuNGPXCIsXHJcbiAgICAgICAgZGVzYzogXCLQoNCw0LfQvNC10YnQsNGC0Ywg0LIg0LfQsNGC0LXQvdC10L3QvdC+0Lwg0LzQtdGB0YLQtSwg0YPQvNC10YDQtdC90L3Ri9C5INC/0L7Qu9C40LJcIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/RgtC40LvQu9Cw0L3QtNGB0LjRjy5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JPQvtGB0YLQuNC90LDRj1wiLFwi0JrQvtGA0LjQtNC+0YBcIixcItCS0LDQvdC90LDRj1wiLFwi0KHQv9Cw0LvRjNC90LDRj1wiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjBcIl0sXHJcbiAgICAgICAgc3VuOiBmYWxzZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0YEg0LfQsNC/0LDRhdC+0LxcIiwgXCLRgSDRhtCy0LXRgtC60L7QvFwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0KTQuNC60YPRgSDQvNC40LrRgNC+0LrQsNGA0L/QsCDQs9C40L3RgdC10L3Qs1wiLFxyXG4gICAgICAgIGRlc2M6IFwi0KPQvNC10YDQtdC90L3Ri9C5INC/0L7Qu9C40LJcIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/RhNC40LrRg9GBINC80LjQutGA0L7QutCw0YDQv9CwINCz0LjQvdGB0LXQvdCzLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjBcIixcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiBmYWxzZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0JTRgNCw0YbQtdC90LBcIixcclxuICAgICAgICBkZXNjOiBcItCf0L7QvNC10YHRgtC40YLRjCDRhtCy0LXRgtC+0Log0LIg0LLQsNC30YMg0YEg0YfQuNGB0YLQvtC5INCy0L7QtNC+0LkgKNGD0YDQvtCy0LXQvdGMINCy0L7QtNGLIDUg0YHQvCksINC80LXQvdGP0YLRjCDQstC+0LTRgyDQvtC00LjQvSDRgNCw0Lcg0LIg0LTQstC1INC90LXQtNC10LvQuFwiLFxyXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9C00YDQsNGG0LXQvdCwLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQktCw0L3QvdCw0Y9cIl0sXHJcbiAgICAgICAgd2luZG93c0NvdW50OiBbXCIwXCIsXCIxXCIsXCIyXCIsXCIzXCJdLFxyXG4gICAgICAgIHN1bjogZmFsc2UsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItC90LUg0LLRi9Cx0YDQsNC90L5cIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCT0LjQvNCw0LvQsNC50LDQvNC40LrRgVwiLFxyXG4gICAgICAgIGRlc2M6IFwi0KPQvNC10YDQtdC90L3Ri9C5INC/0L7Qu9C40LJcIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/Qs9C40LzQsNC70LDQudCw0LzQuNC60YEuanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCT0L7RgdGC0LjQvdCw0Y9cIixcItCa0L7RgNC40LTQvtGAXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMFwiLFwiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IGZhbHNlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLQvdC1INCy0YvQsdGA0LDQvdC+XCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQqNC70Y7QvNCx0LXRgNCz0LXRgNCwXCIsXHJcbiAgICAgICAgZGVzYzogXCLQoNCw0LfQvNC10YnQsNGC0Ywg0LIg0YXQvtGA0L7RiNC+INC+0YHQstC10YnQtdC90L3QvtC8INGB0L7Qu9C90LXRh9C90L7QvCDQvNC10YHRgtC1LCDRg9C80LXRgNC10L3QvdGL0Lkg0L/QvtC70LjQslwiLFxyXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9GI0LvRjtC80LHQtdGA0LPQtdGA0LAuanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCT0L7RgdGC0LjQvdCw0Y9cIixcItCa0L7RgNC40LTQvtGAXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IHRydWUsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcImMg0YbQstC10YLQutC+0LxcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCa0YDQtdGB0YLQvtCy0L3QuNC6INGE0LjQutGD0YHQvtCy0LjQtNC90YvQuVwiLFxyXG4gICAgICAgIGRlc2M6IFwi0J/QvtC70LjQstCw0YLRjCAyINGA0LDQt9CwINCyINC90LXQtNC10LvRjlwiLFxyXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9C60YDQtdGB0YLQvtCy0L3QuNC6INGE0LjQutGD0YHQvtCy0LjQtNC90YvQuS5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JPQvtGB0YLQuNC90LDRj1wiLFwi0JrQvtGA0LjQtNC+0YBcIl0sXHJcbiAgICAgICAgd2luZG93c0NvdW50OiBbXCIxXCIsXCIyXCIsXCIzXCJdLFxyXG4gICAgICAgIHN1bjogZmFsc2UsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItC90LUg0LLRi9Cx0YDQsNC90L5cIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCT0LXQudGF0LXRgNCwXCIsXHJcbiAgICAgICAgZGVzYzogXCLQn9C+0LvQuNCy0LDRgtGMIDIg0YDQsNC30LAg0LIg0L3QtdC00LXQu9GOXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LPQtdC50YXQtdGA0LAuanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCS0LDQvdC90LDRj1wiLFwi0JrRg9GF0L3Rj1wiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjBcIl0sXHJcbiAgICAgICAgc3VuOiBmYWxzZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0KjQtdGE0YTQu9C10YDQsCDQsNGA0LHQvtGA0LjQutC+0LvQsFwiLFxyXG4gICAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDRgdC+0LvQvdC10YfQvdC+0Lwg0LzQtdGB0YLQtSwg0L7Qs9GA0LDQvdC40YfQtdC90L3Ri9C5INC/0L7Qu9C40LJcIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/RiNC10YTRhNC70LXRgNCwINCw0YDQsdC+0YDQuNC60L7Qu9CwLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLQvdC1INCy0YvQsdGA0LDQvdC+XCJdXHJcbiAgICAgICAgfVxyXG4gIF07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJzIHtcclxuICAgIHB1YmxpYyByb29tVHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHdpbmRvd3NDb3VudDogc3RyaW5nO1xyXG4gICAgcHVibGljIHByaWNlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc3VuOiBib29sZWFuO1xyXG4gICAgcHVibGljIHByZWZlcmVuY2VzOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGbG93ZXJ7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGRlc2M6IHN0cmluZztcclxuICAgIHB1YmxpYyBpbWFnZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHN1bjogYm9vbGVhbjtcclxuICAgIHB1YmxpYyByb29tVHlwZTogc3RyaW5nW107XHJcbiAgICBwdWJsaWMgd2luZG93c0NvdW50OiBzdHJpbmdbXTtcclxuICAgIHB1YmxpYyBwcmVmZXJlbmNlczogc3RyaW5nW107XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBkZXNjOiBzdHJpbmcsIGltYWdlOiBzdHJpbmcsIHN1bjogYm9vbGVhbiwgXHJcbiAgICAgIHJvb21UeXBlOiBzdHJpbmdbXSwgd2luZG93c0NvdW50OiBzdHJpbmdbXSwgcHJlZmVyZW5jZXM6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5kZXNjID0gZGVzYztcclxuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuICAgIHRoaXMuc3VuID0gc3VuO1xyXG4gICAgdGhpcy53aW5kb3dzQ291bnQgPSB3aW5kb3dzQ291bnQ7XHJcbiAgICB0aGlzLnJvb21UeXBlID0gcm9vbVR5cGU7XHJcbiAgICB0aGlzLnByZWZlcmVuY2VzID0gcHJlZmVyZW5jZXM7XHJcbn1cclxufVxyXG4iLCJpbXBvcnQgeyBFdmVudERhdGEsIGZyb21PYmplY3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC1waWNrZXIvbGlzdC1waWNrZXJcIjtcclxuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3dpdGNoXCI7XHJcbmltcG9ydCB7IEZpbHRlcnMgfSBmcm9tIFwiLi4vc2hhcmVkL3Jvb20tc2VydmljZVwiO1xyXG5pbXBvcnQgeyB0b3Btb3N0LCBGcmFtZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XHJcblxyXG5jb25zdCB0eXBlT2ZSb29tID0gW1wi0JrRg9GF0L3Rj1wiLCBcItCT0L7RgdGC0LjQvdCw0Y9cIiwgXCLQmtC+0YDQuNC00L7RgFwiLCBcItCS0LDQvdC90LDRj1wiLCBcItCh0L/QsNC70YzQvdCw0Y9cIl07XHJcbmNvbnN0IHByZWZlcmVuY2VzID0gW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiLCBcItGBINC30LDQv9Cw0YXQvtC8XCIsIFwi0YEg0YbQstC10YLQutC+0LxcIl07XHJcbmNvbnN0IHdpbmRvd3NDb3VudCA9IFtcIjBcIiwgXCIxXCIsIFwiMlwiLCBcIjNcIl07XHJcblxyXG5sZXQgcmVzOiBGaWx0ZXJzID0gbmV3IEZpbHRlcnMoKTtcclxucmVzLnJvb21UeXBlID0gXCLQmtGD0YXQvdGPXCI7XHJcbnJlcy5wcmVmZXJlbmNlcyA9IFwi0L3QtSDQstGL0LHRgNCw0L3QvlwiO1xyXG5yZXMuc3VuID0gZmFsc2U7XHJcbnJlcy53aW5kb3dzQ291bnQgPSBcIjBcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcclxuXHJcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XHJcbiAgICBjb25zdCB2bSA9IGZyb21PYmplY3Qoe1xyXG4gICAgICAgIHR5cGVPZlJvb206IHR5cGVPZlJvb20sXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IHByZWZlcmVuY2VzLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogd2luZG93c0NvdW50XHJcbiAgICB9KTtcclxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2bTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkxpc3RQaWNrZXJMb2FkZWQoZmFyZ3MpIHtcclxuICAgIGNvbnN0IGxpc3RQaWNrZXJDb21wb25lbnQgPSBmYXJncy5vYmplY3Q7XHJcbiAgICBsaXN0UGlja2VyQ29tcG9uZW50Lm9uKFwic2VsZWN0ZWRJbmRleENoYW5nZVwiLCAoYXJnczogRXZlbnREYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGlja2VyID0gPExpc3RQaWNrZXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgcmVzLnJvb21UeXBlID0gdHlwZU9mUm9vbVtwaWNrZXIuc2VsZWN0ZWRJbmRleF07XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTGlzdFBpY2tlckxvYWRlZDEoZmFyZ3MpIHtcclxuICAgIGNvbnN0IGxpc3RQaWNrZXJDb21wb25lbnQgPSBmYXJncy5vYmplY3Q7XHJcbiAgICBsaXN0UGlja2VyQ29tcG9uZW50Lm9uKFwic2VsZWN0ZWRJbmRleENoYW5nZVwiLCAoYXJnczogRXZlbnREYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGlja2VyID0gPExpc3RQaWNrZXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGluZGV4OiAke3BpY2tlci5zZWxlY3RlZEluZGV4fTsgaXRlbVwiICR7cHJlZmVyZW5jZXNbcGlja2VyLnNlbGVjdGVkSW5kZXhdfWApO1xyXG4gICAgICAgIHJlcy5wcmVmZXJlbmNlcyA9IHByZWZlcmVuY2VzW3BpY2tlci5zZWxlY3RlZEluZGV4XTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25MaXN0UGlja2VyTG9hZGVkMihmYXJncykge1xyXG4gICAgY29uc3QgbGlzdFBpY2tlckNvbXBvbmVudCA9IGZhcmdzLm9iamVjdDtcclxuICAgIGxpc3RQaWNrZXJDb21wb25lbnQub24oXCJzZWxlY3RlZEluZGV4Q2hhbmdlXCIsIChhcmdzOiBFdmVudERhdGEpID0+IHtcclxuICAgICAgICBjb25zdCBwaWNrZXIgPSA8TGlzdFBpY2tlcj5hcmdzLm9iamVjdDtcclxuICAgICAgICByZXMud2luZG93c0NvdW50ID0gd2luZG93c0NvdW50W3BpY2tlci5zZWxlY3RlZEluZGV4XTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25Td2l0Y2hMb2FkZWQoYXJnc2xvYWRlZCkge1xyXG4gICAgY29uc3QgbXlTd2l0Y2g6IFN3aXRjaCA9IDxTd2l0Y2g+IGFyZ3Nsb2FkZWQub2JqZWN0O1xyXG5cclxuICAgIG15U3dpdGNoLm9uKFwiY2hlY2tlZENoYW5nZVwiLCAoYXJncykgPT4ge1xyXG4gICAgICAgIGxldCBzdzogU3dpdGNoID0gPFN3aXRjaD4gYXJncy5vYmplY3Q7XHJcbiAgICAgICAgbGV0IGlzQ2hlY2tlZCA9IHN3LmNoZWNrZWQ7XHJcbiAgICAgICAgcmVzLnN1biA9ICBpc0NoZWNrZWQ7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlTGlzdChhcmdzOiBFdmVudERhdGEpIHtcclxuICAgIGNvbnN0IHRvcG1vc3RGcmFtZTogRnJhbWUgPSBGcmFtZS50b3Btb3N0KCk7XHJcbiAgICB0b3Btb3N0RnJhbWUubmF2aWdhdGUoe1xyXG4gICAgICAgIG1vZHVsZU5hbWU6IFwibGlzdC9saXN0LXBhZ2VcIixcclxuICAgICAgICBjb250ZXh0OiByZXNcclxuICAgIH0pXHJcbiAgICBcclxufSIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlIGxvYWRlZD1cXFwib25QYWdlTG9hZGVkXFxcIiBjbGFzcz1cXFwicGFnZVxcXCIgeG1sbnM6bHY9XFxcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1xcXCIgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCI+ICAgXFxyXFxuICAgIFxcclxcbiAgICA8QWN0aW9uQmFyIGNsYXNzPVxcXCJhY3Rpb24tYmFyLWxhYmVsXFxcIj5cXHJcXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwi0J/QsNGA0LDQvNC10YLRgNGLXFxcIj48L0xhYmVsPlxcclxcblxcdFxcdFxcdDxOYXZpZ2F0aW9uQnV0dG9uIGljb249XFxcIn4vaW1hZ2VzL2JhY2tfdi5wbmdcXFwiIHRhcD1cXFwiZ29CYWNrXFxcIiAvPiAgICAgICAgIFxcclxcblxcdDwvQWN0aW9uQmFyPlxcclxcblxcclxcbiAgICA8U2Nyb2xsVmlldz5cXHJcXG4gICAgICA8U3RhY2tMYXlvdXQ+IFxcclxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIjUwLCBhdXRvLCA1MCwgYXV0byw1MCwgYXV0byw1MFxcXCIgY29sdW1ucz1cXFwiKiwgKlxcXCIgY2xhc3M9XFxcImZvcm1cXFwiIGNvbG9yPVxcXCJibGFja1xcXCIgID5cXHJcXG5cXHRcXHRcXHRcXHQ8TGFiZWwgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcItCi0LjQvyDQutC+0LzQvdCw0YLRi1xcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwibGVmdFxcXCIgY2xhc3M9XFxcImxhYmVsXFxcIiAvPlxcclxcblxcdFxcdFxcdFxcdDxMaXN0UGlja2VyIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiBpdGVtcz1cXFwie3sgdHlwZU9mUm9vbSB9fVxcXCIgc2VsZWN0ZWRJbmRleD1cXFwiMFxcXCIgbG9hZGVkPVxcXCJvbkxpc3RQaWNrZXJMb2FkZWRcXFwiIGNvbG9yPVxcXCJibGFja1xcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiBjb2xTcGFuPVxcXCIyXFxcIiBjbGFzcz1cXFwiaHItbGlnaHRcXFwiIC8+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwi0JrQvtC70LjRh9C10YHRgtCy0L4g0L7QutC+0L0g0LIg0LrQvtC80L3QsNGC0LVcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImxlZnRcXFwiIGNsYXNzPVxcXCJsYWJlbFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiLz5cXHJcXG5cXHRcXHRcXHRcXHQ8TGlzdFBpY2tlciByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMVxcXCIgaXRlbXM9XFxcInt7IHdpbmRvd3NDb3VudCB9fVxcXCIgc2VsZWN0ZWRJbmRleD1cXFwiMFxcXCIgbG9hZGVkPVxcXCJvbkxpc3RQaWNrZXJMb2FkZWQyXFxcIiBjb2xvcj1cXFwiYmxhY2tcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjNcXFwiIGNvbD1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiMlxcXCIgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIiAvPlxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjRcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwi0KHQvtC70L3QtdGH0L3QsNGPINGB0YLQvtGA0L7QvdCwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJsZWZ0XFxcIiBjbGFzcz1cXFwibGFiZWxcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8U3dpdGNoIHJvdz1cXFwiNFxcXCIgY29sPVxcXCIxXFxcIiBjaGVja2VkPVxcXCJmYWxzZVxcXCIgbG9hZGVkPVxcXCJvblN3aXRjaExvYWRlZFxcXCIgIGJhY2tncm91bmRDb2xvcj1cXFwicmdiKDE5NSwgMCwgMjU1KVxcXCIgY29sb3I9XFxcIndoaXRlXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJyaWdodFxcXCIvPlxcclxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCI1XFxcIiBjb2w9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjJcXFwiIGNsYXNzPVxcXCJoci1saWdodFxcXCIgLz5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiNlxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCLQn9GA0LXQtNC/0L7Rh9GC0LXQvdC40Y86XFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJsZWZ0XFxcIiBjbGFzcz1cXFwibGFiZWxcXFwiIC8+XFxyXFxuXFx0XFx0XFx0XFx0PExpc3RQaWNrZXIgcm93PVxcXCI2XFxcIiBjb2w9XFxcIjFcXFwiIGl0ZW1zPVxcXCJ7eyBwcmVmZXJlbmNlcyB9fVxcXCIgc2VsZWN0ZWRJbmRleD1cXFwiMFxcXCIgbG9hZGVkPVxcXCJvbkxpc3RQaWNrZXJMb2FkZWQxXFxcIiBjb2xvcj1cXFwiYmxhY2tcXFwiLz5cXHJcXG5cXHRcXHRcXHQ8L0dyaWRMYXlvdXQ+XFxyXFxuICAgICAgIFxcclxcbiAgICAgICAgICAgIDxCdXR0b24gIHRleHQ9XFxcItCf0L7QtNC+0LHRgNCw0YLRjFxcXCIgIHRhcD1cXFwibmF2aWdhdGVMaXN0XFxcIiBjbGFzcz1cXFwiY29sb3IgZm9udFxcXCIvPlxcclxcblxcclxcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XFx0XFxyXFxuICAgIDwvU2Nyb2xsVmlldz5cXHJcXG48L1BhZ2U+XFxyXFxuXCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4veWVzL3llcy1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3llcy95ZXMtcGFnZS54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==