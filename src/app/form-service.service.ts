import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  formStructure = [
    {
      "type": "text",
      "label": "Ala",
      "name": "Ala"
    },
    {
      "type": "number",
      "label": "ma",
      "name": "ma"
    },
    {
      "type": "select",
      "label": "kota",
      "name": "kota",
      "options":["a","b","c"] 
    }
    
    
  ];

  getFormStructure() {
    return this.formStructure;
  }
}
