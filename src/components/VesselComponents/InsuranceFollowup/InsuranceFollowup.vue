<template>
  <div>
    <h4>Insurance declaration :</h4>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="4">
        <v-menu
          ref="menu2"
          v-model="menu2"
          :close-on-content-click="false"
          :return-value.sync="date2"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="insurance_followup.date_of_declaration"
              label="Date of declaration"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="insurance_followup.date_of_declaration"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu2 = false"> Cancel </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu2.save(insurance_followup.date_of_declaration)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>

      <v-col class="d-flex" cols="12" sm="4">
        <v-menu
          ref="menu3"
          v-model="menu3"
          :close-on-content-click="false"
          :return-value.sync="date3"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="insurance_followup.date_of_feedback"
              label="Date of feedback "
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="insurance_followup.date_of_feedback"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu3 = false"> Cancel </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu3.save(insurance_followup.date_of_feedback)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col class="d-flex" cols="12" sm="4">
        <v-text-field
          v-model="insurance_followup.comment_Insurance"
          label="Comment :"
          outlined
        ></v-text-field>
      </v-col>
      <v-col class="d-flex" cols="12" sm="4">
              <v-file-input
                label="Insurance declaration :"
              ></v-file-input>
            </v-col>
    </v-row>
    <v-divider class="ma-2"></v-divider>
    <h4>Indemnisation :</h4>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-text-field
          v-model="insurance_followup.Indemnification_of_insurer"
          label="Indemnification of the insurer :"
          outlined
        ></v-text-field>
      </v-col>

      <v-col class="d-flex" cols="12" sm="6">
        <v-select
          :items="currency_list"
          item-text="name"
          item-value="code"
          label="Currency :"
          v-model="insurance_followup.currency_indemnisation"
          dense
          outlined
        ></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="4">
        <v-menu
          ref="menu4"
          v-model="menu4"
          :close-on-content-click="false"
          :return-value.sync="date4"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="insurance_followup.Complementary_indemnification"
              label="Date of Complementary indemnification"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="insurance_followup.Complementary_indemnification"
            no-title
            scrollable
          >
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu4 = false"> Cancel </v-btn>
            <v-btn
              text
              color="primary"
              @click="
                $refs.menu4.save(
                  insurance_followup.Complementary_indemnification
                )
              "
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>

      <v-col class="d-flex" cols="12" sm="6">
        <v-text-field
          v-model="insurance_followup.deductible_charge_TAT"
          label="Deductible in charge of TAT :"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  components: {},

  data() {
    return {
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      date3: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      date4: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu2: false,

      menu3: false,
      menu4: false,

      insurance_followup: {
        date_of_declaration: null,
        date_of_feedback: "",
        comment_Insurance: "",
        Indemnification_of_insurer: null,
        currency_indemnisation: null,
        deductible_charge_TAT: null,
        Complementary_indemnification: null,
      },
      currency_list: [
        { name: "Moroccan Dirham", code: "MAD", symbol: "MAD", id: 1 },
        { name: "British Pound Sterling", code: "GBP", symbol: "£", id: 2 },
        { name: "Canadian Dollar", code: "CAD", symbol: "$", id: 3 },
        { name: "Chinese Yuan", code: "CNY", symbol: "¥", id: 4 },
        { name: "Euro", code: "EUR", symbol: "€", id: 5 },
        { name: "Hong Kong Dollar", code: "HKD", symbol: "$", id: 6 },
        { name: "Japanese Yen", code: "JPY", symbol: "¥", id: 7 },
        { name: "New Zealand Dollar", code: "NZD", symbol: "$", id: 8 },
        { name: "Swiss Franc", code: "CHF", symbol: "CHf", id: 9 },
        { name: "US Dollar", code: "USD", symbol: "$", id: 10 },
        { name: "Australian Dollar", code: "AUD", symbol: "$", id: 11 },
      ],
    };
  },

  mounted() {
    document.title = "Claim";

    this.initialize();
  },
  computed: {
    formTitle() {},
    ...mapGetters(["geteditedOrSavedClaimVessel"]),
  },
  watch: {
    insurance_followup: {
      deep: true,
      handler(newValue, oldvalue) {
        this.set_insurance_followup_vessel_claim_SetterAction(newValue).then(() => {});
      },
    },
  },
  created() {
    // this.initialize();
  },
  methods: {
    initialize() {
      if (this.geteditedOrSavedClaimVessel.id > 0) {
        this.insurance_followup.date_of_declaration =
          this.geteditedOrSavedClaimVessel.date_of_declaration;
        this.insurance_followup.date_of_feedback =
          this.geteditedOrSavedClaimVessel.date_of_feedback;

        this.insurance_followup.comment_Insurance =
          this.geteditedOrSavedClaimVessel.comment_Insurance;

        this.insurance_followup.Indemnification_of_insurer =
          this.geteditedOrSavedClaimVessel.Indemnification_of_insurer;

        this.insurance_followup.currency_indemnisation =
          this.geteditedOrSavedClaimVessel.currency_indemnisation;

        this.insurance_followup.deductible_charge_TAT =
          this.geteditedOrSavedClaimVessel.deductible_charge_TAT;

        this.insurance_followup.Complementary_indemnification =
          this.geteditedOrSavedClaimVessel.Complementary_indemnification;
      }
    },
    ...mapActions(["set_insurance_followup_vessel_claim_SetterAction"]),
  },
};
</script>
