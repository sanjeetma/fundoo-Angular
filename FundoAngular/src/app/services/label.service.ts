import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor(private http: HttpClient) { }
  private apiurl = environment.apiUrl;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
    retrieveAllLabel() {
    {
      return this.http.get(this.apiurl + 'label/retrieveAllLavels',
        {
           headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
    }
  }
  addlabeltonote(url: any, label: any) {
    console.log(localStorage.getItem('token'));
    return this.http.post(this.apiurl + url, label,
      { headers: new HttpHeaders().set('token', localStorage.getItem('token'))});
  }
  deletelabelfromnote(url: any) {
    return this.http.delete(this.apiurl + url,
      { headers: new HttpHeaders().set('token', localStorage.getItem('token'))});
  }
  createLabel(labeldto: any) {
    return this.http.post(this.apiurl + 'label/createLabel', labeldto,
        {headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
    }

  updateLabel(url: any,labeldto: any){
      return this.http.put(this.apiurl + url, labeldto,
      {headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
    }
    deleteLabel(url: any){
      console.log('into the service delete');
      return this.http.delete(this.apiurl + url,
        {headers: new HttpHeaders().set('token', localStorage.getItem('token')) });
    }
}
