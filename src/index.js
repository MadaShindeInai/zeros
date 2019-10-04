module.exports = function zeros(expression) {
    let demoArr = expression.split('*');
    let simpleArr = [];
    let dualArr = [];
    
    for(let i = 0; i < demoArr.length; i++){
    if (demoArr[i].includes('!!')){
    dualArr.push(parseInt(demoArr[i]))
    } else{
    simpleArr.push(parseInt(demoArr[i]))
    }
    }

    
    let simpleResult = [];
    for (let n of simpleArr){
        for(let j = 1; j <= n; j++)
    simpleResult.push(j);
    }
    
    
    let dualResult = [];
    for(let x of dualArr){
        while(x > 1){
    dualResult.push(x);
    x-=2;
     }
    }
// склеиваем массивы

    let commonArr = simpleResult.concat(dualResult);
     
    let numOfFives = 0;
    for( let q of commonArr){
        while(q%5 == 0){
            numOfFives++ ;
            q /= 5;
        }
        let twosCount = 0;
        if(!commonArr.includes(2)) 
        {
          numOfFives = 0;
        }
    }
    return numOfFives;
  }

