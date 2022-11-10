import PopulationService from './service/population_service.js'
import Population from '../livecode-1-data-penduduk/model/population.js'

let daftarOrang = new PopulationService()
let dataOrang = new Population()

daftarOrang.listRegistrasiPenduduk(dataOrang)