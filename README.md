<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PT Rizhani Technology Solution — Your Digital Partner</title>
<meta name="description" content="Solusi IT Profesional: Networking, Security System, IT Maintenance & Consulting untuk bisnis Anda di Bekasi.">
<meta name="keywords" content="IT Bekasi, Networking, Security System, IT Maintenance, IT Consulting, Rizhani Technology">
<meta property="og:title" content="PT Rizhani Technology Solution">
<meta property="og:description" content="Solusi IT Profesional terpercaya untuk bisnis Anda">
<meta property="og:type" content="website">
<link rel="icon" href="logos.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

<style>
/* ══════════════════════════════════════════════════════════
   RIZHANI TECHNOLOGY — LUXURY DARK TECH DESIGN SYSTEM
══════════════════════════════════════════════════════════ */

:root {
  --ink:       #04080F;
  --ink2:      #080e1c;
  --ink3:      #0d1628;
  --cyan:      #00d4ff;
  --cyan2:     #38e8ff;
  --gold:      #f0b429;
  --gold2:     #ffd166;
  --green:     #00e5a0;
  --text:      #c8d6e5;
  --text2:     #6b7fa0;
  --white:     #f0f4ff;
  --card:      rgba(13,22,40,0.95);
  --glass:     rgba(0,212,255,0.04);
  --glass-bd:  rgba(0,212,255,0.12);
  --wa:        #25d366;
  --r:         18px;
  --nav-h:     74px;
}

*,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{
  font-family:'Outfit',sans-serif;
  background:var(--ink);
  color:var(--text);
  overflow-x:hidden;
  line-height:1.6;
  cursor:none;
}
a{text-decoration:none;color:inherit;}
img{max-width:100%;display:block;}
button{cursor:none;border:none;background:none;font-family:inherit;}
ul{list-style:none;}

/* ── Custom Cursor ── */
#cur,#cur2{
  position:fixed;border-radius:50%;pointer-events:none;z-index:99999;
  transform:translate(-50%,-50%);transition:transform .15s;
}
#cur{width:10px;height:10px;background:var(--cyan);box-shadow:0 0 16px var(--cyan);}
#cur2{
  width:40px;height:40px;
  border:1.5px solid rgba(0,212,255,.4);
  transition:width .3s,height .3s,border-color .3s;
}
body:has(a:hover) #cur2,body:has(button:hover) #cur2{
  width:56px;height:56px;border-color:var(--cyan);
}

/* ── Loader ── */
#loader{
  position:fixed;inset:0;z-index:9999;
  background:var(--ink);
  display:flex;flex-direction:column;align-items:center;justify-content:center;gap:28px;
  transition:opacity .8s,visibility .8s;
}
#loader.gone{opacity:0;visibility:hidden;}
.ld-logo{
  font-family:'Bebas Neue',sans-serif;font-size:56px;letter-spacing:.2em;
  color:transparent;
  -webkit-text-stroke:1px var(--cyan);
  text-shadow:0 0 40px rgba(0,212,255,.3);
  animation:ldPulse 1.5s ease-in-out infinite;
}
@keyframes ldPulse{0%,100%{opacity:.7;}50%{opacity:1;text-shadow:0 0 60px rgba(0,212,255,.6);}}
.ld-line{
  width:280px;height:1px;background:var(--ink3);position:relative;overflow:hidden;
}
.ld-fill{
  height:100%;background:linear-gradient(90deg,var(--cyan),var(--gold));
  width:0%;transition:width .1s linear;
}
.ld-pct{font-size:.75rem;letter-spacing:.3em;color:var(--text2);}

/* ── Scroll Bar ── */
#sbar{
  position:fixed;top:0;left:0;height:2px;width:0%;z-index:9998;
  background:linear-gradient(90deg,var(--cyan),var(--gold));
}

/* ── Noise Overlay ── */
body::before{
  content:'';position:fixed;inset:0;z-index:1;pointer-events:none;
  background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
  opacity:.025;
}

/* ── NAV ── */
#nav{
  position:fixed;top:0;left:0;right:0;z-index:900;height:var(--nav-h);
  transition:background .4s,border-color .4s;
  border-bottom:1px solid transparent;
}
#nav.solid{
  background:rgba(4,8,15,.92);
  backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);
  border-color:rgba(0,212,255,.08);
}
.nav-inner{
  max-width:1280px;margin:0 auto;padding:0 32px;
  height:100%;display:flex;align-items:center;justify-content:space-between;
}
.brand{display:flex;align-items:center;gap:12px;}
.brand-img{width:38px;height:38px;object-fit:contain;border-radius:10px;}
.brand-text .b1{
  font-family:'Bebas Neue',sans-serif;font-size:1.3rem;letter-spacing:.1em;
  color:var(--white);line-height:1;
}
.brand-text .b2{
  font-size:.55rem;letter-spacing:.2em;color:var(--cyan);font-weight:600;text-transform:uppercase;
}

.nav-links{display:flex;align-items:center;gap:2px;}
.nl{
  padding:8px 16px;border-radius:8px;font-size:.88rem;font-weight:500;
  color:var(--text2);transition:color .2s,background .2s;position:relative;
}
.nl:hover{color:var(--white);}
.nl.on{color:var(--cyan);}
.nl.on::after{
  content:'';position:absolute;bottom:4px;left:50%;transform:translateX(-50%);
  width:4px;height:4px;border-radius:50%;background:var(--cyan);
}
.nav-cta{
  margin-left:16px;padding:10px 22px;
  border:1px solid var(--cyan);border-radius:10px;
  font-size:.88rem;font-weight:600;color:var(--cyan);
  transition:background .2s,color .2s,transform .2s;
}
.nav-cta:hover{background:var(--cyan);color:var(--ink);transform:translateY(-1px);}

.burger{display:none;flex-direction:column;gap:5px;padding:8px;}
.burger span{display:block;width:24px;height:2px;background:var(--text);border-radius:2px;transition:.3s;}
.burger.x span:nth-child(1){transform:translateY(7px) rotate(45deg);}
.burger.x span:nth-child(2){opacity:0;}
.burger.x span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}

/* ══ HERO ══ */
#hero{
  min-height:100svh;position:relative;
  display:flex;align-items:center;
  overflow:hidden;
  padding-top:var(--nav-h);
}
.hero-canvas{position:absolute;inset:0;z-index:0;}
.hero-glow{
  position:absolute;z-index:1;
  width:700px;height:700px;border-radius:50%;
  background:radial-gradient(circle,rgba(0,212,255,.07) 0%,transparent 70%);
  top:-10%;right:-5%;pointer-events:none;
}
.hero-glow2{
  position:absolute;z-index:1;
  width:500px;height:500px;border-radius:50%;
  background:radial-gradient(circle,rgba(240,180,41,.05) 0%,transparent 70%);
  bottom:-10%;left:5%;pointer-events:none;
}

.hero-inner{
  position:relative;z-index:2;
  max-width:1280px;margin:0 auto;padding:80px 32px 100px;
  display:grid;grid-template-columns:1fr 520px;gap:80px;align-items:center;
}

/* Hero left */
.hero-eyebrow{
  display:inline-flex;align-items:center;gap:10px;
  margin-bottom:28px;
  font-size:.72rem;font-weight:700;letter-spacing:.25em;text-transform:uppercase;color:var(--cyan);
}
.hero-eyebrow::before{content:'';width:32px;height:1px;background:var(--cyan);}
.hero-eyebrow::after{content:'';width:32px;height:1px;background:var(--cyan);}

.hero-h1{
  font-family:'Bebas Neue',sans-serif;
  font-size:clamp(3.5rem,6.5vw,5.5rem);
  line-height:.98;letter-spacing:.03em;
  color:var(--white);margin-bottom:28px;
}
.hero-h1 .accent{
  display:block;
  -webkit-text-stroke:1px var(--cyan);
  color:transparent;
  text-shadow:0 0 50px rgba(0,212,255,.25);
}

.hero-desc{
  font-size:1.05rem;color:var(--text2);line-height:1.8;
  max-width:480px;margin-bottom:40px;
}

.hero-stats{
  display:flex;gap:0;margin-bottom:44px;
  border:1px solid var(--glass-bd);border-radius:14px;
  overflow:hidden;width:fit-content;
  background:var(--glass);backdrop-filter:blur(12px);
}
.hstat{
  padding:18px 28px;text-align:center;
  border-right:1px solid var(--glass-bd);
}
.hstat:last-child{border-right:none;}
.hstat-n{
  font-family:'Bebas Neue',sans-serif;font-size:2.2rem;letter-spacing:.05em;
  background:linear-gradient(135deg,var(--cyan),var(--gold));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  line-height:1;
}
.hstat-l{font-size:.72rem;letter-spacing:.12em;color:var(--text2);text-transform:uppercase;margin-top:4px;}

.hero-btns{display:flex;gap:14px;flex-wrap:wrap;}
.btn-glow{
  display:inline-flex;align-items:center;gap:10px;
  padding:15px 32px;border-radius:12px;
  background:var(--cyan);color:var(--ink);
  font-weight:700;font-size:.95rem;
  box-shadow:0 0 40px rgba(0,212,255,.3);
  transition:transform .25s,box-shadow .25s;
}
.btn-glow:hover{transform:translateY(-2px);box-shadow:0 0 60px rgba(0,212,255,.5);}
.btn-outline{
  display:inline-flex;align-items:center;gap:10px;
  padding:14px 32px;border-radius:12px;
  border:1px solid rgba(0,212,255,.3);color:var(--text);
  font-weight:600;font-size:.95rem;
  transition:border-color .2s,color .2s,transform .25s;
}
.btn-outline:hover{border-color:var(--cyan);color:var(--cyan);transform:translateY(-2px);}

