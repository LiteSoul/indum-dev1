<template>
<v-flex xs12 sm6 offset-sm3>
	<h5>Agregar nuevo miembro:</h5>
  <form>
    <v-text-field
      v-model="newMember.lastname"
      label="Apellido"
      :error-messages="errors.collect('lastname')"
      v-validate="'required|alpha'"
      data-vv-name="lastname"
      required
    ></v-text-field>
    <v-text-field
      v-model="newMember.firstname"
      label="Nombre"
      :error-messages="errors.collect('firstname')"
      v-validate="'required|alpha'"
      data-vv-name="firstname"
      required
    ></v-text-field>
		<v-select
      v-bind:items="genderOptions"
      v-model="newMember.gender"
      label="Género"
      :error-messages="errors.collect('gender')"
      v-validate="'required'"
      data-vv-name="gender"
      required
    ></v-select>
    <v-select
      v-bind:items="membershipOptions"
      v-model="newMember.membership"
      label="Membresía"
      :error-messages="errors.collect('membership')"
      v-validate="'required'"
      data-vv-name="membership"
      required
    ></v-select>
    <v-flex>
      <v-subheader>Fecha de Nacimiento:</v-subheader>
    </v-flex>
    <v-flex xs12 sm6>
      <v-slider
        color="indigo"
        label="Día"
        hint="Día de Nacimiento"
        min="1"
        max="31"
        thumb-label
        v-model="newMember.birth.day"
      ></v-slider>
    </v-flex>
    <v-flex xs12 sm6>
      <v-slider
        color="indigo"
        label="Mes"
        hint="Mes de Nacimiento"
        min="1"
        max="12"
        thumb-label
        v-model="newMember.birth.month"
      ></v-slider>
    </v-flex>
    <v-flex xs12 sm6>
      <v-slider
        color="indigo"
        label="Año"
        hint="Año de Nacimiento"
        min="1950"
        max="2020"
        thumb-label
        v-model="newMember.birth.year"
      ></v-slider>
    </v-flex>
    <v-text-field
      v-model="newMember.phone"
      label="Teléfono"
      :error-messages="errors.collect('phone')"
      v-validate="'required|numeric'"
      data-vv-name="phone"
      required
    ></v-text-field>
    <v-text-field
      v-model="newMember.email"
      label="E-mail"
      :error-messages="errors.collect('email')"
      v-validate="'required'"
      data-vv-name="email"
      required
    ></v-text-field>

    <v-btn color="indigo" dark @click="addMember">Enviar</v-btn>
  </form>
			</v-flex>
</template>

<script>
// import { db } from "../firebase";
import { fs } from "../firebase";

export default {
  $validates: true,
  firestore() {
    return {
      members: fs.collection("members")
    };
  },
  data() {
    return {
      genderOptions: ["Hombre", "Mujer"],
      membershipOptions: [
        "Musculación",
        "Crossfit",
        "Boxeo",
        "Kickboxing",
        "Defensa Personal",
        "GAP",
        "Pase Libre",
        "Medio Mes"
      ],
      newMember: {
        lastname: "",
        firstname: "",
        gender: "",
        membership: "",
        birth: { year: "", month: "", day: "" },
        phone: "",
        email: ""
      }
    };
  },
  methods: {
    addMember: function() {
      // GOTTA TRY THIS VUEFIRE BINDING:
      // this.$firebaseRefs.users.push(this.newUser);
      // BUT WHAT ABOUT THIS VUE-FIRESTORE BINDING?!:
      this.$firestore.members.add(this.newMember);
      // db.ref("users").push(this.newMember);
      // this.newMember.born = "";
      // this.newMember.lastname = "";
      // this.newMember.firstname = "";
      // this.newMember.membership = "";
      this.$validator.validateAll();
      this.$router.push("/storeusers");
    }
  }
};
</script>