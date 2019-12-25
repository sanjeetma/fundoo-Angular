import { Component, OnInit, Inject } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { NoteserviceService } from 'src/app/services/noteservice.service';

@Component({
  selector: 'app-collaboratordialogbox',
  templateUrl: './collaboratordialogbox.component.html',
  styleUrls: ['./collaboratordialogbox.component.scss']
})
export class CollaboratordialogboxComponent implements OnInit {

  notes: any;
  collaboratedUsers: any;
  emailForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<CollaboratordialogboxComponent>,
              @Inject(MAT_DIALOG_DATA) public note: any,
              private snackBar: MatSnackBar,
              private notesService: NoteserviceService) {
              this.notes = note;
              console.log('this is collaborator testing');
              console.log(this.notes);
    }

  ngOnInit() {
    this.emailForm = new FormGroup({
       email : new FormControl('')
    });
    this.getCollaboratedUsers();
  }

getCollaboratedUsers() {
  console.log( this.notes.id);
  this.notesService.getCollaboratedUserForNote('note/getCollaboratedUser?noteId=' + this.notes.noteId).subscribe(response => {
    console.log(response);
    this.collaboratedUsers = response;
  },
  error => {
     console.log(error);
  });
}

  addCollaborator(form: NgForm) {
    console.log(form);
    console.log(this.emailForm.value.email);
    // tslint:disable-next-line: max-line-length
    this.notesService.addToCollaborator('note/addcollaborator?email=' + this.emailForm.value.email + '&noteId=' + this.notes.noteId).subscribe( (result) => {
      console.log(result);
      this.snackBar.open('collborator added', 'Ok', {duration: 3000});
      this.dialogRef.close();
  },
  (error) => {
    console.log(error);
    this.snackBar.open(error.error.description, 'error', {duration: 3000});
  });
  }

  removeCollaboratedUser(email: any) {
      this.notesService.removeCollaboratorFromNote('note/removecollaborator?email=' + email + '&noteId=' + this.notes.id).subscribe(
      (response) => {
      console.log(response);
      this.snackBar.open(response.msg, 'Ok', {duration: 3000});
      this.dialogRef.close();
  },
  (error) => {
    console.log(error);
    this.snackBar.open(error.error.description, 'error', {duration: 3000});
    this.dialogRef.close();
  });

  }

}
