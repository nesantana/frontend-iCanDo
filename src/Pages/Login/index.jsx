import React, { useState } from 'react'
import { Input, GreenButton } from './styled'
import { Container, Container700 } from '../../Utils/styled-utils'

// Navegação
import { useNavigate } from 'react-router-dom'

// Import de imagens
import LogoPNG from '../../assets/logo.png'
import BgSite from '../../assets/bg-site.jpg'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const changeEmail = (text) => {
    setEmail(text.target.value)
  }

  const changePassword = (text) => {
    setPassword(text.target.value)
  }

  const clickButton = () => {
    const initFetch = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    }

    fetch('http://localhost:5000/user/login', initFetch)
    .then((response) => response.json())
    .then(({user}) => {
      navigate(`/lists/${user.id}`)
    })
    .catch((e) => {
      console.error(e);
    });

  }

  return (
    <Container style={{background: `url(${BgSite}`}}>
      <img src={LogoPNG} alt="Logo do site em PNG" />

      <Container700>
        <Input style={{'marginTop': '50px'}} placeholder="E-mail" type="text" onChange={(e) => changeEmail(e)} />
      </Container700>

      <Container700>
        <Input placeholder="Senha" type="text" onChange={(e) => changePassword(e)} />
      </Container700>

      <Container700 style={{'justifyContent': 'flex-end'}}>
        <GreenButton onClick={clickButton}>
          entrar
        </GreenButton>
      </Container700>
    </Container>
  )
}

export default Login