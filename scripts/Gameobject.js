class GameObject {
  constructor({ config }) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.sprite = new Sprite({
      config: {
        gameObject: this,
        src: config.src || './img/characters/people/hero.png',
      }
    })
  }
}
