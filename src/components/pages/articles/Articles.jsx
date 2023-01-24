import React from 'react';
import { useState, useEffect } from 'react';
import { Global } from '../../../helpers/Global';
import { Ajax } from '../../../helpers/Ajax';
import { ArticleList } from './ArticleList';
import { useParams } from "react-router-dom";

export const Articles = () => {

  const [ articles, setArticles ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ reload, setReload ] = useState(true);
  const [ message, setMessage ] = useState();

  const { search } = useParams();

  useEffect(() => {
    let url = Global.url + "article/articles";
    if(search){
      url = Global.url + "article/search/" + search;
    }

    getArticles(url);
  }, [reload, search]);

  const reloadList = () => {
    reload ? setReload(false) : setReload(true);
  }

  const getArticles = async (url) => {

    let {data, loading} = await Ajax(url, 'GET');

    if (data.status === 'success') {
      setArticles(data.articles);
      if(data.articles.length === 0){
        setMessage("Not articles found");
      }
    }
    if(data.status === 'error'){
      setArticles([]);
      setMessage(data.message);
    }

    setLoading(loading);
  }

  return (
    <>
      {loading ? (<h1>Loading...</h1>) : (
        articles.length >= 1 ? <ArticleList articles={articles} reloadList={reloadList} setArticles={setArticles} /> :
          <h1>{message}</h1>
        )
      }
    </>
  )
}
