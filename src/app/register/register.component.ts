import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {debounceTime,distinctUntilChanged, debounce} from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';
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

selected_type 
selected_category
selected_term

  constructor(    private formBuilder: FormBuilder,
    ) { }

    application_type = [
      {value: '0', viewValue: 'New Application'},
      {value: '1', viewValue: 'Renew Application'},
    ];

    categories = [
      {value:'0' , viewValue:'Individual Beekeeper'},
      {value:'1' , viewValue:'BeeKeeping and Honey Society/KVIC/SKVIC'},
      {value:'2' , viewValue:'Company/Firm'},
      {value:'3' , viewValue:'SHG,Self Help Group'},
      {value:'4' , viewValue:'SFAC Nominated'}

    ]
  ngOnInit() {
   
 
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
