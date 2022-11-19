<script>
export default {
  name: "HomeView",
  props: ["displayName", "img", "followers"],
};
</script>

<template>
  <main>
    <div class="user">
      <p class="name">{{ displayName }}</p>
      <img class="image" width="200" height="200" :src="img" />
      <p class="followers">{{ followers }} followers</p>
    </div>
  </main>
</template>
