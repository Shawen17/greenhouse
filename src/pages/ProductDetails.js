import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
// import TopBar from '../components/TopBar';
import {Wrapper} from '../components/TopBar';
import {Top,Notifications} from '../components/Header';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import CartDetailsModal from '../components/CartDetailsModal';
import { useLocation,useNavigate } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Items } from '../components/Footer';




const Back = styled.div`
    width:60%;  
    padding-left:15px;
    cursor:pointer;
`
const ImageContainer= styled.div`
    display:flex;
    height:360px;
    weight:100%;
    margin:140px 15px 10px 15px;
    background-color:rgba(128,128,128,0.1);
    border-radius:4px;
`
const MainWrapper = styled.div`
    height:100%;
    width:70%;
    display:flex;
    justify-content:center;
    align-items:center;
    `
const MIniWrapper= styled.div`
width:30%;
height:80%;
padding-left:10px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:space-between;
cursor:pointer;
`
const Tabs = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
font-weight: bold;
font-size: 18px;
font-family: 'Urbanist', sans-serif;
margin-bottom:5px;
height:30px;
cursor:pointer;
`

const Review = styled.div`
    background-color:rgba(128,128,128,0.1);
    height:50px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    margin-bottom:5px;
    `
const Button= styled.div`
width:60%;
height:40px;
color:white;
font-weight:bold;
display:flex;
`
const Left =styled.div`
    flex:30%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:teal;
    border-top-left-radius:6px;
    border-bottom-left-radius:6px;
    `
const Right= styled.div`
    flex:70%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#40404F;
    font-weight:bold;
    font-size:16px;
    border-top-right-radius:6px;
    border-bottom-right-radius:6px;
`


export default function ProductDetails() {
    const location = useLocation();
    const navigate = useNavigate()
    const {product} = location.state
    const [show,setShow] = useState(false)
    const [sliderData,setSliderData]= useState(product.picture[0])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
        }, [show]);
        
        const handleScroll = () => {
        setShow(window.pageYOffset > 60);
        };

    const handleClick =(index)=>{
        const slider= product.picture[index]
        setSliderData(slider)
    }

    const Handleback=()=>{
        navigate('/')
    }

  return (
    <div className='details'>
        <Top className={show ? 'show' : '' } >
            
            <Wrapper style={{marginTop:20}}>
                <Back >
                    <ArrowBackIosNewOutlinedIcon onClick={Handleback} style={{zIndex:20}} />
                </Back>
                <Notifications style={{width:'40%',cursor:'pointer'}} >
                    <FavoriteBorderOutlinedIcon />
                    <ShareOutlinedIcon />
                    <CartDetailsModal  
                    create={true} 
                    count={1}/>
                </Notifications>
            </Wrapper>
        </Top>
        <ImageContainer>
            <MIniWrapper>
                {product.picture.map((item,index)=>(
                    <img style={{marginBottom:8,borderRadius:4}}  height={50} width={50} src={item.image} key={index} onClick={()=>handleClick(index)}  alt='product'/>
                ))}

            </MIniWrapper>
            <MainWrapper>
                <img src={sliderData.image} height={320} width= '80%' alt='product'/>  
            </MainWrapper>
        </ImageContainer>
        <div className='desc' style={{paddingLeft:10}}>
            <p><BadgeOutlinedIcon style={{fontSize:13}} /> tokobaju.id</p>
        </div>
        <p style={{fontSize:19,fontWeight:'bold',paddingLeft:10}}>
            Essential Men's Short-
            Sleeve Crewneck T-Shirt
        </p>
        <p style={{color:'darkgrey',textAlign:'center'}} ><StarOutlinedIcon style={{color:'yellow'}} /> 4.9 Ratings  <span id='dot'>.</span>  2.3k+ Reviews  <span id='dot'>.</span>   2.9k+ Sold</p>
        <Tabs >
            <div className='review' >About Item</div>
            <div className='review'>Review</div>
        </Tabs>
        <Review>
            <div className='desc-review'>Brand:  <span>ChArmkpR</span></div>
            <div className='desc-review'>Colour: <span>Aprikot</span></div>
        </Review>
        <div className='cart'>
            <Items >
                Total Price
                <p>${product.amount}</p>
            </Items>
            <Button>
                <Left>
                    <ShoppingCartOutlinedIcon />  <span style={{marginLeft:5,fontSize:18}}>1</span>
                </Left>
                <Right>Buy Now</Right>
            </Button>
        </div>
    </div>
  )
}
