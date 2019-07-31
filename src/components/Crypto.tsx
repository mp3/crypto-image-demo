import * as React from 'react'
import { useState, useRef } from 'react'
import styled from 'styled-components'
import * as Crypto from 'crypto-js'

export default () => {
  const [encryptionKey, setEncryptionKey] = useState('')
  const [decryptionKey, setDecryptionKey] = useState('')
  const [encryptionTargetImage, setEncryptionTargetImage] = useState('')
  const [encryptedData, setEncryptedData] = useState('')
  const [decryptionTarget, setDecryptionTarget] = useState('')
  const [decryptedData, setDecryptedData] = useState('')
  const [dragover, setDragover] = useState(false)

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

  const enterEncryptionKey = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement | null
    if (!target) {
      return
    }

    const value = target.value
    setEncryptionKey(value)
  }

  const enterDecryptionKey = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement | null
    if (!target) {
      return
    }

    const value = target.value
    setDecryptionKey(value)
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
    const key = Crypto.SHA256(encryptionKey)
    const hashbase64 = key.toString(Crypto.enc.Base64)
    const encrypted = Crypto.AES.encrypt(encryptionTargetImage, hashbase64)
    setEncryptedData(encrypted.toString())
  }

  const decrypt = () => {
    const key = Crypto.SHA256(decryptionKey)
    const hashbase64 = key.toString(Crypto.enc.Base64)

    try {
      const decrypted = Crypto.AES.decrypt(decryptionTarget, hashbase64)
      setDecryptedData(decrypted.toString(Crypto.enc.Utf8))
    } catch (error) {
      alert(error)
    }
  }

  const checkInputFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    const files = event.target.files
    if (files) {
      fileReader.readAsDataURL(files[0])
    }
  }

  const checkDraggedFile = (event: React.DragEvent) => {
    event.preventDefault()

    const files = event.dataTransfer.files
    if (files) {
      fileReader.readAsDataURL(files[0])
    }
  }

  const onDragover = () => {
    setDragover(true)
  }

  const onDragleave = () => {
    setDragover(false)
  }

  return (
    <Container>
      <Section>
        <Title>{'Encryption'}</Title>
        <Key
          onInput={enterEncryptionKey}
          placeholder={'encryption key...'}
          type={'password'}
        />
        <Input
          ref={ImageInput}
          type={'file'}
          accept={'image/*'}
          onChange={checkInputFile}
        />
        <Image
          style={{
            backgroundImage: `url(${encryptionTargetImage})`,
            cursor: 'pointer'
          }}
          onClick={openImageSelector}
          onDragOver={event => {
            checkDraggedFile(event)
            onDragover()
          }}
          onDragLeave={onDragleave}
          onDrop={checkDraggedFile}
          data-on-drag={dragover}
          data-no-image={!encryptionTargetImage}
          data-hover={true}
        />
        <Button onClick={encrypt}>{'encrypt'}</Button>
        <EncryptedData
          value={encryptedData}
          placeholder={'encrypted data...'}
          disabled={true}
        />
      </Section>
      <Section>
        <Title>{'Decryption'}</Title>
        <Key
          onInput={enterDecryptionKey}
          placeholder={'encryption key...'}
          type={'password'}
        />
        <EncryptedData
          onInput={enterEncryptedData}
          placeholder={'encrypted data...'}
        />
        <Button onClick={decrypt}>{'decrypt'}</Button>
        <Image
          style={{ backgroundImage: `url(${decryptedData})` }}
          data-no-image={!decryptedData}
          data-hover={false}
        />
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

const Key = styled.input`
  appearance: none;
  width: 400px;
  height: 40px;
  box-sizing: border-box;
  margin-bottom: 40px;
  padding: 8px;
  outline: none;
  border: 1px solid #ccc;
  font-size: 14px;
`

const Input = styled.input`
  display: none;
`

const Image = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  box-sizing: border-box;
  margin-bottom: 40px;
  border: 1px solid #ccc;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  &[data-on-drag='true'] {
    background-color: #eee;
  }

  &[data-hover='true'][data-no-image='true'] {
    &:hover {
      background-color: #f5f5f5;
    }
  }

  &[data-no-image='true'] {
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100px;
      height: 14px;
      font-size: 14px;
      line-height: 1;
      margin: auto;
      text-align: center;
      content: 'image';
    }
  }
`

const EncryptedData = styled.textarea`
  appearance: none;
  width: 400px;
  height: 400px;
  box-sizing: border-box;
  margin-bottom: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  outline: none;
  resize: none;
`

const Button = styled.button`
  appearance: none;
  padding: 10px;
  outline: none;
  margin-bottom: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-image: linear-gradient(0deg, #eee, #fff);
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(0deg, #e5e5e5, #f5f5f5);
  }
`
