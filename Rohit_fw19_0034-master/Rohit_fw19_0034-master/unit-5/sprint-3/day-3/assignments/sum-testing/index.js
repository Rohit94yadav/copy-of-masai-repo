

function sum(...args) {
   

    const sumValue = [...args].reduce((a,c)=> a+ Number(c), 0);
    return Number(sumValue)
}

module.exports = sum;