interface modalState {
  showModal: boolean;
}

export default {
  namespaced: true,
  state: {
    showModal: false,
  },
  mutations: {
    changeModal(state: modalState): void {
      state.showModal = !state.showModal;
    },
  },
  actions: {
    updateModal(context: any) {
      context.commit("changeModal");
      return;
    },
  },
};
