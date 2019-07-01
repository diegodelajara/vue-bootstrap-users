<template>

	<nav aria-label="Page navigation example">
	
	  <ul class="pagination">
	    <li class="page-item">
	    	<a
	    		class="page-link"
	    		href="#"
	    		@click="goPrev">
	    		Previous
	    	</a>
	    </li>
	    <li class="page-item" v-for="(page, key) in getAllUsers.total_pages" :key="key">
	    	<a
	    		class="page-link"
	    		:class="{ isActive: getPage === key+1 }"
	    		href="#" @click="setUsers(key+1, getAllUsers.per_page)">
	    			{{ key+1 }}
	    	</a>
	    </li>
	    <li class="page-item"><a class="page-link" href="#" @click="goNext">Next</a></li>
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
			},
			goPrev() {
				if (this.getPage > 1) {
					this.setUsers(this.getPage - 1, this.getPerPage)
				}
			},
			goNext() {
				if (this.getPage < this.getAllUsers.total_pages) {
					this.setUsers(this.getPage + 1, this.getPerPage)
				}
			}
		},
		computed: {
			...mapGetters([
				'getAllUsers',
				'getPage',
				'getPerPage'
			])
		}
	}
</script>

<style>
	.isActive {
		background-color: #007bff !important;
		color: white !important;
	}
</style>
