import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
	form: FormGroup;

	constructor(private http: HttpClient, private fb: FormBuilder) {
		this.form = this.fb.group({
			email: ['', [Validators.required, Validators.email]]
		});
	}

	submit() {
		console.log('SUBMIT THIS: ', this.form.value);
	}
}