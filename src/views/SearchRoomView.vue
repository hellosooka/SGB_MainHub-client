<script setup>
import { computed, ref } from "vue";

const name = ref("");
const code = ref("");

const isActive = computed(() => {
  if (name.value.trim() == "" || code.value.trim() == "") {
    return false;
  } else {
    return true;
  }
});
</script>

<template>
  <div class="container">
    <form class="form_container">
      <label for="name" class="label" v-upper-case> Имя </label>
      <input v-model="name" id="name" class="input" type="text" />
      <label for="code" class="label" v-upper-case> Код комнаты </label>
      <input v-model="code" id="code" class="input" type="text" />
      <button
        :disabled="!isActive"
        :class="{ active: isActive }"
        class="button"
        type="submit"
      >
        Играть
      </button>
    </form>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  background-color: #141414;
  padding-bottom: 50px;
}
.form_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.label {
  margin-top: 20px;
  margin-left: 9px;
  font-size: 30px;
  color: white;
  font-family: "St_Sign normal";
}

.input {
  margin-top: 5px;
  background-color: #f8f8f8;
  border: 2px solid #ebebeb;
  font-size: 28px;
  padding: 6px;
}

.button {
  margin-top: 15px;
  font-size: 35px;
  padding: 7px;
  border: 2px solid #434343;
  font-family: "St_Sign condensed";

  transition: 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.active {
  padding: 9px;
  background-color: #e13b37;
  color: white;
  border: none;
}
@media (max-width: 450px) {
  .label {
    font-size: 25px;
  }
  .form_container {
    width: 240px;
  }
}
</style>
