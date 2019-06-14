// Exercício 1
$(document).ready(function () {
    $(".module").css("background-color", "#F4FA58");
});

// Exercício 2
$(document).ready(function () {
    $(".ul, #myListItem").css("border", "dotted");
});

// Exercício 3
$(document).ready(function () {
    $("label[for=q]").css("background-color", "#2E9AFE");

    //outra forma
    var $X = $("[for]").html();
    console.log("Label: " + $X);
});

// Exercício 4
$(document).ready(function () {
    var $qtd = 0;
    $qtd = $("[alt]").length;
    console.log("Total Alt = " + $qtd);

    //outra forma
    var $qtd = 0;
    $("*").each(function (index) {
        if ($(this).attr("alt")) {
            $qtd = $qtd + 1;
        }
    });
    console.log("Total Alt (outra forma) = " + $qtd);
});


// Exercício 5
$(function Exer5() {
    $('tr:even').css('background', '#58FAAC');
});


// Exercício 6
$(function Exer6() {
    $(document).ready(function () {
        var $x = 0;
        $("h2").each(function () {
            if (($(this).text().indexOf('B') != -1) && ($(this).text().indexOf('e') != -1)) {
                $x = $x + 1;
            } 
        });
        console.log("Encontrou = " + $x);
    });
});


// Exercício 7
$(function Exer7() {
    $("#myList li").filter(function () {
        return ($(this).css('color') != 'rgb(255, 0, 0)');
    }).css("background-color", "#F5A9BC");
});


// Exercício 8
$(function Exer8() {
    var last = $('h3:last, img:last');
    last.css({ border: "solid" });
});


//Exercício Atributos 1
$(function Exer1_Atr() {
    $('#myList li').filter('.current').removeClass("current");
    $('#myList li').eq(5).addClass("current");
});

//Exercício Atributos 2
$(function Exer2_Atr() {
    $('#specials h2').text('Promoções');

    $('#specials option:last').attr({
        'value': 'dimitri',
        'text': 'Dimitri'
    }
    );
});