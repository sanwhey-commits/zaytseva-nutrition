(()=>{
  const addCss=(href)=>{const l=document.createElement('link');l.rel='stylesheet';l.href=href;document.head.appendChild(l)};
  addCss('visual.css?v=4');
  addCss('typography.css?v=4');
  addCss('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600&family=Poiret+One&display=swap');

  const addStyle=(css)=>{const s=document.createElement('style');s.textContent=css;document.head.appendChild(s)};

  addStyle(`
    .marquee{height:66px!important;min-height:66px!important;display:flex!important;align-items:center!important;overflow:hidden!important;background:#7d8e58!important}
    .marquee__track{height:100%!important;display:flex!important;align-items:center!important;animation-duration:31s!important}
    .marquee__set{height:100%!important;display:flex!important;align-items:center!important;gap:46px!important;padding:0 18px!important;white-space:nowrap!important;font-family:"Manrope",sans-serif!important;font-size:14px!important;line-height:1!important;font-weight:600!important;letter-spacing:.045em!important;color:#fcfcfc!important}
    .marquee__set span{font-family:"Manrope",sans-serif!important;font-size:14px!important;line-height:1!important;font-weight:600!important;letter-spacing:.045em!important;color:#fcfcfc!important}
    .marquee__set i{font-family:"Manrope",sans-serif!important;font-size:14px!important;line-height:1!important;font-style:normal!important;font-weight:400!important;letter-spacing:0!important;color:#b7c2a1!important;opacity:1!important}
    @media(max-width:900px){.marquee{height:60px!important;min-height:60px!important}.marquee__set{gap:38px!important;padding:0 16px!important;font-size:13px!important}.marquee__set span{font-size:13px!important}}
    @media(max-width:560px){.marquee{height:56px!important;min-height:56px!important}.marquee__set{gap:32px!important;padding:0 14px!important;font-size:12px!important}.marquee__set span{font-size:12px!important}.marquee__set i{font-size:12px!important}}
  `);

  addStyle(`
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
  `);

  addStyle(`
    :root{--font-display:"Poiret One",sans-serif;--font-body:"Manrope",sans-serif}
    body{font-family:var(--font-body);font-weight:300}
    .hero h1,.section-title,.philosophy__lead h2,.about__heading h2,.diplomas__copy h3,.services__head h2,.contacts__title{font-family:var(--font-display)!important;font-weight:400!important;letter-spacing:0!important}
    .hero h1{line-height:1.08!important;color:#52633d}.section-title{line-height:1.08!important}
    .symptoms__box h2{font-family:var(--font-body)!important;font-weight:600!important;letter-spacing:-.04em!important;line-height:1.16!important;color:#30241f!important}
    .philosophy__lead h2{line-height:1.12!important}.about__heading h2{line-height:1.08!important}.services__head h2{line-height:1.08!important}.diplomas__copy h3{line-height:1.12!important}.contacts__title{line-height:1.08!important}
    .price-card__head strong,.timeline span,.review__accent{font-family:var(--font-display)!important;font-weight:400!important;letter-spacing:0!important}
    .price-card__head strong{font-size:30px!important;line-height:1.05;color:#52633d}.timeline span{font-size:24px!important;line-height:1}.review__accent{font-size:42px!important;line-height:1}
    .brand strong{font-family:var(--font-body);font-weight:400!important;letter-spacing:.035em}
    .brand small,.nav,.btn,.underlink,.intro,.symptom p,.outcome,.principles,.about-card,.diploma-card,.services__head p,.price-card,.timeline h3,.timeline p,.review,.faq,.contacts{font-family:var(--font-body)!important}
    .nav{font-weight:400}.btn,.price-card__button,.contacts__button{font-weight:500}.outcome h3,.contacts__label,.contacts__item-label{font-weight:600}.principles h3,.about-card h3,.price-card__head h3,.timeline h3{font-weight:400}.faq summary{font-weight:400;letter-spacing:-.01em}
    .hero__lead,.philosophy__lead p,.services__head p,.about-card p,.review p,.faq details p{font-weight:300}
    @media(max-width:560px){.hero h1{line-height:1.1!important}.section-title,.about__heading h2,.services__head h2{line-height:1.1!important}.symptoms__box h2{font-weight:600!important}}
  `);

  addStyle(`
    .about__heading .kicker{display:none!important}
    .about__heading h2{margin-top:0!important;font-size:54px!important;line-height:1.08!important}
    .carousel__hint{display:none!important}
    .about-card h3{font-size:17px!important;line-height:1.35!important;font-weight:500!important;color:#334129!important;margin:16px 0 7px!important}
    .about-card p{font-size:15px!important;line-height:1.62!important;font-weight:400!important;letter-spacing:-.015em!important;color:#68735f!important}
    .about-card img[data-lightbox]{cursor:zoom-in!important;transition:transform .22s ease,filter .22s ease}
    .about-card img[data-lightbox]:hover{transform:scale(1.015);filter:brightness(.98)}
    .about-card img[data-lightbox]:focus{outline:2px solid #87985f;outline-offset:3px}
    .about .diplomas__copy::before,.about .diploma-card:nth-child(2)::before,.about .diploma-card:nth-child(3)::before{font-size:16px!important;line-height:1.5!important;font-weight:400!important;letter-spacing:-.012em!important;background-position:0 10px!important}
    .about .diplomas::before{height:108px!important}
    .about .diplomas{padding-top:138px!important}
    .about .diplomas__copy::before,.about .diploma-card:nth-child(2)::before,.about .diploma-card:nth-child(3)::before{top:26px!important}
    .diplomas__copy h3{font-size:36px!important;line-height:1.12!important;margin:0 0 15px!important;color:#52633d!important}
    .diplomas__copy p{font-size:15px!important;line-height:1.62!important;font-weight:400!important;letter-spacing:-.015em!important;color:#68735f!important;max-width:360px!important}
    .diploma-card span{display:block!important;margin-top:13px!important;font-size:14px!important;line-height:1.48!important;font-weight:400!important;letter-spacing:-.012em!important;color:#68735f!important}
    @media(max-width:900px){
      .about__heading h2{font-size:48px!important}
      .about-card h3{font-size:16px!important}.about-card p{font-size:14.5px!important}
      .about .diplomas{padding-top:178px!important}.about .diplomas::before{height:148px!important}
      .about .diplomas__copy::before,.about .diploma-card:nth-child(2)::before,.about .diploma-card:nth-child(3)::before{font-size:14px!important;line-height:1.45!important;left:22px!important;width:calc(100% - 44px)!important}
      .about .diplomas__copy::before{top:23px!important}.about .diploma-card:nth-child(2)::before{top:64px!important}.about .diploma-card:nth-child(3)::before{top:103px!important}
      .diplomas__copy h3{font-size:32px!important}.diplomas__copy p{font-size:14px!important}.diploma-card span{font-size:13.5px!important}
    }
    @media(max-width:560px){
      .about__heading h2{font-size:40px!important}.about-card h3{font-size:16px!important}.about-card p{font-size:14px!important;line-height:1.58!important}
      .about .diplomas{padding-top:206px!important}.about .diplomas::before{height:176px!important}
      .about .diplomas__copy::before,.about .diploma-card:nth-child(2)::before,.about .diploma-card:nth-child(3)::before{font-size:13.5px!important;left:18px!important;width:calc(100% - 36px)!important}
      .about .diplomas__copy::before{top:20px!important}.about .diploma-card:nth-child(2)::before{top:68px!important}.about .diploma-card:nth-child(3)::before{top:114px!important}
      .diplomas__copy h3{font-size:30px!important}.diplomas__copy p{font-size:14px!important}.diploma-card span{font-size:13px!important}
    }
  `);

  addStyle(`
    .services{padding-top:76px!important;padding-bottom:72px!important}
    .services .shell{width:min(1100px,calc(100% - 64px))!important;max-width:none!important}
    .services__head{display:grid!important;grid-template-columns:minmax(0,1.12fr) minmax(280px,.58fr)!important;gap:86px!important;align-items:end!important;margin-bottom:38px!important}
    .services__head h2{margin:0!important;font-family:"Poiret One",sans-serif!important;font-size:54px!important;line-height:1.06!important;font-weight:400!important;letter-spacing:0!important;color:#55663f!important}
    .services__head p{margin:0 0 7px!important;max-width:360px!important;font-family:"Manrope",sans-serif!important;font-size:14.5px!important;line-height:1.62!important;font-weight:400!important;letter-spacing:-.015em!important;color:#68735f!important}
    .pricing{display:grid!important;grid-template-columns:1fr 1fr!important;gap:18px!important;align-items:stretch!important}
    .price-card{position:relative!important;display:flex!important;flex-direction:column!important;min-height:590px!important;padding:34px 30px 27px!important;border:1px solid #ccd2b4!important;border-radius:28px!important;background:#faf8f2!important;box-shadow:none!important;overflow:hidden!important}
    .price-card--featured{background:#f6bea9!important;border-color:#f6bea9!important;box-shadow:0 18px 42px rgba(89,70,57,.12)!important}
    .badge{display:inline-flex!important;align-items:center!important;align-self:flex-start!important;min-height:25px!important;padding:0 12px!important;margin:0 0 22px!important;border:1px solid rgba(76,57,47,.42)!important;border-radius:999px!important;font-family:"Manrope",sans-serif!important;font-size:9px!important;line-height:1!important;font-weight:600!important;letter-spacing:.17em!important;color:#543d34!important;background:rgba(255,255,255,.12)!important}
    .price-card__head{padding-bottom:22px!important;border-bottom:1px solid rgba(88,101,65,.18)!important}
    .price-card--featured .price-card__head{border-bottom-color:rgba(94,62,50,.18)!important}
    .price-card__head h3{margin:0 0 11px!important;font-family:"Manrope",sans-serif!important;font-size:19px!important;line-height:1.35!important;font-weight:500!important;letter-spacing:-.025em!important;color:#27321f!important}
    .price-card__head strong{display:block!important;margin:0!important;font-family:"Poiret One",sans-serif!important;font-size:35px!important;line-height:1.05!important;font-weight:400!important;letter-spacing:0!important;color:#566640!important}
    .price-card--featured .price-card__head strong{display:flex!important;align-items:baseline!important;gap:14px!important;color:#d76145!important}
    .price-card--featured .price-card__head strong::before{content:"15 000 ₽";font-family:"Manrope",sans-serif!important;font-size:17px!important;line-height:1!important;font-weight:400!important;letter-spacing:-.02em!important;color:#765c51!important;text-decoration:line-through!important;text-decoration-thickness:1.5px!important;text-decoration-color:#765c51!important;opacity:.78!important}
    .price-card ul{margin:22px 0 0!important;padding:0!important;list-style:none!important;font-family:"Manrope",sans-serif!important;font-size:14px!important;line-height:1.5!important;font-weight:400!important;color:#53604b!important}
    .price-card li{position:relative!important;padding:0 0 13px 18px!important;margin:0!important}
    .price-card li::before{content:""!important;position:absolute!important;left:0!important;top:.68em!important;width:5px!important;height:5px!important;border-radius:50%!important;background:#83985f!important}
    .price-card--featured li::before{background:#ef7756!important}
    .price-card__result{margin-top:auto!important;padding:19px 0 18px!important;border-top:1px dashed rgba(88,101,65,.28)!important;font-family:"Manrope",sans-serif!important;font-size:13px!important;line-height:1.55!important;font-weight:400!important;color:#65715c!important}
    .price-card--featured .price-card__result{border-top-color:rgba(94,62,50,.26)!important;color:#684d42!important}
    .price-card__result b{font-weight:600!important;color:#3f4d35!important}.price-card--featured .price-card__result b{color:#4f392f!important}
    .price-card__button{display:flex!important;align-items:center!important;justify-content:center!important;width:100%!important;min-height:53px!important;margin-top:0!important;border-radius:999px!important;font-family:"Manrope",sans-serif!important;font-size:14px!important;line-height:1!important;font-weight:600!important;letter-spacing:-.012em!important;transition:transform .18s ease,opacity .18s ease!important}
    .price-card__button:hover{transform:translateY(-1px)!important}
    .price-card__button--outline{background:transparent!important;color:#55663f!important;border:1px solid #9eaa7b!important}
    .price-card--featured .price-card__button{background:#ef7756!important;color:#fff!important;border:1px solid #ef7756!important}
    @media(max-width:900px){
      .services{padding-top:58px!important;padding-bottom:58px!important}.services .shell{width:min(100% - 30px,760px)!important}.services__head{grid-template-columns:1fr!important;gap:18px!important;margin-bottom:30px!important}.services__head h2{font-size:47px!important}.services__head p{max-width:560px!important;font-size:14px!important}.pricing{grid-template-columns:1fr!important;gap:15px!important}.price-card{min-height:0!important;padding:30px 27px 25px!important}.price-card__head h3{font-size:18px!important}.price-card__head strong{font-size:33px!important}
    }
    @media(max-width:560px){
      .services{padding-top:48px!important;padding-bottom:48px!important}.services .shell{width:calc(100% - 24px)!important}.services__head h2{font-size:39px!important;line-height:1.08!important}.services__head p{font-size:13.5px!important;line-height:1.58!important}.price-card{padding:26px 21px 22px!important;border-radius:22px!important}.badge{margin-bottom:18px!important}.price-card__head h3{font-size:17px!important}.price-card__head strong{font-size:31px!important}.price-card--featured .price-card__head strong{gap:11px!important}.price-card--featured .price-card__head strong::before{font-size:15px!important}.price-card ul{font-size:13.5px!important}.price-card__result{font-size:12.5px!important}.price-card__button{min-height:51px!important;font-size:13.5px!important}
    }
  `);

  const oldBranch=document.querySelector('.hero__branch');
  if(oldBranch){const img=document.createElement('img');img.className='hero__branch-img';img.src='assets/branch.png';img.alt='';img.setAttribute('aria-hidden','true');oldBranch.replaceWith(img)}

  document.querySelectorAll('.nav a').forEach(a=>{if(a.textContent.trim()==='Контакты')a.href='#contact'});
  const headerBtn=document.querySelector('.btn--header');if(headerBtn)headerBtn.href='#contact';
  document.querySelectorAll('.price-card__button').forEach(a=>a.href='#contact');

  const oldContact=document.querySelector('.contact'),oldFooter=document.querySelector('.footer'),existing=document.querySelector('.contacts');
  existing?.remove();
  const footer=document.createElement('footer');
  footer.className='contacts';footer.id='contact';
  footer.innerHTML=`<div class="shell contacts__layout"><div class="contacts__left"><span class="contacts__label">CONTACTS</span><h2 class="contacts__title">Не обязательно менять всю<br>жизнь за один день.</h2><p class="contacts__lead">Иногда достаточно одного правильного шага,<br>чтобы начать чувствовать себя лучше.</p><a class="contacts__button" href="https://t.me/blondyliz" target="_blank" rel="noopener noreferrer">Написать в Telegram <span>→</span></a></div><div class="contacts__right"><div class="contacts__item"><span class="contacts__item-label">TELEGRAM</span><a class="contacts__item-value" href="https://t.me/blondyliz" target="_blank" rel="noopener noreferrer">@blondyliz</a></div><div class="contacts__item"><span class="contacts__item-label">INSTAGRAM</span><a class="contacts__item-value" href="https://instagram.com/blondy.liz" target="_blank" rel="noopener noreferrer">@blondy.liz</a></div><div class="contacts__item"><span class="contacts__item-label">ПОЧТА</span><a class="contacts__item-value contacts__item-value--text" href="mailto:liza_zaytseva_2019@mail.ru">liza_zaytseva_2019@mail.ru</a></div><div class="contacts__item"><span class="contacts__item-label">ФОРМАТ РАБОТЫ</span><span class="contacts__item-value contacts__item-value--text">Онлайн, из любой точки мира</span></div></div></div><div class="shell contacts__bottom"><span>© 2026 Елизавета Зайцева · нутрициолог с медицинским образованием</span><span>Информация на сайте не заменяет консультацию врача.</span></div>`;
  if(oldContact)oldContact.insertAdjacentElement('beforebegin',footer);else document.body.appendChild(footer);oldContact?.remove();oldFooter?.remove();

  const bigReview=document.querySelector('.review--large p');
  if(bigReview){bigReview.innerHTML=bigReview.textContent.replace('мама ощущала заботу','<strong>мама ощущала заботу</strong>').replace('спокойнее относиться к рациону','<strong>спокойнее относиться к рациону</strong>')}

  const aboutHeading=document.querySelector('.about__heading h2');if(aboutHeading)aboutHeading.textContent='Обо мне';
  document.querySelector('.about__heading .kicker')?.remove();document.querySelector('.carousel__hint')?.remove();
  document.querySelectorAll('.about-card img').forEach(photo=>{const src=photo.getAttribute('src');if(!src)return;photo.dataset.lightbox=src;photo.tabIndex=0;photo.setAttribute('role','button');photo.setAttribute('aria-label','Увеличить фотографию')});

  const c=document.querySelector('[data-carousel]');
  if(c){const t=c.querySelector('.carousel__track'),p=document.querySelector('[data-carousel-prev]'),n=document.querySelector('[data-carousel-next]');const step=()=>{const f=t.querySelector('.about-card');return f?f.getBoundingClientRect().width+parseFloat(getComputedStyle(t).gap||18):t.clientWidth};p?.addEventListener('click',()=>t.scrollBy({left:-step(),behavior:'smooth'}));n?.addEventListener('click',()=>t.scrollBy({left:step(),behavior:'smooth'}));t.querySelectorAll('.about-card').forEach(card=>card.addEventListener('click',e=>{if(e.target.closest('a,button,[data-lightbox]'))return;const a=card.getBoundingClientRect(),b=t.getBoundingClientRect(),d=(a.left+a.width/2)-(b.left+b.width/2);if(Math.abs(d)>a.width*.4)t.scrollBy({left:d,behavior:'smooth'})}))}

  const m=document.querySelector('[data-lightbox-modal]'),img=m?.querySelector('.lightbox__image'),x=m?.querySelector('.lightbox__close');
  const openLightbox=b=>{if(!m||!img)return;img.src=b.dataset.lightbox;img.alt=b.alt||b.querySelector?.('img')?.alt||'Изображение';m.hidden=false;document.body.style.overflow='hidden'};
  document.querySelectorAll('[data-lightbox]').forEach(b=>{b.addEventListener('click',()=>openLightbox(b));b.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openLightbox(b)}})});
  const close=()=>{if(!m)return;m.hidden=true;document.body.style.overflow=''};x?.addEventListener('click',close);m?.addEventListener('click',e=>{if(e.target===m)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&m&&!m.hidden)close()});
})();