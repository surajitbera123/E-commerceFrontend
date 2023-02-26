import React from 'react';
import "../index.css";
import support from "../datas/headericons/support.svg"
import refund from "../datas/headericons/refund.svg"
import shipping from "../datas/headericons/shipping.svg"

const Shipping = () => {
  return (
    <>
    <div className='d-flex justify-content-evenly' style={{width:"80%",margin:"0 auto"}}>
      <div style={{width:"auto",height:"auto",padding:"20px"}}>
        <img src={support} style={{ display:"block", margin:"0 auto", textAlign:"center"}} alt='' /><br/>
        <h2 className='text-center'>SUPPORT 24/7</h2><br/>
        <span>With this 24/7 support is there conatct this number any query ph-no:1299987155 and also emergence delivery is there just give truthfull statement</span><br/><br/>
      </div>

      <div style={{width:"auto",height:"auto",padding:"20px"}}>
        <img src={shipping} style={{ display:"block", margin:"0 auto", textAlign:"center"}} alt='' /><br/>  
        <h2 className='text-center'>SHIPPING</h2><br/>           
        <span>trsporting or shipping also there like morning at 5 AM to night 11PM it available utilize this option there is not shipping charge is also not there</span><br/><br/>
      </div>

      <div style={{width:"auto",height:"auto",padding:"20px"}}>
        <img src={refund} style={{ display:"block", margin:"0 auto", textAlign:"center"}} alt='' /><br/>
        <h2 className='text-center'>REFUND</h2><br/>
        <span>if you are not satisfing the our product just do the refund option is there we have to refund the amount with week</span><br/><br/>
      </div>
    </div>
    </>
  )
}

export default Shipping