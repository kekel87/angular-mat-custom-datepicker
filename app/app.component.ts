import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatDatepicker } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public formControl: FormControl = new FormControl('2018-01-01', Validators.required);
  
  ngOnInit() {
    this.formControl.valueChanges.subscribe(value => {
      console.log('valueChanges', value);
    });
  }
}
