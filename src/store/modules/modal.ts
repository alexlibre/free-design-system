import { defineStore } from "pinia";

export interface IModalState {
  showModal: boolean;
}

export const useModalStore = defineStore("modal", {
  state: (): IModalState => ({
    showModal: false,
  }),
  actions: {
    updateModal() {
      this.showModal = !this.showModal;
    },
  },
});
