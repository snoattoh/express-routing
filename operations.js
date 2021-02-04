//Mean, Median and Mode code is from https://jonlabelle.com/snippets/view/javascript/calculate-mean-median-mode-and-range-in-javascript

const mean = (numbers) => numbers.reduce((acc, val) => acc + val, 0) / numbers.length;

const median = (numbers) => {
    let median = 0
    const numsLen = numbers.length;
    numbers.sort((a,b) => a-b); //UNIT TESTING HELPED ME FIND THIS WAS A PROBLEM! 
    numsLen % 2 === 0 ? median = (numbers[(numsLen / 2) - 1] + numbers[numsLen / 2]) / 2 : median = numbers[(numsLen - 1) / 2]; 
    return median;
}


const mode = (numbers) => {
    var modes = [], count = [], i, number, maxIndex = 0;
    
    for (const number of numbers) {
        count[number] = (count[number] || 0) + 1;
        count[number] > maxIndex ? maxIndex = count[number] : "";
    }
 
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
 
    return modes;
}

module.exports = {
    mean: mean,
    median: median,
    mode: mode
  };