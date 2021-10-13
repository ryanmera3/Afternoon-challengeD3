let choices = [{
  name: 'Rock',
  color: 'Grey',
  imgUrl: 'https://s3-alpha-sig.figma.com/img/79b8/6507/1c9b08307c0e1107b094326311a1b898?Expires=1635120000&Signature=YPIQj2MfOxCnlFxWUjqfXklqAbIY4f5rB5jeolcEQfDpfQ7vcsC6S0DmKGK5cwq2ujoz2VjKtugK~jNLImmYE9W6KKtmbGQunktkEkK0c6Mt89ut8a33cSwwf1Ubc2~bxWIqQGr4H4FACk3UvtRXCXKUDFJwfg7u18ThhwLLUIWMXZh39WQr0iE2A2G6d4y1JA9Ews2AJJSM4LlIRnurfUP25FLYEPJxTz7ElgFjrsxXX3wif7kFCUJVM~gMgd9LWVB6ny~og2ltSKdRSHhc4OaI4hIZ7diJHrJSGgXWiEMvqmlA462aGL6IbdbsX206HGsTkkH7JJvo4JwBb97SNg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
}, {
  name: 'Paper',
  color: 'White',
  imgUrl: 'https://s3-alpha-sig.figma.com/img/90ac/fc14/a0479bb7d2c9426b77e2035d3462012b?Expires=1635120000&Signature=AOjLy~paYrVVyvg5vbMkxId6IiCLqt8ZtKwHhbGuDqjLmVkJXmdaaN2AF94uFZNHfBggt-9NKzKfgUJEzYuk8wqbxza3Z6GWME7DsStt5g7Pq6ShS3~7EtUd0QIWz2f-ur5yyHTEkiF6K5Nx3EC1k44eZmm~PNbrAy0InddNa1dhdZ74O42F52FB8OggT4nZ9XidxlH5fnpqquTkEEfbPzdTk2sy6wUnuMKdgLSSdTg1zQqwIho0L6YvRSgLBPn4FUuurz5klK-jWDhper-Vqy7Sqsm43J6SI74GdauDZdoeBtq6S9A0u1wmt2LP~iw43BoHVQ3aEviFsIpTbOzBsg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
}, {
  name: 'Scissors',
  color: 'Silver',
  imgUrl: 'https://s3-alpha-sig.figma.com/img/bfba/64ca/689ce258a509a9d360bfe2962fcc2505?Expires=1635120000&Signature=PLofS3tC3cTUv7fJTtDSLUzteAdBJOkL1egmNxhFMV2Zluj1z3MuyCDvD560FCfLucIVtYuzBNThuEwsf7o4raRIfw-klJG4l~ou01mRT06WFd5iF3IZ~JEMYgTzgnBM18cXUq4ibLPmanrROJ0kVxKVVrycjJRA9QRwUrtEqZqNYy3kY3prEapqj1AusN-dKp8iRm5Z-y2xVV2S4NMcfv~CSoXzq4Q8NDwcSR83F5nMXcS-bXzLxHnFOqvY3apmvbZ6cCxpFcqMrQfrs~vs-v6pCjaQz7hrJpYoFdI3mFmKaqVwDHsjfTRb4nucTWe3WIgtEgZBT0cqvIHS5~vZDQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
}]

let winCond = {
  Rock: "Paper",
  Scissors: "Rock",
  Paper: "Scissors"
}
var playerScore = 0
var computerScore = 0

function play(choice1) {

  let playerChoice = choices.find(pChoice => pChoice.name === choice1)

  document.getElementById('playerMessage').innerText = `You have chosen ${playerChoice.name}
  `
  document.querySelector('#imgP').innerHTML = `<img oncontextmenu="noclick() "class="img-fluid rounded" src="${playerChoice.imgUrl}" alt="choice img">
  `
  let compScore = computerChoice()


  if (playerChoice.name === compScore) {
    return "It's a tie"

  } else if (playerChoice.name === winCond[compScore]) {

    playerScore++
    console.log(playerScore)
    document.getElementById('playerScore1').innerText = `Player: ${playerScore}
    `

  } else {
    computerScore++
    document.getElementById('computerScore1').innerText = `Computer: ${computerScore}`

  }
}

function computerChoice() {
  let randIndex = Math.floor(Math.random() * choices.length)
  let compChoiceRand = choices[randIndex]
  let nameRand = compChoiceRand.name
  let imgRand = compChoiceRand.imgUrl
  document.getElementById('computerMessage').innerText = `The computer has chosen ${nameRand}
  `
  document.querySelector('#imgC').innerHTML = `<img oncontextmenu="noclick() "class="img-fluid rounded" src="${imgRand}" alt="choice img">
  `
  return nameRand
}

function noclick() {
  window.event.preventDefault()
}





