import React from 'react'
import styled from 'styled-components'

const Inner = styled.div`
  height: 100%;
  width: ${props => (props.progress/props.total*100).toString()+"%"};
  background-color: #11E910;
`
const Outer = styled.div`
  background-color: #FFF;
  overflow: hidden;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  margin-right: 10px;
`
const ProgressBar = ({progress,total}) => (
  <Outer>
    <Inner progress={progress} total={total}/>
  </Outer>
)

const ProgressLabel = styled.div`
  color: #FFF;
  font-family: 'Futura';
  font-size: 14px;
`

const Root = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0px 0px 5px 0px;
  flex: 0 0 auto;
`

export default ({progress,total}) => (
  <Root>
    <ProgressBar progress={progress} total={total}/>
    <ProgressLabel>{progress+"/"+total+"AED"}</ProgressLabel>
  </Root>
)
