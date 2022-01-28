
class Horn {
  constructor(
    model,
    type,
    material,
    inCase,
    good,
  ) {
    this.model = model
    this.type = type
    this.material = material
    this.inCase = inCase
    this.good = good
  }
  toggleInCase() {
    if (this.inCase == true) {
      this.inCase = false
    } else {
      this.inCase = true
    }
  }
}

export default Horn