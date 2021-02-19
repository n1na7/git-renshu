async function getMikuji() {
    var omikuji = await fetch("https://script.google.com/macros/s/AKfycbwAnFJ18tFZ6_CCK1Pc9rmk2Zczr1hKhy8Oee4-3_ZbKZOvSg/exec");
    var kekka = await omikuji.json()
    console.log(kekka.message)
    var kuji = document.getElementById('unsei')  
    kuji.innerHTML = "<p>あなたの運勢は" + kekka.message +　"です</p>"
}
