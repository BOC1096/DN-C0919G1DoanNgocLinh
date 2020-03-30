import { Component, OnInit } from '@angular/core';
import { AuthJwtService } from '../../../auth/auth-jwt.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthLoginInfo } from '../../../auth/login-info';
import { TokenStorageService } from '../../../auth/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginStatusService } from 'src/app/share/login-status.service';
@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.scss']
})
export class DangNhapComponent implements OnInit {
  parentMessage = 'message from parent';
  hide = true;
  username = '';
  password = '';
  userInfo: AuthLoginInfo;
  submitted = false;
  roles: string[] = [];
  isLoginFailed = false;
  isLoggedIn = false;
  userLogin = '';
  loginForm: FormGroup;
  constructor(
    private auth: AuthJwtService,
    private fb: FormBuilder,
    private tokenStorage: TokenStorageService,
    private router: Router, private route: ActivatedRoute,
    private loginStatusService: LoginStatusService
    ) {}

  ngOnInit() {
    window.sessionStorage.clear();
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      password: ['', Validators.required]
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }
  get fusername() {
    return this.loginForm.get('username');
  }
  get fpassword() {
    return this.loginForm.get('password');
  }
  onSubmit() {
    this.submitted = true;
    this.userInfo = new AuthLoginInfo(this.fusername.value, this.fpassword.value);
    this.login(this.userInfo);
  }
  public login(userInfo) {
    this.auth.attemptAuth(userInfo).subscribe(data => {
      console.log(data);
      this.tokenStorage.saveToken(data.token);
      this.tokenStorage.saveUsername(data.username);
      this.tokenStorage.saveAuthorities(data.authorities);
      this.userLogin = data.username;
      this.roles = this.tokenStorage.getAuthorities();
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.loginStatusService.changeState(true);
      console.log(this.loginStatusService.status);
      this.router.navigate(['../'], { relativeTo: this.route });
    }, error => {
      console.log('Error ', error);
      this.isLoginFailed = true;
      this.isLoggedIn = false;
      this.loginStatusService.changeState(false);
    });
  }
}
