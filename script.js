
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
    username = $("#aboriginal").val();
    entered = $("#oregano").val();
    password = tempMap.get(username)
    if(entered == password){
        console.log("allow access");
    }
    else{
        console.log("access denied");
    }

}