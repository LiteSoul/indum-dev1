<template>

	<v-layout row>
		<v-flex xs12 sm6 offset-sm3>

			<form id="form" class="form-inline" v-on:submit.prevent="addUser">
				<div class="form-group">
					<label for="userLastname">Last Name:</label>
					<input type="text" id="userLastname" class="form-control" v-model="newUser.lastname">
				</div>
				<div class="form-group">
					<label for="userFirstname">First Name:</label>
					<input type="text" id="userFirstname" class="form-control" v-model="newUser.firstname">
				</div>
				<div class="form-group">
					<label for="userMembership">Membership:</label>
					<input type="text" id="userMembership" class="form-control" v-model="newUser.membership">
				</div>
				<div class="form-group">
					<label for="userBorn">Born:</label>
					<input type="text" id="userBorn" class="form-control" v-model="newUser.born">
				</div>
				<div class="form-group">
					<label for="userPhone">Phone:</label>
					<input type="text" id="userPhone" class="form-control" v-model="newUser.phone">
				</div>
				<div class="form-group">
					<label for="userEmail">Email:</label>
					<input type="text" id="userEmail" class="form-control" v-model="newUser.email">
				</div>
				<input type="submit" class="btn btn-primary" value="Add User">
				<input type="button" v-on:click="reDirect" value="Redirect to Fireusers">
			</form>

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
      this.$router.push("/fireusers");
    }
  }
};
</script>

