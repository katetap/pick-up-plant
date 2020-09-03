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
                preferences: ["не выбрано", "без запаха", "без цветка"]
            },
            {
                name: "Кипарисовик",
                desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю",
                image: "~/images/кипарисовик.jpg",
                roomType: ["Кухня", "Гостиная", "Коридор", "Спальная"],
                windowsCount: ["0", "1", "2", "3"],
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
                roomType: ["Кухня", "Коридор"],
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
                preferences: ["не выбрано", "без запаха", "без цветка"]
            },
            {
                name: "Драцена",
                desc: "Поместить цветок в вазу с чистой водой (уровень воды 5 см), менять воду один раз в две недели",
                image: "~/images/драцена.jpg",
                roomType: ["Кухня", "Ванная"],
                windowsCount: ["0", "1", "2", "3"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaGFyZWQvcm9vbS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUU7QUFDWDtBQUU5RDtJQUFpQywrQkFBVTtJQVd2QztRQUFBLFlBQ0UsaUJBQU8sU0FHUjtRQVpNLFlBQU0sR0FBNEIsSUFBSSxzRkFBZSxFQUFVLENBQUM7UUFrRHZFLFVBQUksR0FBYztZQUNoQjtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsSUFBSSxFQUFFLDhEQUE4RDtnQkFDcEUsS0FBSyxFQUFFLHlCQUF5QjtnQkFDaEMsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsUUFBUSxDQUFDO2dCQUNqRCxZQUFZLEVBQUUsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUM7Z0JBQy9CLEdBQUcsRUFBRSxJQUFJO2dCQUNULFdBQVcsRUFBRSxDQUFDLFlBQVksRUFBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO2FBQ3JEO1lBQ0Q7Z0JBQ0EsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLElBQUksRUFBRSw4REFBOEQ7Z0JBQ3BFLEtBQUssRUFBRSwwQkFBMEI7Z0JBQ2pDLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLFVBQVUsQ0FBQztnQkFDbkQsWUFBWSxFQUFFLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDO2dCQUMvQixHQUFHLEVBQUUsSUFBSTtnQkFDVCxXQUFXLEVBQUUsQ0FBQyxZQUFZLEVBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQzthQUNyRDtZQUNEO2dCQUNBLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLElBQUksRUFBRSw4REFBOEQ7Z0JBQ3BFLEtBQUssRUFBRSwwQkFBMEI7Z0JBQ2pDLFFBQVEsRUFBRSxDQUFDLE9BQU8s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Q0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBTUQsc0JBQUksOEJBQUs7YUFJVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDO2FBTkQsVUFBVyxHQUE0QjtZQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQXRDYyxxQkFBUyxHQUFnQixJQUFJLFdBQVcsRUFBRSxDQUFDO0lBb085RCxrQkFBQztDQUFBLENBN09nQywyRUFBVSxHQTZPMUM7QUE3T3VCO0FBK094QjtJQUFBO0lBTUEsQ0FBQztJQUFELGNBQUM7QUFBRCxDQUFDOztBQUVEO0lBU0ksZ0JBQVksSUFBWSxFQUFFLElBQVksRUFBRSxLQUFhLEVBQUUsR0FBWSxFQUNqRSxRQUFrQixFQUFFLFlBQXNCLEVBQUUsV0FBcUI7UUFDbkUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsYUFBQztBQUFELENBQUMiLCJmaWxlIjoiYnVuZGxlLjU3OTllZWRlNjMyMzlmNWU3ZjIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJvb21TZXJ2aWNlIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XHJcbiAgIHByaXZhdGUgX3JlczogYm9vbGVhbjtcclxuXHJcbiAgIHByaXZhdGUgX2l0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8Rmxvd2VyPiA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8Rmxvd2VyPigpO1xyXG5cclxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBSb29tU2VydmljZSB7IFxyXG4gICAgcmV0dXJuIFJvb21TZXJ2aWNlLl9pbnN0YW5jZTsgXHJcbiAgICB9IFxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogUm9vbVNlcnZpY2UgPSBuZXcgUm9vbVNlcnZpY2UoKTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgUm9vbVNlcnZpY2UuX2luc3RhbmNlID0gdGhpcztcclxuICAgICAgICB0aGlzLl9pdGVtcy5wdXNoKHRoaXMuZGF0YSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNoZWNrTWFzcyhtYXNzOiBzdHJpbmdbXSwgcmVzOiBzdHJpbmcpOiBib29sZWFue1xyXG4gICAgICBsZXQgY2hlY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgbWFzcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGlmIChlbGVtZW50ID09IHJlcylcclxuICAgICAgICAgIGNoZWNrID0gdHJ1ZTtcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuIGNoZWNrO1xyXG4gICAgfVxyXG5cclxuICAgZmlsdGVyKHJlczogRmlsdGVycyk6IE9ic2VydmFibGVBcnJheTxGbG93ZXI+IHtcclxuICAgIGxldCBpdGVtczE6IE9ic2VydmFibGVBcnJheTxGbG93ZXI+ID0gbmV3IE9ic2VydmFibGVBcnJheTxGbG93ZXI+KCk7ICBcclxuICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGlmKGVsZW1lbnQuc3VuID09IHJlcy5zdW4gJiYgdGhpcy5jaGVja01hc3MoZWxlbWVudC5yb29tVHlwZSwgcmVzLnJvb21UeXBlKSAmJiBcclxuICAgICAgICAgICAgdGhpcy5jaGVja01hc3MoZWxlbWVudC53aW5kb3dzQ291bnQsIHJlcy53aW5kb3dzQ291bnQpICYmIHRoaXMuY2hlY2tNYXNzKGVsZW1lbnQucHJlZmVyZW5jZXMsIHJlcy5wcmVmZXJlbmNlcykpe1xyXG4gICAgICAgICAgICBpdGVtczEucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGl0ZW1zMTtcclxuICB9XHJcblxyXG4gICAgc2V0IHJlcyh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICB0aGlzLl9yZXMgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcmVzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBpdGVtcyAodmFsOiBPYnNlcnZhYmxlQXJyYXk8Rmxvd2VyPikge1xyXG4gICAgICB0aGlzLl9pdGVtcyA9IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXRlbXMgKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5faXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YTogRmxvd2VyIFtdID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQodGD0LrQutGD0LvQtdC90YLRi1wiLFxyXG4gICAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDQvNC10YHRgtC1LCDQv9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLFxyXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9GB0YPQutC60YPQu9C10L3RgtGLLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiLFwi0JLQsNC90L3QsNGPXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMFwiLFwiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IHRydWUsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItC90LUg0LLRi9Cx0YDQsNC90L5cIixcItCx0LXQtyDQt9Cw0L/QsNGF0LBcIiwgXCLQsdC10Lcg0YbQstC10YLQutCwXCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQmtC40L/QsNGA0LjRgdC+0LLQuNC6XCIsXHJcbiAgICAgICAgZGVzYzogXCLQoNCw0LfQvNC10YnQsNGC0Ywg0LIg0YXQvtGA0L7RiNC+INC+0YHQstC10YnQtdC90L3QvtC8INC80LXRgdGC0LUsINC/0L7Qu9C40LLQsNGC0YwgMSDRgNCw0Lcg0LIg0L3QtdC00LXQu9GOXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LrQuNC/0LDRgNC40YHQvtCy0LjQui5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JPQvtGB0YLQuNC90LDRj1wiLFwi0JrQvtGA0LjQtNC+0YBcIixcItCh0L/QsNC70YzQvdCw0Y9cIl0sXHJcbiAgICAgICAgd2luZG93c0NvdW50OiBbXCIwXCIsXCIxXCIsXCIyXCIsXCIzXCJdLFxyXG4gICAgICAgIHN1bjogdHJ1ZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiLFwi0LHQtdC3INC30LDQv9Cw0YXQsFwiLCBcItCx0LXQtyDRhtCy0LXRgtC60LBcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCl0LDQvNC10LTQvtGA0LXRjyDRjdC70LXQs9Cw0L3RgtGBXCIsXHJcbiAgICAgICAgZGVzYzogXCLQoNCw0LfQvNC10YnQsNGC0Ywg0LIg0YXQvtGA0L7RiNC+INC+0YHQstC10YnQtdC90L3QvtC8INC80LXRgdGC0LUsINC/0L7Qu9C40LLQsNGC0YwgMSDRgNCw0Lcg0LIg0L3QtdC00LXQu9GOXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0YHQsNC90YHQtdCy0LjQtdGA0LjRjy5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JPQvtGB0YLQuNC90LDRj1wiLFwi0JrQvtGA0LjQtNC+0YBcIixcItCS0LDQvdC90LDRj1wiLFwi0KHQv9Cw0LvRjNC90LDRj1wiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLQvdC1INCy0YvQsdGA0LDQvdC+XCIsXCLQsdC10Lcg0LfQsNC/0LDRhdCwXCIsIFwi0LHQtdC3INGG0LLQtdGC0LrQsFwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0KHQsNC90YHQtdCy0LjQtdGA0LjRj1wiLFxyXG4gICAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDQvNC10YHRgtC1LCDQv9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLFxyXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9GF0LDQvNC10LTQvtGA0LXRjy5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JPQvtGB0YLQuNC90LDRj1wiLFwi0JrQvtGA0LjQtNC+0YBcIl0sXHJcbiAgICAgICAgd2luZG93c0NvdW50OiBbXCIxXCIsXCIyXCIsXCIzXCJdLFxyXG4gICAgICAgIHN1bjogdHJ1ZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiLFwi0LHQtdC3INC30LDQv9Cw0YXQsFwiLCBcItCx0LXQtyDRhtCy0LXRgtC60LBcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCa0LDQutGC0YPRgVwiLFxyXG4gICAgICAgIGRlc2M6IFwi0J/QvtC70LjQstCw0YLRjCAxINGA0LDQtyDQsiDQvdC10LTQtdC70Y5cIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/QutCw0LrRgtGD0YEuanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCa0L7RgNC40LTQvtGAXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMFwiLFwiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IGZhbHNlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLQvdC1INCy0YvQsdGA0LDQvdC+XCIsXCLQsdC10Lcg0LfQsNC/0LDRhdCwXCIsIFwi0LHQtdC3INGG0LLQtdGC0LrQsFwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0JPRgNGR0L3RgdC60LDQvVwiLFxyXG4gICAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDRgdC+0LvQvdC10YfQvdC+0Lwg0LzQtdGB0YLQtSAsINGH0LDRgdGC0YvQuSDQv9C+0LvQuNCyXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LPRgNC10L3RgdC60LDQvS5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JPQvtGB0YLQuNC90LDRj1wiLFwi0JrQvtGA0LjQtNC+0YBcIl0sXHJcbiAgICAgICAgd2luZG93c0NvdW50OiBbXCIxXCIsXCIyXCIsXCIzXCJdLFxyXG4gICAgICAgIHN1bjogdHJ1ZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiLFwi0LHQtdC3INC30LDQv9Cw0YXQsFwiLCBcItCx0LXQtyDRhtCy0LXRgtC60LBcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCQ0LvQvtC1INCS0LXRgNCwXCIsXHJcbiAgICAgICAgZGVzYzogXCLQn9GA0LXQtNC/0L7Rh9C40YLQsNC10YIg0YLQtdC/0LvRg9GOINGB0YDQtdC00YMs0L7Qs9GA0LDQvdC40YfQtdC90L3Ri9C5INC/0L7Qu9C40LJcIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/QsNC70L7QtSDQstC10YDQsC5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JPQvtGB0YLQuNC90LDRj1wiLFwi0JrQvtGA0LjQtNC+0YBcIixcItCh0L/QsNC70YzQvdCw0Y9cIl0sXHJcbiAgICAgICAgd2luZG93c0NvdW50OiBbXCIxXCIsXCIyXCIsXCIzXCJdLFxyXG4gICAgICAgIHN1bjogdHJ1ZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiLFwi0LHQtdC3INC30LDQv9Cw0YXQsFwiLCBcItCx0LXQtyDRhtCy0LXRgtC60LBcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCR0YDQvtC80LXQu9C40Y9cIixcclxuICAgICAgICBkZXNjOiBcItCe0L/RgNGL0YHQutC40LLQsNC50YLQtSDRgNCw0Lcg0LIg0L3QtdC00LXQu9GOLCDQv9C+0LvQuNCy0LDQudGC0LUg0LIg0YDQvtC30LXRgtC60YMg0YDQsNGB0YLQtdC90LjRjywg0YPQvNC10YDQtdC90L3Ri9C5INC/0L7Qu9C40LJcIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/QsdGA0L7QvNC10LvQuNGPLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQktCw0L3QvdCw0Y9cIixcItCa0YPRhdC90Y9cIl0sXHJcbiAgICAgICAgd2luZG93c0NvdW50OiBbXCIxXCJdLFxyXG4gICAgICAgIHN1bjogdHJ1ZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0YEg0LfQsNC/0LDRhdC+0LxcIiwgXCLRgSDRhtCy0LXRgtC60L7QvFwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0JfQsNC90YLQtdC00LXRgdC60LjRj1wiLFxyXG4gICAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDRgdC+0LvQvdC10YfQvdC+0Lwg0LzQtdGB0YLQtSwg0YPQvNC10YDQtdC90L3Ri9C5INC/0L7Qu9C40LJcIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/Qt9Cw0L3RgtC10LTQtdGB0LrQuNGPLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLRgSDQt9Cw0L/QsNGF0L7QvFwiLCBcItGBINGG0LLQtdGC0LrQvtC8XCJdXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQktGA0LjQtdC30LjRj1wiLFxyXG4gICAgICAgIGRlc2M6IFwi0J/QvtC70LjQstCw0YLRjCAxINGA0LDQt9CwINCyINC90LXQtNC10LvRjlwiLFxyXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9Cy0YDQuNC10LfQuNGPLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLRgSDQt9Cw0L/QsNGF0L7QvFwiLCBcItGBINGG0LLQtdGC0LrQvtC8XCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQpdGA0LjQt9Cw0L3RgtC10LzQsFwiLFxyXG4gICAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDRgdC+0LvQvdC10YfQvdC+0Lwg0LzQtdGB0YLQtSwg0YPQvNC10YDQtdC90L3Ri9C5INC/0L7Qu9C40LJcIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/RhdGA0LjQt9Cw0L3RgtC10LzQsC5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JPQvtGB0YLQuNC90LDRj1wiLFwi0JrQvtGA0LjQtNC+0YBcIl0sXHJcbiAgICAgICAgd2luZG93c0NvdW50OiBbXCIxXCIsXCIyXCIsXCIzXCJdLFxyXG4gICAgICAgIHN1bjogdHJ1ZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0YEg0LfQsNC/0LDRhdC+0LxcIiwgXCLRgSDRhtCy0LXRgtC60L7QvFwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0KTQsNC70LXQvdC+0L/RgdC40YFcIixcclxuICAgICAgICBkZXNjOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0YHQvtC70L3QtdGH0L3QvtC8INC80LXRgdGC0LUsINC/0L7QtNC00LXRgNC20LjQstCw0LnRgtC1INCy0LvQsNCz0YMsINC/0L7Qs9GA0YPQttCw0YLRjCDQsiDQtdC80LrQvtGB0YLRjCDRgSDQstC+0LTQvtC5XCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0YTQsNC70LXQvdC+0L/RgdC40YEuanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCT0L7RgdGC0LjQvdCw0Y9cIixcItCa0L7RgNC40LTQvtGAXCIsXCLQodC/0LDQu9GM0L3QsNGPXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IHRydWUsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItGBINC30LDQv9Cw0YXQvtC8XCIsIFwi0YEg0YbQstC10YLQutC+0LxcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCi0LjQu9C70LDQvdC00YHQuNGPXCIsXHJcbiAgICAgICAgZGVzYzogXCLQoNCw0LfQvNC10YnQsNGC0Ywg0LIg0LfQsNGC0LXQvdC10L3QvdC+0Lwg0LzQtdGB0YLQtSwg0YPQvNC10YDQtdC90L3Ri9C5INC/0L7Qu9C40LJcIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/RgtC40LvQu9Cw0L3QtNGB0LjRjy5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JPQvtGB0YLQuNC90LDRj1wiLFwi0JrQvtGA0LjQtNC+0YBcIixcItCS0LDQvdC90LDRj1wiLFwi0KHQv9Cw0LvRjNC90LDRj1wiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjBcIl0sXHJcbiAgICAgICAgc3VuOiBmYWxzZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0YEg0LfQsNC/0LDRhdC+0LxcIiwgXCLRgSDRhtCy0LXRgtC60L7QvFwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0KTQuNC60YPRgSDQvNC40LrRgNC+0LrQsNGA0L/QsCDQs9C40L3RgdC10L3Qs1wiLFxyXG4gICAgICAgIGRlc2M6IFwi0KPQvNC10YDQtdC90L3Ri9C5INC/0L7Qu9C40LJcIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/RhNC40LrRg9GBINC80LjQutGA0L7QutCw0YDQv9CwINCz0LjQvdGB0LXQvdCzLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjBcIixcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiBmYWxzZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiLFwi0LHQtdC3INC30LDQv9Cw0YXQsFwiLCBcItCx0LXQtyDRhtCy0LXRgtC60LBcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCU0YDQsNGG0LXQvdCwXCIsXHJcbiAgICAgICAgZGVzYzogXCLQn9C+0LzQtdGB0YLQuNGC0Ywg0YbQstC10YLQvtC6INCyINCy0LDQt9GDINGBINGH0LjRgdGC0L7QuSDQstC+0LTQvtC5ICjRg9GA0L7QstC10L3RjCDQstC+0LTRiyA1INGB0LwpLCDQvNC10L3Rj9GC0Ywg0LLQvtC00YMg0L7QtNC40L0g0YDQsNC3INCyINC00LLQtSDQvdC10LTQtdC70LhcIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/QtNGA0LDRhtC10L3QsC5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JLQsNC90L3QsNGPXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMFwiLFwiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IGZhbHNlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLQvdC1INCy0YvQsdGA0LDQvdC+XCIsXCLQsdC10Lcg0LfQsNC/0LDRhdCwXCIsIFwi0LHQtdC3INGG0LLQtdGC0LrQsFwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0JPQuNC80LDQu9Cw0LnQsNC80LjQutGBXCIsXHJcbiAgICAgICAgZGVzYzogXCLQo9C80LXRgNC10L3QvdGL0Lkg0L/QvtC70LjQslwiLFxyXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9Cz0LjQvNCw0LvQsNC50LDQvNC40LrRgS5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JPQvtGB0YLQuNC90LDRj1wiLFwi0JrQvtGA0LjQtNC+0YBcIl0sXHJcbiAgICAgICAgd2luZG93c0NvdW50OiBbXCIwXCIsXCIxXCIsXCIyXCIsXCIzXCJdLFxyXG4gICAgICAgIHN1bjogZmFsc2UsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItC90LUg0LLRi9Cx0YDQsNC90L5cIixcItCx0LXQtyDQt9Cw0L/QsNGF0LBcIiwgXCLQsdC10Lcg0YbQstC10YLQutCwXCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQqNC70Y7QvNCx0LXRgNCz0LXRgNCwXCIsXHJcbiAgICAgICAgZGVzYzogXCLQoNCw0LfQvNC10YnQsNGC0Ywg0LIg0YXQvtGA0L7RiNC+INC+0YHQstC10YnQtdC90L3QvtC8INGB0L7Qu9C90LXRh9C90L7QvCDQvNC10YHRgtC1LCDRg9C80LXRgNC10L3QvdGL0Lkg0L/QvtC70LjQslwiLFxyXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9GI0LvRjtC80LHQtdGA0LPQtdGA0LAuanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCT0L7RgdGC0LjQvdCw0Y9cIixcItCa0L7RgNC40LTQvtGAXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IHRydWUsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItC90LUg0LLRi9Cx0YDQsNC90L5cIixcItCx0LXQtyDQt9Cw0L/QsNGF0LBcIiwgXCJjINGG0LLQtdGC0LrQvtC8XCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQmtGA0LXRgdGC0L7QstC90LjQuiDRhNC40LrRg9GB0L7QstC40LTQvdGL0LlcIixcclxuICAgICAgICBkZXNjOiBcItCf0L7Qu9C40LLQsNGC0YwgMiDRgNCw0LfQsCDQsiDQvdC10LTQtdC70Y5cIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/QutGA0LXRgdGC0L7QstC90LjQuiDRhNC40LrRg9GB0L7QstC40LTQvdGL0LkuanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCT0L7RgdGC0LjQvdCw0Y9cIixcItCa0L7RgNC40LTQvtGAXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IGZhbHNlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLQvdC1INCy0YvQsdGA0LDQvdC+XCIsXCLQsdC10Lcg0LfQsNC/0LDRhdCwXCIsIFwi0LHQtdC3INGG0LLQtdGC0LrQsFwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0JPQtdC50YXQtdGA0LBcIixcclxuICAgICAgICBkZXNjOiBcItCf0L7Qu9C40LLQsNGC0YwgMiDRgNCw0LfQsCDQsiDQvdC10LTQtdC70Y5cIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/Qs9C10LnRhdC10YDQsC5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JLQsNC90L3QsNGPXCIsXCLQmtGD0YXQvdGPXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMFwiXSxcclxuICAgICAgICBzdW46IGZhbHNlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLQvdC1INCy0YvQsdGA0LDQvdC+XCIsXCLQsdC10Lcg0LfQsNC/0LDRhdCwXCIsIFwi0LHQtdC3INGG0LLQtdGC0LrQsFwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0KjQtdGE0YTQu9C10YDQsCDQsNGA0LHQvtGA0LjQutC+0LvQsFwiLFxyXG4gICAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDRgdC+0LvQvdC10YfQvdC+0Lwg0LzQtdGB0YLQtSwg0L7Qs9GA0LDQvdC40YfQtdC90L3Ri9C5INC/0L7Qu9C40LJcIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/RiNC10YTRhNC70LXRgNCwINCw0YDQsdC+0YDQuNC60L7Qu9CwLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLQvdC1INCy0YvQsdGA0LDQvdC+XCIsXCLQsdC10Lcg0LfQsNC/0LDRhdCwXCIsIFwi0LHQtdC3INGG0LLQtdGC0LrQsFwiXVxyXG4gICAgICAgIH1cclxuICBdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsdGVycyB7XHJcbiAgICBwdWJsaWMgcm9vbVR5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyB3aW5kb3dzQ291bnQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBwcmljZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHN1bjogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBwcmVmZXJlbmNlczogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmxvd2Vye1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBkZXNjOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaW1hZ2U6IHN0cmluZztcclxuICAgIHB1YmxpYyBzdW46IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgcm9vbVR5cGU6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIHdpbmRvd3NDb3VudDogc3RyaW5nW107XHJcbiAgICBwdWJsaWMgcHJlZmVyZW5jZXM6IHN0cmluZ1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZGVzYzogc3RyaW5nLCBpbWFnZTogc3RyaW5nLCBzdW46IGJvb2xlYW4sIFxyXG4gICAgICByb29tVHlwZTogc3RyaW5nW10sIHdpbmRvd3NDb3VudDogc3RyaW5nW10sIHByZWZlcmVuY2VzOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuZGVzYyA9IGRlc2M7XHJcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICB0aGlzLnN1biA9IHN1bjtcclxuICAgIHRoaXMud2luZG93c0NvdW50ID0gd2luZG93c0NvdW50O1xyXG4gICAgdGhpcy5yb29tVHlwZSA9IHJvb21UeXBlO1xyXG4gICAgdGhpcy5wcmVmZXJlbmNlcyA9IHByZWZlcmVuY2VzO1xyXG59XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==