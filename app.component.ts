import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AngularReactiveFormVal';
  loginForm=new FormGroup({
uname : new FormControl('',[Validators.required, Validators.minLength(4)]),
pword : new FormControl('',[Validators.pattern("[0-9]{3}"), Validators.minLength(8)]),
eid: new FormControl('',[Validators.pattern("[a-z0-9]+@[a-z]+\.[a-z]{2,3}")]),
dob: new FormControl('',Validators.pattern("[0-9]{2}-[0-9]{2}-[0-9]{4}")),
 })

get uname(){
  return this.loginForm.get('uname');
}
get pword(){
  return this.loginForm.get('pword');
}
get eid(){
  return this.loginForm.get('eid')
}
get dob(){
  return this.loginForm.get('dob')
}

onSubmit(){
  console.log(this.loginForm.value)
}

}
