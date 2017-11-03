<template>

	<v-layout row>
		<v-flex xs12 sm6 offset-sm3>

			<v-card>

				<router-link to="/newmember">
					<v-btn
					color="indigo"
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
					<template v-for="member in members">
						<!-- <router-link :to="member.lastname+member.firstname+member['.key']" v-bind:key="member.lastname"> -->
						<router-link :to="member['.key']" v-bind:key="member.lastname">
						<v-list-tile avatar @click="">
							<v-list-tile-avatar>
								<img v-bind:src="member.avatar">
							</v-list-tile-avatar>
							<v-list-tile-content>
								<v-list-tile-title>{{member.lastname}}, {{member.firstname}}
								</v-list-tile-title>
								<v-list-tile-sub-title>
									<v-chip v-if="member.gender==='Hombre'" small color="blue lighten-4" class="ml-0 gender">
										&#9794;</v-chip>
									<v-chip v-else small color="red lighten-4" class="ml-0 gender">
										&#9792;</v-chip>
									<v-chip label small color="cyan lighten-4" class="ml-0">
										{{member.membership}}</v-chip>
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
import { fs } from "../firebase";

export default {
  firestore() {
    return {
      members: fs.collection("members")
    };
  },
  methods: {},
  data() {
    return {
      members: {}
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