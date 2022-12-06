import CustomizedAxios from "../../plugins/axios";

const claimsVesselModule = {
  state: {
    claimsVessel: [],
    editedOrSavedClaimVessel: {
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
      nature_of_damage: {
        id: 0,
        name: "",
      },
      department: [],
      estimate: [],
    },
  },
  mutations: {
    SET_CLAiMS(state, claimsVessel) {
      state.claimsVessel = claimsVessel;
    },
    ADD_CLAiM(state, claim) {
      state.claimsVessel.push(claim);
    },
    DELETE_CLAiM(state, claim) {
      state.claimsVessel = state.claimsVessel.filter((c) => c.id != claim.id);
    },
    EDIT_CLAiM(state, claim) {
      state.claimsVessel = state.claimsVessel.map((c) => {
        if (c.id == claim.id) return claim;
        return c;
      });
    },
    setClaimOrIncident_VESSEL_CLAiM(state, ClaimOrIncident) {
      state.editedOrSavedClaimVessel.ClaimOrIncident = ClaimOrIncident;
    },
    setVESSEL_CLAiM(state, vessel) {
      
   
      state.editedOrSavedClaimVessel.categorie_of_equipment =
        vessel.categorie_of_equipment;
      state.editedOrSavedClaimVessel.equipement_registration =
        vessel.equipement_registration;
      state.editedOrSavedClaimVessel.nature_of_damage.id =
        vessel.nature_of_damage.id;
      state.editedOrSavedClaimVessel.cause_damage = vessel.cause_damage;
      state.editedOrSavedClaimVessel.department.id = vessel.department.id;
      state.editedOrSavedClaimVessel.damage_caused_by = vessel.damage_caused_by;
    },
    setDATE_VESSEL_CLAiM(state, dateClaim) {
      state.editedOrSavedClaimVessel.incident_date = dateClaim.incident_date;
      state.editedOrSavedClaimVessel.claim_date = dateClaim.claim_date;
    },
    setTHIRDPARTY_VESSEL_CLAiM(state, thirdpartyClaim) {
      state.editedOrSavedClaimVessel.amount = thirdpartyClaim.amount;
      state.editedOrSavedClaimVessel.currency = thirdpartyClaim.currency;
      state.editedOrSavedClaimVessel.comment_third_party = thirdpartyClaim.comment_third_party;
      state.editedOrSavedClaimVessel.reinvoiced = thirdpartyClaim.reinvoiced;
      state.editedOrSavedClaimVessel.date_of_reimbursement = thirdpartyClaim.date_of_reimbursement;
      state.editedOrSavedClaimVessel.Invoice_number = thirdpartyClaim.Invoice_number;
      state.editedOrSavedClaimVessel.reimbursed_amount = thirdpartyClaim.reimbursed_amount;
    },
    setINSURANCE_FOLLOWUP_VESSEL_CLAiM(state, insurance_followup) {
      state.editedOrSavedClaimVessel.date_of_declaration =
        insurance_followup.date_of_declaration;
      state.editedOrSavedClaimVessel.date_of_feedback =
        insurance_followup.date_of_feedback;
      state.editedOrSavedClaimVessel.comment_Insurance =
        insurance_followup.comment_Insurance;
      state.editedOrSavedClaimVessel.Indemnification_of_insurer =
        insurance_followup.Indemnification_of_insurer;
      state.editedOrSavedClaimVessel.currency_indemnisation =
        insurance_followup.currency_indemnisation;
      state.editedOrSavedClaimVessel.deductible_charge_TAT =
        insurance_followup.deductible_charge_TAT;
      state.editedOrSavedClaimVessel.Complementary_indemnification =
        insurance_followup.Complementary_indemnification;
    },

    setAll_Attr_VESSEL_CLAiM(state, VesselClaim) {
      state.editedOrSavedClaimVessel.id = VesselClaim.id;
      state.editedOrSavedClaimVessel.ClaimOrIncident =
        VesselClaim.ClaimOrIncident;
      state.editedOrSavedClaimVessel.categorie_of_equipment =
        VesselClaim.categorie_of_equipment;
      state.editedOrSavedClaimVessel.Deductible_charge_TAT =
        VesselClaim.Deductible_charge_TAT;
      state.editedOrSavedClaimVessel.categorie_of_equipment =
        VesselClaim.categorie_of_equipment;
      state.editedOrSavedClaimVessel.cause_damage = VesselClaim.cause_damage;
      state.editedOrSavedClaimVessel.equipement_registration =
        VesselClaim.equipement_registration;
      state.editedOrSavedClaimVessel.Liability_letter_number =
        VesselClaim.Liability_letter_number;
      state.editedOrSavedClaimVessel.categorie_of_equipment =
        VesselClaim.categorie_of_equipment;
      state.editedOrSavedClaimVessel.damage_caused_by =
        VesselClaim.damage_caused_by;
      state.editedOrSavedClaimVessel.currency_Insurance =
        VesselClaim.currency_Insurance;
      state.editedOrSavedClaimVessel.Complementary_indemnification =
        VesselClaim.Complementary_indemnification;
      // object
      
      //state.editedOrSavedClaimVessel.brand.id = VesselClaim.brand.id;
      //state.editedOrSavedClaimVessel.nature_of_damage.id=VesselClaim.nature_of_damage.id;
     // state.editedOrSavedClaimVessel.type_of_equipment.id=VesselClaim.type_of_equipment.id;
      //third_party
      state.editedOrSavedClaimVessel.comment_third_party =
        VesselClaim.comment_third_party;
      state.editedOrSavedClaimVessel.thirdparty_company_name =
        VesselClaim.thirdparty_company_name;
      state.editedOrSavedClaimVessel.thirdparty_Activity_comments =
        VesselClaim.thirdparty_Activity_comments;
      state.editedOrSavedClaimVessel.amount = VesselClaim.amount;
      state.editedOrSavedClaimVessel.currency = VesselClaim.currency;
      state.editedOrSavedClaimVessel.reinvoiced = VesselClaim.reinvoiced;
      state.editedOrSavedClaimVessel.Invoice_number =
        VesselClaim.Invoice_number;
      state.editedOrSavedClaimVessel.reimbursed_amount =
        VesselClaim.reimbursed_amount;
      // estimation
      state.editedOrSavedClaimVessel.estimate = VesselClaim.estimate;
      // date
      state.editedOrSavedClaimVessel.incident_date = VesselClaim.incident_date;
      state.editedOrSavedClaimVessel.claim_date = VesselClaim.claim_date;
      state.editedOrSavedClaimVessel.date_of_declaration =
        VesselClaim.date_of_declaration;
      state.editedOrSavedClaimVessel.date_of_feedback =
        VesselClaim.date_of_feedback;
      state.editedOrSavedClaimVessel.thirdparty_Activity_comments =
        VesselClaim.thirdparty_Activity_comments;
    },
    emptyAll_Attr_VESSEL_CLAiM(state) {
      state.editedOrSavedClaimVessel.id = 0;
      state.editedOrSavedClaimVessel.ClaimOrIncident = "";
      state.editedOrSavedClaimVessel.categorie_of_equipment = "";
      state.editedOrSavedClaimVessel.Deductible_charge_TAT = "";
      state.editedOrSavedClaimVessel.categorie_of_equipment = "";
      state.editedOrSavedClaimVessel.cause_damage = "";
      state.editedOrSavedClaimVessel.damage_caused_by = "";
      state.editedOrSavedClaimVessel.equipement_registration = "";
      state.editedOrSavedClaimVessel.Liability_letter_number = "";
      state.editedOrSavedClaimVessel.categorie_of_equipment = "";
      state.editedOrSavedClaimVessel.currency_Insurance = "";
      state.editedOrSavedClaimVessel.deductible_charge_TAT = 5000;
      state.editedOrSavedClaimVessel.Complementary_indemnification = "";
      // object
      //state.editedOrSavedClaimVessel.brand.id = 0;
      //state.editedOrSavedClaimVessel.nature_of_damage.id = 0;
      state.editedOrSavedClaimVessel.department = [];

      //third_party
      state.editedOrSavedClaimVessel.comment_third_party = "";
      state.editedOrSavedClaimVessel.thirdparty_company_name = "";
      state.editedOrSavedClaimVessel.thirdparty_Activity_comments = "";
      state.editedOrSavedClaimVessel.amount = "";
      state.editedOrSavedClaimVessel.currency = "";
      state.editedOrSavedClaimVessel.reinvoiced = "";
      state.editedOrSavedClaimVessel.Invoice_number = "";
      state.editedOrSavedClaimVessel.reimbursed_amount = "";
      // estimation
      state.editedOrSavedClaimVessel.estimate = "";

      // date
      state.editedOrSavedClaimVessel.incident_date = "";
      state.editedOrSavedClaimVessel.claim_date = "";
      state.editedOrSavedClaimVessel.date_of_declaration = "";
      state.editedOrSavedClaimVessel.date_of_feedback = "";
      state.editedOrSavedClaimVessel.thirdparty_Activity_comments = "";
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
    setVesselsAllClaimAction({ commit }) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.get("vessels/allClaim")
          .then((response) => {
            commit("SET_CLAiMS", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    setVesselsAllIncidentAction({ commit }) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.get("vessels/allIncident")
          .then((response) => {
            commit("SET_CLAiMS", response.data.payload);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    editedOrSavedVesselClaimAction({ commit }, claim) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("vessels/createOrUpdateVessel", claim)
          .then((response) => {
            if (claim.id == 0) {
              commit("ADD_CLAiM", response.data.payload);
              state.editedOrSavedClaimVessel.id = response.data.payload.id;
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
    addVesselAction({ commit }, vessel) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("vessels/create", {
          name: vessel.name,
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

    deleteVesselClaimAction({ commit }, claim) {
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
    set_ClaimOrIncident_claim_SetterAction({ commit }, vessel) {
      commit("setClaimOrIncident_VESSEL_CLAiM", vessel);
    },
    set_vessel_claim_SetterAction({ commit }, vessel) {
      commit("setVESSEL_CLAiM", vessel);
    },
    set_date_vessel_claim_SetterAction({ commit }, dateClaim) {
      commit("setDATE_VESSEL_CLAiM", dateClaim);
    },
    set_thirdparty_vessel_claim_SetterAction({ commit }, thirdparty) {
      commit("setTHIRDPARTY_VESSEL_CLAiM", thirdparty);
    },
    set_insurance_followup_vessel_claim_SetterAction(
      { commit },
      insurance_followup
    ) {
      commit("setINSURANCE_FOLLOWUP_VESSEL_CLAiM", insurance_followup);
    },
    setAll_Attr_VESSEL_CLAiMAction({ commit }, VesselClaim) {
      commit("setAll_Attr_VESSEL_CLAiM", VesselClaim);
    },
    emptyAll_Attr_VESSEL_CLAiMAction({ commit }) {
      commit("emptyAll_Attr_VESSEL_CLAiM");
    },
  },
  getters: {
    getVesselclaims: (state) => {
      return state.claimsVessel;
    },
    geteditedOrSavedClaimVessel: (state) => {
      return state.editedOrSavedClaimVessel;
    },
  },
};
export default claimsVesselModule;
