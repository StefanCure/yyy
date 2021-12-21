import sublinks from './data.js';

const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar-links');
const linkBtns = [...document.querySelectorAll('.link-btn')];
const submenu = document.querySelector('.submenu');
const hero = document.querySelector('.hero');
const nav = document.querySelector('.my-nav');

const loanCurrency = document.getElementById('loan_currency');
const loanAmt = document.getElementById('Loan_Amt');
const loanDuration = document.getElementById('loan_duration');
const expiration = document.getElementById('expiration');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const errorElement1 = document.getElementById('error1');
const colMsg = document.getElementById('error005');
const colMsg1 = document.getElementById('error001');
const exTime = document.getElementById('ex_time');
const myCollateral = document.getElementById('my_collateral');
const myCheck01 = document.querySelectorAll(
          "input[type='radio'][name='Partial_filling']"); // different ways of selecting a radio button
const selectDuration = document.getElementById('select_dur');
const mySubmit = document.getElementById('submit');
const confirmSubmit = document.getElementById('confirm_submit');
const confirmSubmit1 = document.getElementById('confirm_submit1');
const confirmSubmit2 = document.getElementById('confirm_submit2');
const confirmSubmit3 = document.getElementById('confirm_submit3');
const confirmPopSubmit = document.getElementById('confirm_pop_submit');
const cancelPopSubmit = document.getElementById('cancel_pop_submit');
const confirmPage = document.getElementById('confirm_page');
var radio = document.getElementsByName('Partial_filling');// different ways of selecting a radio button
const ltValue = [...document.querySelectorAll('.per1')];


const form001 = document.getElementById('form1');
const loanToken = document.getElementById('load_token');
const maxLoadAmt = document.getElementById('max_load_amt');
const minLoadAmt = document.getElementById('min_load_amt');
const collateral001 = document.getElementById('collateral001');
const msg1 = document.getElementById('mgs001');
const msg2 = document.getElementById('msg002');
const msg3 = document.getElementById('msg003');
const msg4 = document.getElementById('msg004');
const msg5 = document.getElementById('msg111');
const msg6 = document.getElementById('mgs112');
const loanDuration001 = document.getElementById('dura');
const maxDuration001 = document.getElementById('max_dura');
const minDuration001 = document.getElementById('min_dura');
const form1Expiration = document.getElementById('form1_expiration');
const exSelect001 = document.getElementById('ex_select001');
const ltValue001 = [...document.querySelectorAll('#per001')];
const send002 = document.getElementById('send002');
//const form1 = document.getElementById('form1');
//const form1 = document.getElementById('form1');




// hide/show sideabar
toggleBtn.addEventListener('click', () => {
  sidebarWrapper.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  sidebarWrapper.classList.remove('show');
});

// set sidebar
sidebar.innerHTML = sublinks
  .map((item) => {
    const { links, page } = item;
    return `<article >
<h4>${page}</h4>
<div class="sidebar-sublinks">
${links
  .map((link) => {
    return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
  })
  .join('')}
</div>
</article>`;
  })
  .join('');

linkBtns.forEach((btn) => {
  btn.addEventListener('mouseover', function (e) {
    const text = e.currentTarget.textContent;
    const tempBtn = e.currentTarget.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    const tempPage = sublinks.find((link) => link.page === text);
    if (tempPage) {
      const { page, links } = tempPage;
      submenu.classList.add('show');
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;
      // OPTIONAL
      let columns = 'col-2';
      if (links.length === 3) {
        columns = 'col-3';
      }
      if (links.length > 3) {
        columns = 'col-4';
      }
      submenu.innerHTML = `
      <section> 
      <h4>${page}</h4>
      <div class="submenu-center ${columns}">
      ${links
        .map((link) => {
            return `<a href="${link.url}" class="link_pop"><i class="${link.icon}" ></i>${link.label}</a>`;
        })
        .join('')}
      </div>
      </section>
      `;
    }
  });
});

hero.addEventListener('mouseover', function (e) {
  submenu.classList.remove('show');
});

var myMainCollateralUnit;

