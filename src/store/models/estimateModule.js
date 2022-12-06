import CustomizedAxios from "../../plugins/axios";

const estimateModule = {
  state: {
    estimates: [],
  },
  mutations: {
    SET_ESTIMATES(state, estimates) {
      state.estimates = estimates;
    },
    ADD_ESTIMATE(state, estimate) {
      state.estimates.push(estimate);
    },
    DELETE_ESTIMATE(state, estimate) {
      state.estimates = state.estimates.filter((c) => c.estimate.id != estimate.estimate.id);
    },
    EDIT_ESTIMATE(state, estimate) {
      console.info('estimate', estimate);
      state.estimates = state.estimates.map((c) => {
        if (c.estimate.id == estimate.estimate.id) return estimate;
        return c;
      });
    },
  },
  actions: {
    setestimatesAction({ commit }) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.get("estimates/")
          .then((response) => {
            commit("SET_ESTIMATES", response.data.payload);

            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    addestimateAction({ commit }, estimate) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("estimates/create", estimate)
          .then((response) => {
            commit("ADD_ESTIMATE", response.data.payload);
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    deleteestimateAction({ commit }, estimate) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("estimates/delete", estimate)
          .then((response) => {
            commit("DELETE_ESTIMATE", estimate);
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    editestimateAction({ commit }, estimate) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("estimates/update", estimate.estimate)
          .then((response) => {
            commit("EDIT_ESTIMATE", estimate);
            resolve(response.data.payload);
          })
          .catch((error) => {
            reject(error);
        });
      });
    },
  },
  getters: {
    getestimates: (state) => {
      return state.estimates;
    },
  },
};
export default estimateModule;
