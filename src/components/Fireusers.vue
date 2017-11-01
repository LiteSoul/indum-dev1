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
					<v-subheader>Lista de Miembros:</v-subheader>
					<template v-for="user in users">
						<router-link :to="user['.key']" v-bind:key="user.lastname">
						<v-list-tile avatar @click="">
							<v-list-tile-avatar>
								<img v-bind:src="user.avatar">
							</v-list-tile-avatar>
							<v-list-tile-content>
								<v-list-tile-title>{{user.lastname}}, {{user.firstname}}</v-list-tile-title>
								<v-list-tile-sub-title>
									<span style="background-color:DarkSalmon;font-weight:bold">{{user.gender}}</span>
									<span style="background-color:aquamarine;font-weight:bold">{{user.membership}}</span> - 
									{{user.phone}} - {{user.email}}
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