form.addEventListener('focusout', (e) => {
  
  let expirationDay = parseInt(expiration.value)/24

  if ( parseInt(expiration.value) > 72 ){
      errorElement.innerText = 'Maximum expiration time is 72 hours';
  }
  if ( parseInt(loanDuration.value) < expirationDay && parseInt(expiration.value) <= 72){
      errorElement.innerText = 'Expiration time must be less than or equal to loan duration';
  }
  if (parseInt(loanDuration.value) > expirationDay && parseInt(expiration.value) <= 72) {
      errorElement.innerText = ""
  }
  if (parseInt(loanAmt.value) < 500) {
    //console.log(myCheck01);
    radio.forEach((radioBtn) => {
    if (radioBtn.checked === true){
      radioBtn.checked = false;
    }
  });
    
  }
  let contactAddress;
      
      if (myCollateral.value === "ETH") {
          contactAddress = '0x2170ed0880ac9a755fd29b2688956bd959f933f8';
      }
      if (myCollateral.value === "BNB") {
          contactAddress = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
      }

  getMyPrice(contactAddress).then(x => {

      

      let y = parseFloat(x)
      y = y.toFixed(2)
        
      colMsg1.innerText = `1 ${myCollateral.value} = ${y} Usd`
      colMsg1.style.color = "#fff"
  });

  //console.log(parseInt(loanDuration.value));
  //console.log(expirationDay);
  //console.log(parseInt(loanAmt.value));
});

/** 
 
ltValue1.addEventListener('click', (e) => {
  if(loanDuration.value === '' || loanDuration.value == null && loanAmt.value === '' || loanAmt.value == null) {
    errorElement1.innerText = "Please input Load amount and loan duration"
  }
  else {
    ltValue.forEach(function(div){
    div.classList.remove('indicate_Ltv');
    ltValue1.classList.add('indicate_Ltv');
  })
  
  }
});

*/

ltValue.forEach(function(label){
  label.addEventListener('click', (e) => {
    if(loanDuration.value === '' || loanDuration.value == null && loanAmt.value === '' || loanAmt.value == null) {
      errorElement1.innerText = "Please input Load amount and loan duration"
      console.log('empty field');
      }
    else {

      let d;  
      let interest;
      let myDuration;
      let interestRate;
      if (selectDuration.value === 'Weeks') {
            myDuration = parseInt(loanDuration.value)*7
            //console.log(`duration = ${myDuration}`);
      }
      if (selectDuration.value === 'Days') {
           myDuration = parseInt(loanDuration.value)
      }
      d = myDuration
      if (myDuration <= 7) {
        d = 7;
      }
      
      //console.log(`duration = ${myDuration}`);
      
      ltValue.forEach(function(div){
        div.classList.remove('indicate_Ltv');
        e.target.classList.add('indicate_Ltv');
        //console.log(e.target.innerText)
          
        if (e.target.innerText === '25%') {
          interest = 0.57;
         } 
        else if (e.target.innerText === '50%') {
          interest = 0.86;
        }
        else if (e.target.innerText === '65%') {
            interest = 1.14;
        }
        //console.log(interest)
      })
      interestRate = interest*d
      interestRate = interestRate.toFixed(2)
      let interestAmt = interestRate*parseFloat(loanAmt.value)/100
      interestAmt.toFixed(2)
      //console.log(`duration = ${d}`);
      //console.log(`interestRate = ${interestRate}`);

      let contactAddress;
      if (myCollateral.value === "ETH") {
          contactAddress = '0x2170ed0880ac9a755fd29b2688956bd959f933f8';
      }
      if (myCollateral.value === "BNB") {
          contactAddress = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
      }
      getMyPrice(contactAddress).then(x => {
        let y = parseFloat(x)
        let value
        let multiplier
        let collateralUnit
        let collateralNeeded
        ltValue.forEach(function(){
        //console.log( parseInt(e.target.innerText) )  colMsg;
        value = parseInt(e.target.innerText)
        })
        multiplier = 100/value
        collateralNeeded = parseFloat(loanAmt.value) * multiplier;
        
        collateralUnit = collateralNeeded/y;
        collateralUnit = collateralUnit.toFixed(2)
        myMainCollateralUnit = collateralUnit
        //console.log(y, value);
        errorElement1.innerText = `Total interest = ${interestRate}% and amounting to ${interestAmt} ${loanCurrency.value}`
        errorElement1.style.color = "#fff"
        colMsg.innerText = `Collateral you need for this order is ${collateralUnit} ${myCollateral.value}`
        colMsg.style.color = "#fff"
      });
  
      
    }

  });
})

