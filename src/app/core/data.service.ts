import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Armor, Weapon, Potion } from './data.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) {}

  private baseUrl = 'http://localhost:3000';

  getAllArmor(): Observable<Armor[]> {
    return this._http.get<Armor[]>(`${this.baseUrl}/armor`);
  }

  getWeapons(): Observable<Weapon[]> {
    return this._http.get<Weapon[]>(`${this.baseUrl}/weapons`);
  }

  getPotions(): Observable<Potion[]> {
    return this._http.get<Potion[]>(`${this.baseUrl}/potions`);
  }

  getArmor(id: number): Observable<Armor> {
    return this._http.get<Armor>(`${this.baseUrl}/armor/${id}`);
  }

  getWeapon(id: number): Observable<Weapon> {
    return this._http.get<Weapon>(`${this.baseUrl}/weapons/${id}`);
  }

  getPotion(id: number): Observable<Potion> {
    return this._http.get<Potion>(`${this.baseUrl}/potions/${id}`);
  }
}
