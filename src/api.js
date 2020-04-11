import AsyncStorage from '@react-native-community/async-storage';

async function storeData(data) {
  try {
    await AsyncStorage.setItem('userToken', data);
  } catch (error) {}
}

async function clearData() {
  try {
    await AsyncStorage.clear();
  } catch (error) {}
}

export {storeData, clearData};
