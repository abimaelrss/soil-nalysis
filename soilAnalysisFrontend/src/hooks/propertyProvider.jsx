import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

export const PropertyContext = createContext({});

function PropertyProvider({ children }) {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState("");

  const navigate = useNavigate();

  async function searchProperty() {
    try {
      const token = localStorage.getItem("@soilanalysis:token");
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const saveSelected = localStorage.getItem("@soilanalysis:saveSelected");
      saveSelected && setSelectedProperty(saveSelected);

      const response = await api.get("/properties");
      // const response = await api.get("/properties").where(`properties.user_id=${user.id}`);
      setProperties(response.data);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível encontrar nenhuma propriedade!");
      }
    }
  }

  useEffect(() => {
    !selectedProperty && navigate("/");
  }, [selectedProperty]);

  useEffect(() => {
    searchProperty();
  }, []);

  useEffect(() => {
    localStorage.setItem("@soilanalysis:saveSelected", selectedProperty);
  }, [selectedProperty]);

  return (
    <PropertyContext.Provider
      value={{
        selectedProperty,
        setSelectedProperty,
        searchProperty,
        properties,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
}

function useProperty() {
  const context = useContext(PropertyContext);

  return context;
}

export { PropertyProvider, useProperty };
