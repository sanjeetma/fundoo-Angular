import { Component, OnInit, Inject, Input } from '@angular/core';

import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { LabelService } from 'src/app/services/label.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar, MatDialog } from '@angular/material';
import { formatDate } from '@angular/common';
import { CollaboratordialogboxComponent } from '../collaboratordialogbox/collaboratordialogbox.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
popup = false;
 labelList: [];
 inputdata = '';
 labelForm: FormGroup;
 public dateTime = '';

 
 @Input() noteData: any;

  constructor(
    private noteService: NoteserviceService,
    private labelService: LabelService, private snackbar : MatSnackBar,
    public dialog : MatDialog
    ) { }

  ngOnInit() {
    this.getAllLabel();
    this.labelForm = new FormGroup({
      label: new FormControl('')});
  }
  colors= [
    [{ name: 'Blue', value: 'blue' }, { name: 'green', value: 'green' }, { name: 'Yellow', value: 'yellow' }, { name: 'skyblue', value: 'skyblue' }],
    [{ name: 'Brown', value: 'brown' }, { name: 'orange', value: 'orange' }, { name: 'pink', value: 'pink' }, { name: 'white', value: 'white' }],
    [{ name: 'lightblue', value: 'lightblue' }, { name: 'red', value: 'red' }, { name: 'aqua', value: 'aqua' }, { name: 'silver', value: 'silver' }]
  ];

  archive(notes: any) {
    this.noteService.archive('note/updatearchive?noteId=' + notes).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      });
  }
  getLabel() {
    this.popup = !this.popup;
  }
  closeLabel() {
    this.popup = !this.popup;
  }
  getAllLabel() {
    this.labelService.retrieveAllLabel().subscribe (
      (data: any) => {
        this.labelList = data;
      }
    );
  }
  onPost(label: any) {
    console.log(label);
    this.labelService.addlabeltonote('note/mappingNoteLabel?noteId=' + this.noteData.noteId, label).subscribe(
      (response: any) => {
        console.log(response.statusMessage );
      },
      (error: any) => {
        console.log('in error' , error.error.description);

       } );
  }
  onAddLabelToNote(){
    console.log(this.labelForm.value);
    this.labelService.addlabeltonote('note/mappingNoteLabel?noteId=' + this.noteData.noteId, this.labelForm.value).subscribe(
      (response: any) => {
        console.log(response.statusMessage );
      },
      (error: any) => {
        console.log('in error');

       } );
  }
  addToTrash(noteId: any) {
    console.log(noteId);
    this.noteService.archive('note/updatetrash?id=' + noteId).subscribe(Response => {
      console.log(Response);
      this.snackbar.open('note Trashed', 'ok', {duration: 3000});
    },
      error => {
        console.log(error);
        this.snackbar.open(error.error.description, 'error', {duration: 3000});
      }
    );
  }
  changeColor(color: any, notes: any) {
    this.noteService.changeColor('note/change-color/' + color + '?noteId=' + notes.noteId).subscribe(
      (response) => {
        console.log();
        console.log(response);
      },
      (error) => {
        console.log(error);
      });
  }
  reminder(selectedDateTime, noteId: any) {
    const data = '';
    console.log(selectedDateTime);
    console.log(this.dateTime);
    const dateNow = new Date();
    let today: any;

    if (selectedDateTime == 'today') {
      today = formatDate(dateNow, 'yyyy-MM-ddT20:00:00', 'en-IND', '+5:30');
      console.log('todays DateTime : ', today);
    } else if (selectedDateTime == 'tomorrow') {
      today = formatDate(dateNow.setDate(dateNow.getDate() + 1), 'yyyy-MM-ddT08:00:00', 'en-IND', '+5:30');
      console.log('tomorrow DateTime : ', today);
    } else if (selectedDateTime == 'next-week') {
      today = formatDate(dateNow.setDate(dateNow.getDate() + 7), 'yyyy-MM-ddT20:00:00', 'en-IND', '+5:30');
    } else {
      console.log(this.dateTime);
      today = formatDate(this.dateTime, 'yyyy-MM-ddTHH:MM:SS', 'en-IND', '+5:30');
      console.log('Selecting dateTime : ', today);

    }
    this.noteService.reminder('note/reminder?noteId=' + noteId + '&reminderDate=' + today).subscribe(Response => {
      // this.noteService.reminder('user/notes/delete_note?noteId=26&reminderDate=2019-09-14T12:00:00').subscribe( Response => {
      console.log(Response);
    },
      error => {
        console.log(error);
      }
    );
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CollaboratordialogboxComponent, {
      width: '450px',
      height: 'auto',
      data: this.noteData
    });
  }

}