/* Hero right — 3D card */
.hero-card-wrap{position:relative;display:flex;align-items:center;justify-content:center;}
.hero-card{
  width:100%;max-width:460px;
  background:var(--card);
  border:1px solid var(--glass-bd);
  border-radius:24px;padding:36px;
  backdrop-filter:blur(20px);
  box-shadow:0 40px 80px rgba(0,0,0,.6),0 0 0 1px rgba(0,212,255,.05) inset;
  position:relative;overflow:hidden;
}
.hero-card::before{
  content:'';position:absolute;top:-60px;right:-60px;
  width:200px;height:200px;border-radius:50%;
  background:radial-gradient(circle,rgba(0,212,255,.08),transparent 70%);
}
.hc-logo-row{display:flex;align-items:center;gap:14px;margin-bottom:28px;}
.hc-logo{
  width:52px;height:52px;border-radius:14px;
  background:linear-gradient(135deg,rgba(0,212,255,.1),rgba(0,212,255,.04));
  border:1px solid rgba(0,212,255,.2);
  display:flex;align-items:center;justify-content:center;overflow:hidden;
}
.hc-logo img{width:34px;height:34px;object-fit:contain;}
.hc-name{font-family:'Bebas Neue',sans-serif;font-size:1.1rem;letter-spacing:.08em;color:var(--white);}
.hc-sub{font-size:.65rem;letter-spacing:.15em;color:var(--cyan);}

.hc-services{display:flex;flex-direction:column;gap:12px;margin-bottom:28px;}
.hc-svc{
  display:flex;align-items:center;gap:14px;
  padding:14px 16px;border-radius:12px;
  background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);
  transition:border-color .2s,background .2s;
}
.hc-svc:hover{background:rgba(0,212,255,.04);border-color:rgba(0,212,255,.15);}
.hc-icon{
  width:36px;height:36px;border-radius:9px;
  display:flex;align-items:center;justify-content:center;font-size:1.1rem;
  flex-shrink:0;
}
.hc-svc-text{font-size:.88rem;font-weight:600;color:var(--white);}
.hc-svc-sub{font-size:.72rem;color:var(--text2);}
.hc-check{margin-left:auto;color:var(--green);font-size:.85rem;}

.hc-bottom{
  padding-top:20px;border-top:1px solid rgba(255,255,255,.06);
  display:flex;align-items:center;justify-content:space-between;
}
.hc-badge{
  display:flex;align-items:center;gap:6px;
  font-size:.72rem;color:var(--green);font-weight:600;
}
.hc-dot{width:7px;height:7px;border-radius:50%;background:var(--green);animation:blink 2s infinite;}
@keyframes blink{0%,100%{opacity:1;}50%{opacity:.3;}}</p>
.hc-cta{
  padding:8px 18px;border-radius:8px;
  background:rgba(0,212,255,.1);border:1px solid rgba(0,212,255,.2);
  font-size:.78rem;font-weight:700;color:var(--cyan);
  transition:background .2s;
}
.hc-cta:hover{background:rgba(0,212,255,.18);}

/* float badges */
.fbadge{
  position:absolute;
  background:var(--card);border:1px solid var(--glass-bd);
  border-radius:12px;padding:10px 14px;
  display:flex;align-items:center;gap:8px;
  font-size:.78rem;font-weight:600;color:var(--white);
  box-shadow:0 20px 50px rgba(0,0,0,.5);
  backdrop-filter:blur(16px);
  animation:float 4s ease-in-out infinite;
}
.fbadge-icon{font-size:1.1rem;}
.fb1{top:-20px;left:-30px;animation-delay:0s;}
.fb2{bottom:20px;right:-30px;animation-delay:1.5s;}
@keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}

/* scroll hint */
.scroll-hint{
  position:absolute;bottom:36px;left:50%;transform:translateX(-50%);
  display:flex;flex-direction:column;align-items:center;gap:8px;
  z-index:2;animation:fadeUp 1s 2.5s both;
}
.sh-line{width:1px;height:48px;background:linear-gradient(to bottom,var(--cyan),transparent);animation:lineAnim 1.5s ease-in-out infinite;}
@keyframes lineAnim{0%{transform:scaleY(0);transform-origin:top;}50%{transform:scaleY(1);transform-origin:top;}51%{transform-origin:bottom;}100%{transform:scaleY(0);transform-origin:bottom;}}
.sh-txt{font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;color:var(--text2);}

/* ══ SECTION COMMON ══ */
.section{padding:120px 0;}
.container{max-width:1280px;margin:0 auto;padding:0 32px;}
.sec-label{
  display:inline-flex;align-items:center;gap:10px;
  font-size:.72rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;
  color:var(--cyan);margin-bottom:16px;
}
.sec-label::before{content:'';width:24px;height:1px;background:var(--cyan);}
.sec-title{
  font-family:'Bebas Neue',sans-serif;
  font-size:clamp(2.8rem,5vw,4.2rem);
  letter-spacing:.04em;line-height:1;
  color:var(--white);margin-bottom:16px;
}
.sec-title span{
  -webkit-text-stroke:1px var(--cyan);color:transparent;
}
.sec-sub{font-size:1rem;color:var(--text2);max-width:540px;line-height:1.75;}

/* reveal */
.rv{opacity:0;transform:translateY(32px);transition:opacity .8s cubic-bezier(0.16,1,.3,1),transform .8s cubic-bezier(0.16,1,.3,1);}
.rv.show{opacity:1;transform:none;}
.rv-r{opacity:0;transform:translateX(32px);transition:opacity .8s cubic-bezier(0.16,1,.3,1),transform .8s cubic-bezier(0.16,1,.3,1);}
.rv-r.show{opacity:1;transform:none;}

/* ══ TICKER ══ */
#ticker{
  padding:24px 0;
  border-top:1px solid rgba(0,212,255,.07);
  border-bottom:1px solid rgba(0,212,255,.07);
  background:linear-gradient(90deg,rgba(0,212,255,.02),rgba(240,180,41,.02));
  overflow:hidden;position:relative;
}
#ticker::before,#ticker::after{
  content:'';position:absolute;top:0;bottom:0;width:120px;z-index:2;pointer-events:none;
}
#ticker::before{left:0;background:linear-gradient(90deg,var(--ink),transparent);}
#ticker::after{right:0;background:linear-gradient(-90deg,var(--ink),transparent);}
.ticker-track{
  display:flex;gap:64px;width:max-content;
  animation:ticker 30s linear infinite;
}
.ticker-track:hover{animation-play-state:paused;}
@keyframes ticker{to{transform:translateX(-50%);}}
.tick-item{
  display:flex;align-items:center;gap:10px;
  font-size:.78rem;font-weight:700;letter-spacing:.1em;
  color:var(--text2);text-transform:uppercase;white-space:nowrap;
  transition:color .2s;
}
.tick-item:hover{color:var(--cyan);}
.tick-dot{color:var(--gold);font-size:.6rem;}

/* ══ SERVICES ══ */
#services{background:var(--ink2);}
.svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;margin-top:56px;}
.svc-card{
  background:var(--card);
  padding:36px 32px;position:relative;overflow:hidden;
  transition:background .3s;
}
.svc-card:hover{background:#0e1b2f;}
.svc-card::after{
  content:'';position:absolute;inset:0;
  background:linear-gradient(135deg,rgba(0,212,255,.03),transparent);
  opacity:0;transition:opacity .3s;
}
.svc-card:hover::after{opacity:1;}
/* border grid */
.svc-card:nth-child(-n+3){border-bottom:2px solid rgba(0,212,255,.06);}
.svc-card:not(:nth-child(3n)){border-right:2px solid rgba(0,212,255,.06);}

.svc-num{
  font-family:'Bebas Neue',sans-serif;font-size:3.5rem;letter-spacing:.05em;
  color:rgba(0,212,255,.06);line-height:1;margin-bottom:16px;
  transition:color .3s;
}
.svc-card:hover .svc-num{color:rgba(0,212,255,.12);}
.svc-icon{
  width:52px;height:52px;border-radius:14px;margin-bottom:20px;
  display:flex;align-items:center;justify-content:center;font-size:1.6rem;
  border:1px solid;transition:box-shadow .3s;
}
.svc-card:hover .svc-icon{box-shadow:0 0 24px var(--icon-glow,rgba(0,212,255,.2));}
.svc-card h3{
  font-family:'Bebas Neue',sans-serif;font-size:1.6rem;letter-spacing:.05em;
  color:var(--white);margin-bottom:12px;
}
.svc-card p{font-size:.9rem;color:var(--text2);line-height:1.75;margin-bottom:20px;}
.svc-tags{display:flex;flex-wrap:wrap;gap:7px;}
.stag{
  padding:4px 12px;border-radius:6px;font-size:.7rem;font-weight:700;
  letter-spacing:.06em;text-transform:uppercase;
  background:rgba(0,212,255,.06);border:1px solid rgba(0,212,255,.12);
  color:var(--cyan);
}
.svc-arrow{
  position:absolute;right:24px;top:24px;
  width:36px;height:36px;border-radius:50%;
  border:1px solid rgba(0,212,255,.15);
  display:flex;align-items:center;justify-content:center;
  color:var(--text2);transition:background .2s,border-color .2s,color .2s,transform .2s;
}
.svc-card:hover .svc-arrow{
  background:var(--cyan);border-color:var(--cyan);
  color:var(--ink);transform:rotate(45deg);
}

/* ══ ABOUT ══ */
#about{position:relative;overflow:hidden;}
#about::before{
  content:'';position:absolute;right:-200px;top:-100px;
  width:600px;height:600px;border-radius:50%;
  background:radial-gradient(circle,rgba(240,180,41,.04),transparent 70%);
  pointer-events:none;
}
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:100px;align-items:center;}
.about-visual{position:relative;}
.about-big{
  font-family:'Bebas Neue',sans-serif;
  font-size:clamp(6rem,12vw,10rem);line-height:.9;letter-spacing:.05em;
  color:transparent;-webkit-text-stroke:1px rgba(0,212,255,.1);
  user-select:none;margin-bottom:-20px;
}
.about-imgbox{
  border-radius:20px;overflow:hidden;
  background:linear-gradient(135deg,rgba(0,212,255,.08),rgba(240,180,41,.04));
  border:1px solid rgba(0,212,255,.12);
  aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;
  position:relative;
}
.about-imgbox img{width:180px;object-fit:contain;filter:drop-shadow(0 0 30px rgba(0,212,255,.2));}
.about-imgbox::after{
  content:'';position:absolute;inset:0;
  background:linear-gradient(to bottom,transparent 60%,rgba(4,8,15,.6));
}
.about-float{
  position:absolute;right:-24px;bottom:24px;
  background:var(--card);border:1px solid rgba(240,180,41,.2);
  border-radius:14px;padding:16px 20px;
  box-shadow:0 20px 50px rgba(0,0,0,.5);
}
.af-n{font-family:'Bebas Neue',sans-serif;font-size:2rem;color:var(--gold);line-height:1;}
.af-l{font-size:.7rem;letter-spacing:.12em;color:var(--text2);text-transform:uppercase;}

