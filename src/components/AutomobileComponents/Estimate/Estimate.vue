<template>
  <div style="padding: 5px">
    <v-data-table
      :headers="headers"
      :items="estimates"
      sort-by="item.id"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Estimate</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                Add Estimate
              </v-btn>
            </template>
            <v-card>
              <v-toolbar dark color="primary">
                <v-btn icon dark @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Settings</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                  <v-btn dark text @click="dialog = false"> Save </v-btn>
                </v-toolbar-items>
              </v-toolbar>
              <template>
                <v-container fluid>
                  <v-row align="center">
                    <v-col class="d-flex" cols="12" sm="4">
                      <v-card class="d-flex pa-4" outlined>
                        <h5 class="green--text text--lighten-2">Temporary</h5>
                        <v-switch
                          color="deep-orange lighten-1"
                          v-model="switch1"
                          @change="TemporaryOrPermanent()"
                        ></v-switch>
                        <h5 class="deep-orange--text text--lighten-1">
                          Permanent
                        </h5>
                      </v-card>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="4">
                      <v-file-input outlined label="File input"></v-file-input>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="4">
                      <v-card
                        class="mx-auto"
                        max-width="240"
                        max-height="130"
                        min-height="130"
                        outlined
                      >
                        <v-list-item three-line class="d-flex">
                          <v-list-item-content>
                            <div
                              class="text-overline mb-4 teal--text lighten-1--text"
                            >
                              Estimate amount
                            </div>
                            <v-list-item-title
                              class="text-h5 mb-1 teal--text darken-4--text"
                            >
                              444444 DH
                            </v-list-item-title>
                          </v-list-item-content>

                          <v-list-item-avatar tile size="35" color="white">
                            <v-icon color="teal lighten-1" large>
                              mdi-cash-multiple
                            </v-icon></v-list-item-avatar
                          >
                        </v-list-item>
                      </v-card>
                    </v-col>
                  </v-row>
                  <v-row class="pa-4 ma-2 grey lighten-3">
                    <v-col class="d-flex" cols="12" sm="4">
                      <v-text-field
                        label="Equipment purchase costs"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="4">
                      <v-text-field
                        label="Equipment purchase costs"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="4">
                      <v-text-field
                        label="Installation and facilities costs "
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="4">
                      <v-text-field
                        label="Transportation costs"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <Inputs
                      v-for="item in textFields"
                      :key="item.id"
                      :refreshInputEstimate="refreshInputEstimate"
                      :input_item="item"
                    />
                  </v-row>
                  <v-row class="pa-4 ma-2">
                    <h3>Others :</h3>
                    <v-col class="d-flex" cols="12" sm="8">
                      <v-text-field
                        label="Name new valuation"
                        v-model="textFieldModel.name"
                        outlined
                      ></v-text-field>
                      <v-text-field
                        v-model="textFieldModel.value"
                        class="mx-2"
                        label="value valuation"
                        outlined
                      ></v-text-field>
                      <v-btn
                        color="primary"
                        class="mr-2 white--text"
                        @click="addOthers()"
                      >
                        <v-icon left> mdi-plus </v-icon>
                        Add
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </template>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="confirmAddSave" max-width="500px">
            <v-card>
              <v-card-title class="text-h5" v-if="editedIndex == -1"
                >Are you sure you want to add this item?</v-card-title
              >
              <v-card-title class="text-h5" v-else
                >Are you sure you want to update this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeAddSaveDialog"
                  >No</v-btn
                >
                <v-btn color="blue darken-1" text @click="save">Yes</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize()"> Reset </v-btn>
      </template>
    </v-data-table>
    <LoadingPage v-if="LoadingPage == true" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Inputs from "./Inputs.vue";
