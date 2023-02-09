import { Component, Input } from '@angular/core';
import { Note } from 'src/app/dashboard/globals/models';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent {
    @Input() note?: Note;
}
