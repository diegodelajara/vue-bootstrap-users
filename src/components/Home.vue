<template>
  <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <header>
            <div class="row">
              <div class="col-sm-8">
                <i class="fas fa-user"></i> Users
              </div>
              <div class="col-sm-4">
                <button type="button" class="btn btn-success btn-lg">Add user</button>
              </div>
            </div>
            
          </header>
          <div class="users-container">
            <div class="show">
              <span>Show </span>
              <select name="pages" v-model="perPage" @change="onSelect">
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
            </div>
            
              <br>
            <Users
              :perPage="perPage"
              :users="users"
              @on-get-users="getUsers"
            />
            <div class="col-sm-6 col-sm-pull-right">
              <Pagination
                :perPage="perPage"
                :users="users"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
import axios from 'axios'
import Users from './Users'
import Pagination from './Pagination'

  export default {
    components: {
      Pagination,
      Users
    },
    data () {
      return {
        perPage: 2,
        users: []
      }
    },
    methods: {
      onSelect() {
        this.getUsers()
      },
      async getUsers() {
        const perPage = parseInt(this.perPage)
        const url = `https://reqres.in/api/users?page=1&per_page=${perPage}`
        await axios.get(url)
              .then(response => this.users = response.data)
      }
    }
  }
</script>

<style>
  header {
    text-align: left;
  }
  .users-container .show {
    margin-bottom: 5px;
  }
</style>
