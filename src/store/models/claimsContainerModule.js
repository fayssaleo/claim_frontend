import CustomizedAxios from "../../plugins/axios";

const claimsContainerModule = {
  state: {
    claims: [],
    editedOrSavedClaimContainer: {
      id: 0,
      status:"",
      incident_date: "",
      claim_date: "",
      ClaimOrIncident: "",
      categorie_of_equipment: "",
      concerned_internal_department: "",
      equipement_registration: "",
      cause_damage: "",
      Liability_letter_number: "",
      amount: null,
      currency: "",
      comment_third_party: "",
      reinvoiced: "",
      currency_Insurance: "",
      Invoice_number: null,
      date_of_reimbursement: "",
      reimbursed_amount: null,
      date_of_declaration: null,
      date_of_feedback: null,
      comment_Insurance: null,
      Indemnification_of_insurer: "",
      currency_indemnisation: "",
      deductible_charge_TAT: 5000,
      damage_caused_by: "",
      TAT_name_persons: null,
      outsourcer_company_name: null,
      thirdparty_company_name: null,
      thirdparty_Activity_comments: null,
      nature_of_damage_id: null,
      categorie_of_equipment: "",
      Concerned_internal_department: "",
      Deductible_charge_TAT: null,
  
      nature_of_damage: {
        id: 0,
        name: "",
      },
      department: [],
      estimate: [],
    },
  },
  mutations: {
    SET_CLAiMS(state, claims) {
      state.claims = claims;
    },
    ADD_CLAiM(state, claim) {
      state.claims.push(claim);
    },
    DELETE_CLAiM(state, claim) {
      state.claims = state.claims.filter((c) => c.id != claim.id);
    },
    EDIT_CLAiM(state, claims) {
      state.claims = state.claims.map((c) => {
        if (c.id == claims.id) return claims;
        return c;
      });
    },
    setClaimOrIncident_CONTAINER_CLAiM(state, ClaimOrIncident) {
      state.editedOrSavedClaimContainer.ClaimOrIncident = ClaimOrIncident;
    },
    setCONTAINER_CLAiM(state, container) {
      
      state.editedOrSavedClaimContainer.categorie_of_equipment =
        container.categorie_of_equipment;
      state.editedOrSavedClaimContainer.equipement_registration =
        container.equipement_registration;
      state.editedOrSavedClaimContainer.nature_of_damage.id =
        container.nature_of_damage.id;
      state.editedOrSavedClaimContainer.cause_damage = container.cause_damage;
      state.editedOrSavedClaimContainer.department.id = container.department.id;
      state.editedOrSavedClaimContainer.damage_caused_by = container.damage_caused_by;
    },
    setDATE_CONTAINER_CLAiM(state, dateClaim) {
      state.editedOrSavedClaimContainer.incident_date = dateClaim.incident_date;
      state.editedOrSavedClaimContainer.claim_date = dateClaim.claim_date;
    },
    setTHIRDPARTY_CONTAINER_CLAiM(state, thirdpartyClaim) {
      state.editedOrSavedClaimContainer.amount = thirdpartyClaim.amount;
      state.editedOrSavedClaimContainer.currency = thirdpartyClaim.currency;
      state.editedOrSavedClaimContainer.comment_third_party = thirdpartyClaim.comment_third_party;
      state.editedOrSavedClaimContainer.reinvoiced = thirdpartyClaim.reinvoiced;
      state.editedOrSavedClaimContainer.date_of_reimbursement = thirdpartyClaim.date_of_reimbursement;
      state.editedOrSavedClaimContainer.Invoice_number = thirdpartyClaim.Invoice_number;
      state.editedOrSavedClaimContainer.reimbursed_amount = thirdpartyClaim.reimbursed_amount;
    },
    setINSURANCE_FOLLOWUP_CONTAINER_CLAiM(state, insurance_followup) {
      state.editedOrSavedClaimContainer.date_of_declaration =
        insurance_followup.date_of_declaration;
      state.editedOrSavedClaimContainer.date_of_feedback =
        insurance_followup.date_of_feedback;
      state.editedOrSavedClaimContainer.comment_Insurance =
        insurance_followup.comment_Insurance;
      state.editedOrSavedClaimContainer.Indemnification_of_insurer =
        insurance_followup.Indemnification_of_insurer;
      state.editedOrSavedClaimContainer.currency_indemnisation =
        insurance_followup.currency_indemnisation;
      state.editedOrSavedClaimContainer.deductible_charge_TAT =
        insurance_followup.deductible_charge_TAT;
      state.editedOrSavedClaimContainer.Complementary_indemnification =
        insurance_followup.Complementary_indemnification;
    },

    setAll_Attr_CONTAINER_CLAiM(state, ContainerClaim) {
      state.editedOrSavedClaimContainer.id = ContainerClaim.id;
      state.editedOrSavedClaimContainer.ClaimOrIncident =
        ContainerClaim.ClaimOrIncident;
      state.editedOrSavedClaimContainer.categorie_of_equipment =
        ContainerClaim.categorie_of_equipment;
      state.editedOrSavedClaimContainer.Deductible_charge_TAT =
        ContainerClaim.Deductible_charge_TAT;
      state.editedOrSavedClaimContainer.categorie_of_equipment =
        ContainerClaim.categorie_of_equipment;
      state.editedOrSavedClaimContainer.cause_damage = ContainerClaim.cause_damage;
      state.editedOrSavedClaimContainer.equipement_registration =
        ContainerClaim.equipement_registration;
      state.editedOrSavedClaimContainer.Liability_letter_number =
        ContainerClaim.Liability_letter_number;
      state.editedOrSavedClaimContainer.categorie_of_equipment =
        ContainerClaim.categorie_of_equipment;
      state.editedOrSavedClaimContainer.damage_caused_by =
        ContainerClaim.damage_caused_by;
      state.editedOrSavedClaimContainer.currency_Insurance =
        ContainerClaim.currency_Insurance;
      state.editedOrSavedClaimContainer.Complementary_indemnification =
        ContainerClaim.Complementary_indemnification;
      // object
      console.log('ContainerClaim', ContainerClaim);
      state.editedOrSavedClaimContainer.nature_of_damage.id=ContainerClaim.nature_of_damage.id;
      //third_party
      state.editedOrSavedClaimContainer.comment_third_party =
        ContainerClaim.comment_third_party;
      state.editedOrSavedClaimContainer.thirdparty_company_name =
        ContainerClaim.thirdparty_company_name;
      state.editedOrSavedClaimContainer.thirdparty_Activity_comments =
        ContainerClaim.thirdparty_Activity_comments;
      state.editedOrSavedClaimContainer.amount = ContainerClaim.amount;
      state.editedOrSavedClaimContainer.currency = ContainerClaim.currency;
      state.editedOrSavedClaimContainer.reinvoiced = ContainerClaim.reinvoiced;
      state.editedOrSavedClaimContainer.Invoice_number =
        ContainerClaim.Invoice_number;
      state.editedOrSavedClaimContainer.reimbursed_amount =
        ContainerClaim.reimbursed_amount;
      // estimation
      state.editedOrSavedClaimContainer.estimate = ContainerClaim.estimate;
      // date
      state.editedOrSavedClaimContainer.incident_date = ContainerClaim.incident_date;
      state.editedOrSavedClaimContainer.claim_date = ContainerClaim.claim_date;
      state.editedOrSavedClaimContainer.date_of_declaration =
        ContainerClaim.date_of_declaration;
      state.editedOrSavedClaimContainer.date_of_feedback =
        ContainerClaim.date_of_feedback;
      state.editedOrSavedClaimContainer.thirdparty_Activity_comments =
        ContainerClaim.thirdparty_Activity_comments;
    },
    emptyAll_Attr_CONTAINER_CLAiM(state) {
      state.editedOrSavedClaimContainer.id = 0;
      state.editedOrSavedClaimContainer.ClaimOrIncident = "";
      state.editedOrSavedClaimContainer.categorie_of_equipment = "";
      state.editedOrSavedClaimContainer.Deductible_charge_TAT = "";
      state.editedOrSavedClaimContainer.categorie_of_equipment = "";
      state.editedOrSavedClaimContainer.cause_damage = "";
      state.editedOrSavedClaimContainer.damage_caused_by = "";
      state.editedOrSavedClaimContainer.equipement_registration = "";
      state.editedOrSavedClaimContainer.Liability_letter_number = "";
      state.editedOrSavedClaimContainer.categorie_of_equipment = "";
      state.editedOrSavedClaimContainer.currency_Insurance = "";
      state.editedOrSavedClaimContainer.deductible_charge_TAT = 5000;
      state.editedOrSavedClaimContainer.Complementary_indemnification = "";
      // object
      state.editedOrSavedClaimContainer.nature_of_damage.id = 0;
      state.editedOrSavedClaimContainer.department = [];

      //third_party
      state.editedOrSavedClaimContainer.comment_third_party = "";
      state.editedOrSavedClaimContainer.thirdparty_company_name = "";
      state.editedOrSavedClaimContainer.thirdparty_Activity_comments = "";
      state.editedOrSavedClaimContainer.amount = "";
      state.editedOrSavedClaimContainer.currency = "";
      state.editedOrSavedClaimContainer.reinvoiced = "";
      state.editedOrSavedClaimContainer.Invoice_number = "";
      state.editedOrSavedClaimContainer.reimbursed_amount = "";
      // estimation
      state.editedOrSavedClaimContainer.estimate = "";

      // date
      state.editedOrSavedClaimContainer.incident_date = "";
      state.editedOrSavedClaimContainer.claim_date = "";
      state.editedOrSavedClaimContainer.date_of_declaration = "";
      state.editedOrSavedClaimContainer.date_of_feedback = "";
      state.editedOrSavedClaimContainer.thirdparty_Activity_comments = "";
    },
  },
  actions: {
    setClaimsAction({ commit }) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.get("claim/")
          .then((response) => {
            commit("SET_CLAiMS", response.data.payload);

            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    setContainersAllClaimAction({ commit }) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.get("containers/allClaim")
          .then((response) => {
            commit("SET_CLAiMS", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    setContainersAllIncidentAction({ commit }) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.get("containers/allIncident")
          .then((response) => {
            commit("SET_CLAiMS", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    editedOrSavedContainerClaimAction({ commit }, claim) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("containers/createOrUpdateContainer", claim)
          .then((response) => {
            if (claim.id == 0) {
              commit("ADD_CLAiM", response.data.payload);
              state.editedOrSavedClaimContainer.id = response.data.payload.id;
            } else {
              commit("EDIT_CLAiM", response.data.payload);
            }

            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    addContainerAction({ commit }, container) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("containers/create", {
          name: container.name,
        })
          .then((response) => {
            commit("ADD_CLAiM", response.data.payload);
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    deleteContainerClaimAction({ commit }, claim) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("containers/delete", claim)
          .then((response) => {
            commit("DELETE_CLAiM", claim);
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    editClaimAction({ commit }, claim) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("claim/update", claim)
          .then((response) => {
            commit("EDIT_CLAiM", response.data.payload);
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    set_ClaimOrIncident_claim_SetterAction({ commit }, container) {
      commit("setClaimOrIncident_CONTAINER_CLAiM", container);
    },
    set_container_claim_SetterAction({ commit }, container) {
      commit("setCONTAINER_CLAiM", container);
    },
    set_date_container_claim_SetterAction({ commit }, dateClaim) {
      commit("setDATE_CONTAINER_CLAiM", dateClaim);
    },
    set_thirdparty_container_claim_SetterAction({ commit }, thirdparty) {
      commit("setTHIRDPARTY_CONTAINER_CLAiM", thirdparty);
    },
    set_insurance_followup_container_claim_SetterAction(
      { commit },
      insurance_followup
    ) {
      commit("setINSURANCE_FOLLOWUP_CONTAINER_CLAiM", insurance_followup);
    },
    setAll_Attr_CONTAINER_CLAiMAction({ commit }, ContainerClaim) {
      commit("setAll_Attr_CONTAINER_CLAiM", ContainerClaim);
    },
    emptyAll_Attr_CONTAINER_CLAiMAction({ commit }) {
      commit("emptyAll_Attr_CONTAINER_CLAiM");
    },
  },
  getters: {
    getContainerclaims: (state) => {
      return state.claims;
    },
    geteditedOrSavedClaimContainer: (state) => {
      return state.editedOrSavedClaimContainer;
    },
  },
};
export default claimsContainerModule;
