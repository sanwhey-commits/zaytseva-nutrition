(()=>{
  const visual=document.createElement('link');visual.rel='stylesheet';visual.href='visual.css?v=3';document.head.appendChild(visual);

  const contactStyle=document.createElement('style');
  contactStyle.textContent=`
    .contact,.footer{display:none!important}
    .contacts{background:#87985f;color:#fff;padding:54px 0 24px}
    .contacts__layout{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(300px,.72fr);gap:92px;align-items:start}
    .contacts__label{display:block;margin-bottom:24px;font-size:11px;line-height:1;letter-spacing:.32em;text-transform:uppercase;font-weight:600;color:rgba(255,255,255,.88)}
    .contacts__title{margin:0;font-family:"Manrope",sans-serif;font-size:clamp(38px,4.4vw,56px);line-height:1.15;font-weight:300;letter-spacing:-.04em;color:#fffaf2}
    .contacts__lead{margin:18px 0 27px;max-width:570px;font-size:18px;line-height:1.55;font-weight:300;color:rgba(255,255,255,.93)}
    .contacts__button{display:inline-flex;align-items:center;justify-content:center;gap:16px;min-height:58px;padding:0 31px;border-radius:999px;background:#ef7756;color:#fff;font-size:15px;font-weight:500;transition:.2s}
    .contacts__button:hover{transform:translateY(-1px);opacity:.97}
    .contacts__right{display:grid;gap:22px;padding-top:2px}
    .contacts__item-label{display:block;margin-bottom:7px;font-size:11px;line-height:1;letter-spacing:.28em;text-transform:uppercase;font-weight:600;color:rgba(255,255,255,.82)}
    .contacts__item-value{display:inline-block;font-size:20px;line-height:1.35;font-weight:400;color:#fffaf2}
    .contacts__item-value--text{font-size:18px}
    .contacts__bottom{margin-top:49px;padding-top:21px;border-top:1px solid rgba(255,255,255,.28);display:flex;justify-content:space-between;gap:28px;font-size:13px;line-height:1.45;color:rgba(255,255,255,.92)}
    .contacts__bottom span:last-child{text-align:right}
    @media(max-width:900px){.contacts{padding:44px 0 22px}.contacts__layout{grid-template-columns:1fr;gap:38px}.contacts__right{grid-template-columns:1fr 1fr;gap:24px 34px}.contacts__bottom{margin-top:38px}}
    @media(max-width:560px){.contacts{padding:38px 0 22px}.contacts__label{margin-bottom:18px;font-size:9px}.contacts__title{font-size:34px;line-height:1.18}.contacts__lead{font-size:16px;margin:17px 0 24px}.contacts__button{min-height:54px;padding:0 26px;font-size:14px}.contacts__right{grid-template-columns:1fr;gap:20px}.contacts__item-value{font-size:18px}.contacts__item-value--text{font-size:16px}.contacts__bottom{margin-top:32px;padding-top:17px;flex-direction:column;gap:10px;font-size:11px}.contacts__bottom span:last-child{text-align:left}}
  `;
  document.head.appendChild(contactStyle);

  const oldBranch=document.querySelector('.hero__branch');
  if(oldBranch){const img=document.createElement('img');img.className='hero__branch-img';img.src='assets/branch.png';img.alt='';img.setAttribute('aria-hidden','true');oldBranch.replaceWith(img)}

  document.querySelectorAll('.nav a').forEach(a=>{if(a.textContent.trim()==='Контакты')a.href='#contact'});
  const headerBtn=document.querySelector('.btn--header');if(headerBtn)headerBtn.href='#contact';
  document.querySelectorAll('.price-card__button').forEach(a=>a.href='#contact');

  const oldContact=document.querySelector('.contact');
  const oldFooter=document.querySelector('.footer');
  const existing=document.querySelector('.contacts');
  existing?.remove();

  const footer=document.createElement('footer');
  footer.className='contacts';
  footer.id='contact';
  footer.innerHTML=`<div class="shell contacts__layout">
    <div class="contacts__left">
      <span class="contacts__label">CONTACTS</span>
      <h2 class="contacts__title">Не обязательно менять всю<br>жизнь за один день.</h2>
      <p class="contacts__lead">Иногда достаточно одного правильного шага,<br>чтобы начать чувствовать себя лучше.</p>
      <a class="contacts__button" href="https://t.me/blondyliz" target="_blank" rel="noopener noreferrer">Написать в Telegram <span>→</span></a>
    </div>
    <div class="contacts__right">
      <div class="contacts__item"><span class="contacts__item-label">TELEGRAM</span><a class="contacts__item-value" href="https://t.me/blondyliz" target="_blank" rel="noopener noreferrer">@blondyliz</a></div>
      <div class="contacts__item"><span class="contacts__item-label">INSTAGRAM</span><a class="contacts__item-value" href="https://instagram.com/blondy.liz" target="_blank" rel="noopener noreferrer">@blondy.liz</a></div>
      <div class="contacts__item"><span class="contacts__item-label">ПОЧТА</span><a class="contacts__item-value contacts__item-value--text" href="mailto:liza_zaytseva_2019@mail.ru">liza_zaytseva_2019@mail.ru</a></div>
      <div class="contacts__item"><span class="contacts__item-label">ФОРМАТ РАБОТЫ</span><span class="contacts__item-value contacts__item-value--text">Онлайн, из любой точки мира</span></div>
    </div>
  </div>
  <div class="shell contacts__bottom"><span>© 2026 Елизавета Зайцева · нутрициолог с медицинским образованием</span><span>Информация на сайте не заменяет консультацию врача.</span></div>`;

  if(oldContact)oldContact.insertAdjacentElement('beforebegin',footer);else document.body.appendChild(footer);
  oldContact?.remove();oldFooter?.remove();

  const c=document.querySelector('[data-carousel]');
  if(c){const t=c.querySelector('.carousel__track'),p=document.querySelector('[data-carousel-prev]'),n=document.querySelector('[data-carousel-next]');const step=()=>{const f=t.querySelector('.about-card');return f?f.getBoundingClientRect().width+parseFloat(getComputedStyle(t).gap||18):t.clientWidth};p?.addEventListener('click',()=>t.scrollBy({left:-step(),behavior:'smooth'}));n?.addEventListener('click',()=>t.scrollBy({left:step(),behavior:'smooth'}));t.querySelectorAll('.about-card').forEach(card=>card.addEventListener('click',e=>{if(e.target.closest('a,button'))return;const a=card.getBoundingClientRect(),b=t.getBoundingClientRect(),d=(a.left+a.width/2)-(b.left+b.width/2);if(Math.abs(d)>a.width*.4)t.scrollBy({left:d,behavior:'smooth'})}))}

  const m=document.querySelector('[data-lightbox-modal]'),img=m?.querySelector('.lightbox__image'),x=m?.querySelector('.lightbox__close');
  document.querySelectorAll('[data-lightbox]').forEach(b=>b.addEventListener('click',()=>{if(!m||!img)return;img.src=b.dataset.lightbox;img.alt=b.querySelector('img')?.alt||'Диплом';m.hidden=false;document.body.style.overflow='hidden'}));
  const close=()=>{if(!m)return;m.hidden=true;document.body.style.overflow=''};
  x?.addEventListener('click',close);m?.addEventListener('click',e=>{if(e.target===m)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&m&&!m.hidden)close()});
})();