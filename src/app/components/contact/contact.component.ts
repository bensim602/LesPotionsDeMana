import {Component, Inject, OnInit} from '@angular/core';
import {Page} from "../../model/page";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  current_page = Page.CONTACT;


  constructor(private http: HttpClient,
              private formBuilder: FormBuilder,
              @Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = false;
    let message = "NAME: " + this.form.value ['name'] + "\n"
    message = message + "PHONE: " + this.form.value ['phone'] + "\n"
    message = message + "EMAIL: " + this.form.value ['email'] + "\n"
    message = message + "MESSAGE: \n" + this.form.value ['message']
    const formData = new FormData();
    this.form.reset();
    this.document.getElementById('top').scrollIntoView();

    formData.append('message', message)

    const url = "https://formspree.io/f/xdobzpnv";

    this.http.post(url,formData).subscribe(res => {
      this.submitted = true;
    });
  }

}
