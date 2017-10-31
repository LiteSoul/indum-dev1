<template>

	<v-layout row>
		<v-flex xs12 sm6 offset-sm3>
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
					<v-subheader>Usuarios:</v-subheader>
					<template v-for="user in users">
						<v-list-tile avatar v-bind:key="user.lastname" @click="singleUser">
							<v-list-tile-avatar>
								<img v-bind:src="user.avatar">
							</v-list-tile-avatar>
							<v-list-tile-content>
								<v-list-tile-title>{{user.lastname}}, {{user.firstname}}</v-list-tile-title>
								<v-list-tile-sub-title>
									{{user.membership}} - {{user.phone}} - {{user.email}} - {{user.born}} - {{user['.key']}}
								</v-list-tile-sub-title>
							</v-list-tile-content>
							<v-icon medium color="grey lighten-1">delete_forever</v-icon>
							<router-link :to="user['.key']">/{{user['.key']}}</router-link>
						</v-list-tile>
					</template>
				</v-list>

			</v-card>
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
      let userId = user[".key"];
      console.log(user[".key"]);
      this.$router.push({ path: `/user/${userId}` });
      //router.push({ path: `/user/${userId}` }) // -> /user/123
    }
  }
};
</script>

