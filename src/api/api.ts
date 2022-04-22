import axios from "axios";

export const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});

export const getGalleryApi = {
    getPhotos(){
        return instance.get('/photos').then(res => res.data)
    },
    getPhoto(id:string){
        return instance.get(`/photos/${id}`).then(res => res.data)
    }
}