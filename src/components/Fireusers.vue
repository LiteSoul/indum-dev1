<template>

	<v-layout row>
		<v-flex xs12 sm6 offset-sm3>
			<v-btn @click="setAlan">clickerer</v-btn>
			<v-btn @click="setBatman">createBatman</v-btn>
			<v-btn @click="addData">addDataMan</v-btn>
			<v-btn @click="getAuthors">getter</v-btn>
			<!-- <v-btn>so?</v-btn> -->
			<v-list two-line>
				<v-subheader>Authors</v-subheader>
				<template v-for="author in authors">
					{{author['.key']}}
					{{author.first}}
					{{author.last}}
				</template>
			</v-list>


			<v-card>

				<router-link to="/newuser">
					<v-btn
					color="green"
					dark
					absolute
					right
					fab
					>
						<v-icon>add</v-icon>
					</v-btn>
				</router-link>
				
				<v-list two-line>
					<v-subheader>Miembros</v-subheader>
					<template v-for="user in users">
						<!-- <router-link :to="user.lastname+user.firstname+user['.key']" v-bind:key="user.lastname"> -->
						<router-link :to="user['.key']" v-bind:key="user.lastname">
						<v-list-tile avatar @click="">
							<v-list-tile-avatar>
								<img v-bind:src="user.avatar">
							</v-list-tile-avatar>
							<v-list-tile-content>
								<v-list-tile-title>{{user.lastname}}, {{user.firstname}}
								</v-list-tile-title>
								<v-list-tile-sub-title>
									<v-chip v-if="user.gender==='Hombre'" small color="blue lighten-4" class="ml-0 gender">
										&#9794;</v-chip>
									<v-chip v-else small color="red lighten-4" class="ml-0 gender">
										&#9792;</v-chip>
									<v-chip label small color="cyan lighten-4" class="ml-0">
										{{user.membership}}</v-chip>
								</v-list-tile-sub-title>
							</v-list-tile-content>
							<!-- <v-icon medium color="grey lighten-1">delete_forever</v-icon> -->
						</v-list-tile>
						</router-link>
					</template>
				</v-list>

			</v-card>
		</v-flex>
	</v-layout>

</template>

<script>
import { db } from "../firebase";
import { fs } from "../firebase";

export default {
  // firebase: {
  //   users: db.ref("users")
  // authors: {
  //   source: fs.collection("authors"),
  //   asObject: true
  // }
  // },
  firebase: function() {
    return {
      users: db.ref("users")
      // authors: fs.collection("authors")
    };
  },
  firestore() {
    return {
      authors: fs.collection("authors")
    };
  },
  methods: {
    addData: function() {
      this.$firestore.authors.add({
        firstname: "Amrani",
        lastname: "Houssain"
      });
    },
    setAlan: function() {
      let aTuringRef = fs.collection("authors").doc("aturing");
      aTuringRef.set({
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912
      });
    },
    setBatman: function() {
      fs.collection("authors").add({
        first: "Alanis",
        middle: "Mathison",
        last: "Turing",
        born: 1912
      });
    },
    getAuthors: function() {
      fs
        .collection("authors")
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            console.log(doc.id, "=>", doc.data());
          });
        })
        .catch(err => {
          console.log("Error getting documents", err);
        });
    }
  },
  data() {
    return {
      authors: {}
    };
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.gender {
  font-size: 22px;
}
</style>