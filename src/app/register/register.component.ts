import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {debounceTime,distinctUntilChanged, debounce} from 'rxjs/operators'
import { StaticService } from '../services/static.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm:FormGroup
submitted: Boolean = false;
type:FormControl
term:FormControl
category:FormControl
formSubmit;
selected_type 
selected_category
selected_term
IndividualSubmit

  constructor(private formBuilder: FormBuilder,private staticData:StaticService) 
  { }

    application_type =this.staticData.applicationType()

    categories = this.staticData.category()
  ngOnInit() {
   
//  console.log(this.staticData.application_type)
//  console.log( this.staticData.categories)
      // console.log(this.selected_category,this.selected_type)
  // console.log(this.term)
    this.registerForm = this.formBuilder.group({
      category:['',Validators.required],
      type:['',Validators.required],
      term:['',Validators.required]

    })
    // console.log(this.form.value)

           this.registerForm.valueChanges.pipe(
            debounceTime(400),
            distinctUntilChanged()
          ).subscribe(
            res=>{
  
              }
           )

           
          
  }
  
  get form() { return this.registerForm.controls }
  otherSubmit(status){
this.IndividualSubmit = status
  }
  formSubmitted(status){
this.formSubmit = status
  }

  onSubmit(){

    console.log(this.selected_category,this.selected_type,this.selected_term)
  }
  Selected(event){
    console.log( this.selected_category, this.selected_type, this.selected_term)
  //   let target = event.source.selected._element.nativeElement;
  //   let selectedData = {
  //     value: event.value,
  //     text: target.innerText.trim()
  //   };
  //   console.log(selectedData);
  }
}
