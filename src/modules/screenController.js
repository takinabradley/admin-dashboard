import Projects from './Projects.js'
import appendProjectCards from './appendProjectCards.js'
import toggleSidebar from './toggleSidebar.js' // eslint-disable-line
import addFavListeners from './toggleFav.js'

export default function screenController() {
  const addCards = () => {
    Projects.add('new', 'project')
    appendProjectCards(Projects.list)
    addFavListeners()
  }
  
  const menu = document.querySelector('.hamburger-menu')
  menu.addEventListener('click', toggleSidebar)

  const newBtn = document.querySelector('.new')
  newBtn.addEventListener('click', addCards)

  addFavListeners()
}