import { Component } from '@angular/core';

@Component({
  selector: 'bowls',
  templateUrl: './bowls.component.html',
  styleUrls: ['./bowls.component.scss']
})

export class BowlsComponent {
  public bowls = [
    {name: 'Ab&J', route: 'ab&j'},
    {name: 'Pb&j', route: 'pb&j'},
    {name: 'Acai Breakfast', route: 'acai-breakfast'},
    {name: 'Cupid', route: 'cupid'},
    {name: 'Classic Brazilian', route: 'classic-brazilian'},
    {name: 'Chocolate', route: 'chocolate'},
    {name: 'Hula', route: 'hula'},
    {name: 'Kale Yeah', route: 'kale-yeah'},
    {name: 'Lavender', route: 'lavender'},
    {name: 'Luau', route: 'luau'},
    {name: 'Local', route: 'local'}
  ]

  public acaiBowls = [
    {
      name: 'Ab&j',
      image: 'assets/acai-bowls/abj.jpeg',
      mix: [
        {
          name: 'Almond Milk',
          imageUrl: 'assets/clipart/almond-milk.png',
          alt: 'almond-milk'
        },
        {
          name: 'Almond Butter',
          imageUrl: 'assets/clipart/almond-butter.png',
          alt: 'almond-butter'
        },
        {
          name: 'Frozen Strawberries',
          imageUrl: 'assets/clipart/frozen-strawberries.png',
          alt: 'frozen-strawberries'
        },
        {
          name: 'Frozen Bananas',
          imageUrl: 'assets/clipart/frozen-bananas.png',
          alt: 'frozen-bananas'
        },
        {
          name: 'Frozen Acai Pack',
          imageUrl: 'assets/clipart/acai-berry.png',
          alt: 'acai-pack'
        }
      ],
      toppings: [
        {
          name: 'Honey',
          imageUrl: 'assets/clipart/honey-spoon.png',
          alt: 'honey'
        },
        {
          name: 'Almond Butter Scoop',
          imageUrl: 'assets/clipart/almond-butter-scoop.png',
          alt: 'almond-butter-scoop'
        },
        {
          name: 'Fresh Strawberries',
          imageUrl: 'assets/clipart/fresh-strawberries.png',
          alt: 'fresh-strawberries'
        },
        {
          name: 'Fresh Bananas',
          imageUrl: 'assets/clipart/fresh-bananas.png',
          alt: 'fresh-bananas'
        },
        {
          name: 'Granola',
          imageUrl: 'assets/clipart/granola.png',
          alt: 'granola'
        },
        {
          name: 'Blended Acai',
          imageUrl: 'assets/clipart/acai-berry.png',
          alt: 'acai'
        },
        {
          name: 'Granola',
          imageUrl: 'assets/clipart/granola.png',
          alt: 'granola'
        }
      ]
    },
    {
      name: 'Pb&j',
      image: 'assets/acai-bowls/pbj.jpeg',
      mix: [
        {
          name: 'Almond Milk',
          imageUrl: 'assets/clipart/almond-milk.png',
          alt: 'almond-milk'
        },
        {
          name: 'Peanut Butter',
          imageUrl: 'assets/clipart/peanut-butter.png',
          alt: 'peanut-butter'
        },
        {
          name: 'Frozen Strawberries',
          imageUrl: 'assets/clipart/frozen-strawberries.png',
          alt: 'frozen-strawberries'
        },
        {
          name: 'Frozen Bananas',
          imageUrl: 'assets/clipart/frozen-bananas.png',
          alt: 'frozen-bananas'
        },
        {
          name: 'Frozen Acai Pack',
          imageUrl: 'assets/clipart/acai-berry.png',
          alt: 'acai-pack'
        }
      ],
      toppings: [
        {
          name: 'Honey',
          imageUrl: 'assets/clipart/honey-spoon.png',
          alt: 'honey'
        },
        {
          name: 'Cocao Nibs',
          imageUrl: 'assets/clipart/cocao-nibs.webp',
          alt: 'cocao-nibs'
        },
        {
          name: 'Peanut Butter Scoop',
          imageUrl: 'assets/clipart/peanut-butter-scoop.png',
          alt: 'peanut-butter-scoop'
        },
        {
          name: 'Fresh Strawberries',
          imageUrl: 'assets/clipart/fresh-strawberries.png',
          alt: 'fresh-strawberries'
        },
        {
          name: 'Fresh Bananas',
          imageUrl: 'assets/clipart/fresh-bananas.png',
          alt: 'fresh-bananas'
        },
        {
          name: 'Granola',
          imageUrl: 'assets/clipart/granola.png',
          alt: 'granola'
        },
        {
          name: 'Blended Acai',
          imageUrl: 'assets/clipart/acai-berry.png',
          alt: 'acai'
        },
        {
          name: 'Granola',
          imageUrl: 'assets/clipart/granola.png',
          alt: 'granola'
        }
      ]
    },
    {
      name: 'Acai Breakfast',
      image: 'assets/acai-bowls/acai-breakfast.jpeg',
      mix: [
        {
          name: 'Almond Milk',
          imageUrl: 'assets/clipart/almond-milk.png',
          alt: 'almond-milk'
        },
        {
          name: 'Almond Butter',
          imageUrl: 'assets/clipart/almond-butter.png',
          alt: 'almond-butter'
        },
        {
          name: 'Frozen Bananas',
          imageUrl: 'assets/clipart/frozen-bananas.png',
          alt: 'frozen-bananas'
        },
        {
          name: 'Frozen Blueberries',
          imageUrl: 'assets/clipart/frozen-blueberries.png',
          alt: 'frozen-blueberries'
        },
        {
          name: 'Frozen Acai Pack',
          imageUrl: 'assets/clipart/acai-berry.png',
          alt: 'acai-pack'
        }
      ],
      toppings: [
        {
          name: 'Cocao Nibs',
          imageUrl: 'assets/clipart/cocao-nibs.webp',
          alt: 'cocao-nibs'
        },
        {
          name: 'Chia Seeds',
          imageUrl: 'assets/clipart/chia-seeds.png',
          alt: 'chia-seeds'
        },
        {
          name: 'Fresh Blueberries',
          imageUrl: 'assets/clipart/fresh-blueberries.png',
          alt: 'fresh-blueberries'
        },
        {
          name: 'Fresh Bananas',
          imageUrl: 'assets/clipart/fresh-bananas.png',
          alt: 'fresh-bananas'
        },
        {
          name: 'Granola',
          imageUrl: 'assets/clipart/granola.png',
          alt: 'granola'
        },
        {
          name: 'Blended Acai',
          imageUrl: 'assets/clipart/acai-berry.png',
          alt: 'acai'
        },
        {
          name: 'Granola',
          imageUrl: 'assets/clipart/granola.png',
          alt: 'granola'
        }
      ]
    },
    {
      name: 'Cupid',
      image: 'assets/acai-bowls/cupid.jpeg',
      mix: [
        {
          name: 'Coconut Milk',
          imageUrl: 'assets/clipart/coconut-milk.png',
          alt: 'coconut-milk'
        },
        {
          name: 'Honey',
          imageUrl: 'assets/clipart/honey-spoon.png',
          alt: 'honey'
        },
        {
          name: 'Hemp Seeds',
          imageUrl: 'assets/clipart/hemp-seeds.png',
          alt: 'hemp-seeds'
        },
        {
          name: 'Frozen Cherries',
          imageUrl: 'assets/clipart/cherries.webp',
          alt: 'frozen-cherries'
        },
        {
          name: 'Frozen Strawberries',
          imageUrl: 'assets/clipart/frozen-strawberries.png',
          alt: 'frozen-strawberries'
        },
        {
          name: 'Frozen Acai Pack',
          imageUrl: 'assets/clipart/acai-berry.png',
          alt: 'acai-pack'
        }
      ],
      toppings: [
        {
          name: 'Cocao Nibs',
          imageUrl: 'assets/clipart/cocao-nibs.webp',
          alt: 'cocao-nibs'
        },
        {
          name: 'Coconut Shreds',
          imageUrl: 'assets/clipart/coconut-shreds.png',
          alt: 'coconut-shreds'
        },
        {
          name: 'Honey',
          imageUrl: 'assets/clipart/honey-spoon.png',
          alt: 'honey'
        },
        {
          name: 'Fresh Strawberries',
          imageUrl: 'assets/clipart/fresh-strawberries.png',
          alt: 'fresh-strawberries'
        },
        {
          name: 'Granola',
          imageUrl: 'assets/clipart/granola.png',
          alt: 'granola'
        },
        {
          name: 'Blended Acai',
          imageUrl: 'assets/clipart/acai-berry.png',
          alt: 'acai'
        },
        {
          name: 'Granola',
          imageUrl: 'assets/clipart/granola.png',
          alt: 'granola'
        }
      ]
    },
    {
      name: 'Classic Brazilian',
      image: 'assets/acai-bowls/classic.jpeg',
      mix: [
        {
          name: 'Coconut Milk',
          imageUrl: 'assets/clipart/coconut-milk.png',
          alt: 'coconut-milk'
        },
        {
          name: 'Frozen Bananas',
          imageUrl: 'assets/clipart/frozen-bananas.png',
          alt: 'frozen-bananas'
        },
        {
          name: 'Frozen Acai Pack',
          imageUrl: 'assets/clipart/acai-berry.png',
          alt: 'acai-pack'
        },
        {
          name: 'Frozen Acai Pack',
          imageUrl: 'assets/clipart/acai-berry.png',
          alt: 'acai-pack'
        }
      ],
      toppings: [
        {
          name: 'Honey',
          imageUrl: 'assets/clipart/honey-spoon.png',
          alt: 'honey'
        },
        {
          name: 'Fresh Bananas',
          imageUrl: 'assets/clipart/fresh-bananas.png',
          alt: 'fresh-bananas'
        },
        {
          name: 'Granola',
          imageUrl: 'assets/clipart/granola.png',
          alt: 'granola'
        },
        {
          name: 'Blended Acai',
          imageUrl: 'assets/clipart/acai-berry.png',
          alt: 'acai'
        },
        {
          name: 'Granola',
          imageUrl: 'assets/clipart/granola.png',
          alt: 'granola'
        }
      ]
    },
    {
      name: 'Chocolate',
      image: 'assets/acai-bowls/chocolate.jpeg',
      mix: [
        {
          name: 'Almond Milk',
          imageUrl: 'assets/clipart/almond-milk.png',
          alt: 'almond-milk'
        },
        {
          name: 'Agave',
          imageUrl: 'assets/clipart/agave.png',
          alt: 'agave'
        },
        {
          name: 'Cocao Powder',
          imageUrl: 'assets/clipart/cocao-powder.png',
          alt: 'cocao-powder'
        },
        {
          name: 'Almond Butter',
          imageUrl: 'assets/clipart/almond-butter.png',
          alt: 'almond-butter'
        },
        {
          name: 'Frozen Strawberries',
          imageUrl: 'assets/clipart/frozen-strawberries.png',
          alt: 'frozen-strawberries'
        },
        {
          name: 'Frozen Blueberries',
          imageUrl: 'assets/clipart/frozen-blueberries.png',
          alt: 'frozen-blueberries'
        },
        {
          name: 'Frozen Acai Pack',
          imageUrl: 'assets/clipart/acai-berry.png',
          alt: 'acai-pack'
        }
      ],
      toppings: [
        {
          name: 'Cocao Nibs',
          imageUrl: 'assets/clipart/cocao-nibs.webp',
          alt: 'cocao-nibs'
        },
        {
          name: 'Coconut Shreds',
          imageUrl: 'assets/clipart/coconut-shreds.png',
          alt: 'coconut-shreds'
        },
        {
          name: 'Chia Seeds',
          imageUrl: 'assets/clipart/chia-seeds.png',
          alt: 'chia-seeds'
        },
        {
          name: 'Fresh Blueberries',
          imageUrl: 'assets/clipart/fresh-blueberries.png',
          alt: 'fresh-blueberries'
        },
        {
          name: 'Fresh Strawberries',
          imageUrl: 'assets/clipart/fresh-strawberries.png',
          alt: 'fresh-strawberries'
        },
        {
          name: 'Granola',
          imageUrl: 'assets/clipart/granola.png',
          alt: 'granola'
        },
        {
          name: 'Blended Acai',
          imageUrl: 'assets/clipart/acai-berry.png',
          alt: 'acai'
        },
        {
          name: 'Granola',
          imageUrl: 'assets/clipart/granola.png',
          alt: 'granola'
        }
      ]
    }
  ]
}