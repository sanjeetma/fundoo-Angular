import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { NoteserviceService } from 'src/app/services/noteservice.service';

@Component({
  selector: 'app-update-note-dialog',
  templateUrl: './update-note-dialog.component.html',
  styleUrls: ['./update-note-dialog.component.scss']
})
export class UpdateNoteDialogComponent implements OnInit {
notes: any;
  constructor(public dialogRef: MatDialogRef<UpdateNoteDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: any,
              private noteService: NoteserviceService,
              private snackBar: MatSnackBar) {
                this.notes = data;
              }
  ngOnInit() {
  }
  updateNote() {
    console.log('Id', this.notes.noteId);
    // tslint:disable-next-line: max-line-length
    this.noteService.updateNote('note/updatenote', this.notes, localStorage.getItem('token')).subscribe( (result) => {
      console.log(result);
      this.snackBar.open('note updated', 'Ok', {duration: 3000});
      this.dialogRef.close();
  },
  (error) => {
    this.snackBar.open(error.error.description, 'error', {duration: 3000});
  });
  }
}
