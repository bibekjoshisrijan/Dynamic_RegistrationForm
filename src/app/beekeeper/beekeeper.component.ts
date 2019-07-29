import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, Form } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import{Router} from '@angular/router'
@Component({
  selector: 'app-beekeeper',
  templateUrl: './beekeeper.component.html',
  styleUrls: ['./beekeeper.component.css']
})
export class BeekeeperComponent implements OnInit {
  formData = new FormData();
  beekeeper:FormGroup
  migrate : Boolean ;
  fields =  [{state: '',crop:''}]
  first_name:FormControl;
  last_name:FormControl
  address:FormControl;
  city:FormControl;
  state:FormControl
  aadhar_number:FormControl;
  quantity:FormControl;
  Migrate:FormControl
  colony:FormControl
  amount:FormControl
  demand_draft:FormControl
  @Input('term') term :String
  @Input('category') category :String
  @Input('type') type :String
  @Output('submitted') submitted = new EventEmitter<boolean>()
  constructor(private formBuilder:FormBuilder,
              private storage:StorageService,
              private route:Router) { }

  ngOnInit()
   {
    this.first_name = new FormControl('Abhay',[Validators.required]) 
    this.last_name = new FormControl('Katiyar',Validators.required) 
    this.address = new FormControl('g1-83',Validators.required) 
    this.state = new FormControl('u.p',Validators.required) 
    this.city = new FormControl('kanpur',Validators.required) 
    this.aadhar_number = new FormControl('1234567890123456',[Validators.required,Validators.pattern("^[0-9]*$"),
                                            Validators.minLength(16)]) 
    this.quantity = new FormControl('123',Validators.required) 
    this.Migrate = new FormControl('',Validators.required) 
    this.colony = new FormControl('213',Validators.required)
    this.demand_draft = new FormControl('123124134',[Validators.required,Validators.pattern("^[0-9]*$")])
    this.amount =  new FormControl('1000',[Validators.required,Validators.pattern("^[0-9]*$")])
    this.beekeeper = new FormGroup({
      name : new FormGroup({
        first_name:this.first_name,
        last_name:this.last_name,
      }),
      address:this.address,
      city:this.city,
      state:this.state,
      aadhar_number:this.aadhar_number,
      quantity:this.quantity,
      // Migrate:this.Migrate,
      colony:this.colony,
      demand_draft:this.demand_draft,
      amount:this.amount
    })

    // document.getElementById('image').files[0]
  }

toggle(){
this.migrate = !this.migrate
console.log(this.migrate)
}

addFields(){
  this.fields.push({state: '',crop:''})
  
}

removeFields(){
  if(this.fields.length>1){
  this.fields.pop()
}
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
   
  if(this.beekeeper.invalid){
    const controls = this.beekeeper.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
          console.log(name)
      }
    }
  }

  else{
   let submit = this.beekeeper.value
    let uuid=   this.create_UUID()
    submit['migrate'] = this.migrate
    submit['state_crop'] = this.fields
    submit['type'] = this.type
    submit['category']=this.category
    submit['term'] = this.term
    submit['date'] = date
    submit['uuid'] = uuid
   
    submit = JSON.stringify(submit)

    this.storage.setItem(uuid,submit)
    this.submitted.emit(true)
    // this.route.navigate(['admin'])

    // console.log(this.fields)

  }
}

onSelectFile(event){
  console.log(event.value)
}


}
