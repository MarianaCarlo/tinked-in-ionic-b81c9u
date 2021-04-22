import { AfterViewInit, Component } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "profile.page.html",
  styleUrls: ["profile.page.scss"]
})
export class ProfilePage implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {}
  // GET DE LA DATABASE PARA VER LA INFORMACIÓN
  onUpdate(form): void {
    console.log("VARIABLE LOCAL FORM: ", form.value);
  }
  todo = {};
  logForm() {
    console.log(this.todo);
  }
}
