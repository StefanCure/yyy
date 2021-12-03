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
const ltValue = [...document.querySelectorAll('.per')];


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
          return `<a href="${link.url}" class="link_pop"><i class="${link.icon}"></i>${link.label}</a>`;
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



form.addEventListener('focusout', (e) => {
  
  let expirationDay = parseInt(expiration.value)/24

  if ( parseInt(expiration.value) > 72 ){
      errorElement.innerText = 'Maximum expiration time is 72 hours';
  }
  else if ( parseInt(loanDuration.value) <= expirationDay ){
      errorElement.innerText = 'Expiration time must be less than or equal to loan duration';
  }
  else if (parseInt(loanDuration.value) > expirationDay) {
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
var collateralAmt;

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
      let collateralAmt
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
      let interestAmt = interestRate*parseInt(loanAmt.value)/100
      //console.log(`duration = ${d}`);
      //console.log(`interestRate = ${interestRate}`);
  
      errorElement1.innerText = `Total interest to be paid = ${interestRate}% and that amount to ${interestAmt}${loanCurrency.value}`
    }

  });
})

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
    let partialFilled;
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


  confirmSubmit.innerText = `You are about to submit a loan request of ${loanAmt.value}${loanCurrency.value}.`
  confirmSubmit1.innerText = `For a duration of ${loanDuration.value}${selectDuration.value} with partial fill ${partialFilled}.`
  confirmSubmit2.innerText = `Your collateral is 0.06${myCollateral.value}.`
  confirmSubmit3.innerText = `Note Your request expires in ${expiration.value}${exTime.value}.`
  }

  confirmPage.classList.add('confirm_show');

})

cancelPopSubmit.addEventListener('click', () => {
  confirmPage.classList.remove('confirm_show');
})
