var controller = new ScrollMagic.Controller();
var nikeAnimation = gsap.timeline()
    .from(".nike-title-1", {duration:2, x:-500, opacity: 0, ease: "bounce"})
    .from(".nike-title-2", {y:200, opacity: 0})
    .to(".nike-year", {text:"year || 2020", ease: "power1.in", duration:1}, "+=0.5")
    .to(".nike-client", {text:"client || nike", ease: "power1.in", duration:1})
    .to(".nike-agency", {text:"agency || Sept Studios", ease: "power1.in", duration:1});

    var scene = new ScrollMagic.Scene({
        triggerElement: "#nike-section",
        triggerHook: 0.5,
        reverse:false
      })
        .setTween(nikeAnimation)
        .addTo(controller);