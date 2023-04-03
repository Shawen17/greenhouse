import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import Data from '../Data/Data';
import ProductDetailsModal from './ProductDetailsModal';
import Footer from './Footer';


const Container = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-around;
    width:100%;
`


const Products =()=>{
    const [data,setData] = useState([])
    

    useEffect(()=>{
        setData(Data)
    },[])

    
    return(
        <div>
            <Container>
                {data.map(item=>(
                    
                    <ProductDetailsModal 
                    key={item.id} 
                    product={item}
                    />
                ))}

            </Container>
            <div style={{marginTop:100}}>
                <Footer />
            </div>
            
        </div>
    )

}

export default Products;