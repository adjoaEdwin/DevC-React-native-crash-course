import AsyncStorage from '@react-native-community/async-storage';

async function storeData(data) {
  try {
    await AsyncStorage.setItem('userToken', data);
  } catch (error) {}
}

async function storeInfo(name, data) {
  try {
    await AsyncStorage.setItem(name, JSON.stringify(data));
  } catch (error) {
    throw new Error();
  }
}

async function getInfo(data) {
  try {
    const value = await AsyncStorage.getItem(data);

    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log(error);
  }
}

async function getData(data) {
  try {
    const value = await AsyncStorage.getItem('userToken');

    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log(error);
  }
}

async function removeBook() {
  try {
    await AsyncStorage.removeItem('BookInfo');
  } catch (error) {}
}

async function clearData() {
  try {
    await AsyncStorage.clear();
  } catch (error) {}
}

export {storeData, clearData, getData, storeInfo, getInfo, removeBook};
