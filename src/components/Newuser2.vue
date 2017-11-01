<template>
<v-flex xs12 sm6 offset-sm3>
	<h5>Agregar nuevo miembro:</h5>
  <form>
    <v-text-field
      v-model="newUser.lastname"
      label="Apellido"
      :error-messages="errors.collect('lastname')"
      v-validate="'required|alpha'"
      data-vv-name="lastname"
      required
    ></v-text-field>
    <v-text-field
      v-model="newUser.firstname"
      label="Nombre"
      :error-messages="errors.collect('firstname')"
      v-validate="'required|alpha'"
      data-vv-name="firstname"
      required
    ></v-text-field>
		<v-select
      v-bind:items="newUser.sex"
      v-model="newUser.gender"
      label="Género"
      :error-messages="errors.collect('gender')"
      v-validate="'required'"
      data-vv-name="gender"
      required
    ></v-select>
    <v-select
      v-bind:items="newUser.items"
      v-model="newUser.membership"
      label="Membresía"
      :error-messages="errors.collect('membership')"
      v-validate="'required'"
      data-vv-name="membership"
      required
    ></v-select>
		<v-text-field
      v-model="newUser.born"
      label="Fecha de Nacimiento"
      :error-messages="errors.collect('born')"
      v-validate="'required|date_format:DD-MM-YYYY'"
      data-vv-name="born"
      required
    ></v-text-field>
    <v-text-field
      v-model="newUser.phone"
      label="Teléfono"
      :error-messages="errors.collect('phone')"
      v-validate="'required|numeric'"
      data-vv-name="phone"
      required
    ></v-text-field>
    <v-text-field
      v-model="newUser.email"
      label="E-mail"
      :error-messages="errors.collect('email')"
      v-validate="'required'"
      data-vv-name="email"
      required
    ></v-text-field>

    <v-btn @click="addUser">Enviar</v-btn>
  </form>
			</v-flex>
</template>

<script>
import { db } from "../firebase";

export default {
  $validates: true,
  firebase: {
    users: db.ref("users")
  },
  data() {
    return {
      newUser: {
        lastname: "",
        firstname: "",
        gender: null,
        sex: ["Hombre", "Mujer"],
        membership: null,
        items: ["Musculación", "Crossfit", "Aero", "Boxeo"],
        born: "",
        phone: "",
        email: ""
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
      this.$validator.validateAll();
      this.$router.push("/fireusers");
    }
  }
};
</script>