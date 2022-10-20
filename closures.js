// closures
const x = 'Fluffy'

const f = () => {
    const y = 'Kins'
    console.log(x, y)
}
f() // Fluffy Kins

//-------------------------------------------------------------------------
function saludar(saludo){
    return function(nombre){
      console.log(saludo + " " + nombre)
    }
  }
  
  var saludarHola = saludar('Hola')// esto devuelve una funcion
  
  saludarHola('Toni')
  
  // ----------------------------------------------------------------------
  
  const creaFuncion = function () {
    var arreglo = [];
    
    for (var i = 0; i < 3 ; i++){
     arreglo.push(
       function(){
       console.log(i)
     } )
    }
    console.log(i)
    return arreglo
  }
  
  var arr = creaFuncion()
  
  arr[0]() //3
  arr[1]() //3
  arr[2]() //3
  
  // inmidiat invoque function ---------
  
  const creaFuncionss = function () {
    var arreglos = [];
    
    for (var a = 0; a < 3 ; a++){
      // IIFE
     arreglos.push(
       (function(j){
               return function(){ console.log(j) }
         }(a)) // sera el valor del a por cada vuelta 
      )
    }
    // console.log(i)
    return arreglos
  }
  
  var arrs = creaFuncionss()
  
  arrs[0]() //0
  arrs[1]() //1
  arrs[2]() //2
  
  
  // ------------------------------------------------------------
  
  function hacerSaludo(lenguaje){
    
    switch(lenguaje){
      case 'en':
        return function(nombre){
          console.log(`Hi  ${nombre}!`)
        };
      case 'es':
        return function(nombre){
          console.log(`Hola ${nombre}!`)
        }
    }
  }
  
  let saludoIngles = hacerSaludo('en')
  let saludoEspaniol = hacerSaludo('es')
  
  saludoIngles('David') //'Hi  David!'
  saludoEspaniol('Henrry') //'Hola Henrry!'
  hacerSaludo('en')('Christian'); //'Hi  Christian!'
  
  
  
  
  