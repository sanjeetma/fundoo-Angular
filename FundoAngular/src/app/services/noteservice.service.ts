import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {
  title: string;
  description: string;

  private subject = new Subject<any>();

  sendMessage(message: string) {
    this.subject.next({ text: message });
  }

  getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: member-ordering
  private apiurl = environment.apiUrl;

  // private httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  createNote(note: any): Observable<any> {
    console.log(localStorage.getItem('token'));
    return this.http.post(this.apiurl + 'note/createnote' , note,
        { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
  }
  retrieveAllNote() {
    {
      return this.http.get(this.apiurl + 'note/retrieveallnote',
        { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
    }
  }

  updateNote(url: any, noteModel: any, token: string): Observable<any> {
    return this.http.put(this.apiurl + url, noteModel, { headers: new HttpHeaders().set('token', token) });
  }

  archive(url: any): Observable<any> {
    console.log('inside archive');
    console.log(url);
    return this.http.put(this.apiurl + url, null, { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
  }
  changeColor(url: any): Observable<any> {
    console.log('inside colorCange() method :' + url);
    console.log(this.apiurl + url);
    return this.http.put(this.apiurl + url, null, { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
  }
  reminder(url: string): Observable<any> {
    return this.http.put(this.apiurl + url, null, { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
  }
  getReminders(url: any): Observable<any> {
    return this.http.get<any>(this.apiurl + url, { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
  }
  deleteNote(url: string): Observable<any> {
    return this.http.delete(this.apiurl + url, { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
  }

  getArchivedNotes(url: any): Observable<any> {
    return this.http.get<any>(this.apiurl + url, { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
  }

  getTrash(url: any): Observable<any> {
    return this.http.get<any>(this.apiurl + url, {headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
  }

  deleteRemainder(url: any): Observable<any> {
    return this.http.delete<any>(this.apiurl + url, { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
  }
  addnoteonlabel(url: any): Observable<any> {
    return this.http.get<any>(this.apiurl + url, { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
  }
  addToCollaborator(url: any): Observable<any> {
    console.log(url);
    return this.http.post(this.apiurl + url, null, { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
  }
  removeCollaboratorFromNote(url: any): Observable<any> {
    console.log(url);
    return this.http.delete(this.apiurl + url, { headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
  }

  getCollaboratedUserForNote(url: any): Observable<any> {
    console.log(url);
    return this.http.get(this.apiurl + url, {headers: new HttpHeaders().set('token', localStorage.getItem('token'))});
  }
}
