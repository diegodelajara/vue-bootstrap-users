<template>
	<section>
		<!-- Modal -->
		<div class="user">
			<div 
				class="bg"
				:style="`background-image: linear-gradient(${getGradientColor.first}, ${getGradientColor.second});`"
			>
				
			</div>
			<div class="avatar">
				<img :src="getSelectedUser.avatar" alt="">
			</div>
			<div class="name">
				<p>{{ getSelectedUser.first_name }} {{ getSelectedUser.last_name }}</p>
			</div>
			<div class="email">
				<small>{{ getSelectedUser.email }}</small>
			</div>
		</div>
	</section>
</template>

<script>
import { mapGetters } from 'vuex'

	export default {
		computed: {
			...mapGetters([
				'getSelectedUser',
				'getGradientColor'
			])
		}
	}
</script>

<style scoped lang="scss">
	.user {
		display: grid;
		grid-template-columns: 20px 1fr 1fr 20px;
		grid-template-rows: 205px auto auto auto;
		p, h2 {
			margin: 0;
		}
		.bg {
			grid-column: 1/5;
			grid-row: 1;
			position: relative;
			z-index: 1;
		}
		.avatar {
			grid-column: 2/4;
			grid-row: 1;
			z-index: 2;
			display: flex;
	    justify-content: center;
	    align-items: center;
			img {
		    width: 100%;
		    max-width: 150px;
		    margin: 0 auto;
		    display: block;
		    border-radius: 50%;
			} 
		}
		.name {
			margin-top: 4px;
			grid-column: 2;
			grid-row: 3;
		}
		.email {
			grid-column: 2;
			grid-row: 4;
			color: #9e9e9e;
		}
	}
</style>
