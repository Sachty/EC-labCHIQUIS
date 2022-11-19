<script>
import UserComponent from "../components/UserComponent.vue";
import spotifyAPI from "../utils/spotifyAPI";

export default {
  name: "UserView",
  data() {
    return {
      displayName: "",
      img: "",
      followers: 0,
    };
  },
  components: {
    UserComponent,
  },
  async created() {
    const userData = await spotifyAPI.getUser();
    //TODO: implementar esto. llenar los datos del usuario
    this.displayName = userData.displayName;
    this.img = userData.img;
    this.followers = userData.followers;
  },
};
</script>

<template>
  <main>
    <UserComponent
      :displayName="displayName"
      :img="img"
      :followers="followers"
    />
  </main>
</template>
