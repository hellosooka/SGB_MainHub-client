<template>
  <div class="about-us_background">
    <div class="about-us_contaner">
      <div class="content_container">
        <div class="questions_container">
          <span class="second_title"> Частые вопросы </span>
        </div>
        <div class="topics_container">
          <span class="second_title"> Темы </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-us_background {
  background-color: #141414;
}

.about-us_contaner {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background: linear-gradient(
      to right,
      transparent 48%,
      #555 49%,
      #555 50%,
      transparent 51%
    ),
    linear-gradient(
      to bottom,
      transparent 48%,
      #555 49%,
      #555 50%,
      transparent 51%
    );
  background-size: 50px 50px;
}

.content_container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 1vw;
  margin-top: 2vw;
}

.questions_container {
  width: 62vw;
  padding: 2.5vw;
  background-color: #272727;
  border: 2px solid #434343;
  border-radius: 10px;
  text-align: right;
}

.topics_container {
  width: 32vw;
  padding: 2.5vw;
  background-color: #272727;
  border: 2px solid #434343;
  border-radius: 10px;
  text-align: right;
}

.second_title {
  font-family: "St_sign condensed";
  font-size: 6vw;
  color: white;
}
</style>
