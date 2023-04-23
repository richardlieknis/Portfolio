import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
    isSubmitted: boolean = false;
    minLength: number = 20;
    emailSent: boolean = false;
    emailNotSent: boolean = false;

    constructor(private fb: FormBuilder, private httpClient: HttpClient) {}

    contactForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        message: [
            '',
            [Validators.required, Validators.minLength(this.minLength)],
        ],
    });

    /**
     * Sends email and handles the popup
     */
    sendEmail() {
        this.httpClient
            .post<any>(
                'https://richard-lieknis.developerakademie.net/send_mail/send_mail.php',
                this.setFormData()
            )
            .subscribe({
                complete: () => (this.emailSent = true),
                error: () => (this.emailNotSent = true),
            });
        this.isSubmitted = true;

        setTimeout(() => {
            this.isSubmitted = false;
        }, 3000);

        this.contactForm.reset();
    }

    /**
     * Sets the form data
     * @returns FormData of the contactForm
     */
    setFormData() {
        const data = this.contactForm.value;
        const fd = new FormData();
        fd.append('name', data.name!);
        fd.append('email', data.email!);
        fd.append('message', data.message!);
        return fd;
    }
}
