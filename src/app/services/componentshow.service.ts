import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentshowService {
  private showHeaderAndFooter = new BehaviorSubject<boolean>(true);
  public showHeaderAndFooter$ = this.showHeaderAndFooter.asObservable();

  constructor() {}

  setHeaderAndFooter(show: boolean): void {
    this.showHeaderAndFooter.next(show);
  }
}
