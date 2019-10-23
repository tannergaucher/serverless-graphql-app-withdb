import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const HELLO_QUERY = gql`
  query {
    hello
  }
`

export default function App() {
  const { loading, error, data } = useQuery(HELLO_QUERY)

  return (
    <>
      <h1>GQL Lambda App</h1>
      {loading && `Loading Hello Query...`}
      {error && `Error: ${error.message}`}
      {data && data.hello && `${data.hello}`}
    </>
  )
}
