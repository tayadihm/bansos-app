<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <router-link 
                :to="{ name: 'bansos.index'}"
                class="btn btn-primary btn-sm rounded shadow mb-3"
                >Back</router-link>

                <div class="card rounded shadow">
                    <div class="card-header">
                        Create Data Bansos
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="add()">
                            <div class="mb-3">
                                <label for="" class="form-lable">Nama</label>
                                <input type="text" class="form-control">
                                <div class="text-danger">
                                    Validation message
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-lable">NIK</label>
                                <input type="number" class="form-control">
                                <div class="text-danger">
                                    Validation message
                                </div>
                            </div>     
                            <div class="mb-3">
                                <label for="" class="form-lable">No. KK</label>
                                <input type="number" class="form-control">
                                <div class="text-danger">
                                    Validation message
                                </div>
                            </div>   
                            <div class="mb-3">
                                <label for="" class="form-lable">Foto KTP</label>
                                <input type="file" class="form-control" accept=".JPG,.JPEG,.PNG,.BMP">
                                <div class="text-danger">
                                    Validation message
                                </div>
                            </div> 
                            <div class="mb-3">
                                <label for="" class="form-lable">Foto KK</label>
                                <input type="file" class="form-control" accept=".JPG,.JPEG,.PNG,.BMP">
                                <div class="text-danger">
                                    Validation message
                                </div>
                            </div> 
                            <div class="mb-3">
                                <label for="" class="form-lable">Umur</label>
                                <input type="number" class="form-control">
                                <div class="text-danger">
                                    Validation message
                                </div>
                            </div> 
                            <div class="mb-3">
                                <label for="" class="form-lable">Jenis Kelamin</label>
                                <div class="radio">
                                    <label>
                                        <input type="radio" name="pria" value="pria" id="pria"> Pria
                                    </label>
                                </div>
                                <div class="radio">
                                    <label>
                                        <input type="radio" name="wanita" value="wanita" id="wanita"> Wanita
                                    </label>
                                </div>
                                <div class="text-danger">
                                    Validation message
                                </div>
                            </div> 
                            <div class="mb-3">
                                <label for="" class="form-lable">Pilih Provinsi</label>
                                <select v-model="provinceId" class="form-control">
                                    <option value=""></option>
                                    <option v-for="prov in provinces" :key="prov.id" :value="prov.id">{{ prov.name }}</option>
                                </select>
                                <div class="text-danger">
                                    Validation message
                                </div>
                            </div> 
                            <div class="mb-3" v-if="provinceId">
                                <label for="" class="form-lable">Pilih Kab/Kota</label>
                                <select v-model="regencyId" class="form-control">
                                    <option value=""></option>
                                    <option v-for="reg in regencies" :key="reg.id" :value="reg.id">{{ reg.name }}</option>
                                </select>
                                <div class="text-danger">
                                    Validation message
                                </div>
                            </div> 
                            <div class="mb-3" v-if="regencyId">
                                <label for="" class="form-lable">Pilih Kecamatan</label>
                                <select v-model="districtId" class="form-control">
                                    <option value=""></option>
                                    <option v-for="dist in districts" :key="dist.id" :value="dist.id">{{ dist.name }}</option>
                                </select>
                                <div class="text-danger">
                                    Validation message
                                </div>
                            </div> 
                            <div class="mb-3" v-if="districtId">
                                <label for="" class="form-lable">Pilih Kelurahan</label>
                                <select v-model="villageId" class="form-control">
                                    <option value=""></option>
                                    <option v-for="vill in villages" :key="vill.id" :value="vill.id">{{ vill.name }}</option>
                                </select>
                                <div class="text-danger">
                                    Validation message
                                </div>
                            </div> 
                            <div class="mb-3">
                                <label for="" class="form-lable">RT</label>
                                <input type="number" class="form-control">
                                <div class="text-danger">
                                    Validation message
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-lable">RW</label>
                                <input type="number" class="form-control">
                                <div class="text-danger">
                                    Validation message
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-lable">Penghasilan Sebelum Pandemi</label>
                                <input type="number" class="form-control">
                                <div class="text-danger">
                                    Validation message
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-lable">Penghasilan Setelah Pandemi</label>
                                <input type="number" class="form-control">
                                <div class="text-danger">
                                    Validation message
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-lable">Alasan Membutuhkan Bantuan</label>
                                <select v-model="reasonId" class="form-control" id="reason">
                                    <option disabled value="">Pilih Alasan</option>
                                    <option>Kehilangan Pekerjaan</option>
                                    <option>Kepala keluarga terdampak atau korban Covid-19</option>
                                    <option>Tergolong fakir/miskin semenjak sebelum Covid-19</option>
                                </select>
                                <div class="text-danger">
                                    Validation message
                                </div>
                            </div> 
                            <button class="btn btn-primary" type="submit" >add</button>                         
                        </form>
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
           regencies: [],
           districts: [],
           villages: [],
           provinceId: '',
           regencyId: '',
           districtId: '',
           villageId: '',
           completed: false,
       }
    },

    watch: {
        provinceId() {
        this.regencyId = ''
        this.districtId = ''
        this.villageId = ''
        this.fetchRegencies()
        },
        regencyId() {
        this.districtId = ''
        this.villageId = ''
        this.fetchDistricts()
        },
        districtId() {
        this.villageId = ''
        this.fetchVillages()
        },
        villageId() {
        this.completed = true
        }
    },

    computed: {

        urlApiProvinces() {
        return `${this.baseApiUrl}/provinces.json`
        },
        urlApiRegencies() {
        return `${this.baseApiUrl}/regencies/${this.provinceId}.json`
        },
        urlApiDistricts() {
        return `${this.baseApiUrl}/districts/${this.regencyId}.json`
        },
        urlApiVillages() {
        return `${this.baseApiUrl}/villages/${this.districtId}.json`
        },
        fetchProvincesCode() {
        return [
            `fetch(\`<a href="${this.urlApiProvinces}" target="_blank">${this.urlApiProvinces}</a>\`)`,
            '.then(response => response.json())',
            '.then(provinces => console.log(provinces));'
        ].join('\n')
        },
        fetchRegenciesCode() {
        return !this.provinceId ? '' : [
            `<small class="text-fade-50">// ID Provinsi ${this.selectedProvince.name} = ${this.provinceId}</small>`,
            `fetch(\`<a href="${this.urlApiRegencies}" target="_blank">${this.urlApiRegencies}</a>\`)`,
            '.then(response => response.json())',
            '.then(regencies => console.log(regencies));'
        ].join('\n')
        },
        fetchDistrictsCode() {
        return !this.regencyId ? '' : [
            `<small class="text-fade-50">// ID ${this.selectedRegency.name} = ${this.regencyId}</small>`,
            `fetch(\`<a href="${this.urlApiDistricts}" target="_blank">${this.urlApiDistricts}</a>\`)`,
            '.then(response => response.json())',
            '.then(districts => console.log(districts));'
        ].join('\n')
        },
        fetchVillagesCode() {
        return !this.districtId ? '' : [
            `<small class="text-fade-50">// ID Kecamatan ${this.selectedDistrict.name} = ${this.districtId}</small>`,
            `fetch(\`<a href="${this.urlApiVillages}" target="_blank">${this.urlApiVillages}</a>\`)`,
            '.then(response => response.json())',
            '.then(villages => console.log(villages));'
        ].join('\n')
        },
        selectedProvince() {
        return this.provinces.find(prov => prov.id == this.provinceId)
        },
        selectedRegency() {
        return this.regencies.find(reg => reg.id == this.regencyId)
        },
        selectedDistrict() {
        return this.districts.find(dist => dist.id == this.districtId)
        },
        selectedVillage() {
        return this.villages.find(vill => vill.id == this.villageId)
        },
        responseProvinces() {
        return JSON.stringify(this.provinces, null, 2)
        },
        responseRegencies() {
        return JSON.stringify(this.regencies, null, 2)
        },
        responseDistricts() {
        return JSON.stringify(this.districts, null, 2)
        },
        responseVillages() {
        return JSON.stringify(this.villages, null, 2)
        },

    },

    created() {
        this.fetchProvinces()
    },

    add(){
      axios.post('http://localhost:3000/posts/', this.form).then(res => {
          this.load()
          this.form.name = ''
      })
    },

    mounted() {

        [...document.querySelectorAll('.unhide-on-mounted')].forEach(el => {
            el.classList.remove('d-none')
        })
    },

    methods: {
        async fetchProvinces() {
        this.fetchingProvinces = true
        const result = await fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`)
        this.fetchingProvinces = false
        this.provinces = await result.json()
        },
        async fetchRegencies() {
        if (!this.provinceId) {
            this.regencies = []
            return
        }
        this.fetchingRegencies = true
        const result = await fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/regencies/${this.provinceId}.json`)
        this.fetchingRegencies = false
        this.regencies = await result.json()
        },
        async fetchDistricts() {
        if (!this.regencyId) {
            this.districts = []
            return
        }

        this.fetchingDistricts = true
        const result = await fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/districts/${this.regencyId}.json`)
        this.fetchingDistricts = false
        this.districts = await result.json()
        },
        async fetchVillages() {
        if (!this.districtId) {
            this.villages = []
            return
        }

        this.fetchingVillages = true
        const result = await fetch(`http://www.emsifa.com/api-wilayah-indonesia/api/villages/${this.districtId}.json`)
        this.fetchingVillages = false
        this.villages = await result.json()
        }
    }

}
</script>