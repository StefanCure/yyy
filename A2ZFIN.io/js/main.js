var contactData = {
    name: "",
    email: "",
    telegramHandle: "",
    //questions: "",
    //from: "unore"
    // allocationAmount : "",
    // interestedInSale : false,
}

var isValid = {
    name: false,
    email: false,
    //telegramHandle: false,
    //questions: false,
    // allocationAmount : false,
    // interestedInSale : false,
    //checked: false,
}

let messageType = "";
var isValidName = true;
$(".error-massage").addClass("show-error");


$("#name").keyup(function() {
    var name = $(this).val();
    contactData.name = $(this).val();
    if (name !== "") {
        isValid.name = true;
        isValidName = true;
        $(".name-error").addClass("show-error");
    } else {
        isValid.name = false;
        isValidName = false;
        $(".name-error").removeClass("show-error");
    }
    isDisabled();
})

/** 
 
 $("#questions").keyup(function() {
     var questions = $(this).val();
     contactData.questions = $(this).val();
     if (questions !== "") {
         isValid.questions = true;
         $(".question-error").addClass("show-error");
     } else {
         isValid.questions = false;
         $(".question-error").removeClass("show-error");
     }
     isDisabled();
 })
 
 $("#allocation").keyup(function() {
     var allocationAmount = $(this).val();
     contactData.allocationAmount = $(this).val();
     if (allocationAmount !== "") {
         isValid.allocationAmount = true;
         $(".allocation-error").addClass("show-error");
     } else {
         isValid.allocationAmount = false;
         $(".allocation-error").removeClass("show-error");
     }
     isDisabled();
 })
*/

$("#email").keyup(function() {
    const email = $(this).val();
    contactData.email = $(this).val();
    const atPos = email.indexOf("@");
    const dotPos = email.lastIndexOf(".");
    if (email === "") {
        isValid.email = false;
        $(".email-error").removeClass("show-error");
    } else {
        isValid.email = true;
        $(".email-error").addClass("show-error");
    }
    isDisabled();
})



$("#telegramHandle").click(function() {
    $(this).val("@")
})
$("#telegramHandle").keyup(function() {
    const telegram = $(this).val();
    contactData.telegramHandle = $(this).val();
    const atPos = telegram.indexOf("@");
    if (telegram.length < 2) {
        isValid.telegramHandle = false;
        $(".tg-error").removeClass("show-error");
    } else {
        isValid.telegramHandle = true;
        $(".tg-error").addClass("show-error");
    }
    isDisabled();
})

//function recaptchaCallback() {
//   isValid.checked = true;
//    isDisabled();
//};


//var interestedPrivateSale = undefined;

/**
 
 $("#allocation").css("display", "none");
 $("#interest-yes").click(function() {
     $("#allocation").css("display", "block");
     interestedPrivateSale = true;
     isValid.interestedInSale = true;
     contactData.interestedInSale = true;
     isDisabled();
 })
 
 $("#interest-no").click(function() {
     $("#allocation").css("display", "none");
     interestedPrivateSale = false;
     isValid.interestedInSale = false;
     contactData.interestedInSale = false;
     isDisabled();
 })

 */



function isDisabled() {
    if (
        isValid.name &&
        isValid.email )
    // && ((isValid.interestedInSale && isValid.allocationAmount ) || (interestedPrivateSale !== undefined && isValid.interestedInSale === false) ))
    {
        $('#submit').removeAttr('disabled');

    } else {
        $('#submit').attr('disabled', 'disabled');
    }
}

$("#contact-form").submit(function(e) {
    e.preventDefault();
    $("#submit").attr('disabled', 'disabled');
    $("#submit").text("Sending . . .");
    
    /** 

     const mailUrl = "https://travel-api.971insurance.ae/send-uno-mail";
     $.ajax({
         url: mailUrl,
         type: "POST",
         headers: {
             "Content-Type": 'application/json'
         },
         data: JSON.stringify({ ...contactData,
             messageType
         }),
         success: function(res) {
             $("#submit").text("SUBMIT");
             $(".contact-popup").removeClass("show-popup");
             $("#name").val("");
             $("#email").val("");
             $("#telegramHandle").val("");
             $("#questions").val("");
             // $("#allocation").val("");
             $("#thanks-popup").addClass("show-popup");
         }
     })
     */
})

$("#contact-btn").click(function() {
    messageType = "contact_us";
    $(".contact-popup").addClass("show-popup");
})

$("#menifesto1").click(function() {
    messageType = "contact_us";
    $(".contact-popup").addClass("show-popup");
    $("#popup-description").text("Please fill the info below to be notified for testing once dapp is ready.");
    $("#popup__header").text("Dapp in development");

})
$("#menifesto").click(function() {
    messageType = "contact_us";
    $(".contact-popup").addClass("show-popup");
    $("#popup-description").text("Please fill the info below to be notified for testing once dapp is ready.");
    $("#popup__header").text("Dapp in development");
})
$("#appLaunch").click(function() {
    messageType = "contact_us";
    $(".contact-popup").addClass("show-popup");
    $("#popup-description").text("Please fill the info below to be notified for testing once dapp is ready.");
    $("#popup__header").text("Dapp in development");
})
// $(".register-button").click(function(){
//   messageType = "register_interest";
//   $(".contact-popup").addClass("show-popup");
// })
$(".popup-close-icon").click(function() {
    $(".contact-popup").removeClass("show-popup");
    $('#submit').attr('disabled', 'disabled');
    $("#submit").text("SUBMIT");
    $("#name").val("");
    $("#email").val("");
    $("#telegramHandle").val("");
    //$("#questions").val("");
    // $("#allocation").val("");
})

