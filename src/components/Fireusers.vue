<template>

	<v-layout row>
		<v-flex xs12 sm6 offset-sm3>

			<tr v-for="user in users" v-bind:key="user.lastname">
				<td><a v-bind:href="user.email">{{user.born}}</a></td>
				<td>{{user.firstname}}</td>
				<td>{{user.lasstname}}</td>
				<td>{{user.membership}}</td>
				<td>{{user.phone}}</td>
				<td>{{user.email}}</td>
			</tr>
			
			<form id="form" class="form-inline" v-on:submit.prevent="addUser">
				<div class="form-group">
					<label for="userBorn">Born:</label>
					<input type="text" id="userBorn" class="form-control" v-model="newUser.born">
				</div>
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
				<input type="submit" class="btn btn-primary" value="Add User">
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
      this.newUser.firstname = "http://";
      this.newUser.membership = "";
    }
  }
};
</script>

