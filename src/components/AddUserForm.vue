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
import { mapMutations } from 'vuex'

	export default {
		data () {
			return {
				apellido: null,
				email: null,
				nombre: null
			}
		},
		methods: {
			...mapMutations([
				'setUser'
			]),
			addUser() {
				const user = {
					first_name: this.nombre,
					last_name: this.apellido,
					email: this.email,
					avatar: ''
				}
				this.setUser(user)
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
