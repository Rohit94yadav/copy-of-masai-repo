

function tax(income) {
   
    if(income < 250000){
        return 0;
    }

    if(income > 250000 && income < 500000){
        return (income * 10)/100;
    }

    if(income > 500000 && income < 1000000){
        return (income * 20)/100;
    }

    if(income > 1000000){
        return (income * 30)/100;
    }

    
    
   
}

module.exports = tax;