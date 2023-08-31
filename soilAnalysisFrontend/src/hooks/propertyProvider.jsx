import { createContext, useContext, useState, useEffect } from 'react';

import { api } from '../services/api';
import { useAuth } from './auth';

export const PropertyContext = createContext({});

function PropertyProvider({ children }) {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState("");

  // const {token} = useAuth();

  useEffect(() => {
    async function searchProperty() {

      
      try {
        const token = localStorage.getItem("@soilanalysis:token");
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        const response = await api.get("/properties");
        // const response = await api.get("/properties").where(`properties.user_id=${user.id}`);
        setProperties(response.data);

      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível encontrar nenhuma propriedade!")
        }
      }
    }
    // console.log(token);

    searchProperty();
  }, []);

  return (
    <PropertyContext.Provider value={{
      selectedProperty,
      setSelectedProperty,
      properties,
    }}
    >
      {children}
    </PropertyContext.Provider>
  )
}

function useProperty() {
  const context = useContext(PropertyContext);

  return context;
}

export { PropertyProvider, useProperty }