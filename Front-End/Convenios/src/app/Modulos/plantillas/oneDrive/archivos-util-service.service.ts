import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArchivosUtilServiceService {

  constructor() { }

  toDataURL = async (url: any) => {
    var res = await fetch(url);
    var blob = await res.blob();
    const result = await new Promise((resolve, reject) => {
       var reader = new FileReader();
       reader.addEventListener("load", function () {
          resolve(reader.result);
       }, false);
       reader.onerror = () => {
          return reject(this);
       };
       reader.readAsDataURL(blob);
    })
    return result
   };

  

}
