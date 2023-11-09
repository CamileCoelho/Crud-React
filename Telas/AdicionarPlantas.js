import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AdicionarPlantas = ({ onAdd }) => {
  const [plantName, setPlantName] = useState('');
  const [plantNickname, setPlantNickname] = useState('');

  const handleAdd = () => {
    if (plantName && plantNickname) {
      const newPlant = {
        id: new Date().getTime(),
        name: plantName,
        nickname: plantNickname,
      };

      firebase.database().ref(`/plants/${newPlant.id}`).set(newPlant);
      onAdd(newPlant);
      setPlantName('');
      setPlantNickname('');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Digite o nome da planta"
        value={plantName}
        onChangeText={(text) => setPlantName(text)}
      />
      <TextInput
        placeholder="Digite o apelido da planta"
        value={plantNickname}
        onChangeText={(text) => setPlantNickname(text)}
      />
      <Button title="Adicionar Planta" onPress={handleAdd} />
    </View>
  );
};

export default AdicionarPlantas;
