import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { FormService } from '../form.service';

function validateEmail(c : AbstractControl) : {[key:string] : boolean} {
  let email = c.get('email');
  let validateEmail = c.get('validateEmail');
  if (email.value === validateEmail.value) {
    return null;
  }
  return {'match' : true};
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  inputForm:FormGroup;
  
  constructor(private fb:FormBuilder,
              private formService:FormService) { }

  ngOnInit() : void {
    this.inputForm=this.fb.group({
      firstName : ['', [Validators.required, Validators.minLength(3)]],
      lastName : ['', [Validators.required, Validators.minLength(3)]],
      emailGroup : this.fb.group({
        email: ['', [Validators.required], []],
        validateEmail: ['',[Validators.required],[]]
      }, {validator : validateEmail}),
      sendCatalog: true,
      phone: [''],
      notification: ['email',[]]
    })
  }

  populateItems() : void {
    this.inputForm.setValue({
      firstName: 'Jack',
      lastName: 'Whistleblower',
      email: 'JackWhistleblower@aol.com',
      sendCatalog: true
    })
  }

  notifyValidate(notifyVia:string) : void {
    let phone = this.inputForm.get('phone')
    if (notifyVia === 'text') {     
      phone.setValidators(Validators.required);
    } else {
      phone.clearValidators();
    }

    phone.updateValueAndValidity();

  }

  getShit() {
    this.formService.getShit()
      .subscribe((res) => {
        console.log(res);
    })
  }



}
