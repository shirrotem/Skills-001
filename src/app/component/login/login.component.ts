import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router){}

  emailText: string="";
  isEmailNotOk: boolean= false;

  onClick() {
    if(this.emailText==="demo@skills.co.il"){
      localStorage.setItem("loggedin", "true");
       this.router.navigate(['/pokemon']);
    }
    else{
      this.isEmailNotOk= true;
    }
  }

  ngOnInit(): void {
    const isLoggedIn = localStorage.getItem('loggedin');
    if(isLoggedIn==="true")
    {
      this.router.navigate(['/pokemon']);
    }
  }

}
