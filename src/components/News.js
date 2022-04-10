import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setloading] = useState([true])
  const [page, setpage] = useState([1])
  const [totalResults, settotalResults] = useState([0])


    // constructor(){
    //     super();
    //     // console.log("Hello I am a constructor from news component");
    
    // }

  const  updateNews = async () => {
       props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=0a38e87b683d44a89e8f9dd8b7615557&page=${page}&pageSize=${props.pageSize}`;
       setloading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles);
        settotalResults(parsedData.totalResults);
        setloading(false)
      props.setProgress(100);
    }

     useEffect(() => {
      updateNews();
       }, [])



      // const handlePreviousClick =   async ()=>{

      //   setpage(page - 1)
      //     updateNews();
      //    }
    
      // const handleNextClick = async ()=>{
      //     setpage(page + 1)
      //   updateNews();
      //    }

   const  fetchMoreData = async () => {
    setpage(page+1);
       const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=0a38e87b683d44a89e8f9dd8b7615557&page=${page}&pageSize=${props.pageSize}`;

       let data = await fetch(url);
       let parsedData = await data.json()
       setArticles( articles.concat(parsedData.articles))
       settotalResults(parsedData.totalResults)
    
      };


        return (
           
            <>
                <h1 className="text-center" style={{margin:"35px 0px",marginTop:'90px'}}>NewsMonkey - Top Headlines</h1>
                 {loading && <Spinner/>}
                <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
           loader={<Spinner/>}
        >
           
              
           
          <div className="container">
            
                <div className="row">
                {articles.map((element)=>{
    return <div className="col-md-4" key={element.url}>
     <Newsitem  Title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0,77):""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt}/>
      </div> 
                })}
            </div>
       </div>
           
       </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
           </div> */}

</>
       
        )
    }


News.defaultProps = {
    country: 'in',
    pageSize: 8,
 category: 'general'
}

News.propTypes = {
   country: PropTypes.string,
   pageSize:PropTypes.number,
   category: PropTypes.string,
}

export default News