async function getMyPrice(address) {
      
  let price = await Moralis.Web3API.token.getTokenPrice({chain: "bsc", address: address});
  let usdPrice = price.usdPrice
  usdPrice = await usdPrice.toFixed(2);
  return usdPrice;
}

mySubmit.addEventListener('click', (e) => {
  let expirationDay1 = parseInt(expiration.value)/24
  e.preventDefault();
  
  if ( parseInt(loanDuration.value) <= expirationDay1 ){
      errorElement.innerText = 'Expiration time must be less than or equal to loan duration';
  }
  else if (loanAmt.value !== '' || loanAmt.value != null) {
    if (parseInt(loanAmt.value) < 500) { 
      myCheck01.forEach((radioBtn) => {
        if (radioBtn.checked === true){
          radioBtn.checked = false;
        }

      });
    }
    let partialFilled = "not allowed";
    myCheck01.forEach((radioBtn) => {
        if (radioBtn.checked === true){
          //console.log(`my radio value is ${radioBtn.value}`);
          if (radioBtn.value === 'Yes') {
            partialFilled = 'allowed'
          }
          else if (radioBtn.value === 'No') {
            partialFilled = 'not allowed'
          }
        }

      });


  confirmSubmit.innerText = `You are about to submit a loan request of ${loanAmt.value} ${loanCurrency.value}.`
  confirmSubmit1.innerText = `For a duration of ${loanDuration.value} ${selectDuration.value} with partial fill ${partialFilled}.`
  confirmSubmit2.innerText = `Your collateral is ${myMainCollateralUnit} ${myCollateral.value}.`
  confirmSubmit3.innerText = `Note Your request expires in ${expiration.value} ${exTime.value}.`
  }

  confirmPage.classList.add('confirm_show');

})

cancelPopSubmit.addEventListener('click', () => {
  confirmPage.classList.remove('confirm_show');
})


form001.addEventListener('focusout', (e) => {
  
  //let expirationDay = parseInt(expiration.value)/24

    if ( parseFloat(minLoadAmt.value) >= parseFloat(maxLoadAmt.value)){
      msg2.innerText = 'Max load amount must be greater min load';
    }
    if (parseFloat(minLoadAmt.value) < parseFloat(maxLoadAmt.value)) {
      msg2.innerText = "";
    }
    if ( parseFloat(maxDuration001.value) <= parseFloat(minDuration001.value) ){
      msg3.innerText = 'max duration < min duration';
    }
    if (parseFloat(maxDuration001.value) > parseFloat(minDuration001.value)) {
      msg3.innerText = "";
    }
    if (parseFloat(form1Expiration.value) < 1 || parseFloat(form1Expiration.value) > 72 ) {
      msg4.innerText = "Expiration must be greater than 1hr and less than 72hrs";
      //console.log(`my upper: ${parseInt(minLoadAmt.value)}`);
    }
    if (parseFloat(form1Expiration.value) >= 1 && parseFloat(form1Expiration.value) <= 72  ) {
      msg4.innerText = "";
      //console.log(parseInt(minLoadAmt.value));
    }

    let contactAddress;
      
      if (collateral001.value === "ETH") {
          contactAddress = '0x2170ed0880ac9a755fd29b2688956bd959f933f8';
      }
      if (collateral001.value === "BNB") {
          contactAddress = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
      }

  getMyPrice(contactAddress).then(x => {

      let y = parseFloat(x)
      y = y.toFixed(2)
        
      msg5.innerText = `1 ${collateral001.value} = ${y} Usd`
      msg5.style.color = "#fff"
  });

});

