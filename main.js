/*
whurl variable should be equal to your webhooks link!


On discord you create a webhook by going to 
the server settings and from there to the 
integrations tab, then click on webhooks and 
press new webhook. Then copy the link and paste it 
in the whurl variable.

Make sure to hide this link using https://javascriptobfuscator.com/Javascript-Obfuscator.aspx
if someone takes this link they can send messages to you with this webhook so make sure to
hide this link!
*/
whurl = "https://discord.com/api/webhooks/1304505101297127524/YtVYHvjQdIjm8LQw3DRNri0KQVvqPnw-VBBd4GjgwVW6EB0Vn5jVhQSaGoq3uqJH34uy"
var str= "";
var name= "";
var ImageURL = "";
function f1(){
    name = document.getElementById("NameInput").value;
    str = document.getElementById("InputField").value;
    ImageURL = document.getElementById("ImgInput").value;
}
function send(){
    f1();
    const msg = {
        "content": str,
        "username": name,
        "avatar_url": ImageURL
    };
    console.log(msg)
    if(str == ""){
        document.getElementById("Message1").style.opacity = 1; 
        setTimeout(function(){
            document.getElementById("Message1").style.opacity = 0;
        }, 4000)
        console.log("ERROR")
        return;
    }
    try{
        fetch(whurl + "?wait=true", {"method":"POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(msg)});
        document.getElementById("InputField").value = "";
        document.getElementById("MessageSent").style.opacity = 1;
        setTimeout(function(){
            document.getElementById("MessageSent").style.opacity = 0;
        }, 4000)

    } catch(e){
        document.getElementById("MessageFailed").style.opacity = 1;  
        
        setTimeout(function(){
            document.getElementById("MessageFailed").style.opacity = 0;
        }, 4000)
    }

} 
