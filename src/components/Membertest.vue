<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
<br>
<v-btn @click="pushRedirect" color="primary">push redirect</v-btn>

<v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn color="primary" dark slot="activator">Agregar Pago</v-btn>
      
      <v-card>
        <v-card-title>
          <span class="headline">Agregar Nuevo Pago</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>

<v-flex xs11 sm5>
      <v-dialog
        persistent
        v-model="modal"
        lazy
        full-width
      >
        <v-text-field
          slot="activator"
          label="Mes de Pago"
          v-model="newPayment.date"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker type="month" v-model="newPayment.date" scrollable actions>
          <template slot-scope="{ save, cancel }">
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
              <v-btn flat color="primary" @click="save">OK</v-btn>
            </v-card-actions>
          </template>
        </v-date-picker>
      </v-dialog>
    </v-flex>

				<v-flex xs12 sm6>
					<v-select
						v-bind:items="membershipOptions"
						v-model="newPayment.membership"
						label="Membresía"
						:error-messages="errors.collect('membership')"
						v-validate="'required'"
						data-vv-name="membership"
						required
					></v-select>
				</v-flex>
				<v-flex xs12 sm6>
					<v-slider
						color="indigo"
						label="Monto"
						hint="Cantidad en pesos"
						min="200"
						max="800"
						thumb-label
						step="50"
						snap
						v-model="newPayment.cost"
					></v-slider>
				</v-flex>


            </v-layout>
          </v-container>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

        <v-btn color="blue darken-1" flat @click.native="dialog = false">Cancelar</v-btn>

				<v-btn @click="addPayment" color="indigo" dark>Confirmar Pago</v-btn>
				
          </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar
					:timeout="5000"
					top
					mode="vertical"
					v-model="snackbar"
				>El pago ha sido confirmado
      	<v-btn flat color="pink" @click.native="snackbar = false">
        Cerrar</v-btn>
    		</v-snackbar>

<br>
<br>
<v-data-table
      v-bind="showPayments" 
      v-bind:headers="headers"
      :items="memberPayments"
      class="elevation-1"
      hide-actions
    >
    <template slot="items" slot-scope="props">
      <td class="text-xs-right">{{ props.item.date }}</td>
      <td class="text-xs-right">{{ props.item.membership }}</td>
      <td class="text-xs-right">{{ props.item.cost }}</td>
    </template>
  </v-data-table>

    </v-flex>


  </v-layout>
</template>

<script>
import { fs } from "../firebase";
// import Router from "../router";

export default {
  firestore() {
    return {
      members: fs.collection("members"),
      payments: fs.collection("payments"),
      payerQuery: fs
        .collection("payments")
        .where("member", "==", this.$route.params.id)
    };
  },
  data() {
    return {
      snackbar: false,
      menu: false,
      modal: false,
      currentMember: {},
      membershipOptions: [
        "Musculación",
        "Crossfit",
        "Boxeo",
        "Kickboxing",
        "Defensa Personal",
        "GAP",
        "Pase Libre",
        "Medio Mes"
      ],
      newPayment: {
        date: null,
        membership: "",
        cost: "",
        member: this.$route.params.id
      },
      memberPayments:[],
      headers: [
        // {
        //   text: 'Pagos Realizados',
        //   align: 'left',
        //   sortable: false,
        //   value: 'name'
        // },
        { text: 'Fecha', value: 'date' },
        { text: 'Membresía', value: 'membership' },
        { text: 'Monto', value: 'cost' }
      ],
      dialog: false
    };
  },
  computed: {
    showSnapshot() {
      // var thisRef = fs.collection("members").doc(this.$route.params.id);
      var thisRef = this.$firestore.members.doc(this.$route.params.id);
      var getMember = thisRef.onSnapshot(member => {
        // console.log("Document data:", member.data());
        // console.log(this.$route.params.id);
        this.currentMember = member.data();
      });
    },
    showPayments() {
      this.$firestore.payerQuery.onSnapshot(querySnapshot => {
        querySnapshot.docs.map(documentSnapshot => {
          this.memberPayments.push(documentSnapshot.data())
        });
      });
    }
  },
  methods: {
    addPayment() {
      this.$firestore.payments.add(this.newPayment);
      this.$validator.validateAll();
      this.snackbar = true;
      this.dialog = false;
      // this.$router.replace(`/${this.$route.params.id}`)
      // this.$router.go(-1)
    },
    pushRedirect(){
      console.log(this.memberPayments)
    }
  }
};
</script>

<style scoped>
.gender {
  font-size: 22px;
}
</style>