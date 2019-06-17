//Métodos de Filtro

// eq(index)
$(function ExerEq() {
    $('#specials option').eq(2).css("background-color", "yellow");
});

// filter(selector)
$(function ExerFilter() {
    $('div').filter('#meio').css("background-color", "#F5A9BC");
});

// is(selector)
$(function ExerIs() {
    $("p").one("click", function () {
        if ($(this).is(".azul")) {
            alert("É menino");
        }
    });
});

// not(selector)
$(function ExerNot() {
    $(document).ready(function () {
        $("p").not(".azul").css("border", "solid", "magenta");
    });
});

// slice(start,[end])
$(function ExerSlice() {
    $(document).ready(function () {
        $("#myList li").slice(2, 5).css("background-color", "green");
    });
});

//Métodos Traversing

// add(selector)
$(function ExerAdd() {
    $('#fim').addClass("current");
});

// addSelf(selector)
$(function ExerAddSelf() {
    $("div.left, div.right").find("div, div > p").addClass("border");

    // First Example
    $("div.before-andself").find("p").addClass("background");

    // Second Example
    $("div.after-andself").find("p").andSelf().addClass("background");
});

// children(selector)
$(function ExerChildren() {
    $(document).ready(function () {
        $("div").children("p.a").css({ "color": "red", "border": "2px dotted red" });
    });
});

// closest(selector)
$(function ExerClosest() {
    $(document).ready(function () {
        $("li.item-a")
            .closest("ul")
            .css("background-color", "red");
    });
});

// contents(selector)
$(function ExerContents() {
    $(document).ready(function () {
        $("#myList").contents().find("a").css("background-color", "#BADA55");
    });
});

// find(selector)
$(function ExerFind() {
    $(document).ready(function () {
        $("div").find("span").css({"color": "green", "border": "2px solid yellow"});
    });
});

// next(selector)
$(function ExerNext() {
    $(document).ready(function () {
        $("tr").next().css({"color": "green"});
    });
});

// nextAll(selector)
$(function ExerNextAll() {
    $(document).ready(function () {
        $("li").next().css({"color": "magenta"});
    });
});

// parent(selector)
$(function ExerParent() {
    $(document).ready(function () {
        $("li").parent().css({"border": "2px dotted blue"});
    });
});

// parents(selector)
$(function ExerParents() {
    $(document).ready(function () {
        $("li").parents().css({"border": "2px dotted magenta"});
    });
});

