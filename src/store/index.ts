import createPersistedState from 'vuex-persistedstate'
import { createStore, StoreOptions } from 'vuex'
import { entityModule } from './entity'
import { RootState } from './types'

// The persistedState plugin is good for debugging frontend without worrying about async while keeping the data on refresh
// or for simple projects not in need of a backend, but for more complex projects, you can use the asyncLocalStorage for an easy switch
// to backend calls.
// const plugins = [createPersistedState({ storage: window.sessionStorage })]
const store: StoreOptions<RootState> = {
  // plugins,
  modules: {
    entityModule
  }
}
export default createStore<RootState>(store)
