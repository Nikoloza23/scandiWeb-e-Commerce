import {  gql } from '@apollo/client'

const  getAllCharacters = gql`
  {
  category{
     products{
      name
      gallery
    }
  }
  }
  `

export { getAllCharacters }