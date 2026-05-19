/* ═══════════════════════════════════════════════
   PT RIZHANI TECHNOLOGY SOLUTION — script.js
═══════════════════════════════════════════════ */

'use strict';

/* ─── LOADING SCREEN ─── */
(function () {
  const bar = document.getElementById('loadBar');
  const pct = document.getElementById('loadPct');
  const loader = document.getElementById('loader');
  let progress = 0;

  const tick = setInterval(() => {
    progress += Math.random() * 18 + 5;
    if (progress >= 100) {
      progress = 100;
      clearInterval(tick);
      setTimeout(() => loader.classList.add('done'), 400);
    }
    if (bar) bar.style.width = progress + '%';
    if (pct) pct.textContent = Math.floor(progress) + '%';
  }, 80);
})();

/* ─── SCROLL PROGRESS BAR ─── */
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const bar = document.getElementById('scrollBar');
  if (bar) bar.style.width = ((scrolled / maxScroll) * 100) + '%';
}, { passive: true });

/* ─── CURSOR GLOW ─── */
(function () {
  const cursor = document.getElementById('cursor');
  const trail  = document.getElementById('cursorTrail');
  if (!cursor || !trail) return;

  let mx = 0, my = 0, tx = 0, ty = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  (function animTrail() {
    tx += (mx - tx) * 0.14;
    ty += (my - ty) * 0.14;
    trail.style.left = tx + 'px';
    trail.style.top  = ty + 'px';
    requestAnimationFrame(animTrail);
  })();

  document.addEventListener('mousedown', () => cursor.style.transform = 'translate(-50%,-50%) scale(0.7)');
  document.addEventListener('mouseup',   () => cursor.style.transform = 'translate(-50%,-50%) scale(1)');
})();

/* ─── NAVBAR ─── */
(function () {
  const nav = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  /* Hamburger */
  const btn   = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    links.classList.toggle('open');
  });

  /* Close on link click */
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      links.classList.remove('open');
    });
  });

  /* Active link on scroll */
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nl');

  window.addEventListener('scroll', () => {
    const pos = window.scrollY + 100;
    sections.forEach(s => {
      if (pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector('.nl[href="#' + s.id + '"]');
        if (active) active.classList.add('active');
      }
    });
  }, { passive: true });
})();

/* ─── HERO CANVAS (Particle Network) ─── */
(function () {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const COLORS = ['rgba(14,165,233', 'rgba(139,92,246', 'rgba(16,255,176'];
  const N = 70;
  const CONNECT = 140;

  const nodes = Array.from({ length: N }, () => ({
    x:  Math.random() * canvas.width,
    y:  Math.random() * canvas.height,
    vx: (Math.random() - .5) * .5,
    vy: (Math.random() - .5) * .5,
    r:  Math.random() * 2 + 1,
    c:  COLORS[Math.floor(Math.random() * COLORS.length)],
    p:  Math.random() > .8,   /* pulse */
    phase: Math.random() * Math.PI * 2,
  }));

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frame++;

    nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > canvas.width)  n.vx *= -1;
      if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

      /* Draw lines to nearby nodes */
      nodes.forEach(m => {
        const dx = m.x - n.x, dy = m.y - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT) {
          const alpha = (1 - dist / CONNECT) * 0.25;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(m.x, m.y);
          ctx.strokeStyle = `rgba(14,165,233,${alpha})`;
          ctx.lineWidth = .5;
          ctx.stroke();
        }
      });

      /* Draw node */
      const r = Math.max(0.1, n.p ? n.r + Math.sin(frame * 0.04 + n.phase) * 1.5 : n.r);
      ctx.beginPath();
      ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
      ctx.fillStyle = n.c + ',0.7)';
      ctx.fill();

      if (n.p) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, r + 4, 0, Math.PI * 2);
        ctx.strokeStyle = n.c + ',0.1)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    });

    requestAnimationFrame(draw);
  }
  draw();
})();

/* ─── SCROLL REVEAL ─── */
(function () {
  const els = document.querySelectorAll('.reveal, .reveal-right');
  const io  = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
})();

/* ─── ABOUT TABS ─── */
(function () {
  const tabs = document.querySelectorAll('.abt');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.abt-panel').forEach(p => p.classList.remove('active'));
      const panel = document.getElementById('tab-' + target);
      if (panel) panel.classList.add('active');
    });
  });
})();

/* ─── PORTFOLIO FILTER ─── */
(function () {
  const btns  = document.querySelectorAll('.pf-btn');
  const items = document.querySelectorAll('.pf-item');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      items.forEach(item => {
        const cat = item.dataset.cat;
        const show = filter === 'all' || cat === filter;
        item.classList.toggle('hide', !show);
        if (show) {
          item.style.animation = 'none';
          item.offsetHeight;  /* reflow */
          item.style.animation = 'fadeIn .5s ease both';
        }
      });
    });
  });
})();