.about-text p{font-size:.97rem;color:var(--text2);line-height:1.8;margin-bottom:16px;}
.about-list{display:flex;flex-direction:column;gap:12px;margin-top:28px;}
.al-item{
  display:flex;align-items:center;gap:12px;
  font-size:.9rem;color:var(--text);font-weight:500;
}
.al-item::before{
  content:'';width:8px;height:8px;border-radius:50%;flex-shrink:0;
  background:var(--cyan);box-shadow:0 0 10px var(--cyan);
}

/* ══ STATS BAND ══ */
#statsband{
  padding:64px 0;
  background:linear-gradient(90deg,rgba(0,212,255,.04),rgba(240,180,41,.03),rgba(0,212,255,.04));
  border-top:1px solid rgba(0,212,255,.06);
  border-bottom:1px solid rgba(0,212,255,.06);
}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;}
.stat-item{
  text-align:center;padding:28px 20px;
  border-right:1px solid rgba(0,212,255,.06);
}
.stat-item:last-child{border-right:none;}
.stat-n{
  font-family:'Bebas Neue',sans-serif;font-size:3.4rem;letter-spacing:.06em;line-height:1;
  background:linear-gradient(135deg,var(--cyan),var(--gold2));
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.stat-l{font-size:.75rem;letter-spacing:.15em;text-transform:uppercase;color:var(--text2);margin-top:6px;}

/* ══ PORTFOLIO ══ */
#portfolio{background:var(--ink2);}
.pf-filters{display:flex;gap:8px;margin:32px 0;flex-wrap:wrap;}
.pf-filter{
  padding:8px 20px;border-radius:8px;
  border:1px solid rgba(0,212,255,.15);
  font-size:.8rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;
  color:var(--text2);cursor:none;
  transition:all .2s;
}
.pf-filter.act,.pf-filter:hover{
  background:var(--cyan);border-color:var(--cyan);color:var(--ink);
}
.pf-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(0,212,255,.05);}
.pf-card{
  background:var(--card);overflow:hidden;position:relative;
  transition:transform .35s cubic-bezier(0.34,1.56,.64,1);
}
.pf-card:hover{transform:scale(1.02);z-index:2;}
.pf-thumb{
  height:200px;display:flex;align-items:center;justify-content:center;
  font-size:3.5rem;position:relative;overflow:hidden;
}
.pf-thumb::before{
  content:'';position:absolute;inset:0;
  background:linear-gradient(135deg,var(--t1,rgba(0,212,255,.12)),var(--t2,rgba(0,212,255,.04)));
}
.pf-thumb::after{
  content:'';position:absolute;inset:0;
  background:linear-gradient(to top,var(--card),transparent);
}
.pf-info{padding:24px;}
.pf-cat{font-size:.68rem;letter-spacing:.15em;text-transform:uppercase;color:var(--cyan);font-weight:700;margin-bottom:8px;}
.pf-info h3{font-family:'Bebas Neue',sans-serif;font-size:1.3rem;letter-spacing:.05em;color:var(--white);margin-bottom:8px;}
.pf-info p{font-size:.85rem;color:var(--text2);line-height:1.6;}
.pf-overlay{
  position:absolute;inset:0;
  background:rgba(0,212,255,.04);backdrop-filter:blur(0);
  display:flex;align-items:center;justify-content:center;
  opacity:0;transition:opacity .3s;
}
.pf-card:hover .pf-overlay{opacity:1;}
.pf-btn-view{
  padding:10px 24px;border-radius:8px;
  background:var(--cyan);color:var(--ink);
  font-size:.8rem;font-weight:700;
  transform:translateY(10px);transition:transform .3s .05s;
}
.pf-card:hover .pf-btn-view{transform:translateY(0);}

/* ══ TESTIMONIALS ══ */
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:56px;}
.testi-card{
  background:var(--card);border-radius:var(--r);
  padding:32px;border:1px solid rgba(255,255,255,.05);
  position:relative;overflow:hidden;
  transition:transform .3s,border-color .3s;
}
.testi-card::before{
  content:'"';
  position:absolute;top:-10px;right:20px;
  font-family:'Bebas Neue',sans-serif;font-size:8rem;letter-spacing:0;
  color:rgba(0,212,255,.06);line-height:1;pointer-events:none;
}
.testi-card:hover{transform:translateY(-6px);border-color:rgba(0,212,255,.15);}
.testi-stars{color:var(--gold);font-size:1rem;letter-spacing:3px;margin-bottom:16px;}
.testi-q{font-size:.92rem;color:var(--text2);line-height:1.75;margin-bottom:24px;font-style:italic;}
.testi-author{display:flex;align-items:center;gap:12px;}
.testi-av{
  width:44px;height:44px;border-radius:50%;flex-shrink:0;
  background:linear-gradient(135deg,var(--cyan),var(--gold));
  display:flex;align-items:center;justify-content:center;
  font-weight:800;color:var(--ink);font-size:.9rem;
}
.testi-name{font-weight:700;color:var(--white);font-size:.9rem;}
.testi-role{font-size:.75rem;color:var(--text2);}

/* ══ CONTACT ══ */
#contact{background:var(--ink2);}
.contact-grid{display:grid;grid-template-columns:1fr 1.1fr;gap:80px;margin-top:64px;}
.ci-list{display:flex;flex-direction:column;gap:24px;margin-bottom:36px;}
.ci-row{display:flex;gap:16px;align-items:flex-start;}
.ci-ico{
  width:48px;height:48px;border-radius:12px;flex-shrink:0;
  background:rgba(0,212,255,.06);border:1px solid rgba(0,212,255,.15);
  display:flex;align-items:center;justify-content:center;font-size:1.2rem;
}
.ci-label{font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:var(--cyan);font-weight:700;margin-bottom:4px;}
.ci-val{font-size:.9rem;color:var(--text2);}
.ci-val a{color:var(--text);transition:color .2s;}
.ci-val a:hover{color:var(--cyan);}

