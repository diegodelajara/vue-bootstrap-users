<template>
	<section>
		<table
			class="table table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">User</th>
        </tr>
      </thead>
      <tbody v-if="getUsers != null">
        <tr
        	v-for="(user, key) in getAllUsers.data"
        	:key="key"
        	@click="showUserProfile(user)"
        >
          <td scope="row">
          	{{ user.id < 10 ? '0': '' }}{{ user.id}}</td>
          <td>
            <p>{{ user.first_name }} {{ user.last_name }}</p>
            <small>{{ user.email}}</small>
          </td>
        </tr>
      </tbody>
    </table>

    <modal
    	name="profile"
    	:width="300"
      :height="270"
     >
	  	<user-profile />
		</modal>
	</section>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import UserProfile from './UserProfile'
import { gradientColors } from '../assets/colors'

	export default {
		components: {
			UserProfile
		},
		data () {
			return {
				colors: gradientColors,
				users: []
			}
		},
		methods: {
			...mapActions([
				'getUsers'
			]),
			...mapMutations([
				'setSelectedUser',
				'setAllUsers',
				'setGradientColor'
			]),

			showUserProfile (row) {
				// Guardar en Vuex el usuario seleccionado
				this.setSelectedUser(row)
				// Guardar en Vuex un color random
				this.chooseColor(0, 4)
				// Mostrar modal
		    this.$modal.show('profile')
		  },

		  hideUserProfile () {
		  	// Ocultar modal
		    this.$modal.hide('profile');
		  },
		  async chooseColor(min, max) {
		  	const num = await Math.floor(Math.random() * (max - min)) + min
		  	console.log(this.colors)
		  	this.setGradientColor(this.colors[num])
		  }
		},
		computed: {
			...mapGetters([
				'getAllUsers'
			])
		},
		async mounted() {
			await this.getUsers()
		}
	}
</script>

<style lang="scss" scoped>
	.table {
		tbody tr {
			cursor: pointer;
		}
		p {
			margin: 0;		
		}
	}
	.v--modal-box.v--modal {
    height: 100% !important;
    top: 170px !important;
	}
</style>
