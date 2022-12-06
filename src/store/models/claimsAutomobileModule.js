import CustomizedAxios from "../../plugins/axios";

const claimsAutomobileModule = {
  state: {
    claims: [],
    editedOrSavedClaimAutomobile: {
      id: 0,
      status:"",
      incident_date: "",
      claim_date: "",
      brand: "",
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
      type_of_equipment: {
        id: 0,
        name: "",
      },
      brand: {
        id: 0,
        name: "",
      },
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
    setClaimOrIncident_AUTOMOBILE_CLAiM(state, ClaimOrIncident) {
      state.editedOrSavedClaimAutomobile.ClaimOrIncident = ClaimOrIncident;
    },
    setAUTOMOBILE_CLAiM(state, automobile) {
      state.editedOrSavedClaimAutomobile.type_of_equipment.id =
      automobile.type_of_equipment.id;
      state.editedOrSavedClaimAutomobile.brand.id = automobile.brand.id;
      state.editedOrSavedClaimAutomobile.categorie_of_equipment =
      automobile.categorie_of_equipment;
      state.editedOrSavedClaimAutomobile.equipement_registration =
      automobile.equipement_registration;
      state.editedOrSavedClaimAutomobile.nature_of_damage.id =
      automobile.nature_of_damage.id;
      state.editedOrSavedClaimAutomobile.cause_damage = automobile.cause_damage;
      state.editedOrSavedClaimAutomobile.department.id = automobile.department.id;
      state.editedOrSavedClaimAutomobile.damage_caused_by =
      automobile.damage_caused_by;
    },
    setDATE_AUTOMOBILE_CLAiM(state, dateClaim) {
      state.editedOrSavedClaimAutomobile.incident_date = dateClaim.incident_date;
      state.editedOrSavedClaimAutomobile.claim_date = dateClaim.claim_date;
    },
    setTHIRDPARTY_AUTOMOBILE_CLAiM(state, thirdpartyClaim) {
      state.editedOrSavedClaimAutomobile.amount = thirdpartyClaim.amount;
      state.editedOrSavedClaimAutomobile.currency = thirdpartyClaim.currency;
      state.editedOrSavedClaimAutomobile.comment_third_party = thirdpartyClaim.comment_third_party;
      state.editedOrSavedClaimAutomobile.reinvoiced = thirdpartyClaim.reinvoiced;
      state.editedOrSavedClaimAutomobile.date_of_reimbursement = thirdpartyClaim.date_of_reimbursement;
      state.editedOrSavedClaimAutomobile.Invoice_number = thirdpartyClaim.Invoice_number;
      state.editedOrSavedClaimAutomobile.reimbursed_amount = thirdpartyClaim.reimbursed_amount;
    },
    setINSURANCE_FOLLOWUP_AUTOMOBILE_CLAiM(state, insurance_followup) {
      state.editedOrSavedClaimAutomobile.date_of_declaration =
        insurance_followup.date_of_declaration;
      state.editedOrSavedClaimAutomobile.date_of_feedback =
        insurance_followup.date_of_feedback;
      state.editedOrSavedClaimAutomobile.comment_Insurance =
        insurance_followup.comment_Insurance;
      state.editedOrSavedClaimAutomobile.Indemnification_of_insurer =
        insurance_followup.Indemnification_of_insurer;
      state.editedOrSavedClaimAutomobile.currency_indemnisation =
        insurance_followup.currency_indemnisation;
      state.editedOrSavedClaimAutomobile.deductible_charge_TAT =
        insurance_followup.deductible_charge_TAT;
      state.editedOrSavedClaimAutomobile.Complementary_indemnification =
        insurance_followup.Complementary_indemnification;
    },

    setAll_Attr_AUTOMOBILE_CLAiM(state, AutomobileClaim) {
      state.editedOrSavedClaimAutomobile.id = AutomobileClaim.id;
      state.editedOrSavedClaimAutomobile.ClaimOrIncident =
      AutomobileClaim.ClaimOrIncident;
      state.editedOrSavedClaimAutomobile.categorie_of_equipment =
      AutomobileClaim.categorie_of_equipment;
      state.editedOrSavedClaimAutomobile.Deductible_charge_TAT =
      AutomobileClaim.Deductible_charge_TAT;
      state.editedOrSavedClaimAutomobile.categorie_of_equipment =
      AutomobileClaim.categorie_of_equipment;
      state.editedOrSavedClaimAutomobile.cause_damage =
      AutomobileClaim.cause_damage;
      state.editedOrSavedClaimAutomobile.equipement_registration =
      AutomobileClaim.equipement_registration;
      state.editedOrSavedClaimAutomobile.Liability_letter_number =
      AutomobileClaim.Liability_letter_number;
      state.editedOrSavedClaimAutomobile.categorie_of_equipment =
      AutomobileClaim.categorie_of_equipment;
      state.editedOrSavedClaimAutomobile.damage_caused_by =
      AutomobileClaim.damage_caused_by;
      state.editedOrSavedClaimAutomobile.currency_Insurance =
      AutomobileClaim.currency_Insurance;
        state.editedOrSavedClaimAutomobile.Complementary_indemnification =
        AutomobileClaim.Complementary_indemnification;
      // object
      state.editedOrSavedClaimAutomobile.type_of_equipment.id =
      AutomobileClaim.type_of_equipment.id;
      state.editedOrSavedClaimAutomobile.brand.id =
      AutomobileClaim.brand.id;
      //state.editedOrSavedClaimAutomobile.nature_of_damage.id=AutomobileClaim.nature_of_damage.id;
      //third_party
      state.editedOrSavedClaimAutomobile.comment_third_party =
      AutomobileClaim.comment_third_party;
      state.editedOrSavedClaimAutomobile.thirdparty_company_name =
      AutomobileClaim.thirdparty_company_name;
      state.editedOrSavedClaimAutomobile.thirdparty_Activity_comments =
      AutomobileClaim.thirdparty_Activity_comments;
      state.editedOrSavedClaimAutomobile.amount = AutomobileClaim.amount;
      state.editedOrSavedClaimAutomobile.currency = AutomobileClaim.currency;
      state.editedOrSavedClaimAutomobile.reinvoiced = AutomobileClaim.reinvoiced;
      state.editedOrSavedClaimAutomobile.Invoice_number =
      AutomobileClaim.Invoice_number;
      state.editedOrSavedClaimAutomobile.reimbursed_amount =
      AutomobileClaim.reimbursed_amount;
      // estimation
      state.editedOrSavedClaimAutomobile.estimate = AutomobileClaim.estimate;
      // date
      state.editedOrSavedClaimAutomobile.incident_date =
      AutomobileClaim.incident_date;
      state.editedOrSavedClaimAutomobile.claim_date = AutomobileClaim.claim_date;
      state.editedOrSavedClaimAutomobile.date_of_declaration =
      AutomobileClaim.date_of_declaration;
      state.editedOrSavedClaimAutomobile.date_of_feedback =
      AutomobileClaim.date_of_feedback;
      state.editedOrSavedClaimAutomobile.thirdparty_Activity_comments =
      AutomobileClaim.thirdparty_Activity_comments;
    },
    emptyAll_Attr_AUTOMOBILE_CLAiM(state) {
      state.editedOrSavedClaimAutomobile.id = 0;
      state.editedOrSavedClaimAutomobile.ClaimOrIncident = "";
      state.editedOrSavedClaimAutomobile.categorie_of_equipment = "";
      state.editedOrSavedClaimAutomobile.Deductible_charge_TAT = "";
      state.editedOrSavedClaimAutomobile.categorie_of_equipment = "";
      state.editedOrSavedClaimAutomobile.cause_damage = "";
      state.editedOrSavedClaimAutomobile.damage_caused_by = "";
      state.editedOrSavedClaimAutomobile.equipement_registration = "";
      state.editedOrSavedClaimAutomobile.Liability_letter_number = "";
      state.editedOrSavedClaimAutomobile.categorie_of_equipment = "";
      state.editedOrSavedClaimAutomobile.currency_Insurance = "";
      state.editedOrSavedClaimAutomobile.deductible_charge_TAT = 5000;
      state.editedOrSavedClaimAutomobile.Complementary_indemnification = "";
      // object
      state.editedOrSavedClaimAutomobile.type_of_equipment.id = 0;
      state.editedOrSavedClaimAutomobile.brand.id = 0;
      state.editedOrSavedClaimAutomobile.nature_of_damage.id = 0;
      state.editedOrSavedClaimAutomobile.department = [];

      //third_party
      state.editedOrSavedClaimAutomobile.comment_third_party = "";
      state.editedOrSavedClaimAutomobile.thirdparty_company_name = "";
      state.editedOrSavedClaimAutomobile.thirdparty_Activity_comments = "";
      state.editedOrSavedClaimAutomobile.amount = "";
      state.editedOrSavedClaimAutomobile.currency = "";
      state.editedOrSavedClaimAutomobile.reinvoiced = "";
      state.editedOrSavedClaimAutomobile.Invoice_number = "";
      state.editedOrSavedClaimAutomobile.reimbursed_amount = "";
      // estimation
      state.editedOrSavedClaimAutomobile.estimate = "";

      // date
      state.editedOrSavedClaimAutomobile.incident_date = "";
      state.editedOrSavedClaimAutomobile.claim_date = "";
      state.editedOrSavedClaimAutomobile.date_of_declaration = "";
      state.editedOrSavedClaimAutomobile.date_of_feedback = "";
      state.editedOrSavedClaimAutomobile.thirdparty_Activity_comments = "";
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
    setAutomobilesAllClaimAction({ commit }) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.get("automobiles/allClaim")
          .then((response) => {
            commit("SET_CLAiMS", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    setAutomobilesAllIncidentAction({ commit }) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.get("automobiles/allIncident")
          .then((response) => {
            commit("SET_CLAiMS", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    editedOrSavedAutomobileClaimAction({ commit }, claim) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("automobiles/createOrUpdateAutomobile", claim)
          .then((response) => {
            if (claim.id == 0) {
              commit("ADD_CLAiM", response.data.payload);
              state.editedOrSavedClaimAutomobile.id = response.data.payload.id;
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
    addAutomobileAction({ commit }, automobile) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("automobiles/create", {
          name: automobile.name,
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

    deleteAutomobileClaimAction({ commit }, claim) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("automobiles/delete", claim)
          .then((response) => {
            commit("DELETE_CLAiM", claim);
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
   
    set_ClaimOrIncident_claim_SetterAction({ commit }, automobile) {
      commit("setClaimOrIncident_AUTOMOBILE_CLAiM", automobile);
    },
    set_automobile_claim_SetterAction({ commit }, automobile) {
      commit("setAUTOMOBILE_CLAiM", automobile);
    },
    set_date_automobile_claim_SetterAction({ commit }, dateClaim) {
      commit("setDATE_AUTOMOBILE_CLAiM", dateClaim);
    },
    set_thirdparty_automobile_claim_SetterAction({ commit }, thirdparty) {
      commit("setTHIRDPARTY_AUTOMOBILE_CLAiM", thirdparty);
    },
    set_insurance_followup_automobile_claim_SetterAction({ commit }, insurance_followup) {
      commit("setINSURANCE_FOLLOWUP_AUTOMOBILE_CLAiM", insurance_followup);
    },
    setAll_Attr_AUTOMOBILE_CLAiMAction({ commit }, AutomobileClaim) {
      commit("setAll_Attr_AUTOMOBILE_CLAiM", AutomobileClaim);
    },
    emptyAll_Attr_AUTOMOBILE_CLAiMAction({ commit }) {
      commit("emptyAll_Attr_AUTOMOBILE_CLAiM");
    },
  },
  getters: {
    getAutomobileclaims: (state) => {
      return state.claims;
    },
    geteditedOrSavedClaimAutomobile: (state) => {
      return state.editedOrSavedClaimAutomobile;
    },
  },
};
export default claimsAutomobileModule;
