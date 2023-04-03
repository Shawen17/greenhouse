import React,{useState,useEffect} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MessageNotification from './MessageNotification';
import styled from 'styled-components';
import CartDetailsModal from './CartDetailsModal';
import EditLocationOutlinedIcon from '@mui/icons-material/EditLocationOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import {Items} from './Footer';
import TopBar from './TopBar';




export const Top= styled.div`
    height:120px;
    position:fixed;
    z-index:9;
    top:0;
    right:0;
    left:0;
   `
const SecondLevel = styled.div`
    height:280px;
`

const Wrapper =styled.div`
    height:40px;
    display:flex;
    align-items:center;
    z-index:9;
`


export const SearchContainer = styled.div`
    margin-left:10px;
    border: 0.5px solid #D0D0D0;
    border-radius:6px;
    align-items:center;
    justify-content:center;
    display:flex;
    height:40px;
    width:70%;
    color:#D0D0D0;
`
const Input = styled.input`
      type: text;
      border:none;
      width:80%;
      background-color:transparent;
      border-style:none;
      &:focus {
        outline:none;
        border-color:none;
        border:none
      }
`
const Search= styled.div`
      display:flex;
      width:20%;
      justify-content:center;
      align-items:center;
`

export const Notifications = styled.div`
      display:flex;
      width:30%;
      align-items:center;
      justify-content:space-around;
      margin-right:5px;
    `

const IconContainer =styled.div`
      height:40px;
      width:35px;
      border-radius:6px;
      background-color: rgba(128,128,128,0.1);
      padding:5px;
      margin:5px;
`




const Header =()=>{
    const [show,setShow] = useState(false)
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
        }, [show]);

    const handleScroll = () => {
        setShow(window.pageYOffset > 200);
        };

    

    return (
        <div >
            
            <SecondLevel className='slide'>
                <Top className={show ? 'show' : '' }>
                    <TopBar />
                    <Wrapper style={{marginTop:30}}>
                        <SearchContainer>
                            <Search> <SearchIcon /></Search>
                            <Input placeholder="Search..." />
                        </SearchContainer>
                        <Notifications>
                            <CartDetailsModal 
                            create={true} 
                            count={1} />
                            <MessageNotification 
                            create={true} 
                            count={3}/>
                        </Notifications>
                    </Wrapper>
                </Top>
            </SecondLevel>
            
            
            <div className='icons' >
                <Items className='footer-item'>
                    <IconContainer><CategoryOutlinedIcon /></IconContainer>
                    <p>Category</p>
                </Items>
                <Items  className='footer-item'>
                    <IconContainer ><FlightOutlinedIcon  /></IconContainer>
                    <p>Flight</p>
                </Items>
                <Items className='footer-item'>
                    <IconContainer><ReceiptOutlinedIcon /></IconContainer>
                    <p>Bill</p>
                </Items>
                <Items className='footer-item'>
                    <IconContainer><LanguageOutlinedIcon /></IconContainer>
                    <p>Data</p>
                </Items>
                <Items className='footer-item'>
                    <IconContainer><EditLocationOutlinedIcon /></IconContainer>
                    <p>Top Up</p>
                </Items>
            </div>
            <div className='product-title' >Best Sale Product<span>See more</span></div>
        </div>
    )
}


export default Header;