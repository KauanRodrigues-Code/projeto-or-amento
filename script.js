gsap.registerPlugin(ScrollTrigger);

/* Scroll Reveal */
gsap.utils.toArray(".reveal").forEach((el)=>{
  gsap.to(el,{
    scrollTrigger:{
      trigger:el,
      start:"top 85%"
    },
    y:0,
    opacity:1,
    duration:1.2,
    ease:"power3.out"
  });
});

/* Parallax nas imagens */
gsap.utils.toArray(".watch").forEach((img)=>{
  gsap.to(img,{
    scrollTrigger:{
      trigger:img,
      start:"top bottom",
      end:"bottom top",
      scrub:true
    },
    y:-120,
    scale:1.1,
    rotate:5
  });
});

/* Counter Animation */
const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{
  ScrollTrigger.create({
    trigger:counter,
    start:"top 85%",
    onEnter:()=>animateCounter(counter)
  });
});

function animateCounter(counter){
  const target=parseFloat(counter.getAttribute("data-target"));
  let count=0;
  const increment=target/60;

  function update(){
    count+=increment;
    if(count<target){
      counter.innerText=count.toFixed(1);
      requestAnimationFrame(update);
    }else{
      counter.innerText=target;
    }
  }
  update();
}