webpackHotUpdate("bundle",{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi95ZXMveWVzLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlFO0FBS3hCO0FBQ1U7QUFFM0QsSUFBTSxVQUFVLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDMUUsSUFBTSxXQUFXLEdBQUcsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQzdELElBQU0sWUFBWSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFFMUMsSUFBSSxHQUFHLEdBQVksSUFBSSw0REFBTyxFQUFFLENBQUM7QUFDakMsR0FBRyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7QUFDdkIsR0FBRyxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUM7QUFDL0IsR0FBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDaEIsR0FBRyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7QUFFaEIsU0FBUyxjQUFjLENBQUMsSUFBZTtJQUUxQyxJQUFNLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQy9CLElBQU0sRUFBRSxHQUFHLG1GQUFVLENBQUM7UUFDbEIsVUFBVSxFQUFFLFVBQVU7UUFDdEIsV0FBVyxFQUFFLFdBQVc7UUFDeEIsWUFBWSxFQUFFLFlBQVk7S0FDN0IsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFFN0IsQ0FBQztBQUVNLFNBQVMsa0JBQWtCLENBQUMsS0FBSztJQUNwQyxJQUFNLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDekMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLHFCQUFxQixFQUFFLFVBQUMsSUFBZTtRQUMxRCxJQUFNLE1BQU0sR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFTSxTQUFTLG1CQUFtQixDQUFDLEtBQUs7SUFDckMsSUFBTSxtQkFBbUIsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ3pDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxVQUFDLElBQWU7UUFDMUQsSUFBTSxNQUFNLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVUsTUFBTSxDQUFDLGFBQWEsaUJBQVcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUcsQ0FBQyxDQUFDO1FBQzFGLEdBQUcsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN4RCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFTSxTQUFTLG1CQUFtQixDQUFDLEtBQUs7SUFDckMsSUFBTSxtQkFBbUIsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ3pDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxVQUFDLElBQWU7UUFDMUQsSUFBTSxNQUFNLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxHQUFHLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRU0sU0FBUyxjQUFjLENBQUMsVUFBVTtJQUNyQyxJQUFNLFFBQVEsR0FBb0IsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUVwRCxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxVQUFDLElBQUk7UUFDOUIsSUFBSSxFQUFFLEdBQW9CLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUMzQixHQUFHLENBQUMsR0FBRyxHQUFJLFNBQVMsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFTSxTQUFTLFlBQVksQ0FBQyxJQUFlO0lBQ3hDLElBQU0sWUFBWSxHQUFVLCtEQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDNUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUNsQixVQUFVLEVBQUUsZ0JBQWdCO1FBQzVCLE9BQU8sRUFBRSxHQUFHO0tBQ2YsQ0FBQztBQUVOLENBQUMiLCJmaWxlIjoiYnVuZGxlLmNkNzY4MWI4NzRiMDgxMWU2NTc1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEsIGZyb21PYmplY3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC1waWNrZXIvbGlzdC1waWNrZXJcIjtcclxuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3dpdGNoXCI7XHJcbmltcG9ydCB7IEZpbHRlcnMgfSBmcm9tIFwiLi4vc2hhcmVkL3Jvb20tc2VydmljZVwiO1xyXG5pbXBvcnQgeyB0b3Btb3N0LCBGcmFtZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XHJcblxyXG5jb25zdCB0eXBlT2ZSb29tID0gW1wi0JrRg9GF0L3Rj1wiLCBcItCT0L7RgdGC0LjQvdCw0Y9cIiwgXCLQmtC+0YDQuNC00L7RgFwiLCBcItCS0LDQvdC90LDRj1wiLCBcItCh0L/QsNC70YzQvdCw0Y9cIl07XHJcbmNvbnN0IHByZWZlcmVuY2VzID0gW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiLCBcItGBINC30LDQv9Cw0YXQvtC8XCIsIFwi0YEg0YbQstC10YLQutC+0LxcIl07XHJcbmNvbnN0IHdpbmRvd3NDb3VudCA9IFtcIjBcIiwgXCIxXCIsIFwiMlwiLCBcIjNcIl07XHJcblxyXG5sZXQgcmVzOiBGaWx0ZXJzID0gbmV3IEZpbHRlcnMoKTtcclxucmVzLnJvb21UeXBlID0gXCLQmtGD0YXQvdGPXCI7XHJcbnJlcy5wcmVmZXJlbmNlcyA9IFwi0L3QtSDQstGL0LHRgNCw0L3QvlwiO1xyXG5yZXMuc3VuID0gZmFsc2U7XHJcbnJlcy53aW5kb3dzQ291bnQgPSBcIjBcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcclxuXHJcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XHJcbiAgICBjb25zdCB2bSA9IGZyb21PYmplY3Qoe1xyXG4gICAgICAgIHR5cGVPZlJvb206IHR5cGVPZlJvb20sXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IHByZWZlcmVuY2VzLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogd2luZG93c0NvdW50XHJcbiAgICB9KTtcclxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2bTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkxpc3RQaWNrZXJMb2FkZWQoZmFyZ3MpIHtcclxuICAgIGNvbnN0IGxpc3RQaWNrZXJDb21wb25lbnQgPSBmYXJncy5vYmplY3Q7XHJcbiAgICBsaXN0UGlja2VyQ29tcG9uZW50Lm9uKFwic2VsZWN0ZWRJbmRleENoYW5nZVwiLCAoYXJnczogRXZlbnREYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGlja2VyID0gPExpc3RQaWNrZXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgcmVzLnJvb21UeXBlID0gdHlwZU9mUm9vbVtwaWNrZXIuc2VsZWN0ZWRJbmRleF07XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTGlzdFBpY2tlckxvYWRlZDEoZmFyZ3MpIHtcclxuICAgIGNvbnN0IGxpc3RQaWNrZXJDb21wb25lbnQgPSBmYXJncy5vYmplY3Q7XHJcbiAgICBsaXN0UGlja2VyQ29tcG9uZW50Lm9uKFwic2VsZWN0ZWRJbmRleENoYW5nZVwiLCAoYXJnczogRXZlbnREYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGlja2VyID0gPExpc3RQaWNrZXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGluZGV4OiAke3BpY2tlci5zZWxlY3RlZEluZGV4fTsgaXRlbVwiICR7cHJlZmVyZW5jZXNbcGlja2VyLnNlbGVjdGVkSW5kZXhdfWApO1xyXG4gICAgICAgIHJlcy5wcmVmZXJlbmNlcyA9IHByZWZlcmVuY2VzW3BpY2tlci5zZWxlY3RlZEluZGV4XTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25MaXN0UGlja2VyTG9hZGVkMihmYXJncykge1xyXG4gICAgY29uc3QgbGlzdFBpY2tlckNvbXBvbmVudCA9IGZhcmdzLm9iamVjdDtcclxuICAgIGxpc3RQaWNrZXJDb21wb25lbnQub24oXCJzZWxlY3RlZEluZGV4Q2hhbmdlXCIsIChhcmdzOiBFdmVudERhdGEpID0+IHtcclxuICAgICAgICBjb25zdCBwaWNrZXIgPSA8TGlzdFBpY2tlcj5hcmdzLm9iamVjdDtcclxuICAgICAgICByZXMud2luZG93c0NvdW50ID0gd2luZG93c0NvdW50W3BpY2tlci5zZWxlY3RlZEluZGV4XTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25Td2l0Y2hMb2FkZWQoYXJnc2xvYWRlZCkge1xyXG4gICAgY29uc3QgbXlTd2l0Y2g6IFN3aXRjaCA9IDxTd2l0Y2g+IGFyZ3Nsb2FkZWQub2JqZWN0O1xyXG5cclxuICAgIG15U3dpdGNoLm9uKFwiY2hlY2tlZENoYW5nZVwiLCAoYXJncykgPT4ge1xyXG4gICAgICAgIGxldCBzdzogU3dpdGNoID0gPFN3aXRjaD4gYXJncy5vYmplY3Q7XHJcbiAgICAgICAgbGV0IGlzQ2hlY2tlZCA9IHN3LmNoZWNrZWQ7XHJcbiAgICAgICAgcmVzLnN1biA9ICBpc0NoZWNrZWQ7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlTGlzdChhcmdzOiBFdmVudERhdGEpIHtcclxuICAgIGNvbnN0IHRvcG1vc3RGcmFtZTogRnJhbWUgPSBGcmFtZS50b3Btb3N0KCk7XHJcbiAgICB0b3Btb3N0RnJhbWUubmF2aWdhdGUoe1xyXG4gICAgICAgIG1vZHVsZU5hbWU6IFwibGlzdC9saXN0LXBhZ2VcIixcclxuICAgICAgICBjb250ZXh0OiByZXNcclxuICAgIH0pXHJcbiAgICBcclxufSJdLCJzb3VyY2VSb290IjoiIn0=