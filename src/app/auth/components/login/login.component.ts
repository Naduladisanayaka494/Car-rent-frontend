import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { StorageService } from '../../services/storage/storage.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isSpininig: boolean = false;
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private authService:AuthService,private storageService:StorageService,private router:Router,private message :NzMessageService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe((res) => {
      console.log(res);
      if (res.userId != null) {
        const user = {
          id: res.userId,
          role:res.userRole
        }
        StorageService.saveUser(user);
        StorageService.saveToken(res.jwt)
        if (StorageService.isAdminLoggedIn()) {
          this. router.navigateByUrl("admin/dashboard")
        } else if (StorageService.isCustomerLoggedIn()) {
           this.router.navigateByUrl('customer/dashboard');
        } else {
          this.message.error("Bad credetials",{nzDuration:5000});
        }
      }
    })
  }
}
