import * as React from 'react'
import styled from 'styled-components'

export default () => {
  return (
    <Container>
      <Section>
        <Title>{'Encryption'}</Title>
      </Section>
      <Section>
        <Title>{'Decryption'}</Title>
      </Section>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #fff;
  font-family: sans-serif;
`

const Section = styled.section`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
`

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`
