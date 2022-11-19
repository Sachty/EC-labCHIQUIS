<script>
export default {
  name: "HomeView",
  props: ["displayName", "img", "followers"],
};
</script>

<template>
  <main>
    <div class="user">
      <h1>{{ displayName }}</h1>
      <img class="image" width="200" height="200" :src="img" />
      <h1>{{ followers }} followers</h1>
    </div>
  </main>
</template>
