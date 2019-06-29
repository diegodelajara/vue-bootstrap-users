<template>
	<section>
		<!-- Modal -->
		<div class="user">
			<h2>Titulo</h2>
			<div class="avatar">
				<img :src="getSelectedUser.avatar" alt="">
			</div>
			<span class="nameTitle">Nombre</span>
			<div class="name">
				<p>{{ getSelectedUser.first_name }}</p>
			</div>
			<span class="lastNameTitle">Apellido</span>
			<div class="lastName">
				<span>{{ getSelectedUser.last_name }}</span>
			</div>
		</div>
	</section>
</template>

<script>
import { mapGetters } from 'vuex'

	export default {
		computed: {
			...mapGetters([
				'getSelectedUser'
			])
		}
	}
</script>

<style scoped lang="scss">
	.user {
		padding: 10px;
		display: grid;
		grid-template-columns: 100px 1fr 100px;
		grid-template-rows: repeat(7, auto);
		h2 {
			grid-column: 2;
			grid-row: 1
		}
		.avatar {
			grid-column: 2;
			grid-row: 2;
			img {
		    width: 100%;
			} 
		}
		.nameTitle {
			grid-column: 2;
			grid-row: 3
		}
		.name {
			grid-column: 2;
			grid-row: 4
		}
		.lastNameTitle {
			grid-column: 2;
			grid-row: 5;
		}
		.lastName {
			grid-column: 2;
			grid-row: 6
		}
	}
</style>
