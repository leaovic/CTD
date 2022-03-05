
// Programaremos um pequeno jogo de Pedra, Papel ou Tesoura.
// Neste jogo o usuário poderá escolher entre uma das três opções
// e o computador escolherá aleatoriamente uma das três opções,
// essas opções serão então comparadas e no final será mostrado quem ganhou e quem perdeu a disputa.
// Para fazer essa atividade é importante lembrar das regras básicas deste jogo:
// Pedra ganha de Tesoura.
// Tesoura ganha de Papel.
// Papel ganha de Pedra.
// Após termos as regras e o sistema com uma partida do jogo, ficará ao encargo das mesas de trabalho:
// 1. Utilizar funções e switch;
// 2. Ganhador, quem ganhou 2 rodadas, para auxiliar use uma variável para armazenar o vencedor de cada rodada;
// 3. Empate no jogo, não dá pontuação para nenhum dos jogadores.


var choiceArray = ["papel", "pedra", "tesoura"];

var getUserChoice = function () {
  var userChoice = undefined;
  var userChoiceIndex = undefined;

  while (true) {
    userChoice = prompt("Qual você escolhe? - pedra, papel ou tesoura?");
    userChoiceIndex = choiceArray.indexOf(userChoice);

    if (userChoiceIndex >= 0 && userChoiceIndex <= 2) return userChoice;

    alert("Escolha Inválida");
  }
};

var getComputerChoice = function () {
  var computerChoiceIndex = Math.floor(Math.random() * 3);
  return choiceArray[computerChoiceIndex];
};

var decideWinner = function (userChoice, computerChoice) {
  if (userChoice === computerChoice) return "Empate!";

  if (userChoice === "papel") {
    if (computerChoice === "pedra") {
      return "Você venceu!";
    } 
    else {
      return "Você perdeu!";
    }
  }
  if (userChoice === "pedra") {
    if (computerChoice === "papel") {
      return "Você perdeu!";
    } 
    else {
      return "Você venceu!";
    }
  } 
  else {
    if (computerChoice === "papel") {
      return "Você venceu!";
    } 
    else {
      return "Você perdeu!";
    }
  }
};

var runGame = function () {
  var userChoice = getUserChoice();
  var computerChoice = getComputerChoice();
  var gameResult = decideWinner(userChoice, computerChoice);
  gameResult = "Computador escolheu = " + computerChoice + ". " + gameResult;
  alert(gameResult);
};

runGame();
