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
                preferences: ["не выбрано", "без запаха", "c цветком"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaGFyZWQvcm9vbS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUU7QUFDWDtBQUU5RDtJQUFpQywrQkFBVTtJQVd2QztRQUFBLFlBQ0UsaUJBQU8sU0FHUjtRQVpNLFlBQU0sR0FBNEIsSUFBSSxzRkFBZSxFQUFVLENBQUM7UUFrRHZFLFVBQUksR0FBYztZQUNoQjtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsSUFBSSxFQUFFLDhEQUE4RDtnQkFDcEUsS0FBSyxFQUFFLHlCQUF5QjtnQkFDaEMsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsUUFBUSxDQUFDO2dCQUNqRCxZQUFZLEVBQUUsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUM7Z0JBQy9CLEdBQUcsRUFBRSxJQUFJO2dCQUNULFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQzthQUMxQjtZQUNEO2dCQUNBLElBQUksRUFBRSxhQUFhO2dCQUNuQixJQUFJLEVBQUUsOERBQThEO2dCQUNwRSxLQUFLLEVBQUUsMEJBQTBCO2dCQUNqQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLFNBQVMsRUFBQyxVQUFVLENBQUM7Z0JBQ25ELFlBQVksRUFBRSxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQztnQkFDL0IsR0FBRyxFQUFFLElBQUk7Z0JBQ1QsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQzFCO1lBQ0Q7Z0JBQ0EsSUFBSSxFQUFFLG9CQUFvQjtnQkFDMUIsSUFBSSxFQUFFLDhEQUE4RDtnQkFDcEUsS0FBSyxFQUFFLDBCQUEwQjtnQkFDakMsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLFVBQVUs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QWdCLElBQUksV0FBVyxFQUFFLENBQUM7SUFvTzlELGtCQUFDO0NBQUEsQ0E3T2dDLDJFQUFVLEdBNk8xQztBQTdPdUI7QUErT3hCO0lBQUE7SUFNQSxDQUFDO0lBQUQsY0FBQztBQUFELENBQUM7O0FBRUQ7SUFTSSxnQkFBWSxJQUFZLEVBQUUsSUFBWSxFQUFFLEtBQWEsRUFBRSxHQUFZLEVBQ2pFLFFBQWtCLEVBQUUsWUFBc0IsRUFBRSxXQUFxQjtRQUNuRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFDRCxhQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJidW5kbGUuOGE4YWNkNTJhN2RhYTFhYWE4MTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUm9vbVNlcnZpY2UgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcclxuICAgcHJpdmF0ZSBfcmVzOiBib29sZWFuO1xyXG5cclxuICAgcHJpdmF0ZSBfaXRlbXM6IE9ic2VydmFibGVBcnJheTxGbG93ZXI+ID0gbmV3IE9ic2VydmFibGVBcnJheTxGbG93ZXI+KCk7XHJcblxyXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCk6IFJvb21TZXJ2aWNlIHsgXHJcbiAgICByZXR1cm4gUm9vbVNlcnZpY2UuX2luc3RhbmNlOyBcclxuICAgIH0gXHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBSb29tU2VydmljZSA9IG5ldyBSb29tU2VydmljZSgpO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgc3VwZXIoKTtcclxuICAgICAgICBSb29tU2VydmljZS5faW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zLnB1c2godGhpcy5kYXRhKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2hlY2tNYXNzKG1hc3M6IHN0cmluZ1tdLCByZXM6IHN0cmluZyk6IGJvb2xlYW57XHJcbiAgICAgIGxldCBjaGVjazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICBtYXNzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQgPT0gcmVzKVxyXG4gICAgICAgICAgY2hlY2sgPSB0cnVlO1xyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gY2hlY2s7XHJcbiAgICB9XHJcblxyXG4gICBmaWx0ZXIocmVzOiBGaWx0ZXJzKTogT2JzZXJ2YWJsZUFycmF5PEZsb3dlcj4ge1xyXG4gICAgbGV0IGl0ZW1zMTogT2JzZXJ2YWJsZUFycmF5PEZsb3dlcj4gPSBuZXcgT2JzZXJ2YWJsZUFycmF5PEZsb3dlcj4oKTsgIFxyXG4gICAgdGhpcy5faXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgaWYoZWxlbWVudC5zdW4gPT0gcmVzLnN1biAmJiB0aGlzLmNoZWNrTWFzcyhlbGVtZW50LnJvb21UeXBlLCByZXMucm9vbVR5cGUpICYmIFxyXG4gICAgICAgICAgICB0aGlzLmNoZWNrTWFzcyhlbGVtZW50LndpbmRvd3NDb3VudCwgcmVzLndpbmRvd3NDb3VudCkgJiYgdGhpcy5jaGVja01hc3MoZWxlbWVudC5wcmVmZXJlbmNlcywgcmVzLnByZWZlcmVuY2VzKSl7XHJcbiAgICAgICAgICAgIGl0ZW1zMS5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gaXRlbXMxO1xyXG4gIH1cclxuXHJcbiAgICBzZXQgcmVzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgIHRoaXMuX3JlcyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByZXMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9yZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGl0ZW1zICh2YWw6IE9ic2VydmFibGVBcnJheTxGbG93ZXI+KSB7XHJcbiAgICAgIHRoaXMuX2l0ZW1zID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpdGVtcyAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9pdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBkYXRhOiBGbG93ZXIgW10gPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCh0YPQutC60YPQu9C10L3RgtGLXCIsXHJcbiAgICAgICAgZGVzYzogXCLQoNCw0LfQvNC10YnQsNGC0Ywg0LIg0YXQvtGA0L7RiNC+INC+0YHQstC10YnQtdC90L3QvtC8INC80LXRgdGC0LUsINC/0L7Qu9C40LLQsNGC0YwgMSDRgNCw0Lcg0LIg0L3QtdC00LXQu9GOXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0YHRg9C60LrRg9C70LXQvdGC0YsuanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCT0L7RgdGC0LjQvdCw0Y9cIixcItCa0L7RgNC40LTQvtGAXCIsXCLQktCw0L3QvdCw0Y9cIl0sXHJcbiAgICAgICAgd2luZG93c0NvdW50OiBbXCIwXCIsXCIxXCIsXCIyXCIsXCIzXCJdLFxyXG4gICAgICAgIHN1bjogdHJ1ZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0JrQuNC/0LDRgNC40YHQvtCy0LjQulwiLFxyXG4gICAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDQvNC10YHRgtC1LCDQv9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLFxyXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9C60LjQv9Cw0YDQuNGB0L7QstC40LouanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCT0L7RgdGC0LjQvdCw0Y9cIixcItCa0L7RgNC40LTQvtGAXCIsXCLQodC/0LDQu9GM0L3QsNGPXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMFwiLFwiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IHRydWUsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItC90LUg0LLRi9Cx0YDQsNC90L5cIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCl0LDQvNC10LTQvtGA0LXRjyDRjdC70LXQs9Cw0L3RgtGBXCIsXHJcbiAgICAgICAgZGVzYzogXCLQoNCw0LfQvNC10YnQsNGC0Ywg0LIg0YXQvtGA0L7RiNC+INC+0YHQstC10YnQtdC90L3QvtC8INC80LXRgdGC0LUsINC/0L7Qu9C40LLQsNGC0YwgMSDRgNCw0Lcg0LIg0L3QtdC00LXQu9GOXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0YHQsNC90YHQtdCy0LjQtdGA0LjRjy5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JPQvtGB0YLQuNC90LDRj1wiLFwi0JrQvtGA0LjQtNC+0YBcIixcItCS0LDQvdC90LDRj1wiLFwi0KHQv9Cw0LvRjNC90LDRj1wiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLQvdC1INCy0YvQsdGA0LDQvdC+XCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQodCw0L3RgdC10LLQuNC10YDQuNGPXCIsXHJcbiAgICAgICAgZGVzYzogXCLQoNCw0LfQvNC10YnQsNGC0Ywg0LIg0YXQvtGA0L7RiNC+INC+0YHQstC10YnQtdC90L3QvtC8INC80LXRgdGC0LUsINC/0L7Qu9C40LLQsNGC0YwgMSDRgNCw0Lcg0LIg0L3QtdC00LXQu9GOXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0YXQsNC80LXQtNC+0YDQtdGPLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLQvdC1INCy0YvQsdGA0LDQvdC+XCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQmtCw0LrRgtGD0YFcIixcclxuICAgICAgICBkZXNjOiBcItCf0L7Qu9C40LLQsNGC0YwgMSDRgNCw0Lcg0LIg0L3QtdC00LXQu9GOXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LrQsNC60YLRg9GBLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQmtC+0YDQuNC00L7RgFwiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjBcIixcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiBmYWxzZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0JPRgNGR0L3RgdC60LDQvVwiLFxyXG4gICAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDRgdC+0LvQvdC10YfQvdC+0Lwg0LzQtdGB0YLQtSAsINGH0LDRgdGC0YvQuSDQv9C+0LvQuNCyXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LPRgNC10L3RgdC60LDQvS5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JPQvtGB0YLQuNC90LDRj1wiLFwi0JrQvtGA0LjQtNC+0YBcIl0sXHJcbiAgICAgICAgd2luZG93c0NvdW50OiBbXCIxXCIsXCIyXCIsXCIzXCJdLFxyXG4gICAgICAgIHN1bjogdHJ1ZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0JDQu9C+0LUg0JLQtdGA0LBcIixcclxuICAgICAgICBkZXNjOiBcItCf0YDQtdC00L/QvtGH0LjRgtCw0LXRgiDRgtC10L/Qu9GD0Y4g0YHRgNC10LTRgyzQvtCz0YDQsNC90LjRh9C10L3QvdGL0Lkg0L/QvtC70LjQslwiLFxyXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9Cw0LvQvtC1INCy0LXRgNCwLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiLFwi0KHQv9Cw0LvRjNC90LDRj1wiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLQvdC1INCy0YvQsdGA0LDQvdC+XCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQkdGA0L7QvNC10LvQuNGPXCIsXHJcbiAgICAgICAgZGVzYzogXCLQntC/0YDRi9GB0LrQuNCy0LDQudGC0LUg0YDQsNC3INCyINC90LXQtNC10LvRjiwg0L/QvtC70LjQstCw0LnRgtC1INCyINGA0L7Qt9C10YLQutGDINGA0LDRgdGC0LXQvdC40Y8sINGD0LzQtdGA0LXQvdC90YvQuSDQv9C+0LvQuNCyXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LHRgNC+0LzQtdC70LjRjy5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JLQsNC90L3QsNGPXCIsXCLQmtGD0YXQvdGPXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IHRydWUsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItGBINC30LDQv9Cw0YXQvtC8XCIsIFwi0YEg0YbQstC10YLQutC+0LxcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCX0LDQvdGC0LXQtNC10YHQutC40Y9cIixcclxuICAgICAgICBkZXNjOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0YHQvtC70L3QtdGH0L3QvtC8INC80LXRgdGC0LUsINGD0LzQtdGA0LXQvdC90YvQuSDQv9C+0LvQuNCyXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LfQsNC90YLQtdC00LXRgdC60LjRjy5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JPQvtGB0YLQuNC90LDRj1wiLFwi0JrQvtGA0LjQtNC+0YBcIixcItCh0L/QsNC70YzQvdCw0Y9cIixcItCS0LDQvdC90LDRj1wiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLRgSDQt9Cw0L/QsNGF0L7QvFwiLCBcItGBINGG0LLQtdGC0LrQvtC8XCJdXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQktGA0LjQtdC30LjRj1wiLFxyXG4gICAgICAgIGRlc2M6IFwi0J/QvtC70LjQstCw0YLRjCAxINGA0LDQt9CwINCyINC90LXQtNC10LvRjlwiLFxyXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9Cy0YDQuNC10LfQuNGPLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiLFwi0KHQv9Cw0LvRjNC90LDRj1wiLFwi0JLQsNC90L3QsNGPXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IHRydWUsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItGBINC30LDQv9Cw0YXQvtC8XCIsIFwi0YEg0YbQstC10YLQutC+0LxcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCl0YDQuNC30LDQvdGC0LXQvNCwXCIsXHJcbiAgICAgICAgZGVzYzogXCLQoNCw0LfQvNC10YnQsNGC0Ywg0LIg0YXQvtGA0L7RiNC+INC+0YHQstC10YnQtdC90L3QvtC8INGB0L7Qu9C90LXRh9C90L7QvCDQvNC10YHRgtC1LCDRg9C80LXRgNC10L3QvdGL0Lkg0L/QvtC70LjQslwiLFxyXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9GF0YDQuNC30LDQvdGC0LXQvNCwLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLRgSDQt9Cw0L/QsNGF0L7QvFwiLCBcItGBINGG0LLQtdGC0LrQvtC8XCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQpNCw0LvQtdC90L7Qv9GB0LjRgVwiLFxyXG4gICAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDRgdC+0LvQvdC10YfQvdC+0Lwg0LzQtdGB0YLQtSwg0L/QvtC00LTQtdGA0LbQuNCy0LDQudGC0LUg0LLQu9Cw0LPRgywg0L/QvtCz0YDRg9C20LDRgtGMINCyINC10LzQutC+0YHRgtGMINGBINCy0L7QtNC+0LlcIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/RhNCw0LvQtdC90L7Qv9GB0LjRgS5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JPQvtGB0YLQuNC90LDRj1wiLFwi0JrQvtGA0LjQtNC+0YBcIixcItCh0L/QsNC70YzQvdCw0Y9cIixcItCS0LDQvdC90LDRj1wiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLRgSDQt9Cw0L/QsNGF0L7QvFwiLCBcItGBINGG0LLQtdGC0LrQvtC8XCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQotC40LvQu9Cw0L3QtNGB0LjRj1wiLFxyXG4gICAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINC30LDRgtC10L3QtdC90L3QvtC8INC80LXRgdGC0LUsINGD0LzQtdGA0LXQvdC90YvQuSDQv9C+0LvQuNCyXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0YLQuNC70LvQsNC90LTRgdC40Y8uanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCT0L7RgdGC0LjQvdCw0Y9cIixcItCa0L7RgNC40LTQvtGAXCIsXCLQktCw0L3QvdCw0Y9cIixcItCh0L/QsNC70YzQvdCw0Y9cIl0sXHJcbiAgICAgICAgd2luZG93c0NvdW50OiBbXCIwXCJdLFxyXG4gICAgICAgIHN1bjogZmFsc2UsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItGBINC30LDQv9Cw0YXQvtC8XCIsIFwi0YEg0YbQstC10YLQutC+0LxcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCk0LjQutGD0YEg0LzQuNC60YDQvtC60LDRgNC/0LAg0LPQuNC90YHQtdC90LNcIixcclxuICAgICAgICBkZXNjOiBcItCj0LzQtdGA0LXQvdC90YvQuSDQv9C+0LvQuNCyXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0YTQuNC60YPRgSDQvNC40LrRgNC+0LrQsNGA0L/QsCDQs9C40L3RgdC10L3Qsy5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JPQvtGB0YLQuNC90LDRj1wiLFwi0JrQvtGA0LjQtNC+0YBcIl0sXHJcbiAgICAgICAgd2luZG93c0NvdW50OiBbXCIwXCIsXCIxXCIsXCIyXCIsXCIzXCJdLFxyXG4gICAgICAgIHN1bjogZmFsc2UsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItC90LUg0LLRi9Cx0YDQsNC90L5cIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCU0YDQsNGG0LXQvdCwXCIsXHJcbiAgICAgICAgZGVzYzogXCLQn9C+0LzQtdGB0YLQuNGC0Ywg0YbQstC10YLQvtC6INCyINCy0LDQt9GDINGBINGH0LjRgdGC0L7QuSDQstC+0LTQvtC5ICjRg9GA0L7QstC10L3RjCDQstC+0LTRiyA1INGB0LwpLCDQvNC10L3Rj9GC0Ywg0LLQvtC00YMg0L7QtNC40L0g0YDQsNC3INCyINC00LLQtSDQvdC10LTQtdC70LhcIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/QtNGA0LDRhtC10L3QsC5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JLQsNC90L3QsNGPXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMFwiLFwiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IGZhbHNlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLQvdC1INCy0YvQsdGA0LDQvdC+XCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQk9C40LzQsNC70LDQudCw0LzQuNC60YFcIixcclxuICAgICAgICBkZXNjOiBcItCj0LzQtdGA0LXQvdC90YvQuSDQv9C+0LvQuNCyXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LPQuNC80LDQu9Cw0LnQsNC80LjQutGBLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjBcIixcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiBmYWxzZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0KjQu9GO0LzQsdC10YDQs9C10YDQsFwiLFxyXG4gICAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDRgdC+0LvQvdC10YfQvdC+0Lwg0LzQtdGB0YLQtSwg0YPQvNC10YDQtdC90L3Ri9C5INC/0L7Qu9C40LJcIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/RiNC70Y7QvNCx0LXRgNCz0LXRgNCwLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLQvdC1INCy0YvQsdGA0LDQvdC+XCIsXCLQsdC10Lcg0LfQsNC/0LDRhdCwXCIsIFwiYyDRhtCy0LXRgtC60L7QvFwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0JrRgNC10YHRgtC+0LLQvdC40Log0YTQuNC60YPRgdC+0LLQuNC00L3Ri9C5XCIsXHJcbiAgICAgICAgZGVzYzogXCLQn9C+0LvQuNCy0LDRgtGMIDIg0YDQsNC30LAg0LIg0L3QtdC00LXQu9GOXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LrRgNC10YHRgtC+0LLQvdC40Log0YTQuNC60YPRgdC+0LLQuNC00L3Ri9C5LmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiBmYWxzZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0JPQtdC50YXQtdGA0LBcIixcclxuICAgICAgICBkZXNjOiBcItCf0L7Qu9C40LLQsNGC0YwgMiDRgNCw0LfQsCDQsiDQvdC10LTQtdC70Y5cIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/Qs9C10LnRhdC10YDQsC5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JLQsNC90L3QsNGPXCIsXCLQmtGD0YXQvdGPXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMFwiXSxcclxuICAgICAgICBzdW46IGZhbHNlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLQvdC1INCy0YvQsdGA0LDQvdC+XCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQqNC10YTRhNC70LXRgNCwINCw0YDQsdC+0YDQuNC60L7Qu9CwXCIsXHJcbiAgICAgICAgZGVzYzogXCLQoNCw0LfQvNC10YnQsNGC0Ywg0LIg0YXQvtGA0L7RiNC+INC+0YHQstC10YnQtdC90L3QvtC8INGB0L7Qu9C90LXRh9C90L7QvCDQvNC10YHRgtC1LCDQvtCz0YDQsNC90LjRh9C10L3QvdGL0Lkg0L/QvtC70LjQslwiLFxyXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9GI0LXRhNGE0LvQtdGA0LAg0LDRgNCx0L7RgNC40LrQvtC70LAuanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCT0L7RgdGC0LjQvdCw0Y9cIixcItCa0L7RgNC40LTQvtGAXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IHRydWUsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItC90LUg0LLRi9Cx0YDQsNC90L5cIl1cclxuICAgICAgICB9XHJcbiAgXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlcnMge1xyXG4gICAgcHVibGljIHJvb21UeXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgd2luZG93c0NvdW50OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcHJpY2U6IHN0cmluZztcclxuICAgIHB1YmxpYyBzdW46IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgcHJlZmVyZW5jZXM6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZsb3dlcntcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGVzYzogc3RyaW5nO1xyXG4gICAgcHVibGljIGltYWdlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc3VuOiBib29sZWFuO1xyXG4gICAgcHVibGljIHJvb21UeXBlOiBzdHJpbmdbXTtcclxuICAgIHB1YmxpYyB3aW5kb3dzQ291bnQ6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIHByZWZlcmVuY2VzOiBzdHJpbmdbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRlc2M6IHN0cmluZywgaW1hZ2U6IHN0cmluZywgc3VuOiBib29sZWFuLCBcclxuICAgICAgcm9vbVR5cGU6IHN0cmluZ1tdLCB3aW5kb3dzQ291bnQ6IHN0cmluZ1tdLCBwcmVmZXJlbmNlczogc3RyaW5nW10pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmRlc2MgPSBkZXNjO1xyXG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgdGhpcy5zdW4gPSBzdW47XHJcbiAgICB0aGlzLndpbmRvd3NDb3VudCA9IHdpbmRvd3NDb3VudDtcclxuICAgIHRoaXMucm9vbVR5cGUgPSByb29tVHlwZTtcclxuICAgIHRoaXMucHJlZmVyZW5jZXMgPSBwcmVmZXJlbmNlcztcclxufVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=