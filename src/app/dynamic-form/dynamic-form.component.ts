import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { FormService } from '../form-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  dynamicForm: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder, public formService: FormService, private http: HttpClient) { }

  ngOnInit() {
    const formStructure = this.formService.getFormStructure();

    let formGroup: Record<string, any> = {};
    formStructure.forEach(control => {
      formGroup[control.name] = null;
    });

    this.dynamicForm = this.formBuilder.group(formGroup);
  }

  onSubmit() {
    console.log(this.dynamicForm.value);
  }

  getErrorMessage(control: any) {
    const formControl = this.dynamicForm.get(control.name);

    if (!formControl) {
      return '';
    }

    for (let validation of control.validations) {
      if (formControl.hasError(validation.name)) {
        return validation.message;
      }
    }

    return '';
  }
  isSelect(s: string){
    if(s=="select"){
      return true;
    }else{
      return false;
    }
  }
}  