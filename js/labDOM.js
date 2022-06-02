function checkResult(){
    var luckyNumber=[];
    var ips=document.getElementsByClassName("ip");
    for(var i=0;i<ips.length;i++){
        var n= parseInt(ips[i].value);
    // for(var i=1;i<=6;i++){
    //     var n =parseInt(document.getElementById("oso"+i).value);
        if (isNaN(n) || n<0 || n>45 || luckyNumber.includes(n)) {
            document.getElementById("msg").style.display = "block";
            return;
        }
        luckyNumber.push(n);
    }
    // var oso1=parseInt(document.getElementById("oso1").value);
    // var oso2=parseInt(document.getElementById("oso2").value);
    // var oso3=parseInt(document.getElementById("oso3").value);
    // var oso4=parseInt(document.getElementById("oso4").value);
    // var oso5=parseInt(document.getElementById("oso5").value);
    // var oso6=parseInt(document.getElementById("oso6").value);
    // if (isNaN(oso1) || oso1<0 || oso1>45) {
    //     document.getElementById("msg").style.display="block";
    //     return;
    // }else{
    //     luckyNumber.push(oso1);
    // }if (isNaN(oso2) || oso2<0 || oso2>45 || luckyNumber.includes(oso2)){
    //     document.getElementById("msg").style.display="block";
    //     return;
    // }else{
    //     luckyNumber.push(oso2);
    // }if (isNaN(oso3) || oso3<0 || oso3>45 || luckyNumber.includes(oso3)){
    //     document.getElementById("msg").style.display="block";
    //     return;
    // }else{
    //     luckyNumber.push(oso3);
    // }if (isNaN(oso4) || oso4<0 || oso4>45 || luckyNumber.includes(oso4)){
    //     document.getElementById("msg").style.display="block";
    //     return;
    // }else{
    //     luckyNumber.push(oso4);
    // }if (isNaN(oso5) || oso5<0 || oso5>45 || luckyNumber.includes(oso5)){
    //     document.getElementById("msg").style.display="block";
    //     return;
    // }else{
    //     luckyNumber.push(oso5);
    // }if (isNaN(oso6) || oso6<0 || oso6>45 || luckyNumber.includes(oso6)){
    //     document.getElementById("msg").style.display="block";
    //     return;
    // }else{
    //     luckyNumber.push(oso6);
    // }

    var dem = 0;
    for (var i = 0; i < randomNumbers.length; i++) {
        if (luckyNumber.includes(randomNumbers[i])) {
            dem++;
        }
    }
    switch (dem) {
        case 6:alert("Trung 100ty");break;
        case 5:alert("Trung 10 trieu");break;
         case 4:alert("Trung 300.000");break;
         case 3:alert("Trung 50.000");break;
         default:alert("chuc may man lan sau");break;
     }
}
var randomNumbers = [];
while (randomNumbers.length < 6) {
    var r = Math.random();
    r = r * 46;
    r = parseInt(r);
    if (!randomNumbers.includes(r)) {
        randomNumbers.push(r);
    }
}
console.log(randomNumbers);