import React, { Children, createContext, useState,useEffect } from 'react'
import axios from "axios";
const ArticleContext=createContext();

const ArticlesProvider = ({children}) => {
  const [category, setCategory] = useState("general");
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const queryAPI= async()=>{
      const URL=`https://newsapi.org/v2/top-headlines?country=co&${category}=business&apiKey=c105012511a84a1897f5b95b3840de26`;
      const {data}=await axios(URL);
      setArticles(data.articles);
    }
    queryAPI();
  }, [category])
  
  return (
    <ArticleContext.Provider value={{category,articles}}>
      {Children}
    </ArticleContext.Provider>
  )
}
export {ArticlesProvider};
export default ArticleContext;