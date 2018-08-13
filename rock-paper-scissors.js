var rockPaperScissors = function (player1, player2) {
    var game = player1 + player2;
    if (player1 === player2) {
        return 'draw';
    }
    else if (game === 'rockscissors' || game === 'paperrock' || game === 'scissorspaper') {
        return 'player1';
    }
    else {
        return 'player2';
    }
};

exports.rockPaperScissors = rockPaperScissors;