export default {
  components: {
    Inputs,
  },

  data: () => ({
    dialog: false,
    dialogDelete: false,
    switch1: false,
    headers: [
      { text: "id", align: "start", value: "estimate.id", sortable: true },
      {
        text: "Temporary or Permanent",
        value: "estimate.temporary_or_permanent",
        sortable: true,
      },
      { text: "Estimate amount", value: "estimate_amount", sortable: true },
      { text: "Currency", value: "estimate.currency_estimate", sortable: true },
      { text: "Estimate date", value: "estimate.created_at", sortable: true },

      { text: "Actions", value: "actions", sortable: false },
    ],
    estimates: [],
    editedIndex: -1,
    estimateDelete: null,
    estimateUpdate: null,
    editedItem: {
      id: 0,
      temporary_or_permanent: "Temporary",
      equipment_purchase_costs: 0,
      installation_and_facilities_costs: 0,
      rransportation_costs: 0,
      equipment_id: null,
      currency_estimate: "",
    },
    defaultItem: {
      id: 0,
      equipment_purchase_costs: 0,
      installation_and_facilities_costs: 0,
      rransportation_costs: 0,
      equipment_id: null,
      currency_estimate: "",
      temporary_or_permanent: "Temporary",
    },
    isAdd: true,
    AmountList: [],
    totalAmount: 0,
    confirmAddSave: false,
    activePicker: null,
    date: null,
    menu: false,
    textFields: [],
    textFieldModel: {
      id: null,
      name: "",
      value: null,
    },
    file:[],
    incrument: 8999,
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
  }),
  mounted() {
    document.title = "Claim";

    this.initialize();
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Department" : "Edit Department";
    },
    ...mapGetters(["getestimates", "geteditedOrSavedClaimEquipment"]),
  },
  watch: {
    dialog(val) {
      if (this.editedIndex == -1) {
        this.editedIndex = -1;
        this.editedItem = {
          id: 0,
          equipment_purchase_costs: 0,
          installation_and_facilities_costs: 0,
          rransportation_costs: 0,
          equipment_id: null,
          currency_estimate: "",
        };
      }
      val || this.close();
    },
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
    editedItem: {
      deep: true,
      handler(newValue, oldvalue) {
        this.TotalAmount();
      },
    },
    textFields: {
      deep: true,
      handler(newValue, oldvalue) {
        this.SUM();
      },
    },
  },
  created() {
    // this.initialize();
  },
  methods: {
    initialize() {
      this.setestimatesAction().then(() => {
        this.estimates = [...this.getestimates];
      });
      let numOr0 = (n) => (isNaN(n) ? 0 : n);
    },
    ...mapActions([
      "setestimatesAction",
      "editestimateAction",
      "deleteestimateAction",
      "addestimateAction",
    ]),
    TotalAmount() {
      let numOr0 = (n) => (isNaN(n) ? 0 : n);

      this.AmountList = [];
      this.totalAmount = 0;
      this.AmountList.push(
        numOr0(parseFloat(this.editedItem.equipment_purchase_costs))
      );
      this.AmountList.push(
        numOr0(parseFloat(this.editedItem.installation_and_facilities_costs))
      );
      this.AmountList.push(
        numOr0(parseFloat(this.editedItem.rransportation_costs))
      );
      this.textFields.map((x) => {
        this.AmountList.push(numOr0(parseFloat(x.value)));
      });
      this.SUM();
    },
    SUM() {
      this.totalAmount = 0;

      this.AmountList.map((x) => {
        this.totalAmount = x + this.totalAmount;
      });
    },
    TemporaryOrPermanent() {
      if (this.switch1 == false) {
        this.editedItem.temporary_or_permanent = "Temporary";
      } else {
        this.editedItem.temporary_or_permanent = "Permanent";
      }
    },
    addEstimate() {
      this.editedItem.equipment_id = this.geteditedOrSavedClaimEquipment.id;
      this.TemporaryOrPermanent();
      this.addestimateAction(this.editedItem).then(() => {
        this.estimates = [...this.getestimates];
        this.editedItem.equipment_purchase_costs = "";
        this.editedItem.installation_and_facilities_costs = "";
        this.editedItem.rransportation_costs = "";
        this.editedItem.equipment_id = null;
        this.editedItem.currency_estimate = "";
        this.editedItem.id = 0;
      });
    },
    updateEstimate() {
      this.editedItem.equipment_id = this.geteditedOrSavedClaimEquipment.id;
      this.TemporaryOrPermanent();
      var modelUpdate ={
        estimate: {
          id: this.editedItem.id ,
          temporary_or_permanent: this.editedItem.temporary_or_permanent,
          equipment_purchase_costs: this.editedItem.equipment_purchase_costs,
          installation_and_facilities_costs: this.editedItem.installation_and_facilities_costs,
          rransportation_costs: this.editedItem.rransportation_costs,
          equipment_id: this.editedItem.equipment_id,
          currency_estimate: this.editedItem.currency_estimate,
        },
        estimate_amount: this.totalAmount,
      };

      this.editestimateAction(modelUpdate).then(() => {
        this.estimates = [...this.getestimates];

        this.editedItem.equipment_purchase_costs = "";
        this.editedItem.installation_and_facilities_costs = "";
        this.editedItem.rransportation_costs = "";
        this.editedItem.equipment_id = null;
        this.editedItem.currency_estimate = "";
        this.editedItem.id = 0;
      });
      this.dialog = false;

      this.isAdd = true;
    },
    editItem(item) {
      this.editedIndex = this.estimates.indexOf(item) + 1;
      // this.editedItem = Object.assign({}, item);
      if (item.estimate.temporary_or_permanent == "Temporary") {
        this.switch1 = false;
      } else {
        this.switch1 = true;
      }

      this.estimateUpdate = item;
      this.editedItem.equipment_purchase_costs =
        item.estimate.equipment_purchase_costs;
      this.editedItem.installation_and_facilities_costs =
        item.estimate.installation_and_facilities_costs;
      this.editedItem.rransportation_costs = item.estimate.rransportation_costs;
      this.editedItem.equipment_id = item.estimate.equipment_id;
      this.editedItem.currency_estimate = item.estimate.currency_estimate;
      this.editedItem.temporary_or_permanent =
        item.estimate.temporary_or_permanent;
      this.editedItem.id = item.estimate.id;

      this.dialog = true;
      this.isAdd = false;
    },
    deleteItem(item) {
      this.estimateDelete = item;
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    addeItem(item) {
      this.isAdd = true;
      //this.dialog = true;
      this.addEstimate();
    },
    deleteItemConfirm() {
      console.log("estimateDelete", this.estimateDelete);
      this.deleteestimateAction(this.estimateDelete).then(() => {
        this.estimates = [...this.getestimates];
      });
      // this.LoadingPage = true;

      setTimeout(() => {
        // this.LoadingPage = false;
      }, 2000);
      this.closeDelete();
    },
    close() {
      this.editedIndex = -1;
      this.dialog = false;
    },
    closeDelete() {
      this.dialogDelete = false;
    },
    closeAddSaveDialog() {
      this.confirmAddSave = false;
    },
    openSave() {
      this.confirmAddSave = true;
    },
    addclaimRoute() {
      this.$router.push({ name: "Addclaim" });
    },
    save() {
      if (this.isAdd == true) {
        this.addeItem();
        this.isAdd = false;
        console.log("add", "");
        setTimeout(() => {
          //this.LoadingPage = false;
        }, 2000);
        //this.closeAddSaveDialog();
      } else {
        this.updateEstimate();

        console.log("update", "");
        //this.LoadingPage = true;

        setTimeout(() => {
          //this.LoadingPage = false;
        }, 2000);
        // this.closeAddSaveDialog();
      }

      this.close();
    },
    refreshInputEstimate(id) {
      this.textFields = this.textFields.filter((c) => c.id != id);
      console.table(this.textFields);
      this.TotalAmount();
    },
    addOthers() {
      let numOr0 = (n) => (isNaN(n) ? 0 : n);

      this.incrument = parseInt(this.incrument + 1);
      var model = {
        id: this.incrument,
        name: this.textFieldModel.name,
        value: this.textFieldModel.value,
      };
      this.AmountList.push(numOr0(parseFloat(this.textFieldModel.value)));
      this.textFields.push(model);
      this.textFieldModel.name = "";
      this.textFieldModel.value = "";
    },
    addFile() {

      var formData = new FormData();
      formData.append("estimate_id", parseFloat(this.editedItem.id));
      formData.append("filename", this.photo.description);

      formData.append("file[]", file);

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
  },
};
</script>
