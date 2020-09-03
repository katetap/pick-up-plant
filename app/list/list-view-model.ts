import { ObservableProperty } from "../observable-property-decorator";
const Observable = require("tns-core-modules/data/observable").Observable;
import { isIOS } from "tns-core-modules/platform";
import {  RadListView } from "nativescript-ui-listview";
import { RoomService, Filters } from "../shared/room-service";


export class ListViewModel {
    private showFavouritesFilter: boolean = false;

    private _roomService: RoomService = new RoomService();
    public items;
    public roomType;

    constructor(res: Filters) {
        this._roomService = RoomService.getInstance();
        this.items = this._roomService.filter(res);
        this.roomType = res.roomType;
    }

    toggleFavouritesFilter(args) {
        const image = args.object;
        const listView = <RadListView>image.page.getViewById("list-view");

        if (this.showFavouritesFilter) {
            listView.filteringFunction = undefined;
            image.src = "~/images/heart_line.jpg";
            this.showFavouritesFilter = false;
        } else {
            listView.filteringFunction = (item) => {
                return item.favourite;
            };
            image.src = "~/images/heart_solid.jpg";
            this.showFavouritesFilter = true;
        }
    }

    toggleFavourite(args) {
        const image = args.object;
        const listView = <RadListView>image.page.getViewById("list-view");
        const itemData = image.bindingContext;
        if (itemData.favourite) {
            image.src = "~/images/heart_outline_white.png";
            itemData.favourite = false;
        } else {
            image.src = "~/images/heart_solid_violet.png";
            itemData.favourite = true;
        }

    }
}