<template>
  <v-layout column>
    <v-flex xs12 class="text-xs-center" mt-5>
      <h3>Desconectarse</h3>
    </v-flex>
    <v-flex class="text-xs-center" mt-5>
      <p>Deseas salir de tu usuario?</p>
      <v-btn @click="logOut">Salir</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import firebase from 'firebase'

export default {
	methods: {
		logOut() {
			firebase
				.auth()
				.signOut()
				.then(() => this.$router.push('/'))
		}
	}
}
</script>