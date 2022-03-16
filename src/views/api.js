import axios from "axios";
const productUrl = "/Api/Product/";

export default class API{
  static async fetchAllProducts(){
    const res = await axios.get(productUrl);
    return res.data;
  }
  static async fetchProductByID(id){
    const res = await axios.get('${productUrl}/${id}');
    return res.data;
  }
  static async createProduct(product){
    const res = await axios.post(productUrl, product);
    return res.data;
  }
  static async createProduct(id, product){
    const res = await axios.patch('${productUrl}/${id}', product);
    return res.data;
  }
  static async updateProduct(id){
    const res = await axios.delete('${productUrl}/${id}');
    return res.data;
  }
}
