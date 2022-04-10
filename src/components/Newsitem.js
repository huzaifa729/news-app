
import React  from 'react'

  const Newsitem = (props)=> {
 
      let  {Title,description,imageurl,newsurl,author,date} = props
        return (
            <div className="my-3">
         <div className="card" >
  <img src={!imageurl?"https://s.w-x.co/in-earthshine%281%29.jpg":imageurl} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{Title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on 3 {new Date(date).toGMTString()} </small></p>
    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div> 
 </div>

        )
    }


export default Newsitem
