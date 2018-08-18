let makeMatrix = (lengthOfSquare) => {
    let grid = [];
    let numPaths = 0;
    for (var i = 0; i < lengthOfSquare; i++) {
        grid.push([]);
    }
    for (let row = 0; row < lengthOfSquare; row++) {
        for (let square = 0; square < lengthOfSquare; square++) {
            let num1;
            let num2;
            if (grid[row-1] === undefined) {
                num1 = 1;
            }
            else {
                num1 = grid[row-1][square];
            };
            if (grid[square-1] === undefined) {
                num2 = 1;
            }
            else {
                num2 = grid[row][square-1];
            }
            grid[row].push(num1 + num2);
        }
    }
    numPaths = (grid[(lengthOfSquare-1)][(lengthOfSquare-1)])
    console.log(numPaths);
};

makeMatrix(3);


