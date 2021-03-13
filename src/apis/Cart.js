import Api from './Api'

export default{
    all(){
        Api.get("carts")
    },
    store(data){
        return Api.post('cart', data)
    },
    delete(id){
        return Api.delete(`carts/${id}`)
    },
    deleteAll(){
        return Api.delete('carts')
    }
}