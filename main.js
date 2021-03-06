// Google animation controls

var googleController = new ScrollMagic.Controller();
var googleAnimation = gsap.timeline()
  .to(".google-year", {text:"year || 2021", ease: "power0", duration:0.5}, "+=0.5")
  .to(".google-client", {text:"client || Google", ease: "power0", duration:0.5})
  .to(".google-agency", {text:"agency || Man vs Machine", ease: "power0", duration:1})
  .from(".line", {scale: 0, duration: 1}, "-=1");

var nikeScene = new ScrollMagic.Scene({
  triggerElement: "#google",
  triggerHook: 0.5,
  reverse:false
})
.setTween(googleAnimation)
  .addTo(googleController);

// Samsung animation controls

var samsungController = new ScrollMagic.Controller();
var samsungAnimation = gsap.timeline()
  .to(".samsung-year", {text:"year || 2021", ease: "power0", duration:0.5}, "+=0.5")
  .to(".samsung-client", {text:"client || Samsung", ease: "power0", duration:0.5})
  .to(".samsung-agency", {text:"agency || Man vs Machine", ease: "power0", duration:1})
  .from(".line", {scale: 0, duration: 1}, "-=1");

var nikeScene = new ScrollMagic.Scene({
  triggerElement: "#samsung",
  triggerHook: 0.5,
  reverse:false
})
.setTween(samsungAnimation)
  .addTo(samsungController);

// Nike animation controls

var nikeController = new ScrollMagic.Controller();
var nikeAnimation = gsap.timeline()
  .to(".nike-year", {text:"year || 2020", ease: "power0", duration:0.5}, "+=0.5")
  .to(".nike-client", {text:"client || Nike", ease: "power0", duration:0.5})
  .to(".nike-agency", {text:"agency || Stept Studios", ease: "power0", duration:1})
  .from(".line", {scale: 0, duration: 1}, "-=1");

var nikeScene = new ScrollMagic.Scene({
  triggerElement: "#nike",
  triggerHook: 0.5,
  reverse:false
})
.setTween(nikeAnimation)
  .addTo(nikeController);

// Amex animation controls

var amexController = new ScrollMagic.Controller();
var amexAnimation = gsap.timeline()
  .to(".amex-year", {text:"year || 2019", ease: "power0", duration:0.5}, "+=0.5")
  .to(".amex-client", {text:"client || Amex", ease: "power0", duration:0.5})
  .to(".amex-agency", {text:"music supervision || Native", ease: "power0", duration:1})
  .from(".amex-highlight", {opacity:0, duration:2}, "-=1");

var amexScene = new ScrollMagic.Scene({
  triggerElement: "#amex",
  triggerHook: 0.5,
  reverse:false
})
.setTween(amexAnimation)
  .addTo(amexController);

// Swatch animation controls

var swatchController = new ScrollMagic.Controller();
var swatchAnimation = gsap.timeline()
  .to(".swatch-year", {text:"year || 2020", ease: "power0", duration:0.5}, "+=0.5")
  .to(".swatch-client", {text:"client || Swatch", ease: "power0", duration:0.5})
  .to(".swatch-agency", {text:"agency || DBLG", ease: "power0", duration:1})
  .from(".swatch-highlight", {opacity:0, duration:2}, "-=1");

var swatchScene = new ScrollMagic.Scene({
  triggerElement: "#swatch",
  triggerHook: 0.5,
  reverse:false
})
.setTween(swatchAnimation)
  .addTo(swatchController);

// Swatch animation controls

var ttpController = new ScrollMagic.Controller();
var ttpAnimation = gsap.timeline()
  .to(".ttp-year", {text:"year || 2019", ease: "power0", duration:0.5}, "+=0.5")
  .to(".ttp-client", {text:"client || The Technology Project", ease: "power0", duration:1})
  .to(".ttp-agency", {text:"agency || DBLG", ease: "power0", duration:0.5})
  .from(".ttp-highlight", {opacity:0, duration:2}, "-=1");

var ttpScene = new ScrollMagic.Scene({
  triggerElement: "#ttp",
  triggerHook: 0.5,
  reverse:false
})
.setTween(ttpAnimation)
  .addTo(ttpController);