import { ObservableProperty } from "../observable-property-decorator";
const Observable = require("tns-core-modules/data/observable").Observable;
import {  RadListView } from "nativescript-ui-listview";


export class NoViewModel extends Observable {
    private showFavouritesFilter: boolean = false;


    items: { name: string, desc: string, price: string, image: string}[] = [
        { name: "Суккуленты", desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю", price: "300", image: "~/images/суккуленты.jpg" },
        { name: "Кипарисовик", desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю", price: "200", image: "~/images/кипарисовик.jpg" },
        { name: "Хамедорея элегантс", desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю", price: "350", image: "~/images/сансевиерия.jpg"},
        { name: "Сансевиерия", desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю", price: "400", image: "~/images/хамедорея.jpg" },
        { name: "Кактус", desc: "Размещать в хорошо освещенном месте, поливать 1 раз в неделю", price: "500", image: "~/images/кактус.jpg" }
    ];

  

    constructor() {
        super();
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