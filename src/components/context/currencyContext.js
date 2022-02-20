import { createContext, useState } from "react";
import { useQuery, gql } from "@apollo/client";

export const currencyContext = createContext();
//make filtration of currency
//change currency symbol and label
const CurrencyContextProvider = ({ children }) => {
  const [choosenCurrency, setChoosenCurrency] = useState(0);

  const { data } = useQuery(GET_CURRENCY);

  return (
    <currencyContext.Provider
      value={{ data, choosenCurrency, setChoosenCurrency }}
    >
      {children}
    </currencyContext.Provider>
  );
};

export default CurrencyContextProvider;

const GET_CURRENCY = gql`
  {
    currencies {
      label
      symbol
    }
  }
`;
