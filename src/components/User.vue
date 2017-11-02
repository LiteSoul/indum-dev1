<template>

	<v-layout row>
		<v-flex xs12 sm6 offset-sm3>

			<div>
        <h5>ROUTE PARAMS ID: {{ $route.params.id }}</h5>
        <h5>LASTNAME: {{ currentUser.lastname }}</h5>
        <h5>FIRSTNAME: {{ currentUser.firstname }}</h5>
        <h5>currentUser: {{ currentUser }}</h5>
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
        // id: "user['.key']"
        source: db.ref("users/" + this.$route.params.id),
        asObject: true
      }
    };
  }
};
</script>
