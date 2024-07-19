import React, { createContext, useContext, useState, useEffect } from "react";

const ApiContext = createContext();

export const baseUrl = "http://localhost:3003";

export const ApiProvider = ({ children }) => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const apiUrl = `${baseUrl}/api/v1/products`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(
            `Erro na requisição: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        setProductData(data.products);
        console.log("Dados recebidos da API:", data.products);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <ApiContext.Provider value={{ productData }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);
