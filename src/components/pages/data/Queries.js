import {  gql } from '@apollo/client'

export const  GET_ALL_ITEMS = gql`
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

export const GET_CATEGORY = gql`
 query nick($title:String!){
  category(input:{title:$title}){
    name
    products{
      name 
      id
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
  

