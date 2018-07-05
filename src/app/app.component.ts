import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {

    const config = {
      apiKey: 'AIzaSyBHtNt3_7f8Gqr8ySQwtEXYYWGauqmlnUA',
      authDomain: 'jta-instagram-clone-255e7.firebaseapp.com',
      databaseURL: 'https://jta-instagram-clone-255e7.firebaseio.com',
      projectId: 'jta-instagram-clone-255e7',
      storageBucket: 'jta-instagram-clone-255e7.appspot.com',
      messagingSenderId: '897478112346'
    };

    firebase.initializeApp(config);
  }
}
