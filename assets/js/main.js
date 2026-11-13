/* Header border on scroll + active nav link */
const header = document.getElementById('header')
const navLinks = [...document.querySelectorAll('.nav__links a')]
const sections = navLinks.map(a => document.querySelector(a.getAttribute('href')))

function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 8)
    const y = window.scrollY + 120
    let current = -1
    sections.forEach((s, i) => { if (s && s.offsetTop <= y) current = i })
    navLinks.forEach((a, i) => a.classList.toggle('is-active', i === current))
}
window.addEventListener('scroll', onScroll, { passive: true })
onScroll()

/* Theme toggle */
const root = document.documentElement
const themeBtn = document.getElementById('theme-toggle')
const isDark = () => root.dataset.theme
    ? root.dataset.theme === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches

function syncThemeIcon() {
    themeBtn.querySelector('i').className = isDark() ? 'uil uil-sun' : 'uil uil-moon'
}
themeBtn.addEventListener('click', () => {
    root.dataset.theme = isDark() ? 'light' : 'dark'
    try { localStorage.setItem('theme', root.dataset.theme) } catch (e) {}
    syncThemeIcon()
})
syncThemeIcon()

/* Footer year */
document.getElementById('year').textContent = new Date().getFullYear()

/* CV modal */
const cvModal = document.getElementById('cv-modal')
const cvClose = document.getElementById('cv-close')
const cvFrame = document.getElementById('cv-frame')
let lastFocus = null

function openCv(e) {
    lastFocus = e.currentTarget
    if (!cvFrame.src) cvFrame.src = cvFrame.dataset.src
    cvModal.hidden = false
    requestAnimationFrame(() => cvModal.classList.add('is-open'))
    document.body.classList.add('modal-open')
    cvClose.focus()
}

function closeCv() {
    cvModal.classList.remove('is-open')
    document.body.classList.remove('modal-open')
    setTimeout(() => { if (!cvModal.classList.contains('is-open')) cvModal.hidden = true }, 250)
    if (lastFocus) lastFocus.focus()
}

document.querySelectorAll('[data-cv-open]').forEach(b => b.addEventListener('click', openCv))
cvClose.addEventListener('click', closeCv)
cvModal.addEventListener('click', e => { if (e.target === cvModal) closeCv() })
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && cvModal.classList.contains('is-open')) closeCv()
})
