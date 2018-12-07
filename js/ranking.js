//  ranking table dom elements  
var rankingTable = document.getElementById("ranking-table");
var playerRanking = rankingTable.querySelectorAll(".ranking-number");
var playerName = rankingTable.querySelectorAll(".player-name");
var playerScore = rankingTable.querySelectorAll(".player-score");

// function to sort users by score from high to low using bubble sort. returns sorted array of users 
function sortUsers() {
    // call to getUsers function to get users from local storage 
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

// function prints sorted users array to the ranking table in index.php and ranking.php 
function updateRankingTable() {
    // get sorted users by calling sortUsers function
    var sortedUsers = sortUsers();
    // print users data to ranking table, prints only 10 users 
    for (i = 0; i < sortedUsers.length; i++) {
        playerRanking[i].innerHTML = (i + 1);
        playerName[i].innerHTML = sortedUsers[i].firstName + " " + sortedUsers[i].lastName;
        playerScore[i].innerHTML = sortedUsers[i].score;
        // this will will stop the loop and prevent it from reading undefined objects
        if (i == 10) {
            break;
        }
    }
} // end function updateRankingTable 

// call to updateRankingTable 
updateRankingTable(); 