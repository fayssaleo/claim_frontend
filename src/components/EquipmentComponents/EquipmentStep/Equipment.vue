<template>
  <div>
    <v-card class="mb-12" color="#f0f0f0cc" height="auto">
      <template>
        <v-container fluid>
          <v-row align="center">
            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                :items="typeOfEquipments"
                item-text="name"
                item-value="id"
                label="Type of the equipment :"
                dense
                outlined
                v-model="EquipmentModel.type_of_equipment.id"
              ></v-select>
            </v-col>
            <v-col
              v-if="EquipmentModel.type_of_equipment.id == 0"
              class="d-flex"
              cols="12"
              sm="6"
            >
              <v-text-field
                label="Type of the equipment name :"
                outlined
                v-model="EquipmentModel.type_of_equipment.name"
                class="mr-2"
              ></v-text-field>
            </v-col>

            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                :items="brands"
                item-text="name"
                item-value="id"
                v-model="EquipmentModel.brand.id"
                label="Brand of the equipment :"
                dense
                outlined
              ></v-select>
            </v-col>
            <v-col
              v-if="EquipmentModel.brand.id == 0"
              class="d-flex"
              cols="12"
              sm="6"
            >
              <v-text-field
                label="Brand name :"
                outlined
                v-model="EquipmentModel.brand.name"
                class="mr-2"
              ></v-text-field>
            </v-col>

            <v-col class="d-flex" cols="12" sm="6">
              <v-text-field
                label="Category of the equipment :"
                outlined
                v-model="EquipmentModel.categorie_of_equipment"
              ></v-text-field>
            </v-col>

            <v-col class="d-flex" cols="12" sm="6">
              <v-text-field
                label="Equipement Registration"
                outlined
                v-model="EquipmentModel.equipement_registration"
              ></v-text-field>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                :items="natureOfDamages"
                item-text="name"
                item-value="id"
                v-model="EquipmentModel.nature_of_damage.id"
                label="Nature of damages :"
                dense
                outlined
              ></v-select>
            </v-col>
            <v-col
              v-if="EquipmentModel.nature_of_damage.id == 0"
              class="d-flex"
              cols="12"
              sm="6"
            >
              <v-text-field
                label="Nature of damage name :"
                outlined
                v-model="EquipmentModel.nature_of_damage.name"
                class="mr-2"
              ></v-text-field>
              <v-textarea
                clearable
                outlined
                clear-icon="mdi-close-circle"
                label="Nature of damage comment"
                v-model="EquipmentModel.nature_of_damage_comment"
                value=""
              ></v-textarea>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
              <v-text-field
                label=" Cause of damage:"
                outlined
                v-model="EquipmentModel.cause_damage"
              ></v-text-field>
            </v-col>

            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                multiple
                :items="departments"
                item-text="name"
                item-value="id"
                v-model="EquipmentModel.department"
                label="Concerned internal department :"
                dense
                outlined
                @change="changedepartmentSELECT()"
              ></v-select>
              <v-text-field
                class="mx-2"
                label="Concerned internal department :"
                outlined
                v-if="isNewDepartment"
              ></v-text-field>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                :items="Damage_caused_by"
                label="Damage caused by :"
                v-model="EquipmentModel.damage_caused_by"
                dense
                outlined
                @change="change_Damage_caused_by_SELECT()"
              ></v-select>
            </v-col>
            <v-col
              v-if="geteditedOrSavedClaimEquipment.damage_caused_by != ''"
              class="d-flex light-blue lighten-4 pa-6"
              cols="12"
              sm="12"
            >
              <v-row
                v-if="this.EquipmentModel.damage_caused_by == 'TangerAlliance'"
              >
                <h5>Tanger Alliance :</h5>
                <v-col class="d-flex align-baseline" cols="12" sm="12">
                  <v-text-field
                    label="name(s) of the persons :"
                    outlined
                    v-model="personName"
                  ></v-text-field>
                  <v-icon
                    large
                    class="mx-8"
                    color=" black darken-2"
                    @click="addpersonsTAT()"
                  >
                    mdi-plus
                  </v-icon>
                  <v-select
                    :style="[
                      personsList.length > 0
                        ? { visibility: 'visible' }
                        : { visibility: 'hidden' },
                    ]"
                    v-model="personsListDONE"
                    :items="personsList"
                    chips
                    label="Persons"
                    multiple
                    outlined
                  ></v-select>
                </v-col>
              </v-row>
              <v-row
                v-else-if="this.EquipmentModel.damage_caused_by == 'Outsourcer'"
              >
                <h5>Outsourcer :</h5>
                <v-col class="d-flex" cols="12" sm="6">
                  <v-select
                    :items="Damage_caused_by"
                    label="Company name :"
                    v-model="Damage_caused_by_value"
                    dense
                    outlined
                  ></v-select>
                </v-col>
              </v-row>
              <v-row v-else>
                <h5>Third party</h5>
                <v-col class="d-flex" cols="12" sm="5">
                  <v-select
                    :items="Damage_caused_by"
                    label="Company name :"
                    v-model="Damage_caused_by_value"
                    dense
                    outlined
                  ></v-select>
                </v-col>
                <v-col class="d-flex" cols="12" sm="5">
                  <v-textarea
                    clearable
                    rows="3"
                    outlined
                    clear-icon="mdi-close-circle"
                    label="Comment"
                    value=""
                  ></v-textarea>
                </v-col>
              </v-row>
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
      Damage_caused_by: ["TangerAlliance", "Outsourcer", "Thirdparty"],
      typeOfEquipments: [],
      natureOfDamages: [],
      departments: [],
      brands: [],
      personsList: [],
      personsListDONE: [],
      personName: "",
      EquipmentModel: {
        categorie_of_equipment: "",
        equipement_registration: "",
        nature_of_damage_comment: "",
        cause_damage: "",
        damage_caused_by: "",
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
      },
      Damage_caused_by_value: "",
      isDamage_caused_by_value: false,
      isNewDepartment: false,
      isOtherNatureOfDamage: false,
    };
  },

  mounted() {
    document.title = "Claim";

    this.initialize();
  },
  computed: {
    formTitle() {},
    ...mapGetters([
      "geteditedOrSavedClaimEquipment",
      "getTypeOfEquipments",
      "getbrands",
      "getnatureOfDamages",
      "getdepartements",
      "geteditedOrSavedClaimEquipment",
    ]),
  },
  watch: {
    EquipmentModel: {
      deep: true,
      handler(newValue, oldvalue) {
        this.set_equipment_claim_SetterAction(newValue).then(() => {});
      },
    },
  },
  created() {
    // this.initialize();
  },
  methods: {
    initialize() {
      this.setTypeOfEquipmentsAction().then(() => {
        this.typeOfEquipments = [...this.getTypeOfEquipments];
        var model = {
          id: 0,
          name: "Others",
        };
        this.typeOfEquipments.push(model);
      });
      this.setbrandsAction().then(() => {
        this.brands = [...this.getbrands];
        var model = {
          id: 0,
          name: "Others",
        };
        this.brands.push(model);
      });
      this.setnatureOfDamagesAction().then(() => {
        this.natureOfDamages = [...this.getnatureOfDamages];
        var model = {
          id: 0,
          name: "Others",
        };
        this.natureOfDamages.push(model);
      });
      this.setDepartementsAction().then(() => {
        this.departments = [...this.getdepartements];
       
      });

      if (this.geteditedOrSavedClaimEquipment.id > 0) {
        console.log(
          "this.geteditedOrSavedClaimEquipment.categorie_of_equipment",
          this.geteditedOrSavedClaimEquipment
        );
        this.EquipmentModel.categorie_of_equipment =
          this.geteditedOrSavedClaimEquipment.categorie_of_equipment;

        this.EquipmentModel.brand.id =
          this.geteditedOrSavedClaimEquipment.brand.id;
        this.EquipmentModel.nature_of_damage.id =
          this.geteditedOrSavedClaimEquipment.nature_of_damage.id;
        this.EquipmentModel.cause_damage =
          this.geteditedOrSavedClaimEquipment.cause_damage;
        this.EquipmentModel.equipement_registration =
          this.geteditedOrSavedClaimEquipment.equipement_registration;
        this.EquipmentModel.type_of_equipment.id =
          this.geteditedOrSavedClaimEquipment.type_of_equipment.id;

        this.EquipmentModel.damage_caused_by =
          this.geteditedOrSavedClaimEquipment.damage_caused_by;
      }
    },
    ...mapActions([
      "setTypeOfEquipmentsAction",
      "setbrandsAction",
      "setnatureOfDamagesAction",
      "setDepartementsAction",
      "set_equipment_claim_SetterAction",
    ]),
    changedepartmentSELECT() {
      this.isNewDepartment = false;
      this.EquipmentModel.department.map((c) => {
        if (c == 0) this.isNewDepartment = true;
      });
    },
    change_Damage_caused_by_SELECT() {
      this.isDamage_caused_by_value = true;
      if (this.EquipmentModel.damage_caused_by == "Thirdparty") {
        this.isEditable = true;
      } else {
        this.isEditable = false;
      }
      //this.EquipmentModel.damage_caused_by = this.Damage_caused_by_value;
    },
    addpersonsTAT() {
      this.personsList.push(this.personName);
      this.personName = "";
    },
  },
};
</script>
