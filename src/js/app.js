const GAME = (function() {
    const playerOne = document.getElementById('player-one')
    const playerOneScore = document.getElementById('player-one-score')
    const playerTwo = document.getElementById('player-two')
    const playerTwoScore = document.getElementById('player-two-score')
    const innerCells = document.querySelectorAll('.boardCell-inner')
    const cardImgs = document.querySelectorAll('.mem-card')
    const newGameBtn = document.getElementById('newGame')

    class Player {
        constructor(name, score, previousScore) {
            this.name = name;
            this.score = score;
            this.previousScore = previousScore;
        }

        display(player, playerScore) {
            player.textContent = this.name
            playerScore.textContent = this.score
        }

    }

    class Board {
        // shuffle img for cards
        static shuffleCards() {
            const imgSrc = ['bats.733a5b76.jpg', 
            'candle.30b12a14.jpg', 
            'cato.609c596b.jpg', 
            'pumpkinghost.36944902.jpg', 
            'skatingreaper.b1a599ef.jpg', 
            'spookyeye.be48eb44.jpg']

            cardImgs.forEach(img => {
                img.src = imgSrc[Game.randomize(0, 5)]
            })
        }

        static flipCard() {
            innerCells.forEach(cell => {
                cell.classList.toggle('boardCellflip')
            })
        }
    }

    class Game {
        // start the game
        static startGame() {
            console.log('game starting')
            Board.shuffleCards()

            // give player chance to memorize cards
            setTimeout(() => {
                Board.flipCard()
            }, 2500)
        }

        // Randomize number for index of imgSrc in Board
        static randomize(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min
        }
    }

    // New game event
    newGameBtn.addEventListener('click', Game.startGame)
})()