/* ─── PORTFOLIO MODAL ─── */
const modalData = {
  m1: {
    tag: 'networking',
    title: 'FIF Group Enterprise Network',
    text: 'Implementasi infrastruktur jaringan enterprise skala besar untuk 5 cabang FIF Group ASTRA di wilayah Jakarta dan sekitarnya. Proyek mencakup instalasi core switch Cisco, access point Ubiquiti, konfigurasi VLAN, QoS, dan monitoring terpusat.',
    detail: 'Sistem jaringan yang dibangun mendukung konektivitas stabil untuk lebih dari 500 pengguna aktif dengan uptime 99.9%. Implementasi firewall Fortinet memastikan keamanan data dan proteksi terhadap ancaman siber.',
    client: 'FIF Group (ASTRA)', duration: '3 bulan', tech: 'Cisco, Ubiquiti, Fortinet', year: '2018',
  },
  m2: {
    tag: 'security',
    title: 'Daya Group CCTV & Access Control',
    text: 'Implementasi sistem pengawasan CCTV IP Camera 4K dan access control terintegrasi untuk warehouse dan kantor pusat Daya Group. Sistem mencakup 64 kamera Hikvision dengan fitur AI detection, 8 titik access control ZKTeco, dan monitoring real-time 24/7.',
    detail: 'Integrasi sistem CCTV dengan software VMS terpusat memungkinkan pemantauan dari mana saja melalui aplikasi mobile. Rekaman tersimpan selama 90 hari dengan backup otomatis ke NAS.',
    client: 'Daya Group', duration: '6 minggu', tech: 'Hikvision, ZKTeco, NAS Synology', year: '2019',
  },
  m3: {
    tag: 'networking',
    title: 'O!save Multi-Outlet WiFi Network',
    text: 'Desain dan implementasi jaringan WiFi enterprise untuk 12 outlet O!save di area Jabodetabek. Menggunakan solusi Ubiquiti UniFi dengan manajemen terpusat, captive portal, dan bandwidth management per-outlet.',
    detail: 'Setiap outlet dilengkapi dengan koneksi internet terdedikasi, firewall, dan monitoring real-time. Sistem mendukung operasional POS, kasir digital, dan koneksi WiFi pelanggan secara terpisah.',
    client: 'O!save', duration: '2 bulan', tech: 'Ubiquiti UniFi, Mikrotik, VLAN', year: '2020',
  },
  m4: {
    tag: 'maintenance',
    title: 'PT Djojo Negoro Server Maintenance',
    text: 'Kontrak maintenance IT komprehensif untuk PT Djojo Negoro mencakup perawatan server, workstation, dan infrastruktur jaringan. Layanan SLA dengan response time maksimal 4 jam untuk insiden kritis.',
    detail: 'Program preventive maintenance bulanan mencakup pengecekan hardware, pembaruan software, backup verifikasi, dan laporan kesehatan sistem. Sejak kontrak berjalan, downtime berkurang 90% dibanding sebelumnya.',
    client: 'PT Djojo Negoro C-1000', duration: 'Kontrak Tahunan', tech: 'Windows Server, VMware, Veeam', year: '2021',
  },
  m5: {
    tag: 'security',
    title: 'Corporate Office Security Upgrade',
    text: 'Modernisasi sistem keamanan gedung perkantoran 10 lantai dengan solusi AI-powered surveillance. Penggantian CCTV analog ke IP Camera HD, instalasi video analytics untuk deteksi perilaku mencurigakan, dan integrasi dengan sistem alarm.',
    detail: 'Fitur AI detection mencakup face recognition, perimeter alert, dan anomaly detection. Sistem terintegrasi dengan smartphone security officer untuk notifikasi real-time.',
    client: 'Korporasi Swasta', duration: '8 minggu', tech: 'Dahua AI, Axis, Video Analytics', year: '2022',
  },
  m6: {
    tag: 'maintenance',
    title: 'Digital Transformation Roadmap',
    text: 'Konsultasi dan penyusunan roadmap transformasi digital untuk klien di sektor manufaktur. Mencakup assessment infrastruktur IT eksisting, identifikasi gap, rekomendasi solusi, dan perencanaan migrasi cloud bertahap.',
    detail: 'Deliverable meliputi dokumen IT Strategy, Cloud Migration Plan, Security Framework, dan timeline implementasi 3 tahun. Proyek berhasil mengidentifikasi potensi penghematan biaya IT sebesar 35% melalui optimasi dan cloud adoption.',
    client: 'Perusahaan Manufaktur', duration: '6 minggu', tech: 'Azure, AWS, Cloud Consulting', year: '2023',
  },
};

