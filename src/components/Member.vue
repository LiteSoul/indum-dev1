<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media src="../static/img/profile-placeholder.png" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
						<!-- <h5>{{showSnapshot}}</h5> -->
						<h5 v-bind="showSnapshot">{{currentMember}}</h5>
						<!-- <h5>{{getData}}</h5> -->
						<!-- <h5>{{$route.params.id}}</h5>
						<h5>{{currentMember}}</h5>
						<h5>{{thisMember}}</h5>
						<h5>{{members}}</h5>
            <h3 class="headline mb-0">{{currentMember.lastname}}, {{currentMember.firstname}}
              <span>
                <v-chip v-if="currentMember.gender==='Hombre'" small color="blue lighten-4" class="ml-0 gender">
                  &#9794;</v-chip>
                <v-chip v-else small color="red lighten-4" class="ml-0 gender">
                  &#9792;</v-chip>
              </span>
            </h3>
            <v-chip color="orange" text-color="black">
              <v-icon left>star</v-icon>
              {{currentMember.membership}}
            </v-chip>
            <v-chip color="brown" text-color="white">
              <v-icon left>cake</v-icon>
              {{currentMember.born}}      
            </v-chip>
            <v-chip color="green" text-color="white">
              <v-icon left>phone</v-icon>
              {{currentMember.phone}}      
            </v-chip>
            <v-chip color="red" text-color="white">
              <v-icon left>email</v-icon>
              {{currentMember.email}}      
            </v-chip> -->
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
import { fs } from "../firebase";
// import Router from "../router";

export default {
  firestore() {
    return {
      members: fs.collection("members")
    };
  },
  data() {
    return {
      currentMember: {}
    };
  },
  computed: {
    showSnapshot: function() {
      // var thisRef = fs.collection("members").doc(this.$route.params.id);
      var thisRef = this.$firestore.members.doc(this.$route.params.id);
      var getDoc = thisRef.onSnapshot(member => {
        console.log("Document data:", member.data());
        console.log(this.$route.params.id);
        this.currentMember = member.data();
      });
    }
  },
  methods: {}
};
</script>

<style scoped>
.gender {
  font-size: 22px;
}
</style>