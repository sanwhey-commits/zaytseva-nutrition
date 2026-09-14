(()=>{
  const visual=document.createElement('link');visual.rel='stylesheet';visual.href='visual.css?v=2';document.head.appendChild(visual);

  const oldBranch=document.querySelector('.hero__branch');
  if(oldBranch){const img=document.createElement('img');img.className='hero__branch-img';img.src='assets/branch.png';img.alt='';img.setAttribute('aria-hidden','true');oldBranch.replaceWith(img)}

  document.querySelectorAll('.nav a').forEach(a=>{if(a.textContent.trim()==='Контакты')a.href='#contacts'});
  const headerBtn=document.querySelector('.btn--header');if(headerBtn)headerBtn.href='#contacts';
  document.querySelectorAll('.price-card__button').forEach(a=>a.href='#contacts');

  const oldContact=document.querySelector('.contact');
  const oldFooter=document.querySelector('.footer');
  if(!document.querySelector('.contacts')){
    const footer=document.createElement('footer');footer.className='contacts';footer.id='contacts';
    footer.innerHTML=`<div class="shell contacts__grid">
      <div class="contacts__column"><span class="contacts__label">CONTACTS</span><strong>Елизавета Зайцева</strong><p>Нутрициолог с медицинским образованием</p></div>
      <div class="contacts__column"><span class="contacts__label">TELEGRAM</span><a href="#">Написать Елизавете ↗</a><p>Связаться по вопросам консультации и сопровождения</p></div>
      <div class="contacts__column"><span class="contacts__label">ЗАПИСЬ</span><a href="#services">Выбрать формат работы ↗</a><p>Разовая консультация или сопровождение на 4 недели</p></div>
    </div><div class="shell contacts__bottom"><span>© Елизавета Зайцева</span><span>Нутрициологическая работа не заменяет медицинскую диагностику и лечение.</span></div>`;
    if(oldContact)oldContact.insertAdjacentElement('beforebegin',footer);else document.body.appendChild(footer);
  }
  oldContact?.remove();oldFooter?.remove();

  const c=document.querySelector('[data-carousel]');
  if(c){const t=c.querySelector('.carousel__track'),p=document.querySelector('[data-carousel-prev]'),n=document.querySelector('[data-carousel-next]');const step=()=>{const f=t.querySelector('.about-card');return f?f.getBoundingClientRect().width+parseFloat(getComputedStyle(t).gap||18):t.clientWidth};p?.addEventListener('click',()=>t.scrollBy({left:-step(),behavior:'smooth'}));n?.addEventListener('click',()=>t.scrollBy({left:step(),behavior:'smooth'}));t.querySelectorAll('.about-card').forEach(card=>card.addEventListener('click',e=>{if(e.target.closest('a,button'))return;const a=card.getBoundingClientRect(),b=t.getBoundingClientRect(),d=(a.left+a.width/2)-(b.left+b.width/2);if(Math.abs(d)>a.width*.4)t.scrollBy({left:d,behavior:'smooth'})}))}

  const m=document.querySelector('[data-lightbox-modal]'),img=m?.querySelector('.lightbox__image'),x=m?.querySelector('.lightbox__close');
  document.querySelectorAll('[data-lightbox]').forEach(b=>b.addEventListener('click',()=>{if(!m||!img)return;img.src=b.dataset.lightbox;img.alt=b.querySelector('img')?.alt||'Диплом';m.hidden=false;document.body.style.overflow='hidden'}));
  const close=()=>{if(!m)return;m.hidden=true;document.body.style.overflow=''};
  x?.addEventListener('click',close);m?.addEventListener('click',e=>{if(e.target===m)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&m&&!m.hidden)close()});
})();