const input = 368078;

findManhattanDistance = (address) => {
    let sqrtInt = Math.floor(Math.sqrt(address));
    if (sqrtInt % 2 === 0) sqrtInt++;
    const firstLength = Math.ceil(sqrtInt/2);  
    return firstLength; 
}

console.log(findManhattanDistance(11));
console.log(findManhattanDistance(12));
console.log(findManhattanDistance(13));
console.log(findManhattanDistance(19));