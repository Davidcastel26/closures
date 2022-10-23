function createCounter(counter = 0){
    //setting our variable counter as 0
    // let counter = 0;
    //return will be an object but 
    return {
        increase: function(){
            counter++;
            return counter;
        },
        decrease: function(){
            counter--;
            return counter;
        },
        getValue: function(){
            return counter;
        }
    }
}

const counter1 = createCounter()
counter1.increase();
counter1.increase();
counter1.getValue()
counter1.decrease();
counter1.getValue();