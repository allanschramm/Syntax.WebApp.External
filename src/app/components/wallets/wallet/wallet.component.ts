import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {
  constructor(private router: Router) { }

  newWallet() {
    this.router.navigate(['/wallets/new']);
  }
}
