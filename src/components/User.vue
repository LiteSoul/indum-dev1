<template>

	<v-layout row>
		<v-flex xs12 sm6 offset-sm3>

			<div>
				<h3>{{ msg }}</h3>
        <h5>ROUTE PARAMS ID: {{ $route.params.id }}</h5>
        <h5>LASTNAME: {{ currentUser.lastname }}</h5>
        <h5>FIRSTNAME: {{ currentUser.firstname }}</h5>
        <h5>currentUser: {{ currentUser }}</h5>
        <!-- <h5>TEST: {{ users.child('$route.params.id') }}</h5> -->
			</div>
		</v-flex>

	</v-layout>

</template>

<script>
import { db } from "../firebase";
import Router from "../router";

export default {
  firebase: {
    users: db.ref("users")
  },
  firebase() {
    return {
      currentUser: {
        source: db.ref("users/" + this.$route.params.id),
        asObject: true
      }
    };
  },
  methods: {},
  // id: "user['.key']",
  data() {
    return {
      msg: "User ID:"
    };
  }
};
</script>
