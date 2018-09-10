import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { Armor, Weapon, Potion } from '../core/data.interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-service',
  templateUrl: './test-service.component.html',
  styleUrls: ['./test-service.component.css']
})
export class TestServiceComponent implements OnInit {
  allArmor$: Observable<Armor[]>;
  weapons$: Observable<Weapon[]>;
  potions$: Observable<Potion[]>;
  armor$: Observable<Armor>;
  weapon$: Observable<Weapon>;
  potion$: Observable<Potion>;

  constructor(private svc: DataService) { }

  ngOnInit() {
    this.allArmor$ = this.svc.getAllArmor();
    this.weapons$ = this.svc.getWeapons();
    this.potions$ = this.svc.getPotions();

    this.armor$ = this.svc.getArmor(1);
    this.weapon$ = this.svc.getWeapon(1);
    this.potion$ = this.svc.getPotion(1);

  }

}
