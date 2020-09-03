import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import { NoViewModel } from './no-view-model';

export function pageLoaded(args: EventData) {
    let page = <Page>args.object;
    page.bindingContext = new NoViewModel();
}