$("#thanks-btn").click(function() {
    $(".thanks-container").removeClass("show-popup");
})

$("#question-1-container").click(function() {
    $("#question-1-container").toggleClass("question-main-container-active");
    $("#answer-1").toggleClass("answer-container-active");
    $("#question-1").toggleClass("question-active");
    $("#question-icon-1").toggleClass("rotate-question-icon")
});

$("#question-2-container").click(function() {
    $("#question-2-container").toggleClass("question-main-container-active");
    $("#answer-2").toggleClass("answer-container-active");
    $("#question-2").toggleClass("question-active");
    $("#question-icon-2").toggleClass("rotate-question-icon")
})

$("#question-3-container").click(function() {
    $("#question-3-container").toggleClass("question-main-container-active");
    $("#answer-3").toggleClass("answer-container-active");
    $("#question-3").toggleClass("question-active");
    $("#question-icon-3").toggleClass("rotate-question-icon")
})

$("#question-4-container").click(function() {
    $("#question-4-container").toggleClass("question-main-container-active");
    $("#answer-4").toggleClass("answer-container-active");
    $("#question-4").toggleClass("question-active");
    $("#question-icon-4").toggleClass("rotate-question-icon")
});



$(".outer-box").click(function() {
    $("#ecosystem-outer-container").css("justifyContent", "start");
    $(".tab-container").css("visibility", "visible");
    $(".tab-container").css("opacity", "1");
})

$(".mobile-list-nav").click(function() {
    $(this).toggleClass("mobile-nav-active");
    $(".mobile-dropdown-icon").toggleClass("mobile-dropdown-icon-active")
})
$(".mobile-list-nav-2").click(function() {
    $(this).toggleClass("mobile-nav-active");
    $(".mobile-dropdown-icon-2").toggleClass("mobile-dropdown-icon-active")
})

$(".menu-icon").click(function() {
    $(".menu-container").addClass("menu-container-active");
})

$(".mobile-menu-close-icon").click(function() {
    $(".menu-container").removeClass("menu-container-active");
})
$(".mobile-links").click(function() {
    $(".menu-container").removeClass("menu-container-active");
})

$("#menu-contact-btn").click(function() {
    $(".menu-container").removeClass("menu-container-active");
    $(".contact-popup").addClass("show-popup");
})


$(".common-btn").hover(function() {
    $(".common-btn").innerHtml("Coming sonn");
})
$(".close-icon").click(function() {
    $(".founder-descreption-container").removeClass("showfounder-card");
})


const rightBtn = document.querySelector('#timeline-right-button');
const leftBtn = document.querySelector('#timeline-left-button');
rightBtn.addEventListener("click", function(event) {
    const conent = document.querySelector('.timeline-container');
    conent.scrollLeft += 500;
    event.preventDefault();
});

leftBtn.addEventListener("click", function(event) {
    const conent = document.querySelector('.timeline-container');
    conent.scrollLeft -= 500;
    event.preventDefault();
});











const slider = document.querySelector('.timeline-container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 4; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
});




// let inSection = false;

// $(window).scroll(function(){
//   const windowScroll = $(window).scrollTop();

//   const element = $("#line-container");
//   const elementHeight = element[0].clientHeight;
//   const elementTop = element.position().top;
//   var winHeight = $(window).height();
//   const elementBottom = (elementTop + elementHeight);

//   if(windowScroll >= elementTop-500 && windowScroll <= elementBottom ){
//     if(!inSection){
//       $(".line").addClass("line-stroke");
//       inSection = true;
//     }
//   }
//   else{
//     inSection = false;
//     $(".line").removeClass("line-stroke");
//   }
// })

const emailData = {
    email: "",
    type: "subscribed",
    from: "unore"
};

$("#subscribe").attr('disabled', 'disabled');
$("#subscribeEmail").keyup(function() {
    const value = $(this).val();
    emailData.email = value;
    if (emailData.email !== "") {
        $("#subscribe").removeAttr('disabled', 'disabled');
    }
})

$("#subscribe").click(function(e) {
    if (emailData.email !== "") {
        e.preventDefault();
        console.log("Sadkl")
        $("#subscribe").text("Sending . . .");
        const mailUrl = "https://travel-api.971insurance.ae/send-uno-mail";
        $.ajax({
            url: mailUrl,
            type: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            data: JSON.stringify(emailData),
            success: function(res) {
                $("#subscribe").text("SUBSCRIBE");
                $("#subscribeEmail").val("");
                $("#thanks-popup").addClass("show-popup");
            }
        })
    }
})

var onloadCallback = function() {
    grecaptcha.render('html_element', {
        'sitekey': '6LdUrX4aAAAAAAqtR2k-xakdVhdXkI2FzfVHHxIE'
    });
};

var RecaptchaOptions = {
    theme: 'custom',
    custom_theme_widget: 'recaptcha_widget'
};