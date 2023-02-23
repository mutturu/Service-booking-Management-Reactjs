import axios from 'axios';

const SERVICEREPORT_API_BASE_URL = "http://localhost:8083/api/v1/servicereports";

class ServicereportService {

    getServicereports(){
        return axios.get(SERVICEREPORT_API_BASE_URL);
    }

    createServicereport(servicereport){
        return axios.post(SERVICEREPORT_API_BASE_URL, servicereport);
    }

    getServicereportById(servicereportId){
        return axios.get(SERVICEREPORT_API_BASE_URL + '/' + servicereportId);
    }

    updateServicereport(servicereport, servicereportId){
        return axios.put(SERVICEREPORT_API_BASE_URL + '/' + servicereportId, servicereport);
    }

    deleteServicereport(servicereportId){
        return axios.delete(SERVICEREPORT_API_BASE_URL + '/' + servicereportId);
    }
}

export default new ServicereportService()