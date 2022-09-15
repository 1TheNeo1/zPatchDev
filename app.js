const isInViewport = (element) => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

document.addEventListener('scroll', (event) => {
  if (isInViewport(document.getElementById('section-2'))) {
    document.getElementById('section-2').classList.add('animate-image')
  }
})

const hamburgerMenu = document.querySelector('.hamburger-menu-icon')

hamburgerMenu.addEventListener('click', (event) => {
  document.querySelector('#hamburger-menu-content').classList.toggle('show-mobile-menu')
  document.querySelector('.hamburger-menu-icon').classList.toggle('animate-image-bar')
})

document.addEventListener('click', (event) => {
  if (event.target !== hamburgerMenu && !hamburgerMenu.contains(event.target)) {
    document.querySelector('#hamburger-menu-content').classList.remove('show-mobile-menu')
  }
})
const header = document.getElementById('header')
document.addEventListener('scroll', function (e) {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add('header-scroll')
  } else {
    header.classList.remove('header-scroll')
  }
})
