import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm : FormGroup;

  constructor()
  {
    this.registerForm = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
      ]),
      email:new FormControl('',[
        Validators.required,
        Validators.email

      ]),
      userName:new FormControl('',[
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_]{3,}$')
      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@*%$#]).{8,}$')

      ]),
      confirmPassword:new FormControl('',[
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@*%$#]).{8,}$')
      ]),

    })
  }

  handleRegisterForm()
  {
    console.log(this.registerForm)
    console.log(this.registerForm.value)

  }

}
