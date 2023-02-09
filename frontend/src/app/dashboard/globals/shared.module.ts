import { NgModule } from "@angular/core";
import { FileIconComponent } from "./components/file-icon.component";
import { FileSizePipe } from "./filesize.pipe";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [
        FileSizePipe,
        FileIconComponent
    ],
    imports: [
        FontAwesomeModule,
        NgbDropdownModule
    ],
    exports: [
        FileSizePipe,
        FileIconComponent,
        FontAwesomeModule,
        NgbDropdownModule
    ]
})
export class SharedModule { }
