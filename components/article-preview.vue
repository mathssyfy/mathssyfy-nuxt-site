<template>
  <v-card raised>
    <nuxt-link
      :to="{ name: 'posts-slug', params: { slug: post.fields.slug }}"
      >
      <v-img
        class="white--text"
        height="300"
        :src="post.fields.heroImage.fields.file.url + '?fit=scale&w=1000&h=562'"
        :srcset="`${post.fields.heroImage.fields.file.url}?w=350&h=196&fit=fill 350w, ${post.fields.heroImage.fields.file.url}?w=1000&h=562&fit=fill 1000w, ${post.fields.heroImage.fields.file.url}?w=2000&h=1125&fit=fill 2000w`"
      >
      </v-img>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{ post.fields.title }}</h3>
          <div class="intro grey--text">{{ post.fields.description }}</div> <br>
          <span class="author" v-show="author">{{ author.name }} {{ author.company | company }}</span><br>
          <span class="grey--text">{{ post.fields.publishDate | toDate }}</span><br>
        </div>
      </v-card-title>
    </nuxt-link>

    <v-card-actions>
      <nuxt-link
        v-for="tag in post.fields.tags"
        :key="tag"
        :to="{ name: 'posts', params: {tag: tag}}" class="tag">
        <v-btn flat color="orange">{{ tag }}</v-btn>
      </nuxt-link>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    props: ['post'],
    created: function () {
    },
    computed: {
      author: function () {
        if (this.post) return this.post.fields.author.fields
      }
    },
    filters: {
      toDate: (date) => {
        return (new Date(date)).toDateString()
      },
      company: (name) => {
        if (!name) return ''
        return ' in ' + name
      }
    }
  }
</script>

<style lang="scss">
  .container {
    ul li > .card {
      margin-bottom: 20px;
    }
    a {
      color: #404040;
      text-decoration: none;
    }
  }
  .thumbnail {
    margin-bottom: 1em;
  }
  .title {
    text-decoration: none;
    font-size: 22px;
    color: #373F49;
  }
  .tags {
    padding : 1em 0;
    margin-bottom: 2em;
  }
  .tag:link,
  .tag:visited {
    color: #A0A0A0;
    text-decoration: none;
    display: inline-block;
    padding: .33333rem .5rem;
    line-height: 1;
    border-radius: 2px;
    border: 1px solid #A0A0A0;
    margin-right: .5em;
  }
  .tag:active,
  .tag:hover,
  .tag:focus {
    color: #606060;
    border-color: #606060;
  }
  .headline{
    font-weight: 600!important;
    font-size: 24px;
  }
  .intro{
    font-size: 16px;
    font-weight: 400;
    color: rgba(0,0,0,.54)!important
  }
</style>
