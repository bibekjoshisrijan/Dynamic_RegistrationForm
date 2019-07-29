import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, Form } from '@angular/forms';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  uuid
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
  @Input('category') category :String
  @Input('type') type :String
  @Output('submitted') othersubmitted = new EventEmitter<boolean>()

  aadhar_url;
  cin_url;
  pp_url;
  cret_utl
  constructor(private storage:StorageService,
    private route:Router) { }

  ngOnInit() {
    this.state = new FormControl('u.p',Validators.required) 
    this.city = new FormControl('kanpur',Validators.required) 
    this.name = new FormControl('Abhay Katiyar',Validators.required)
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
      colony:this.colony,
      demand_draft:this.demand_draft,
      amount:this.amount,
      cin_number:this.cin_number
    })
  }

   create_UUID(){
    var dt = new Date().getTime();
    // var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    //     var r = (dt + Math.random()*16)%16 | 0;
    //     dt = Math.floor(dt/16);
    //     return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    var uuid = 'xx-xxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*5)%5 | 0;
      dt = Math.floor(dt/5);
      return (c=='x' ? r :(r&0x3|0x8)).toString(5);
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
    this.uuid=   this.create_UUID()

    submit['type'] = this.type
    submit['category']=this.category
    submit['term'] = this.term
    submit['date'] = date
    submit['aadhar_url'] = this.aadhar_url
    submit['pp_url'] = this.pp_url
    submit['cert_url'] = this.cret_utl;
    submit['cin_url'] = this.cin_url
    submit['uuid'] = this.uuid

    submit = JSON.stringify(submit)
    this.storage.setItem(this.uuid,submit)
    console.log(submit)
    this.othersubmitted.emit(true)

    // console.log(this.fields)

  }
}
onSelectFile(event){
  console.log(event.value)
}


aadharUpload(fileInput:HTMLInputEvent){
  
  let aadhar = fileInput.target.files[0];
  console.log(fileInput.target.files)
  var reader = new FileReader();
  reader.readAsDataURL(fileInput.target.files[0]);
  
  //  To show the input image


  reader.onload = (event) => {
    // Url for the input image
  this.aadhar_url= reader.result
  // console.log(this.url)
}
document.getElementById("aadhar_upload").innerText = aadhar.name;
}

photoUpload(fileInput:HTMLInputEvent){
  
  let aadhar = fileInput.target.files[0];
  console.log(fileInput.target.files)
  var reader = new FileReader();
  reader.readAsDataURL(fileInput.target.files[0]);
  
  //  To show the input image


  reader.onload = (event) => {
    // Url for the input image
  this.pp_url= reader.result
  // console.log(this.url)
}
document.getElementById("photo_upload").innerText = aadhar.name;
}


certUpload(fileInput:HTMLInputEvent){
  
  let aadhar = fileInput.target.files[0];
  console.log(fileInput.target.files)
  var reader = new FileReader();
  reader.readAsDataURL(fileInput.target.files[0]);
  
  //  To show the input image


  reader.onload = (event) => {
    // Url for the input image
  this.cret_utl= reader.result
  // console.log(this.url)
}
document.getElementById("cert_upload").innerText = aadhar.name;
}


cinUpload(fileInput:HTMLInputEvent){
  
  let aadhar = fileInput.target.files[0];
  console.log(fileInput.target.files)
  var reader = new FileReader();
  reader.readAsDataURL(fileInput.target.files[0]);
  
  //  To show the input image


  reader.onload = (event) => {
    // Url for the input image
  this.cin_url= reader.result
  // console.log(this.url)
}
document.getElementById("cin_upload").innerText = aadhar.name;
}



to_home(){
  this.route.navigate(['/'])

}
}