.wa-btn{
  display:flex;align-items:center;justify-content:center;gap:12px;
  width:100%;padding:16px;border-radius:14px;
  background:linear-gradient(135deg,var(--wa),#1da851);
  color:#fff;font-weight:800;font-size:1rem;
  box-shadow:0 8px 32px rgba(37,211,102,.25);
  transition:transform .2s,box-shadow .2s;
}
.wa-btn:hover{transform:translateY(-2px);box-shadow:0 14px 40px rgba(37,211,102,.4);}
.map-box{border-radius:14px;overflow:hidden;border:1px solid rgba(0,212,255,.1);margin-top:20px;}
.map-box iframe{width:100%;height:200px;border:none;display:block;filter:grayscale(.7) invert(1);}

/* Form */
.form-box{
  background:var(--card);border:1px solid rgba(0,212,255,.1);
  border-radius:20px;padding:40px;
}
.fg{display:flex;flex-direction:column;gap:7px;margin-bottom:18px;}
.fg label{font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;color:var(--text2);font-weight:700;}
.fg input,.fg textarea,.fg select{
  padding:13px 16px;border-radius:10px;
  background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);
  color:var(--text);font-size:.92rem;outline:none;
  transition:border-color .2s,box-shadow .2s;
}
.fg input:focus,.fg textarea:focus,.fg select:focus{
  border-color:var(--cyan);box-shadow:0 0 0 3px rgba(0,212,255,.08);
}
.fg select option{background:var(--ink2);}
.fg textarea{resize:vertical;min-height:110px;}
.fg-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.fe{font-size:.75rem;color:#f87171;display:none;}
.fe.show{display:block;}
.btn-send{
  width:100%;padding:15px;border-radius:12px;
  background:linear-gradient(135deg,var(--cyan),#0099cc);
  color:var(--ink);font-weight:800;font-size:1rem;
  box-shadow:0 8px 32px rgba(0,212,255,.2);
  transition:opacity .2s,transform .2s,box-shadow .2s;
  display:flex;align-items:center;justify-content:center;gap:10px;
}
.btn-send:hover{opacity:.9;transform:translateY(-2px);box-shadow:0 12px 40px rgba(0,212,255,.35);}
.form-msg{
  margin-top:14px;padding:12px 16px;border-radius:10px;
  font-size:.85rem;font-weight:600;display:none;
}
.form-msg.ok{background:rgba(0,229,160,.08);border:1px solid rgba(0,229,160,.2);color:var(--green);display:block;}

/* ══ FOOTER ══ */
#footer{border-top:1px solid rgba(0,212,255,.08);}
.footer-top{padding:72px 0 48px;}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1.5fr;gap:56px;}
.ft-logo-row{display:flex;align-items:center;gap:10px;margin-bottom:16px;}
.ft-logo{width:36px;height:36px;border-radius:9px;object-fit:contain;}
.ft-desc{font-size:.88rem;color:var(--text2);line-height:1.75;margin-bottom:20px;}
.socials{display:flex;gap:8px;}
.soc{
  width:36px;height:36px;border-radius:9px;
  border:1px solid rgba(255,255,255,.07);
  display:flex;align-items:center;justify-content:center;
  color:var(--text2);transition:border-color .2s,color .2s;
}
.soc:hover{border-color:var(--cyan);color:var(--cyan);}
.ft-h{font-family:'Bebas Neue',sans-serif;font-size:1.1rem;letter-spacing:.1em;color:var(--white);margin-bottom:18px;}
.ft-links{display:flex;flex-direction:column;gap:10px;}
.ft-links a{font-size:.88rem;color:var(--text2);transition:color .2s;display:flex;align-items:center;gap:6px;}
.ft-links a:hover{color:var(--cyan);}
.ft-links a::before{content:'→';font-size:.7rem;color:var(--cyan);opacity:0;transition:opacity .2s;}
.ft-links a:hover::before{opacity:1;}
.ft-contact{display:flex;flex-direction:column;gap:10px;}
.fc-row{display:flex;gap:8px;font-size:.85rem;color:var(--text2);}
.fc-row a{color:var(--text2);transition:color .2s;}
.fc-row a:hover{color:var(--cyan);}
.footer-bottom{
  padding:20px 0;border-top:1px solid rgba(255,255,255,.04);
  display:flex;justify-content:space-between;align-items:center;
  font-size:.78rem;color:var(--text2);flex-wrap:wrap;gap:10px;
}

/* ══ FLOATING WA ══ */
.float-wa-wrap{position:fixed;right:28px;bottom:28px;z-index:800;display:flex;flex-direction:column;align-items:flex-end;gap:12px;}
.float-bubble{
  background:var(--card);border:1px solid rgba(37,211,102,.2);
  border-radius:16px;padding:18px 20px;max-width:280px;
  box-shadow:0 24px 60px rgba(0,0,0,.5);
  transform-origin:bottom right;
  transform:scale(.9) translateY(8px);opacity:0;
  transition:transform .35s cubic-bezier(0.34,1.56,.64,1),opacity .3s;
  pointer-events:none;
}
.float-bubble.vis{transform:scale(1) translateY(0);opacity:1;pointer-events:all;}
.fb-hd{display:flex;align-items:center;gap:10px;margin-bottom:10px;}
.fb-av{width:36px;height:36px;border-radius:50%;background:var(--wa);display:flex;align-items:center;justify-content:center;font-size:1rem;color:#fff;}
.fb-nm{font-weight:700;font-size:.88rem;color:var(--white);}
.fb-st{font-size:.7rem;color:var(--green);display:flex;align-items:center;gap:4px;}
.fb-st::before{content:'';width:5px;height:5px;border-radius:50%;background:var(--green);}
.fb-txt{font-size:.85rem;color:var(--text2);line-height:1.6;margin-bottom:14px;}
.fb-go{
  display:flex;align-items:center;justify-content:center;gap:8px;
  padding:10px;border-radius:9px;
  background:var(--wa);color:#fff;font-weight:700;font-size:.85rem;
  transition:opacity .2s;
}
.fb-go:hover{opacity:.85;}
.fb-x{position:absolute;top:10px;right:12px;color:var(--text2);font-size:1rem;background:none;border:none;cursor:none;transition:color .2s;}
.fb-x:hover{color:var(--white);}

.float-wa-btn{
  width:60px;height:60px;border-radius:50%;
  background:linear-gradient(135deg,var(--wa),#1da851);
  color:#fff;display:flex;align-items:center;justify-content:center;
  box-shadow:0 8px 32px rgba(37,211,102,.4);
  transition:transform .2s,box-shadow .2s;position:relative;
}
.float-wa-btn:hover{transform:scale(1.06);box-shadow:0 12px 40px rgba(37,211,102,.55);}
.wa-ripple{
  position:absolute;inset:-6px;border-radius:50%;
  border:2px solid rgba(37,211,102,.4);
  animation:ripple 2s ease-out infinite;
}
@keyframes ripple{0%{opacity:.8;transform:scale(1);}100%{opacity:0;transform:scale(1.5);}}

/* ══ BACK TOP ══ */
#btop{
  position:fixed;right:28px;bottom:100px;z-index:800;
  width:44px;height:44px;border-radius:50%;
  background:var(--card);border:1px solid rgba(0,212,255,.15);
  color:var(--text2);display:flex;align-items:center;justify-content:center;
  opacity:0;pointer-events:none;transition:opacity .3s,transform .3s,color .2s;
  box-shadow:0 8px 24px rgba(0,0,0,.4);
}
#btop.vis{opacity:1;pointer-events:all;}
#btop:hover{color:var(--cyan);transform:translateY(-3px);}

/* ══ MOBILE ══ */
@media(max-width:1024px){
  .hero-inner{grid-template-columns:1fr;gap:48px;text-align:center;}
  .hero-desc{margin:0 auto 40px;}
  .hero-btns{justify-content:center;}
  .hero-stats{margin:0 auto 44px;}
  .hero-card-wrap{display:none;}
  .scroll-hint{display:none;}
  .svc-grid{grid-template-columns:1fr 1fr;}
  .about-grid{grid-template-columns:1fr;gap:48px;}
  .about-visual{display:none;}
  .stats-grid{grid-template-columns:1fr 1fr;}
  .pf-grid{grid-template-columns:1fr 1fr;}
  .testi-grid{grid-template-columns:1fr 1fr;}
  .contact-grid{grid-template-columns:1fr;gap:40px;}
  .footer-grid{grid-template-columns:1fr 1fr;gap:36px;}
}
@media(max-width:640px){
  .nav-links{
    position:fixed;inset:var(--nav-h) 0 0 0;
    background:var(--ink2);flex-direction:column;
    padding:32px;gap:0;align-items:stretch;
    opacity:0;pointer-events:none;transform:translateY(-10px);
    transition:opacity .3s,transform .3s;
  }
  .nav-links.open{opacity:1;pointer-events:all;transform:none;}
  .nl{padding:16px;font-size:1.05rem;border-bottom:1px solid rgba(255,255,255,.04);}
  .nav-cta{margin:20px 0 0;text-align:center;}
  .burger{display:flex;}
  .svc-grid{grid-template-columns:1fr;}
  .svc-card:not(:nth-child(3n)){border-right:none;}
  .pf-grid{grid-template-columns:1fr;}
  .testi-grid{grid-template-columns:1fr;}
  .footer-grid{grid-template-columns:1fr;}
  .stats-grid{grid-template-columns:1fr 1fr;}
  .fg-row{grid-template-columns:1fr;}
  .hero-stats{flex-direction:column;border-radius:12px;}
  .hstat{border-right:none;border-bottom:1px solid var(--glass-bd);}
  .hstat:last-child{border-bottom:none;}
  .section{padding:72px 0;}
  .hero-eyebrow{font-size:.65rem;}
}
@keyframes fadeUp{from{opacity:0;transform:translateY(12px);}to{opacity:1;transform:translateY(0);}}
</style>
</head>
<body>

<!-- Cursor -->
<div id="cur"></div>
<div id="cur2"></div>

<!-- Scroll bar -->
<div id="sbar"></div>

<!-- LOADER -->
<div id="loader">
  <div class="ld-logo">RTS</div>
  <div class="ld-line"><div class="ld-fill" id="ldFill"></div></div>
  <div class="ld-pct" id="ldPct">0%</div>
</div>

<!-- NAV -->
<nav id="nav">
  <div class="nav-inner">
    <a href="#hero" class="brand">
      <img src="logos.png" alt="Rizhani" class="brand-img" width="38" height="38">
      <div class="brand-text">
        <div class="b1">RIZHANI</div>
        <div class="b2">Technology Solution</div>
      </div>
    </a>

    <div class="nav-links" id="navLinks">
      <a href="#hero" class="nl on">Home</a>
      <a href="#services" class="nl">Services</a>
      <a href="#about" class="nl">About</a>
      <a href="#portfolio" class="nl">Portfolio</a>
      <a href="#testimonials" class="nl">Reviews</a>
      <a href="#contact" class="nl">Contact</a>
      <a href="https://wa.me/628128309984?text=Halo%20Rizhani%2C%20saya%20ingin%20konsultasi%20IT" target="_blank" class="nav-cta">Konsultasi Gratis →</a>
    </div>

    <button class="burger" id="burger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- ═══ HERO ═══ -->
<section id="hero">
  <canvas class="hero-canvas" id="heroCanvas"></canvas>
  <div class="hero-glow"></div>
  <div class="hero-glow2"></div>

  <div class="hero-inner">
    <div class="hero-left">
      <div class="hero-eyebrow rv">Bekasi · Jawa Barat · Indonesia</div>

      <h1 class="hero-h1 rv" style="transition-delay:.1s">
        SOLUSI IT<br>
        <span class="accent">PROFESIONAL</span><br>
        UNTUK BISNIS ANDA
      </h1>

      <p class="hero-desc rv" style="transition-delay:.2s">
        PT Rizhani Technology Solution — mitra teknologi terpercaya yang menghadirkan networking, security system, IT maintenance &amp; consulting untuk mendorong pertumbuhan bisnis Anda.
      </p>

      <div class="hero-stats rv" style="transition-delay:.3s">
        <div class="hstat"><div class="hstat-n">150<span style="-webkit-text-fill-color:var(--cyan);font-size:1.4rem;">+</span></div><div class="hstat-l">Klien Puas</div></div>
        <div class="hstat"><div class="hstat-n">500<span style="-webkit-text-fill-color:var(--gold);font-size:1.4rem;">+</span></div><div class="hstat-l">Proyek</div></div>
        <div class="hstat"><div class="hstat-n">4<span style="-webkit-text-fill-color:var(--green);font-size:1.4rem;">+</span></div><div class="hstat-l">Tahun</div></div>
      </div>

      <div class="hero-btns rv" style="transition-delay:.4s">
        <a href="#services" class="btn-glow">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          Lihat Layanan
        </a>
        <a href="#contact" class="btn-outline">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 010.18 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.52-1.52a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
          Hubungi Kami
        </a>
      </div>
    </div>

    <!-- Hero Card -->
    <div class="hero-card-wrap rv-r" style="transition-delay:.2s">
      <div class="fbadge fb1"><span class="fbadge-icon">🛡️</span>Security System</div>
      <div class="fbadge fb2"><span class="fbadge-icon">✅</span>Support 24/7</div>

      <div class="hero-card">
        <div class="hc-logo-row">
          <div class="hc-logo"><img src="logos.png" alt="Rizhani"></div>
          <div>
            <div class="hc-name">RIZHANI</div>
            <div class="hc-sub">Technology Solution</div>
          </div>
        </div>

        <div class="hc-services">
          <div class="hc-svc">
            <div class="hc-icon" style="background:rgba(0,212,255,.1);border:1px solid rgba(0,212,255,.2);">🌐</div>
            <div><div class="hc-svc-text">Networking &amp; Infrastruktur</div><div class="hc-svc-sub">LAN · WAN · WiFi Enterprise · VPN</div></div>
            <span class="hc-check">✓</span>
          </div>
          <div class="hc-svc">
            <div class="hc-icon" style="background:rgba(240,180,41,.1);border:1px solid rgba(240,180,41,.2);">🛡️</div>
            <div><div class="hc-svc-text">Security System</div><div class="hc-svc-sub">CCTV · Access Control · Alarm</div></div>
            <span class="hc-check">✓</span>
          </div>
          <div class="hc-svc">
            <div class="hc-icon" style="background:rgba(0,229,160,.1);border:1px solid rgba(0,229,160,.2);">⚙️</div>
            <div><div class="hc-svc-text">IT Maintenance</div><div class="hc-svc-sub">Preventive · Corrective · Server</div></div>
            <span class="hc-check">✓</span>
          </div>
          <div class="hc-svc">
            <div class="hc-icon" style="background:rgba(139,92,246,.1);border:1px solid rgba(139,92,246,.2);">💡</div>
            <div><div class="hc-svc-text">IT Consulting</div><div class="hc-svc-sub">Strategi · Audit · Digital Roadmap</div></div>
            <span class="hc-check">✓</span>
          </div>
        </div>

        <div class="hc-bottom">
          <div class="hc-badge"><span class="hc-dot"></span>Online Sekarang</div>
          <a href="https://wa.me/628128309984" target="_blank" class="hc-cta">Chat →</a>
        </div>
      </div>
    </div>
  </div>

  <div class="scroll-hint">
    <div class="sh-line"></div>
    <div class="sh-txt">Scroll</div>
  </div>
</section>

<!-- ══ TICKER ══ -->
<div id="ticker">
  <div class="ticker-track">
    <span class="tick-item"><span class="tick-dot">◆</span> Networking</span>
    <span class="tick-item"><span class="tick-dot">◆</span> Security System</span>
    <span class="tick-item"><span class="tick-dot">◆</span> IT Maintenance</span>
    <span class="tick-item"><span class="tick-dot">◆</span> IT Consulting</span>
    <span class="tick-item"><span class="tick-dot">◆</span> Structured Cabling</span>
    <span class="tick-item"><span class="tick-dot">◆</span> Cloud &amp; Backup</span>
    <span class="tick-item"><span class="tick-dot">◆</span> CCTV Installation</span>
    <span class="tick-item"><span class="tick-dot">◆</span> Access Control</span>
    <span class="tick-item"><span class="tick-dot">◆</span> Server Management</span>
    <span class="tick-item"><span class="tick-dot">◆</span> Fiber Optic</span>
    <!-- duplicate -->
    <span class="tick-item"><span class="tick-dot">◆</span> Networking</span>
    <span class="tick-item"><span class="tick-dot">◆</span> Security System</span>
    <span class="tick-item"><span class="tick-dot">◆</span> IT Maintenance</span>
    <span class="tick-item"><span class="tick-dot">◆</span> IT Consulting</span>
    <span class="tick-item"><span class="tick-dot">◆</span> Structured Cabling</span>
    <span class="tick-item"><span class="tick-dot">◆</span> Cloud &amp; Backup</span>
    <span class="tick-item"><span class="tick-dot">◆</span> CCTV Installation</span>
    <span class="tick-item"><span class="tick-dot">◆</span> Access Control</span>
    <span class="tick-item"><span class="tick-dot">◆</span> Server Management</span>
    <span class="tick-item"><span class="tick-dot">◆</span> Fiber Optic</span>
  </div>
</div>

<!-- ══ SERVICES ══ -->
<section id="services">
  <div class="container">
    <div class="rv" style="text-align:center;margin-bottom:0;">
      <div class="sec-label" style="justify-content:center;">Layanan Kami</div>
      <h2 class="sec-title">SOLUSI IT <span>LENGKAP</span></h2>
      <p class="sec-sub" style="margin:0 auto;">Kami menyediakan layanan teknologi informasi menyeluruh yang dirancang untuk kebutuhan bisnis modern.</p>
    </div>
    <div class="svc-grid rv" style="transition-delay:.1s">

      <div class="svc-card">
        <div class="svc-num">01</div>
        <div class="svc-arrow">→</div>
        <div class="svc-icon" style="background:rgba(0,212,255,.08);border-color:rgba(0,212,255,.2);--icon-glow:rgba(0,212,255,.25);">🌐</div>
        <h3>Networking &amp; Infrastruktur</h3>
        <p>Perancangan, instalasi &amp; konfigurasi jaringan komputer LAN/WAN, WiFi enterprise, dan infrastruktur IT yang handal dan skalabel untuk bisnis Anda.</p>
        <div class="svc-tags">
          <span class="stag">LAN/WAN</span>
          <span class="stag">WiFi Enterprise</span>
          <span class="stag">Router &amp; Switch</span>
          <span class="stag">VPN</span>
        </div>
      </div>

      <div class="svc-card">
        <div class="svc-num">02</div>
        <div class="svc-arrow">→</div>
        <div class="svc-icon" style="background:rgba(240,180,41,.08);border-color:rgba(240,180,41,.2);--icon-glow:rgba(240,180,41,.25);">🛡️</div>
        <h3>Security System</h3>
        <p>Instalasi CCTV HD, access control, alarm sistem &amp; firewall untuk melindungi aset bisnis Anda secara komprehensif selama 24 jam penuh.</p>
        <div class="svc-tags">
          <span class="stag" style="background:rgba(240,180,41,.06);border-color:rgba(240,180,41,.15);color:var(--gold);">CCTV HD</span>
          <span class="stag" style="background:rgba(240,180,41,.06);border-color:rgba(240,180,41,.15);color:var(--gold);">Access Control</span>
          <span class="stag" style="background:rgba(240,180,41,.06);border-color:rgba(240,180,41,.15);color:var(--gold);">Firewall</span>
        </div>
      </div>

      <div class="svc-card">
        <div class="svc-num">03</div>
        <div class="svc-arrow">→</div>
        <div class="svc-icon" style="background:rgba(0,229,160,.08);border-color:rgba(0,229,160,.2);--icon-glow:rgba(0,229,160,.25);">⚙️</div>
        <h3>IT Maintenance</h3>
        <p>Pemeliharaan rutin komputer, server, printer &amp; infrastruktur IT untuk memastikan operasional bisnis Anda berjalan lancar tanpa hambatan.</p>
        <div class="svc-tags">
          <span class="stag" style="background:rgba(0,229,160,.06);border-color:rgba(0,229,160,.15);color:var(--green);">Preventive</span>
          <span class="stag" style="background:rgba(0,229,160,.06);border-color:rgba(0,229,160,.15);color:var(--green);">Corrective</span>
          <span class="stag" style="background:rgba(0,229,160,.06);border-color:rgba(0,229,160,.15);color:var(--green);">Server</span>
        </div>
      </div>

      <div class="svc-card">
        <div class="svc-num">04</div>
        <div class="svc-arrow">→</div>
        <div class="svc-icon" style="background:rgba(139,92,246,.08);border-color:rgba(139,92,246,.2);--icon-glow:rgba(139,92,246,.25);">💡</div>
        <h3>IT Consulting</h3>
        <p>Konsultasi strategis perencanaan teknologi, transformasi digital &amp; optimisasi infrastruktur IT sesuai kebutuhan dan anggaran bisnis Anda.</p>
        <div class="svc-tags">
          <span class="stag" style="background:rgba(139,92,246,.06);border-color:rgba(139,92,246,.15);color:#a78bfa;">Strategi IT</span>
          <span class="stag" style="background:rgba(139,92,246,.06);border-color:rgba(139,92,246,.15);color:#a78bfa;">Audit Sistem</span>
          <span class="stag" style="background:rgba(139,92,246,.06);border-color:rgba(139,92,246,.15);color:#a78bfa;">Roadmap</span>
        </div>
      </div>

      <div class="svc-card">
        <div class="svc-num">05</div>
        <div class="svc-arrow">→</div>
        <div class="svc-icon" style="background:rgba(0,212,255,.08);border-color:rgba(0,212,255,.2);">📡</div>
        <h3>Structured Cabling</h3>
        <p>Instalasi kabel terstruktur Cat5e/Cat6/Fiber Optic yang rapi &amp; profesional memenuhi standar industri untuk gedung kantor dan industri.</p>
        <div class="svc-tags">
          <span class="stag">Cat6/Cat6A</span>
          <span class="stag">Fiber Optic</span>
          <span class="stag">Rack &amp; Panel</span>
        </div>
      </div>

      <div class="svc-card">
        <div class="svc-num">06</div>
        <div class="svc-arrow">→</div>
        <div class="svc-icon" style="background:rgba(0,229,160,.08);border-color:rgba(0,229,160,.2);">☁️</div>
        <h3>Cloud &amp; Backup</h3>
        <p>Migrasi ke cloud, pengelolaan server cloud &amp; solusi backup data otomatis untuk keamanan dan ketersediaan data bisnis Anda kapanpun.</p>
        <div class="svc-tags">
          <span class="stag" style="background:rgba(0,229,160,.06);border-color:rgba(0,229,160,.15);color:var(--green);">Cloud Migration</span>
          <span class="stag" style="background:rgba(0,229,160,.06);border-color:rgba(0,229,160,.15);color:var(--green);">Auto Backup</span>
          <span class="stag" style="background:rgba(0,229,160,.06);border-color:rgba(0,229,160,.15);color:var(--green);">NAS Server</span>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ══ STATS BAND ══ -->
<div id="statsband">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item rv">
        <div class="stat-n"><span class="cnt" data-t="150">0</span>+</div>
        <div class="stat-l">Klien Puas</div>
      </div>
      <div class="stat-item rv" style="transition-delay:.1s">
        <div class="stat-n"><span class="cnt" data-t="500">0</span>+</div>
        <div class="stat-l">Proyek Selesai</div>
      </div>
      <div class="stat-item rv" style="transition-delay:.2s">
        <div class="stat-n"><span class="cnt" data-t="4">0</span>+</div>
        <div class="stat-l">Tahun Pengalaman</div>
      </div>
      <div class="stat-item rv" style="transition-delay:.3s">
        <div class="stat-n">24/7</div>
        <div class="stat-l">Support Aktif</div>
      </div>
    </div>
  </div>
</div>

<!-- ══ ABOUT ══ -->
<section id="about" class="section">
  <div class="container">
    <div class="about-grid">
      <div class="about-visual rv">
        <div class="about-big">RTS</div>
        <div class="about-imgbox">
          <img src="logos.png" alt="PT Rizhani Technology Solution">
        </div>
        <div class="about-float">
          <div class="af-n">4+</div>
          <div class="af-l">Tahun Pengalaman</div>
        </div>
      </div>
      <div class="rv-r">
        <div class="sec-label">Tentang Kami</div>
        <h2 class="sec-title">PARTNER IT <span>TERPERCAYA</span></h2>
        <div class="about-text">
          <p>PT Rizhani Technology Solution hadir sebagai mitra teknologi profesional berkomitmen menghadirkan solusi IT terbaik bagi bisnis Anda. Berlokasi di Bekasi, kami dipercaya lebih dari 150 perusahaan di berbagai industri.</p>
          <p>Dengan tim ahli berpengalaman dan dedikasi tinggi, kami memberikan layanan menyeluruh mulai dari perancangan jaringan, sistem keamanan, pemeliharaan infrastruktur IT, hingga konsultasi teknologi strategis.</p>
        </div>
        <div class="about-list">
          <div class="al-item">Bersertifikat &amp; Tim Profesional Berpengalaman</div>
          <div class="al-item">Respon Cepat &amp; Support 24/7 Tanpa Libur</div>
          <div class="al-item">Garansi Layanan &amp; Harga Transparan</div>
          <div class="al-item">Solusi Customized Sesuai Kebutuhan Bisnis</div>
          <div class="al-item">Rekam Jejak 500+ Proyek Berhasil</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══ PORTFOLIO ══ -->
<section id="portfolio" class="section" style="padding-top:120px;">
  <div class="container">
    <div class="rv" style="text-align:center;">
      <div class="sec-label" style="justify-content:center;">Portfolio</div>
      <h2 class="sec-title">PROYEK <span>UNGGULAN</span></h2>
      <p class="sec-sub" style="margin:0 auto;">Beberapa proyek IT yang telah kami kerjakan dengan dedikasi dan profesionalisme tinggi.</p>
    </div>
    <div class="pf-filters rv">
      <button class="pf-filter act" data-f="all">Semua</button>
      <button class="pf-filter" data-f="networking">Networking</button>
      <button class="pf-filter" data-f="security">Security</button>
      <button class="pf-filter" data-f="maintenance">Maintenance</button>
    </div>
    <div class="pf-grid rv" id="pfGrid">
      <div class="pf-card" data-c="networking">
        <div class="pf-thumb" style="--t1:rgba(0,212,255,.15);--t2:rgba(0,212,255,.04);">🌐</div>
        <div class="pf-info">
          <div class="pf-cat">Networking</div>
          <h3>Jaringan WAN Multi-Gedung</h3>
          <p>Implementasi WAN menghubungkan 5 gedung perusahaan manufaktur di kawasan industri Bekasi.</p>
        </div>
        <div class="pf-overlay"><span class="pf-btn-view">Lihat Detail</span></div>
      </div>
      <div class="pf-card" data-c="security">
        <div class="pf-thumb" style="--t1:rgba(240,180,41,.15);--t2:rgba(240,180,41,.04);">🛡️</div>
        <div class="pf-info">
          <div class="pf-cat">Security System</div>
          <h3>CCTV 64 Channel Dealership</h3>
          <p>Instalasi CCTV 64 channel HD dengan NVR &amp; remote monitoring untuk showroom otomotif.</p>
        </div>
        <div class="pf-overlay"><span class="pf-btn-view">Lihat Detail</span></div>
      </div>
      <div class="pf-card" data-c="networking">
        <div class="pf-thumb" style="--t1:rgba(0,229,160,.15);--t2:rgba(0,229,160,.04);">📡</div>
        <div class="pf-info">
          <div class="pf-cat">Networking</div>
          <h3>WiFi Enterprise 30 AP</h3>
          <p>Deployment WiFi enterprise dengan 30 access point untuk gedung perkantoran 10 lantai.</p>
        </div>
        <div class="pf-overlay"><span class="pf-btn-view">Lihat Detail</span></div>
      </div>
      <div class="pf-card" data-c="maintenance">
        <div class="pf-thumb" style="--t1:rgba(139,92,246,.15);--t2:rgba(139,92,246,.04);">⚙️</div>
        <div class="pf-info">
          <div class="pf-cat">IT Maintenance</div>
          <h3>Managed IT 150+ Endpoint</h3>
          <p>Kontrak maintenance bulanan untuk 150+ endpoint perusahaan distribusi nasional.</p>
        </div>
        <div class="pf-overlay"><span class="pf-btn-view">Lihat Detail</span></div>
      </div>
      <div class="pf-card" data-c="security">
        <div class="pf-thumb" style="--t1:rgba(0,212,255,.1);--t2:rgba(240,180,41,.08);">🔐</div>
        <div class="pf-info">
          <div class="pf-cat">Security System</div>
          <h3>Access Control 8 Pintu</h3>
          <p>Implementasi access control fingerprint &amp; RFID untuk 8 pintu akses di kantor pusat.</p>
        </div>
        <div class="pf-overlay"><span class="pf-btn-view">Lihat Detail</span></div>
      </div>
      <div class="pf-card" data-c="networking">
        <div class="pf-thumb" style="--t1:rgba(0,229,160,.1);--t2:rgba(0,212,255,.06);">☁️</div>
        <div class="pf-info">
          <div class="pf-cat">Cloud &amp; Backup</div>
          <h3>Cloud Migration Zero Downtime</h3>
          <p>Migrasi infrastruktur on-premise ke cloud untuk perusahaan retail tanpa gangguan operasional.</p>
        </div>
        <div class="pf-overlay"><span class="pf-btn-view">Lihat Detail</span></div>
      </div>
    </div>
  </div>
</section>

<!-- ══ TESTIMONIALS ══ -->
<section id="testimonials" class="section" style="background:var(--ink2);">
  <div class="container">
    <div class="rv" style="text-align:center;">
      <div class="sec-label" style="justify-content:center;">Testimoni</div>
      <h2 class="sec-title">KATA <span>KLIEN</span> KAMI</h2>
    </div>
    <div class="testi-grid">
      <div class="testi-card rv">
        <div class="testi-stars">★★★★★</div>
        <p class="testi-q">Rizhani Technology berhasil membangun jaringan kantor kami yang jauh lebih stabil dan cepat. Tim mereka sangat profesional, responsif, dan hasilnya memuaskan!</p>
        <div class="testi-author">
          <div class="testi-av">AB</div>
          <div><div class="testi-name">Ahmad Budi</div><div class="testi-role">IT Manager · PT Daya Mitra</div></div>
        </div>
      </div>
      <div class="testi-card rv" style="transition-delay:.1s">
        <div class="testi-stars">★★★★★</div>
        <p class="testi-q">Sistem CCTV yang dipasang Rizhani benar-benar berkualitas tinggi. Instalasi rapi, harga bersaing, dan after-sales service yang luar biasa bagus. Puas sekali!</p>
        <div class="testi-author">
          <div class="testi-av" style="background:linear-gradient(135deg,var(--gold),#e08000);">SR</div>
          <div><div class="testi-name">Siti Rahayu</div><div class="testi-role">GM · Showroom Toyota Bekasi</div></div>
        </div>
      </div>
      <div class="testi-card rv" style="transition-delay:.2s">
        <div class="testi-stars">★★★★★</div>
        <p class="testi-q">Layanan maintenance IT bulanan dari Rizhani membuat operasional kantor kami jauh lebih lancar. Masalah teknis selalu ditangani dengan cepat dan tuntas!</p>
        <div class="testi-author">
          <div class="testi-av" style="background:linear-gradient(135deg,var(--green),#00a070);">DP</div>
          <div><div class="testi-name">Deni Pratama</div><div class="testi-role">Direktur · CV Surya Mandiri</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ══ CONTACT ══ -->
<section id="contact" class="section">
  <div class="container">
    <div class="rv">
      <div class="sec-label">Hubungi Kami</div>
      <h2 class="sec-title">MULAI <span>KONSULTASI</span></h2>
      <p class="sec-sub">Konsultasi pertama <strong style="color:var(--cyan);">GRATIS</strong>. Tim kami siap membantu kebutuhan IT bisnis Anda.</p>
    </div>
    <div class="contact-grid">
      <div class="rv">
        <div class="ci-list">
          <div class="ci-row">
            <div class="ci-ico">📞</div>
            <div><div class="ci-label">Telepon / WhatsApp</div><div class="ci-val"><a href="tel:+628128309984">0812-8309-984</a></div></div>
          </div>
          <div class="ci-row">
            <div class="ci-ico">📧</div>
            <div><div class="ci-label">Email</div><div class="ci-val"><a href="mailto:info@rizhanitechnology.com">info@rizhanitechnology.com</a></div></div>
          </div>
          <div class="ci-row">
            <div class="ci-ico">🌐</div>
            <div><div class="ci-label">Website</div><div class="ci-val"><a href="https://www.rizhanitechnology.com" target="_blank">www.rizhanitechnology.com</a></div></div>
          </div>
          <div class="ci-row">
            <div class="ci-ico">📍</div>
            <div><div class="ci-label">Lokasi Kantor</div><div class="ci-val">Jl. Kusuma Timur II No. 14 RT 7 RW 17, Duren Jaya, Bekasi Timur, Kota Bekasi, Jawa Barat</div></div>
          </div>
          <div class="ci-row">
            <div class="ci-ico">🕐</div>
            <div><div class="ci-label">Jam Operasional</div><div class="ci-val">Sen–Jum: 08.00–17.00 · Sabtu: 08.00–13.00</div></div>
          </div>
        </div>
        <a href="https://wa.me/628128309984?text=Halo%20Rizhani%2C%20saya%20ingin%20konsultasi%20layanan%20IT" target="_blank" class="wa-btn">
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Chat WhatsApp — Gratis!
        </a>
        <div class="map-box">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.54!2d107.0005!3d-6.2349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b5a86a49a81%3A0x5a0bc2472f890000!2sBekasi%2C%20Kota%20Bekasi%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1700000000000" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Lokasi PT Rizhani Technology Solution"></iframe>
        </div>
      </div>

      <div class="form-box rv-r">
        <form id="cForm" novalidate>
          <div class="fg">
            <label>Nama Lengkap *</label>
            <input type="text" id="fName" placeholder="Masukkan nama Anda" required>
            <span class="fe" id="eName"></span>
          </div>
          <div class="fg-row">
            <div class="fg">
              <label>Email *</label>
              <input type="email" id="fEmail" placeholder="email@perusahaan.com" required>
              <span class="fe" id="eEmail"></span>
            </div>
            <div class="fg">
              <label>Telepon *</label>
              <input type="tel" id="fPhone" placeholder="08xxxxxxxxxx" required>
              <span class="fe" id="ePhone"></span>
            </div>
          </div>
          <div class="fg">
            <label>Nama Perusahaan</label>
            <input type="text" id="fCompany" placeholder="PT / CV / Nama Bisnis Anda">
          </div>
          <div class="fg">
            <label>Layanan yang Dibutuhkan *</label>
            <select id="fService" required>
              <option value="">Pilih layanan...</option>
              <option>Networking &amp; Infrastruktur</option>
              <option>Security System (CCTV, Access Control)</option>
              <option>IT Maintenance</option>
              <option>IT Consulting</option>
              <option>Structured Cabling</option>
              <option>Cloud &amp; Backup</option>
              <option>Lainnya</option>
            </select>
            <span class="fe" id="eService"></span>
          </div>
          <div class="fg">
            <label>Pesan *</label>
            <textarea id="fMsg" rows="4" placeholder="Ceritakan kebutuhan IT Anda..." required></textarea>
            <span class="fe" id="eMsg"></span>
          </div>
          <button type="submit" class="btn-send" id="sendBtn">
            <span id="sendTxt">Kirim via WhatsApp</span>
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </button>
          <div class="form-msg" id="fOk"></div>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- ══ FOOTER ══ -->
<footer id="footer">
  <div class="footer-top">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="ft-logo-row">
            <img src="logos.png" alt="Rizhani" class="ft-logo" width="36" height="36">
            <div>
              <div class="b1" style="font-family:'Bebas Neue',sans-serif;font-size:1.2rem;letter-spacing:.1em;color:var(--white);">RIZHANI</div>
              <div class="b2" style="font-size:.55rem;letter-spacing:.15em;color:var(--cyan);">Technology Solution</div>
            </div>
          </div>
          <p class="ft-desc">Solusi IT profesional terpercaya di Bekasi. Networking, Security System, IT Maintenance &amp; Consulting untuk bisnis Anda.</p>
          <div class="socials">
            <a href="https://wa.me/628128309984" target="_blank" class="soc" title="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href="https://www.rizhanitechnology.com" target="_blank" class="soc" title="Website">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>
            </a>
            <a href="mailto:info@rizhanitechnology.com" class="soc" title="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>
        </div>
        <div>
          <div class="ft-h">Navigasi</div>
          <div class="ft-links">
            <a href="#hero">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#testimonials">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div>
          <div class="ft-h">Layanan IT</div>
          <div class="ft-links">
            <a href="#services">Networking</a>
            <a href="#services">Security System</a>
            <a href="#services">IT Maintenance</a>
            <a href="#services">IT Consulting</a>
            <a href="#services">Structured Cabling</a>
            <a href="#services">Cloud &amp; Backup</a>
          </div>
        </div>
        <div>
          <div class="ft-h">Kontak</div>
          <div class="ft-contact">
            <div class="fc-row">📞 <a href="tel:+628128309984">0812-8309-984</a></div>
            <div class="fc-row">📧 <a href="mailto:info@rizhanitechnology.com">info@rizhanitechnology.com</a></div>
            <div class="fc-row">🌐 <a href="https://www.rizhanitechnology.com" target="_blank">rizhanitechnology.com</a></div>
            <div class="fc-row">📍 Jl. Kusuma Timur II No. 14, Duren Jaya, Bekasi Timur</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container" style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;">
      <span>© 2025 PT Rizhani Technology Solution. All rights reserved.</span>
      <span>Powered by Innovation &amp; Dedication 🚀</span>
    </div>
  </div>
</footer>

<!-- ══ FLOATING WA ══ -->
<div class="float-wa-wrap">
  <div class="float-bubble" id="waBubble" style="position:relative;">
    <button class="fb-x" id="waClose">✕</button>
    <div class="fb-hd">
      <div class="fb-av">💬</div>
      <div><div class="fb-nm">Rizhani Technology</div><div class="fb-st">Online sekarang</div></div>
    </div>
    <p class="fb-txt">Halo! 👋 Ada yang bisa kami bantu? Konsultasi IT pertama <strong style="color:var(--green);">GRATIS!</strong></p>
    <a href="https://wa.me/628128309984?text=Halo%20Rizhani%2C%20saya%20ingin%20konsultasi%20IT%20untuk%20bisnis%20saya" target="_blank" class="fb-go">
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      Mulai Chat Sekarang
    </a>
  </div>
  <button class="float-wa-btn" id="waBtn">
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    <span class="wa-ripple"></span>
  </button>
</div>

<!-- BACK TO TOP -->
<button id="btop">
  <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M18 15l-6-6-6 6"/></svg>
</button>

<script>
'use strict';

/* ── Loader ── */
(function(){
  const fill=document.getElementById('ldFill'),pct=document.getElementById('ldPct'),ld=document.getElementById('loader');
  let p=0;
  const t=setInterval(()=>{
    p+=Math.random()*14+7;
    if(p>=100){p=100;clearInterval(t);setTimeout(()=>ld.classList.add('gone'),400);}
    if(fill)fill.style.width=p+'%';
    if(pct)pct.textContent=Math.floor(p)+'%';
  },65);
})();

/* ── Cursor ── */
(function(){
  const c=document.getElementById('cur'),c2=document.getElementById('cur2');
  if(!c||!c2)return;
  let mx=0,my=0,tx=0,ty=0;
  document.addEventListener('mousemove',e=>{
    mx=e.clientX;my=e.clientY;
    c.style.left=mx+'px';c.style.top=my+'px';
  });
  (function anim(){
    tx+=(mx-tx)*.12;ty+=(my-ty)*.12;
    c2.style.left=tx+'px';c2.style.top=ty+'px';
    requestAnimationFrame(anim);
  })();
  document.addEventListener('mousedown',()=>c.style.transform='translate(-50%,-50%) scale(.6)');
  document.addEventListener('mouseup',()=>c.style.transform='translate(-50%,-50%) scale(1)');
})();

/* ── Scroll bar ── */
window.addEventListener('scroll',()=>{
  const b=document.getElementById('sbar');
  if(b){const s=window.scrollY,m=document.documentElement.scrollHeight-window.innerHeight;b.style.width=((s/m)*100)+'%';}
  // Nav
  document.getElementById('nav').classList.toggle('solid',window.scrollY>50);
  // Back top
  document.getElementById('btop').classList.toggle('vis',window.scrollY>400);
},{passive:true});

/* ── Nav active ── */
(function(){
  const secs=[...document.querySelectorAll('section[id]')];
  const nls=[...document.querySelectorAll('.nl')];
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        nls.forEach(n=>n.classList.toggle('on',n.getAttribute('href')==='#'+e.target.id));
      }
    });
  },{threshold:.3,rootMargin:'-60px 0px -60px 0px'});
  secs.forEach(s=>obs.observe(s));
})();

