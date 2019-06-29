<template>
	<section>
		<table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">User</th>
          <th scope="col">Options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, key) in users.data" :key="key">
          <th scope="row">{{ user.id}}</th>
          <td>
            <p>{{ user.first_name }} {{ user.last_name }}</p>
            <small>{{ user.email}}</small>
          </td>
          <td><span @click="showUserProfile(user)">Editar</span></td>
        </tr>
      </tbody>
    </table>

    <modal name="hello-world">
	  	<user-profile />
		</modal>
	</section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import UserProfile from './UserProfile'

	export default {
		components: {
			UserProfile
		},
		props: {
			perPage: {
				type: Number,
				required: true
			},
			users: {
				required: true
			}
		},
		methods: {
			...mapMutations([
				'setSelectedUser'
			]),

			setProfile() {

			},

			showUserProfile (row) {
				// Guardar en Vuex el usuario seleccionado
				this.setSelectedUser(row)
				// Mostrar modal
		    this.$modal.show(
		    	'hello-world',
		    	{
					  draggable: true
					}
				)
		  },

		  hideUserProfile () {
		  	// Ocultar modal
		    this.$modal.hide('hello-world');
		  }
		},
		mounted() {
			// Cuando se monta el componente, se emiten este evento, para que lo obtenga y trabaje el padre
			this.$emit('on-get-users')
		}
	}
</script>

<style>
	.v--modal-box.v--modal {
    height: 100% !important;
	}
</style>
