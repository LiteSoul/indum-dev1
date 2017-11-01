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
    singleUser: function() {
      this.$router.push({ path: "/user/${user['.key']}" });
    }
  },
  id: "user['.key']",
  data() {
    return {
      msg: "User ID"
    };
  }
};
</script>
