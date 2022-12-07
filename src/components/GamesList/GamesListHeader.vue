<script setup lang="ts">
import { ref } from "vue";

const filterValue = ref("");
</script>

<template>
  <div class="container">
    <div class="header">
      <span v-upper-case class="title"> все игры </span>
      <div>
        <div class="form_radio_btn">
          <input
            id="radio-1"
            type="radio"
            name="radio"
            value="bought"
            v-model="filterValue"
            checked
          />
          <label for="radio-1" v-upper-case> купленные </label>
        </div>

        <div class="form_radio_btn">
          <input
            id="radio-2"
            type="radio"
            name="radio"
            value="all"
            v-model="filterValue"
          />
          <label for="radio-2" v-upper-case>все</label>
        </div>
      </div>
    </div>
    <hr class="line" />
    <div class="search_container">
      <input placeholder="ПОИСК..." type="text" class="search_input" />
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;

  padding: 0px 30px 0px 30px;
}

.title {
  font-family: "SHEPEL";
  font-size: 3vw;
}

.form_radio_btn {
  display: inline-block;
  margin-right: 10px;
}
.form_radio_btn input[type="radio"] {
  display: none;
}
.form_radio_btn label {
  display: inline-block;
  cursor: pointer;
  padding: 3px 15px 0px 15px;
  line-height: 34px;
  border: 3px solid black;
  border-radius: 5px;
  user-select: none;
  font-size: 25px;

  color: black;
  background-color: white;
  font-family: "St_Sign condensed";
}

/* Checked */
.form_radio_btn input[type="radio"]:checked + label {
  color: white;
  background-color: #1e2859;
}

/* Hover */
.form_radio_btn label:hover {
  text-decoration: underline;
}

.line {
  margin: 15px 73px;
  background-color: black;
  height: 5px;
}
.search_container {
  display: flex;
  justify-content: center;
}

.search_input {
  width: 95%;
  font-size: 32px;
  padding: 5px;
  border: 4px solid black;
}

.search_input::placeholder {
  font-family: "SHEPEL";
}

@media (max-width: 650px) {
  .title {
    font-size: 10vw;
  }
  .header {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0px 1vw 0px;
    margin-bottom: 2vw;
  }

  .form_radio_btn label {
    font-size: 12px;
    padding: 8px 8px 3px 8px;
    line-height: 20px;
  }
  .line {
    display: none;
  }
}
</style>
