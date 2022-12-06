<template>
  <div>
    <v-card class="mb-12" color="#f0f0f0cc" height="auto">
      <template>
        <v-container fluid>
          <v-row align="center">
            <v-col class="d-flex" cols="12" sm="4">
              <v-text-field
                v-model="thirdparty.amount"
                label="Amount :"
                outlined
              ></v-text-field>
            </v-col>

            <v-col class="d-flex" cols="12" sm="4">
              <v-select
                :items="currency_list"
                item-text="name"
                item-value="code"
                label="Currency :"
                v-model="thirdparty.currency"
                dense
                outlined
              ></v-select>
            </v-col>
            <v-col class="d-flex" cols="12" sm="4">
              <v-text-field
                v-model="thirdparty.comment_third_party"
                label="Comment :"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4"> </v-col>
            <v-col class="d-flex" cols="12" sm="4">
              <v-dialog
                ref="dialog"
                v-model="modal"
                :return-value.sync="date"
                persistent
                width="300px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="thirdparty.date_of_reimbursement"
                    label="Date of reimbursement :"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="thirdparty.date_of_reimbursement"
                  scrollable
                >
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog.save(thirdparty.date_of_reimbursement)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-dialog>
            </v-col>
            <v-col cols="12" sm="4"> </v-col>
            <v-col class="d-flex" cols="12" sm="4">
              <v-text-field
                v-model="thirdparty.reinvoiced"
                label="reinvoiced  :"
                outlined
              ></v-text-field>
            </v-col>

            <v-col class="d-flex" cols="12" sm="4">
              <v-text-field
                v-model="thirdparty.Invoice_number"
                label="Invoice number :"
                outlined
              ></v-text-field>
            </v-col>
            <v-col class="d-flex" cols="12" sm="4">
              <v-text-field
                v-model="thirdparty.reimbursed_amount"
                label="Reimbursed amount :"
                outlined
              ></v-text-field>
            </v-col>
            <v-col class="d-flex" cols="12" sm="4">
              <v-file-input
                label="Liability letter"
                v-model="model_Liabilityletter.Liabilityletter"
              ></v-file-input>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  components: {},

  data() {
    return {
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
      date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu2: false,
      thirdparty: {
        amount: null,
        currency: "",
        comment_third_party: "",
        reinvoiced: null,
        date_of_reimbursement: null,
        Invoice_number: null,
        reimbursed_amount: null,
      },
      model_Liabilityletter: {
        claim_id: null,
        Liabilityletter: null,
      },
    };
  },

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
  watch: {
    thirdparty: {
      deep: true,
      handler(newValue, oldvalue) {
        this.set_thirdparty_container_claim_SetterAction(newValue).then(() => {});
      },
    },
  },
  created() {
    // this.initialize();
  },
  methods: {
    initialize() {
      if (this.geteditedOrSavedClaimContainer.id > 0) {
        this.thirdparty.amount = this.geteditedOrSavedClaimContainer.amount;
        this.thirdparty.currency = this.geteditedOrSavedClaimContainer.currency;
        this.thirdparty.comment_third_party =
          this.geteditedOrSavedClaimContainer.comment_third_party;
        this.thirdparty.reinvoiced =
          this.geteditedOrSavedClaimContainer.reinvoiced;
        this.thirdparty.date_of_reimbursement =
          this.geteditedOrSavedClaimContainer.date_of_reimbursement;
        this.thirdparty.Invoice_number =
          this.geteditedOrSavedClaimContainer.Invoice_number;
        this.thirdparty.reimbursed_amount =
          this.geteditedOrSavedClaimContainer.reimbursed_amount;
      }
    },
    sendLiabilityletter() {
      this.photo.foreman_id = this.getUserActive.id;

      var formData = new FormData();
      formData.append(
        "claim_id",
        parseFloat(this.model_Liabilityletter.claim_id)
      );
      formData.append(
        "Liabilityletter",
        this.model_Liabilityletter.Liabilityletter
      );

      this.sendDamagePhotosStoragePathAction(formData)
        .then((resolve) => {
          this.LoadingPage = true;

          setTimeout(() => {
            this.LoadingPage = false;
            swal("Good job!", "success", "success");
          }, 2000);
        })
        .catch(() => {
          swal("Error", "", "error");
        });

      this.dialogimage = false;
    },
    ...mapActions(["set_thirdparty_container_claim_SetterAction"]),
  },
};
</script>
