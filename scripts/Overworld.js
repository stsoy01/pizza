class Overworld {
  constructor({ config, name }) {
    this.element = config.element;
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
  }


  init() {
    const image = new Image();
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0)
    }
    image.src = './img/maps/DemoLower.png'

    //Place game objects 
    const hero = new GameObject({
      config: {
        x: 5,
        y: 6
      }
    })

    const npc1 = new GameObject({
      config: {
        x: 7,
        y: 9,
        src: './img/characters/people/npc1.png'
      }
    })

    setTimeout(() => {

      hero.sprite.draw(this.ctx)
      npc1.sprite.draw(this.ctx)
    }, 200)
  }

}
