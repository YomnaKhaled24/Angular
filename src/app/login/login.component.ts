import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],   //we import FormsModule to use two way data binding
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  handleLoginForm(loginForm :any)
  {
    console.log(loginForm)
    console.log(loginForm.value)


  }
}
