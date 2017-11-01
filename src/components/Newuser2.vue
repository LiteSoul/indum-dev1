<template>
<v-flex xs12 sm6 offset-sm3>
  <form>
    <v-text-field
      v-model="name"
      label="Name"
      :counter="10"
      :error-messages="errors.collect('name')"
      v-validate="'required|max:10'"
      data-vv-name="name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      label="E-mail"
      :error-messages="errors.collect('email')"
      v-validate="'required|email'"
      data-vv-name="email"
      required
    ></v-text-field>
    <v-select
      v-bind:items="items"
      v-model="select"
      label="Select"
      :error-messages="errors.collect('select')"
      v-validate="'required'"
      data-vv-name="select"
      required
    ></v-select>

    <v-btn @click="submit">submit</v-btn>
  </form>
			</v-flex>
</template>

<script>
export default {
  $validates: true,
  data() {
    return {
      newUser: {
        lastname: "",
        firstname: "",
        gender: "",
        email: "",
        select: null,
        items: ["Musculación", "Crossfit", "Aero", "Boxeo"],
        checkbox: null
      }
    };
  },
  methods: {
    submit() {
      this.$validator.validateAll();
      this.$router.push("/fireusers");
    }
  }
};
</script>