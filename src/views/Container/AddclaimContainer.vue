<template>
  <div style="padding: 5px; padding-top: 1%">
    <h3 class="text-uppercase">CREATING THE CLAIM</h3>
    <template>
      <v-card class="d-flex pa-4 mb-4" max-width="170" outlined>
        <h5 class="green--text text--lighten-2">Claim</h5>
        <v-switch
          color="deep-orange lighten-1"
          v-model="switch1"
          @change="ClaimOrIncident()"
        ></v-switch>
        <h5 class="deep-orange--text text--lighten-1">Incident</h5>
      </v-card>

      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step editable :complete="e1 > 1" step="1">
            Container
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step editable :complete="e1 > 2" step="2">
            Claim date
          </v-stepper-step>

          <v-divider></v-divider>
          <v-stepper-step
            :editable="
              this.geteditedOrSavedClaimContainer.damage_caused_by ==
              'Thirdparty'
            "
            :complete="e1 > 3"
            :class="{
              'd-none': !(
                this.geteditedOrSavedClaimContainer.damage_caused_by ==
                'Thirdparty'
              ),
            }"
            step="3"
          >
            Third party
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step editable :complete="e1 > 4" step="4">
            Estimates of the claim
          </v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step editable step="5">
            INSURANCE DECLARATION & FOLLOW UP
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <Container />
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-card class="mb-12" color="#f0f0f0cc" height="auto">
              <template>
                <Claimdate />
              </template>
            </v-card>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-card class="mb-12" color="#f0f0f0cc" height="auto">
              <template>
                <Thirdparty />
              </template>
            </v-card>
          </v-stepper-content>
          <v-stepper-content step="4">
            <v-card class="mb-12" color="#f0f0f0cc" height="auto">
              <template>
                <v-container fluid>
                  <Estimate />
                </v-container>
              </template>
            </v-card>
          </v-stepper-content>
          <v-stepper-content step="5">
            <v-card class="mb-12 pa-4" color="#f0f0f0cc" height="auto">
              <InsuranceFollowup />
            </v-card>
          </v-stepper-content>
        </v-stepper-items>
        <div class="d-flex">
          <v-btn v-if="e1 == 1" class="mx-4"  text>
            backward
          </v-btn>
          <v-btn v-else color="gray" class="mx-4" @click="stepper_backward(e1)">
            backward
          </v-btn>
          <v-btn v-if="e1==5" text >
                forward
              </v-btn>
              <v-btn v-else color="primary" @click="stepper_forward(e1)">
                forward
              </v-btn>          <v-spacer></v-spacer>

          <v-btn color="ma-2 teal white--text" @click="editedOrSavedClaim()">
            save
          </v-btn>
          <v-btn color="ma-2 red white--text"> cancel </v-btn>
        </div>
      </v-stepper>
    </template>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Estimate from "../../components/ContainerComponents/Estimate/Estimate.vue";
import Container from "../../components/ContainerComponents/ContainerStep/Container.vue";
import Claimdate from "../../components/ContainerComponents/claimDate/Claimdate.vue";
import Thirdparty from "../../components/ContainerComponents/Thirdparty/Thirdparty.vue";
import InsuranceFollowup from "../../components/ContainerComponents/InsuranceFollowup/InsuranceFollowup.vue";

export default {
  components: {
    Estimate,
    Container,
    Claimdate,
    Thirdparty,
    InsuranceFollowup,
  },
  data: () => ({
    e1: 1,
    isNewDepartment: false,
    isEditable: false,
    switch1: false,
    ClaimOrIncidentValue: "Claim",
    departmentID: "",
    modal: false,
    createdOrEdited:"CREATING",
  }),
  mounted() {
    document.title = "Claim";

    this.initialize();
  },
  computed: {
    formTitle() {},
    ...mapGetters([
      "getTypeOfEquipments",
      "getbrands",
      "getnatureOfDamages",
      "getdepartements",
      "geteditedOrSavedClaimContainer",
    ]),
  },
  watch: {},
  created() {
    // this.initialize();
  },
  methods: {
    initialize() {
      if (this.geteditedOrSavedClaimContainer.id > 0) {
        this.createdOrEdited="Editing";

        if (this.geteditedOrSavedClaimContainer.ClaimOrIncident == "Incident") {
          this.switch1 = true;
        } else {
          this.switch1 = false;
        }
      }
    },
    ...mapActions([
      "set_ClaimOrIncident_claim_SetterAction",
      "editedOrSavedContainerClaimAction",
    ]),

    ClaimOrIncident() {
      if (this.switch1 == false) {
        this.ClaimOrIncidentValue = "Claim";
      } else {
        this.ClaimOrIncidentValue = "Incident";
      }
      this.set_ClaimOrIncident_claim_SetterAction(
        this.ClaimOrIncidentValue
      ).then(() => {});
    },
    editedOrSavedClaim() {
      console.log("this.geteditedOrSavedClaimContainer",this.geteditedOrSavedClaimContainer);
      this.editedOrSavedContainerClaimAction(this.geteditedOrSavedClaimContainer).then(() => {
        console.log("save", "save");
      });
    },
    stepper_backward() {
      if (
        this.geteditedOrSavedClaimContainer.damage_caused_by == "Thirdparty"
      ) {
        if (this.e1 == 3) {
          this.e1 = parseInt(this.e1 + "") - 1;
        } else {
          this.e1 = parseInt(this.e1 + "") - 1;
        }
      } else {
        if (this.e1 == 4) {
          this.e1 = parseInt(this.e1 + "") - 2;
        } else {
          this.e1 = parseInt(this.e1 + "") - 1;
        }
      }
    },
    stepper_forward() {
      if (
        this.geteditedOrSavedClaimContainer.damage_caused_by == "Thirdparty"
      ) {
        if (this.e1 == 3) {
          this.e1 = parseInt(this.e1 + "") + 1;
        } else {
          this.e1 = parseInt(this.e1 + "") + 1;
        }
      } else {
        if (this.e1 == 2) {
          this.e1 = parseInt(this.e1 + "") + 2;
        } else {
          this.e1 = parseInt(this.e1 + "") + 1;
        }
      }
    },
  },
};
</script>
