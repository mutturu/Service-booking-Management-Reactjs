import axios from 'axios';

const SERVICE_API_BASE_URL = "http://localhost:8083/api/v1/services";

class ServiceService {

    getServices(){
        return axios.get(SERVICE_API_BASE_URL);
    }

    createService(service){
        return axios.post(SERVICE_API_BASE_URL, service);
    }

    getServiceById(serviceId){
        return axios.get(SERVICE_API_BASE_URL + '/' + serviceId);
    }

    updateService(service, serviceId){
        return axios.put(SERVICE_API_BASE_URL + '/' + serviceId, service);
    }

    deleteService(serviceId){
        return axios.delete(SERVICE_API_BASE_URL + '/' + serviceId);
    }
}

export default new ServiceService()