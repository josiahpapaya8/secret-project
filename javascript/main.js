let btn = document.getElementById("button");
let nme = document.getElementById("uname");
let lnk = document.getElementById("link");
let guinea = document.getElementById("testp")


btn.addEventListener('click', function() {
    if (nme.value === "Laken"){
        lnk.href = "./secondquestion.html";
    } else if (nme.value === "Maura"){
        lnk.href = "./thirdquestion.html";
    } else if (nme.value === "Lotus"){
        lnk.href = "./valentine.html";
    } else {
        lnk.href = "./wronganswer.html";
    }
});