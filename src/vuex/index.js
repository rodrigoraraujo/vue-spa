import Vue from 'vue';
import Vuex from 'vuex';
import appService from '../app.service';
import postsModule from './posts';

Vue.use(Vuex);

const state = {
  isAuthenticated: false
};

const store = new Vuex.Store({
  modules: {
    postsModule
  },
  state,
  getters: {
    isAuthenticated: state => {
      return state.isAuthenticated;
    }
  },
  mutations: {
    login(state, token) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('token', token.token);
        window.localStorage.setItem('tokenExpiration', token.expiration);
      }
      state.isAuthenticated = true;
    },
    logout(state) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('token', null);
        window.localStorage.setItem('tokenExpiration', null);
      }
      state.isAuthenticated = false;
    }
  },
  actions: {
    login({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        appService
          .login(credentials)
          .then(data => {
            commit('login', data);
            resolve();
          })
          .catch(() => reject());
      });
    },
    logout({ commit }) {
      commit('logout');
    }
  }
});

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    let expiration = window.localStorage.getItem('tokenExpiration');
    let unixTimestamp = new Date().getTime() / 1000;
    if (expiration !== null && parseInt(expiration) - unixTimestamp > 0) {
      store.state.isAuthenticated = true;
    }
  });
}

export default store;
