import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Global } from '../../../helpers/Global';
import { Ajax } from '../../../helpers/Ajax';

export const Article = () => {

  const [article, setArticle] = useState();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState();

  const { id } = useParams();

  useEffect(() => {
    let url = Global.url + "article/article/" + id;

    getArticle(url);
  }, []);

  const getArticle = async (url) => {

    let { data, loading } = await Ajax(url, 'GET');

    if (data.status === 'success') {
      setArticle(data.article);

    }
    if (data.status === 'error') {
      setMessage(data.message);
    }

    setLoading(loading);
  }

  return (
    <div className='jumbo'>
      <>
        {loading ? (<h1>Loading...</h1>) : (
          article ?
            (
              <>
                <div className='mask'>
                  <img src={Global.url + "article/image/" + article.image} alt="Image not found" onError={({ currentTarget }) => { currentTarget.onerror = null; currentTarget.src = "images/articles/default.png"; }} />
                </div>
                <h1>{article.title}</h1>
                <span>{article.date}</span>
                <p>{article.content}</p>
              </>
            ) :
            (<h1>{message}</h1>)
        )}
      </>
    </div>
  )
}
