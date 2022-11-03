import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from "@ngrx/store";
import { authUser } from "../store/action";
import { selectAuth } from "../store/select";

@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.css']
})

export class PageFormComponent implements OnDestroy {

  hide = true;

  email = new FormControl('admin@deepersignals.com', [Validators.required, Validators.email]);
  password = new FormControl('password', [Validators.required])

  form: FormGroup = new FormGroup({
    email: this.email,
    password: this.password
  })

  constructor(
    private store: Store,
  ) { }

  onSubmit() {
    this.store.dispatch(authUser(this.form.value))
  }

  ngOnDestroy(): void {
    this.store.select(selectAuth).subscribe((value) => {
      localStorage.setItem('role', value.role);
    });
  }

  //Error method from Material
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
