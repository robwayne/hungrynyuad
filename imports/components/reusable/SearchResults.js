import React from 'react';
import styled from 'styled-components'

export default ({children, emptyFooter, normalFooter}) => {
  return (
    <Root>
      <Results>
        {React.Children.map(children, (child, i) => {
          return (<ResultWrapper className={ i % 2 === 0 ? 'left' : 'right'}>{child}</ResultWrapper>)
        })}
      </Results>
      <Footer>
        {React.Children.count(children) === 0 ? emptyFooter:normalFooter}
      </Footer>
    </Root>
  )
}

const Root = styled.div`
  flex: 1;
  overflow: auto;
  padding: 0px 45px;
  width: 100%;
`
const Results = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;

`
const ResultWrapper = styled.div`
  width: 100%;
  padding-bottom: 10px;
  @media (min-width: 768) {
    width: 50%;
    &.left {
      padding-right: 5px;
    }
    &.right {
      padding-left: 5px;
    }
  }
`
const Footer = styled.div`
  font-family: 'Futura';
  font-weight: 700;
  font-size: 14px;
  color: rgba(255,255,255,0.5);
  text-align: center;
  padding: 10px 0px 20px 0px;
`
