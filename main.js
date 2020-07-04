  let app = {

      squares: document.querySelectorAll('.game-grid'),
      currentPlayersTurn: true,

      init: () => {
          console.log("The next yuki meme game in the making.")

          // Applying click function to squares so players can pick.
          for (let i = 0; i < app.squares.length; i++) {
              console.log(app.squares[i])
              app.squares[i].addEventListener('click', app.pickingSquare)
          }
      },

      pickingSquare: (ev) => {
          ev.stopPropagation()

          // Figure out which square is clicked
          let pickedSquare = ev.target.classList
          let appendHead = ev.target.id
          console.log(ev.target.id)
          console.log("This is the picked square " + pickedSquare)
          if (pickedSquare[2] === 'x' || pickedSquare[2] === 'o') {
              return
          }

          // Switch to player 2's turn when clicked
          if (app.currentPlayersTurn) {
              ev.target.classList.add("x")
              // Sticking yukis head into the game
              app.yukiHead(appendHead)
              app.currentPlayersTurn = !app.currentPlayersTurn
          } else {
              app.brandonHead(appendHead)
              // Sticking brandons head into the game
              ev.target.classList.add("o") 
              app.currentPlayersTurn = !app.currentPlayersTurn
          }

      },

      yukiHead: (target) => {
          // Create img of Yuki head
          let yukiHead = document.createElement('IMG')
          yukiHead.setAttribute("src", "img/YukiHead.png")
          yukiHead.classList.add("yuki")

          // Append Yuki Head to square clicked.
          let addChoice = document.getElementById(target)
          addChoice.appendChild(yukiHead)
          console.log("Yuki head is now in the game!")
      },

      brandonHead: (target) => {
          // Create img of Brandon head
          let brandonHead = document.createElement('IMG')
          brandonHead.setAttribute("src", "img/brandon.png")
          brandonHead.classList.add("brandon")

          // Append Brandon head to square clicked.
          let addChoice = document.getElementById(target)
          addChoice.appendChild(brandonHead)
          console.log("Brandon head is now in the game!")
      }
  }

  document.addEventListener('DOMContentLoaded', app.init);