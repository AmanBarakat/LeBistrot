import axios from 'axios'

const RECETTES_API_URL = 'http://localhost:8080/recette'

class RecettesDataService {

    retrieveAllRecettes() {
        //console.log('executed service')
        return axios.get(`${RECETTES_API_URL}`);
    }
    modifyRecette(id,recette) {
        //console.log('executed service')
        return axios.put(`${RECETTES_API_URL}/${id}`,recette);
    }
    deleteRecette(id) {
        //console.log('executed service')
        return axios.delete(`${RECETTES_API_URL}/${id}`);
    }
    addRecette(recette) {
        //console.log('executed service')
        return axios.post(`${RECETTES_API_URL}`,recette);
    }

}

export default new RecettesDataService()
