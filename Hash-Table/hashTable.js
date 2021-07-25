function keyToIndex(s) {
  let hash = 17; 
  for (let i = 0; i < s.length; i++ ) {

  }
  return hash 
} 
class HashTable {
    constructor(arrlength) {
        this.arrlength
    }
    table = new Array(100)

    set = ((key, value) => {
        const index = keyToIndex(key)
        this.table[index] = value 
    })   
    get = (key => {
        const index = keyToIndex(key)
        return this.table[index]
    })
}

const myTable =  new HashTable;
myTable.set("password", "bob1") 
myTable.set("name", "Tim") 
myTable.get("bob1")
console.log(myTable.get("bob1"))