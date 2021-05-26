

// navbar for toggle menu
var navLink = document.getElementById('navlink');
function showMenu(){
    navLink.style.right = "0";
}
function hideMenu(){
    navLink.style.right = "-200px";
}

// transition stopper 
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-trans-stop');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-trans-stop');
    }, 400);
});




function overlay() {
	el = document.getElementById("overlay");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}
// text change 
/* const icons = ['tree', 'apple-alt', 'burn'];
const subtext = ['creative designs', 'creative thoughts', 'creative ideas'];
const largeText = ['do something creative everyday', 'creativity never ends', 'creativity requires courage'];
let count = 1;

function textChange(){
    const mainDiv = document.querySelector('.hero-content-change');

    setInterval(() => {
        mainDiv.innerHTML = `
            <div>
                <span>
                    <i class = "fa fa-${icons[count]}"></i>
                </span>
                <h3>
                    <div class = "line"></div>
                    <span>${subtext[count]}</span>
                    <div class = "line"></div>
                </h3>
                <h1 class = "hero-lg-text">
                    ${largeText[count]}
                </h1>
            </div>
        `;
        count++;
        if(count > 2) count = 0;
    }, 4000);
}
textChange(); */