/* ── Burger ── */
(function(){
  const btn=document.getElementById('burger'),links=document.getElementById('navLinks');
  btn.addEventListener('click',()=>{
    const open=btn.classList.toggle('x');
    links.classList.toggle('open',open);
    document.body.style.overflow=open?'hidden':'';
  });
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    btn.classList.remove('x');links.classList.remove('open');document.body.style.overflow='';
  }));
})();

/* ── Hero Canvas ── */
(function(){
  const cv=document.getElementById('heroCanvas');
  if(!cv)return;
  const ctx=cv.getContext('2d');
  const NUM=window.innerWidth<600?35:65;
  const pts=[];
  function resize(){cv.width=cv.offsetWidth;cv.height=cv.offsetHeight;}
  resize();
  window.addEventListener('resize',resize,{passive:true});
  for(let i=0;i<NUM;i++)pts.push({
    x:Math.random()*cv.width,y:Math.random()*cv.height,
    vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,
    r:Math.random()*1.5+.5
  });
  function draw(){
    ctx.clearRect(0,0,cv.width,cv.height);
    pts.forEach(p=>{
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>cv.width)p.vx*=-1;
      if(p.y<0||p.y>cv.height)p.vy*=-1;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle='rgba(0,212,255,.6)';ctx.fill();
    });
    for(let i=0;i<pts.length-1;i++){
      for(let j=i+1;j<pts.length;j++){
        const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.hypot(dx,dy);
        if(d<130){
          ctx.beginPath();
          ctx.strokeStyle=`rgba(0,212,255,${(1-d/130)*.25})`;
          ctx.lineWidth=.6;
          ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── Scroll Reveal ── */
(function(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach((e,i)=>{if(e.isIntersecting){e.target.classList.add('show');obs.unobserve(e.target);}});
  },{threshold:.1,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.rv,.rv-r').forEach((el,i)=>{
    if(!el.style.transitionDelay)el.style.transitionDelay=(i%4)*.08+'s';
    obs.observe(el);
  });
})();

/* ── Counters ── */
(function(){
  const els=document.querySelectorAll('.cnt');
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(!e.isIntersecting)return;
      const el=e.target,target=+el.dataset.t;
      let v=0;const step=target/60;
      const t=setInterval(()=>{v=Math.min(v+step,target);el.textContent=Math.floor(v);if(v>=target)clearInterval(t);},20);
      obs.unobserve(el);
    });
  },{threshold:.5});
  els.forEach(e=>obs.observe(e));
})();

