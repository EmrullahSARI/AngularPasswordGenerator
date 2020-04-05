import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  passwdLength: number;
  password: string;
  includeLetters: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;

  constructor() {
    this.passwdLength = 0;
    this.password = '';
    this.includeLetters = false;
    this.includeLetters = false;
    this.includeSymbols = false;
  }

  onChangeLength( value: string ) {
    // tslint:disable-next-line: radix
    const parsedValue = parseInt(value);

    if ( !isNaN( parsedValue ) ) {
      this.passwdLength = parsedValue;
    }
  }

  onChangeLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'qwertyuıopğüasdfghjklşizxcvbnmöç';
    const symbols = '!^+%&/()=?_-*#${[]}';
    let charGroup: string;
    let newPassword = '';

    if ( this.includeNumbers ) { charGroup += numbers; }
    if ( this.includeLetters ) { charGroup += letters; }
    if ( this.includeSymbols ) { charGroup += symbols; }

    for ( let i = 0; i < this.passwdLength; i++ ) {
      const index = Math.floor( Math.random() * charGroup.length );
      newPassword += charGroup[ index ];
    }

    this.password = newPassword;
  }

  getName() {
    return 'Emrullah SARI';
  }
}
