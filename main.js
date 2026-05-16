document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.getElementById('nav');
  if(nav)window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>20),{passive:true});

  const mb=document.querySelector('.nav-mob'),nl=document.querySelector('.nav-links');
  if(mb&&nl){
    mb.addEventListener('click',()=>{nl.classList.toggle('show');mb.setAttribute('aria-expanded',nl.classList.contains('show'))});
    nl.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nl.classList.remove('show');mb.setAttribute('aria-expanded','false')}));
  }

  const obs=new IntersectionObserver(e=>{e.forEach(el=>{if(el.isIntersecting){el.target.classList.add('vis');obs.unobserve(el.target)}})},{threshold:.12,rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.anim').forEach(el=>obs.observe(el));

  document.querySelectorAll('.faq-q').forEach(b=>{
    b.addEventListener('click',()=>{const it=b.parentElement,o=it.classList.contains('open');document.querySelectorAll('.faq-item.open').forEach(i=>i.classList.remove('open'));if(!o)it.classList.add('open')});
  });

  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{const h=a.getAttribute('href');if(h==='#')return;const t=document.querySelector(h);if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}});
  });
});
