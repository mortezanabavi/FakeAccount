function showDialog(text) {
    const dialog = document.createElement("div");
    dialog.style.position = "fixed";
    dialog.style.top = "10px";
    dialog.style.left = "10px";
    dialog.style.width = "200px";
    dialog.style.background = "rgba(0,0,0,0.8)";
    dialog.style.color = "white";
    dialog.style.fontSize = "14px";
    dialog.style.textAlign = "center";
    dialog.style.padding = "10px";
    dialog.style.borderRadius = "10px";
    dialog.style.boxShadow = "0px 0px 10px black";
    dialog.style.zIndex = "30";
    dialog.innerHTML = text;
    document.body.appendChild(dialog);
    setTimeout(() => {
        document.body.removeChild(dialog);
    }, 8000);
}
function ClearCookie(){
    document.cookie = '';
    showDialog('The Cookie was cleared');
}
function SignUp(email){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://waitlist.stackedinvest.com/invest?kid=2BGR4H");
    xhr.send();
    xhr.onload = function(){
        document.getElementById("email").value = email;
        document.getElementById("btn-id-hmjjvmhj9zg").click();
    }
}
function Run(){
    SignUp('mortezanabavi905@gmail.com');
    setTimeout(() => {
        ClearCookie();
    }, 10000);
}
Run();
