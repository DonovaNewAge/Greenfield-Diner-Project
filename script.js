
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


function signUp(){
    key = []
    fullname = $("#fullname").val();
    username = $("#newUsername").val();
    entered = $("#newPassword").val();
    reentered = $("#confirmPassword").val();
    console.log(fullname)
    console.log(username)
    console.log(entered)
    console.log(reentered)
    if(entered == reentered){
        console.log("checked")
    // tempMap.set(username, key)

    }
    else{
        console.log("Nope")
    }


}

function reel(){
    $("#signup").slideDown(1000)
}

