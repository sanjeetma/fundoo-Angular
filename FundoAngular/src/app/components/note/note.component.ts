import { Component, OnInit, Input } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { MatDialog } from '@angular/material';
import { UpdateNoteDialogComponent } from '../update-note-dialog/update-note-dialog.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  notesList: [];
  constructor(
    private noteService: NoteserviceService, private dialog: MatDialog
    ) { }

  ngOnInit() {
    this.getAllNote();
  }
  getAllNote() {
    this.noteService.retrieveAllNote().subscribe(
      (data: any) => {
        this.notesList = data;
        console.log(this.notesList);
      }
    );
  }

}
