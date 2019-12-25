import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  popup = false;
  noteForm: FormGroup;
  title: any;
  constructor(
    private noteService: NoteserviceService
  ) { }

  ngOnInit() {
    this.noteForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      colour: new FormControl('')
    });
  }
  onClickNote() {
    this.popup = !this.popup;
  }

  onReturn() {
    console.log(this.noteForm);
    if (this.noteForm.invalid) {
      console.log(this.noteForm);
      return;
    }
    if (this.noteForm.value.title !== '' || this.noteForm.value.description !== '') {
      this.noteService.createNote(this.noteForm.value)
        .subscribe(
          (data: any) => {
            // this.popup = !this.popup;

          });
    }
    this.popup = !this.popup;
    this.noteForm.reset();
  }
}
