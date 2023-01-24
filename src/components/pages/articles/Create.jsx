import React, { useEffect, useState } from 'react';
import { useForm } from '../../../hooks/userForm';
import { Global } from '../../../helpers/Global';
import { Ajax } from '../../../helpers/Ajax';

export const Create = () => {

  const {form, updated, sendForm} = useForm({});

  const [message, setMessage] = useState('');

  const saveArticle = async (e) => {
    e.preventDefault();

    let url = Global.url + "article/create";
    let {data: response} =  await Ajax(url, "POST", form);
    
    const inputImage = document.querySelector('#file');
    
    if(response.status === 200 && inputImage.files[0]){
    
      const formData = new FormData();
      formData.append('file0', inputImage.files[0]);
      let url = Global.url + "article/upload-image/" + response.article._id

      let {imageResponse} =  await Ajax( url , "POST", formData, true);
    }

    setMessage(response.message);
  }

  return (
    <div className='jumbo'>
      <h1>Create your article</h1>
      <p>Form to create an article</p>
      {<strong>{message ? message : ""}</strong>}

      <form className='form' onSubmit={saveArticle}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input type='text' name='title' onChange={updated}/>
        </div>
        <div className='form-group'>
          <label htmlFor='content'>Content</label>
          <textarea type='text' name='content' onChange={updated}/>
        </div>
        <div className='form-group'>
          <label htmlFor='file0'>Image</label>
          <input type='file' name='file0' id='file'/>
        </div>

        <input type='submit' value='Save' className='btn btn-success' />
      </form>
    </div>
  )
}
