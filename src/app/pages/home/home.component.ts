import { Component } from "@angular/core";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  public links = [
    {url: 'assets/clipart/smoothies.png', label: 'Smoothies', route: 'smoothies'},
    {url: 'assets/clipart/3d-acai-bowl.webp', label: 'Acai Bowls', route: 'bowls'},
    {url: 'assets/clipart/coffee.png', label: 'Coffee', route: 'coffee'}
  ]
}