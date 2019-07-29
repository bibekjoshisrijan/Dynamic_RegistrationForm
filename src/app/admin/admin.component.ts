import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { element } from 'protractor';
import { StaticService } from '../services/static.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
userdata:Object[]
categories={ '0':'Individual Beekeeper','1':'BeeKeeping and Honey Society/KVIC/SKVIC',
'2':'Company/Firm','3':'SHG,Self Help Group','4':'SFAC Nominated'}
  constructor(private storage:StorageService,private staticData:StaticService) { }

  ngOnInit() {
    this.userdata = this.storage.getItem()
    console.log(this.userdata)


    this.userdata.forEach(element=>{
      element['category']
    })
    
 
  }

  removePanel(i){
    document.getElementById('Location'+i).remove()
    console.log(this.userdata[i])
    this.storage.removeData(i)
  }

}
