function encrypt(message, key) {
 const arrMessage =  Array.from(message); 
 let numMessage = ''; 
 for( let i = 0; i < arrMessage.length; i++ ) {
      numMessage += (message.charCodeAt(i))
 }
 const arrKey =  Array.from(key);
 let numKey = []; 
 for( let i = 0; i < arrKey.length; i++ ) {
    numKey += (key.charCodeAt(i))
 }
 const numKeyMessage = Number(numKey) + Number(numMessage)
 console.log( numMessage)
 console.log(numKey)
 console.log(numKeyMessage )
 return [numKeyMessage, numKey]
} // === encrypted message

// take in a message - turn that in that in to a interger 
// key that message that tuen in messsage - 
// add two interger together - making new encrypted message 
function decrypt(encryptedMessage, key) {
 let  dMessage = encryptedMessage - key;
 console.log(dMessage) 
//  let arrMessage = []
//  for(let i = 0; i < 5; i++) {
//     let newDMessage = String(dMessage).slice(i, i+2)
//     arrMessage.push(newDMessage) 
//  }
 const stringDecrypt = arrMessage.toString()
 console.log(stringDecrypt)
//  let newDMessage = String(dMessage).slice(0, 2) 
//  console.log(dMessage)
// console.log(newDMessage)
 const decryptMessage = String.fromCharCode(dMessage)
 console.log(decryptMessage)
} // message 
 
// passing a encrypted message  - as making into interger 
// using key and taking away the message === message - console.log that 

function mod(x, y) {
    const remainder = x % y;
    if (remainder < 1) {
        return y + remainder;
    } else {
        return remainder;
    }
}
 const [eMessage, key] = encrypt("HAT","MAT")
console.log(eMessage, key)
console.log(decrypt(eMessage, key))
// const value = encrypt()
// console.log(value(0))


function stringToNumber() {

}

function numberTo