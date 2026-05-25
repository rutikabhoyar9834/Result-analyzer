function checkResult(){
    let roll=document.getElementById("roll").value;
    let mother=document.getElementById("mother").value.toLowerCase();
    if(
        (roll=="101"&&mother=="sunita")||
        (roll=="102"&&mother=="vaishali")||
        (roll=="103"&&mother=="vaishali")||
        (roll=="104"&&mother=="vanita")||
        (roll=="105"&&mother=="kalpana")
    ){
        localStorage.setItem("roll",roll);
        window.location="result.html";
    }else{
        document.getElementById("msg").innerHTML="❌ Invalid Roll Number or Mother Name";
    }
}
if(window.location.pathname.includes("result.html"))
    {
        let roll=localStorage.getItem("roll");
        document.getElementById(roll).style.display="block";
    }
