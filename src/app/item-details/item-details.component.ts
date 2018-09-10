import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { Subscription } from 'rxjs';
import { Armor } from '../core/data.interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  sub: Subscription;
  armor: Armor;
  constructor(private svc: DataService, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      console.log('id: ', id);
      this.sub = this.svc.getArmor(id).subscribe(val => {
        this.armor = val;
        console.log('foundArmor: ', this.armor);
      },
      err => console.log('Error: ', err)
    );
    },
    err => console.log('Error: ', err));
  }

}
