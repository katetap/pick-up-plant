import { EventData, fromObject } from "tns-core-modules/data/observable";
import { Button } from "tns-core-modules/ui/button";
import { Page } from 'tns-core-modules/ui/page';

export function navigateYes(args: EventData) {
    const button: Button = <Button>args.object;
    const page: Page = button.page;
    page.frame.navigate("yes/yes-page.xml");
}

export function navigateNo(args: EventData) {
    const button: Button = <Button>args.object;
    const page: Page = button.page;
    page.frame.navigate("no/no-page.xml");
}