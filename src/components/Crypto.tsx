import * as React from 'react'
import styled from 'styled-components'

export default () => {
  return (
    <Container>
      <Encryption />
      <Decryption />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #000;
  font-family: sans-serif;
`

const Encryption = styled.div`
  height: 100%;
`

const Decryption = styled.div`
  height: 100%;
`
