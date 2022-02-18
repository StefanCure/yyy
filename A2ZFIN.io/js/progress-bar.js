new WOW().init();


var heading = document.querySelector("b");

var data = ["P2P", "Lending", "Borrowing", "NFTS for Loans", "Marketplace"];

var j = 0;
var i = 0;
var k;

function typing() {
    if (heading.innerHTML.length === data[j].length) {
        k = 0;
        setTimeout(del, 1200);
    }
    if (i < data[j].length) {
        heading.innerHTML += data[j].charAt(i);
        i++;
        setTimeout(typing, 100);
    } else {
        j++;
        i = 0;
        k = 0;
        setTimeout(typing, 3000);
    }
    if (j === data.length) {
        j = 0;
    }
}

function del() {
    if (heading.innerHTML.length == 0) {
        clearTimeout(time);
    } else {
        heading.innerHTML = heading.innerHTML.slice(0, heading.innerHTML.length - k);
        k++;
        var time = setTimeout(del, 100);
    }
}

setTimeout(() => {
    typing();
}, 2000)

document.addEventListener(
    "scroll",
    function() {
        var scrollTop = document.documentElement["scrollTop"] || document.body["scrollTop"];

        var scrollBottom = (document.documentElement["scrollHeight"] || document.body["scrollHeight"]) - document.documentElement.clientHeight;

        scrollPercent = scrollTop / scrollBottom * 100 + "%";
        document
            .getElementById("_progress")
            .style.setProperty("--scroll", scrollPercent);
    }, {
        passive: true
    }
);

var t = setInterval(function() {
    var ele = document.getElementById('blinking-icon');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, 200);