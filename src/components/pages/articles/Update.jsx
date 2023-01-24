import React, { useEffect, useState } from 'react';
import { useForm } from '../../../hooks/userForm';
import { Global } from '../../../helpers/Global';
import { Ajax } from '../../../helpers/Ajax';
import { useParams } from "react-router-dom";

export const Update = () => {

  const { form, updated, sendForm } = useForm({});
  const [article, setArticle] = useState({});
  const [message, setMessage] = useState('');

  const { id } = useParams();

  useEffect(() => {
    let url = Global.url + "article/article/" + id;

    getArticle(url);
  }, [message]);

  const getArticle = async (url) => {

    let { data } = await Ajax(url, 'GET');

    if (data.status === 'success') {
      setArticle(data.article);

    }
    if (data.status === 'error') {
      setMessage(data.message);
    }

  }

  const updateArticle = async (e, od) => {
    e.preventDefault();

    let url = Global.url + "article/article/" + id;
    let { data: response } = await Ajax(url, "PUT", form);

    const inputImage = document.querySelector('#file');

    if (response.status === "success" && inputImage.files[0]) {

      const formData = new FormData();
      formData.append('file0', inputImage.files[0]);
      let url = Global.url + "article/upload-image/" + response.article._id

      let { imageResponse } = await Ajax(url, "POST", formData, true);
    }

    setMessage(response.message);
  }

  return (
    <div className='jumbo'>
      <h1>Edit your article</h1>
      <p>Form to update an article</p>
      {<strong>{message ? message : ""}</strong>}

      <form className='form' onSubmit={(e) => updateArticle(e, article.id)}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input type='text' name='title' defaultValue={article.title} onChange={updated} />
        </div>
        <div className='form-group'>
          <label htmlFor='content'>Content</label>
          <textarea type='text' name='content' defaultValue={article.content} onChange={updated} />
        </div>
        <div className='form-group'>
          <label htmlFor='file0'>Image</label>
          <div className='mask'>
            <img src={article ? Global.url + "article/image/" + article.image : ""} alt="Image not found" onError={({ currentTarget }) => { currentTarget.onerror = null; currentTarget.src = "images/articles/default.png"; }} />
          </div>
          <input type='file' name='file0' id='file' />
        </div>

        <input type='submit' value='Save' className='btn btn-success' />
      </form>
    </div>
  )
}
