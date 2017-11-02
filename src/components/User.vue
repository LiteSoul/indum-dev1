<template>

	<v-layout row>
		<v-flex xs12 sm6 offset-sm3>

			<div>
				<h3>{{ msg }}</h3>
					Hello {{ $route.params.id }}
			</div>
		</v-flex>

	</v-layout>

</template>

<script>
import { db } from "../firebase";

export default {
  firebase: {
    users: db.ref("users")
  },
  methods: {
    thisUser: function() {
      // currentUser = call db and get this user with paramsid
    }
  },
  // id: "user['.key']",
  data() {
    return {
      msg: "User ID:"
    };
  }
};
</script>
