import starOutline from '../icons/star-outline.svg'
import starFilled from '../icons/star.svg'

const favImg = document.querySelectorAll('.favorite-button > img')
favImg.forEach(img => img.addEventListener('click', toggleFav))
function toggleFav(e) {
  if (e.target.src === starOutline) {
    e.target.src = starFilled
  } else if(e.target.src === starFilled) {
    e.target.src = starOutline
  }
}