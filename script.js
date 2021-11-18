
main()

function main(){

}

// function genesis(){
    
// }

const tempMap = new Map([
    ["Joel", "sweaty"],
    ["Donovan", "gigachad"],
    ["Santino","tino69420"],
])

function checkPassword(){
    entered = tempMap.get(username)
    if(entered == password){
        console.log("allow access");
    }
    else{
        console.log("access denied");
    }

}