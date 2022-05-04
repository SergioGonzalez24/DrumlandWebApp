import { Component, OnInit } from '@angular/core';
//IMPORTAR FORMBUILDER
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: FormGroup | any;

  constructor() {}

  ngOnInit(): void {
    this.form = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      username: new FormControl("", [Validators.required]),
      passwordUser: new FormControl("", [Validators.required]),
    });
  }



  login(): void {
    console.log(this.form.value);
    if(this.form.value.username == "solidBass3" && this.form.value.passwordUser == "Hampered+Autumn-Menaced.874"){
      alert("Login Successful");
      window.location.href='/user';
    }

  }
}