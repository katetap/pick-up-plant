webpackHotUpdate("bundle",{

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
                windowsCount: ["1", "2", "3"],
                sun: true,
                preferences: ["не выбрано", "без запаха", "без цветка"]
            },
            {
                name: "Кипарисовик",
                desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю",
                image: "~/images/кипарисовик.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор", "Спальная"],
                windowsCount: ["1", "2", "3"],
                sun: true,
                preferences: ["не выбрано", "без запаха", "без цветка"]
            },
            {
                name: "Хамедорея элегантс",
                desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю",
                image: "~/images/сансевиерия.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор", "Ванная", "Спальная"],
                windowsCount: ["1", "2", "3"],
                sun: true,
                preferences: ["не выбрано", "без запаха", "без цветка"]
            },
            {
                name: "Сансевиерия",
                desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю",
                image: "~/images/хамедорея.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор"],
                windowsCount: ["1", "2", "3"],
                sun: true,
                preferences: ["не выбрано", "без запаха", "без цветка"]
            },
            {
                name: "Кактус",
                desc: "Поливать 1 раз в неделю",
                image: "~/images/кактус.jpg",
                roomType: ["Кухня"],
                windowsCount: ["0", "1", "2", "3"],
                sun: false,
                preferences: ["не выбрано", "без запаха", "без цветка"]
            },
            {
                name: "Грёнскан",
                desc: "Размещать в хорошо освещенном солнечном месте , частый полив",
                image: "~/images/гренскан.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор"],
                windowsCount: ["1", "2", "3"],
                sun: true,
                preferences: ["не выбрано", "без запаха", "без цветка"]
            },
            {
                name: "Алое Вера",
                desc: "Предпочитает теплую среду,ограниченный полив",
                image: "~/images/алое вера.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор", "Спальная"],
                windowsCount: ["1", "2", "3"],
                sun: true,
                preferences: ["не выбрано", "без запаха", "без цветка"]
            },
            {
                name: "Бромелия",
                desc: "Опрыскивайте раз в неделю, поливайте в розетку растения, умеренный полив",
                image: "~/images/бромелия.jpg",
                roomType: ["Ванная", "Кухня"],
                windowsCount: ["1"],
                sun: true,
                preferences: ["с запахом", "с цветком"]
            },
            {
                name: "Зантедеския",
                desc: "Размещать в хорошо освещенном солнечном месте, умеренный полив",
                image: "~/images/зантедеския.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор"],
                windowsCount: ["1", "2", "3"],
                sun: true,
                preferences: ["с запахом", "с цветком"]
            },
            {
                name: "Вриезия",
                desc: "Поливать 1 раза в неделю",
                image: "~/images/вриезия.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор"],
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
                roomType: ["Кухня", "Гостиная", "Коридор", "Спальная"],
                windowsCount: ["2"],
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
                windowsCount: ["1", "2", "3"],
                sun: false,
                preferences: ["не выбрано", "без запаха", "без цветка"]
            },
            {
                name: "Драцена",
                desc: "Поместить цветок в вазу с чистой водой (уровень воды 5 см), менять воду один раз в две недели",
                image: "~/images/драцена.jpg",
                roomType: ["Кухня", "Ванная"],
                windowsCount: ["1", "2", "3"],
                sun: false,
                preferences: ["не выбрано", "без запаха", "без цветка"]
            },
            {
                name: "Гималайамикс",
                desc: "Умеренный полив",
                image: "~/images/гималайамикс.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор"],
                windowsCount: ["0", "1", "2", "3"],
                sun: false,
                preferences: ["не выбрано", "без запаха", "без цветка"]
            },
            {
                name: "Шлюмбергера",
                desc: "Размещать в хорошо освещенном солнечном месте, умеренный полив",
                image: "~/images/шлюмбергера.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор"],
                windowsCount: ["1", "2", "3"],
                sun: true,
                preferences: ["не выбрано", "без запаха", "c цветком"]
            },
            {
                name: "Крестовник фикусовидный",
                desc: "Поливать 2 раза в неделю",
                image: "~/images/крестовник фикусовидный.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор"],
                windowsCount: ["1", "2", "3"],
                sun: false,
                preferences: ["не выбрано", "без запаха", "без цветка"]
            },
            {
                name: "Гейхера",
                desc: "Поливать 2 раза в неделю",
                image: "~/images/гейхера.jpg",
                roomType: ["Ванная", "Кухня"],
                windowsCount: ["0"],
                sun: false,
                preferences: ["не выбрано", "без запаха", "без цветка"]
            },
            {
                name: "Шеффлера арборикола",
                desc: "Размещать в хорошо освещенном солнечном месте, ограниченный полив",
                image: "~/images/шеффлера арборикола.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор"],
                windowsCount: ["1", "2", "3"],
                sun: true,
                preferences: ["не выбрано", "без запаха", "без цветка"]
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
            if (element.sun == res.sun && _this.checkMass(element.roomType, res.roomType) &&
                _this.checkMass(element.windowsCount, res.windowsCount) && _this.checkMass(element.preferences, res.preferences)) {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaGFyZWQvcm9vbS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUU7QUFDWDtBQUU5RDtJQUFpQywrQkFBVTtJQVd2QztRQUFBLFlBQ0UsaUJBQU8sU0FHUjtRQVpNLFlBQU0sR0FBNEIsSUFBSSxzRkFBZSxFQUFVLENBQUM7UUFrRHZFLFVBQUksR0FBYztZQUNoQjtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsSUFBSSxFQUFFLDhEQUE4RDtnQkFDcEUsS0FBSyxFQUFFLHlCQUF5QjtnQkFDaEMsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsUUFBUSxDQUFDO2dCQUNqRCxZQUFZLEVBQUUsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQztnQkFDM0IsR0FBRyxFQUFFLElBQUk7Z0JBQ1QsV0FBVyxFQUFFLENBQUMsWUFBWSxFQUFDLFlBQVksRUFBRSxZQUFZLENBQUM7YUFDckQ7WUFDRDtnQkFDQSxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsSUFBSSxFQUFFLDhEQUE4RDtnQkFDcEUsS0FBSyxFQUFFLDBCQUEwQjtnQkFDakMsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsVUFBVSxDQUFDO2dCQUNuRCxZQUFZLEVBQUUsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQztnQkFDM0IsR0FBRyxFQUFFLElBQUk7Z0JBQ1QsV0FBVyxFQUFFLENBQUMsWUFBWSxFQUFDLFlBQVksRUFBRSxZQUFZLENBQUM7YUFDckQ7WUFDRDtnQkFDQSxJQUFJLEVBQUUsb0JBQW9CO2dCQUMxQixJQUFJLEVBQUUsOERBQThEO2dCQUNwRSxLQUFLLEVBQUUsMEJBQTBCO2dCQUNqQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLFNBQVMs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T0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7YUFORCxVQUFXLEdBQTRCO1lBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBdENjLHFCQUFTLEdBQWdCLElBQUksV0FBVyxFQUFFLENBQUM7SUFvTzlELGtCQUFDO0NBQUEsQ0E3T2dDLDJFQUFVLEdBNk8xQztBQTdPdUI7QUErT3hCO0lBQUE7SUFNQSxDQUFDO0lBQUQsY0FBQztBQUFELENBQUM7O0FBRUQ7SUFTSSxnQkFBWSxJQUFZLEVBQUUsSUFBWSxFQUFFLEtBQWEsRUFBRSxHQUFZLEVBQ2pFLFFBQWtCLEVBQUUsWUFBc0IsRUFBRSxXQUFxQjtRQUNuRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFDRCxhQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJidW5kbGUuN2Y1ZTQ5ZmIwYzY2M2ExOWNmYTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUm9vbVNlcnZpY2UgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcclxuICAgcHJpdmF0ZSBfcmVzOiBib29sZWFuO1xyXG5cclxuICAgcHJpdmF0ZSBfaXRlbXM6IE9ic2VydmFibGVBcnJheTxGbG93ZXI+ID0gbmV3IE9ic2VydmFibGVBcnJheTxGbG93ZXI+KCk7XHJcblxyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCk6IFJvb21TZXJ2aWNlIHsgXHJcbiAgICByZXR1cm4gUm9vbVNlcnZpY2UuX2luc3RhbmNlOyBcclxuICAgIH0gXHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBSb29tU2VydmljZSA9IG5ldyBSb29tU2VydmljZSgpO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgc3VwZXIoKTtcclxuICAgICAgICBSb29tU2VydmljZS5faW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zLnB1c2godGhpcy5kYXRhKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2hlY2tNYXNzKG1hc3M6IHN0cmluZ1tdLCByZXM6IHN0cmluZyk6IGJvb2xlYW57XHJcbiAgICAgIGxldCBjaGVjazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICBtYXNzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQgPT0gcmVzKVxyXG4gICAgICAgICAgY2hlY2sgPSB0cnVlO1xyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gY2hlY2s7XHJcbiAgICB9XHJcblxyXG4gICBmaWx0ZXIocmVzOiBGaWx0ZXJzKTogT2JzZXJ2YWJsZUFycmF5PEZsb3dlcj4ge1xyXG4gICAgbGV0IGl0ZW1zMTogT2JzZXJ2YWJsZUFycmF5PEZsb3dlcj4gPSBuZXcgT2JzZXJ2YWJsZUFycmF5PEZsb3dlcj4oKTsgIFxyXG4gICAgdGhpcy5faXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgaWYoZWxlbWVudC5zdW4gPT0gcmVzLnN1biAmJiB0aGlzLmNoZWNrTWFzcyhlbGVtZW50LnJvb21UeXBlLCByZXMucm9vbVR5cGUpICYmIFxyXG4gICAgICAgICAgICB0aGlzLmNoZWNrTWFzcyhlbGVtZW50LndpbmRvd3NDb3VudCwgcmVzLndpbmRvd3NDb3VudCkgJiYgdGhpcy5jaGVja01hc3MoZWxlbWVudC5wcmVmZXJlbmNlcywgcmVzLnByZWZlcmVuY2VzKSl7XHJcbiAgICAgICAgICAgIGl0ZW1zMS5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gaXRlbXMxO1xyXG4gIH1cclxuXHJcbiAgICBzZXQgcmVzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgIHRoaXMuX3JlcyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByZXMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9yZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGl0ZW1zICh2YWw6IE9ic2VydmFibGVBcnJheTxGbG93ZXI+KSB7XHJcbiAgICAgIHRoaXMuX2l0ZW1zID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpdGVtcyAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9pdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBkYXRhOiBGbG93ZXIgW10gPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCh0YPQutC60YPQu9C10L3RgtGLXCIsXHJcbiAgICAgICAgZGVzYzogXCLQoNCw0LfQvNC10YnQsNGC0Ywg0LIg0YXQvtGA0L7RiNC+INC+0YHQstC10YnQtdC90L3QvtC8INC80LXRgdGC0LUsINC/0L7Qu9C40LLQsNGC0YwgMSDRgNCw0Lcg0LIg0L3QtdC00LXQu9GOXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0YHRg9C60LrRg9C70LXQvdGC0YsuanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCT0L7RgdGC0LjQvdCw0Y9cIixcItCa0L7RgNC40LTQvtGAXCIsXCLQktCw0L3QvdCw0Y9cIl0sXHJcbiAgICAgICAgd2luZG93c0NvdW50OiBbXCIxXCIsXCIyXCIsXCIzXCJdLFxyXG4gICAgICAgIHN1bjogdHJ1ZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiLFwi0LHQtdC3INC30LDQv9Cw0YXQsFwiLCBcItCx0LXQtyDRhtCy0LXRgtC60LBcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCa0LjQv9Cw0YDQuNGB0L7QstC40LpcIixcclxuICAgICAgICBkZXNjOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0LzQtdGB0YLQtSwg0L/QvtC70LjQstCw0YLRjCAxINGA0LDQtyDQsiDQvdC10LTQtdC70Y5cIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/QutC40L/QsNGA0LjRgdC+0LLQuNC6LmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiLFwi0KHQv9Cw0LvRjNC90LDRj1wiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLQvdC1INCy0YvQsdGA0LDQvdC+XCIsXCLQsdC10Lcg0LfQsNC/0LDRhdCwXCIsIFwi0LHQtdC3INGG0LLQtdGC0LrQsFwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0KXQsNC80LXQtNC+0YDQtdGPINGN0LvQtdCz0LDQvdGC0YFcIixcclxuICAgICAgICBkZXNjOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0LzQtdGB0YLQtSwg0L/QvtC70LjQstCw0YLRjCAxINGA0LDQtyDQsiDQvdC10LTQtdC70Y5cIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/RgdCw0L3RgdC10LLQuNC10YDQuNGPLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiLFwi0JLQsNC90L3QsNGPXCIsXCLQodC/0LDQu9GM0L3QsNGPXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IHRydWUsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItC90LUg0LLRi9Cx0YDQsNC90L5cIixcItCx0LXQtyDQt9Cw0L/QsNGF0LBcIiwgXCLQsdC10Lcg0YbQstC10YLQutCwXCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQodCw0L3RgdC10LLQuNC10YDQuNGPXCIsXHJcbiAgICAgICAgZGVzYzogXCLQoNCw0LfQvNC10YnQsNGC0Ywg0LIg0YXQvtGA0L7RiNC+INC+0YHQstC10YnQtdC90L3QvtC8INC80LXRgdGC0LUsINC/0L7Qu9C40LLQsNGC0YwgMSDRgNCw0Lcg0LIg0L3QtdC00LXQu9GOXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0YXQsNC80LXQtNC+0YDQtdGPLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLQvdC1INCy0YvQsdGA0LDQvdC+XCIsXCLQsdC10Lcg0LfQsNC/0LDRhdCwXCIsIFwi0LHQtdC3INGG0LLQtdGC0LrQsFwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0JrQsNC60YLRg9GBXCIsXHJcbiAgICAgICAgZGVzYzogXCLQn9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLFxyXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9C60LDQutGC0YPRgS5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjBcIixcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiBmYWxzZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiLFwi0LHQtdC3INC30LDQv9Cw0YXQsFwiLCBcItCx0LXQtyDRhtCy0LXRgtC60LBcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCT0YDRkdC90YHQutCw0L1cIixcclxuICAgICAgICBkZXNjOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0YHQvtC70L3QtdGH0L3QvtC8INC80LXRgdGC0LUgLCDRh9Cw0YHRgtGL0Lkg0L/QvtC70LjQslwiLFxyXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9Cz0YDQtdC90YHQutCw0L0uanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCT0L7RgdGC0LjQvdCw0Y9cIixcItCa0L7RgNC40LTQvtGAXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IHRydWUsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItC90LUg0LLRi9Cx0YDQsNC90L5cIixcItCx0LXQtyDQt9Cw0L/QsNGF0LBcIiwgXCLQsdC10Lcg0YbQstC10YLQutCwXCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQkNC70L7QtSDQktC10YDQsFwiLFxyXG4gICAgICAgIGRlc2M6IFwi0J/RgNC10LTQv9C+0YfQuNGC0LDQtdGCINGC0LXQv9C70YPRjiDRgdGA0LXQtNGDLNC+0LPRgNCw0L3QuNGH0LXQvdC90YvQuSDQv9C+0LvQuNCyXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LDQu9C+0LUg0LLQtdGA0LAuanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCT0L7RgdGC0LjQvdCw0Y9cIixcItCa0L7RgNC40LTQvtGAXCIsXCLQodC/0LDQu9GM0L3QsNGPXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IHRydWUsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItC90LUg0LLRi9Cx0YDQsNC90L5cIixcItCx0LXQtyDQt9Cw0L/QsNGF0LBcIiwgXCLQsdC10Lcg0YbQstC10YLQutCwXCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQkdGA0L7QvNC10LvQuNGPXCIsXHJcbiAgICAgICAgZGVzYzogXCLQntC/0YDRi9GB0LrQuNCy0LDQudGC0LUg0YDQsNC3INCyINC90LXQtNC10LvRjiwg0L/QvtC70LjQstCw0LnRgtC1INCyINGA0L7Qt9C10YLQutGDINGA0LDRgdGC0LXQvdC40Y8sINGD0LzQtdGA0LXQvdC90YvQuSDQv9C+0LvQuNCyXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LHRgNC+0LzQtdC70LjRjy5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JLQsNC90L3QsNGPXCIsXCLQmtGD0YXQvdGPXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMVwiXSxcclxuICAgICAgICBzdW46IHRydWUsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItGBINC30LDQv9Cw0YXQvtC8XCIsIFwi0YEg0YbQstC10YLQutC+0LxcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCX0LDQvdGC0LXQtNC10YHQutC40Y9cIixcclxuICAgICAgICBkZXNjOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0YHQvtC70L3QtdGH0L3QvtC8INC80LXRgdGC0LUsINGD0LzQtdGA0LXQvdC90YvQuSDQv9C+0LvQuNCyXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LfQsNC90YLQtdC00LXRgdC60LjRjy5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JPQvtGB0YLQuNC90LDRj1wiLFwi0JrQvtGA0LjQtNC+0YBcIl0sXHJcbiAgICAgICAgd2luZG93c0NvdW50OiBbXCIxXCIsXCIyXCIsXCIzXCJdLFxyXG4gICAgICAgIHN1bjogdHJ1ZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0YEg0LfQsNC/0LDRhdC+0LxcIiwgXCLRgSDRhtCy0LXRgtC60L7QvFwiXVxyXG4gICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0JLRgNC40LXQt9C40Y9cIixcclxuICAgICAgICBkZXNjOiBcItCf0L7Qu9C40LLQsNGC0YwgMSDRgNCw0LfQsCDQsiDQvdC10LTQtdC70Y5cIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/QstGA0LjQtdC30LjRjy5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JPQvtGB0YLQuNC90LDRj1wiLFwi0JrQvtGA0LjQtNC+0YBcIl0sXHJcbiAgICAgICAgd2luZG93c0NvdW50OiBbXCIxXCIsXCIyXCIsXCIzXCJdLFxyXG4gICAgICAgIHN1bjogdHJ1ZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0YEg0LfQsNC/0LDRhdC+0LxcIiwgXCLRgSDRhtCy0LXRgtC60L7QvFwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0KXRgNC40LfQsNC90YLQtdC80LBcIixcclxuICAgICAgICBkZXNjOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0YHQvtC70L3QtdGH0L3QvtC8INC80LXRgdGC0LUsINGD0LzQtdGA0LXQvdC90YvQuSDQv9C+0LvQuNCyXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0YXRgNC40LfQsNC90YLQtdC80LAuanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCT0L7RgdGC0LjQvdCw0Y9cIixcItCa0L7RgNC40LTQvtGAXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IHRydWUsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItGBINC30LDQv9Cw0YXQvtC8XCIsIFwi0YEg0YbQstC10YLQutC+0LxcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCk0LDQu9C10L3QvtC/0YHQuNGBXCIsXHJcbiAgICAgICAgZGVzYzogXCLQoNCw0LfQvNC10YnQsNGC0Ywg0LIg0YXQvtGA0L7RiNC+INC+0YHQstC10YnQtdC90L3QvtC8INGB0L7Qu9C90LXRh9C90L7QvCDQvNC10YHRgtC1LCDQv9C+0LTQtNC10YDQttC40LLQsNC50YLQtSDQstC70LDQs9GDLCDQv9C+0LPRgNGD0LbQsNGC0Ywg0LIg0LXQvNC60L7RgdGC0Ywg0YEg0LLQvtC00L7QuVwiLFxyXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9GE0LDQu9C10L3QvtC/0YHQuNGBLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiLFwi0KHQv9Cw0LvRjNC90LDRj1wiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjJcIl0sXHJcbiAgICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLRgSDQt9Cw0L/QsNGF0L7QvFwiLCBcItGBINGG0LLQtdGC0LrQvtC8XCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQotC40LvQu9Cw0L3QtNGB0LjRj1wiLFxyXG4gICAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINC30LDRgtC10L3QtdC90L3QvtC8INC80LXRgdGC0LUsINGD0LzQtdGA0LXQvdC90YvQuSDQv9C+0LvQuNCyXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0YLQuNC70LvQsNC90LTRgdC40Y8uanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCT0L7RgdGC0LjQvdCw0Y9cIixcItCa0L7RgNC40LTQvtGAXCIsXCLQktCw0L3QvdCw0Y9cIixcItCh0L/QsNC70YzQvdCw0Y9cIl0sXHJcbiAgICAgICAgd2luZG93c0NvdW50OiBbXCIwXCJdLFxyXG4gICAgICAgIHN1bjogZmFsc2UsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItGBINC30LDQv9Cw0YXQvtC8XCIsIFwi0YEg0YbQstC10YLQutC+0LxcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCk0LjQutGD0YEg0LzQuNC60YDQvtC60LDRgNC/0LAg0LPQuNC90YHQtdC90LNcIixcclxuICAgICAgICBkZXNjOiBcItCj0LzQtdGA0LXQvdC90YvQuSDQv9C+0LvQuNCyXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0YTQuNC60YPRgSDQvNC40LrRgNC+0LrQsNGA0L/QsCDQs9C40L3RgdC10L3Qsy5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JPQvtGB0YLQuNC90LDRj1wiLFwi0JrQvtGA0LjQtNC+0YBcIl0sXHJcbiAgICAgICAgd2luZG93c0NvdW50OiBbXCIxXCIsXCIyXCIsXCIzXCJdLFxyXG4gICAgICAgIHN1bjogZmFsc2UsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItC90LUg0LLRi9Cx0YDQsNC90L5cIixcItCx0LXQtyDQt9Cw0L/QsNGF0LBcIiwgXCLQsdC10Lcg0YbQstC10YLQutCwXCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQlNGA0LDRhtC10L3QsFwiLFxyXG4gICAgICAgIGRlc2M6IFwi0J/QvtC80LXRgdGC0LjRgtGMINGG0LLQtdGC0L7QuiDQsiDQstCw0LfRgyDRgSDRh9C40YHRgtC+0Lkg0LLQvtC00L7QuSAo0YPRgNC+0LLQtdC90Ywg0LLQvtC00YsgNSDRgdC8KSwg0LzQtdC90Y/RgtGMINCy0L7QtNGDINC+0LTQuNC9INGA0LDQtyDQsiDQtNCy0LUg0L3QtdC00LXQu9C4XCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LTRgNCw0YbQtdC90LAuanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCS0LDQvdC90LDRj1wiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiBmYWxzZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiLFwi0LHQtdC3INC30LDQv9Cw0YXQsFwiLCBcItCx0LXQtyDRhtCy0LXRgtC60LBcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCT0LjQvNCw0LvQsNC50LDQvNC40LrRgVwiLFxyXG4gICAgICAgIGRlc2M6IFwi0KPQvNC10YDQtdC90L3Ri9C5INC/0L7Qu9C40LJcIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/Qs9C40LzQsNC70LDQudCw0LzQuNC60YEuanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCT0L7RgdGC0LjQvdCw0Y9cIixcItCa0L7RgNC40LTQvtGAXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMFwiLFwiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IGZhbHNlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLQvdC1INCy0YvQsdGA0LDQvdC+XCIsXCLQsdC10Lcg0LfQsNC/0LDRhdCwXCIsIFwi0LHQtdC3INGG0LLQtdGC0LrQsFwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0KjQu9GO0LzQsdC10YDQs9C10YDQsFwiLFxyXG4gICAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDRgdC+0LvQvdC10YfQvdC+0Lwg0LzQtdGB0YLQtSwg0YPQvNC10YDQtdC90L3Ri9C5INC/0L7Qu9C40LJcIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/RiNC70Y7QvNCx0LXRgNCz0LXRgNCwLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLQvdC1INCy0YvQsdGA0LDQvdC+XCIsXCLQsdC10Lcg0LfQsNC/0LDRhdCwXCIsIFwiYyDRhtCy0LXRgtC60L7QvFwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0JrRgNC10YHRgtC+0LLQvdC40Log0YTQuNC60YPRgdC+0LLQuNC00L3Ri9C5XCIsXHJcbiAgICAgICAgZGVzYzogXCLQn9C+0LvQuNCy0LDRgtGMIDIg0YDQsNC30LAg0LIg0L3QtdC00LXQu9GOXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LrRgNC10YHRgtC+0LLQvdC40Log0YTQuNC60YPRgdC+0LLQuNC00L3Ri9C5LmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiBmYWxzZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiLFwi0LHQtdC3INC30LDQv9Cw0YXQsFwiLCBcItCx0LXQtyDRhtCy0LXRgtC60LBcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCT0LXQudGF0LXRgNCwXCIsXHJcbiAgICAgICAgZGVzYzogXCLQn9C+0LvQuNCy0LDRgtGMIDIg0YDQsNC30LAg0LIg0L3QtdC00LXQu9GOXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LPQtdC50YXQtdGA0LAuanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCS0LDQvdC90LDRj1wiLFwi0JrRg9GF0L3Rj1wiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjBcIl0sXHJcbiAgICAgICAgc3VuOiBmYWxzZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiLFwi0LHQtdC3INC30LDQv9Cw0YXQsFwiLCBcItCx0LXQtyDRhtCy0LXRgtC60LBcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCo0LXRhNGE0LvQtdGA0LAg0LDRgNCx0L7RgNC40LrQvtC70LBcIixcclxuICAgICAgICBkZXNjOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0YHQvtC70L3QtdGH0L3QvtC8INC80LXRgdGC0LUsINC+0LPRgNCw0L3QuNGH0LXQvdC90YvQuSDQv9C+0LvQuNCyXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0YjQtdGE0YTQu9C10YDQsCDQsNGA0LHQvtGA0LjQutC+0LvQsC5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JPQvtGB0YLQuNC90LDRj1wiLFwi0JrQvtGA0LjQtNC+0YBcIl0sXHJcbiAgICAgICAgd2luZG93c0NvdW50OiBbXCIxXCIsXCIyXCIsXCIzXCJdLFxyXG4gICAgICAgIHN1bjogdHJ1ZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiLFwi0LHQtdC3INC30LDQv9Cw0YXQsFwiLCBcItCx0LXQtyDRhtCy0LXRgtC60LBcIl1cclxuICAgICAgICB9XHJcbiAgXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlcnMge1xyXG4gICAgcHVibGljIHJvb21UeXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgd2luZG93c0NvdW50OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcHJpY2U6IHN0cmluZztcclxuICAgIHB1YmxpYyBzdW46IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgcHJlZmVyZW5jZXM6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZsb3dlcntcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGVzYzogc3RyaW5nO1xyXG4gICAgcHVibGljIGltYWdlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc3VuOiBib29sZWFuO1xyXG4gICAgcHVibGljIHJvb21UeXBlOiBzdHJpbmdbXTtcclxuICAgIHB1YmxpYyB3aW5kb3dzQ291bnQ6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIHByZWZlcmVuY2VzOiBzdHJpbmdbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRlc2M6IHN0cmluZywgaW1hZ2U6IHN0cmluZywgc3VuOiBib29sZWFuLCBcclxuICAgICAgcm9vbVR5cGU6IHN0cmluZ1tdLCB3aW5kb3dzQ291bnQ6IHN0cmluZ1tdLCBwcmVmZXJlbmNlczogc3RyaW5nW10pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmRlc2MgPSBkZXNjO1xyXG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgdGhpcy5zdW4gPSBzdW47XHJcbiAgICB0aGlzLndpbmRvd3NDb3VudCA9IHdpbmRvd3NDb3VudDtcclxuICAgIHRoaXMucm9vbVR5cGUgPSByb29tVHlwZTtcclxuICAgIHRoaXMucHJlZmVyZW5jZXMgPSBwcmVmZXJlbmNlcztcclxufVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=