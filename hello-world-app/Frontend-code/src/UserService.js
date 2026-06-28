import axios from "axios";

 const api_url='http://localhost:9191/api/v1/getAll';

 export const getinformation= () =>{
    return axios.get(api_url);
 };

  const api_url_post='http://localhost:9191/api/v1/saveEmp';


 export const adduser =(user)=>{
    axios.post(api_url_post,user);
 };


 const software_post='http://localhost:9191/software/saveData';

 export const addsoftware=(Sdata)=>{
   axios.post(software_post,Sdata);
 }

 const Medical_post='http://localhost:9191/medical/save';

 export const addmedical=(Mdata)=>{
   axios.post(Medical_post,Mdata);
 }

 const Banking_post='http://localhost:9191/banking/save';

 export const addbanking=(Bdata)=>{
   axios.post(Banking_post,Bdata);
 }

 const Teaching_post='http://localhost:9191/teaching/save';

 export const addteaching=(Tdata)=>{
   axios.post(Teaching_post,Tdata);
 }

//softwaredata using getall method its returns 
  const software_data='http://localhost:9191/software/get';

 export const getsoftwaredata= () =>{
    return axios.get(software_data);
 };


 //medicaldata using getall method its returns 
  const medical_data='http://localhost:9191/medical/get';

 export const getmedicaldata= () =>{
    return axios.get(medical_data);
 };

  //bankingdata using getall method its returns 
  const Banking_data='http://localhost:9191/banking/get';

 export const getbankingdata= () =>{
    return axios.get(Banking_data);
 };

 //teachingdata using getall method its returns 
  const Teaching_data='http://localhost:9191/teaching/get';

 export const getteachingdata= () =>{
    return axios.get(Teaching_data);
 };

 
