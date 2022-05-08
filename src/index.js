// import stylesheet
import styles from './index.css' // eslint-disable-line
import starOutline from './icons/star-outline.svg'
import starFilled from './icons/star.svg'

const sidebar = document.querySelector('.sidebar')
const menu = document.querySelector('.hamburger-menu')
menu.addEventListener('click', toggleSidebar)

function toggleSidebar() {
  const body = document.querySelector('body')
  if (window.getComputedStyle(sidebar).display === 'none') {
    body.style.gridTemplateAreas = `
      'sidebar header'
      'sidebar main'
    `

    body.style.gridTemplateColumns = '1fr 4fr'
    sidebar.style.display = 'flex'
  } else {
    body.style.gridTemplateAreas = `
      'sidebar header'
      'sidebar main'
    ` 
    body.style.gridTemplateColumns = '0fr 4fr'
    sidebar.style.display = 'none'
  }
}

const favImg = document.querySelectorAll('.favorite-button > img')

favImg.forEach(img => img.addEventListener('click', toggleFav))
function toggleFav(e) {
  if (e.target.src === starOutline) {
    e.target.src = starFilled
  } else if(e.target.src === starFilled) {
    e.target.src = starOutline
  }
   
}
