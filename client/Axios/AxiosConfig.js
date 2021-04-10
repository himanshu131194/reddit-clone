import axios from 'axios';
const API_URL = "http://localhost:3000";

const STORAGE_KEYS = {
    token: 't_L3&',
    user: 'u_d#%'
};

const EncryptionUtils = {
    encode : data => window.btoa(data),
    decode : data => window.atob(data)
};

const storageMechanism = window.localStorage; // or window.sessionStorage;

const StorageUtils = {
    setItem: (key, value) => {
        const encodedValue = EncryptionUtils.encode(JSON.stringify(value));
        storageMechanism.setItem(key, encodedValue);
    },
    getItem: (key) => {
        const value = storageMechanism.getItem(key);
        if (value) {
            return JSON.parse(EncryptionUtils.decode(value));
        }
    
        return null;
    },
    removeItem: (key) => {
        storageMechanism.removeItem(key);
    },
    clearAll: () => {
        storageMechanism.clear();
    }
};

const axiosInstance = axios.create({
     baseURL: API_URL
});

axiosInstance.interceptors.request.use((config)=>{

});

axiosInstance.interceptors.response.use();





export default axiosInstance;