async function getMikuji() {
    document.getElementById("implementation").disabled = true;

    var syori1 = document.getElementById("unsei");
    syori1.innerHTML = "<img class='momo' src='./fruit_peach.png' alt='peach'>　 <p>おみくじを引いてます</p>";

    var omikuji = await fetch("https://script.google.com/macros/s/AKfycbwAnFJ18tFZ6_CCK1Pc9rmk2Zczr1hKhy8Oee4-3_ZbKZOvSg/exec");
    var kekka = await omikuji.json()

    console.log(kekka.message)

    var kuji = document.getElementById('unsei')

    if (kekka.message == '大吉') {
        kuji.innerHTML = "<img class='daikichi' src='./omikuji_daikichi.png' alt='daikichi'>"
    } else {
        kuji.innerHTML = "<p>あなたの運勢は" + kekka.message + "です</p>"
    }
    document.getElementById("implementation").disabled = false;

}