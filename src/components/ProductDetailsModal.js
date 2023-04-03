import React, { useState,useEffect } from "react";
import styled from 'styled-components';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import { useNavigate } from "react-router-dom";


const Icon = styled.div`
    
    background-color:rgba(128,128,128,0.1);
    height:20px;
    `

const Circle = styled.div`
  background-color:rgba(128,128,128,0.1);
  height:100px;
  width:100%;
  position:relative;
  border-radius:4px;
`
const ProductImg = styled.img`
  height:100px;
  width:70%;
  position: absolute;
  bottom:0;
`

const ProductContainer = styled.div`
    height:240px;
    width:150px;
    font-size: 13px;
    cursor:pointer;
    margin-bottom:15px;
`

const Details = styled.div`
height:120px;
width:100%;
`
const TestDiv= styled.div`
      position:absolute;
      border-radius: 50%;
      border:0.5px solid grey;
      z-index:20;
      top:${(prop)=>prop.testPosition?.top}px;
      left:${(prop)=>prop.testPosition?.left}px;
      display:${(prop)=>prop.testPosition?.display};      
`


const ProductDetailsModal=(props) =>{
  const product = props.product
  const [testPosition,setTestPosition] = useState({top:0,left:0,display:'none'})
  const [like,setLike]=useState(false)  
  const navigate =useNavigate()

  useEffect(() => {
    window.addEventListener("click",(event)=>{handleGrow(event)})
    return () => window.removeEventListener("click", handleGrow);
        }, );


    const handleGrow = (event)=>{
        const x = event.clientX;
        const y = event.clientY+200;
        setTestPosition({...testPosition,top:y,left:x,display:'block'})
        setTimeout(()=>setTestPosition({...testPosition,display:'none'}),2200)
    } 
  

const HandleClick=()=>{
  setTimeout(()=>navigate('/product-details',{state:{product}}),2300)
  }



  const liked =()=>{
    setLike(!like)
  } 
  
   
 return (
    <div>
      
      <ProductContainer onClick={HandleClick} >
        <div style={{textAlign:'right'}}>
          <Icon><FavoriteBorderTwoToneIcon className={like ? 'likeStyle':''} onClick={liked} /></Icon>
        </div>
        <Circle>
          <div  style={{display:'flex',alignItems:'center',justifyContent:'center'}}> 
            <ProductImg src={product.picture[0].image}  alt="product"/>
          </div> 
        </Circle> 
        
        <TestDiv testPosition={testPosition} className='grow' id='pic3' />
        <TestDiv testPosition={testPosition} className='grow' id='pic2' />
        <TestDiv testPosition={testPosition} className='grow' id='pic1' />
        <Details>
            <div className="desc">
                <p>Shirt</p>
                <div>
                    Essential Men's Short-
                    Sleeve Crewneck T-Shirt
                </div>
                <div className="amt">
                    <StarOutlinedIcon style={{color:'yellow',fontSize:13}} /> <span id="rate">4.9 | 2356</span>
                    <div style={{color:'teal',fontSize:15}}>${product.amount}</div>
                </div>
            </div>
        </Details>
      </ProductContainer>
    </div>
    )
  }
  
  
  export default ProductDetailsModal;