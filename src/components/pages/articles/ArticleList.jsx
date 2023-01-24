import React from 'react';
import { Ajax } from '../../../helpers/Ajax';
import { Global } from '../../../helpers/Global';
import { Link, useNavigate } from 'react-router-dom';

export const ArticleList = ({articles, reloadList}) => {

    const navigate = useNavigate();

    const deleteArticle = async (id) =>{
        const {data: response} = await Ajax(Global.url + "article/article/" + id, "DELETE"); 
        if(response.status === "success"){
            reloadList && reloadList();
        }
    }

    const editArticle =  (id) => {
        navigate("/article/update/" + id);
    }

    return (
        <>
            {articles.map((article) => {
                return (
                    <article key={article._id} className="article-item">
                        <div className='mask'>
                            <img src={ Global.url + "article/image/" + article.image } alt="Image not found" onError={({currentTarget}) => {currentTarget.onerror = null; currentTarget.src ="images/articles/default.png"; }} />
                        </div>
                        <div className='data'>
                            <h3 className="title"><Link to={"/article/" + article._id}>{article.title}</Link></h3>
                            <p className="description">{article.content}</p>

                            <button className="edit" onClick={() => editArticle(article._id)}>Editar</button>
                            <button className="delete" onClick={() => {deleteArticle(article._id)}}>Borrar</button>
                        </div>
                    </article>
                )
            })}
        </>
    )
}
