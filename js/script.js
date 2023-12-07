let isHitung = false;

function btnClick() {
    isHitung = true

    var resultElement = document.getElementById("result");
    var alasElement = document.getElementById("alas");
    var tinggiElement = document.getElementById("tinggi");
    var hasilLuas = document.getElementById("hasilLuas");

    var sisi1Element = document.getElementById("sisi1");
    var sisi2Element = document.getElementById("sisi2");
    var sisi3Element = document.getElementById("sisi3");
    var hasilKelilingElement = document.getElementById("hasilKeliling");

    alas = document.getElementById("Alas").value;
    tinggi = document.getElementById("Tinggi").value;

    sisi1 = document.getElementById("Sisi1").value;
    sisi2 = document.getElementById("Sisi2").value;
    sisi3 = document.getElementById("Sisi3").value;

    if (alas == "" || tinggi == "" || sisi1 == "" || sisi2 == "" || sisi3 == "") {
        alert("Input tidak boleh kosong");
        return;
    }

    if (isHitung == true) {
        resultElement.style.display = "block";
    }

    luas = 0.5 * alas * tinggi;

    alasElement.innerHTML = alas;
    tinggiElement.innerHTML = tinggi;
    hasilLuas.innerHTML = "Luas = " + luas + " cm<sup>2</sup>";


    keliling = parseInt(sisi1) + parseInt(sisi2) + parseInt(sisi3);

    sisi1Element.innerHTML = sisi1;
    sisi2Element.innerHTML = sisi2;
    sisi3Element.innerHTML = sisi3;
    hasilKelilingElement.innerHTML = "Keliling = " + keliling + " cm";

}

function btnReset() {
    var resultElement = document.getElementById("result");
    resultElement.style.display = "none";

    document.getElementById("Alas").value = "";
    document.getElementById("Tinggi").value = "";
    document.getElementById("Sisi1").value = "";
    document.getElementById("Sisi2").value = "";
    document.getElementById("Sisi3").value = "";

}