const burger = document.getElementById('btn-burger');
const menu   = document.getElementById('menu');
const links  = document.querySelectorAll('.nav-links li a');
const nav    = document.querySelector('nav');

// Toggle burger menu
burger.addEventListener('click', () => {
    const open = menu.classList.toggle('tampil');
    const bars = burger.querySelectorAll('div');
    bars[0].style.transform = open ? 'rotate(45deg) translate(5px,6px)'  : '';
    bars[1].style.opacity   = open ? '0'                                  : '';
    bars[2].style.transform = open ? 'rotate(-45deg) translate(5px,-6px)': '';
});

// Tutup menu saat link diklik
links.forEach(l => l.addEventListener('click', () => {
    menu.classList.remove('tampil');
    burger.querySelectorAll('div').forEach(b => (b.style.transform = b.style.opacity = ''));
}));

// Navbar warna + active link saat scroll
window.addEventListener('scroll', () => {
    nav.style.backgroundColor = window.scrollY > 50 ? '#0EA5E9' : '#7DD3FC';
    const mid = window.scrollY + window.innerHeight / 2;
    let cur = '';
    document.querySelectorAll('section.hero').forEach(s => {
        if (mid >= s.offsetTop && mid < s.offsetTop + s.offsetHeight) cur = s.id;
    });
    links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + cur));
});

// Scroll reveal (class .visible — styling di style.css)
const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    }),
    { threshold: 0.15 }
);
document.querySelectorAll('.tl-card, .about-card, .contact-box').forEach(el => observer.observe(el));
