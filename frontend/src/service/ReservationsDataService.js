import axios from 'axios'

const RESERVATIONS_API_URL = 'http://localhost:8080/reservation'

class ReservationsDataService {

    retrieveAllReservations() {
        //console.log('executed service')
        return axios.get(`${RESERVATIONS_API_URL}`);
    }
    modify(id,reservation) {
        //console.log('executed service')
        return axios.put(`${RESERVATIONS_API_URL}/${id}`,reservation);
    }
    delete(id) {
        //console.log('executed service')
        return axios.delete(`${RESERVATIONS_API_URL}/${id}`);
    }
    add(reservation) {
        //console.log('executed service')
        return axios.post(`${RESERVATIONS_API_URL}`,reservation);
    }

}

export default new ReservationsDataService()
