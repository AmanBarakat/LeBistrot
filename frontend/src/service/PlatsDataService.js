import axios from 'axios'

const PLATS_API_URL = 'http://zuul.localhost/menu'

class PlatsDataService {

    retrieveAllPlats() {
        //console.log('executed service')
        return axios.get(`${PLATS_API_URL}`);
    }
    modifyPlat(id,plat) {
        //console.log('executed service')
        return axios.put(`${PLATS_API_URL}/${id}`,plat);
    }
    deletePlat(id) {
        //console.log('executed service')
        return axios.delete(`${PLATS_API_URL}/${id}`);
    }
    addPlat(plat) {
        //console.log('executed service')
        return axios.post(`${PLATS_API_URL}`,plat);
    }

}

export default new PlatsDataService()
