import styled from 'styled-components';

export const CustomerNumbers = styled.div`
  width: 200px;
  color: white;
  display:block;
  p{
    font-size: 37px;
    line-height: 0;
  }
  h4{
    font-size: 23px;
    line-height: 1;
  }
  @media screen and (max-width: 790px){
    p{
      font-size: 28px;
      line-height: 0;
    }
    h4{
      font-size: 18px;
      line-height: 1;
    }
  }
  @media screen and (max-width: 615px){
    p{
      font-size: 20px;
      line-height: 0;
    }
    h4{
      font-size: 14px;
      line-height: 1;
    }
  }
`;

