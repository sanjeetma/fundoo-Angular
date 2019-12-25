import { Component, OnInit, Input } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { MatDialog } from '@angular/material';
import { UpdateNoteDialogComponent } from '../update-note-dialog/update-note-dialog.component';
import { LabelService } from 'src/app/services/label.service';
import { GridviewService } from 'src/app/services/gridview.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
 @Input() notesList: any;
  title: string;
  description: string;
  colour: string;
  removable = true;
  selectable = true;
  direction = 'row';
  constructor(
    private noteService: NoteserviceService,
    private dialog: MatDialog,
    private viewService : GridviewService,
    private labelService: LabelService
    ) {
      this.viewService.currentView.subscribe(
        response =>
          this.change(response)
      );
     }
  openDialog(list: any): void {
    console.log(list);
    const dialogRef = this.dialog.open(UpdateNoteDialogComponent, {
      width: '500px',
      height: 'auto',
      // data: {title: this.title, description: this.description, colour: this.colour}
      data: list
    //  console.log(data)
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.title = result;
    });
  }
  deleteLabel() {
    this.removable = !this.removable;
    this.selectable = !this.selectable;
  }
  ngOnInit() {
    console.log('in display');
    console.log('In dis list' , this.notesList);
  }

  onDelete(note: any, label: any) {
    this.labelService.deletelabelfromnote('note/deleteLabelFromNote?noteId=' + note.noteId + '&labelId=' + label.labelId)
    .subscribe(
      (response: any) => {
        console.log(response.statusMessage );
      },
      (error: any) => {
        console.log('in error' , error.error.description);

       } );
  }


 deleteRemindMe(note: any) {
this.noteService.deleteRemainder('note/deleteRemainder?noteId=' + note.noteId)
.subscribe(
  (responce: any) => {
    console.log(responce.statusMessage);
  },
  (error: any) => {
    console.log('in error' , error.error.description);
  }
);
}
change(flag: boolean) {
  if (flag) {
    this.direction = 'column';
  } else {
    this.direction = 'row';
  }
}
}

