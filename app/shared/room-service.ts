import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Observable } from "tns-core-modules/data/observable";

export class RoomService extends Observable {
   private _res: boolean;

   private _items: ObservableArray<Flower> = new ObservableArray<Flower>();

    static getInstance(): RoomService { 
    return RoomService._instance; 
    } 

    private static _instance: RoomService = new RoomService();
    
    constructor() {
      super();
        RoomService._instance = this;
        this._items.push(this.data);
    }
    
    checkMass(mass: string[], res: string): boolean{
      let check: boolean = false;
      mass.forEach(element => {
        if (element == res)
          check = true;
      })
      return check;
    }

   filter(res: Filters): ObservableArray<Flower> {
    let items1: ObservableArray<Flower> = new ObservableArray<Flower>();  
    this._items.forEach(element => {
      if(element.sun == res.sun && this.checkMass(element.roomType, res.roomType) && this.checkMass(element.windowsCount, res.windowsCount) && this.checkMass(element.preferences, res.preferences)){
            items1.push(element);
         }
      });
      return items1;
  }

    set res(value: boolean) {
      this._res = value;
    }

    get res() {
      return this._res;
    }

    set items (val: ObservableArray<Flower>) {
      this._items = val;
    }

    get items () {
      return this._items;
    }

    data: Flower [] = [
      {
        name: "Суккуленты",
        desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю",
        image: "~/images/суккуленты.jpg",
        roomType: ["Кухня","Гостиная","Коридор","Ванная"],
        windowsCount: ["0","1","2","3"],
        sun: true,
        preferences: ["не выбрано"]
        },
        {
        name: "Кипарисовик",
        desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю",
        image: "~/images/кипарисовик.jpg",
        roomType: ["Кухня","Гостиная","Коридор","Спальная"],
        windowsCount: ["0","1","2","3"],
        sun: true,
        preferences: ["не выбрано"]
        },
        {
        name: "Хамедорея элегантс",
        desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю",
        image: "~/images/сансевиерия.jpg",
        roomType: ["Кухня","Гостиная","Коридор","Ванная","Спальная"],
        windowsCount: ["1","2","3"],
        sun: true,
        preferences: ["не выбрано"]
        },
        {
        name: "Сансевиерия",
        desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю",
        image: "~/images/хамедорея.jpg",
        roomType: ["Кухня","Гостиная","Коридор"],
        windowsCount: ["1","2","3"],
        sun: true,
        preferences: ["не выбрано"]
        },
        {
        name: "Кактус",
        desc: "Поливать 1 раз в неделю",
        image: "~/images/кактус.jpg",
        roomType: ["Кухня","Коридор"],
        windowsCount: ["0","1","2","3"],
        sun: false,
        preferences: ["не выбрано"]
        },
        {
        name: "Грёнскан",
        desc: "Размещать в хорошо освещенном солнечном месте , частый полив",
        image: "~/images/гренскан.jpg",
        roomType: ["Кухня","Гостиная","Коридор"],
        windowsCount: ["1","2","3"],
        sun: true,
        preferences: ["не выбрано"]
        },
        {
        name: "Алое Вера",
        desc: "Предпочитает теплую среду,ограниченный полив",
        image: "~/images/алое вера.jpg",
        roomType: ["Кухня","Гостиная","Коридор","Спальная"],
        windowsCount: ["1","2","3"],
        sun: true,
        preferences: ["не выбрано"]
        },
        {
        name: "Бромелия",
        desc: "Опрыскивайте раз в неделю, поливайте в розетку растения, умеренный полив",
        image: "~/images/бромелия.jpg",
        roomType: ["Ванная","Кухня"],
        windowsCount: ["1","2","3"],
        sun: true,
        preferences: ["с запахом", "с цветком"]
        },
        {
        name: "Зантедеския",
        desc: "Размещать в хорошо освещенном солнечном месте, умеренный полив",
        image: "~/images/зантедеския.jpg",
        roomType: ["Кухня","Гостиная","Коридор","Спальная","Ванная"],
        windowsCount: ["1","2","3"],
        sun: true,
        preferences: ["с запахом", "с цветком"]
        
        },
        {
        name: "Вриезия",
        desc: "Поливать 1 раза в неделю",
        image: "~/images/вриезия.jpg",
        roomType: ["Кухня","Гостиная","Коридор","Спальная","Ванная"],
        windowsCount: ["1","2","3"],
        sun: true,
        preferences: ["с запахом", "с цветком"]
        },
        {
        name: "Хризантема",
        desc: "Размещать в хорошо освещенном солнечном месте, умеренный полив",
        image: "~/images/хризантема.jpg",
        roomType: ["Кухня","Гостиная","Коридор"],
        windowsCount: ["1","2","3"],
        sun: true,
        preferences: ["с запахом", "с цветком"]
        },
        {
        name: "Фаленопсис",
        desc: "Размещать в хорошо освещенном солнечном месте, поддерживайте влагу, погружать в емкость с водой",
        image: "~/images/фаленопсис.jpg",
        roomType: ["Кухня","Гостиная","Коридор","Спальная","Ванная"],
        windowsCount: ["1","2","3"],
        sun: true,
        preferences: ["с запахом", "с цветком"]
        },
        {
        name: "Тилландсия",
        desc: "Размещать в затененном месте, умеренный полив",
        image: "~/images/тилландсия.jpg",
        roomType: ["Кухня","Гостиная","Коридор","Ванная","Спальная"],
        windowsCount: ["0"],
        sun: false,
        preferences: ["с запахом", "с цветком"]
        },
        {
        name: "Фикус микрокарпа гинсенг",
        desc: "Умеренный полив",
        image: "~/images/фикус микрокарпа гинсенг.jpg",
        roomType: ["Кухня","Гостиная","Коридор"],
        windowsCount: ["0","1","2","3"],
        sun: false,
        preferences: ["не выбрано"]
        },
        
        {
        name: "Драцена",
        desc: "Поместить цветок в вазу с чистой водой (уровень воды 5 см), менять воду один раз в две недели",
        image: "~/images/драцена.jpg",
        roomType: ["Кухня","Ванная"],
        windowsCount: ["0","1","2","3"],
        sun: false,
        preferences: ["не выбрано"]
        },
        {
        name: "Гималайамикс",
        desc: "Умеренный полив",
        image: "~/images/гималайамикс.jpg",
        roomType: ["Кухня","Гостиная","Коридор"],
        windowsCount: ["0","1","2","3"],
        sun: false,
        preferences: ["не выбрано"]
        },
        {
        name: "Шлюмбергера",
        desc: "Размещать в хорошо освещенном солнечном месте, умеренный полив",
        image: "~/images/шлюмбергера.jpg",
        roomType: ["Кухня","Гостиная","Коридор"],
        windowsCount: ["1","2","3"],
        sun: true,
        preferences: ["c цветком"]
        },
        {
        name: "Крестовник фикусовидный",
        desc: "Поливать 2 раза в неделю",
        image: "~/images/крестовник фикусовидный.jpg",
        roomType: ["Кухня","Гостиная","Коридор"],
        windowsCount: ["1","2","3"],
        sun: false,
        preferences: ["не выбрано"]
        },
        {
        name: "Гейхера",
        desc: "Поливать 2 раза в неделю",
        image: "~/images/гейхера.jpg",
        roomType: ["Ванная","Кухня"],
        windowsCount: ["0"],
        sun: false,
        preferences: ["не выбрано"]
        },
        {
        name: "Шеффлера арборикола",
        desc: "Размещать в хорошо освещенном солнечном месте, ограниченный полив",
        image: "~/images/шеффлера арборикола.jpg",
        roomType: ["Кухня","Гостиная","Коридор"],
        windowsCount: ["1","2","3"],
        sun: true,
        preferences: ["не выбрано"]
        }
  ];
}

export class Filters {
    public roomType: string;
    public windowsCount: string;
    public price: string;
    public sun: boolean;
    public preferences: string;
}

export class Flower{
    public name: string;
    public desc: string;
    public image: string;
    public sun: boolean;
    public roomType: string[];
    public windowsCount: string[];
    public preferences: string[];

    constructor(name: string, desc: string, image: string, sun: boolean, 
      roomType: string[], windowsCount: string[], preferences: string[]) {
    this.name = name;
    this.desc = desc;
    this.image = image;
    this.sun = sun;
    this.windowsCount = windowsCount;
    this.roomType = roomType;
    this.preferences = preferences;
}
}
