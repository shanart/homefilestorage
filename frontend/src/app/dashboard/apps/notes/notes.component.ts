import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Note } from '../../globals/models';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
    @ViewChild('input', { static: true }) searchInput?: ElementRef;

    notesToShow: Note[] = [];
    notes: Note[] = [
        new Note(1, "The history of", "The history of the Internet has its origin in information theory and the efforts of scientists and engineers to build and interconnect computer networks.", new Date(), 'success', [1, 2, 3]),
        new Note(2, "The Internet Protocol", "The Internet Protocol Suite, the set of rules used to communicate between networks and devices on the Internet, arose from research and development in the", new Date(), 'success', [1, 2, 3]),
        new Note(3, "United States and", "United States and involved international collaboration, particularly with researchers in the United Kingdom", new Date(), 'light', [1, 2, 3]),
        new Note(4, "Computer science was", "Computer science was an emerging discipline in the late 1950s that began to consider time-sharing between computer users, and later, the possibility of achieving this over wide area networks. J. C. R. Licklider ", new Date(), 'warning', [1, 2, 3]),
        new Note(5, "United States Department", "United States Department of Defense (DoD) Advanced Research Projects Agency (ARPA). Independently, Paul Baran at the RAND Corporation proposed a distributed", new Date(), 'light', [1, 2, 3]),
        new Note(6, "network based on", "network based on data in message blocks in the early 1960s, and Donald Davies conceived", new Date(), 'success', [1, 2, 3]),
        new Note(7, "ARPA awarded contracts", "ARPA awarded contracts in 1969 for the development of the ARPANET project, directed by Robert Taylor and managed by Lawrence Roberts.", new Date(), 'info', [1, 2, 3]),
        new Note(8, "ARPANET adopted the", "ARPANET adopted the packet switching technology proposed by Davies and Baran, underpinned by mathematical work in the early 1970s by Leonard Kleinrock at UCLA.", new Date(), 'info', [1, 2, 3]),
        new Note(9, "ARPANET adopted the", "ARPANET adopted the packet switching technology proposed by Davies and Baran, underpinned by mathematical work in the early 1970s by Leonard Kleinrock at UCLA.", new Date(), 'warning', [1, 2, 3]),
        new Note(10, "ARPA projects,", "ARPA projects, international working groups and commercial initiatives led to the development of various standards and protocols for internetworking, in which multiple separate networks", new Date(), 'info', [1, 2, 3]),
        new Note(11, "Stanford University,", "Stanford University, published research in 1974 that evolved into the Transmission Control Protocol (TCP)", new Date(), 'light', [1, 2, 3]),
        new Note(12, "The design included", "The design included concepts from the French CYCLADES project directed by Louis Pouzin. ", new Date(), 'light', [1, 2, 3]),
    ];

    ngOnInit() {
        this.notesToShow = this.notes;
    }

    onSearchInput() {
        if (this.searchInput?.nativeElement.value) {
            this.notesToShow = this.notes.filter(note => note.title.includes(this.searchInput?.nativeElement.value));
        } else {
            this.notesToShow = this.notes;
        }
    }
}
