import React from 'react';
import { Global } from '../../../helpers/Global';

export const ArticleList = ({articles}) => {
    return (
        <>
            {articles.map((article) => {
                return (
                    <article key={article._id} className="article-item">
                        <div className='mask'>
                            <img src={Global.url + "article/image/" + article.image} />
                        </div>
                        <div className='data'>
                            <h3 className="title">{article.title}</h3>
                            <p className="description">{article.content}</p>

                            <button className="edit">Editar</button>
                            <button className="delete">Borrar</button>
                        </div>
                    </article>
                )
            })}
        </>
    )
}
