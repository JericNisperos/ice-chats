import { Component } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { float, floatAnim1, floatsm, floatsm1, floatsm2, floatsm3 } from '../onload-animation';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { floatonload1, floatonload2, floatonload3 } from '../float.animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [ floatAnim1, float, floatsm, floatsm1, floatsm2, floatsm3, floatonload1, floatonload2, floatonload3 ]

})
export class LoginComponent {
  myInput!: string;
  isEmpty: boolean = false;

  checkForEmpty() {
    if (!this.myInput) {
      this.isEmpty = true;
    } else {
      this.isEmpty = false;
    }
  }
}
