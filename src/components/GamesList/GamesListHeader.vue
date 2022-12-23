<script setup lang="ts">
import { ref, watch } from "vue";

const emit = defineEmits(["filter", "search"]);

const filterValue = ref("");
const searchQuery = ref("");

watch(filterValue, (count) => {
  emit("filter", count);
});

watch(searchQuery, (count) => {
  emit("search", count);
});
</script>

<template>
  <div class="header">
    <span v-upper-case class="title"> все игры </span>
    <div class="button_container">
      <div class="form_radio_btn">
        <input
          id="radio-2"
          type="radio"
          name="radio"
          value="all"
          v-model="filterValue"
          checked
        />
        <label for="radio-2" v-upper-case>все</label>
      </div>
      <div class="form_radio_btn">
        <input
          id="radio-1"
          type="radio"
          name="radio"
          value="bought"
          v-model="filterValue"
        />
        <label for="radio-1" v-upper-case> купленные </label>
      </div>
    </div>
  </div>
  <div class="search_container">
    <input
      v-model="searchQuery"
      placeholder="ПОИСК..."
      type="text"
      class="search_input"
    />
  </div>
</template>

<style scoped>
.header {
  width: 97%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;

  padding: 0px 25px 0px 25px;
  margin: 30px 5px 0px 5px;
}

.title {
  font-family: "St_Sign condensed";
  font-size: 9vw;
  color: white;
  padding-top: 1vw;
}

.button_container {
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
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
  border: 3px solid gray;
  user-select: none;
  font-size: 25px;

  color: gray;
  background-color: white;
  font-family: "St_Sign condensed";

  transition: 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Checked */
.form_radio_btn input[type="radio"]:checked + label {
  color: white;
  background-color: #f6c453;
  border: 3px solid #d0a646;
  padding: 6px 18px 3px 18px;
}

/* Hover */
.form_radio_btn label:hover {
  border: 3px solid #c6c6c6;
}

.search_container {
  display: flex;
  justify-content: center;
  margin-top: 2vw;
  width: 93%;
  margin-bottom: 10px;
}

.search_input {
  width: 100%;
  font-size: 30px;
  padding: 12px;
  border: 2px solid #141414;

  transition: 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.search_input:hover {
  border: 2px solid #434343;
}

.search_input:focus {
  padding: 15px;
  width: 100%;
}

.search_input::placeholder {
  font-family: "St_Sign normal";
}

@media (max-width: 1000px) {
  .search_input {
    margin: 0px 25px;
    width: 150%;
  }
}

@media (max-width: 650px) {
  .title {
    font-size: 13vw;
    margin-bottom: 5vw;
    margin-top: 5vw;
  }

  .header {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5vw 0px 1vw 0px;
    margin-bottom: 0.5vw;
  }

  .search_input {
    font-size: 20px;
  }

  .form_radio_btn label {
    font-size: 22px;
    line-height: 26px;
  }

  .line {
    display: none;
  }
}
</style>
