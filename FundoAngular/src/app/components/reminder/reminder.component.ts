import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
notes: any;
  constructor(
    private noteService: NoteserviceService
  ) { }

  ngOnInit() {
    this.noteService.getReminders('note/get_reminder').subscribe( response => {
      console.log(response);
      this.notes = response;
    },
    error => {
      console.log(error);
    });
  }

}
