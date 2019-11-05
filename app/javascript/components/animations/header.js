import anime from "animejs/lib/anime.es.js";


export default (isExpanded, trigger, setTrigger) => {
  if (isExpanded) {
    setTrigger(true);
    anime({
      targets: ".topInitial",
      translateX: -(document.querySelector('.topInitial').offsetWidth),
      easing: "easeInOutSine",
      duration: 200,
    });
    anime({
      targets: ".topLinks",
      translateX: 0,
      easing: "easeInOutSine",
      delay: 300,
      duration: 500,
    });
    anime({
      targets: ".bottomInitial",
      translateX: (document.querySelector('.bottomInitial').offsetWidth),
      easing: "easeInOutSine",
      duration: 200,
    });
    anime({
      targets: ".bottomLinks",
      translateX: 0,
      easing: "easeInOutSine",
      delay: 300,
      duration: 500,
    });
  } else {
    if (trigger) {
      anime({
        targets: ".topInitial",
        translateX: 0,
        easing: "easeInOutSine",
        delay: 600,
        duration: 200,
      });
      anime({
        targets: ".topLinks",
        translateX: -(document.querySelector('.topLinks').offsetWidth),
        easing: "easeInOutSine",
        duration: 500,
      });
      anime({
        targets: ".bottomInitial",
        translateX: 0,
        easing: "easeInOutSine",
        delay: 600,
        duration: 200,
      });
      anime({
        targets: ".bottomLinks",
        translateX: (document.querySelector('.bottomLinks').offsetWidth),
        duration: 500,
        easing: "easeInOutSine",
      });
    } else {
      anime({
        targets: ".topLinks",
        translateX: document.querySelector('.topLinks').offsetWidth * -1,
        duration: 0,
      });
      anime({
        targets: ".bottomLinks",
        translateX: document.querySelector('.bottomLinks').offsetWidth,
        duration: 0,
      });
    }
  }
}