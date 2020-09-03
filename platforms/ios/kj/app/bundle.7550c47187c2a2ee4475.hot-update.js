webpackHotUpdate("bundle",{

/***/ "./list/list-view-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewModel", function() { return ListViewModel; });
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tns-core-modules/data/observable");
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_room_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./shared/room-service.ts");
//const Observable = require("tns-core-modules/data/observable").Observable;


//import { Flower } from "../shared/room-model";
var ListViewModel = /** @class */ (function (_super) {
    __extends(ListViewModel, _super);
    //  private _items: ObservableArray<flower>;
    /*
        items: { name: string, desc: string, price: string, image: string, sun: boolean}[] = [
            { name: "Суккуленты",
              desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю",
              price: "300",
              image: "~/images/суккуленты.jpg",
              sun: true },
            { name: "Кипарисовик",
              desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю",
              price: "200",
              image: "~/images/кипарисовик.jpg",
              sun: true},
            { name: "Хамедорея элегантс",
              desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю",
              price: "350",
              image: "~/images/сансевиерия.jpg",
              sun: true},
            { name: "Сансевиерия",
              desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю",
              price: "400",
              image: "~/images/хамедорея.jpg",
              sun: true },
            { name: "Кактус",
              desc: "Поливать 1 раз в неделю",
              price: "500",
              image: "~/images/кактус.jpg",
              sun: false}
        ];
    
    */
    function ListViewModel() {
        var _this = _super.call(this) || this;
        _this.showFavouritesFilter = false;
        //this.set("_items", new ObservableArray<flower>(items));
        _this._roomService = _shared_room_service__WEBPACK_IMPORTED_MODULE_1__["RoomService"].getInstance();
        _this._items = _this._roomService.flowers;
        return _this;
    }
    /*
        get dataItems() {
            return this.get("_items");
        }*/
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
}(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]));

