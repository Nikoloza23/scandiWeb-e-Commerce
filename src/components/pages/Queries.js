import {  gql } from '@apollo/client'

const  getAllCharacters = gql`
  {
  category{
     products{
      id
      name
      gallery
    }
  }
  }
  `

export { getAllCharacters }