import { createContext, useContext, useState, useEffect } from 'react';

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {

    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@soilanalysis:user", JSON.stringify(user));
      localStorage.setItem("@soilanalysis:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token });

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar!")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@soilanalysis:user");
    localStorage.removeItem("@soilanalysis:token");
    localStorage.removeItem("@soilanalysis:saveSelected");

    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {

      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put("/users", user);
      console.log(user);
      localStorage.setItem("@soilanalysis:user", JSON.stringify(user));

      

      setData({ user, token: data.token });
      localStorage.setItem("@soilanalysis:user", JSON.stringify(user));

      setData({ user, token: data.token });

      alert("Perfil atualizado!");

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o perfil!");
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@soilanalysis:user");
    const token = localStorage.getItem("@soilanalysis:token");

    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      updateProfile,
      user: data.user,
      token: data.token
    }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }