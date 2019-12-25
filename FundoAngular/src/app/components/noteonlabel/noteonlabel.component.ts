import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/noteservice.service';
import { LabelService } from 'src/app/services/label.service';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noteonlabel',
  templateUrl: './noteonlabel.component.html',
  styleUrls: ['./noteonlabel.component.scss']
})
export class NoteonlabelComponent implements OnInit {

  labeles: any;

  subscription: Subscription;
  constructor(private noteService: NoteserviceService,
              private dataService: DataService,
              private labelService: LabelService,
              private router: Router
  ) {
    // this.subscription = this.dataService.getMessage().subscribe(text => {
    //   this.labeles = text.text;
    //   console.log('in labelnotes', this.labeles);
    // });
  }

  ngOnInit() {
    // this.noteService.addnoteonlabel('note/getNotesOnLabel?labelId=' + localStorage.getItem('labelId')).subscribe(
    //   (response: any) => {
    //     console.log('in dashboard');
    //     console.log(response);


    //     this.dataService.sendMessage(response);

    //     this.router.navigateByUrl('/dashboard/noteonlabel');
    //   },
    //   (error: any) => {
    //     console.log(error);

    //    // this.snackBar.open(error.description, 'error', { duration: 3000 });
    //   }
    // );

    this.subscription = this.dataService.getMessage().subscribe(message => {
      this.labeles = message.text;
      console.log('in labelnotes', this.labeles);
    });
  }
    ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
