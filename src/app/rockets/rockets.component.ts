import { Component, OnInit } from '@angular/core';
import { Rockets } from '../model/rockets.model';
import { RocketService } from '../Service/rocket.service';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {
  rockets:Rockets[];
  constructor(private rocketService:RocketService ) { 
  this.rockets=rocketService.listRockets();
}
deleteRocket(r: Rockets)
{
  //console.log(r);
  let conf = confirm("You Confirme you like to delete this element ?");
  if(conf)
    this.rocketService.deleteRocket(r);
}
  ngOnInit(): void {
  }

}
