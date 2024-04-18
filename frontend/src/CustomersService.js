import axios from "axios";
const API_URL = 'http://localhost:8000';

export default class CustomersService {

    
    getCustomers() {
        const url = `${API_URL}/api/customers/`;
        return axios.get(url).then(response => response.data);
    }
    
    getCustomersByUrl(link) {
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }

    getCustomer(pk) {
        const url = `${API_URL}/api/customers/${pk}`;
        return axios.get(url).then(response => response.data);
    }

    deldeleteCustomer(customer) {
        const url = `${API_URL}/api/customers/${customer.pk}`;
        return axios.delete(url)
            .then(response => {
                // Handle successful deletion
                console.log("Customer deleted successfully:", response.data);
                return response.data; // Optionally return data if needed
            })
            .catch(error => {
                // Handle errors
                console.error("Error deleting customer:", error);
                throw error; // Rethrow the error to propagate it to the caller
            });
    }
    

    createCustomer(customer) {
        const url = `${API_URL}/api/customers/`;
        return axios.post(url, customer);
    }

    updateCustomer(customer) {
        const url = `${API_URL}/api/customers/${customer.pk}`;
        return axios.put(url, customer);
    }
}