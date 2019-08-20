function MemoryGame(){
  this.previousValue = null;
  this.displayText = null;
  this.progressBar = null;
  this.progressText = null;
  this.userInput = null;
  this.gameForm = null;
}

MemoryGame.prototype = {
  init: function(){
    this.displayText = document.querySelector ('.display-text');
    this.progressBar = document.querySelector('.progress .progress-bar');
    this.progressText = document.querySelector('.progress .progress-text');
    this.userInput = document.querySelector('#answer');
    this.gameForm = document.querySelector('form');

    this.attachListeners();
  },
  attachListeners: function(){

  },
  startGame: function(){},
  startChain: function(){},
  continueChain: function(value){},
  updateTimer: function(){},
  timerOverdue: function(){},
  stopGame: function(){}

  // обработчики событий
};

var game = new MemoryGame();
game.init();