/* ── Portfolio filter ── */
(function(){
  const btns=document.querySelectorAll('.pf-filter');
  const cards=document.querySelectorAll('.pf-card');
  btns.forEach(b=>b.addEventListener('click',()=>{
    btns.forEach(x=>x.classList.remove('act'));b.classList.add('act');
    const f=b.dataset.f;
    cards.forEach(c=>{
      const show=f==='all'||c.dataset.c===f;
      c.style.opacity=show?'1':'0.15';
      c.style.transform=show?'':'scale(.97)';
      c.style.transition='opacity .3s,transform .3s';
      c.style.pointerEvents=show?'':'none';
    });
  }));
})();

/* ── WA Bubble ── */
(function(){
  const btn=document.getElementById('waBtn'),bubble=document.getElementById('waBubble'),close=document.getElementById('waClose');
  let open=false;
  function show(){bubble.classList.add('vis');open=true;}
  function hide(){bubble.classList.remove('vis');open=false;}
  // Auto show after 5s (once per session)
  if(!sessionStorage.getItem('waSeen')){setTimeout(()=>{show();sessionStorage.setItem('waSeen','1');},5000);}
  btn.addEventListener('click',()=>open?hide():show());
  if(close)close.addEventListener('click',hide);
  document.addEventListener('click',e=>{if(open&&!bubble.contains(e.target)&&e.target!==btn)hide();});
})();

