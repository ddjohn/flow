console.log("Loading <about.ts>...");

/* Framework */
import "reflect-metadata";
import {Component} from "@angular/core";

/* Stuff */
import template from "./about.html";

@Component({
  selector: "about",
  template
})
export class About {};
