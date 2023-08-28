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

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
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
        data &&
        <main>
          <Content>

            <ButtonText
              title="Voltar"
              onClick={handleBack}
            />

            <Input
              defaultValue={data.name}
            />
            <Input
              defaultValue={data.size}
            />

            {
              data.links &&
              <Section title="Links úteis">
                <Links>
                  {
                    data.links.map(link => (
                      <li key={String(link.id)}>
                        <a href={link.url} target='_blank'>
                          {link.url}
                        </a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }

            {
              data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                    <Tag
                      key={String(tag.id)}
                      title={tag.name}
                    />
                  ))
                }
              </Section>
            }

            <Section title="Ações">
              <Button
                title="Alterar"
                color="alter"
                />

              <Button
                title="Excluir"
                color="delete"
                onClick={handleRemove}
              />

            </Section>
          </Content>
        </main>
      }
    </Container>
  )

}
