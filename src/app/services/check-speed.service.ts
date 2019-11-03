import { Speed } from './../model/speed';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckSpeedService {

  url = "http://192.168.4.1:5000/speed-test"
  constructor(private http:HttpClient) { }

  getSpeed(){
    return this.http.get<Speed>(this.url)
  }
}
