<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link 
                :to="{ name: 'bansos.create'}"
                class="btn btn-primary btn-sm rounded shadow mb-3"
                >Add</router-link>

                <div class="card rounded shadow">
                    <div class="card-header">
                        Bansos List
                    </div>
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="prov in provinces" :key="prov.id" :value="prov.id">
                                    <td>{{ prov.name }}</td>
                                    <td>
                                        <!-- <div class="btn-group">
                                            <router-link 
                                            :to="{ name: 'bansos.edit', params:{id: prov.id}}"
                                            class="btn btn-sm btn-outline-info"
                                            >Edit</router-link>
                                            <button class="btn btn-sm btn-outline-danger">
                                                Delete
                                            </button>
                                        </div> -->
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

   data() {
       return {
           provinces: [],
       }
    },

    mounted() {
        fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`)
        .then(response => response.json())
        .then(provinces => console.log(provinces));
    },

}
    
</script>