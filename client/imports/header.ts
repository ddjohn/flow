console.log("Loading <header.ts>...");

/* Framework */
import "reflect-metadata";
import {Component         } from "@angular/core";
import {LoginButtons      } from 'angular2-meteor-accounts-ui';
import {ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
  selector: "my-header",
  template: `
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container" style="color: white; text-align: right;">
            <login-buttons></login-buttons>
      </div>
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" [routerLink]="['/']">Avelon's Place</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><a [routerLink]="['/about']">About</a></li>
            <li><a [routerLink]="['/top5']">Top5</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  directives: [LoginButtons, ROUTER_DIRECTIVES]
})

export class MyHeader { }
