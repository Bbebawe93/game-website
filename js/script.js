// canvas variables
var canvas = document.getElementById("game-canvas");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

// get canvas 2d drawing object api
var ctx = canvas.getContext("2d");

// game command variables
var command = document.getElementById("command");
var commandError = document.querySelector("#command-error");
var submitBtn = document.getElementById("submit-btn");
const ENTER_KEY = 13;
var startGame = false;


// paddle object
var paddle = {
    width: 50,
    height: 10,
    x: (canvasWidth - 100) / 2,
    y: canvasHeight - 30,
    Dx: 20,
    color: "green",
    drawPaddle: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
    moveLeft: function() {
        if (this.x > 0) {
            this.x -= this.Dx;
        }
    },
    moveRight: function() {
        if (this.x + this.width < canvas.width) {
            this.x += this.Dx;
        }
    }
};

// ball object
var ball = {
    x: canvasWidth / 2,
    y: paddle.y - 10,
    Dy: 0.5,
    Dx: 0.5,
    radius: 5,
    drawBall: function() {
        ctx.beginPath();
        ctx.fillStyle = "#ce2029";
        ctx.strokeStyle = "#FFD700";
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    },
    bounceBall: function() {
        this.y -= this.Dy;
        this.x -= this.Dx;

        // ball is radius + x + radius for for right side to get the edge of ball we add radius
        // to get the left side of the ball we - radius
        if (this.x - this.radius < 0) {
            this.Dx = -this.Dx;
        } else if (this.x + this.radius > canvasWidth) {
            this.Dx = -this.Dx;
        } else if (this.y - this.radius < 0) {
            this.Dy = -this.Dy;
        }
    }
};

// ball and paddle collision function 
function collision() {
    if ((ball.y == paddle.y) && (ball.x > paddle.x) && (ball.x <= paddle.x + paddle.width)) {
        ball.Dy = -ball.Dy;
    }
}


// adds event to run button, executes different functions depend on the user input
submitBtn.addEventListener("click", executeCommand);
document.addEventListener("keypress", keyPressHandler);
function keyPressHandler(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        executeCommand();
        command.value = "";
    }
}

function executeCommand() {
    // get the input value
    let currentCommand = command.value;
    switch (currentCommand) {
        case "ml":
            paddle.Dx = 20;
            paddle.moveLeft();
            console.log("moves left");
            console.log(paddle.x);
            commandError.style.color = "green";
            commandError.innerHTML = "Last Command Executed : left";
            break;
        case "ml2":
            paddle.Dx = 40;
            paddle.moveLeft();
            console.log("moves left");
            console.log(paddle.x);
            commandError.style.color = "green";
            commandError.innerHTML = "Last Command Executed : left2";
            break;
        case "ml3":
            paddle.Dx = 60;
            paddle.moveLeft();
            console.log("moves left");
            console.log(paddle.x);
            commandError.style.color = "green";
            commandError.innerHTML = "Last Command Executed : left3";
            break;
        case "mr":
            paddle.Dx = 20;
            console.log("moves right");
            paddle.moveRight();
            commandError.style.color = "green";
            commandError.innerHTML = "Last Command Executed : right";
            console.log(paddle.x);
            break;
        case "mr2":
            console.log("moves right");
            paddle.Dx = 40;
            paddle.moveRight();
            commandError.style.color = "green";
            commandError.innerHTML = "Last Command Executed : right2";
            console.log(paddle.x);
            break;
        case "mr3":
            paddle.Dx = 60;
            console.log("moves right");
            paddle.moveRight();
            commandError.style.color = "green";
            commandError.innerHTML = "Last Command Executed : right3";
            console.log(paddle.x);
            break;
        case "start":
            startGame = true;
            commandError.style.color = "green";
            commandError.innerHTML = "Last Command Executed : start";
            break;
        case "stop":
            startGame = false;
            commandError.style.color = "green";
            commandError.innerHTML = "Last Command Executed : start";
            break;
        default:
            commandError.style.color = "red";
            commandError.innerHTML = "Invalid Command";
            console.log("Unknown command");
    }
}

function init() {
    requestAnimationFrame(init);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    paddle.drawPaddle();
    ball.drawBall();
    if (startGame == true) {
        ball.bounceBall();
    }
    collision(); 
}
window.onload = requestAnimationFrame(init);
