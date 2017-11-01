<template>
  <v-layout column>
    <v-flex xs12 class="text-xs-center" mt-5>
      <h3>Bienvenido a Energy</h3>
      <blockquote>
        Para usar esta aplicación, ingresá o registrate:
      </blockquote>
      <v-btn to="/login">Ingresar</v-btn>
      <v-btn color="primary" to="/signup">Registrarse</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {};
</script>