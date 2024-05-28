class Overworld {
  constructor({ config }) {
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

    const x = 5;
    const y = 6

    const shadow = new Image();
    shadow.onload = () => {
      this.ctx.drawImage(
        shadow,
        0, //left cut
        0, //top cut
        32, // width of cut (width of hero in pixels) 
        32, //heigth of cut (heigth of hero in pixels)
        x * 16 - 8, //hero position X
        y * 16  - 18, //hero position Y
        32,
        32
      )
    }
    shadow.src = './img/characters/shadow.png'

    const hero = new Image();
    hero.onload = () => {
      this.ctx.drawImage(
        hero,
        0, //left cut
        0, //top cut
        32, // width of cut (width of hero in pixels) 
        32, //heigth of cut (heigth of hero in pixels)
        x * 16 - 8, //hero position X
        y * 16  - 18, //hero position Y
        32,
        32
      )
    }
    hero.src = './img/characters/people/hero.png'

  }

}
