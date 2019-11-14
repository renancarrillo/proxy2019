import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { }

  students() {
    return this.http.get('http://demo0253989.mockable.io/alumnos');
  }
}
