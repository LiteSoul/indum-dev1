<template>
	<v-app>

		<v-navigation-drawer temporary v-model="sidebar">
			<v-list>
				<v-list-tile
					v-for="item in menuItems"
					:key="item.title"
					:to="item.path">
					<v-list-tile-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>{{ item.title }}</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
		
		<v-toolbar fixed>
			<span class="hidden-sm-and-up">
				<v-toolbar-side-icon @click.stop="sidebar = !sidebar">
				</v-toolbar-side-icon>
			</span>
			<v-toolbar-title>
				<router-link to="/" tag="span" style="cursor: pointer">
					{{ appTitle }}
				</router-link>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items class="hidden-xs-only">
				<v-btn
					flat
					v-for="item in menuItems"
					:key="item.title"
					:to="item.path">
					<v-icon left>{{ item.icon }}</v-icon>
					{{ item.title }}
				</v-btn>
			</v-toolbar-items>
		</v-toolbar>
		
		<main>
			<div class="content" style="padding-top:64px">
			<v-container fluid>
				<router-view></router-view>
			</v-container>
			</div>
		</main>
		
	</v-app>
</template>

<script>
export default {
  data() {
    return {
      appTitle: "EnerGym Vue",
      sidebar: false,
      menuItems: [
        { title: "Home", path: "/home", icon: "home" },
        { title: "Miembros", path: "/users", icon: "people" },
        { title: "FireMiembros", path: "/fireusers", icon: "people" },
        { title: "Agregar", path: "/newuser", icon: "person_add" },
        { title: "Registrarse", path: "/signup", icon: "lock_outline" },
        { title: "Ingresar", path: "/login", icon: "lock_open" }
      ]
    };
  }
};
</script>

<style lang="stylus">
@import './stylus/main';
</style>