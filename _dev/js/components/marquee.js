import $ from 'jquery';

export default class Marquee {
  constructor(el, speed = 150) {
    this.el = el;
    this.speed = 150;
  }
  init() {
    let $self = this.el;

    if ($self.clientWidth > $self.scrollWidth) {
      // If the text is larger than the container, then "MARQUEE IT !!!" :)
      setInterval(runTextMarquee, this.speed, $self, this.speed);
    }
  }

  runTextMarquee(el, speed) {
    let noDuplicates = Math.floor(el.clientWidth / el.scrollWidth);
    let duplicates = [];

    el.each((index) => {
      let $el = $(this);

    });
  }
}
