import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-trashnotes',
  templateUrl: './trashnotes.component.html',
  styleUrls: ['./trashnotes.component.scss']
})
export class TrashnotesComponent implements OnInit {
notes: any;
  constructor(private noteService: NoteserviceService, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.noteService.getTrash('note/get_trash').subscribe(response => {
      console.log(response);
      this.notes = response;
  },
  error => {
    console.log(error);
  });
  }
  deleteNote(noteId: any) {
    this.noteService.deleteNote('note/delete_note?noteId=' + noteId).subscribe(Response => {
      console.log(Response);
      this.snackbar.open('note delete parmanently', 'ok', {duration: 3000});
    },
      error => {
        console.log(error);
        this.snackbar.open(error.error.description, 'error', {duration: 3000});
      }
    );
  }
  addToTrash(noteId: any) {
    this.noteService.archive('note/updatetrash?id=' + noteId).subscribe(Response => {
      console.log(Response);
      this.snackbar.open('note restored', 'ok', {duration: 3000});
    },
      error => {
        console.log(error);
        this.snackbar.open(error.error.description, 'error', {duration: 3000});
      }
    );
  }
}
