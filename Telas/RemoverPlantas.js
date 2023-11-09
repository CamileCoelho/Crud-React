import React from 'react';
import { View, Button } from 'react-native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';

const RemoverPlantas = ({ route, navigation }) => {
  const { plantId } = route.params;

  const handleRemove = () => {
    firebase.database().ref(`/plants/${plantId}`).remove();
    navigation.goBack();
  };

  return (
    <View>
      <Button title="Remover Planta" onPress={handleRemove} />
    </View>
  );
};

export default RemoverPlantas;
