
function encrypt(message, key) {
    console.log(message)
    console.log(key)
    let encryptedMessage = ""

    for(let i = 0; i < message.length; i++) {
        let addition= charToNum(message[i]) + charToNum(key[i])
        console.log(charToNum(key[i]))
        let newKeyMessage = mod(addition, 26)
        encryptedMessage += numToChar(newKeyMessage)
    }
    console.log(encryptedMessage, key)
    return [encryptedMessage, key]
}


function decrypt(encrypted, key) {
    console.log(encrypted)
    console.log(key)
    let plainText = ''
    for(let i = 0; i < encrypted.length; i++) {
        const difference  = charToNum(encrypted[i]) - charToNum(key[i])
        console.log(difference)
        const keyMessage = mod(difference, 26)
        console.log(keyMessage)
        plainText += numToChar(keyMessage)
         
    }
    return plainText; 


} 
function charToNum(char) {
    return char.charCodeAt(0) - 96;
}

function numToChar(num) {
    return String.fromCharCode(num + 96);

}

function mod(x, y) {
    const remainder = x % y;
    if (remainder < 1) {
        return y + remainder;
    } else {
        return remainder;
    }
}
// const message = "cat"; 
// const key = "asy"; 
// const encrypted = encrypt(message, key) 
// const key2 = encrypted[1]
// const decrypted = decrypt(encrypted[0], key2)
// console.log(decrypted)


const message = "hoda"; 
const key = "fluff"; 
const encrypted = encrypt(message, key) 
const key3 = encrypted[1]
const decrypted = decrypt(encrypted[0], key3)
console.log(decrypted)
