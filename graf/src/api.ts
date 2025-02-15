import axios from "axios"


const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3333';

const instance = axios.create({
  baseURL: apiUrl,  // добавляем базовый URL
});

export default instance;

export const getReqAll = async () => {
    try {
        const res  = await instance.get('/api/req/all') 
        return res.data
    } catch (error) {
        console.error('ошбика полчение карточкепцаигоцуатш0цута', error)
    }
}

export const getReqByID = async (id:number) => {
    try {
        const res = await instance.get(`/api/req/${id}`)
        return res.data
    } catch (error) {
        console.error('err', error)
    }
}

interface ReqData {
    id?: number;  // ID может быть не указан при создании
    namePosition: string;
    nameVacancy: string;
    department: string;
    dateBegin: string;
    dateEnd: string;
    gender: string;
    education: string;
    typeSalary: string;
    salBegin: number;
    salEnd: number;
    region: string;
    address: string;
    metro: string;
    experience: string;
    workSchedule: string;
    functionalResponsibilities: string;
    wishes: string;
    advantage: string;
    weOffer: string;
    employmentType: string;
}


export const createReq = async (data: ReqData) => {
    try {
        const res = await instance.post('/api/job_postings', data);  
        return res.data;
    } catch (error) {
        console.error('Ошибка при создании записи:', error);
    }
}


export const updateReq = async (id: number, data: ReqData) => {
    try {
        const res = await instance.put(`/api/job_postings/${id}`, data);  
        return res.data;
    } catch (error) {
        console.error('Ошибка при обновлении записи:', error);
    }
}