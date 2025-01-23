import React, { Component } from 'react';
export default class NewsItems extends Component {
    render() {
        let {title,descp,imgUrl,newsId,author,timeZone}=this.props
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{descp}...</p>
                        <p className="card-text"><small className="text-body-secondary">Published By {!author?"Unknown" : author} in {new Date(timeZone).toGMTString()}</small></p>
                        <a href={newsId} target='_blank'  rel="noreferrer" className="btn btn-sm btn-primary">Read More...</a>
                    </div>
                </div>
            </div>
        );
    }
}
