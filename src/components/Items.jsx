import React,{useState} from "react";
// import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../index.css";
import {cartdata}  from "../datas/cartdata";
import { useNavigate } from "react-router-dom";


function Items(props) {
  const navigation=useNavigate();
  // const datai = useContext(datas);
  // console.log(datai)
  const[name,setname]=useState("")
  const[img,setImg]=useState("")
  const[offer,setOffer]=useState("")

  const addToCart = () => {

    const addlist=cartdata;

    addlist.push({
      name:name,
      img:img,
      offer:offer,
      qty:1
    })
    console.log(addlist)
    console.log(cartdata)
    navigation('/cart')
  };
  return (
    <>
    {/* <cartContext.Provider value={{cart,addToCart}}> */}
      <Card style={{ width: "18rem", margin:"1rem",backgroundColor:"aqua"}} className="cardhover"><br/>
        <Card.Img style={{width:"auto",height:"13rem",margin:"0 20%",padding:"1px", objectFit:"contain"}} variant="top" src={props.img} />
        <Card.Body className="text-center">
          <Card.Title>{props.name}</Card.Title>
          {props.rating}<br/>
          <h5><strike style={{color:"grey"}}>{props.original}</strike></h5>
          <Button variant="primary" style={{"backgroundColor":"tomato","color":"white"}}>💵 {props.offer} </Button>&nbsp;&nbsp;
          {/* <Link to="/cart" > */}
          {/* state={{ data: props}} */}
          <Button variant="warning" onMouseOver={()=>{
            setImg(props.img);
            setOffer(props.offer);
            setname(props.name)
          }} onClick={()=>{
            // props.preventDefault()   
            // state={{ data: props}}
            addToCart()}} style={{"backgroundColor":"yellowgreen","color":"white"}}>add to cart</Button>
          {/* </Link> */}
        </Card.Body>
      </Card>
      {/* </cartContext.Provider> */}
    </>
  );
}

export default Items;
