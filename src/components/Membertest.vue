<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
<br>

<v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn color="primary" dark slot="activator">Open Dialog</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal first name" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal last name" hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  label="Age"
                  required
                  :items="['0-17', '18-29', '30-54', '54+']"
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  label="Interests"
                  multiple
                  autocomplete
                  chips
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

<br>
<v-data-table
      v-bind="showPayments" 
      v-bind:headers="headers"
      :items="memberPayments"
      class="elevation-1"
      hide-actions
    >
    <template slot="items" slot-scope="props">
      <td class="text-xs-right"></td>
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
        {
          text: 'Pagos Realizados',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Mes Pagado', value: 'date' },
        { text: 'Membresía', value: 'membership' },
        { text: 'Monto', value: 'cost' }
      ]
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
    addPayment: function() {
      this.$firestore.payments.add(this.newPayment);
      this.$validator.validateAll();
      this.snackbar = true;
    }
  }
};
</script>

<style scoped>
.gender {
  font-size: 22px;
}
</style>