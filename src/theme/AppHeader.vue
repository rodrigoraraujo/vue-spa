<template>
  <div class="container">
    <nav class="navbar has-shadow">
      <div class="navbar-brand">
        <router-link
          to="/"
          class="navbar-item"
        >
          <img
            src="http://bit.ly/vue-img"
            alt="Vue SPA"
          />
        </router-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link
            class="navbar-item is-tab"
            to="/category/front-end"
            exact
          >
            Front-end
          </router-link>
          <router-link
            :to="{ name: 'category', params: { id: 'mobile' }}"
            class="navbar-item is-tab"
          >
            Mobile
          </router-link>
          <router-link
            class="navbar-item is-tab"
            to="/login"
          >
            Login
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>
