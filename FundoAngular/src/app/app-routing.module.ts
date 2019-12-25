import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgetComponent } from './components/forget/forget.component';
import { ResetComponent } from './components/reset/reset.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NoteComponent } from './components/note/note.component';
import { ReminderComponent } from './components/reminder/reminder.component';

import { CreatenoteComponent } from './components/createnote/createnote.component';
import { CreatenotepopupComponent } from './components/createnotepopup/createnotepopup.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { EditlabeldialogComponent } from './components/editlabeldialog/editlabeldialog.component';
import { ArchievenotesComponent } from './components/archievenotes/archievenotes.component';
import { TrashnotesComponent } from './components/trashnotes/trashnotes.component';
import { NoteonlabelComponent } from './components/noteonlabel/noteonlabel.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch : 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forget', component: ForgetComponent},
  {path: 'reset/:token', component: ResetComponent},
  {path : 'dashboard', component: DashboardComponent,
    children: [
      {path: '', component: NoteComponent},
      {path: 'notes', component: NoteComponent},
      {path: 'reminder', component: ReminderComponent},
      {path: 'archievenotes', component: ArchievenotesComponent},
      {path: 'trashnotes', component: TrashnotesComponent},
      {path: 'noteonlabel', component: NoteonlabelComponent}
    ]
  },
  { path: 'createnote', component: CreatenoteComponent },
  { path: 'createnotepopup', component: CreatenotepopupComponent},
  {path: 'toolbar', component: ToolbarComponent},
  {path: 'editlabeldialog', component: EditlabeldialogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