/*
export class flower {
    public name: string;
    public desc: string;
    public price: string;
    public image: string;
  
    constructor(name: string, desc: string, price: string, image: string) {
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.image = image;
    }
  }
*/
/*
const items:  flower[] = [
    new flower ("Суккуленты","Размещать в хорошо освещенном месте, поливать 1 раз в неделю","300", "~/images/суккуленты.jpg"),
    new flower ("Суккуленты","Размещать в хорошо освещенном месте, поливать 1 раз в неделю","300", "~/images/суккуленты.jpg"),
];
*/
/*
const items:  flower[] = [
    { name: "Суккуленты",
      desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю",
      price: "300",
      image: "~/images/суккуленты.jpg"},
     
    { name: "Кипарисовик",
      desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю",
      price: "200",
      image: "~/images/кипарисовик.jpg"},
    
    { name: "Хамедорея элегантс",
      desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю",
      price: "350",
      image: "~/images/сансевиерия.jpg"},
    
    { name: "Сансевиерия",
      desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю",
      price: "400",
      image: "~/images/хамедорея.jpg"},
 
    { name: "Кактус",
      desc: "Поливать 1 раз в неделю",
      price: "500",
      image: "~/images/кактус.jpg" }

];
*/ 
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./list/list-view-model.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./list/list-view-model.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saXN0L2xpc3Qtdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBQTRFO0FBQ2Q7QUFFVDtBQUdyRCxnREFBZ0Q7QUFHaEQ7SUFBbUMsaUNBQVU7SUFLM0MsNENBQTRDO0lBRTlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQTZCRTtJQUNFO1FBQUEsWUFDSSxpQkFBTyxTQUlWO1FBekNPLDBCQUFvQixHQUFZLEtBQUssQ0FBQztRQXNDMUMseURBQXlEO1FBQ3pELEtBQUksQ0FBQyxZQUFZLEdBQUcsZ0VBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDOztJQUM1QyxDQUFDO0lBRUw7OztXQUdPO0lBRUgsOENBQXNCLEdBQXRCLFVBQXVCLElBQUk7UUFDdkIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQixJQUFNLFFBQVEsR0FBZ0IsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFbEUsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDM0IsUUFBUSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztZQUN2QyxLQUFLLENBQUMsR0FBRyxHQUFHLHlCQUF5QixDQUFDO1lBQ3RDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7U0FDckM7YUFBTTtZQUNILFFBQVEsQ0FBQyxpQkFBaUIsR0FBRyxVQUFDLElBQUk7Z0JBQzlCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMxQixDQUFDLENBQUM7WUFDRixLQUFLLENBQUMsR0FBRyxHQUFHLDBCQUEwQixDQUFDO1lBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBRUQsdUNBQWUsR0FBZixVQUFnQixJQUFJO1FBQ2hCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDMUIsSUFBTSxRQUFRLEdBQWdCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xFLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUM7UUFDdEMsSUFBSSxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3BCLEtBQUssQ0FBQyxHQUFHLEdBQUcsa0NBQWtDLENBQUM7WUFDL0MsUUFBUSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDOUI7YUFBTTtZQUNILEtBQUssQ0FBQyxHQUFHLEdBQUcsaUNBQWlDLENBQUM7WUFDOUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDN0I7SUFFTCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLENBL0VrQywyRUFBVSxHQStFNUM7O0FBQ0Q7Ozs7Ozs7Ozs7Ozs7O0VBY0U7QUFDRjs7Ozs7RUFLRTtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNEJFIiwiZmlsZSI6ImJ1bmRsZS43NTUwYzQ3MTg3YzJhMmVlNDQ3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZVByb3BlcnR5IH0gZnJvbSBcIi4uL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yXCI7XHJcbi8vY29uc3QgT2JzZXJ2YWJsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKS5PYnNlcnZhYmxlO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7ICBSYWRMaXN0VmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcclxuaW1wb3J0IHsgUm9vbVNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL3Jvb20tc2VydmljZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcclxuXHJcbi8vaW1wb3J0IHsgRmxvd2VyIH0gZnJvbSBcIi4uL3NoYXJlZC9yb29tLW1vZGVsXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcclxuICAgIHByaXZhdGUgc2hvd0Zhdm91cml0ZXNGaWx0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2l0ZW1zOiBBcnJheTxhbnk+O1xyXG4gICAgcHJpdmF0ZSBfcm9vbVNlcnZpY2U6IFJvb21TZXJ2aWNlO1xyXG4gICAgXHJcbiAgLy8gIHByaXZhdGUgX2l0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8Zmxvd2VyPjtcclxuXHJcbi8qXHJcbiAgICBpdGVtczogeyBuYW1lOiBzdHJpbmcsIGRlc2M6IHN0cmluZywgcHJpY2U6IHN0cmluZywgaW1hZ2U6IHN0cmluZywgc3VuOiBib29sZWFufVtdID0gW1xyXG4gICAgICAgIHsgbmFtZTogXCLQodGD0LrQutGD0LvQtdC90YLRi1wiLCBcclxuICAgICAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDQvNC10YHRgtC1LCDQv9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLCBcclxuICAgICAgICAgIHByaWNlOiBcIjMwMFwiLCBcclxuICAgICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9GB0YPQutC60YPQu9C10L3RgtGLLmpwZ1wiLFxyXG4gICAgICAgICAgc3VuOiB0cnVlIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcItCa0LjQv9Cw0YDQuNGB0L7QstC40LpcIiwgXHJcbiAgICAgICAgICBkZXNjOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0LzQtdGB0YLQtSwg0L/QvtC70LjQstCw0YLRjCAxINGA0LDQtyDQsiDQvdC10LTQtdC70Y5cIiwgXHJcbiAgICAgICAgICBwcmljZTogXCIyMDBcIiwgXHJcbiAgICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/QutC40L/QsNGA0LjRgdC+0LLQuNC6LmpwZ1wiLFxyXG4gICAgICAgICAgc3VuOiB0cnVlfSxcclxuICAgICAgICB7IG5hbWU6IFwi0KXQsNC80LXQtNC+0YDQtdGPINGN0LvQtdCz0LDQvdGC0YFcIiwgXHJcbiAgICAgICAgICBkZXNjOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0LzQtdGB0YLQtSwg0L/QvtC70LjQstCw0YLRjCAxINGA0LDQtyDQsiDQvdC10LTQtdC70Y5cIiwgXHJcbiAgICAgICAgICBwcmljZTogXCIzNTBcIiwgXHJcbiAgICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/RgdCw0L3RgdC10LLQuNC10YDQuNGPLmpwZ1wiLFxyXG4gICAgICAgICAgc3VuOiB0cnVlfSxcclxuICAgICAgICB7IG5hbWU6IFwi0KHQsNC90YHQtdCy0LjQtdGA0LjRj1wiLCBcclxuICAgICAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDQvNC10YHRgtC1LCDQv9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLCBcclxuICAgICAgICAgIHByaWNlOiBcIjQwMFwiLCBcclxuICAgICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9GF0LDQvNC10LTQvtGA0LXRjy5qcGdcIixcclxuICAgICAgICAgIHN1bjogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogXCLQmtCw0LrRgtGD0YFcIiwgXHJcbiAgICAgICAgICBkZXNjOiBcItCf0L7Qu9C40LLQsNGC0YwgMSDRgNCw0Lcg0LIg0L3QtdC00LXQu9GOXCIsIFxyXG4gICAgICAgICAgcHJpY2U6IFwiNTAwXCIsIFxyXG4gICAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LrQsNC60YLRg9GBLmpwZ1wiLCBcclxuICAgICAgICAgIHN1bjogZmFsc2V9XHJcbiAgICBdO1xyXG5cclxuKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgLy90aGlzLnNldChcIl9pdGVtc1wiLCBuZXcgT2JzZXJ2YWJsZUFycmF5PGZsb3dlcj4oaXRlbXMpKTtcclxuICAgICAgICB0aGlzLl9yb29tU2VydmljZSA9IFJvb21TZXJ2aWNlLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgdGhpcy5faXRlbXMgPSB0aGlzLl9yb29tU2VydmljZS5mbG93ZXJzO1xyXG4gICAgfVxyXG5cclxuLypcclxuICAgIGdldCBkYXRhSXRlbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KFwiX2l0ZW1zXCIpO1xyXG4gICAgfSovXHJcbiAgIFxyXG4gICAgdG9nZ2xlRmF2b3VyaXRlc0ZpbHRlcihhcmdzKSB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBhcmdzLm9iamVjdDtcclxuICAgICAgICBjb25zdCBsaXN0VmlldyA9IDxSYWRMaXN0Vmlldz5pbWFnZS5wYWdlLmdldFZpZXdCeUlkKFwibGlzdC12aWV3XCIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zaG93RmF2b3VyaXRlc0ZpbHRlcikge1xyXG4gICAgICAgICAgICBsaXN0Vmlldy5maWx0ZXJpbmdGdW5jdGlvbiA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gXCJ+L2ltYWdlcy9oZWFydF9saW5lLmpwZ1wiO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dGYXZvdXJpdGVzRmlsdGVyID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGlzdFZpZXcuZmlsdGVyaW5nRnVuY3Rpb24gPSAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZmF2b3VyaXRlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBcIn4vaW1hZ2VzL2hlYXJ0X3NvbGlkLmpwZ1wiO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dGYXZvdXJpdGVzRmlsdGVyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRmF2b3VyaXRlKGFyZ3MpIHtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGNvbnN0IGxpc3RWaWV3ID0gPFJhZExpc3RWaWV3PmltYWdlLnBhZ2UuZ2V0Vmlld0J5SWQoXCJsaXN0LXZpZXdcIik7XHJcbiAgICAgICAgY29uc3QgaXRlbURhdGEgPSBpbWFnZS5iaW5kaW5nQ29udGV4dDtcclxuICAgICAgICBpZiAoaXRlbURhdGEuZmF2b3VyaXRlKSB7XHJcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IFwifi9pbWFnZXMvaGVhcnRfb3V0bGluZV93aGl0ZS5wbmdcIjtcclxuICAgICAgICAgICAgaXRlbURhdGEuZmF2b3VyaXRlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gXCJ+L2ltYWdlcy9oZWFydF9zb2xpZF92aW9sZXQucG5nXCI7XHJcbiAgICAgICAgICAgIGl0ZW1EYXRhLmZhdm91cml0ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4vKlxyXG5leHBvcnQgY2xhc3MgZmxvd2VyIHtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGVzYzogc3RyaW5nO1xyXG4gICAgcHVibGljIHByaWNlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaW1hZ2U6IHN0cmluZztcclxuICBcclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZGVzYzogc3RyaW5nLCBwcmljZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRlc2MgPSBkZXNjO1xyXG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcclxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG4qL1xyXG4vKlxyXG5jb25zdCBpdGVtczogIGZsb3dlcltdID0gW1xyXG4gICAgbmV3IGZsb3dlciAoXCLQodGD0LrQutGD0LvQtdC90YLRi1wiLFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDQvNC10YHRgtC1LCDQv9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLFwiMzAwXCIsIFwifi9pbWFnZXMv0YHRg9C60LrRg9C70LXQvdGC0YsuanBnXCIpLFxyXG4gICAgbmV3IGZsb3dlciAoXCLQodGD0LrQutGD0LvQtdC90YLRi1wiLFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDQvNC10YHRgtC1LCDQv9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLFwiMzAwXCIsIFwifi9pbWFnZXMv0YHRg9C60LrRg9C70LXQvdGC0YsuanBnXCIpLFxyXG5dO1xyXG4qL1xyXG4vKlxyXG5jb25zdCBpdGVtczogIGZsb3dlcltdID0gW1xyXG4gICAgeyBuYW1lOiBcItCh0YPQutC60YPQu9C10L3RgtGLXCIsIFxyXG4gICAgICBkZXNjOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0LzQtdGB0YLQtSwg0L/QvtC70LjQstCw0YLRjCAxINGA0LDQtyDQsiDQvdC10LTQtdC70Y5cIiwgXHJcbiAgICAgIHByaWNlOiBcIjMwMFwiLCBcclxuICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0YHRg9C60LrRg9C70LXQvdGC0YsuanBnXCJ9LFxyXG4gICAgIFxyXG4gICAgeyBuYW1lOiBcItCa0LjQv9Cw0YDQuNGB0L7QstC40LpcIiwgXHJcbiAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDQvNC10YHRgtC1LCDQv9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLCBcclxuICAgICAgcHJpY2U6IFwiMjAwXCIsIFxyXG4gICAgICBpbWFnZTogXCJ+L2ltYWdlcy/QutC40L/QsNGA0LjRgdC+0LLQuNC6LmpwZ1wifSxcclxuICAgIFxyXG4gICAgeyBuYW1lOiBcItCl0LDQvNC10LTQvtGA0LXRjyDRjdC70LXQs9Cw0L3RgtGBXCIsIFxyXG4gICAgICBkZXNjOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0LzQtdGB0YLQtSwg0L/QvtC70LjQstCw0YLRjCAxINGA0LDQtyDQsiDQvdC10LTQtdC70Y5cIiwgXHJcbiAgICAgIHByaWNlOiBcIjM1MFwiLCBcclxuICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0YHQsNC90YHQtdCy0LjQtdGA0LjRjy5qcGdcIn0sXHJcbiAgICBcclxuICAgIHsgbmFtZTogXCLQodCw0L3RgdC10LLQuNC10YDQuNGPXCIsIFxyXG4gICAgICBkZXNjOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0LzQtdGB0YLQtSwg0L/QvtC70LjQstCw0YLRjCAxINGA0LDQtyDQsiDQvdC10LTQtdC70Y5cIiwgXHJcbiAgICAgIHByaWNlOiBcIjQwMFwiLCBcclxuICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0YXQsNC80LXQtNC+0YDQtdGPLmpwZ1wifSxcclxuIFxyXG4gICAgeyBuYW1lOiBcItCa0LDQutGC0YPRgVwiLCBcclxuICAgICAgZGVzYzogXCLQn9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLCBcclxuICAgICAgcHJpY2U6IFwiNTAwXCIsIFxyXG4gICAgICBpbWFnZTogXCJ+L2ltYWdlcy/QutCw0LrRgtGD0YEuanBnXCIgfVxyXG5cclxuXTtcclxuKi8iXSwic291cmNlUm9vdCI6IiJ9