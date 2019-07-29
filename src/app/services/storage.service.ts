import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  uuid=[];
  submitted_data = []
  constructor() { }

  setItem(id, submit) {
    localStorage.setItem(id, submit)
    
    this.uuid.push(id)
    localStorage.setItem('uuids', JSON.stringify(this.uuid))
  }

  getItem() {
    let uuids = JSON.parse(localStorage.getItem('uuids'))
    for (let i = 0; i < uuids.length; i++) {
      this.submitted_data.push(JSON.parse(localStorage.getItem(uuids[i])))

    }
    console.log(this.submitted_data)
    return this.submitted_data
  }

  getid(){
    // return localStorage.getItem('')
  }

  removeData(i){
   let uuids =  JSON.parse(localStorage.getItem('uuids'))
   console.log(uuids[i])
  console.log(localStorage.removeItem(uuids[i]))

  }
}
