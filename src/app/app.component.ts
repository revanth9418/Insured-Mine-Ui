import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { interval } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Assignment';
  userNamesArray: any;
  isNameSelected: boolean;

  /**
   * Form group
   */
  appForm = new FormGroup({
    userNames: new FormControl(''),
  });

  /**
   * Get for names
   */
  get names() {
    return this.appForm.get('userNames');
  }

  /**
   * Array list
   */
  mentionConfig = {
    items: [
      'GinaWilliams',
      'Jake Williams',
      'Jamie John',
      'John Doe',
      'Jeff Stewart',
      'Paula M. Keith',
    ],
    mentionSelect: (e: any) => {
      return e.label;
    },
  };

  constructor() {
    this.checkValueChanges();
  }

  ngOnInit() {
  }

  /**
   * Added boolean to set css based on condition
   * @param event
   */
  itemSelected(event: any) {
    console.log(event)
    if (event) {
      this.isNameSelected = true;
    }
  }

  /**
   * Reset user name field
   */
  clear() {
    this.names.patchValue('');
  }

  /**
   * Reset the css styles if no value is there in the user name box
   */
  checkValueChanges() {
    this.names.valueChanges.subscribe(val => {
      if (!val) {
        this.isNameSelected = false;
      }
    });
  }

}
