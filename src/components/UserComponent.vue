<script>
export default {
  name: "HomeView",
  props: ["displayName", "img", "followers"],
};
</script>

<template>
  <main>
    <div class="user">
      <img class="image" width="200" height="200" :src="img" />
      <div class="info">
        <p class="name">{{ displayName }}</p>
        <p class="followers">{{ followers }} followers</p>
      </div>
    </div>
  </main>
</template>