ltValue001.forEach(function(label){
  label.addEventListener('click', (e) => {
    if(maxLoadAmt.value === '' || maxLoadAmt.value == null || maxDuration001.value === '' || maxDuration001.value == null) {
      msg1.innerText = "Please input Load amount and loan duration"
      }
    else {

      let d001;  
      let interest001;
      let myDuration001;
      let interestRate001;
      if (loanDuration001.value === 'Weeks') {
            myDuration001 = parseInt(maxDuration001.value)*7
            //console.log(`duration = ${myDuration}`);
      }
      if (loanDuration001.value === 'Days') {
           myDuration001 = parseInt(maxDuration001.value)
      }
      d001 = myDuration001
      if (myDuration001 <= 7) {
        d001 = 7;
      }
      
      //console.log(`duration = ${myDuration}`);
      
      ltValue001.forEach(function(div){
        div.classList.remove('indicate_Ltv');
        e.target.classList.add('indicate_Ltv');
        //console.log(e.target.innerText)
          
        if (e.target.innerText === '25%') {
          interest001 = 0.57;
         } 
        else if (e.target.innerText === '50%') {
          interest001 = 0.86;
        }
        else if (e.target.innerText === '65%') {
            interest001 = 1.14;
        }
        //console.log(interest)
      })
      interestRate001 = interest001*d001
      interestRate001 = interestRate001.toFixed(2)
      let interestAmt = interestRate001*parseInt(maxLoadAmt.value)/100;
      interestAmt = interestAmt.toFixed(2)
      //console.log(`duration = ${d}`);
      //console.log(`interestRate = ${interestRate}`);



      let contactAddress;
      if (collateral001.value === "ETH") {
          contactAddress = '0x2170ed0880ac9a755fd29b2688956bd959f933f8';
      }
      if (collateral001.value === "BNB") {
          contactAddress = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
      }
      getMyPrice(contactAddress).then(x => {
        let y = parseFloat(x)
        let value
        let multiplier
        let collateralUnit
        let collateralNeeded

        ltValue001.forEach(function(){
        //console.log( parseInt(e.target.innerText) )  colMsg;
        value = parseInt(e.target.innerText)
        })
        multiplier = 100/value
        collateralNeeded = parseFloat(loanAmt.value) * multiplier;
        
        collateralUnit = collateralNeeded/y;
        collateralUnit = collateralUnit.toFixed(2);
        myMainCollateralUnit = collateralUnit

        //console.log(y, value);
        msg1.innerText = `Total interest = ${interestRate001}% and amounting to ${interestAmt} ${loanToken.value}`
        msg1.style.color = "#fff";
        msg6.innerText = `Collateral you need for this order is ${collateralUnit} ${collateral001.value}`
        msg6.style.color = "#fff";
      });
    }

  });
})


send002.addEventListener('click', (e) => {
  
  if ( parseFloat(minLoadAmt.value) >= parseFloat(maxLoadAmt.value)){
      msg2.innerText = 'Max load amount must be greater min load';
  }
  else if ( parseFloat(maxDuration001.value) <= parseFloat(minDuration001.value) ){
      msg3.innerText = 'max duration must be greater than min duration';
  }
  else {
    e.preventDefault();
    confirmSubmit.innerText = `You are about to submit a loan request of ${parseFloat(minLoadAmt.value)} ${loanToken.value}.`
  confirmSubmit1.innerText = `For a duration of ${maxDuration001.value} ${loanDuration001.value}.`
  confirmSubmit2.innerText = `Your collateral is ${myMainCollateralUnit} ${collateral001.value}.`
  confirmSubmit3.innerText = `Note Your request expires in ${form1Expiration.value} ${exSelect001.value}.`
  confirmPage.classList.add('confirm_show');
  }


})




const serverUrl = "https://chnfxvy3fdeo.usemoralis.com:2053/server"
const appId = "Sa2mt89IwI4PboGTv1BY2bErKJ1dDn8URh1JSIQX"
Moralis.start({serverUrl, appId});

async function login() {
            try {
                let currentUser = Moralis.User.current();
                if (!currentUser) {
                  const user = await Moralis.authenticate({ 
                      provider: "walletconnect", 
                      signingMessage: "my new custom message: hello",
                      mobileLinks: [
                      "rainbow",
                      "metamask",
                      "argent",
                      "trust",
                      "imtoken",
                      "pillar",
                      ] 
                  })
                    document.getElementById("login__button").innerText = "logout";
                } else if (currentUser) {
                    await Moralis.User.logOut();
                    document.getElementById("login__button").innerText = "connect";
                }
            } catch (error) {
                console.log(error);
            }
        }



document.getElementById("login__button").onclick = login;
//document.getElementById("logout__button").onclick = logout;
        

document.addEventListener('visibilitychange', () => { 
    if (document.visibilityState === 'hidden') { 
        window.localStorage.removeItem('WALLETCONNECT_DEEPLINK_CHOICE'); 
    } 
});

  //let address = "0x2170ed0880ac9a755fd29b2688956bd959f933f8"  eth address again: 0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2;

