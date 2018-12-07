// canvas variables
var canvas = document.getElementById("game-canvas");
var canvasWidth = 800;
var canvasHeight = 600;
canvas.width = canvasWidth;
canvas.height = canvasHeight;
// get canvas 2d drawing object api
var ctx = canvas.getContext("2d");

// game command variables
var command = document.getElementById("command");
var commandError = document.querySelector("#command-error");
var submitBtn = document.getElementById("submit-btn");
const ENTER_KEY = 13;

var startGame = false;
var currentGameScore = 0;
var ballMissed = false;
var playerLoggedIn = false;


// get logged user object 
var player;
if (localStorage.userLoggedIn != "none") {
    player = fetchUser(localStorage.userLoggedIn);
    playerLoggedIn = true;
}

function drawPlayerInformation() {
    var player = fetchUser(localStorage.userLoggedIn);
    var firstName = player.firstName;
    var lastName = player.lastName;
    var score = player.score;
    var lives = player.lives;
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "left";
    ctx.fillText("Player: " + firstName + " " + lastName, 20, 30);
    ctx.textAlign = "right";
    ctx.fillText("Score: " + currentGameScore + " - " + "Lives: " + lives, canvasWidth - 30, 30);
    playerLoggedIn = true;
}




// paddle object
var paddle = {
    width: 150,
    height: 30,
    x: (canvasWidth - 150) / 2,
    y: canvasHeight - 40,
    Dx: 20,
    color: "green",
    drawPaddle: function () {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
    moveLeft: function () {
        if (this.x > 0) {
            this.x -= this.Dx;
        }
    },
    moveRight: function () {
        if (this.x + this.width < canvas.width) {
            this.x += this.Dx;
        }
    },
    restPaddle: function () {
        this.x = (canvasWidth - 150) / 2;
        this.y = canvasHeight - 40;
    }

};

// ball object
var ball = {
    x: canvasWidth / 2,
    y: paddle.y - 15,
    Dy: 3,
    Dx: 3,
    radius: 15,
    drawBall: function () {
        ctx.beginPath();
        ctx.fillStyle = "#ce2029";
        ctx.strokeStyle = "#FFD700";
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    },
    bounceBall: function () {
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
    },
    resetBall: function () {
        this.x = canvasWidth / 2;
        this.y = paddle.y - 15;
        this.Dx = 0;
        this.Dy = 0;
    },
    moveBall: function () {
        this.Dx = 3;
        this.Dy = 3;
    }
};

// brick object constructor  
function Brick(x, y, width, height, hit, scoreAdded) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.hit = hit;
    this.scoreAdded = scoreAdded;
    this.draw = function () {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
}

// brick array
var brickArray = [];

// function that adds bricks to the array 
function drawBricks() {
    var x = 0;
    var y = 50;
    var width = 85;
    var height = 30;
    var cols = 9;
    var rows = 4;
    for (var c = 0; c < cols; c++) {
        brickArray[c] = [];
        for (var r = 0; r < rows; r++) {
            brickArray[c][r] = new Brick(x, y, width, height, false, false);
        }
    }
}
// function that draws grid using bricks inside the brickArray 
function drawGrid() {
    var x = 0;
    var y = 50;
    var width = 85;
    var height = 30;
    var padding = 5;
    var cols = 9;
    var rows = 4;
    var currentRow = 0;
    for (var c = 0; c < cols; c++) {
        for (var r = 0; r < rows; r++) {
            brickArray[c][r].x = x;
            brickArray[c][r].y = y;
            if (brickArray[c][r].hit != true) {
                brickArray[c][r].draw();
            }
            y += height + padding;
            currentRow++;
        }
        if (currentRow >= rows) {
            y = 50;
        }
        x += width + padding;

    }
}

function brickCollision() {
    var cols = 9;
    var rows = 4;
    for (var c = 0; c < cols; c++) {
        for (var r = 0; r < rows; r++) {
            if ((ball.x > brickArray[c][r].x) && (ball.x < brickArray[c][r].x + brickArray[c][r].width) && (ball.y > brickArray[c][r].y) && (ball.y < brickArray[c][r].y + brickArray[c][r].height)) {
                ctx.clearRect(brickArray[c][r].x, brickArray[c][r].y, brickArray[c][r].width, brickArray[c][r].height);
                if (brickArray[c][r].hit != true) {
                    ball.Dy = -ball.Dy;
                }
                brickArray[c][r].hit = true;
                if (brickArray[c][r].scoreAdded != true) {
                    updateUserScore(player.username);
                    currentGameScore += 1;
                }
                brickArray[c][r].scoreAdded = true;
            }
        }
    }

}

function drawMissed() {
    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("You Missed it, run start command to play again", canvasWidth / 2, canvasHeight / 2);
}

// ball and paddle collision function 
function ballCollision() {
    if ((ball.y + ball.radius == paddle.y) && (ball.x > paddle.x) && (ball.x <= paddle.x + paddle.width)) {
        ball.Dy = -ball.Dy;
    } else if (ball.y > canvasHeight - paddle.height) {
        console.log(ball.y);
        ball.resetBall();
        ball.drawBall();
        ball.Dx = 3;
        ball.Dy = 3;
        paddle.restPaddle();
        startGame = false;
        player.score -= 1;
        updateUserLives(player.username);
        ballMissed = true;
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
        case "l":
            paddle.Dx = 75;
            paddle.moveLeft();
            console.log("moves left");
            console.log(paddle.x);
            commandError.style.color = "green";
            commandError.innerHTML = "Last Command Executed : l";
            break;
        case "l2":
            paddle.Dx = 150;
            paddle.moveLeft();
            console.log("moves left");
            console.log(paddle.x);
            commandError.style.color = "green";
            commandError.innerHTML = "Last Command Executed : l2";
            break;
        case "l3":
            paddle.Dx = 225;
            paddle.moveLeft();
            console.log("moves left");
            console.log(paddle.x);
            commandError.style.color = "green";
            commandError.innerHTML = "Last Command Executed : l3";
            break;
        case "r":
            paddle.Dx = 75;
            console.log("moves right");
            paddle.moveRight();
            commandError.style.color = "green";
            commandError.innerHTML = "Last Command Executed : r";
            console.log(paddle.x);
            break;
        case "r2":
            console.log("moves right");
            paddle.Dx = 150;
            paddle.moveRight();
            commandError.style.color = "green";
            commandError.innerHTML = "Last Command Executed : r2";
            console.log(paddle.x);
            break;
        case "r3":
            paddle.Dx = 225;
            console.log("moves right");
            paddle.moveRight();
            commandError.style.color = "green";
            commandError.innerHTML = "Last Command Executed : r3";
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
            commandError.innerHTML = "Last Command Executed : stop";
            break;
        default:
            commandError.style.color = "red";
            commandError.innerHTML = "Invalid Command";
            console.log("Unknown command");
    }
}



// call draw bricks function 
drawBricks();

function init() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    if (playerLoggedIn) {
        drawPlayerInformation();
        if (player.lives > 0) {
            if (startGame == true) {
                drawGrid();
                paddle.drawPaddle();
                ball.drawBall();
                ball.bounceBall();
                brickCollision();
                ballCollision();
            } else {
                if (ballMissed == false) {
                    ctx.fillStyle = "green";
                    ctx.textAlign = "center";
                    ctx.fillText("run start command to start the game", canvasWidth / 2, canvasHeight / 2);
                } else
                if (ballMissed == true) {
                    drawMissed();
                    player = fetchUser(localStorage.userLoggedIn);
                }
            }
        } else if (player.lives == 0) {
            ctx.fillStyle = "red";
            ctx.textAlign = "center";
            ctx.fillText("You missed it, no more lives to play", canvasWidth / 2, canvasHeight / 2);
            ctx.fillText("Go to your account and add more lives", canvasWidth / 2, (canvasHeight + 80) / 2);

            // disable input fields if user not logged in
            command.disabled = true;
            submitBtn.disabled = true;
        }
    } else {
        // disable input fields if user not logged in
        command.disabled = true;
        submitBtn.disabled = true;
        ctx.font = "30px Arial";
        ctx.fillStyle = "green";
        ctx.textAlign = "center";
        ctx.fillText("sign in or register to start playing", canvasWidth / 2, canvasHeight / 2);
    }
    requestAnimationFrame(init);
}

init();