import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = new FormGroup({
    login: new FormControl(null,[Validators.required]),
    password: new FormControl(null, [Validators.required])
  })
  public error: any

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  public onSubmit = () => {
    const {login, password} = this.form.value

    console.log(this.form.value, login === 'Admin', password === '12345' )
    if (login === 'Admin' && password === '12345') {
      localStorage.setItem('isAuthenticated', 'true')
      this.router.navigate(['/profile'])
    } else {
      this.error = `Ім'я користувача або пароль введені невірно`
    }
  }

}
