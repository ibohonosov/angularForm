import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

/**
 * @title Select with custom panel styling
 */

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "app";
  nameControl: FormControl = new FormControl();

  ngOnInit() {
    this.nameControl = new FormControl("");
  }

  // ngForm = new FormGroup({
  //   email: new FormControl("", [
  //     Validators.required,
  //     Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
  //   ]),
  // });
}
