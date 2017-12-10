[Devember Home](../README.md) - [Next Day](../02/README.md)

# Devember 1st

## Doing Advent of Code Day #1

I wanted to practice doing more functional JavaScript stuff. I'm still more comfortable with iterative logic, so I solved the Advent of Code challenges iteratively first.

From there I refactored the iterative logic into functional logic with `Array.prototype.reduce()`. At that point I realized I could factor out the opposite & adjacent index comparisons into separate functions. Once they were separated into their own functions I could make a single `solveCaptcha()` function and pass in the `getOppositeIndex()` and `getAdjacentIndex()` functions instead of calling them separately in two different functions. 

I did this one on [JsFiddle](https://jsfiddle.net/rmkubik/5e8a5r1p/3/), but the code is [here](solveCaptcha.js) too.

## Ludum Dare 40

The Ludum Dare theme is announced tonight, but I may not get to do much beside plan & mockup. If there is any code tonight (and for the rest of the project), it'll be in a new repository, but I'll link the commits in the appropriate devlog. 

---

Edit: I ended up getting in a decent bit of boilerplate done after brainstorming game ideas! Finished repo [here](https://github.com/rmkubik/ldjam40)