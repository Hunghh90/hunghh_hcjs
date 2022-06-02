function jackpot() {
    var randomNumbers = [];
    var ticketNumbers = [];
    while (randomNumbers.length < 6) {
        var r = Math.random();
        r = r * 46;
        r = parseInt(r);
        if (!randomNumbers.includes(r)) {
            randomNumbers.push(r);
        }
    }
    console.log(randomNumbers);
    while (ticketNumbers.length < 6) {
        var n = prompt("nhap so tu 0-45:");
        n = parseInt(n);
        if (!isNaN(n) && !ticketNumbers.includes(n) && n <= 45 && n >= 0) {
            ticketNumbers.push(n);
        }
    }

    var dem = 0;
    for (var i = 0; i < randomNumbers.length; i++) {
        if (ticketNumbers.includes(randomNumbers[i])) {
            dem++;
        }
    }
// setTimeout(function (){//delay thoi gian thuc hien sau khi thuc hien cac qua trinh khac
//     switch (dem) {
//         case 6:alert("Trung 100ty");break;
//         case 5:alert("Trung 10 trieu");break;
//         case 4:alert("Trung 300.000");break;
//         case 3:alert("Trung 50.000");break;
//         default:alert("chuc may man lan sau");break;
//     }
// },5000);
// setInterval(function (){//lap lai qua trinh lien tuc va vinh vien
//     switch (dem) {
//         case 6:alert("Trung 100ty");break;
//         case 5:alert("Trung 10 trieu");break;
//         case 4:alert("Trung 300.000");break;
//         case 3:alert("Trung 50.000");break;
//         default:alert("chuc may man lan sau");break;
//     }
// },2000);
    var x = 0;
    var xy = setInterval(function () {//lap lai qua trinh theo so lan roi clear ham setinterval
        switch (dem) {
            case 6:
                alert("Trung 100ty");
                break;
            case 5:
                alert("Trung 10 trieu");
                break;
            case 4:
                alert("Trung 300.000");
                break;
            case 3:
                alert("Trung 50.000");
                break;
            default:
                alert("chuc may man lan sau");
                break;
        }
        x++;
        if (x == 3) {
            clearInterval(xy);
        }
    }, 2000);
}
