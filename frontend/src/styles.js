import styled from "styled-components";

export const Form = styled.form`
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  width: 100vw;
  height: 100vh;
  font-size: 1px;
  background-color: #ffff;
  margin: 0 auto;
  padding:0;

`;

export const FormLeg = styled.h1`
    font-size: 2rem;
    display:block;
    text-align: center;
    color: #508CA4;

    @media (max-width: 480px){
        
        font-size: 1rem;
        }
`;

export const FormInput = styled.input`
  border: 1px solid black;
  border-radius: 1rem;
  display: block;
  margin: 0.3rem 0 0.3rem 2rem;
  max-width: 70%;
  
  /* margin-top: 0.3rem; */
  /* margin-bottom: */
`;

export const FormSelect = styled.select`
border: 1px solid black;
border-radius: 1rem;
display: block;
margin: 0.3rem 0 0.3rem 2rem;
max-width: 70%;

`;

export const FormFieldset = styled.fieldset`
border: 2px ridge #508CA4;
border-radius: 2rem;
display: flex;
flex-wrap: wrap;
max-width: 50%;
justify-content: space-between;
align-items: center;
margin: 0 auto;
box-sizing: border-box;
padding: 10px;
background-color: #508CA4;


@media (max-width: 1110px){
        display: flex;
        flex-wrap: wrap;
        max-width: 65%;
        
    }

    @media (max-width: 480px){
        
        
            display: flex;
            justify-content: flex-start;
            max-width: 100%;

        }

`;

export const FormLabel = styled.label`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.8rem;
  margin-left: 2rem;
  color: #ffff;
  font-weight: 500;

  @media (max-width: 1033px){
        
        font-size: 0.6rem;
        }      


  @media (max-width: 480px){
        
    display: block;
    font-size: 0.5rem;
        }
  
`;

export const FormL1 = styled.div`

    width: 50%;

    
    
`;

export const FormL2 = styled.div`
    width: 30%;

   @media (max-width: 690px){

    width: 50%;

   }
`;

export const FormL3 = styled.div`
    width: 100%;

    @media (max-width: 690px){

    width: 50%;

    }
`;


export const FormL4 = styled.div`
    
    width: 50%;

`;

export const FormL5 = styled.div`
    
    width: 30%;

    @media (max-width: 690px){

width: 50%;

}

`;


export const FormL6 = styled.div`
  
    width: 30%;

    @media (max-width: 690px){

width: 50%;

}

`;

export const FormL7 = styled.div`
    
    max-width: 25%;

    @media (max-width: 650px){

    max-width: 50%;
    

}

`;

export const FormL8 = styled.div`

margin-top: 2rem;
display: flex;
width: 100%;
justify-content: center;

`

export const FormButton = styled.button`

width: 5rem;
background-color: #508CA4;
border-radius: 3rem;
color: #fff;
`

// @media (max-width: 1000px){

    
//     label, :placeholder-shown{
//         font-size: 11px;
//     }
    
    
    
    
    // }
    /* @media only screen and (max-width: 468px){
        .form{
            width: 100%;
        }
    } */
    
    // @media only screen and (max-width: 480px){
        
        
    
    
    //     label, :placeholder-shown{
    //         font-size: 9px;
    //     }
        
        
    //     .container h1, p{
    //         display: flex;
    //         justify-content: center;
            
    //     }
    
        
    
    // }