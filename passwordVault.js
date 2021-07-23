const fs = require('fs');
const crypto = require('crypto');

class PasswordVault {
    constructor(path) {
        this.path = path;
        console.log(path)
    }
    load = async() =>  {
        if( fs.existsSync( this.path)) {
            try{
                return fs.readFileSync(this.path, 'utf8')
              } catch (err) {
                  console.log(err)
              }
        } else {
            this.file = []
        }

    }
    save = () => {
        try {
            fs.writeFileSync(this.path, JSON.stringify(this.file))
        } catch(err)  {
            console.error(err)
          }
    }
     async add (username, password) {
        try {
            const salt  = this.genSalt()
            const hashPassword = this.hash(password, salt)
            const userInformation = {username, salt, hashPassword}; 
            this.file.push(userInformation)
            await this.save(); 
        } catch (err) {
            console.log(err)
        }
    }
    check = (username, password) => {
        const userRecord = this.getUserRecord(username)
        if (!userRecord) {
            return false 
        }
        const hash = this.hash(password, record.salt)
        return hash === record.hashPassword
  
    }
    getUserRecord = (username) => {
        return this.file.find((record) => {
            return record.username === username
        })

    }
    genSalt = () => {
        return crypto.randomBytes(6).toString('hex')

    }
    hash = (password, salt) => {
        return crypto.createHash("md5").update( password + salt).digest("hex");
        
    }
} 


const runClass = async () => {
    const username = "multiverse";
    const password = "password1";
    const vault = new PasswordVault("loginfile.json");
    await vault.load();
    await vault.add(username, password);
  }
  const runClass1 = async () => {
    const username = "multiverse1";
    const password = "password12";
    const vault = new PasswordVault("loginfile.json");
    await vault.load();
    await vault.add(username, password);
  }

runClass()

runClass1()
