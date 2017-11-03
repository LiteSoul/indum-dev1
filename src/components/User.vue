<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media src="" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h1 v-if="currentUser.gender==='Hombre'">Yes</h1>
            <h1 v-else>No</h1>
            <h3 class="headline mb-0">{{currentUser.lastname}}, {{currentUser.firstname}}</h3>
            <v-chip v-if="currentUser.gender==='Hombre'" label small color="blue lighten-4" class="ml-0">
              &#9794;{{currentUser.gender}}
            </v-chip>
            <v-chip v-else label small color="red lighten-4" class="ml-0">
              {{currentUser.gender}}
            </v-chip>
            <v-chip color="orange" text-color="black">
              <v-icon left>star</v-icon>
              {{currentUser.membership}}
            </v-chip>
            <v-chip color="primary" text-color="white">
              <v-icon left>cake</v-icon>
              {{currentUser.born}}      
            </v-chip>
            <v-chip color="primary" text-color="white">
              <v-icon left>phone</v-icon>
              {{currentUser.phone}}      
            </v-chip>
            <v-chip color="primary" text-color="white">
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
