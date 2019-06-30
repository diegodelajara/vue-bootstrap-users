<template>
	<section>
		<table class="table table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">User</th>
        </tr>
      </thead>
      <tbody>
        <tr
        	v-for="(user, key) in users.data"
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
		    this.$modal.show('profile')
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
