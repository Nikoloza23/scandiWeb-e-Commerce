import {  gql } from '@apollo/client'

const  getAllCharacters = gql`
  {
    categories {
      name
      products{
        attributes{
          name
          type
        }
        id
        name
        gallery
        prices{
          currency{
            symbol
          }
          amount
        }
      }
    }
  }
  `

export { getAllCharacters }