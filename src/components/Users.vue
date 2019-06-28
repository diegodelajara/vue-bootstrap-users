<template>
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
          <td>Otto</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
import axios from 'axios'
	export default {
    data () {
      return {
        users: []
      }
    },
		async mounted() {
      await axios.get('https://reqres.in/api/users').then(response => this.users = response.data)
		}
	}
</script>

<style>
	
</style>
