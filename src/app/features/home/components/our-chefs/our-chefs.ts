import { Component } from '@angular/core';
import { Container } from '../../../../shared/components/container/container';
import { CHEFS } from '../../data/chef.data';

@Component({
  selector: 'app-our-chefs',
  imports: [Container],
  templateUrl: './our-chefs.html',
  styleUrl: './our-chefs.css',
})
export class OurChefs {
  chefs = CHEFS;
}