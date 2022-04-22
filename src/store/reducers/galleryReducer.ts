import { ThunkAction } from "redux-thunk"
import { getGalleryApi } from "../../api/api"
import { RootState } from "../store"

let initialState = {
    gallery: [] as Array<GalleryItemType>,
    aboutPhoto: {} as GalleryItemType
}

export type GalleryItemType = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

type InitialStateType = typeof initialState

type ActionType = ReturnType<typeof setGallery> | ReturnType<typeof setAboutPhoto>

const galleryReducser = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET_ABOUT_PHOTO": {
            return { ...state, aboutPhoto: action.photo }
        }
        case "SET_GALLERY": {
            return { ...state, gallery: [...action.data] }
        }
        default: return state;
    }
}

export default galleryReducser

export const setAboutPhoto = (photo: GalleryItemType) => ({ type: "SET_ABOUT_PHOTO", photo } as const)

const setGallery = (data: Array<GalleryItemType>) => ({ type: "SET_GALLERY", data } as const)

export const getGallery = (): ThunkAction<Promise<void>, RootState, unknown, ActionType> => async (dispatch) => {
    const data = await getGalleryApi.getPhotos()
    const arr = data.slice(0, 24)    
    setTimeout(() => {
        dispatch(setGallery(arr))
    }, 500);
}

export const getAboutPhoto = (id: string): ThunkAction<Promise<void>, RootState, unknown, ActionType> => async (dispatch) => {
    const data = await getGalleryApi.getPhoto(id)
    setTimeout(() => {
        dispatch(setAboutPhoto(data))
    }, 500);
}