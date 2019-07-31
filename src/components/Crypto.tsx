import * as React from 'react'
import { useState, useRef } from 'react'
import styled from 'styled-components'
import * as Crypto from 'crypto-js'

export default () => {
  const [encryptionPassword, setEncryptionPassword] = useState('')
  const [decryptionPassword, setDecryptionPassword] = useState('')
  const [encryptionTargetImage, setEncryptionTargetImage] = useState('')
  const [encryptedData, setEncryptedData] = useState('')
  const [decryptionTarget, setDecryptionTarget] = useState('')
  const [decryptedData, setDecryptedData] = useState('')

  const ImageInput = useRef<HTMLInputElement>(null)

  const fileReader = new FileReader()

  fileReader.onload = (event: any) => {
    const result = event.target.result
    setEncryptionTargetImage(result)
  }

  const openImageSelector = () => {
    const current = ImageInput.current
    if (current) {
      current.click()
    }
  }

  const enterEncryptionPassword = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const target = event.target as HTMLInputElement | null
    if (!target) {
      return
    }

    const value = target.value
    setEncryptionPassword(value)
  }

  const enterDecryptionPassword = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const target = event.target as HTMLInputElement | null
    if (!target) {
      return
    }

    const value = target.value
    setDecryptionPassword(value)
  }

  const enterEncryptedData = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const target = event.target as HTMLInputElement | null
    if (!target) {
      return
    }

    const value = target.value
    setDecryptionTarget(value)
  }

  const encrypt = () => {
    const password = Crypto.SHA256(encryptionPassword)
    const hashbase64 = password.toString(Crypto.enc.Base64)
    const encrypted = Crypto.AES.encrypt(encryptionTargetImage, hashbase64)
    setEncryptedData(encrypted.toString())
  }

  const decrypt = () => {
    const password = Crypto.SHA256(decryptionPassword)
    const hashbase64 = password.toString(Crypto.enc.Base64)
    const decrypted = Crypto.AES.decrypt(decryptionTarget, hashbase64)
    setDecryptedData(decrypted.toString(Crypto.enc.Utf8))
  }

  const checkInputFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    const files = event.target.files
    if (files) {
      fileReader.readAsDataURL(files[0])
    }
  }

  return (
    <Container>
      <Section>
        <Title>{'Encryption'}</Title>
        <Password
          onInput={enterEncryptionPassword}
          placeholder={'password...'}
          type={'password'}
        />
        <Input
          ref={ImageInput}
          type={'file'}
          accept={'image/*'}
          onChange={checkInputFile}
        />
        <Image
          style={{ backgroundImage: `url(${encryptionTargetImage})` }}
          onClick={openImageSelector}
        />
        <Button onClick={encrypt}>{'encrypt'}</Button>
        <EncryptedData value={encryptedData} disabled={true} />
      </Section>
      <Section>
        <Title>{'Decryption'}</Title>
        <Password
          onInput={enterDecryptionPassword}
          placeholder={'password...'}
          type={'password'}
        />
        <EncryptedData onInput={enterEncryptedData} />
        <Button onClick={decrypt}>{'decrypt'}</Button>
        <Image style={{ backgroundImage: `url(${decryptedData})` }} />
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
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;

  &:first-of-type {
    border-right: 1px solid #ccc;
  }
`

const Title = styled.h2`
  margin-bottom: 40px;
  font-size: 24px;
  text-align: center;
  color: #aaa;
`

const Password = styled.input`
  width: 300px;
  height: 40px;
  box-sizing: border-box;
  margin-bottom: 40px;
  padding: 8px;
  outline: none;
  font-size: 14px;
`

const Input = styled.input`
  display: none;
`

const Image = styled.div`
  width: 300px;
  height: 300px;
  box-sizing: border-box;
  margin-bottom: 40px;
  border: 1px solid #ccc;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`

const EncryptedData = styled.textarea`
  width: 300px;
  height: 150px;
  resize: none;
  margin-bottom: 40px;
`

const Button = styled.button`
  appearance: none;
  padding: 10px;
  outline: none;
  margin-bottom: 40px;
`
