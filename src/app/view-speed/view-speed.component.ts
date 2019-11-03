import { CheckSpeedService } from './../services/check-speed.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-speed',
  templateUrl: './view-speed.component.html',
  styleUrls: ['./view-speed.component.css']
})
export class ViewSpeedComponent implements OnInit {

  download = 0;
  upload = 0;
  ping = 0;

  loading:boolean = false
  constructor(private checkSpeedService:CheckSpeedService) { }

  ngOnInit() {
    this.loading = true;
    this.checkSpeedService.getSpeed().subscribe(res => {
      console.log(res)
      this.download = res.download;
      this.upload = res.upload;
      this.ping = res.ping;
      this.loading = false;
    }, 
    err => {
      this.loading = false;
      console.log(err)
    })
  }

}
