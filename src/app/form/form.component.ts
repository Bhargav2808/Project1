import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{

  reactiveForm : FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName : new FormControl(null, Validators.required,),
      lastName : new FormControl(null, Validators.required),
      contactNo : new FormControl(null, [Validators.required, this.contactNoLength])
    });      
  }

  onSubmit(){
    console.log(this.reactiveForm);
  }

  contactNoLength(control : FormControl){

    if(control.value!=null && control.value.length!='10'  ){
      return {invalidContact : true}
    }
    
    return null;
  }
}
