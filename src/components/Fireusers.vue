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
						<v-list-tile avatar v-bind:key="user.lastname">
							<v-list-tile-avatar>
								<img v-bind:src="user.avatar">
							</v-list-tile-avatar>
							<v-list-tile-content>
								<v-list-tile-title>{{user.lastname}}, {{user.firstname}}</v-list-tile-title>
								<v-list-tile-sub-title>
									{{user.membership}} - {{user.phone}} - {{user.email}} - {{user.born}}
								</v-list-tile-sub-title>
							</v-list-tile-content>
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
  data() {
    return {
      newUser: {
        born: "",
        email: "",
        firstname: "",
        lastname: "",
        membership: "",
        phone: ""
      }
    };
  },
  methods: {
    addUser: function() {
      db.ref("users").push(this.newUser);
      this.newUser.born = "";
      this.newUser.lastname = "";
      this.newUser.firstname = "";
      this.newUser.membership = "";
    }
  }
};
</script>

