import React from 'react';
import { useState, useEffect } from 'react';
import { Global } from '../../../helpers/Global';
import { Ajax } from '../../../helpers/Ajax';
import { ArticleList } from './ArticleList';

export const Articles = () => {

  const [ articles, setArticles ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const url = Global.url + "article/articles/";
    getArticles(url);
  }, []);

  const getArticles = async (url) => {

    let {data, loading} = await Ajax(url, 'GET');

    if (data.status === 'success') {
      setArticles(data.articles);
    }

    setLoading(loading);
  }

  return (
    <>
      {articles.length >= 1 ? 
        <ArticleList articles={articles} setArticles={setArticles} /> : 
        (loading ? (<h1>Loading...</h1>) : (<h1>Not articles found</h1>))
      }
    </>
  )
}