/* ── Back Top ── */
document.getElementById('btop').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* ── Contact Form → WhatsApp ── */
(function(){
  const form=document.getElementById('cForm');
  if(!form)return;
  const F={
    name:{el:document.getElementById('fName'),err:document.getElementById('eName'),msg:'Nama wajib diisi'},
    email:{el:document.getElementById('fEmail'),err:document.getElementById('eEmail'),msg:'Email tidak valid'},
    phone:{el:document.getElementById('fPhone'),err:document.getElementById('ePhone'),msg:'Nomor telepon wajib diisi'},
    service:{el:document.getElementById('fService'),err:document.getElementById('eService'),msg:'Pilih layanan'},
    msg:{el:document.getElementById('fMsg'),err:document.getElementById('eMsg'),msg:'Pesan wajib diisi'},
  };
  function validate(){
    let ok=true;
    Object.entries(F).forEach(([k,f])=>{
      const v=f.el.value.trim();
      let err=k==='email'?!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v):!v;
      f.err.textContent=err?f.msg:'';f.err.classList.toggle('show',err);
      f.el.style.borderColor=err?'#f87171':'';
      if(err)ok=false;
    });
    return ok;
  }
  Object.values(F).forEach(f=>f.el.addEventListener('input',()=>{f.err.classList.remove('show');f.el.style.borderColor='';}));
  form.addEventListener('submit',e=>{
    e.preventDefault();
    if(!validate())return;
    const name=F.name.el.value.trim(),email=F.email.el.value.trim(),phone=F.phone.el.value.trim();
    const company=document.getElementById('fCompany').value.trim();
    const service=F.service.el.value;
    const msg=F.msg.el.value.trim();
    const text=`*INQUIRY IT SERVICE*\n\n*Nama:* ${name}\n*Email:* ${email}\n*Telepon:* ${phone}${company?'\n*Perusahaan:* '+company:''}\n*Layanan:* ${service}\n\n*Pesan:*\n${msg}`;
    const ok=document.getElementById('fOk');
    const btn=document.getElementById('sendBtn'),btxt=document.getElementById('sendTxt');
    btn.disabled=true;btxt.textContent='Membuka WhatsApp...';
    ok.textContent='✅ Mengarahkan ke WhatsApp...';ok.className='form-msg ok';
    setTimeout(()=>{
      window.open(`https://wa.me/628128309984?text=${encodeURIComponent(text)}`,'_blank','noopener');
      form.reset();btn.disabled=false;btxt.textContent='Kirim via WhatsApp';
      ok.textContent='✅ WhatsApp terbuka! Silakan kirim pesan yang sudah disiapkan.';
      setTimeout(()=>ok.className='form-msg',5000);
    },600);
  });
})();
</script>
</body>
</html>
