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

/* Viewer modal: CV, slide decks and videos */
const viewer = document.getElementById('viewer')
const viewerFrame = document.getElementById('viewer-frame')
const viewerTitle = document.getElementById('viewer-title')
const viewerAction = document.getElementById('viewer-action')
const viewerFallback = document.getElementById('viewer-fallback')
const viewerClose = document.getElementById('viewer-close')
let lastFocus = null

function openViewer(e) {
    const d = e.currentTarget.dataset
    lastFocus = e.currentTarget
    viewerTitle.textContent = d.viewTitle
    viewerFrame.title = d.viewTitle
    viewerAction.textContent = d.viewAction
    viewerAction.href = d.viewHref
    viewerFallback.href = d.viewOpen || d.viewHref
    viewer.classList.toggle('cv-modal--video', d.viewKind === 'video')
    if (viewerFrame.getAttribute('src') !== d.viewSrc) viewerFrame.src = d.viewSrc
    viewer.hidden = false
    requestAnimationFrame(() => viewer.classList.add('is-open'))
    document.body.classList.add('modal-open')
    viewerClose.focus()
}

function closeViewer() {
    viewer.classList.remove('is-open')
    document.body.classList.remove('modal-open')
    // stop video playback when closing
    if (viewer.classList.contains('cv-modal--video')) viewerFrame.removeAttribute('src')
    setTimeout(() => { if (!viewer.classList.contains('is-open')) viewer.hidden = true }, 250)
    if (lastFocus) lastFocus.focus()
}

document.querySelectorAll('[data-view-src]').forEach(b => b.addEventListener('click', openViewer))
viewerClose.addEventListener('click', closeViewer)
viewer.addEventListener('click', e => { if (e.target === viewer) closeViewer() })
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && viewer.classList.contains('is-open')) closeViewer()
})
