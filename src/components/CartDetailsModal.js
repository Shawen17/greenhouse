import React, { Fragment, useState} from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import styled from 'styled-components';


const Button = styled.button`
    type:text;
    background-color:transparent;
    border:none;
`


const CartDetailsModal =(props) => {
    const [toggle,setToggle]= useState({modal:false})
    
    const toggleModal=()=> {
      setToggle({
        modal: !toggle.modal
      });
    }
    
    const create = props.create;
      
    const hasnoSelectedItem = props.count === 0
      
        
      var button = <button type='button' onClick={toggleModal}>Edit</button>;
      if (create) {
        button = (
            <Button onClick={toggleModal}>
              <Badge color="error" badgeContent={props.count} overlap="rectangular" ><ShoppingCartOutlinedIcon /> </Badge>
            </Button>
        );
      }
      
      
      return (
        <Fragment>
          {button}
          <Modal isOpen={toggle.modal} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Cart Items <span>{props.count}</span></ModalHeader>
  
            <ModalBody>
                {hasnoSelectedItem ? (<b>Nothing in your cart yet, so start picking</b>):
                <div>
                    You have selected {props.count} Items
                </div>}
            </ModalBody>
          </Modal>
        </Fragment>
      )}
            
    
    
    
  
  
  export default CartDetailsModal;