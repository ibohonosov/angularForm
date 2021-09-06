import { Component } from "@angular/core";
import { Form } from "../form";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent {
  frameworks = ["", "angular", "react", "vue"];
  angular = ["1.1.1", "1.2.1", "1.3.3"];
  react = ["2.1.2", "3.2.4", "4.3.1"];
  vue = ["3.3.1", "5.2.1", "5.1.3"];

  
  frameVersion() {
    console.log('0');
  }

  model = new Form("", "", "", this.frameworks[0], "", "","");

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newForm() {
    this.model = new Form("", "", "", "", "", "","");
  }
}

// export class FormComponent implements OnInit {

//   registrationForm!: FormGroup;

//   constructor() { }

//   ngOnInit(): void {
//     this.registrationForm = new FormGroup({
//       name: new FormGroup({
//         firstName: new FormControl(),
//         lastName: new FormControl()
//       }),
//       dateOfBirth: new FormControl(),
//       framework: new FormControl(),
//       frameworkVersion: new FormControl(),
//       email: new FormControl(),
//       hobby: new FormControl()
//     });
//   }

// }
