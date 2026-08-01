import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";
import { WhyChooseUs } from "../../components/why-choose-us/why-choose-us";

@Component({
  selector: 'app-home',
  imports: [Hero, WhyChooseUs],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
