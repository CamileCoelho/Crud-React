import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const ListarPlantas = ({ data, navigation }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>Nome: {item.name}</Text>
          <Text>Apelido: {item.nickname}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Adicionar')}>
            <Text>Adicionar</Text>
          </TouchableOpacity><TouchableOpacity
            onPress={() => navigation.navigate('Editar', { plantId: item.id })}>
            <Text>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Remover', { plantId: item.id })}>
            <Text>Remover</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default ListarPlantas;

