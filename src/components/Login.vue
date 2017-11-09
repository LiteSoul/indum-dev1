<template>
  <v-layout column>
    <v-flex xs12 class="text-xs-center" mt-5>
      <h3>Conectarse</h3>
    </v-flex>
    <v-flex xs12 sm6 offset-sm3 mt-3>
      <form v-on:submit.prevent="signIn">
        <v-layout column>
          <v-flex>
            <v-text-field
              v-model="email"
              name="email"
              label="Email"
              id="email"
              type="email"
              required></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field
              v-model="password"
              name="password"
              label="Password"
              id="password"
              type="password"
              required></v-text-field>
          </v-flex>
          <v-flex class="text-xs-center" mt-5>
            <v-btn color="primary" type="submit">Enviar</v-btn>
          </v-flex>
        </v-layout>
      </form>
    </v-flex>
  </v-layout>
</template>

<script>
import firebase from 'firebase'

export default {
	name: 'login',
	data: function() {
		return {
			email: '',
			password: ''
		}
	},
	methods: {
		signIn() {
			firebase
				.auth()
				.signInWithEmailAndPassword(this.email, this.password)
				.then(
					user => {
						alert('Bienvenido')
						this.$router.push('storeusers')
					},
					err => alert('Oops. ' + err.message)
				)
		}
	}
}
</script>