import styled from 'styled-components';
import homePageMain from '../../assets/homePageMain.jpg';
import homePageMain700 from '../../assets/homePageMain700.jpg';
import homePageMainWith400 from '../../assets/homePageMainWith400.jpg';
import homePageMainWith500 from '../../assets/homePageMainWith500.jpg';



export const GreenAndWindowContainer = styled.div`
   display: flex;
   max-width: 100%;
   border: 1px solid red;
   @media (max-width: 566px){
     display:flex;
     flex-direction: column;
     align-items: center;
   }
`;
export const GreenAndWindowSquare = styled.div`
  display: block;
  width: 50%;
  background-color: rgba(26, 95, 57, 1.0);
  border: 1px solid blue;
  }
  @media (max-width: 566px){
    width: 100%;
  }
`;
export const GreenAndWindowImage = styled.div`
  max-width: 50%;
  border: 2px solid blue;
   img{
     width: 100%;
     display: block;
   }
   @media (max-width: 566px){
    max-width: 100%;
   }
`;
export const GreenWindowTextContainer = styled.div`
  margin-top: 1em;
  color: white;
  display: flex;
  flex-direction: column;
`;
export const Hdiv = styled.div`
    margin-top: 2.3em;
    margin-bottom: 1em;
    margin-left: 1em;
    h1{
      font-size: 3rem;
    }
    @media (max-width: 1470px){
      h1{
        font-size:2.9rem;
      }
    }
    @media (max-width: 1404px){
      h1{
        font-size:2.7rem;
      }
    }
    @media (max-width: 1345px){
      h1{
        font-size:2.5rem;
      }
    }
    @media (max-width: 1345px){
      margin-bottom: 0;
      h1{
        font-size:2.3rem;
      }
    }
    @media (max-width: 1189px){
      h1{
        font-size:2rem;
      }
    }
    @media (max-width: 949px){
      h1{
        font-size: 1.6rem;
      }
    }
    @media (max-width: 859px){
      h1{
        font-size: 1.3rem;
      }
    }
    @media (max-width: 780px){
      h1{
        margin-bottom: .1em;
        font-size: 1.1rem;
        margin-top: 1.5em;
      }
    }
    @media (max-width: 764px){
      h1{
        font-size: 1rem;
        margin-top: 1.2em;
      }
    }
    @media (max-width: 654px){
      h1{
        font-size: .9rem;
        margin-top: 1em;
        margin-bottom: 0;
      }
    }
    @media (max-width: 424px){
      h1{
        font-size: 1.7rem;
        margin-top: 1em;
        margin-bottom: 1em;
      }
    }
`;
export const Pdiv = styled.div`
  margin-left: 1em;
  margin-right: 1em;
  margin-bottom: 2em;
  font-size: 2rem;
  @media (max-width: 1470px){
    font-size: 1.9rem;
  }
  @media (max-width: 1404px){
    font-size: 1.8rem;
  }
  @media (max-width: 1345px){
    font-size: 1.7rem;
  }
  @media (max-width: 1345px){
    margin-bottom: 1em;
  }
  @media (max-width: 1189px){
    margin-bottom: 0;
  }
  @media (max-width: 1148px){
    font-size: 1.5rem;
  }
  @media (max-width: 1052px){
    font-size: 1.3rem;
  }
  @media (max-width: 949px){
    font-size: 1.3rem;
  }
  @media (max-width: 916px){
    font-size: 1.1rem;
  }
  @media (max-width: 764px){
    font-size: 1rem;
  }
  @media (max-width: 622px){
    font-size: .9rem;
  }
  @media (max-width: 593px){
    font-size: .8rem;
  }
  @media (max-width: 424px){
    font-size: 1.7rem;
    margin-bottom: 2em;
  }
`;
export const ButtonDiv = styled.div`
  width: 15em;
  margin-left: 2em;
  margin-top: 1em;
  margin-bottom:3em;
  border: 0.2rem solid white;
  border-radius: .5rem;
  padding: .3em;
  @media (max-width: 1470px){
    margin-bottom:2.5em;
  }
  @media (max-width: 815px){
    margin-bottom:2em;
  }
  @media (max-width: 792px){
    margin-bottom:1.5em;
  }
  @media (max-width: 714px){
    margin-bottom:.5em;
    margin-top: 0;
  }
  @media (max-width: 654px){
    width: 12em;
    margin-bottom:0;
  }
  @media (max-width: 424px){
    margin:1em auto;
    width: 15em;
  }
`;
export const ButtonText = styled.div`
  margin: .2em .1em;
  font-size: 1.5rem;
  @media (max-width: 1052px){
    font-size: 1.2rem;
  }
  @media (max-width: 815px){
    font-size: 1.1rem;
  }
  @media (max-width: 654px){
    font-size: .8rem;
  }
  @media (max-width: 424px){
    font-size: 1.8rem;
  }
`;