import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';

const EditarPlantas = ({ route, navigation }) => {
  const { plantId } = route.params;
  const [plant, setPlant] = useState({ name: '', nickname: '' });

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await firebase
        .database()
        .ref(`/plants/${plantId}`)
        .once('value');
      const data = snapshot.val();
      if (data) {
        setPlant(data);
      }
    };

    fetchData();
  }, [plantId]);

  const handleEdit = () => {
    firebase.database().ref(`/plants/${plantId}`).update(plant);
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        placeholder="Digite o novo nome da planta"
        value={plant.name}
        onChangeText={(text) => setPlant({ ...plant, name: text })}
      />
      <TextInput
        placeholder="Digite o novo apelido da planta"
        value={plant.nickname}
        onChangeText={(text) => setPlant({ ...plant, nickname: text })}
      />
      <Button title="Editar Planta" onPress={handleEdit} />
    </View>
  );
};

export default EditarPlantas;
