import {  gql } from '@apollo/client'

//Data of GraphQl
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
      description
      prices{
        currency{
          label
          symbol
        }
        amount
      }
    }
  }
}

`
  

