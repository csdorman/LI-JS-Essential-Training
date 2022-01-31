
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
    this.inCase = !this.inCase
    }
}

export default Horn