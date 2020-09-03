import { EventData, fromObject } from "tns-core-modules/data/observable";
import { Page } from 'tns-core-modules/ui/page';
import { Button } from "tns-core-modules/ui/button";
import { ListPicker } from "tns-core-modules/ui/list-picker/list-picker";
import { Switch } from "tns-core-modules/ui/switch";
import { Filters } from "../shared/room-service";
import { topmost, Frame } from "tns-core-modules/ui/frame";

const typeOfRoom = ["Кухня", "Гостиная", "Коридор", "Ванная", "Спальная"];
const preferences = ["не выбрано", "с запахом", "с цветком"];
const windowsCount = ["0", "1", "2", "3"];

let res: Filters = new Filters();
res.roomType = "Кухня";
res.preferences = "не выбрано";
res.sun = false;
res.windowsCount = "0";

export function onNavigatingTo(args: EventData) {

    const page = <Page>args.object;
    const vm = fromObject({
        typeOfRoom: typeOfRoom,
        preferences: preferences,
        windowsCount: windowsCount
    });
    page.bindingContext = vm;

}

export function onListPickerLoaded(fargs) {
    const listPickerComponent = fargs.object;
    listPickerComponent.on("selectedIndexChange", (args: EventData) => {
        const picker = <ListPicker>args.object;
        res.roomType = typeOfRoom[picker.selectedIndex];
    });
}

export function onListPickerLoaded1(fargs) {
    const listPickerComponent = fargs.object;
    listPickerComponent.on("selectedIndexChange", (args: EventData) => {
        const picker = <ListPicker>args.object;
        console.log(`index: ${picker.selectedIndex}; item" ${preferences[picker.selectedIndex]}`);
        res.preferences = preferences[picker.selectedIndex];
    });
}

export function onListPickerLoaded2(fargs) {
    const listPickerComponent = fargs.object;
    listPickerComponent.on("selectedIndexChange", (args: EventData) => {
        const picker = <ListPicker>args.object;
        res.windowsCount = windowsCount[picker.selectedIndex];
    });
}

export function onSwitchLoaded(argsloaded) {
    const mySwitch: Switch = <Switch> argsloaded.object;

    mySwitch.on("checkedChange", (args) => {
        let sw: Switch = <Switch> args.object;
        let isChecked = sw.checked;
        res.sun =  isChecked;
    });
}

export function navigateList(args: EventData) {
    const topmostFrame: Frame = Frame.topmost();
    topmostFrame.navigate({
        moduleName: "list/list-page",
        context: res
    })
    
}