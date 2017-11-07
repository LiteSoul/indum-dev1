<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
<br>
<br>
			<v-list>
				<v-subheader>Pagos realizados:</v-subheader>
        <div v-bind="showPayments">
          <div v-for="pay in memberPayments">
            {{pay.cost}}
          </div>
        </div>
			</v-list>

<br>
<br>
<v-data-table
      v-bind:headers="headers"
      :items="memberPayments"
      class="elevation-1"
      hide-actions
    >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.date }}</td>
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
          text: 'Pagos Realizados blablabla blabla',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Corresponde a', value: 'date' },
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