function openModal(id) {
  const data = modalData[id];
  if (!data) return;
  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <span class="modal-tag ${data.tag}">${data.tag.charAt(0).toUpperCase() + data.tag.slice(1)}</span>
    <h2>${data.title}</h2>
    <p>${data.text}</p>
    <p>${data.detail}</p>
    <div class="modal-meta">
      <div class="mm-item"><strong>Klien</strong><span>${data.client}</span></div>
      <div class="mm-item"><strong>Durasi</strong><span>${data.duration}</span></div>
      <div class="mm-item"><strong>Teknologi</strong><span>${data.tech}</span></div>
      <div class="mm-item"><strong>Tahun</strong><span>${data.year}</span></div>
    </div>
  `;
  document.getElementById('modalBg').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalBg').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
  /* Bind portfolio modal buttons */
  document.querySelectorAll('.pfi-btn').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.modal));
  });

  /* Close modal on backdrop */
  const bg = document.getElementById('modalBg');
  bg.addEventListener('click', e => { if (e.target === bg) closeModal(); });
  document.getElementById('modalClose').addEventListener('click', closeModal);

  /* Escape key */
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
});

/* ─── STATS COUNTER ─── */
(function () {
  const nums = document.querySelectorAll('.stat-n');
  let animated = false;

  const io = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !animated) {
      animated = true;
      nums.forEach(el => {
        const target = parseInt(el.dataset.target, 10);
        const duration = 1800;
        const start = performance.now();

        function step(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(ease * target);
          if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }
  }, { threshold: .3 });

  const statsSection = document.getElementById('stats');
  if (statsSection) io.observe(statsSection);
})();

/* ─── TESTIMONIALS CAROUSEL ─── */
(function () {
  const slider    = document.getElementById('testiSlider');
  const dotsWrap  = document.getElementById('testiDots');
  const prevBtn   = document.getElementById('prevSlide');
  const nextBtn   = document.getElementById('nextSlide');
  if (!slider) return;

  const slides = slider.querySelectorAll('.testi-slide');
  const total  = slides.length;
  let current  = 0;
  let autoTimer;

  /* Build dots */
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'td-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  function goTo(n) {
    current = (n + total) % total;
    slider.style.transform = `translateX(-${current * 100}%)`;
    dotsWrap.querySelectorAll('.td-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
    resetAuto();
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 5500);
  }
  resetAuto();

  /* Swipe support */
  let touchStart = 0;
  slider.addEventListener('touchstart', e => { touchStart = e.touches[0].clientX; }, { passive: true });
  slider.addEventListener('touchend', e => {
    const delta = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) goTo(delta > 0 ? current + 1 : current - 1);
  }, { passive: true });
})();

/* ─── CONTACT FORM VALIDATION ─── */
(function () {
  const form    = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const btnText   = document.getElementById('btnText');
  const formOk    = document.getElementById('formOk');
  if (!form) return;

  function showErr(id, msg) {
    const el = document.getElementById(id);
    if (el) el.textContent = msg;
    const input = form.querySelector('[name="' + id.replace('e-','') + '"]');
    if (input) input.classList.add('err');
  }
  function clearErr(id) {
    const el = document.getElementById(id);
    if (el) el.textContent = '';
    const input = form.querySelector('[name="' + id.replace('e-','') + '"]');
    if (input) input.classList.remove('err');
  }

  /* Live clear on input */
  form.querySelectorAll('input, select, textarea').forEach(el => {
    el.addEventListener('input', () => {
      el.classList.remove('err');
      const errId = 'e-' + el.name;
      const errEl = document.getElementById(errId);
      if (errEl) errEl.textContent = '';
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    const name    = form.querySelector('#f-name').value.trim();
    const email   = form.querySelector('#f-email').value.trim();
    const phone   = form.querySelector('#f-phone').value.trim();
    const service = form.querySelector('#f-service').value;
    const msg     = form.querySelector('#f-msg').value.trim();

    ['e-name','e-email','e-phone','e-service','e-msg'].forEach(clearErr);

    if (!name || name.length < 2) {
      showErr('e-name', 'Nama harus diisi minimal 2 karakter.'); valid = false;
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      showErr('e-email', 'Masukkan alamat email yang valid.'); valid = false;
    }

    const phoneRe = /^[0-9+\-\s]{8,16}$/;
    if (!phoneRe.test(phone)) {
      showErr('e-phone', 'Nomor telepon tidak valid.'); valid = false;
    }

    if (!service) {
      showErr('e-service', 'Pilih layanan yang Anda butuhkan.'); valid = false;
    }

    if (!msg || msg.length < 10) {
      showErr('e-msg', 'Pesan harus diisi minimal 10 karakter.'); valid = false;
    }

    if (!valid) return;

    /* Simulate submit */
    submitBtn.disabled = true;
    btnText.textContent = 'Mengirim...';

    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      btnText.textContent = 'Kirim Pesan';
      formOk.style.display = 'block';
      setTimeout(() => { formOk.style.display = 'none'; }, 6000);
    }, 1800);
  });
})();

/* ─── PARALLAX EFFECT ─── */
(function () {
  const heroContent = document.querySelector('.hero-body');
  if (!heroContent) return;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      heroContent.style.transform = `translateY(${y * 0.25}px)`;
    }
  }, { passive: true });
})();

/* ─── SMOOTH ANCHOR NAV ─── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || '68');
    const top  = target.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
