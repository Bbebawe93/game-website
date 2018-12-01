//  ranking table variables 
var rankingTable = document.getElementById("ranking-table");
var playerRanking = rankingTable.querySelectorAll(".ranking-number");
var playerName = rankingTable.querySelectorAll(".player-name");
var playerScore = rankingTable.querySelectorAll(".player-score");


// function to sort users by score from high to low using bubble sort
function sortUsers() {
    var users = getUsers();
    var temp;
    for (i = 0; i < users.length; i++) {
        for (s = 0; s < users.length - 1; s++) {
            if (users[s].score < users[s + 1].score) {
                temp = users[s];
                users[s] = users[s + 1];
                users[s + 1] = temp;
            }
        }
    }
    return users;
} // end function sortUsers

// get sorted users by calling sortUsers function
var sortedUsers = sortUsers();

// print users data to ranking table, prints only 10 users 
for (i = 0; i < 10; i++) {
    // this will will stop the loop and prevent it from reading undefined objects
    if (i == sortedUsers.length) {
        break;
    }
    playerRanking[i].innerHTML = (i + 1);
    playerName[i].innerHTML = sortedUsers[i].firstName + " " + sortedUsers[i].lastName;
    playerScore[i].innerHTML = sortedUsers[i].score;
}