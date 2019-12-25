import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './materials.module';
import { RegisterComponent } from './components/register/register.component';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import {MatSelectModule} from '@angular/material/select';
import { ForgetComponent } from './components/forget/forget.component';
import { ResetComponent } from './components/reset/reset.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReminderComponent } from './components/reminder/reminder.component';



import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import { NoteComponent } from './components/note/note.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateNoteDialogComponent } from './components/update-note-dialog/update-note-dialog.component';
import { DisplayComponent } from './components/display/display.component';
import { LabelComponent } from './component/label/label.component';
import { MatSnackBarModule, MatMenuModule } from '@angular/material';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { CreatenotepopupComponent } from './components/createnotepopup/createnotepopup.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import { EditlabeldialogComponent } from './components/editlabeldialog/editlabeldialog.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ArchievenotesComponent } from './components/archievenotes/archievenotes.component';
import { TrashnotesComponent } from './components/trashnotes/trashnotes.component';
import { NoteonlabelComponent } from './components/noteonlabel/noteonlabel.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CollaboratordialogboxComponent } from './components/collaboratordialogbox/collaboratordialogbox.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent,
    ResetComponent,
    DashboardComponent,
    NoteComponent,
    ReminderComponent,
    UpdateNoteDialogComponent,
    DisplayComponent,
    LabelComponent,
    CreatenoteComponent,
    CreatenotepopupComponent,
    ToolbarComponent,
    EditlabeldialogComponent,
    ArchievenotesComponent,
    TrashnotesComponent,
    NoteonlabelComponent,
    CollaboratordialogboxComponent

  ],
  imports: [
    MatRadioModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatSelectModule,
    RouterModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    StorageServiceModule,
    TextFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    MatMenuModule,
    MatListModule,
    MatChipsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatProgressSpinnerModule

  ],
  entryComponents: [
    UpdateNoteDialogComponent,
    CollaboratordialogboxComponent
  ],

  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
