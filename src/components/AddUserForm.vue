<template>
	<div class="container add-user-modal">
		<h3>Agregar usuario</h3>
		<div class="row">
			<div class="col-sm-12">
				<input
					v-model="nombre"
					class="form-control"
					placeholder="Nombre"
					type="text">
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<input
					v-model="apellido"
					class="form-control"
					placeholder="Apellido"
					type="text">
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<input
					v-model="email"
					class="form-control"
					placeholder="E-mail"
					type="text">
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<button
					class="btn btn-primary btn-large"
					type="button"
					@click="addUser">
					Agregar
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

	export default {
		data () {
			return {
				avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
				apellido: null,
				email: null,
				nombre: null
			}
		},
		methods: {
			...mapMutations([
				'setUser'
			]),
			...mapActions([
				'addNewUser'
			]),
			async addUser() {
				// Agregar nuevo usuario
				const newUser = await {
					first_name: this.nombre,
					last_name: this.apellido,
					email: this.email,
					avatar: this.avatar
				}
				// Action, para agregar nuevo usuario
				const u = await this.addNewUser(newUser)

				console.log(u)
				this.setUser(u)
				return
				// console.log('%c New user', 'color: blue;', u)
				// Se emite el evento, para cerrar el modal luego de agregar el usuario
				this.$emit('on-close-modal')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.add-user-modal {
		padding: 10px;
		input {
			margin: 3px 0;
		}
	}
</style>
