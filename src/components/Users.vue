<template>

  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-btn
          color="green"
          dark
          absolute
          
          right
          fab
        >
          <v-icon>add</v-icon>
        </v-btn>
        <v-list two-line>
          <template v-for="item in items">
            <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
            <v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
            <v-list-tile avatar v-else v-bind:key="item.name" @click="">
              <v-list-tile-avatar>
                <img v-bind:src="item.avatar">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.name"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>

</template>

<script>
export default {
  data() {
    return {
      items: [
        { header: "Usuarios" },
        {
          avatar: "https://vuetifyjs.com/static/doc-images/lists/1.jpg",
          name: "Gonzales Mauro",
          subtitle:
            "<span class='grey--text text--darken-2'>Musculación</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar: "https://vuetifyjs.com/static/doc-images/lists/2.jpg",
          name: "Blanco Sebastián",
          subtitle:
            "<span class='grey--text text--darken-2'>Boxeo</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        {
          avatar: "https://vuetifyjs.com/static/doc-images/lists/3.jpg",
          name: "Perez Lucía",
          subtitle:
            "<span class='grey--text text--darken-2'>Crossfit</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        { divider: true, inset: true },
        {
          avatar: "https://vuetifyjs.com/static/doc-images/lists/1.jpg",
          name: "Gonzales Mauro",
          subtitle:
            "<span class='grey--text text--darken-2'>Musculación</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar: "https://vuetifyjs.com/static/doc-images/lists/2.jpg",
          name: "Blanco Sebastián",
          subtitle:
            "<span class='grey--text text--darken-2'>Boxeo</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        {
          avatar: "https://vuetifyjs.com/static/doc-images/lists/3.jpg",
          name: "Perez Lucía",
          subtitle:
            "<span class='grey--text text--darken-2'>Crossfit</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        { divider: true, inset: true },
        {
          avatar: "https://vuetifyjs.com/static/doc-images/lists/1.jpg",
          name: "Gonzales Mauro",
          subtitle:
            "<span class='grey--text text--darken-2'>Musculación</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar: "https://vuetifyjs.com/static/doc-images/lists/2.jpg",
          name: "Blanco Sebastián",
          subtitle:
            "<span class='grey--text text--darken-2'>Boxeo</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        {
          avatar: "https://vuetifyjs.com/static/doc-images/lists/3.jpg",
          name: "Perez Lucía",
          subtitle:
            "<span class='grey--text text--darken-2'>Crossfit</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        { divider: true, inset: true },
        {
          avatar: "https://vuetifyjs.com/static/doc-images/lists/1.jpg",
          name: "Gonzales Mauro",
          subtitle:
            "<span class='grey--text text--darken-2'>Musculación</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar: "https://vuetifyjs.com/static/doc-images/lists/2.jpg",
          name: "Blanco Sebastián",
          subtitle:
            "<span class='grey--text text--darken-2'>Boxeo</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        {
          avatar: "https://vuetifyjs.com/static/doc-images/lists/3.jpg",
          name: "Perez Lucía",
          subtitle:
            "<span class='grey--text text--darken-2'>Crossfit</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        { divider: true, inset: true },
        {
          avatar: "https://vuetifyjs.com/static/doc-images/lists/1.jpg",
          name: "Gonzales Mauro",
          subtitle:
            "<span class='grey--text text--darken-2'>Musculación</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          avatar: "https://vuetifyjs.com/static/doc-images/lists/2.jpg",
          name: "Blanco Sebastián",
          subtitle:
            "<span class='grey--text text--darken-2'>Boxeo</span> &mdash; Wish I could come, but I'm out of town this weekend."
        },
        { divider: true, inset: true },
        {
          avatar: "https://vuetifyjs.com/static/doc-images/lists/3.jpg",
          name: "Perez Lucía",
          subtitle:
            "<span class='grey--text text--darken-2'>Crossfit</span> &mdash; Do you have Paris recommendations? Have you ever been?"
        }
      ]
    };
  }
};
</script>