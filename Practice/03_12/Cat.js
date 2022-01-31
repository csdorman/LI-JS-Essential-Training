
class Cat {
  constructor(
    type,
    color,
    sex,
    hungry,
    sleeping,
  ) {
    this.type = type
    this.color = color
    this.sex = sex
    this.hungry = hungry
    this.sleeping = sleeping
  }
  toggleHungry() {
    this.hungry = !this.hungry
  }
  toggleSleeping() {
    this.sleeping = !this.sleeping
  }
}

export default Cat