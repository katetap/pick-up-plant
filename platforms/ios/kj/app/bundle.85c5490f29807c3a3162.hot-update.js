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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaGFyZWQvcm9vbS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUU7QUFDWDtBQUU5RDtJQUFpQywrQkFBVTtJQVd2QztRQUFBLFlBQ0UsaUJBQU8sU0FHUjtRQVpNLFlBQU0sR0FBNEIsSUFBSSxzRkFBZSxFQUFVLENBQUM7UUFrRHZFLFVBQUksR0FBYztZQUNoQjtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsSUFBSSxFQUFFLDhEQUE4RDtnQkFDcEUsS0FBSyxFQUFFLHlCQUF5QjtnQkFDaEMsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxTQUFTLEVBQUMsUUFBUSxDQUFDO2dCQUNqRCxZQUFZLEVBQUUsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUM7Z0JBQy9CLEdBQUcsRUFBRSxJQUFJO2dCQUNULFdBQVcsRUFBRSxDQUFDLFlBQVksRUFBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO2FBQ3JEO1lBQ0Q7Z0JBQ0EsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLElBQUksRUFBRSw4REFBOEQ7Z0JBQ3BFLEtBQUssRUFBRSwwQkFBMEI7Z0JBQ2pDLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLFVBQVUsQ0FBQztnQkFDbkQsWUFBWSxFQUFFLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDO2dCQUMvQixHQUFHLEVBQUUsSUFBSTtnQkFDVCxXQUFXLEVBQUUsQ0FBQyxZQUFZLEVBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQzthQUNyRDtZQUNEO2dCQUNBLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLElBQUksRUFBRSw4REFBOEQ7Z0JBQ3BFLEtBQUssRUFBRSwwQkFBMEI7Z0JBQ2pDLFFBQVEsRUFBRSxDQUFDLE9BQU8s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SVA7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsQ0FBQzthQU5ELFVBQVEsS0FBYztZQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLDhCQUFLO2FBSVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzthQU5ELFVBQVcsR0FBNEI7WUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUF0Q2MscUJBQVMsR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQW9POUQsa0JBQUM7Q0FBQSxDQTdPZ0MsMkVBQVUsR0E2TzFDO0FBN091QjtBQStPeEI7SUFBQTtJQU1BLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBQzs7QUFFRDtJQVNJLGdCQUFZLElBQVksRUFBRSxJQUFZLEVBQUUsS0FBYSxFQUFFLEdBQVksRUFDakUsUUFBa0IsRUFBRSxZQUFzQixFQUFFLFdBQXFCO1FBQ25FLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUNELGFBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS44NWM1NDkwZjI5ODA3YzNhMzE2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSb29tU2VydmljZSBleHRlbmRzIE9ic2VydmFibGUge1xyXG4gICBwcml2YXRlIF9yZXM6IGJvb2xlYW47XHJcblxyXG4gICBwcml2YXRlIF9pdGVtczogT2JzZXJ2YWJsZUFycmF5PEZsb3dlcj4gPSBuZXcgT2JzZXJ2YWJsZUFycmF5PEZsb3dlcj4oKTtcclxuXHJcbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogUm9vbVNlcnZpY2UgeyBcclxuICAgIHJldHVybiBSb29tU2VydmljZS5faW5zdGFuY2U7IFxyXG4gICAgfSBcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFJvb21TZXJ2aWNlID0gbmV3IFJvb21TZXJ2aWNlKCk7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICBzdXBlcigpO1xyXG4gICAgICAgIFJvb21TZXJ2aWNlLl9pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5faXRlbXMucHVzaCh0aGlzLmRhdGEpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjaGVja01hc3MobWFzczogc3RyaW5nW10sIHJlczogc3RyaW5nKTogYm9vbGVhbntcclxuICAgICAgbGV0IGNoZWNrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgIG1hc3MuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBpZiAoZWxlbWVudCA9PSByZXMpXHJcbiAgICAgICAgICBjaGVjayA9IHRydWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVybiBjaGVjaztcclxuICAgIH1cclxuXHJcbiAgIGZpbHRlcihyZXM6IEZpbHRlcnMpOiBPYnNlcnZhYmxlQXJyYXk8Rmxvd2VyPiB7XHJcbiAgICBsZXQgaXRlbXMxOiBPYnNlcnZhYmxlQXJyYXk8Rmxvd2VyPiA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8Rmxvd2VyPigpOyAgXHJcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBpZihlbGVtZW50LnN1biA9PSByZXMuc3VuICYmIHRoaXMuY2hlY2tNYXNzKGVsZW1lbnQucm9vbVR5cGUsIHJlcy5yb29tVHlwZSkgJiYgXHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tNYXNzKGVsZW1lbnQud2luZG93c0NvdW50LCByZXMud2luZG93c0NvdW50KSAmJiB0aGlzLmNoZWNrTWFzcyhlbGVtZW50LnByZWZlcmVuY2VzLCByZXMucHJlZmVyZW5jZXMpKXtcclxuICAgICAgICAgICAgaXRlbXMxLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBpdGVtczE7XHJcbiAgfVxyXG5cclxuICAgIHNldCByZXModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgdGhpcy5fcmVzID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHJlcygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3JlcztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaXRlbXMgKHZhbDogT2JzZXJ2YWJsZUFycmF5PEZsb3dlcj4pIHtcclxuICAgICAgdGhpcy5faXRlbXMgPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGl0ZW1zICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGE6IEZsb3dlciBbXSA9IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0KHRg9C60LrRg9C70LXQvdGC0YtcIixcclxuICAgICAgICBkZXNjOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0LzQtdGB0YLQtSwg0L/QvtC70LjQstCw0YLRjCAxINGA0LDQtyDQsiDQvdC10LTQtdC70Y5cIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/RgdGD0LrQutGD0LvQtdC90YLRiy5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JPQvtGB0YLQuNC90LDRj1wiLFwi0JrQvtGA0LjQtNC+0YBcIixcItCS0LDQvdC90LDRj1wiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjBcIixcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLQvdC1INCy0YvQsdGA0LDQvdC+XCIsXCLQsdC10Lcg0LfQsNC/0LDRhdCwXCIsIFwi0LHQtdC3INGG0LLQtdGC0LrQsFwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0JrQuNC/0LDRgNC40YHQvtCy0LjQulwiLFxyXG4gICAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDQvNC10YHRgtC1LCDQv9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLFxyXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9C60LjQv9Cw0YDQuNGB0L7QstC40LouanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCT0L7RgdGC0LjQvdCw0Y9cIixcItCa0L7RgNC40LTQvtGAXCIsXCLQodC/0LDQu9GM0L3QsNGPXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMFwiLFwiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IHRydWUsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItC90LUg0LLRi9Cx0YDQsNC90L5cIixcItCx0LXQtyDQt9Cw0L/QsNGF0LBcIiwgXCLQsdC10Lcg0YbQstC10YLQutCwXCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQpdCw0LzQtdC00L7RgNC10Y8g0Y3Qu9C10LPQsNC90YLRgVwiLFxyXG4gICAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDQvNC10YHRgtC1LCDQv9C+0LvQuNCy0LDRgtGMIDEg0YDQsNC3INCyINC90LXQtNC10LvRjlwiLFxyXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9GB0LDQvdGB0LXQstC40LXRgNC40Y8uanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCT0L7RgdGC0LjQvdCw0Y9cIixcItCa0L7RgNC40LTQvtGAXCIsXCLQktCw0L3QvdCw0Y9cIixcItCh0L/QsNC70YzQvdCw0Y9cIl0sXHJcbiAgICAgICAgd2luZG93c0NvdW50OiBbXCIxXCIsXCIyXCIsXCIzXCJdLFxyXG4gICAgICAgIHN1bjogdHJ1ZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiLFwi0LHQtdC3INC30LDQv9Cw0YXQsFwiLCBcItCx0LXQtyDRhtCy0LXRgtC60LBcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCh0LDQvdGB0LXQstC40LXRgNC40Y9cIixcclxuICAgICAgICBkZXNjOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0LzQtdGB0YLQtSwg0L/QvtC70LjQstCw0YLRjCAxINGA0LDQtyDQsiDQvdC10LTQtdC70Y5cIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/RhdCw0LzQtdC00L7RgNC10Y8uanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCT0L7RgdGC0LjQvdCw0Y9cIixcItCa0L7RgNC40LTQvtGAXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IHRydWUsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItC90LUg0LLRi9Cx0YDQsNC90L5cIixcItCx0LXQtyDQt9Cw0L/QsNGF0LBcIiwgXCLQsdC10Lcg0YbQstC10YLQutCwXCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQmtCw0LrRgtGD0YFcIixcclxuICAgICAgICBkZXNjOiBcItCf0L7Qu9C40LLQsNGC0YwgMSDRgNCw0Lcg0LIg0L3QtdC00LXQu9GOXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LrQsNC60YLRg9GBLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQmtC+0YDQuNC00L7RgFwiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjBcIixcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiBmYWxzZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiLFwi0LHQtdC3INC30LDQv9Cw0YXQsFwiLCBcItCx0LXQtyDRhtCy0LXRgtC60LBcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCT0YDRkdC90YHQutCw0L1cIixcclxuICAgICAgICBkZXNjOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0YHQvtC70L3QtdGH0L3QvtC8INC80LXRgdGC0LUgLCDRh9Cw0YHRgtGL0Lkg0L/QvtC70LjQslwiLFxyXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9Cz0YDQtdC90YHQutCw0L0uanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCT0L7RgdGC0LjQvdCw0Y9cIixcItCa0L7RgNC40LTQvtGAXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IHRydWUsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItC90LUg0LLRi9Cx0YDQsNC90L5cIixcItCx0LXQtyDQt9Cw0L/QsNGF0LBcIiwgXCLQsdC10Lcg0YbQstC10YLQutCwXCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQkNC70L7QtSDQktC10YDQsFwiLFxyXG4gICAgICAgIGRlc2M6IFwi0J/RgNC10LTQv9C+0YfQuNGC0LDQtdGCINGC0LXQv9C70YPRjiDRgdGA0LXQtNGDLNC+0LPRgNCw0L3QuNGH0LXQvdC90YvQuSDQv9C+0LvQuNCyXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LDQu9C+0LUg0LLQtdGA0LAuanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCT0L7RgdGC0LjQvdCw0Y9cIixcItCa0L7RgNC40LTQvtGAXCIsXCLQodC/0LDQu9GM0L3QsNGPXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IHRydWUsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItC90LUg0LLRi9Cx0YDQsNC90L5cIixcItCx0LXQtyDQt9Cw0L/QsNGF0LBcIiwgXCLQsdC10Lcg0YbQstC10YLQutCwXCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQkdGA0L7QvNC10LvQuNGPXCIsXHJcbiAgICAgICAgZGVzYzogXCLQntC/0YDRi9GB0LrQuNCy0LDQudGC0LUg0YDQsNC3INCyINC90LXQtNC10LvRjiwg0L/QvtC70LjQstCw0LnRgtC1INCyINGA0L7Qt9C10YLQutGDINGA0LDRgdGC0LXQvdC40Y8sINGD0LzQtdGA0LXQvdC90YvQuSDQv9C+0LvQuNCyXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LHRgNC+0LzQtdC70LjRjy5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JLQsNC90L3QsNGPXCIsXCLQmtGD0YXQvdGPXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IHRydWUsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItGBINC30LDQv9Cw0YXQvtC8XCIsIFwi0YEg0YbQstC10YLQutC+0LxcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCX0LDQvdGC0LXQtNC10YHQutC40Y9cIixcclxuICAgICAgICBkZXNjOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0YHQvtC70L3QtdGH0L3QvtC8INC80LXRgdGC0LUsINGD0LzQtdGA0LXQvdC90YvQuSDQv9C+0LvQuNCyXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LfQsNC90YLQtdC00LXRgdC60LjRjy5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JPQvtGB0YLQuNC90LDRj1wiLFwi0JrQvtGA0LjQtNC+0YBcIixcItCh0L/QsNC70YzQvdCw0Y9cIixcItCS0LDQvdC90LDRj1wiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLRgSDQt9Cw0L/QsNGF0L7QvFwiLCBcItGBINGG0LLQtdGC0LrQvtC8XCJdXHJcbiAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQktGA0LjQtdC30LjRj1wiLFxyXG4gICAgICAgIGRlc2M6IFwi0J/QvtC70LjQstCw0YLRjCAxINGA0LDQt9CwINCyINC90LXQtNC10LvRjlwiLFxyXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9Cy0YDQuNC10LfQuNGPLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiLFwi0KHQv9Cw0LvRjNC90LDRj1wiLFwi0JLQsNC90L3QsNGPXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IHRydWUsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItGBINC30LDQv9Cw0YXQvtC8XCIsIFwi0YEg0YbQstC10YLQutC+0LxcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCl0YDQuNC30LDQvdGC0LXQvNCwXCIsXHJcbiAgICAgICAgZGVzYzogXCLQoNCw0LfQvNC10YnQsNGC0Ywg0LIg0YXQvtGA0L7RiNC+INC+0YHQstC10YnQtdC90L3QvtC8INGB0L7Qu9C90LXRh9C90L7QvCDQvNC10YHRgtC1LCDRg9C80LXRgNC10L3QvdGL0Lkg0L/QvtC70LjQslwiLFxyXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL9GF0YDQuNC30LDQvdGC0LXQvNCwLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLRgSDQt9Cw0L/QsNGF0L7QvFwiLCBcItGBINGG0LLQtdGC0LrQvtC8XCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQpNCw0LvQtdC90L7Qv9GB0LjRgVwiLFxyXG4gICAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDRgdC+0LvQvdC10YfQvdC+0Lwg0LzQtdGB0YLQtSwg0L/QvtC00LTQtdGA0LbQuNCy0LDQudGC0LUg0LLQu9Cw0LPRgywg0L/QvtCz0YDRg9C20LDRgtGMINCyINC10LzQutC+0YHRgtGMINGBINCy0L7QtNC+0LlcIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/RhNCw0LvQtdC90L7Qv9GB0LjRgS5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JPQvtGB0YLQuNC90LDRj1wiLFwi0JrQvtGA0LjQtNC+0YBcIixcItCh0L/QsNC70YzQvdCw0Y9cIixcItCS0LDQvdC90LDRj1wiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLRgSDQt9Cw0L/QsNGF0L7QvFwiLCBcItGBINGG0LLQtdGC0LrQvtC8XCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQotC40LvQu9Cw0L3QtNGB0LjRj1wiLFxyXG4gICAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINC30LDRgtC10L3QtdC90L3QvtC8INC80LXRgdGC0LUsINGD0LzQtdGA0LXQvdC90YvQuSDQv9C+0LvQuNCyXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0YLQuNC70LvQsNC90LTRgdC40Y8uanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCT0L7RgdGC0LjQvdCw0Y9cIixcItCa0L7RgNC40LTQvtGAXCIsXCLQktCw0L3QvdCw0Y9cIixcItCh0L/QsNC70YzQvdCw0Y9cIl0sXHJcbiAgICAgICAgd2luZG93c0NvdW50OiBbXCIwXCJdLFxyXG4gICAgICAgIHN1bjogZmFsc2UsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItGBINC30LDQv9Cw0YXQvtC8XCIsIFwi0YEg0YbQstC10YLQutC+0LxcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCk0LjQutGD0YEg0LzQuNC60YDQvtC60LDRgNC/0LAg0LPQuNC90YHQtdC90LNcIixcclxuICAgICAgICBkZXNjOiBcItCj0LzQtdGA0LXQvdC90YvQuSDQv9C+0LvQuNCyXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0YTQuNC60YPRgSDQvNC40LrRgNC+0LrQsNGA0L/QsCDQs9C40L3RgdC10L3Qsy5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JPQvtGB0YLQuNC90LDRj1wiLFwi0JrQvtGA0LjQtNC+0YBcIl0sXHJcbiAgICAgICAgd2luZG93c0NvdW50OiBbXCIwXCIsXCIxXCIsXCIyXCIsXCIzXCJdLFxyXG4gICAgICAgIHN1bjogZmFsc2UsXHJcbiAgICAgICAgcHJlZmVyZW5jZXM6IFtcItC90LUg0LLRi9Cx0YDQsNC90L5cIixcItCx0LXQtyDQt9Cw0L/QsNGF0LBcIiwgXCLQsdC10Lcg0YbQstC10YLQutCwXCJdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB7XHJcbiAgICAgICAgbmFtZTogXCLQlNGA0LDRhtC10L3QsFwiLFxyXG4gICAgICAgIGRlc2M6IFwi0J/QvtC80LXRgdGC0LjRgtGMINGG0LLQtdGC0L7QuiDQsiDQstCw0LfRgyDRgSDRh9C40YHRgtC+0Lkg0LLQvtC00L7QuSAo0YPRgNC+0LLQtdC90Ywg0LLQvtC00YsgNSDRgdC8KSwg0LzQtdC90Y/RgtGMINCy0L7QtNGDINC+0LTQuNC9INGA0LDQtyDQsiDQtNCy0LUg0L3QtdC00LXQu9C4XCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LTRgNCw0YbQtdC90LAuanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCS0LDQvdC90LDRj1wiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjBcIixcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiBmYWxzZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiLFwi0LHQtdC3INC30LDQv9Cw0YXQsFwiLCBcItCx0LXQtyDRhtCy0LXRgtC60LBcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCT0LjQvNCw0LvQsNC50LDQvNC40LrRgVwiLFxyXG4gICAgICAgIGRlc2M6IFwi0KPQvNC10YDQtdC90L3Ri9C5INC/0L7Qu9C40LJcIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/Qs9C40LzQsNC70LDQudCw0LzQuNC60YEuanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCa0YPRhdC90Y9cIixcItCT0L7RgdGC0LjQvdCw0Y9cIixcItCa0L7RgNC40LTQvtGAXCJdLFxyXG4gICAgICAgIHdpbmRvd3NDb3VudDogW1wiMFwiLFwiMVwiLFwiMlwiLFwiM1wiXSxcclxuICAgICAgICBzdW46IGZhbHNlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLQvdC1INCy0YvQsdGA0LDQvdC+XCIsXCLQsdC10Lcg0LfQsNC/0LDRhdCwXCIsIFwi0LHQtdC3INGG0LLQtdGC0LrQsFwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0KjQu9GO0LzQsdC10YDQs9C10YDQsFwiLFxyXG4gICAgICAgIGRlc2M6IFwi0KDQsNC30LzQtdGJ0LDRgtGMINCyINGF0L7RgNC+0YjQviDQvtGB0LLQtdGJ0LXQvdC90L7QvCDRgdC+0LvQvdC10YfQvdC+0Lwg0LzQtdGB0YLQtSwg0YPQvNC10YDQtdC90L3Ri9C5INC/0L7Qu9C40LJcIixcclxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy/RiNC70Y7QvNCx0LXRgNCz0LXRgNCwLmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiB0cnVlLFxyXG4gICAgICAgIHByZWZlcmVuY2VzOiBbXCLQvdC1INCy0YvQsdGA0LDQvdC+XCIsXCLQsdC10Lcg0LfQsNC/0LDRhdCwXCIsIFwiYyDRhtCy0LXRgtC60L7QvFwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwi0JrRgNC10YHRgtC+0LLQvdC40Log0YTQuNC60YPRgdC+0LLQuNC00L3Ri9C5XCIsXHJcbiAgICAgICAgZGVzYzogXCLQn9C+0LvQuNCy0LDRgtGMIDIg0YDQsNC30LAg0LIg0L3QtdC00LXQu9GOXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LrRgNC10YHRgtC+0LLQvdC40Log0YTQuNC60YPRgdC+0LLQuNC00L3Ri9C5LmpwZ1wiLFxyXG4gICAgICAgIHJvb21UeXBlOiBbXCLQmtGD0YXQvdGPXCIsXCLQk9C+0YHRgtC40L3QsNGPXCIsXCLQmtC+0YDQuNC00L7RgFwiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjFcIixcIjJcIixcIjNcIl0sXHJcbiAgICAgICAgc3VuOiBmYWxzZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiLFwi0LHQtdC3INC30LDQv9Cw0YXQsFwiLCBcItCx0LXQtyDRhtCy0LXRgtC60LBcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCT0LXQudGF0LXRgNCwXCIsXHJcbiAgICAgICAgZGVzYzogXCLQn9C+0LvQuNCy0LDRgtGMIDIg0YDQsNC30LAg0LIg0L3QtdC00LXQu9GOXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0LPQtdC50YXQtdGA0LAuanBnXCIsXHJcbiAgICAgICAgcm9vbVR5cGU6IFtcItCS0LDQvdC90LDRj1wiLFwi0JrRg9GF0L3Rj1wiXSxcclxuICAgICAgICB3aW5kb3dzQ291bnQ6IFtcIjBcIl0sXHJcbiAgICAgICAgc3VuOiBmYWxzZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiLFwi0LHQtdC3INC30LDQv9Cw0YXQsFwiLCBcItCx0LXQtyDRhtCy0LXRgtC60LBcIl1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICBuYW1lOiBcItCo0LXRhNGE0LvQtdGA0LAg0LDRgNCx0L7RgNC40LrQvtC70LBcIixcclxuICAgICAgICBkZXNjOiBcItCg0LDQt9C80LXRidCw0YLRjCDQsiDRhdC+0YDQvtGI0L4g0L7RgdCy0LXRidC10L3QvdC+0Lwg0YHQvtC70L3QtdGH0L3QvtC8INC80LXRgdGC0LUsINC+0LPRgNCw0L3QuNGH0LXQvdC90YvQuSDQv9C+0LvQuNCyXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMv0YjQtdGE0YTQu9C10YDQsCDQsNGA0LHQvtGA0LjQutC+0LvQsC5qcGdcIixcclxuICAgICAgICByb29tVHlwZTogW1wi0JrRg9GF0L3Rj1wiLFwi0JPQvtGB0YLQuNC90LDRj1wiLFwi0JrQvtGA0LjQtNC+0YBcIl0sXHJcbiAgICAgICAgd2luZG93c0NvdW50OiBbXCIxXCIsXCIyXCIsXCIzXCJdLFxyXG4gICAgICAgIHN1bjogdHJ1ZSxcclxuICAgICAgICBwcmVmZXJlbmNlczogW1wi0L3QtSDQstGL0LHRgNCw0L3QvlwiLFwi0LHQtdC3INC30LDQv9Cw0YXQsFwiLCBcItCx0LXQtyDRhtCy0LXRgtC60LBcIl1cclxuICAgICAgICB9XHJcbiAgXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlcnMge1xyXG4gICAgcHVibGljIHJvb21UeXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgd2luZG93c0NvdW50OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcHJpY2U6IHN0cmluZztcclxuICAgIHB1YmxpYyBzdW46IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgcHJlZmVyZW5jZXM6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZsb3dlcntcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGVzYzogc3RyaW5nO1xyXG4gICAgcHVibGljIGltYWdlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc3VuOiBib29sZWFuO1xyXG4gICAgcHVibGljIHJvb21UeXBlOiBzdHJpbmdbXTtcclxuICAgIHB1YmxpYyB3aW5kb3dzQ291bnQ6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIHByZWZlcmVuY2VzOiBzdHJpbmdbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGRlc2M6IHN0cmluZywgaW1hZ2U6IHN0cmluZywgc3VuOiBib29sZWFuLCBcclxuICAgICAgcm9vbVR5cGU6IHN0cmluZ1tdLCB3aW5kb3dzQ291bnQ6IHN0cmluZ1tdLCBwcmVmZXJlbmNlczogc3RyaW5nW10pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmRlc2MgPSBkZXNjO1xyXG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgdGhpcy5zdW4gPSBzdW47XHJcbiAgICB0aGlzLndpbmRvd3NDb3VudCA9IHdpbmRvd3NDb3VudDtcclxuICAgIHRoaXMucm9vbVR5cGUgPSByb29tVHlwZTtcclxuICAgIHRoaXMucHJlZmVyZW5jZXMgPSBwcmVmZXJlbmNlcztcclxufVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=