import { Product } from '../../interfaces/Product';
import axiosClient from '../axiosClient';

const sneakerAPI = {
    getSneakerList: () => {
        return axiosClient.get<unknown, Product[]>("products");
    },
}

export default sneakerAPI;