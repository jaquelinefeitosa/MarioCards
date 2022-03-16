const marioListSelection = document.querySelectorAll('.mario')

const marioCards = document.querySelectorAll('.mario-card')

marioListSelection.forEach(mario => {
  mario.addEventListener('click', () => {
    const openedMarioCard = document.querySelector('.open')

    openedMarioCard.classList.remove('open')

    const selectedMarioID = mario.attributes.id.value

    const marioCardToOpenID = 'card-' + selectedMarioID
    const marioCardToOpen = document.getElementById(marioCardToOpenID)

    marioCardToOpen.classList.add('open')

    const activeMarioOnList = document.querySelector('.active')
    activeMarioOnList.classList.remove('active')

    const selectedMarioOnList = document.getElementById(selectedMarioID)
    selectedMarioOnList.classList.add('active')
  })
})
