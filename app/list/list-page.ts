import { NavigatedData, Page } from 'tns-core-modules/ui/page';
import { ListViewModel } from './list-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.actionBarHidden = false;
    page.bindingContext = new ListViewModel(page.navigationContext);
}
