<template>
	<nav aria-label="Page navigation example">
		<!-- <pre>
			{{ getAllUsers }}
		</pre> -->
	  <ul class="pagination">
	    <li class="page-item"><a class="page-link" href="#">Anterior</a></li>
	    <li class="page-item" v-for="(page, key) in getAllUsers.total_pages" :key="key">
	    	<a class="page-link" @click="setUsers(key+1, getAllUsers.per_page)">{{ key+1 }}</a>
	    </li>
	    <li class="page-item"><a class="page-link" href="#">Siguiente</a></li>
	  </ul>
	</nav>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'

	export default {
		methods: {
			...mapMutations([
				'setPage',
				'setPerPage'
			]),
			...mapActions([
				'getUsers'
			]),
			async setUsers(p, pp) {
				await this.setPage(p)
				await this.setPerPage(pp)
				await this.getUsers()
			}
		},
		computed: {
			...mapGetters([
				'getAllUsers'
			])
		}
	}
</script>
