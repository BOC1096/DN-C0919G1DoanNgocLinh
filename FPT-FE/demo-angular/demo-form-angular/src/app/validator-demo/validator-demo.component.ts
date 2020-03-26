import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/model/customer';
import { DemoService } from '../service/demo.service';
@Component({
  selector: 'app-validator-demo',
  templateUrl: './validator-demo.component.html',
  styleUrls: ['./validator-demo.component.css']
})

export class ValidatorDemoComponent implements OnInit {
  formCreate: FormGroup;
  customer: Customer = new Customer();
  validation_messages = {
    'name': [
      { type: 'required', message: 'Tên không được để trống' }
    ],
    'birthday': [
      { type: 'required', message: 'Ngày sinh không được để trống' },
      { type: 'age', message: 'Tu 18 tuoi tro len' }],
    'email': [
      { type: 'required', message: 'Email không được để trống' },
      { type: 'pattern', message: 'Email không đúng định dạng abc@abc.abc' },
      { type: 'emailExists', message: 'Email đã tồn tại' }
    ]
  };
  constructor(private fb: FormBuilder, private service: DemoService) { }

  ngOnInit() {
    this.formCreate = this.fb.group({
      name: ['', Validators.compose([
        Validators.required
      ])],
      email: ['',
        {
          validators: [Validators.required, Validators.pattern(/^[a-z][a-z0-9_\.]{3,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/),],
          asyncValidators: [this.service.emailValidator()],
          updateOn: 'blur'
        }
      ],
      birthday: ['', Validators.compose([
        Validators.required,
        validatorAge
      ])]
    });
  }
  onSubmit(form) {
    this.customer.name = form.value.name;
    this.customer.birthday = form.value.birthday;
    this.customer.email = form.value.email;
    this.service.createCustomer(this.customer).subscribe(
      data => {
        window.alert('Thêm thành công');
        form.reset();
      }
    );
  }
}
function validatorAge(form: FormControl) {
  if ((new Date().valueOf() - new Date(form.value).valueOf()) / (365 * 24 * 3600 * 1000) < 18) {
    return { age: true };
  }
  return null;
}
