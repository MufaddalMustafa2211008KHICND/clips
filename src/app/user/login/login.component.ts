import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  inSubmission = false
  showAlert = false
  alertColor = 'blue'
  alertMsg = "You're being logged into your account"

  credentials = {
    email: '',
    password: ''
  }

  constructor(private auth: AngularFireAuth) {}

  async login() {
    this.inSubmission = true
    this.showAlert = true
    this.alertColor = 'blue'
    this.alertMsg = "You're being logged into your account"

    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email, this.credentials.password
      )
    } catch (e) {
      console.error(e)

      this.alertMsg = 'An unexpected error occurred. Please try again later'
      this.alertColor = 'red'
      this.inSubmission = false
      return
    }

    this.alertMsg = 'Success! You are logged into your account.'
    this.alertColor = 'green'
  }

}
