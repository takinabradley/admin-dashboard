import starOutline from '../icons/star-outline.svg'

function newProjectCard(projectObject) {
  
  const card = document.createElement('div')
  card.classList.add('project-card')

  const text = document.createElement('div')
  text.classList.add('project-text')
  card.appendChild(text)

  const name = document.createElement('h3')
  name.textContent = projectObject.name
  const description = document.createElement('p')
  description.textContent = projectObject.description
  text.append(name, description)

  const buttonContainer = document.createElement('div')
  buttonContainer.classList.add('buttons')
  card.appendChild(buttonContainer)

  const favoriteBtn = document.createElement('button')
  favoriteBtn.classList.add('favorite-button')
  const buttonImage = document.createElement('img')
  buttonImage.src = starOutline
  favoriteBtn.appendChild(buttonImage)
  buttonContainer.appendChild(favoriteBtn)

  return card
}

export default function appendProjectCards(projectList) {
  const projectContainer = document.querySelector('.projects > .grid-wrapper')

  projectList.forEach(project => projectContainer.appendChild(newProjectCard(project)))
} 