import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../globals/shared.module';
import { NotesRoutingModule } from './notes-routing.module';
import { NotesComponent } from './notes.component';
import { NoteItemComponent } from './note-item/note-item.component';

@NgModule({
    declarations: [
        NotesComponent,
        NoteItemComponent
    ],
    imports: [
        CommonModule,
        NotesRoutingModule,
        SharedModule
    ],
    providers: []
})
export class NotesModule { }

