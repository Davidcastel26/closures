
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
// usa closures para crear un cache para la function
//la funcion que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
//cuando la function que hayas retornado es invocada e nuevo, eberias guarar el argumento y el resultao
//cuao la funciton que retornaste sea invocaa e nuevo con un argumento con el cual se habia invocao 
// ejemplo:
//cb -> fuction(x){return x * x}
//si invocas la function que retornaste con 5, aentro eberia invocar cb(5), aentro y retornar 25
// si la invocas e nuevo con 5, eberia retornar 25 (guarao previamente en el cache)
//tips, usa un objeto one caa propiea sea un argumento, y el valor el resultao.
// usa hasOwnProperty!
function cacheFunction(){
    let cache = {}
    return function(arg){
        
        if(cache.hasOwnProperty(arg)) return cache[arg];
        
        cache[arg] = cb(arg)
        return cache[arg ]
    }
} 