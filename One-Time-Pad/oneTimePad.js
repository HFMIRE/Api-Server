
function encrypt(message, key) {
    vaidationInput(message, key); 
    let encryptedMessage = ""
    for(let i = 0; i < message.length; i++) {
        const addition= charToNum(message[i]) + charToNum(key[i])
        const newKeyMessage = mod(addition, 26)
        encryptedMessage += numToChar(newKeyMessage)
    }
    return [encryptedMessage, key]
}
function decrypt(encrypted, key) {
    let plainText = ''
    for(let i = 0; i < encrypted.length; i++) {
        const difference  = charToNum(encrypted[i]) - charToNum(key[i])
        const keyMessage = mod(difference, 26)
        plainText += numToChar(keyMessage)
    }
    return plainText; 
} 
function vaidationInput(message, key) {
    if(message.length != key.length) {
        throw new Error ("The message is not the same length")
    }
    if (!stringOnlyLowerCase(message)){
        throw new Error("message can consist only of lowercase a-z");
    }  
    if (!stringOnlyLowerCase(key)){
        throw new Error("key can consist only of lowercase a-z");
    }
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
function stringOnlyLowerCase(str) {
    return /^[a-z]+$/.test(str);
}
const message = "cat"; 
const key = "asy"; 
const encrypted = encrypt(message, key) 
const key2 = encrypted[1]
const decrypted = decrypt(encrypted[0], key2)
console.log(encrypted)
console.log(decrypted)

// const message = "hat"; 
// const key = "mat"; 
// const encrypted = encrypt(message, key) 
// const key3 = encrypted[1]
// const decrypted = decrypt(encrypted[0], key3)
// console.log(decrypted)
