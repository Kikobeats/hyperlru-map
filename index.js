'use strict'

module.exports = () => {
  let store = new Map()

  function * values (dict) {
    for (const entry of dict) yield entry[1].value
  }

  return {
    clear: () => {
      store = new Map()
    },
    get: key => store.get(key),
    delete: key => store.delete(key),
    set: (key, value) => store.set(key, value),
    has: key => store.has(key),
    keys: () => [...store.keys()],
    values: () => [...values(store)]
  }
}
