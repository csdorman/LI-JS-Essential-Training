
class Book {
  constructor(
    title,
    author,
    pages,
    topic,
    hasRead,
    startedOn,
    finishedOn,
    timeToRead,
    timeSinceStarted
  ) {
    this.title = title
    this.author = author
    this.pages = pages
    this.topic = topic
    this.hasRead = hasRead
    this.startedOn = startedOn
    this.finishedOn = finishedOn
    this.timeToRead = timeToRead
    this.timeSinceStarted = timeSinceStarted
  }
  toggleHasRead() {
    this.hasRead = !this.hasRead
  }
  readingTime() {
    let bookStarted = new Date(this.startedOn)
    let bookFinished = new Date(this.finishedOn)
    let elapsed = bookFinished - bookStarted
    return Math.floor(elapsed / (1000 * 3600 * 24))
  }
  currentReadingTime() {
    let now = new Date()
    let bookStarted = new Date(this.startedOn)
    let elapsed = now - bookStarted
    return Math.floor(elapsed / (1000 * 3600 * 24))
  }
}

export default Book