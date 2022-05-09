const sidebar = document.querySelector('.sidebar')



export default function toggleSidebar() {
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
