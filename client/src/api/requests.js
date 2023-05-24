import { BASE_URL } from "./base_url";
import axios from "axios";

//get all Colorlibs
export const getAllColorlib = async () => {
    let globalData;
    await axios.get(`${BASE_URL}/colorlibs`)
        .then(res => {
            globalData = res.data.data
        })
    return globalData;
}

//get Colorlib by id
export const getColorlibById = async (id) => {
    let globalData;
    await axios.get(`${BASE_URL}/colorlibs/${id}`)
        .then(res => {
            globalData = res.data.data
        })
    return globalData;
}
//delete Colorlib by id
export const deleteColorlibById = async (id) => {
    await axios.delete(`${BASE_URL}/colorlibs/${id}`)
}

//update Colorlib
export const updateColorlib = async (id, data) => {
    let globalData;
    await axios.put(`${BASE_URL}/colorlibs/${id}`, data)
        .then(res => {
            globalData = res.data.data
        })
    return globalData;
}