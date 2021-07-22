const loginInfo = require('./loginInfo.json')
const fs = require('fs');
const path = require('path');
const crypto = require('crypto')
class PasswordVault {
    constructor(path) {
        fs.writeFileSync(path.resolve(__dirname, 'student.json'), JSON.stringify(student));

    }
 add = (username, password) => {
    const hash = crypto.createHash("md5").update(word).digest("hex");
 }
 check = (username, password) => {

 }
} 

const newUser = new PasswordVault;  
newUser.add("salma", "salma1")
newuser.check("salma", "salma1")