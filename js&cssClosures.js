function createMsg(typeMsg, styles){
    return function(str){
        console.log(`%c ${typeMsg}: ${str}`, styles)
    }
}

const error= createMsg('Error', 'background: red; color:white')