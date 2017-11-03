<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media src="../static/img/profile-placeholder.png" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{currentUser.lastname}}, {{currentUser.firstname}}
              <span>
                <v-chip v-if="currentUser.gender==='Hombre'" small color="blue lighten-4" class="ml-0 gender">
                  &#9794;</v-chip>
                <v-chip v-else small color="red lighten-4" class="ml-0 gender">
                  &#9792;</v-chip>
              </span>
            </h3>
            <v-chip color="orange" text-color="black">
              <v-icon left>star</v-icon>
              {{currentUser.membership}}
            </v-chip>
            <v-chip color="brown" text-color="white">
              <v-icon left>cake</v-icon>
              {{currentUser.born}}      
            </v-chip>
            <v-chip color="green" text-color="white">
              <v-icon left>phone</v-icon>
              {{currentUser.phone}}      
            </v-chip>
            <v-chip color="red" text-color="white">
              <v-icon left>email</v-icon>
              {{currentUser.email}}      
            </v-chip>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { db } from "../firebase";
import Router from "../router";

export default {
  firebase: {
    users: db.ref("users")
  },
  firebase() {
    return {
      currentUser: {
        // id: "user['.key']"
        source: db.ref("users/" + this.$route.params.id),
        asObject: true
      }
    };
  }
};
</script>

<style scoped>
.gender {
  font-size: 22px;
}
</style>