import { Component, OnInit } from '@angular/core';
import { Rockets } from '../model/rockets.model';
import { RocketService } from '../Service/rocket.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-rocket',
  templateUrl: './update-rocket.component.html',
  styles: []
})
export class UpdateRocketComponent implements OnInit {
currentRocket = new Rockets();
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private rocketService: RocketService) { }
updateRocket(){
  this.rocketService.updateRocket(this.currentRocket);
  this.router.navigate(['rockets']);
}
  ngOnInit(): void {
    this.currentRocket=this.rocketService.consultRocket(this.activatedRoute.snapshot.params['id']);
    console
  }

}
