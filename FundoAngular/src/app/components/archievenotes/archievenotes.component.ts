import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice.service';

@Component({
  selector: 'app-archievenotes',
  templateUrl: './archievenotes.component.html',
  styleUrls: ['./archievenotes.component.scss']
})
export class ArchievenotesComponent implements OnInit {
archivenote: any;
  constructor(private noteService: NoteserviceService) { }

  ngOnInit() {
    this.noteService.getArchivedNotes('note/get_archivednotes').subscribe( response => {
      console.log(response);
      this.archivenote = response;
    },
    error => {
      console.log(error);
    });
  }
  }

