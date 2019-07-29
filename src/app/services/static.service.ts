import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticService {
  application_type
  categories
  constructor() { }
  applicationType(){
    return this.application_type = [
      {value: '0', viewValue: 'New Application'},
      {value: '1', viewValue: 'Renew Application'},
    ];
  }
 
  category(){
    return this.categories = [
      {value:'0' , viewValue:'Individual Beekeeper'},
      {value:'1' , viewValue:'BeeKeeping and Honey Society/KVIC/SKVIC'},
      {value:'2' , viewValue:'Company/Firm'},
      {value:'3' , viewValue:'SHG,Self Help Group'},
      {value:'4' , viewValue:'SFAC Nominated'}
  
    ]
  }



 
}
