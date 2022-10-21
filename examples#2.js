
// retorna una function que cuando sea invocada retorne un valor creciente
//el primer valor deberia ser 1 
// vas a tener que usar closures
// ejemplo: const newCounter = counter()
// newCounter();// 1
// newCounter(); //2
const counter = () => {
    let actualCount = 0;
    return function(){
        actualCount++;
        return actualCount;
    }
}

newCounter = counter(); // actualCount = 1
newCounter(); // count -> count=2

newCounter2 = counter();// Nueva variable counter

// ---------------------------------------------------------------
// ejercicio 2

