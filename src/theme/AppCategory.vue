<template>
  <div class="columns">
    <div
      v-for="(post) in posts"
      v-bind:key="post.id"
      class="column is-one-third"
    >
      <app-post :link="post.rest_api_enabler.Link">
        <h3
          slot="title"
          v-html="post.title.rendered"
        />
        <span
          slot="content"
          v-html="post.excerpt.rendered"
        />
      </app-post>
    </div>
  </div>
</template>

<script>
import Post from './Post.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    'app-post': Post
  },
  computed: {
    ...mapGetters('postsModule', ['posts'])
  },
  watch: {
    $route(to) {
      this.id = to.params.id;
      this.loadPosts();
    }
  },
  created() {
    this.loadPosts();
  },
  methods: {
    async loadPosts() {
      // let loader = this.$loading.show({
      //   loader: 'bars',
      //   width: 64,
      //   height: 64,
      //   color: '#42a5f5',
      //   backgroundColor: '#fff',
      //   canCancel: false
      // });

      let categoryId = 2;
      if (this.$route.params.id === 'mobile') categoryId = 11;
      await this.$store.dispatch('postsModule/updateCategory', categoryId);
      // loader.hide();
    }
  }
};
</script>

<style>
</style>
