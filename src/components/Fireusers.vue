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
					<v-subheader>Miembros</v-subheader>
					<template v-for="user in users">
						<!-- <router-link :to="user.lastname+user.firstname+user['.key']" v-bind:key="user.lastname"> -->
						<router-link :to="user['.key']" v-bind:key="user.lastname">
						<v-list-tile avatar @click="">
							<v-list-tile-avatar>
								<img v-bind:src="user.avatar">
							</v-list-tile-avatar>
							<v-list-tile-content>
								<v-list-tile-title>{{user.lastname}}, {{user.firstname}}</v-list-tile-title>
								<v-list-tile-sub-title>
									<v-chip label small color="red lighten-4" class="ml-0">{{user.gender}}</v-chip>
									<v-chip label small color="cyan lighten-4" class="ml-0">{{user.membership}}</v-chip>
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

export default {
  firebase: {
    users: db.ref("users")
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>