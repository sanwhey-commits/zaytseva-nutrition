(()=>{
  const visual=document.createElement('link');visual.rel='stylesheet';visual.href='visual.css?v=4';document.head.appendChild(visual);
  const preciseType=document.createElement('link');preciseType.rel='stylesheet';preciseType.href='typography.css?v=4';document.head.appendChild(preciseType);

  const font=document.createElement('link');font.rel='stylesheet';font.href='https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600&family=Poiret+One&display=swap';document.head.appendChild(font);

  const marqueeStyle=document.createElement('style');
  marqueeStyle.textContent=`
    .marquee{height:66px!important;min-height:66px!important;display:flex!important;align-items:center!important;overflow:hidden!important;background:#7d8e58!important}
    .marquee__track{height:100%!important;display:flex!important;align-items:center!important;animation-duration:31s!important}
    .marquee__set{height:100%!important;display:flex!important;align-items:center!important;gap:46px!important;padding:0 18px!important;white-space:nowrap!important;font-family:"Manrope",sans-serif!important;font-size:14px!important;line-height:1!important;font-weight:600!important;letter-spacing:.045em!important;color:#fcfcfc!important}
    .marquee__set span{font-family:"Manrope",sans-serif!important;font-size:14px!important;line-height:1!important;font-weight:600!important;letter-spacing:.045em!important;color:#fcfcfc!important}
    .marquee__set i{font-family:"Manrope",sans-serif!important;font-size:14px!important;line-height:1!important;font-style:normal!important;font-weight:400!important;letter-spacing:0!important;color:#b7c2a1!important;opacity:1!important}
    @media(max-width:900px){.marquee{height:60px!important;min-height:60px!important}.marquee__set{gap:38px!important;padding:0 16px!important;font-size:13px!important}.marquee__set span{font-size:13px!important}}
    @media(max-width:560px){.marquee{height:56px!important;min-height:56px!important}.marquee__set{gap:32px!important;padding:0 14px!important;font-size:12px!important}.marquee__set span{font-size:12px!important}.marquee__set i{font-size:12px!important}}
  `;
  document.head.appendChild(marqueeStyle);

  const contactStyle=document.createElement('style');
  contactStyle.textContent=`
    .contact,.footer{display:none!important}
    .contacts{background:#87985f;color:#fff;padding:54px 0 24px}
    .contacts__layout{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(300px,.72fr);gap:92px;align-items:start}
    .contacts__label{display:block;margin-bottom:24px;font-size:11px;line-height:1;letter-spacing:.32em;text-transform:uppercase;font-weight:600;color:rgba(255,255,255,.88)}
    .contacts__title{margin:0;font-size:clamp(38px,4.4vw,56px);line-height:1.15;font-weight:400;letter-spacing:0;color:#fffaf2}
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

  const typographyStyle=document.createElement('style');
  typographyStyle.textContent=`
    :root{--font-display:"Poiret One",sans-serif;--font-body:"Manrope",sans-serif}
    body{font-family:var(--font-body);font-weight:300}
    .hero h1,
    .section-title,
    .philosophy__lead h2,
    .about__heading h2,
    .diplomas__copy h3,
    .services__head h2,
    .contacts__title{font-family:var(--font-display)!important;font-weight:400!important;letter-spacing:0!important}
    .hero h1{line-height:1.08!important;color:#52633d}
    .section-title{line-height:1.08!important}
    .symptoms__box h2{font-family:var(--font-body)!important;font-weight:600!important;letter-spacing:-.04em!important;line-height:1.16!important;color:#30241f!important}
    .philosophy__lead h2{line-height:1.12!important}
    .about__heading h2{line-height:1.08!important}
    .services__head h2{line-height:1.08!important}
    .diplomas__copy h3{line-height:1.12!important}
    .contacts__title{line-height:1.08!important}

    .price-card__head strong,
    .timeline span,
    .review__accent{font-family:var(--font-display)!important;font-weight:400!important;letter-spacing:0!important}
    .price-card__head strong{font-size:30px!important;line-height:1.05;color:#52633d}
    .timeline span{font-size:24px!important;line-height:1}
    .review__accent{font-size:42px!important;line-height:1}

    .brand strong{font-family:var(--font-body);font-weight:400!important;letter-spacing:.035em}
    .brand small,.nav,.btn,.underlink,.intro,.symptom p,.outcome,.principles,.about-card,.diploma-card,.services__head p,.price-card,.timeline h3,.timeline p,.review,.faq,.contacts{font-family:var(--font-body)!important}
    .nav{font-weight:400}
    .btn,.price-card__button,.contacts__button{font-weight:500}
    .outcome h3,.contacts__label,.contacts__item-label{font-weight:600}
    .principles h3,.about-card h3,.price-card__head h3,.timeline h3{font-weight:400}
    .faq summary{font-weight:400;letter-spacing:-.01em}
    .hero__lead,.philosophy__lead p,.services__head p,.about-card p,.review p,.faq details p{font-weight:300}

    @media(max-width:560px){
      .hero h1{line-height:1.1!important}
      .section-title,.about__heading h2,.services__head h2{line-height:1.1!important}
      .symptoms__box h2{font-weight:600!important}
    }
  `;
  document.head.appendChild(typographyStyle);

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

  const bigReview=document.querySelector('.review--large p');
  if(bigReview){
    bigReview.innerHTML=bigReview.textContent
      .replace('мама ощущала заботу','<strong>мама ощущала заботу</strong>')
      .replace('спокойнее относиться к рациону','<strong>спокойнее относиться к рациону</strong>');
  }

  const c=document.querySelector('[data-carousel]');
  if(c){const t=c.querySelector('.carousel__track'),p=document.querySelector('[data-carousel-prev]'),n=document.querySelector('[data-carousel-next]');const step=()=>{const f=t.querySelector('.about-card');return f?f.getBoundingClientRect().width+parseFloat(getComputedStyle(t).gap||18):t.clientWidth};p?.addEventListener('click',()=>t.scrollBy({left:-step(),behavior:'smooth'}));n?.addEventListener('click',()=>t.scrollBy({left:step(),behavior:'smooth'}));t.querySelectorAll('.about-card').forEach(card=>card.addEventListener('click',e=>{if(e.target.closest('a,button'))return;const a=card.getBoundingClientRect(),b=t.getBoundingClientRect(),d=(a.left+a.width/2)-(b.left+b.width/2);if(Math.abs(d)>a.width*.4)t.scrollBy({left:d,behavior:'smooth'})}))}

  const m=document.querySelector('[data-lightbox-modal]'),img=m?.querySelector('.lightbox__image'),x=m?.querySelector('.lightbox__close');
  document.querySelectorAll('[data-lightbox]').forEach(b=>b.addEventListener('click',()=>{if(!m||!img)return;img.src=b.dataset.lightbox;img.alt=b.querySelector('img')?.alt||'Диплом';m.hidden=false;document.body.style.overflow='hidden'}));
  const close=()=>{if(!m)return;m.hidden=true;document.body.style.overflow=''};
  x?.addEventListener('click',close);m?.addEventListener('click',e=>{if(e.target===m)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&m&&!m.hidden)close()});
})();