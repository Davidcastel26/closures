function createMsg(typeMsg, styles){
    return function(str){
        console.log(`%c ${typeMsg}: ${str}`, styles)
    }
}
