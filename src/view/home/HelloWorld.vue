<template>
  <v-app dark>
    <div class="hello">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-btn color="success">Success</v-btn>
      <h2>Essential Links</h2>
      <ul>
        <li>
          <a href="https://forum.vuejs.org" target="_blank">
            Forum
          </a>
        </li>
      </ul>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
