import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, Form } from '@angular/forms';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  name:FormControl;
  address:FormControl;
  cin_number:FormControl;
  city:FormControl;
  state:FormControl;
  colony:FormControl;
  quantity:FormControl;
  amount:FormControl;
  demand_draft:FormControl;
  other_individual:FormGroup;
  
  @Input('term') term :String

  constructor() { }

  ngOnInit() {
    this.state = new FormControl('u.p',Validators.required) 
    this.city = new FormControl('kanpur',Validators.required) 
    this.name = new FormControl('abhay',Validators.required)
    this.cin_number = new FormControl('1234567890123456',[Validators.required,Validators.pattern("^[0-9]*$"),
                        Validators.minLength(16)]) 
    this.address = new FormControl('g1-83',Validators.required) 
    this.colony = new FormControl('213',Validators.required)
    this.quantity = new FormControl('123',Validators.required) 
    this.amount =  new FormControl('1000',[Validators.required,Validators.pattern("^[0-9]*$")])
    this.demand_draft = new FormControl('123124134',[Validators.required,Validators.pattern("^[0-9]*$")])



    this.other_individual = new FormGroup({
      name:this.name,
      address:this.address,
      city:this.city,
      state:this.state,
      quantity:this.quantity,
      // Migrate:this.Migrate,
      colony:this.colony,
      demand_draft:this.demand_draft,
      amount:this.amount,
      cin_number:this.cin_number
    })
  }

   create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

onSubmit(){
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  
   
  if(this.other_individual.invalid){
    const controls = this.other_individual.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
          console.log(name)
      }
    }
  }

  else{
   let submit = this.other_individual.value
   let uuid=   this.create_UUID()

    submit['type'] = '0'
    submit['category']='0'
    submit['term'] = this.term
    submit['date'] = date
    submit = JSON.stringify(submit)
    localStorage.setItem(uuid,submit)
    console.log(submit)
    // console.log(this.fields)

  }
}

 
}
