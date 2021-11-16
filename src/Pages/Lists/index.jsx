import React, { useEffect, useState } from 'react'
import { Container, Container700, ListItem, InputCreate } from '../../Utils/styled-utils'
import { Header } from './styled'

import { useParams } from 'react-router-dom'

// Importação de Imagens
import LogoPNG from '../../assets/logo.png'

const Lists = () => {
  const [lists, setLists] = useState([])
  const params = useParams()

  const searchLists = () => {
    const initFetch = {
      method: 'GET'
    }

    fetch(`http://localhost:5000/lists/${params.id}`, initFetch)
    .then((response) => response.json())
    .then(({data}) => {
      setLists(data)
    })
    .catch((e) => {
      console.error(e);
    });
  }

  useEffect(() => {
    searchLists()
  }, [params])

  const onKeyUpCreate = (event) => {
    if (event.key === 'Enter') {
      const initFetch = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: params.id,
          name: event.target.value
        })
      }

      fetch(`http://localhost:5000/lists/`, initFetch)
      .then((response) => response.json())
      .then(() => {
        searchLists()
      })
      .catch((e) => {
        console.error(e);
      });
    }
  }

  return (
    <Container style={{"justifyContent": 'flex-start'}}>
      <Header>
        <img src={LogoPNG} alt="Logo do iCanDo em PNG" />
      </Header>

      <Container700 style={{flexDirection: 'column'}}>
        <InputCreate placeholder="+ Criar uma nova lista" onKeyUp={(e) => {onKeyUpCreate(e)}}/>

        {lists.map((list) => <ListItem key={list._id}>{list.name}</ListItem>)}
      </Container700>
    </Container>
  )
}

export default Lists