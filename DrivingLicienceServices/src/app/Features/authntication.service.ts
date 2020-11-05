import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthnticationService {
  public isUserLoggedIn = new BehaviorSubject<boolean>(false);
  constructor() { }
}
