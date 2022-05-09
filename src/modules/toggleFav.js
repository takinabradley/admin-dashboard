import starOutline from '../icons/star-outline.svg'
import starFilled from '../icons/star.svg'



function toggleFav(e) {
  if (e.target.src === starOutline) {
    e.target.src = starFilled
  } else if(e.target.src === starFilled) {
    e.target.src = starOutline
  }
}

export default function addFavListeners() {
  console.log('added')
  const favImg = document.querySelectorAll('.favorite-button > img')
  favImg.forEach(img => img.removeEventListener('click', toggleFav))
  favImg.forEach(img => img.addEventListener('click', toggleFav))
}