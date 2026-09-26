"use strict";
var Game = {
  canvas: undefined,
  canvasContext: undefined,
  rectanglePosition: 0,
};

Game.start = function () {
  console.log("start it up!");
  Game.canvas = document.getElementById("myCanvas");
  Game.canvasContext = Game.canvas.getContext("2d");
  Game.mainLoop();
};

document.addEventListener("DOMContentLoaded", Game.start);

Game.update = function () {
  console.log("update");
  var d = new Date();
  Game.rectanglePosition = d.getTime() % Game.canvas.width;
};

Game.draw = function () {
  console.log("draw");
  Game.canvasContext.fillStyle = "blue";
  //   Game.canvasContext.fillRect(0, 0, Game.canvas.width, Game.canvas.height);
  Game.canvasContext.fillRect(Game.rectanglePosition, 100, 50, 50);
};

Game.clearCanvas = function () {
  Game.canvasContext.clearRect(0, 0, Game.canvas.width, Game.canvas.height);
};

Game.mainLoop = function () {
  console.log("main");
  Game.clearCanvas();
  Game.update();
  Game.draw();
  window.setTimeout(Game.mainLoop, 1000 / 60);
};
