
class Shirt {
  constructor(
    size,
    color,
    sleeves,
    buttons,
    clean
  ) {
    this.size = size
    this.color = color
    this.sleeves = sleeves
    this.buttons = buttons
    this.clean = clean
  }
  toggleClean() {
    this.clean = !this.clean
  }
}

export default Shirt