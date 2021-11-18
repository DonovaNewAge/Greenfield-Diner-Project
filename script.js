
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
    username = $("#username").val();
    entered = $("#password").val();
    password = tempMap.get(username)
    if(entered == password){
        console.log("allow access");
    }
    else{
        console.log("access denied");
    }

}

function reel(){
    $("#signup").slideDown(1000)
}

function hiding(){
    $("#signup").slideUp(1000)
}
