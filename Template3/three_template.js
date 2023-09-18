document.getElementById("raja").onmouseenter = function () {
    document.getElementById("mega").style.opacity = "1";
}
document.getElementById("raja").onmouseleave = function () {
    document.getElementById("mega").style.opacity = "0";
}

setInterval(function () {
    var second = Number(document.getElementById("second").innerHTML);
    var minute = Number(document.getElementById("minute").innerHTML);
    var hour = Number(document.getElementById("hour").innerHTML);
    var day = Number(document.getElementById("day").innerHTML);
    document.getElementById("second").innerHTML = second + 1;
    if (second == 59) {
        document.getElementById("second").innerHTML = "00";
        document.getElementById("minute").innerHTML = minute + 1;
    }
    if (minute == 59) {
        document.getElementById("minute").innerHTML = "00";
        document.getElementById("hour").innerHTML = hour + 1;
    }
    if (hour == 59) {
        document.getElementById("hour").innerHTML = "00";
        document.getElementById("day").innerHTML = day + 1;
    }
}, 1000)
document.getElementById("one").onclick = function () {
    document.getElementById("widad").setAttribute("src", "C:\\Users\\Network\\Videos\\VIDEOS\\Music Raja\\La Voce Della Magana l SOMOS CURVA SUD l(720P_HD).mp4")
    document.getElementById("title_video").value = document.getElementById("one").innerHTML;
}
document.getElementById("two").onclick = function () {
    document.getElementById("widad").setAttribute("src", "C:\\Users\\Network\\Videos\\VIDEOS\\Music Raja\\La Voce Della Magana l KOLSHI M_SIGNER l(360P).mp4")
    document.getElementById("title_video").value = document.getElementById("two").innerHTML;
}
document.getElementById("three").onclick = function () {
    document.getElementById("widad").setAttribute("src", "C:\\Users\\Network\\Videos\\VIDEOS\\Music Raja\\Dawi Khawi Chant Raja 2014 la banda maganista(720P_HD).mp4")
    document.getElementById("title_video").value = document.getElementById("three").innerHTML;
}
document.getElementById("fore").onclick = function () {
    document.getElementById("widad").setAttribute("src", "C:\\Users\\Network\\Videos\\VIDEOS\\Music Raja\\La Voce Della Magana l OBRIGADO - ALLEANZA DELLA SUD l(720P_HD).mp4")
    document.getElementById("title_video").value = document.getElementById("fore").innerHTML;
}
document.getElementById("five").onclick = function () {
    document.getElementById("widad").setAttribute("src", "C:\\Users\\Network\\Videos\\VIDEOS\\Music Raja\\La Voce Della Magana l NASSI DENYA - L_ESTASI ETERNA(360P).mp4")
    document.getElementById("title_video").value = document.getElementById("five").innerHTML;
}
document.getElementById("sex").onclick = function () {
    document.getElementById("widad").setAttribute("src", "C:\\Users\\Network\\Videos\\VIDEOS\\Music Raja\\3yit Ndor.mp4")
    document.getElementById("title_video").value = document.getElementById("sex").innerHTML;
}
document.getElementById("seven").onclick = function () {
    document.getElementById("widad").setAttribute("src", "C:\\Users\\Network\\Videos\\VIDEOS\\Music Raja\\Yal babour Ya mon amor.mp4")
    document.getElementById("title_video").value = document.getElementById("seven").innerHTML;
}
