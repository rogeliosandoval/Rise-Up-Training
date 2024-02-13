import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'smoothies',
  templateUrl: './smoothies.component.html',
  styleUrls: ['./smoothies.component.scss']
})

export class SmoothiesComponent {
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

  public smoothies = [
    {name: 'Cali', route: 'cali'},
    {name: 'Chocolate Banana', route: 'chocolate-banana'},
    {name: 'Cloud 9', route: 'cloud-nine'},
    {name: 'Honey Bear', route: 'honey-bear'},
    {name: 'Jules', route: 'jules'},
    {name: 'Professor', route: 'professor'},
    {name: 'Reef', route: 'reef'},
    {name: 'Strawberry Banana', route: 'strawberry-banana'}
  ]

  public scrollToSmoothie(route: string): void {
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


  public proteinSmoothies = [
    {name: 'Felix', route: 'felix'},
    {name: 'Mr. Perfect', route: 'mr-perfect'},
    {name: 'Popeye', route: 'popeye'},
    {name: 'Protein Bear', route: 'protein-bear'}
  ]

  public coffeeMatchaSmoothies = [
    {name: 'Coffee Bear', route: 'coffee-bear'},
    {name: 'Coffee Fox', route: 'coffee-fox'},
    {name: 'Vegan', route: 'vegan'},
    {name: 'Mitchie Matcha', route: 'mitchie-matcha'},
    {name: 'Matcha Monster', route: 'matcha-monster'}
  ]

  public smoothieRecipes = [
    {
      name: 'Cali',
      route: 'cali',
      mix: [
        {
          name: 'Coconut Water',
          imageUrl: 'assets/clipart/coconut-water.png',
          alt: 'coconut-water'
        },
        {
          name: 'Agave',
          imageUrl: 'assets/clipart/agave.png',
          alt: 'agave'
        },
        {
          name: 'Frozen Pinapple',
          imageUrl: 'assets/clipart/frozen-pinapple.png',
          alt: 'frozen-pinapple'
        },
        {
          name: 'Frozen Strawberries',
          imageUrl: 'assets/clipart/frozen-strawberries.png',
          alt: 'frozen-strawberries'
        },
        {
          name: 'Pitaya',
          imageUrl: 'assets/clipart/pitaya.png',
          alt: 'pitaya'
        }
      ]
    },
    {
      name: 'Chocolate Banana',
      route: 'chocolate-banana',
      mix: [
        {
          name: 'Almond Milk',
          imageUrl: 'assets/clipart/almond-milk.png',
          alt: 'almond-milk'
        },
        {
          name: 'Frozen Bananas',
          imageUrl: 'assets/clipart/frozen-bananas.png',
          alt: 'frozen-bananas'
        },
        {
          name: 'Almond Butter',
          imageUrl: 'assets/clipart/almond-butter.png',
          alt: 'almond-butter'
        },
        {
          name: 'Cacao Nibs',
          imageUrl: 'assets/clipart/cacao-nibs.webp',
          alt: 'cacao-nibs'
        },
        {
          name: 'Cacao Powder',
          imageUrl: 'assets/clipart/cacao-powder.png',
          alt: 'cacao-powder'
        },
        {
          name: 'Chia Seeds',
          imageUrl: 'assets/clipart/chia-seeds.png',
          alt: 'chia-seeds'
        }
      ]
    },
    {
      name: 'Cloud 9',
      route: 'cloud-nine',
      mix: [
        {
          name: 'Apple Juice',
          imageUrl: 'assets/clipart/apple-juice.png',
          alt: 'apple-juice'
        },
        {
          name: 'Spinach',
          imageUrl: 'assets/clipart/spinach.png',
          alt: 'spinach'
        },
        {
          name: 'Kale',
          imageUrl: 'assets/clipart/kale.png',
          alt: 'kale'
        },
        {
          name: 'Frozen Pinapple',
          imageUrl: 'assets/clipart/frozen-pinapple.png',
          alt: 'frozen-pinapple'
        },
        {
          name: 'Frozen Mango',
          imageUrl: 'assets/clipart/mango.png',
          alt: 'mango'
        }
      ]
    },
    {
      name: 'Honey Bear',
      route: 'honey-bear',
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
          name: 'Honey',
          imageUrl: 'assets/clipart/honey-spoon.png',
          alt: 'honey'
        },
        {
          name: 'Cinnamon',
          imageUrl: 'assets/clipart/cinnamon.png',
          alt: 'cinnamon'
        },
        {
          name: 'Frozen Bananas',
          imageUrl: 'assets/clipart/frozen-bananas.png',
          alt: 'frozen-bananas'
        }
      ]
    },
    {
      name: 'Jules',
      route: 'jules',
      mix: [
        {
          name: 'Almond Milk',
          imageUrl: 'assets/clipart/almond-milk.png',
          alt: 'almond-milk'
        },
        {
          name: 'Half Pack of Acai',
          imageUrl: 'assets/clipart/acai-berry.png',
          alt: 'acai'
        },
        {
          name: 'Honey',
          imageUrl: 'assets/clipart/honey-spoon.png',
          alt: 'honey'
        },
        {
          name: 'Frozen Bananas',
          imageUrl: 'assets/clipart/frozen-bananas.png',
          alt: 'frozen-bananas'
        },
        {
          name: 'Frozen Strawberries',
          imageUrl: 'assets/clipart/frozen-strawberries.png',
          alt: 'frozen-strawberries'
        }
      ]
    },
    {
      name: 'Professor',
      route: 'professor',
      mix: [
        {
          name: 'Coconut Milk',
          imageUrl: 'assets/clipart/coconut-milk.png',
          alt: 'coconut-milk'
        },
        {
          name: 'Spinach',
          imageUrl: 'assets/clipart/spinach.png',
          alt: 'spinach'
        },
        {
          name: 'Frozen Bananas',
          imageUrl: 'assets/clipart/frozen-bananas.png',
          alt: 'frozen-bananas'
        },
        {
          name: 'Frozen Cherries',
          imageUrl: 'assets/clipart/cherries.webp',
          alt: 'cherries'
        },
        {
          name: 'Cacao',
          imageUrl: 'assets/clipart/cacao-powder.png',
          alt: 'cacao'
        }
      ]
    },
    {
      name: 'Reef',
      route: 'reef',
      mix: [
        {
          name: 'Apple Juice',
          imageUrl: 'assets/clipart/apple-juice.png',
          alt: 'apple-juice'
        },
        {
          name: 'Frozen Blueberries',
          imageUrl: 'assets/clipart/frozen-blueberries.png',
          alt: 'frozen-blueberries'
        },
        {
          name: 'Forzen Mango',
          imageUrl: 'assets/clipart/mango.png',
          alt: 'mango'
        },
        {
          name: 'Flax',
          imageUrl: 'assets/clipart/flax.png',
          alt: 'flax'
        },
        {
          name: 'Kale',
          imageUrl: 'assets/clipart/kale.png',
          alt: 'kale'
        }
      ]
    },
    {
      name: 'Strawberry Banana',
      route: 'strawberry-banana',
      mix: [
        {
          name: 'Apple Juice',
          imageUrl: 'assets/clipart/apple-juice.png',
          alt: 'apple-juice'
        },
        {
          name: 'Frozen Bananas',
          imageUrl: 'assets/clipart/frozen-bananas.png',
          alt: 'frozen-bananas'
        },
        {
          name: 'Frozen Strawberries',
          imageUrl: 'assets/clipart/frozen-strawberries.png',
          alt: 'frozen-strawberries'
        }
      ]
    }
  ]

  public proteinSmoothieRecipes = [
    {
      name: 'Felix',
      route: 'felix',
      mix: [
        {
          name: 'Coconut Water',
          imageUrl: 'assets/clipart/coconut-water.png',
          alt: 'coconut-water'
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
          name: 'Frozen Cherries',
          imageUrl: 'assets/clipart/cherries.webp',
          alt: 'cherries'
        },
        {
          name: 'Almond Butter',
          imageUrl: 'assets/clipart/almond-butter.png',
          alt: 'almond-butter'
        },
        {
          name: 'Cacao',
          imageUrl: 'assets/clipart/cacao-powder.png',
          alt: 'cacao'
        },
        {
          name: 'Cinnamon',
          imageUrl: 'assets/clipart/cinnamon.png',
          alt: 'cinnamon'
        },
        {
          name: 'MCT Oil',
          imageUrl: 'assets/clipart/mct-oil.png',
          alt: 'mct-oil'
        },
        {
          name: 'Vegan Vanilla Protein',
          imageUrl: 'assets/clipart/vanilla-protein.png',
          alt: 'vanilla-protein'
        }
      ]
    },
    {
      name: 'Mr. Perfect',
      route: 'mr-perfect',
      mix: [
        {
          name: 'Coconut Milk',
          imageUrl: 'assets/clipart/coconut-milk.png',
          alt: 'coconut-milk'
        },
        {
          name: 'SFH Whey Protein',
          imageUrl: 'assets/clipart/vanilla-protein.png',
          alt: 'protein'
        },
        {
          name: 'Frozen Bananas',
          imageUrl: 'assets/clipart/frozen-bananas.png',
          alt: 'frozen-bananas'
        }
      ]
    },
    {
      name: 'Popeye',
      route: 'popeye',
      mix: [
        {
          name: 'Almond Milk',
          imageUrl: 'assets/clipart/almond-milk.png',
          alt: 'almond-milk'
        },
        {
          name: 'Half Pack of Acai',
          imageUrl: 'assets/clipart/acai-berry.png',
          alt: 'acai'
        },
        {
          name: 'Frozen Bananas',
          imageUrl: 'assets/clipart/frozen-bananas.png',
          alt: 'frozen-bananas'
        },
        {
          name: 'Frozen Pinapple',
          imageUrl: 'assets/clipart/frozen-pinapple.png',
          alt: 'frozen-pinapple'
        },
        {
          name: 'Avocado',
          imageUrl: 'assets/clipart/avocados.webp',
          alt: 'avocado'
        },
        {
          name: 'Spinach',
          imageUrl: 'assets/clipart/spinach.png',
          alt: 'spinach'
        },
        {
          name: 'Chia Seeds',
          imageUrl: 'assets/clipart/chia-seeds.png',
          alt: 'chia-seeds'
        },
        {
          name: 'Flax',
          imageUrl: 'assets/clipart/flax.png',
          alt: 'flax'
        },
        {
          name: 'Vegan Vanilla Protein',
          imageUrl: 'assets/clipart/vanilla-protein.png',
          alt: 'vanilla-protein'
        }
      ]
    },
    {
      name: 'Protein Bear',
      route: 'protein-bear',
      mix: [
        {
          name: 'Almond Milk',
          imageUrl: 'assets/clipart/almond-milk.png',
          alt: 'almond-milk'
        },
        {
          name: 'Frozen Bananas',
          imageUrl: 'assets/clipart/frozen-bananas.png',
          alt: 'frozen-bananas'
        },
        {
          name: 'Almond Butter',
          imageUrl: 'assets/clipart/almond-butter.png',
          alt: 'almond-butter'
        },
        {
          name: 'Honey',
          imageUrl: 'assets/clipart/honey-spoon.png',
          alt: 'honey'
        },
        {
          name: 'Cinnamon',
          imageUrl: 'assets/clipart/cinnamon.png',
          alt: 'cinnamon'
        },
        {
          name: 'Vegan Vanilla Protein',
          imageUrl: 'assets/clipart/vanilla-protein.png',
          alt: 'vanilla-protein'
        }
      ]
    }
  ]

  public coffeeMatchaSmoothieRecipes = [
    {
      name: 'Coffee Bear',
      route: 'coffee-bear',
      mix: [
        {
          name: 'Almond Milk',
          imageUrl: 'assets/clipart/almond-milk.png',
          alt: 'almond-milk'
        },
        {
          name: 'Shot of Espresso',
          imageUrl: 'assets/clipart/espresso.png',
          alt: 'espresso'
        },
        {
          name: 'Frozen Bananas',
          imageUrl: 'assets/clipart/frozen-bananas.png',
          alt: 'frozen-bananas'
        },
        {
          name: 'Almond Butter',
          imageUrl: 'assets/clipart/almond-butter.png',
          alt: 'almond-butter'
        },
        {
          name: 'Honey',
          imageUrl: 'assets/clipart/honey-spoon.png',
          alt: 'honey'
        },
        {
          name: 'Cinnamon',
          imageUrl: 'assets/clipart/cinnamon.png',
          alt: 'cinnamon'
        }
      ]
    },
    {
      name: 'Coffee Fox',
      route: 'coffee-fox',
      mix: [
        {
          name: 'Almond Milk',
          imageUrl: 'assets/clipart/almond-milk.png',
          alt: 'almond-milk'
        },
        {
          name: 'Shot of Espresso',
          imageUrl: 'assets/clipart/espresso.png',
          alt: 'espresso'
        },
        {
          name: 'Frozen Bananas',
          imageUrl: 'assets/clipart/frozen-bananas.png',
          alt: 'frozen-bananas'
        },
        {
          name: 'Almond Butter',
          imageUrl: 'assets/clipart/almond-butter.png',
          alt: 'almond-butter'
        },
        {
          name: 'Cacao Nibs',
          imageUrl: 'assets/clipart/cacao-nibs.webp',
          alt: 'cacao-nibs'
        },
        {
          name: 'Flax',
          imageUrl: 'assets/clipart/flax.png',
          alt: 'flax'
        },
        {
          name: 'Cinnamon',
          imageUrl: 'assets/clipart/cinnamon.png',
          alt: 'cinnamon'
        }
      ]
    },
    {
      name: 'Vegan',
      route: 'vegan',
      mix: [
        {
          name: 'Almond Milk',
          imageUrl: 'assets/clipart/almond-milk.png',
          alt: 'almond-milk'
        },
        {
          name: 'Shot of Espresso',
          imageUrl: 'assets/clipart/espresso.png',
          alt: 'espresso'
        },
        {
          name: 'Frozen Bananas',
          imageUrl: 'assets/clipart/frozen-bananas.png',
          alt: 'frozen-bananas'
        },
        {
          name: 'Almond Butter',
          imageUrl: 'assets/clipart/almond-butter.png',
          alt: 'almond-butter'
        },
        {
          name: 'Agave',
          imageUrl: 'assets/clipart/agave.png',
          alt: 'agave'
        },
        {
          name: 'Hemp Seeds',
          imageUrl: 'assets/clipart/hemp-seeds.png',
          alt: 'hemp-seeds'
        }
      ]
    },
    {
      name: 'Mitchie Matcha',
      route: 'mitchie-matcha',
      mix: [
        {
          name: 'Almond Milk',
          imageUrl: 'assets/clipart/almond-milk.png',
          alt: 'almond-milk'
        },
        {
          name: 'Frozen Bananas',
          imageUrl: 'assets/clipart/frozen-bananas.png',
          alt: 'frozen-bananas'
        },
        {
          name: 'Chia Seeds',
          imageUrl: 'assets/clipart/chia-seeds.png',
          alt: 'chia-seeds'
        },
        {
          name: 'Matcha',
          imageUrl: 'assets/clipart/matcha.png',
          alt: 'matcha'
        }
      ]
    },
    {
      name: 'Matcha Monster',
      route: 'matcha-monster',
      mix: [
        {
          name: 'Apple Juice',
          imageUrl: 'assets/clipart/apple-juice.png',
          alt: 'apple-juice'
        },
        {
          name: 'Spinach',
          imageUrl: 'assets/clipart/spinach.png',
          alt: 'spinach'
        },
        {
          name: 'Kale',
          imageUrl: 'assets/clipart/kale.png',
          alt: 'kale'
        },
        {
          name: 'Matcha',
          imageUrl: 'assets/clipart/matcha.png',
          alt: 'matcha'
        },
        {
          name: 'Frozen Strawberries',
          imageUrl: 'assets/clipart/frozen-strawberries.png',
          alt: 'frozen-strawberries'
        }
      ]
    }
  ]
}