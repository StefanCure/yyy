import React from "react";
import './hero.css';

function Form({value}) {
  if(value) {

      return (
        <>
            <form action="" className='my_form'>
                  <div>
                    <label className="custom-label ">You pay</label>
                    <div className="form_style">
                        <div className="my-form">
                          <div className="form-group input_first adjust">
                            <label className="form-label " for="register-username">Wrapper Ether</label>
                              <select className="form-control my-select" placeholder="currency" tabindex="6" required>
                                <option value="BNB">BNB</option>
                                <option value="ETH">ETH</option>
                                <option value="BTC">BTC</option>
                              </select>
                          </div>
                          <div className="form-group step">
                            <label className="form-label " for="register-username">$123</label>
                            <input className="form-control input_dwn" id="register-username" type="text" name="register-username" placeholder="1" dir="rtl" tabindex="1"
                               />
        
                          </div>
                        </div>
                      </div>
                      <div class="exchange"><i class="fas fa-exchange-alt"></i></div>
                      <label className="custom-label adjust ">You receive</label>
                      <div className="form_style">
                        <div className="my-form">
                          <div className="form-group input_first">
                            <label className="form-label " for="register-username">Wrapper Ether</label>
                            <select className="form-control my-select" placeholder="currency" tabindex="6" required>
                              <option value="BNB">DAI</option>
                              <option value="ETH">ETH</option>
                              <option value="BTC">BTC</option>
                              <option value="BTC">BNB</option>
                            </select>
                          </div>
                          <div className="form-group step">
                            <label className="form-label " for="register-username">$3428534</label>
                            <input className="form-control input_dwn" id="register-username" type="text" name="register-userNamename" placeholder="2345"  tabindex="1" dir="rtl" />
                      
                          </div>
                        </div>
                      </div>
                      <div className="text-des">
                        <label className="form-label " for="register-username">1 WETH cost</label>
                        <label className="form-label " for="register-username">0.2 DA</label>
                      </div>
                      <div className="text-des last">
                        <label className="form-label " for="register-username">1 DAI cost</label>
                        <label className="form-label " for="register-username">5 WETH</label>
                      </div>
                      
                      <button className=" my-btt" >Connect Wallet</button>
                  </div>
                </form>
        </>
      )
  }  
  return (
      <>
      <form className="my_form" action="">
                  <label className="custom-label">You pay</label>
                  <div className="form_style">
                    <div className="my-form">
                      <div className="form-group input_first">
                        <label className="form-label " for="register-username">Wrapper Ether</label>
                        <select className="form-control my-select" placeholder="currency" tabindex="6" required>
                          <option value="BNB">BNB</option>
                          <option value="ETH">ETH</option>
                          <option value="BTC">BTC</option>
                        </select>
                      </div>
                      <div className="form-group step">
                        <label className="form-label " for="register-username">$123</label>
                        <input className="form-control input_dwn" id="register-username" type="text" name="register-username" placeholder="1"
                          aria-describedby="register-username" autofocus="" tabindex="1" dir="rtl" />
                
                      </div>
                    </div>
                  </div>
                  <div className="form-contain">
                    <div className="form-group form-group002">
                      <div className="price-label">
                        <label className="form-label" for="register-username">Price</label>
                        <label className="form-label" for="register-username">Lock</label>
                      </div>
                      <div className="form-group form-group2">
                        <input className="form-control price-box" id="register-username" type="text" name="register-username"
                          placeholder="492" aria-describedby="register-username" autofocus="" tabindex="1" />
                      </div>
                    </div>
                    <div className="form-group form-group001">
                      <label className="form-label " for="register-number">Expires in</label>
                      <div className="form-group form-group3">
                        <select className="form-control my-select1" placeholder="currency" tabindex="6" required>
                          <option value="BNB">1Day</option>
                          <option value="ETH">5Days</option>
                          <option value="ETH">7Days</option>
                          <option value="ETH">20Days</option>
                          <option value="ETH">1Month</option>
                          <option value="ETH">2Months</option>
                          <option value="ETH">2Months</option>
                        </select>
                
                      </div>
                
                    </div>
                  </div>
                  <div className="exchange"><i class="fas fa-exchange-alt"></i></div>
                  <label className="custom-label">You receive</label>
                  <div className="form_style">
                    <div className="my-form">
                      <div className="form-group input_first">
                        <label className="form-label " for="register-username">Wrapper Ether</label>
                        <select className="form-control my-select" placeholder="currency" tabindex="6" required>
                          <option value="BNB">DAI</option>
                          <option value="ETH">ETH</option>
                          <option value="BTC">BTC</option>
                          <option value="BTC">BNB</option>
                        </select>
                      </div>
                      <div className="form-group step">
                        <label className="form-label " for="register-username">$3428534</label>
                        <input className="form-control input_dwn" id="register-username" type="text" name="register-username" placeholder="2345"
                          aria-describedby="register-username" autofocus="" tabindex="1" dir="rtl" />
                
                      </div>
                    </div>
                  </div>
                  <div className="text-des">
                    <label className="form-label " for="register-username">1 WETH cost</label>
                    <label className="form-label " for="register-username"><span className="span001">~$2,845</span>
                    2,848.5330767
                    DAI</label>
                  </div>
                  <div className="text-des">
                    <label className="form-label " for="register-username">1 DAI cost</label>
                    <label className="form-label " for="register-username"><span className="span001">~$1</span> 
                    0.0003514
                    ETH</label>
                  </div>
                  <div className="text-des last">
                    <label className="form-label " for="register-username">Transaction Cost</label>
                    <label className="form-label " for="register-username"><span className="span001">~ $43.43</span> 
                    0.0152 Ξ</label>
                  </div>
                  
                  <button className="my-btt" tabindex="5">Connect Wallet</button>
                </form>
      </>
  )
}

export default Form