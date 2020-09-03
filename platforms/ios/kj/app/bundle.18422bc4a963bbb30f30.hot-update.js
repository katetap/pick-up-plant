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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saXN0L2xpc3Qtdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBQTRFO0FBQ2Q7QUFFVDtBQUdyRCxnREFBZ0Q7QUFHaEQ7SUFBbUMsaUNBQVU7SUFLM0MsNENBQTRDO0lBRTlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQTZCRTtJQUNFO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBeENPLDBCQUFvQixHQUFZLEtBQUssQ0FBQztRQXNDMUMseURBQXlEO1FBQ3pELEtBQUksQ0FBQyxZQUFZLEdBQUcsZ0VBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7SUFDbEQsQ0FBQztJQUVMOzs7V0FHTztJQUVILDhDQUFzQixHQUF0QixVQUF1QixJQUFJO1FBQ3ZCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDMUIsSUFBTSxRQUFRLEdBQWdCLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWxFLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzNCLFFBQVEsQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7WUFDdkMsS0FBSyxDQUFDLEdBQUcsR0FBRyx5QkFBeUIsQ0FBQztZQUN0QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1NBQ3JDO2FBQU07WUFDSCxRQUFRLENBQUMsaUJBQWlCLEdBQUcsVUFBQyxJQUFJO2dCQUM5QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQyxDQUFDO1lBQ0YsS0FBSyxDQUFDLEdBQUcsR0FBRywwQkFBMEIsQ0FBQztZQUN2QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQztJQUVELHVDQUFlLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzFCLElBQU0sUUFBUSxHQUFnQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsRSxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDO1FBQ3RDLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUNwQixLQUFLLENBQUMsR0FBRyxHQUFHLGtDQUFrQyxDQUFDO1lBQy9DLFFBQVEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQzlCO2FBQU07WUFDSCxLQUFLLENBQUMsR0FBRyxHQUFHLGlDQUFpQyxDQUFDO1lBQzlDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQzdCO0lBRUwsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxDQTlFa0MsMkVBQVUsR0E4RTVDOztBQUNEOzs7Ozs7Ozs7Ozs7OztFQWNFO0FBQ0Y7Ozs7O0VBS0U7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTRCRSIsImZpbGUiOiJidW5kbGUuMTg0MjJiYzRhOTYzYmJiMzBmMzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGVQcm9wZXJ0eSB9IGZyb20gXCIuLi9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvclwiO1xyXG4vL2NvbnN0IE9ic2VydmFibGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIikuT2JzZXJ2YWJsZTtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyAgUmFkTGlzdFZpZXcgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XHJcbmltcG9ydCB7IFJvb21TZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9yb29tLXNlcnZpY2VcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcblxyXG4vL2ltcG9ydCB7IEZsb3dlciB9IGZyb20gXCIuLi9zaGFyZWQvcm9vbS1tb2RlbFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XHJcbiAgICBwcml2YXRlIHNob3dGYXZvdXJpdGVzRmlsdGVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvL3ByaXZhdGUgX2l0ZW1zOiBBcnJheTxhbnk+O1xyXG4gICAgcHJpdmF0ZSBfcm9vbVNlcnZpY2U6IFJvb21TZXJ2aWNlO1xyXG4gICAgXHJcbiAgLy8gIHByaXZhdGUgX2l0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8Zmxvd2VyPjtcclxuXHJcbi8qXHJcbiAgICBpdGVtczogeyBuYW1lOiBzdHJpbmcsIGRlc2M6IHN0cmluZywgcHJpY2U6IHN0cmluZywgaW1hZ2U6IHN0cmluZywgc3VuOiBib29sZWFufVtdID0gW1xyXG4gICAgICAgIHsgbmFtZTogXCLQodGD0LrQutGD0LvQtdC90YLRi1wiLCBcclxuICAgICAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDQvNC10YHRgtC1LCDQv9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLCBcclxuICAgICAgICAgIHByaWNlOiBcIjMwMFwiLCBcclxuICAgICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9GB0YPQutC60YPQu9C10L3RgtGLLmpwZ1wiLFxyXG4gICAgICAgICAgc3VuOiB0cnVlIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcItCa0LjQv9Cw0YDQuNGB0L7QstC40LpcIiwgXHJcbiAgICAgICAgICBkZXNjOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0LzQtdGB0YLQtSwg0L/QvtC70LjQstCw0YLRjCAxINGA0LDQtyDQsiDQvdC10LTQtdC70Y5cIiwgXHJcbiAgICAgICAgICBwcmljZTogXCIyMDBcIiwgXHJcbiAgICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/QutC40L/QsNGA0LjRgdC+0LLQuNC6LmpwZ1wiLFxyXG4gICAgICAgICAgc3VuOiB0cnVlfSxcclxuICAgICAgICB7IG5hbWU6IFwi0KXQsNC80LXQtNC+0YDQtdGPINGN0LvQtdCz0LDQvdGC0YFcIiwgXHJcbiAgICAgICAgICBkZXNjOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0LzQtdGB0YLQtSwg0L/QvtC70LjQstCw0YLRjCAxINGA0LDQtyDQsiDQvdC10LTQtdC70Y5cIiwgXHJcbiAgICAgICAgICBwcmljZTogXCIzNTBcIiwgXHJcbiAgICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/RgdCw0L3RgdC10LLQuNC10YDQuNGPLmpwZ1wiLFxyXG4gICAgICAgICAgc3VuOiB0cnVlfSxcclxuICAgICAgICB7IG5hbWU6IFwi0KHQsNC90YHQtdCy0LjQtdGA0LjRj1wiLCBcclxuICAgICAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDQvNC10YHRgtC1LCDQv9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLCBcclxuICAgICAgICAgIHByaWNlOiBcIjQwMFwiLCBcclxuICAgICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9GF0LDQvNC10LTQvtGA0LXRjy5qcGdcIixcclxuICAgICAgICAgIHN1bjogdHJ1ZSB9LFxyXG4gICAgICAgIHsgbmFtZTogXCLQmtCw0LrRgtGD0YFcIiwgXHJcbiAgICAgICAgICBkZXNjOiBcItCf0L7Qu9C40LLQsNGC0YwgMSDRgNCw0Lcg0LIg0L3QtdC00LXQu9GOXCIsIFxyXG4gICAgICAgICAgcHJpY2U6IFwiNTAwXCIsIFxyXG4gICAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LrQsNC60YLRg9GBLmpwZ1wiLCBcclxuICAgICAgICAgIHN1bjogZmFsc2V9XHJcbiAgICBdO1xyXG5cclxuKi9cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgLy90aGlzLnNldChcIl9pdGVtc1wiLCBuZXcgT2JzZXJ2YWJsZUFycmF5PGZsb3dlcj4oaXRlbXMpKTtcclxuICAgICAgICB0aGlzLl9yb29tU2VydmljZSA9IFJvb21TZXJ2aWNlLmdldEluc3RhbmNlKCk7XHJcbiAgICB9XHJcblxyXG4vKlxyXG4gICAgZ2V0IGRhdGFJdGVtcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoXCJfaXRlbXNcIik7XHJcbiAgICB9Ki9cclxuICAgXHJcbiAgICB0b2dnbGVGYXZvdXJpdGVzRmlsdGVyKGFyZ3MpIHtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGNvbnN0IGxpc3RWaWV3ID0gPFJhZExpc3RWaWV3PmltYWdlLnBhZ2UuZ2V0Vmlld0J5SWQoXCJsaXN0LXZpZXdcIik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNob3dGYXZvdXJpdGVzRmlsdGVyKSB7XHJcbiAgICAgICAgICAgIGxpc3RWaWV3LmZpbHRlcmluZ0Z1bmN0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBcIn4vaW1hZ2VzL2hlYXJ0X2xpbmUuanBnXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Zhdm91cml0ZXNGaWx0ZXIgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaXN0Vmlldy5maWx0ZXJpbmdGdW5jdGlvbiA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5mYXZvdXJpdGU7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IFwifi9pbWFnZXMvaGVhcnRfc29saWQuanBnXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Zhdm91cml0ZXNGaWx0ZXIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVGYXZvdXJpdGUoYXJncykge1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gYXJncy5vYmplY3Q7XHJcbiAgICAgICAgY29uc3QgbGlzdFZpZXcgPSA8UmFkTGlzdFZpZXc+aW1hZ2UucGFnZS5nZXRWaWV3QnlJZChcImxpc3Qtdmlld1wiKTtcclxuICAgICAgICBjb25zdCBpdGVtRGF0YSA9IGltYWdlLmJpbmRpbmdDb250ZXh0O1xyXG4gICAgICAgIGlmIChpdGVtRGF0YS5mYXZvdXJpdGUpIHtcclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gXCJ+L2ltYWdlcy9oZWFydF9vdXRsaW5lX3doaXRlLnBuZ1wiO1xyXG4gICAgICAgICAgICBpdGVtRGF0YS5mYXZvdXJpdGUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBcIn4vaW1hZ2VzL2hlYXJ0X3NvbGlkX3Zpb2xldC5wbmdcIjtcclxuICAgICAgICAgICAgaXRlbURhdGEuZmF2b3VyaXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbi8qXHJcbmV4cG9ydCBjbGFzcyBmbG93ZXIge1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBkZXNjOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcHJpY2U6IHN0cmluZztcclxuICAgIHB1YmxpYyBpbWFnZTogc3RyaW5nO1xyXG4gIFxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBkZXNjOiBzdHJpbmcsIHByaWNlOiBzdHJpbmcsIGltYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZGVzYyA9IGRlc2M7XHJcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuICAgIH1cclxuICB9XHJcbiovXHJcbi8qXHJcbmNvbnN0IGl0ZW1zOiAgZmxvd2VyW10gPSBbXHJcbiAgICBuZXcgZmxvd2VyIChcItCh0YPQutC60YPQu9C10L3RgtGLXCIsXCLQoNCw0LfQvNC10YnQsNGC0Ywg0LIg0YXQvtGA0L7RiNC+INC+0YHQstC10YnQtdC90L3QvtC8INC80LXRgdGC0LUsINC/0L7Qu9C40LLQsNGC0YwgMSDRgNCw0Lcg0LIg0L3QtdC00LXQu9GOXCIsXCIzMDBcIiwgXCJ+L2ltYWdlcy/RgdGD0LrQutGD0LvQtdC90YLRiy5qcGdcIiksXHJcbiAgICBuZXcgZmxvd2VyIChcItCh0YPQutC60YPQu9C10L3RgtGLXCIsXCLQoNCw0LfQvNC10YnQsNGC0Ywg0LIg0YXQvtGA0L7RiNC+INC+0YHQstC10YnQtdC90L3QvtC8INC80LXRgdGC0LUsINC/0L7Qu9C40LLQsNGC0YwgMSDRgNCw0Lcg0LIg0L3QtdC00LXQu9GOXCIsXCIzMDBcIiwgXCJ+L2ltYWdlcy/RgdGD0LrQutGD0LvQtdC90YLRiy5qcGdcIiksXHJcbl07XHJcbiovXHJcbi8qXHJcbmNvbnN0IGl0ZW1zOiAgZmxvd2VyW10gPSBbXHJcbiAgICB7IG5hbWU6IFwi0KHRg9C60LrRg9C70LXQvdGC0YtcIiwgXHJcbiAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDQvNC10YHRgtC1LCDQv9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLCBcclxuICAgICAgcHJpY2U6IFwiMzAwXCIsIFxyXG4gICAgICBpbWFnZTogXCJ+L2ltYWdlcy/RgdGD0LrQutGD0LvQtdC90YLRiy5qcGdcIn0sXHJcbiAgICAgXHJcbiAgICB7IG5hbWU6IFwi0JrQuNC/0LDRgNC40YHQvtCy0LjQulwiLCBcclxuICAgICAgZGVzYzogXCLQoNCw0LfQvNC10YnQsNGC0Ywg0LIg0YXQvtGA0L7RiNC+INC+0YHQstC10YnQtdC90L3QvtC8INC80LXRgdGC0LUsINC/0L7Qu9C40LLQsNGC0YwgMSDRgNCw0Lcg0LIg0L3QtdC00LXQu9GOXCIsIFxyXG4gICAgICBwcmljZTogXCIyMDBcIiwgXHJcbiAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9C60LjQv9Cw0YDQuNGB0L7QstC40LouanBnXCJ9LFxyXG4gICAgXHJcbiAgICB7IG5hbWU6IFwi0KXQsNC80LXQtNC+0YDQtdGPINGN0LvQtdCz0LDQvdGC0YFcIiwgXHJcbiAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDQvNC10YHRgtC1LCDQv9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLCBcclxuICAgICAgcHJpY2U6IFwiMzUwXCIsIFxyXG4gICAgICBpbWFnZTogXCJ+L2ltYWdlcy/RgdCw0L3RgdC10LLQuNC10YDQuNGPLmpwZ1wifSxcclxuICAgIFxyXG4gICAgeyBuYW1lOiBcItCh0LDQvdGB0LXQstC40LXRgNC40Y9cIiwgXHJcbiAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDQvNC10YHRgtC1LCDQv9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLCBcclxuICAgICAgcHJpY2U6IFwiNDAwXCIsIFxyXG4gICAgICBpbWFnZTogXCJ+L2ltYWdlcy/RhdCw0LzQtdC00L7RgNC10Y8uanBnXCJ9LFxyXG4gXHJcbiAgICB7IG5hbWU6IFwi0JrQsNC60YLRg9GBXCIsIFxyXG4gICAgICBkZXNjOiBcItCf0L7Qu9C40LLQsNGC0YwgMSDRgNCw0Lcg0LIg0L3QtdC00LXQu9GOXCIsIFxyXG4gICAgICBwcmljZTogXCI1MDBcIiwgXHJcbiAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9C60LDQutGC0YPRgS5qcGdcIiB9XHJcblxyXG5dO1xyXG4qLyJdLCJzb3VyY2VSb290IjoiIn0=