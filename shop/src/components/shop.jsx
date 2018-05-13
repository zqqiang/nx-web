import React, { Component} from "react"
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: palevioletred;
  height: 120px;
  width: 950px;
  padding: 0;
`;

class Shop extends Component{
  render(){
    return(
      <Wrapper>
          <Title>
            奇奇海外科技
          </Title>
      </Wrapper>
    )
  }
}

export default Shop