const fs = require('fs');

const inputArray = fs.readFileSync('maze.txt', 'utf-8').split('\r\n');
const maze = inputArray.map((instruction) => {
    return parseInt(instruction);
})

const solveMaze = (maze) => {
    let pointer = 0;
    let jumps = 0;
    while (pointer < maze.length) {
        const originalPointer = pointer;
        const distance = maze[originalPointer];
        if (distance >= 3) {
            maze[originalPointer]--;
        } else {
            maze[originalPointer]++;
        }
        pointer += distance;
        jumps++; 
    }
    return jumps;
}

console.log(solveMaze([0, 3, 0, 1, -3]));
console.log(solveMaze(maze));