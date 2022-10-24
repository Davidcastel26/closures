const styleByDeffault = 'color: white;'
function createMsg(typeMsg, styles){
    return function(str){
        // console.log(`%c ${typeMsg}: ${str}`, styles)
        console.log(`%c ${typeMsg}: ${str}`, styleByDeffault + styles)
    }
}

// const error= createMsg('Error', 'background: red; color:white')
const error= createMsg('Error', 'background: red;')
error('Account not found')