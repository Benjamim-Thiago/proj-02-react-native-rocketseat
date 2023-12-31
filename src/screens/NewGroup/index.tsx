import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, Content, Icon } from "./styles";

import { groupCreate } from "@storage/group/groupCreate";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

export function NewGroup() {
  const [group, setGroup] = useState('')
  
  const navigation = useNavigation()

  async function handleNew() {
    try {
      console.log(group);
      await groupCreate(group);
      navigation.navigate('players', {  group  })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        
        <Highlight 
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input 
          placeholder="Nome da turma"
          onChangeText={setGroup}
        />

        <Button 
          title="Criar"
          style={{ marginTop: 10 }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}