import { IpMac } from './../model/ipmac';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetIpMacService {

  url = "http://192.168.4.1:5000/get-ip-mac"
  constructor(private http:HttpClient) { }

  getIpsAndMacs(){
    return this.http.get<IpMac[]>(this.url)
  }
}
