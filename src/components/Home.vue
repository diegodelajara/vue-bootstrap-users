<template>
  <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <header>
            <div class="row">
              <div class="col-sm-8">
                <i class="fas fa-user"></i> Users
              </div>
              <div class="col-sm-4">
                <button type="button" class="btn btn-success btn-lg">ADD USERS</button>
              </div>
            </div>
            <div class="row">
            Show
              <select name="pages" v-model="perPage" @change="onSelect">
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
            </div>
          </header>
          <div class="users-container">
            
            <Users />

          </div>
        </div>
        <div class="col-sm-6">
          jhghghj
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import Users from './Users'

  export default {
    components: {
      Users
    },
    data () {
      return {
        perPage: null,
        users: []
      }
    },
    methods: {
      
      onSelect() {
        console.log(this.perPage)
      }
    }
  }
</script>

<style>
  
</style>
