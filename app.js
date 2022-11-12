const divs = document.querySelectorAll('div')

document.addEventListener('click', (e) => {
  if (e.target.matches('div')) {
    console.log('hi')
  }
})
