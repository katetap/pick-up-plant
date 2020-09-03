import { RadDataForm } from "nativescript-ui-dataform";
const Observable = require("tns-core-modules/data/observable").Observable;
//import { RoomService } from "../shared/room-service";


export class YesViewModel extends Observable {

   // private _roomService: RoomService;

    constructor() {
        super();
        //this._roomService = RoomService.getInstance();

    
        //this.Room = new Room("Не выбрано", 0 , 0, "да", "Не выбрано");

    }
/*
    set Room(value: Room) {
        this.set("_Room", value);
    }

    get Room(): Room {
        return this.get("_Room");
    }*/
}
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
