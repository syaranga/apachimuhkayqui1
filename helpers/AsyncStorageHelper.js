import AsyncStorage from '@react-native-async-storage/async-storage'

function setItem (key, value) {
  return new Promise((resolve, reject) => {
    AsyncStorage.setItem(key, JSON.stringify(value))
      .then((result) => resolve(result))
      .catch((err) => reject(err))
  })
}

function getItem (key) {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key)
      .then((result) => JSON.parse(result))
      .then((result) => resolve(result))
      .catch((err) => reject(err))
  })
}

export {
  setItem,
  getItem
}