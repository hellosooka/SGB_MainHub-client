<script setup lang="ts"></script>

<template>
  <footer class="container">
    <div class="links">
      <router-link to="" v-upper-case class="link"> О НАС </router-link>
      <router-link to="" v-upper-case class="link"> Поддержка </router-link>
      <router-link to="/blog" v-upper-case class="link"> блог </router-link>
    </div>
  </footer>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  background-color: #1c1c1c;
  height: 100px;
}

.title {
  font-family: "SArcade";
  padding: 5px 0px 0px 0px;
  font-size: 40px;
  color: #d9d9d9;

  transition: 500ms cubic-bezier(0.47, 0, 0.745, 0.715);
}

.title:hover {
  color: #952020;
}

.links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.link {
  font-family: "SArcade";
  font-size: 28px;
  color: #9a9a9a;
  padding: 0px 15px;
}

.link:hover {
  text-decoration: underline;
}

@media (max-width: 550px) {
  .container {
    justify-content: left;
    height: 200px;
  }
  .links {
    flex-direction: column;
    row-gap: 30px;
  }
}
</style>
