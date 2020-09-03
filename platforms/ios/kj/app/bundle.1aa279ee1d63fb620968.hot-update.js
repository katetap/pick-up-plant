webpackHotUpdate("bundle",{

/***/ "./shared/room-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return RoomService; });
//const Observable = require("tns-core-modules/data/observable").Observable;
//import { ObservableProperty } from "../observable-property-decorator";
var RoomService = /** @class */ (function () {
    function RoomService() {
        this.items = [
            { name: "Суккуленты",
                desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю",
                price: "300",
                image: "~/images/суккуленты.jpg",
                sun: true },
            { name: "Кипарисовик",
                desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю",
                price: "200",
                image: "~/images/кипарисовик.jpg",
                sun: true },
            { name: "Хамедорея элегантс",
                desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю",
                price: "350",
                image: "~/images/сансевиерия.jpg",
                sun: true },
            { name: "Сансевиерия",
                desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю",
                price: "400",
                image: "~/images/хамедорея.jpg",
                sun: true },
            { name: "Кактус",
                desc: "Поливать 1 раз в неделю",
                price: "500",
                image: "~/images/кактус.jpg",
                sun: false }
        ];
        //super();
        RoomService._instance = this;
        //this.set("_items", new ObservableArray<flower>(items));
    }
    /*
    private _items: ObservableArray<flower> = new ObservableArray (
        new flower ("Суккуленты","Размещать в хорошо освещенном месте, поливать 1 раз в неделю","300", "~/images/суккуленты.jpg", false),
        new flower ("Суккуленты","Размещать в хорошо освещенном месте, поливать 1 раз в неделю","300", "~/images/суккуленты.jpg", false));
    */
    //private _items: ObservableArray<flower>;
    RoomService.getInstance = function () {
        return RoomService._instance;
    };
    Object.defineProperty(RoomService.prototype, "dataflowers", {
        get: function () {
            return this.items;
        },
        enumerable: true,
        configurable: true
    });
    RoomService._instance = new RoomService();
    return RoomService;
}());

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

/*
const items:  flower[] = [
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
/*
const items:  flower[] = [
    new flower ("Суккуленты","Размещать в хорошо освещенном месте, поливать 1 раз в неделю","300", "~/images/суккуленты.jpg"),
    new flower ("Суккуленты","Размещать в хорошо освещенном месте, поливать 1 раз в неделю","300", "~/images/суккуленты.jpg"),
];
*/
/*
const flower = [
    { "name" : "Суккуленты",
      "desc": "Размещать в хорошо освещенном месте, поливать 1 раз в неделю",
      "price": "300",
      "image": "~/images/суккуленты.jpg",
      "sun": true },
    { "name": "Кипарисовик",
      "desc": "Размещать в хорошо освещенном месте, поливать 1 раз в неделю",
      "price": "200",
      "image": "~/images/кипарисовик.jpg",
      "sun": true},
];
*/ 
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./shared/room-service.ts") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./shared/room-service.ts" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaGFyZWQvcm9vbS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQU1BO0FBQUE7QUFBQSw0RUFBNEU7QUFDNUUsd0VBQXdFO0FBRXhFO0lBNkNJO1FBM0NELFVBQUssR0FBZ0Y7WUFDaEYsRUFBRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsSUFBSSxFQUFFLDhEQUE4RDtnQkFDcEUsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osS0FBSyxFQUFFLHlCQUF5QjtnQkFDaEMsR0FBRyxFQUFFLElBQUksRUFBRTtZQUNiLEVBQUUsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLElBQUksRUFBRSw4REFBOEQ7Z0JBQ3BFLEtBQUssRUFBRSxLQUFLO2dCQUNaLEtBQUssRUFBRSwwQkFBMEI7Z0JBQ2pDLEdBQUcsRUFBRSxJQUFJLEVBQUM7WUFDWixFQUFFLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLElBQUksRUFBRSw4REFBOEQ7Z0JBQ3BFLEtBQUssRUFBRSxLQUFLO2dCQUNaLEtBQUssRUFBRSwwQkFBMEI7Z0JBQ2pDLEdBQUcsRUFBRSxJQUFJLEVBQUM7WUFDWixFQUFFLElBQUksRUFBRSxhQUFhO2dCQUNuQixJQUFJLEVBQUUsOERBQThEO2dCQUNwRSxLQUFLLEVBQUUsS0FBSztnQkFDWixLQUFLLEVBQUUsd0JBQXdCO2dCQUMvQixHQUFHLEVBQUUsSUFBSSxFQUFFO1lBQ2IsRUFBRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUseUJBQXlCO2dCQUMvQixLQUFLLEVBQUUsS0FBSztnQkFDWixLQUFLLEVBQUUscUJBQXFCO2dCQUM1QixHQUFHLEVBQUUsS0FBSyxFQUFDO1NBQ2hCLENBQUM7UUFrQkUsVUFBVTtRQUNWLFdBQVcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQzdCLHlEQUF5RDtJQUM3RCxDQUFDO0lBbkJEOzs7O01BSUU7SUFDRiwwQ0FBMEM7SUFJbkMsdUJBQVcsR0FBbEI7UUFDQSxPQUFPLFdBQVcsQ0FBQyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQVVELHNCQUFJLG9DQUFXO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFWYyxxQkFBUyxHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO0lBYzlELGtCQUFDO0NBQUE7QUF6RHVCO0FBMER4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTJDRTtBQUNGOzs7OztFQUtFO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7RUFhRSIsImZpbGUiOiJidW5kbGUuMWFhMjc5ZWUxZDYzZmI2MjA5NjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHsgRmxvd2VycyB9IGZyb20gXCIuL3Jvb20tbW9kZWxcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZVByb3BlcnR5IH0gZnJvbSBcIi4uL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yXCI7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xyXG5cclxuLy9jb25zdCBPYnNlcnZhYmxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpLk9ic2VydmFibGU7XHJcbi8vaW1wb3J0IHsgT2JzZXJ2YWJsZVByb3BlcnR5IH0gZnJvbSBcIi4uL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUm9vbVNlcnZpY2UgIHtcclxuXHJcbiAgIGl0ZW1zOiB7IG5hbWU6IHN0cmluZywgZGVzYzogc3RyaW5nLCBwcmljZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nLCBzdW46IGJvb2xlYW59W10gPSBbXHJcbiAgICAgICAgeyBuYW1lOiBcItCh0YPQutC60YPQu9C10L3RgtGLXCIsIFxyXG4gICAgICAgICAgZGVzYzogXCLQoNCw0LfQvNC10YnQsNGC0Ywg0LIg0YXQvtGA0L7RiNC+INC+0YHQstC10YnQtdC90L3QvtC8INC80LXRgdGC0LUsINC/0L7Qu9C40LLQsNGC0YwgMSDRgNCw0Lcg0LIg0L3QtdC00LXQu9GOXCIsIFxyXG4gICAgICAgICAgcHJpY2U6IFwiMzAwXCIsIFxyXG4gICAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0YHRg9C60LrRg9C70LXQvdGC0YsuanBnXCIsXHJcbiAgICAgICAgICBzdW46IHRydWUgfSxcclxuICAgICAgICB7IG5hbWU6IFwi0JrQuNC/0LDRgNC40YHQvtCy0LjQulwiLCBcclxuICAgICAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDQvNC10YHRgtC1LCDQv9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLCBcclxuICAgICAgICAgIHByaWNlOiBcIjIwMFwiLCBcclxuICAgICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9C60LjQv9Cw0YDQuNGB0L7QstC40LouanBnXCIsXHJcbiAgICAgICAgICBzdW46IHRydWV9LFxyXG4gICAgICAgIHsgbmFtZTogXCLQpdCw0LzQtdC00L7RgNC10Y8g0Y3Qu9C10LPQsNC90YLRgVwiLCBcclxuICAgICAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDQvNC10YHRgtC1LCDQv9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLCBcclxuICAgICAgICAgIHByaWNlOiBcIjM1MFwiLCBcclxuICAgICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9GB0LDQvdGB0LXQstC40LXRgNC40Y8uanBnXCIsXHJcbiAgICAgICAgICBzdW46IHRydWV9LFxyXG4gICAgICAgIHsgbmFtZTogXCLQodCw0L3RgdC10LLQuNC10YDQuNGPXCIsIFxyXG4gICAgICAgICAgZGVzYzogXCLQoNCw0LfQvNC10YnQsNGC0Ywg0LIg0YXQvtGA0L7RiNC+INC+0YHQstC10YnQtdC90L3QvtC8INC80LXRgdGC0LUsINC/0L7Qu9C40LLQsNGC0YwgMSDRgNCw0Lcg0LIg0L3QtdC00LXQu9GOXCIsIFxyXG4gICAgICAgICAgcHJpY2U6IFwiNDAwXCIsIFxyXG4gICAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0YXQsNC80LXQtNC+0YDQtdGPLmpwZ1wiLFxyXG4gICAgICAgICAgc3VuOiB0cnVlIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcItCa0LDQutGC0YPRgVwiLCBcclxuICAgICAgICAgIGRlc2M6IFwi0J/QvtC70LjQstCw0YLRjCAxINGA0LDQtyDQsiDQvdC10LTQtdC70Y5cIiwgXHJcbiAgICAgICAgICBwcmljZTogXCI1MDBcIiwgXHJcbiAgICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/QutCw0LrRgtGD0YEuanBnXCIsIFxyXG4gICAgICAgICAgc3VuOiBmYWxzZX1cclxuICAgIF07XHJcblxyXG4gICAgLypcclxuICAgIHByaXZhdGUgX2l0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8Zmxvd2VyPiA9IG5ldyBPYnNlcnZhYmxlQXJyYXkgKCBcclxuICAgICAgICBuZXcgZmxvd2VyIChcItCh0YPQutC60YPQu9C10L3RgtGLXCIsXCLQoNCw0LfQvNC10YnQsNGC0Ywg0LIg0YXQvtGA0L7RiNC+INC+0YHQstC10YnQtdC90L3QvtC8INC80LXRgdGC0LUsINC/0L7Qu9C40LLQsNGC0YwgMSDRgNCw0Lcg0LIg0L3QtdC00LXQu9GOXCIsXCIzMDBcIiwgXCJ+L2ltYWdlcy/RgdGD0LrQutGD0LvQtdC90YLRiy5qcGdcIiwgZmFsc2UpLFxyXG4gICAgICAgIG5ldyBmbG93ZXIgKFwi0KHRg9C60LrRg9C70LXQvdGC0YtcIixcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0LzQtdGB0YLQtSwg0L/QvtC70LjQstCw0YLRjCAxINGA0LDQtyDQsiDQvdC10LTQtdC70Y5cIixcIjMwMFwiLCBcIn4vaW1hZ2VzL9GB0YPQutC60YPQu9C10L3RgtGLLmpwZ1wiLCBmYWxzZSkpO1xyXG4gICAgKi9cclxuICAgIC8vcHJpdmF0ZSBfaXRlbXM6IE9ic2VydmFibGVBcnJheTxmbG93ZXI+O1xyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogUm9vbVNlcnZpY2UgeyBcclxuICAgIHJldHVybiBSb29tU2VydmljZS5faW5zdGFuY2U7IFxyXG4gICAgfSBcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFJvb21TZXJ2aWNlID0gbmV3IFJvb21TZXJ2aWNlKCk7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vc3VwZXIoKTtcclxuICAgICAgICBSb29tU2VydmljZS5faW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIC8vdGhpcy5zZXQoXCJfaXRlbXNcIiwgbmV3IE9ic2VydmFibGVBcnJheTxmbG93ZXI+KGl0ZW1zKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBkYXRhZmxvd2VycygpOiBBcnJheTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgXHJcbn1cclxuLypcclxuZXhwb3J0IGNsYXNzIGZsb3dlciB7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGRlc2M6IHN0cmluZztcclxuICAgIHB1YmxpYyBwcmljZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGltYWdlOiBzdHJpbmc7XHJcbiAgXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRlc2M6IHN0cmluZywgcHJpY2U6IHN0cmluZywgaW1hZ2U6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kZXNjID0gZGVzYztcclxuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbi8qXHJcbmNvbnN0IGl0ZW1zOiAgZmxvd2VyW10gPSBbXHJcbiAgICB7IG5hbWU6IFwi0KHRg9C60LrRg9C70LXQvdGC0YtcIiwgXHJcbiAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDQvNC10YHRgtC1LCDQv9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLCBcclxuICAgICAgcHJpY2U6IFwiMzAwXCIsIFxyXG4gICAgICBpbWFnZTogXCJ+L2ltYWdlcy/RgdGD0LrQutGD0LvQtdC90YLRiy5qcGdcIixcclxuICAgICAgc3VuOiB0cnVlIH0sXHJcbiAgICB7IG5hbWU6IFwi0JrQuNC/0LDRgNC40YHQvtCy0LjQulwiLCBcclxuICAgICAgZGVzYzogXCLQoNCw0LfQvNC10YnQsNGC0Ywg0LIg0YXQvtGA0L7RiNC+INC+0YHQstC10YnQtdC90L3QvtC8INC80LXRgdGC0LUsINC/0L7Qu9C40LLQsNGC0YwgMSDRgNCw0Lcg0LIg0L3QtdC00LXQu9GOXCIsIFxyXG4gICAgICBwcmljZTogXCIyMDBcIiwgXHJcbiAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9C60LjQv9Cw0YDQuNGB0L7QstC40LouanBnXCIsXHJcbiAgICAgIHN1bjogdHJ1ZX0sXHJcbiAgICB7IG5hbWU6IFwi0KXQsNC80LXQtNC+0YDQtdGPINGN0LvQtdCz0LDQvdGC0YFcIiwgXHJcbiAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDQvNC10YHRgtC1LCDQv9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLCBcclxuICAgICAgcHJpY2U6IFwiMzUwXCIsIFxyXG4gICAgICBpbWFnZTogXCJ+L2ltYWdlcy/RgdCw0L3RgdC10LLQuNC10YDQuNGPLmpwZ1wiLFxyXG4gICAgICBzdW46IHRydWV9LFxyXG4gICAgeyBuYW1lOiBcItCh0LDQvdGB0LXQstC40LXRgNC40Y9cIiwgXHJcbiAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDQvNC10YHRgtC1LCDQv9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLCBcclxuICAgICAgcHJpY2U6IFwiNDAwXCIsIFxyXG4gICAgICBpbWFnZTogXCJ+L2ltYWdlcy/RhdCw0LzQtdC00L7RgNC10Y8uanBnXCIsXHJcbiAgICAgIHN1bjogdHJ1ZSB9LFxyXG4gICAgeyBuYW1lOiBcItCa0LDQutGC0YPRgVwiLCBcclxuICAgICAgZGVzYzogXCLQn9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLCBcclxuICAgICAgcHJpY2U6IFwiNTAwXCIsIFxyXG4gICAgICBpbWFnZTogXCJ+L2ltYWdlcy/QutCw0LrRgtGD0YEuanBnXCIsIFxyXG4gICAgICBzdW46IGZhbHNlfVxyXG5dO1xyXG4qL1xyXG4vKlxyXG5jb25zdCBpdGVtczogIGZsb3dlcltdID0gW1xyXG4gICAgbmV3IGZsb3dlciAoXCLQodGD0LrQutGD0LvQtdC90YLRi1wiLFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDQvNC10YHRgtC1LCDQv9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLFwiMzAwXCIsIFwifi9pbWFnZXMv0YHRg9C60LrRg9C70LXQvdGC0YsuanBnXCIpLFxyXG4gICAgbmV3IGZsb3dlciAoXCLQodGD0LrQutGD0LvQtdC90YLRi1wiLFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDQvNC10YHRgtC1LCDQv9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLFwiMzAwXCIsIFwifi9pbWFnZXMv0YHRg9C60LrRg9C70LXQvdGC0YsuanBnXCIpLFxyXG5dO1xyXG4qL1xyXG4vKlxyXG5jb25zdCBmbG93ZXIgPSBbXHJcbiAgICB7IFwibmFtZVwiIDogXCLQodGD0LrQutGD0LvQtdC90YLRi1wiLCBcclxuICAgICAgXCJkZXNjXCI6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDQvNC10YHRgtC1LCDQv9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLCBcclxuICAgICAgXCJwcmljZVwiOiBcIjMwMFwiLCBcclxuICAgICAgXCJpbWFnZVwiOiBcIn4vaW1hZ2VzL9GB0YPQutC60YPQu9C10L3RgtGLLmpwZ1wiLFxyXG4gICAgICBcInN1blwiOiB0cnVlIH0sXHJcbiAgICB7IFwibmFtZVwiOiBcItCa0LjQv9Cw0YDQuNGB0L7QstC40LpcIiwgXHJcbiAgICAgIFwiZGVzY1wiOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0LzQtdGB0YLQtSwg0L/QvtC70LjQstCw0YLRjCAxINGA0LDQtyDQsiDQvdC10LTQtdC70Y5cIiwgXHJcbiAgICAgIFwicHJpY2VcIjogXCIyMDBcIiwgXHJcbiAgICAgIFwiaW1hZ2VcIjogXCJ+L2ltYWdlcy/QutC40L/QsNGA0LjRgdC+0LLQuNC6LmpwZ1wiLFxyXG4gICAgICBcInN1blwiOiB0cnVlfSxcclxuXTtcclxuKi8iXSwic291cmNlUm9vdCI6IiJ9