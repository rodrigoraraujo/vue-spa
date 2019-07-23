<template>
  <div class="content">
    <div v-if="isAuthenticated">
      <p>
        Hello authenticated user!
      </p>
      <div class="control">
        <button
          v-on:click="logout()"
          class="button is-primary"
        >
          Logout
        </button>
      </div>
    </div>
    <div v-else>
      <h2>Login</h2>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Username</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                v-model="username"
                class="input"
                type="text"
                placeholder="Your username"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Password</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                v-model="password"
                class="input"
                type="password"
                placeholder="Your password"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <!-- Left empty for spacing -->
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button
                v-on:click="login()"
                class="button is-primary"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: '',
      isLoading: false
    };
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    ...mapActions(['logout']),
    login() {
      let loader = this.$loading.show({
        loader: 'bars',
        width: 64,
        height: 64,
        color: '#42a5f5',
        backgroundColor: '#fff',
        canCancel: false
      });
      this.isLoading = true;
      this.$store
        .dispatch('login', {
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.username = '';
          this.password = '';
        })
        .catch(() => {
          window.alert('User or password is wrong');
        })
        .finally(() => {
          loader.hide();
        });
    }
  }
};
</script>

<style>
</style>
