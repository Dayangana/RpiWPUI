import { IpMac } from './../model/ipmac';
import { GetIpMacService } from './../services/get-ip-mac.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-status',
  templateUrl: './users-status.component.html',
  styleUrls: ['./users-status.component.css']
})
export class UsersStatusComponent implements OnInit {

  ipList:IpMac[] = [];
  constructor(private getIpMacService:GetIpMacService) { }

  ngOnInit() {
    this.getIpMacService.getIpsAndMacs().subscribe(res => {
      this.ipList = res;
    },
    err=> console.log(err))
  }

}
