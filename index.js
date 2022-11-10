import {Population, Nik} from "./model/class.js";

class PopulationService {
    constructor() {
      this.population = []
      this.idNumb = []
    }

    generateNik(nik) {
        return new Promise((resolve, reject) => {
            console.log('Memproses pembuatan NIK...')
            setTimeout(() => {
                if (!nik) {
                    reject('NIK gagal dibuat')
                } else {
                    //generating NIK
                    this.idNumb.push(nik)
                    resolve(`NIK berhasil dibuat`)
                }
            }, 5000)
        })
    }
  
    registerOrang(orang) {
        return new Promise((resolve, reject) => {
            console.log('Memproses registrasi penduduk...')
            setTimeout(() => {
                if (!orang) {
                    reject('Penduduk baru gagal diregistrasi')
                } else {
                    this.population.push(orang)
                    resolve(`Penduduk baru berhasil diregistrasi`)
                }
            }, 5000)
        })
    }
  
    getAll() {
        return new Promise((resolve, reject) => {
            console.log('Menampilkan semua data penduduk...')
            setTimeout(() => {
                if (!this.population) {
                    reject('Data penduduk gagal ditampilkan')
                } else {
                    console.log('Data penduduk ditampilkan:\n')
                    resolve(this.population)
                }
            })
        })
    }
  
    getByNIK(nik) {
        return new Promise((resolve, reject) => {
            console.log(`Mencari data penduduk dengan NIK: ${nik}`)
            setTimeout(() => {
            if (!nik) {
                reject('Gagal mencari data penduduk')
            } else {
                for (let i in this.idNumb)
                    if(this.idNumb[i] === nik) {
                        console.log(`Data penduduk dengan NIK ${code} ditemukan`)
                        resolve(this.idNumb[i])
                        break
                    } else {
                        console.log(`Data penduduk ini ber-NIK: ${this.idNumb[i]}`)
                    }
                }
            })
        })
    }

    listRegistrasiPenduduk = async () => {
        try {
            let nikBulanSutisna = new Nik('19', '20', '02', '990242', '0001')
            console.log(nikBulanSutisna)

            let bulanSutisna = new Population('P0001', 'Bulan Sutisna', 'Perempuan', `${nikBulanSutisna}`, '1999-02-02', 'Jakarta Barat', 19, 20, '02')
            let orangBaru = await this.registerOrang(bulanSutisna)
            console.log(orangBaru)

            let semuaPenduduk = await this.getAll()
            console.log(semuaPenduduk)

            let spesifikPenduduk = await getByNIK()
            console.log(specificBook)
            
        } catch (error) {
            console.log(error)
        }
    }
}

let daftarOrang = new PopulationService()
let dataOrang = new Population()

daftarOrang.listRegistrasiPenduduk(dataOrang)