import { Component, OnInit, Input } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { LabelService } from 'src/app/services/label.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { EditlabeldialogComponent } from '../editlabeldialog/editlabeldialog.component';
import { AutofillMonitor } from '@angular/cdk/text-field';
import { RouterModule, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { GridviewService } from 'src/app/services/gridview.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  search: any;
  notesList: any;
  labelList: any;
  isGrid = true;
  direction = 'row';
  constructor(
    private noteService: NoteserviceService,
    private labelService: LabelService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private dataService: DataService,
    private viewService: GridviewService
  ) {   }
  ngOnInit() {
    this.getAllLabel();
    this.router.navigateByUrl('/dashboard/notes');
  }

   sendMessage(label: any): void {
    console.log('in click');
    // localStorage.setItem('labelId', label.labelId);
    // this.router.navigateByUrl('/dashboard/noteonlabel');
    this.noteService.addnoteonlabel('note/getNotesOnLabel?labelId=' + label.labelId).subscribe(
      (response: any) => {
        console.log('in dashboard');
        console.log(response);
        this.dataService.sendMessage(response);
        this.router.navigateByUrl('/dashboard/noteonlabel');
      },
      (error: any) => {
        console.log(error);
        this.snackBar.open(error.description, 'error', { duration: 3000 });
      });
  }



  getAllLabel() {
    this.labelService.retrieveAllLabel().subscribe(
      (data: any) => {
        this.labelList = data;
      }
    );
  }
  getAllNote() {
    this.noteService.retrieveAllNote().subscribe(
      (data: any) => {
        this.notesList = data;
      }
    );
  }
  openDialog(): void {
    const dialogRe =
      this.dialog.open(EditlabeldialogComponent, {
        width: 'auto',
        height: 'auto'
      });
  }

  changeView() {
    this.isGrid = !this.isGrid;
    this.viewService.changeView();
    }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
  notes() {
    this.router.navigateByUrl('/dashboard/notes');
  }
  reminderNote() {
    this.router.navigateByUrl('/dashboard/reminder');
  }
  archivedNotes() {
    this.router.navigateByUrl('/dashboard/archievenotes');
  }
  trashNotes() {
    this.router.navigateByUrl('/dashboard/trashnotes');
  }
  refresh(){
    window.location.reload();
  }
}
