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

            <Users />
            
            <div class="col-sm-6 col-sm-pull-right">
            
              <Pagination />
            
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
import { mapMutations, mapActions } from 'vuex'

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
        page: 1,
        perPage: 2,
        users: []
      }
    },
    methods: {
      ...mapMutations([
        'setPage',
        'setPerPage'
      ]),
      ...mapActions([
        'getUsers'
      ]),
      async onSelect() {

        const page =  parseInt(this.page)
        const perPage = parseInt(this.perPage)
        
        // Se guarda en el Store, los parametros de la paginación
        await this.setPage(page)
        await this.setPerPage(perPage)
        //Obtener usuarios desde el API
        this.getAllUsers()
      },
      async getAllUsers() {
        // Obtener los usuarios
        this.getUsers()
      },
      addUser() {
        // Mostrar modal
        this.$modal.show('addUserModal')
      },
      onCloseModal() {
        // Cerrar modal
        this.$modal.hide('addUserModal')
      }
    },
    async created() {

      const page =  parseInt(this.page)
      const perPage = parseInt(this.perPage)
        
      // Cuando se monta la app, se guarda en el Store, los parametros de la paginación
      await this.setPage(page)
      await this.setPerPage(perPage)
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
