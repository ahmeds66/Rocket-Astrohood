import { Component, OnInit } from '@angular/core';
import { Rockets } from '../model/rockets.model';
import { RocketService } from '../Service/rocket.service';
@Component({
  selector: 'app-add-rocket',
  templateUrl: './add-rocket.component.html',
  styleUrls: ['./add-rocket.component.css']
})
export class AddRocketComponent implements OnInit {
newrocket = new Rockets();
  constructor(private rocketService:RocketService ) { }
  addRocket(){
    //console.log(this.newrocket);
    this.rocketService.addRocket(this.newrocket);
  }
  ngOnInit(): void {
  }

}
