// const divs = document.querySelectorAll('div')

// document.addEventListener('click', (e) => {
//   if (e.target.matches('div')) {
//     console.log('hi')
//   }
// })

const tiles = document.querySelectorAll('.tile')
const Player_X = 'X'
const Player_O = 'O'
let turn = Player_X

const strike = document.getElementById('strike')
const gameOverArea = document.getElementById('game-over-area')
const gameOverText = document.getElementById('game-over-text')
const playAgain = document.getElementById('play-again')

tiles.forEach((tile) => tile.addEventListener('click', tileClick))

function tileClick(event) {
  if (gameOverArea.classList.contains('visible')) {
    return
  }
  const tile = event.target
  const tileNumber = tile.dataset.index
  if (tile.innerText != '') {
    return
  }
  if (turn === Player_X) {
    tile.innerText = Player_X
    boardState[tileNumber - 1] = Player_X
    turn = Player_O
  } else {
    tile.innerText = Player_O
    boardState[tileNumber - 1] = Player_O
    turn = Player_X
  }
  checkWinner()
}

function checkWinner() {
  for (const winningCombos of winningCombos) {
    const combo = winningCombos.combo
    const strikeClass = winningCombos.strikeClass
  }
}

const winningCombos = [
  {combo: [1, 2, 3], strikeClass: "strike-row-1"}
  {combo: [4, 5, 6], strikeClass: "strike-row-2"}
  {combo: [7, 8, 9], strikeClass: "strike-row-3"}
  {combo: [1, 4, 7], strikeClass: "strike-column-1"}
  {combo: [2, 5, 8], strikeClass: "strike-column-2"}
  {combo: [3, 6, 9], strikeClass: "strike-column-3"}
  {combo: [1, 5, 9], strikeClass: "strike-diagonal-1"}
  {combo: [3, 5, 7], strikeClass: "strike-diagonal-2"}
]