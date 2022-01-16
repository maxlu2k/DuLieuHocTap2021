
// var slideIndex = 0;
// showSlides();

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
//------
function checkBoxx() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}
var images = [];
for (var i = 1; i < 4; i++) {
    images[i] = new Image();
    images[i].src = "./img/slide" + i + ".png"
}
var index = 1
function next() {
    index++;
    if (index >= images.length) {
        index = 1
    }
    var anh = document.getElementById('anh');
    anh.src = images[index].src
}
function previous() {
    index--
    if (index < 1) {
        index = images.length - 1
    }
    var anh = document.getElementById('anh');
    anh.src = images[index].src
}
setInterval(next, 1500);
//------------ bán hàng
function hienthi1() {
    var ip9 = document.getElementById('ip9');
    var ttip9 = 700 * ip9.value;
    document.getElementById('ttip9').innerText = +ttip9;
}

function hienthi2() {
    var samsung = document.getElementById('samsung');
    var ttsamsung = 400 * samsung.value;
    document.getElementById('ttsamsung').innerText = +ttsamsung;
}

function hienthi3() {
    var nokia = document.getElementById('nokia');
    var ttnokia = 100 * nokia.value;
    document.getElementById('ttnokia').innerText = +ttnokia;
}

function hienthi4() {
    var sony = document.getElementById('sony');
    var ttsony = 450 * sony.value;
    document.getElementById('ttsony').innerText = +ttsony;
}

function hienthi5() {
    var motorola = document.getElementById('motorola');
    var ttmotorola = 180 * motorola.value;
    document.getElementById('ttmotorola').innerText = +ttmotorola;
}

function tongtien() {
    var ip9 = document.getElementById('ip9').value;
    var samsung = document.getElementById('samsung').value;
    var nokia = document.getElementById('nokia').value;
    var sony = document.getElementById('sony').value;
    var motorola = document.getElementById('motorola').value;
    var thanhtien = 700 * ip9 + 400 * samsung + 100 * nokia + 450 * sony +
        motorola * 180;
    document.getElementById('tongtien').innerText = +thanhtien;
}
$(document).ready(function () {
    $('#gia').change(function () {
        var val = $(this).val();
        $('#sp tr').each(function (index, tr) {
            var price = $(tr).find('td:eq(2)').text();
            if (val == 0) {
                $('tr').show();
            } else if (val == 1 && price <= 400) {
                $('.muc1').show();
                $('.muc2').hide();
            } else if (val == 2 && price >= 450 && price <= 700) {
                $('.muc1').hide();
                $('.muc2').show();
            }
        });
    });
});
