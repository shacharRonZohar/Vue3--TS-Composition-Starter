export const utilService = {
  makeId,
  makeExtId,
  getRandomInt,
  getRandomColor,
  resetLocalStorage,
  save: saveToLocalStorage,
  load: loadFromLocalStorage
}

function makeId (startSymb = '', length = 13) {
  let text = startSymb
  const possible = '0123456789'
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

function makeExtId (length = 13) {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

function getRandomInt (min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

function getRandomColor () {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function resetLocalStorage () {
  localStorage.clear()
  sessionStorage.clear()
  window.location.reload()
}

function saveToLocalStorage (key: string, val: any) {
  localStorage.setItem(key, JSON.stringify(val))
}

function loadFromLocalStorage (key: string) {
  return JSON.parse(localStorage.getItem(key) as string) || null
}
