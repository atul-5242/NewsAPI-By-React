import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title,description,img_url,url}=this.props;
    return (

      
     <div className="card" >
  <img src={img_url} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} className="btn btn-sm btn-primary"  target="_blank"  rel="noreferrer">Go somewhere</a>
  </div>
</div>
    )
  }
}

export default NewsItem
