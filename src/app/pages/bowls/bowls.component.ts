import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'bowls',
  templateUrl: './bowls.component.html',
  styleUrls: ['./bowls.component.scss']
})

export class BowlsComponent {
  public showScroll: boolean = false;

  constructor(
    private scroller: ViewportScroller
  ){
    window.addEventListener('scroll', (e) => {
      if (window.scrollY >= 800) {
        this.showScroll = true;
      } else {
        this.showScroll = false;
      }
    });
  }

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

  public scrollToBowl(route: string): void {
    const element = document.getElementById(route);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  public scrollToTop(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  public acaiBowls = [
    {
      name: 'Ab&j',
      image: 'assets/acai-bowls/abj.jpeg',
      route: 'ab&j',
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
      route: 'pb&j',
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
          name: 'Cacao Nibs',
          imageUrl: 'assets/clipart/cacao-nibs.webp',
          alt: 'cacao-nibs'
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
      route: 'acai-breakfast',
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
          name: 'Cacao Nibs',
          imageUrl: 'assets/clipart/cacao-nibs.webp',
          alt: 'cacao-nibs'
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
      route: 'cupid',
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
          name: 'Cacao Nibs',
          imageUrl: 'assets/clipart/cacao-nibs.webp',
          alt: 'cacao-nibs'
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
      route: 'classic-brazilian',
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
      route: 'chocolate',
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
          name: 'Cacao Powder',
          imageUrl: 'assets/clipart/cacao-powder.png',
          alt: 'cacao-powder'
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
          name: 'Cacao Nibs',
          imageUrl: 'assets/clipart/cacao-nibs.webp',
          alt: 'cacao-nibs'
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
      name: 'Hula',
      image: 'assets/acai-bowls/hula.jpeg',
      route: 'hula',
      mix: [
        {
          name: 'Apple Juice',
          imageUrl: 'assets/clipart/apple-juice.png',
          alt: 'apple-juice'
        },
        {
          name: 'Frozen Mango',
          imageUrl: 'assets/clipart/mango.png',
          alt: 'mango'
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
          name: 'Honey',
          imageUrl: 'assets/clipart/honey-spoon.png',
          alt: 'honey'
        },
        {
          name: 'Coconut Shreds',
          imageUrl: 'assets/clipart/coconut-shreds.png',
          alt: 'coconut-shreds'
        },
        {
          name: 'Pinapple Slices',
          imageUrl: 'assets/clipart/pinapple.png',
          alt: 'pinapple'
        },
        {
          name: 'Fresh Blueberries',
          imageUrl: 'assets/clipart/fresh-blueberries.png',
          alt: 'fresh-blueberries'
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
      name: 'Kale Yeah',
      image: 'assets/acai-bowls/kale-yeah.jpeg',
      route: 'kale-yeah',
      mix: [
        {
          name: 'Apple Juice',
          imageUrl: 'assets/clipart/apple-juice.png',
          alt: 'apple-juice'
        },
        {
          name: 'Kale',
          imageUrl: 'assets/clipart/kale.png',
          alt: 'kale'
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
          name: 'Coconut Shreds',
          imageUrl: 'assets/clipart/coconut-shreds.png',
          alt: 'coconut-shreds'
        },
        {
          name: 'Fresh Bananas',
          imageUrl: 'assets/clipart/fresh-bananas.png',
          alt: 'fresh-bananas'
        },
        {
          name: 'Fresh Blueberries',
          imageUrl: 'assets/clipart/fresh-blueberries.png',
          alt: 'fresh-blueberries'
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
      name: 'Lavender',
      image: 'assets/acai-bowls/lavender.jpeg',
      route: 'lavender',
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
          name: 'Lavender',
          imageUrl: 'assets/clipart/lavender.png',
          alt: 'lavender'
        },
        {
          name: 'Avocados',
          imageUrl: 'assets/clipart/avocados.webp',
          alt: 'avocado'
        },
        {
          name: 'Frozen Acai Pack',
          imageUrl: 'assets/clipart/acai-berry.png',
          alt: 'acai-pack'
        }
      ],
      toppings: [
        {
          name: 'Goji Berries',
          imageUrl: 'assets/clipart/goji-berries.png',
          alt: 'goji-berries'
        },
        {
          name: 'Bee Pollen',
          imageUrl: 'assets/clipart/bee-pollen.png',
          alt: 'bee-bollen'
        },
        {
          name: 'Fresh Blueberries',
          imageUrl: 'assets/clipart/fresh-blueberries.png',
          alt: 'fresh-blueberries'
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
      name: 'Luau',
      image: 'assets/acai-bowls/luau.jpeg',
      route: 'luau',
      mix: [
        {
          name: 'Coconut Milk',
          imageUrl: 'assets/clipart/coconut-milk.png',
          alt: 'coconut-milk'
        },
        {
          name: 'Frozen Mango',
          imageUrl: 'assets/clipart/mango.png',
          alt: 'mango'
        },
        {
          name: 'Frozen Pinapple',
          imageUrl: 'assets/clipart/frozen-pinapple.png',
          alt: 'frozen-pinapple'
        },
        {
          name: 'Spinach',
          imageUrl: 'assets/clipart/spinach.png',
          alt: 'spinach'
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
          name: 'Coconut Shreds',
          imageUrl: 'assets/clipart/coconut-shreds.png',
          alt: 'coconut-shreds'
        },
        {
          name: 'Pinapple Slices',
          imageUrl: 'assets/clipart/pinapple.png',
          alt: 'pinapple'
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