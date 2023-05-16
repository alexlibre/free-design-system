import Vue from "vue";
import Vuex from "vuex";
import modal, { IModalState } from "./modules/modal";

Vue.use(Vuex);

export interface State {
  modal: IModalState;
}

export default new Vuex.Store<State>({
  modules: {
    modal,
  },
});
