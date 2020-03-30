import { Component, OnInit } from '@angular/core';
import { AuthLoginInfo } from 'src/app/auth/login-info';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/auth/token-storage.service';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss']
})
export class LayoutAdminComponent implements OnInit {
  currentUser: AuthLoginInfo;
  current = '';

  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService,
  ) {}

  ngOnInit() {
    this.current = this.tokenStorage.getUsername();
  }

  logout() {
    this.tokenStorage.signOut();
    this.router.navigate(['/loginAD']);
}
}
