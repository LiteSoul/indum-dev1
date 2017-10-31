<template>
  <v-layout column>
    <v-flex xs12 class="text-xs-center" mt-5>
      <h3>Bienvenido a Energy</h3>
    </v-flex>
    <v-flex xs12 sm6 offset-sm3 mt-3>
      <blockquote>
        Para usar esta aplicación, loguéate o regístrate:
      </blockquote>
    </v-flex>
    <v-flex class="text-xs-center" mt-5>
      <v-btn color="primary" to="/signup">Registrarse</v-btn>
      <v-btn to="/login">Conectarse</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {};
</script>