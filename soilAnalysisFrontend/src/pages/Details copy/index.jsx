import { useState, useEffect } from 'react';
import { Container, Links, Content } from './styles';
import { useParams, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { Input } from '../../components/Input';
import { useProperty } from '../../hooks/propertyProvider';

export function AlterProperty() {
  const [property, updateProperty] = useProperty();

  const [name, setName] = useState(property.name);
  const [email, setSize] = useState(property.size);

  const params = useParams();

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleUpdate() {
    const updated = {
      name,
      size
    }

    const propertyUpdated = Object.assign(property, updated);

    await updateProperty({ property: propertyUpdated });

  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if (confirm) {
      await api.delete(`/properties/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/properties/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>

      <Header />

      {
        property &&
        <main>
          <Content>

            <ButtonText
              title="Voltar"
              onClick={handleBack}
            />

            <Input
              placeholder="Nome"
              type="text"
              icon={FiUser}
              value={name}
              onChange={e => setName(e.target.value)}
            />

            <Input
              placeholder="Tamanho"
              type="text"
              icon={FiUser}
              value={size}
              onChange={e => setSize(e.target.value)}
            />

            <Input
              defaultValue={property.name}
            />
            <Input
              defaultValue={property.size}
            />

            <Button
              title="Alterar"
              color="alter"
              onClick={handleUpdate}
            />

            <Button
              title="Excluir"
              color="delete"
              onClick={handleRemove}
            />

          </Content>
        </main>
      }
    </Container>
  )

}
