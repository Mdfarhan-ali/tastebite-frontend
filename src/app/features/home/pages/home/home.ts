import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";
import { WhyChooseUs } from "../../components/why-choose-us/why-choose-us";
import { PopularDishes } from '../../components/popular-dishes/popular-dishes';

@Component({
  selector: 'app-home',
  imports: [Hero, WhyChooseUs, PopularDishes],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
