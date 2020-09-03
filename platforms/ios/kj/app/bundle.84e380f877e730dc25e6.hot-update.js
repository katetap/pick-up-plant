webpackHotUpdate("bundle",{

/***/ "./yes/yes-view-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YesViewModel", function() { return YesViewModel; });
var Observable = __webpack_require__("tns-core-modules/data/observable").Observable;
//import { RoomService } from "../shared/room-service";
var YesViewModel = /** @class */ (function (_super) {
    __extends(YesViewModel, _super);
    // private _roomService: RoomService;
    function YesViewModel() {
        return _super.call(this) || this;
        //this._roomService = RoomService.getInstance();
        //this.Room = new Room("Не выбрано", 0 , 0, "да", "Не выбрано");
    }
    return YesViewModel;
}(Observable));

/*
export class Room {
    public typeOfRoom: string;
    public roomSize: number;
    public numberOfWindows: number;
    public sunnySide: string;
    public preferences: string;
 

    constructor(typeOfRoom, roomSize, numberOfWindows, sunnySide, preferences) {
        this.typeOfRoom = typeOfRoom;
        this.roomSize = roomSize;
        this.numberOfWindows = numberOfWindows;
        this.sunnySide = sunnySide;
        this.preferences = preferences;
       
    }
}
*/
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./yes/yes-view-model.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./yes/yes-view-model.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi95ZXMveWVzLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFBQTtBQUFBLElBQU0sVUFBVSxHQUFHLG1CQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxVQUFVLENBQUM7QUFDMUUsdURBQXVEO0FBR3ZEO0lBQWtDLGdDQUFVO0lBRXpDLHFDQUFxQztJQUVwQztlQUNJLGlCQUFPO1FBQ1AsZ0RBQWdEO1FBR2hELGdFQUFnRTtJQUVwRSxDQUFDO0lBU0wsbUJBQUM7QUFBRCxDQUFDLENBcEJpQyxVQUFVLEdBb0IzQzs7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0JFIiwiZmlsZSI6ImJ1bmRsZS44NGUzODBmODc3ZTczMGRjMjVlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmFkRGF0YUZvcm0gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtXCI7XHJcbmNvbnN0IE9ic2VydmFibGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIikuT2JzZXJ2YWJsZTtcclxuLy9pbXBvcnQgeyBSb29tU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvcm9vbS1zZXJ2aWNlXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFllc1ZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xyXG5cclxuICAgLy8gcHJpdmF0ZSBfcm9vbVNlcnZpY2U6IFJvb21TZXJ2aWNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgLy90aGlzLl9yb29tU2VydmljZSA9IFJvb21TZXJ2aWNlLmdldEluc3RhbmNlKCk7XHJcblxyXG4gICAgXHJcbiAgICAgICAgLy90aGlzLlJvb20gPSBuZXcgUm9vbShcItCd0LUg0LLRi9Cx0YDQsNC90L5cIiwgMCAsIDAsIFwi0LTQsFwiLCBcItCd0LUg0LLRi9Cx0YDQsNC90L5cIik7XHJcblxyXG4gICAgfVxyXG4vKlxyXG4gICAgc2V0IFJvb20odmFsdWU6IFJvb20pIHtcclxuICAgICAgICB0aGlzLnNldChcIl9Sb29tXCIsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgUm9vbSgpOiBSb29tIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoXCJfUm9vbVwiKTtcclxuICAgIH0qL1xyXG59XHJcbi8qXHJcbmV4cG9ydCBjbGFzcyBSb29tIHtcclxuICAgIHB1YmxpYyB0eXBlT2ZSb29tOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcm9vbVNpemU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBudW1iZXJPZldpbmRvd3M6IG51bWJlcjtcclxuICAgIHB1YmxpYyBzdW5ueVNpZGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBwcmVmZXJlbmNlczogc3RyaW5nO1xyXG4gXHJcblxyXG4gICAgY29uc3RydWN0b3IodHlwZU9mUm9vbSwgcm9vbVNpemUsIG51bWJlck9mV2luZG93cywgc3VubnlTaWRlLCBwcmVmZXJlbmNlcykge1xyXG4gICAgICAgIHRoaXMudHlwZU9mUm9vbSA9IHR5cGVPZlJvb207XHJcbiAgICAgICAgdGhpcy5yb29tU2l6ZSA9IHJvb21TaXplO1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZXaW5kb3dzID0gbnVtYmVyT2ZXaW5kb3dzO1xyXG4gICAgICAgIHRoaXMuc3VubnlTaWRlID0gc3VubnlTaWRlO1xyXG4gICAgICAgIHRoaXMucHJlZmVyZW5jZXMgPSBwcmVmZXJlbmNlcztcclxuICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiovXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=