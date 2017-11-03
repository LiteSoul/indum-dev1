<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media src="../static/img/profile-placeholder.png" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
						<!-- <h5>{{showSnapshot}}</h5> -->
						<!-- <h5 v-bind="showPayments">{{currentPay}}</h5> -->
						<!-- <h5>{{currentMember.firstname}}</h5> -->
						<!-- <h5>{{getData}}</h5> -->
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

			<v-list>
				<v-subheader>Nuevo Pago</v-subheader>
				<div>

				</div>
					<v-subheader>Pagos</v-subheader>
					<v-btn @click="addPayment">addPayment</v-btn>
					<v-btn @click="showPayments">consolePayments</v-btn>
					<template v-for="payment in payments">
								<v-list-tile-title>{{payment.cost}}, {{payment.year}}
								</v-list-tile-title>
					</template>
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
      payments: fs.collection("payments")
    };
  },
  data() {
    return {
      payments: {},
      currentPay: {},
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
        year: "",
        month: "",
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
      // this.newPayment.member = currentMember[];
      // this.newMember.lastname = "";
      // this.newMember.firstname = "";
      // this.newMember.membership = "";
      this.$validator.validateAll();
      // this.$router.push("/storeusers");
    },
    showPayments: function() {
      fs
        .collection("payments")
        .where("year", "==", 2017)
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
          });
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    }
  }
};
</script>

<style scoped>
.gender {
  font-size: 22px;
}
</style>