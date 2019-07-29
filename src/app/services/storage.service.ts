import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  uuid=[];
  submitted_data = []
  constructor() { }

  setItem(uuid, submit) {
    localStorage.setItem(uuid, submit)
    this.uuid.push(uuid)
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

  removeData(i){
   let uuids =  JSON.parse(localStorage.getItem('uuids'))
   console.log(uuids[i])
  console.log(localStorage.removeItem(uuids[i]))

  }
}
