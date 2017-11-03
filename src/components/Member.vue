<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media src="../static/img/profile-placeholder.png" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>

						<h3 v-bind="showSnapshot" class="headline mb-0">{{currentMember.lastname}}, {{currentMember.firstname}}
              <span>
                <v-chip v-if="currentMember.gender==='Hombre'" small color="blue lighten-4" class="ml-0 gender">
                  &#9794;</v-chip>
                <v-chip v-else small color="red lighten-4" class="ml-0 gender">
                  &#9792;</v-chip>
              </span>
            </h3>
            <v-chip color="orange" text-color="black">
              <v-icon left>star</v-icon>
              {{currentMember.membership}}
            </v-chip>
            <v-chip color="brown" text-color="white">
              <v-icon left>cake</v-icon>
              {{currentMember.birth.day}}/{{currentMember.birth.month}}/{{currentMember.birth.year}}
            </v-chip>
            <v-chip color="green" text-color="white">
              <v-icon left>phone</v-icon>
              {{currentMember.phone}}      
            </v-chip>
            <v-chip color="red" text-color="white">
              <v-icon left>email</v-icon>
              {{currentMember.email}}      
            </v-chip>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
<br>
<v-list>
			<form>
				<v-subheader>Agregar nuevo Pago:</v-subheader>

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
						label="Costo"
						hint="Cantidad en pesos"
						min="200"
						max="800"
						thumb-label
						step="50"
						snap
						v-model="newPayment.cost"
					></v-slider>
				</v-flex>

				<v-btn @click="addPayment">Confirmar Pago</v-btn>
				<v-snackbar
					:timeout="5000"
					top
					mode="vertical"
					v-model="snackbar"
				>El pago ha sido confirmado
      	<v-btn flat color="pink" @click.native="snackbar = false">Cerrar</v-btn>
    		</v-snackbar>

			</form>
</v-list>
<br>
			<v-list>
				
				<v-subheader>Pagos realizados:</v-subheader>
			</v-list>

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
      // payments: fs.collection("payments")
      query: fs
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
      }
    };
  },
  computed: {
    showSnapshot: function() {
      // var thisRef = fs.collection("members").doc(this.$route.params.id);
      var thisRef = this.$firestore.members.doc(this.$route.params.id);
      var getMember = thisRef.onSnapshot(member => {
        // console.log("Document data:", member.data());
        // console.log(this.$route.params.id);
        this.currentMember = member.data();
      });
    }
  },
  methods: {
    addPayment: function() {
      this.$firestore.payments.add(this.newPayment);
      this.$validator.validateAll();
      this.snackbar = true;
    }
    // showPayments: function() {
    //   fs
    //     .collection("payments")
    //     .where("member", "==", this.$route.params.id)
    //     .get()
    //     .then(querySnapshot => {
    //       querySnapshot.forEach(doc => {
    //         this.payments = doc.data();
    //         // console.log(doc.id, " => ", doc.data());
    //         console.log(doc.data());
    //         console.log(this.payments);
    //         // var newer = JSON.parse(JSON.stringify(doc.data()));
    //         // console.log(newer);
    //         newObj = { ...this.payments };
    //         console.log(newObj);
    //       });
    //       this.mister = newObj;
    //       console.log(this.mister);
    //     })
    //     .catch(function(error) {
    //       console.log("Error getting documents: ", error);
    //     });
    // },
    // showPayments2: function() {
    //   let newObj = {};
    //   this.$firestore.query.onSnapshot(querySnapshot => {
    //     querySnapshot.docs.map(documentSnapshot => {
    //       return documentSnapshot.data();
    //     });
    //   });
    // }
  }
};
</script>

<style scoped>
.gender {
  font-size: 22px;
}
</style>