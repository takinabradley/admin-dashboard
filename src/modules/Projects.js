const Projects = (function () {
  const list = []

  function add(name, description) {
    if (_findProject(name) !== undefined) return
    const project = _projectFactory(name, description)
    
    if (_projectFactory(name, description) !== undefined) {
      list.push(project)
      console.log(list)
    }
  }

  function remove(name) {
    const index = _findProject(name, true)

    if (index !== -1) list.splice(index, 1)
  }

  function _findProject(name, index = false) {
    if (typeof name !== 'string') return
    
    if (index === false) {
      return list.find(project => project.name === name)
    } else {
      return list.findIndex(project => project.name === name)
    }
  }

  function _projectFactory(name, description) {
    if (typeof name !== 'string' || typeof description !== 'string') return
    return {name, description}
  }

  return Object.freeze({
    get list() {
      return list.map(obj => ({...obj})) 
    },
    add,
    remove
  })
})()

export default Projects









