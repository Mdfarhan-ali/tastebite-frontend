import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";
import { WhyChooseUs } from "../../components/why-choose-us/why-choose-us";
import { PopularDishes } from '../../components/popular-dishes/popular-dishes';
import { SpecialOffer } from "../../components/special-offer/special-offer";
import { OurChefs } from "../../components/our-chefs/our-chefs";

@Component({
  selector: 'app-home',
  imports: [Hero, WhyChooseUs, PopularDishes, SpecialOffer, OurChefs],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
