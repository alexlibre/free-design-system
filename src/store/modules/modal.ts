import { State } from "../index";
import { ActionContext } from "vuex";

export interface IModalState {
  showModal: boolean;
}

type Context = ActionContext<IModalState, State>;

export default {
  namespaced: true,
  state: {
    showModal: false,
  },
  mutations: {
    changeModal(state: IModalState): void {
      state.showModal = !state.showModal;
    },
  },
  actions: {
    updateModal(context: Context) {
      context.commit("changeModal");
      return;
    },
  },
};
