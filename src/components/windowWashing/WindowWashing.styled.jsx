import styled from 'styled-components';
import WindowWash from '../../assets/WindowWosh.png';

export const WindowWashingPix = styled.div`
  background-image: url(${WindowWash});
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  @media (max-width: 585px){
    height: 250px;
  }

`;
export const HeaderDiv = styled.div`
  margin-top: 8em;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;
  text-shadow: 
		-0   -1px 3px #706C6C,
		 0   -1px 3px #706C6C,
		-0    1px 3px #706C6C,
		 0    1px 3px #706C6C,
		-1px -0   3px #706C6C,
		 1px -0   3px #706C6C,
		-1px  0   3px #706C6C,
		 1px  0   3px #706C6C,
		-1px -1px 3px #706C6C,
		 1px -1px 3px #706C6C,
		-1px  1px 3px #706C6C,
		 1px  1px 3px #706C6C,
		-1px -1px 3px #706C6C,
		 1px -1px 3px #706C6C,
		-1px  1px 3px #706C6C,
		 1px  1px 3px #706C6C;
     @media (max-width: 883px){
      height: 30%;
      margin-top: 4em;
     }
     @media (max-width: 677px){
      margin-top: 2em;
     }
     @media (max-width: 585px){
      margin-top: 0em;
      height: 1.9rem;
     }
     

`;
export const HeaderDivStart = styled.div`
  color: white;
  display:flex;
  font-size: 1rem;
  line-height: 0rem;
  @media (max-width: 1282px){
    font-size: .8rem;
  }
  @media (max-width: 1196px){
    font-size: .7rem;
  }
  @media (max-width: 612px){
    display: none;
  }
`;
export const HeaderDivBig = styled.div`
  color: white;
  font-size: 3rem;
  line-height: 0rem;
  @media (max-width: 1282px){
    font-size: 2.3rem;
  }
  @media (max-width: 1196px){
    font-size: 2rem;
  }
  @media (max-width: 883px){
    font-size: 1.2rem;
  }
  @media (max-width: 605px){
    font-size: .8rem;
  }
  
`;
export const HeaderHr = styled.div`
  width: 110px;
  height: 2px;
  background-color: white;
  margin-bottom: 1em;
@media (max-width: 720px){
  display: none;
}
`;
export const CustomerNumbers = styled.div`
  max-width: 90%;
  display:grid;
  grid-template-columns: 23% 23% 23% 23%;
  column-gap: 1em;
  row-gap: 1em;
  margin-top: 6em;
  margin-left: 9em;
  margin-bottom: 5em;
  text-shadow: 
		-0   -1px 3px #706C6C,
		 0   -1px 3px #706C6C,
		-0    1px 3px #706C6C,
		 0    1px 3px #706C6C,
		-1px -0   3px #706C6C,
		 1px -0   3px #706C6C,
		-1px  0   3px #706C6C,
		 1px  0   3px #706C6C,
		-1px -1px 3px #706C6C,
		 1px -1px 3px #706C6C,
		-1px  1px 3px #706C6C,
		 1px  1px 3px #706C6C,
		-1px -1px 3px #706C6C,
		 1px -1px 3px #706C6C,
		-1px  1px 3px #706C6C,
     1px  1px 3px #706C6C;
  @media (max-width: 1380px){
    margin-left: 7em;
  }
  @media (max-width: 1282px){
    margin-left: 6em;
  }
  @media (max-width: 1150px){
    margin-left: 4em;
  }
  @media ( max-width: 1070px){
    margin-left: 3em;
    margin-bottom: 2em;
    margin-top: 3em;
  }
  @media ( max-width: 955px){
    margin-top: 0em;
  }
  @media (max-width: 600px){
    margin-left: 1em;
  }

  @media (max-width: 585px){
    grid-template-columns: 40% 40%;
    margin-top: 0em;
    margin-bottom: 3em;
    margin-left: 6em;
    max-width: 80%;
  }
  @media (max-width: 560px){
    margin-left: 6em;
    margin-bottom: 3em;
    max-width: 70%;
  }
  @media (max-width: 414px){
    margin-left: 5em;
  }

  @media (max-width: 375px){
    margin-left: 4em;
  }
  @media (max-width: 320px){
    margin-left: 3.5em;
  }
`;

