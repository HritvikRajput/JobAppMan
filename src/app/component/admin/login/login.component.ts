import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../service/admin/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  constructor(private _adminService: AdminService, private router: Router) {

  }
  login() {
    this._adminService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(res => {
      console.log('res :', res);
      localStorage.setItem('token', res.token);
      localStorage.setItem('isLogin', 'true');
      this.router.navigate(['admin/admin-home']);
    })
  }
}
