

function sum(time) {
   
    if(time< 60000){
        return time/1000 + "seconds"
    }

    if(time > 60000 && time < 3600000){
        return time/60000 + "minutes"
    }

    if(time >= 3600000){
        return time/3600000 + "hours"
    }
    
   
}

module.exports = sum;