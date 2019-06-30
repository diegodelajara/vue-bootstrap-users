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
                <button
                  type="button"
                  class="btn btn-success btn-lg"
                  @click="addUser()"
                >
                    Add user
                </button>
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
            />
            <div class="col-sm-6 col-sm-pull-right">
              <Pagination
                :perPage="perPage"
              />
            </div>
          </div>
        </div>

        <modal
          name="addUserModal"
          :width="300"
          :height="270"
         >
          
          <Form
            @on-close-modal="onCloseModal"
          />

        </modal>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

import Users from './Users'
import Pagination from './Pagination'
import Form from './AddUserForm'

  export default {
    components: {
      Form,
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
      ...mapActions([
        'getUsers'
      ]),
      onSelect() {
        this.getAllUsers()
      },
      async getAllUsers() {
        this.getUsers(this.perPage)
      },
      addUser() {
        // Mostrar modal
        this.$modal.show('addUserModal')
      },
      onCloseModal() {
        // Cerrar modal
        this.$modal.hide('addUserModal')
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
