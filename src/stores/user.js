import { defineStore, acceptHMRUpdate } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    id: "",
    accessToken: "",
  }),

  actions: {
    logout() {
      //TODO: implementar esto
      this.name = "";
      this.email = "";
      this.favorites = [];
    },
    /**
     * Attempt to login a user
     * @param {string} user
     */
    async login(id, accessToken) {
      //TODO: implementar esto
      this.name = user;
      this.email = this.name + "@utec.edu.pe";
      this.favorites = JSON.parse(localStorage.getItem(this.name)) || [];
    },
    isAuthenticated() {
      //TODO: implementar esto
      return this.name !== "";

    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}

//export default useUserStore;
