import {useState} from 'react';

export const useForm = (formInit = {}) => {

  const [form, setForm] = useState(formInit);

  const serializeForm = (form) =>{
    const formData = new FormData(form);
    let object = {};

    for(let [name, value] of formData){
      object = {...object, [name]:value};
    }
    return object;
  }

  const updated = ({target})=>{
    const {name, value} = target;
    setForm({...form, [name]: value});
  }

  const sendForm = (e) => {
    e.preventDefault();
    
    let curso = serializeForm(e.target);
    setForm(curso);

    document.querySelector(".codigo").classList.add("enviado");
  }

    return{
        form,
        sendForm,
        updated
    }
}