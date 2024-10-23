import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {

  redirectToYelp(){
    window.open('https://www.yelp.com/biz/zest-4-construction-san-jose-5', '_blank');

  }
}
