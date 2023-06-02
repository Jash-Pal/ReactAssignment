import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class SecCompEle extends Component {


    render() {

        // descrecturing javascript 
        let {title, descriptions, imgUrl, newsUrl} = this.props
        return (
            <>
                <div className="card m-2" style={{backgroundColor: "white"}}>
                    {/* using ternary operator If the image is not there then the default link is given  */}
                    <img src={!imgUrl?"https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg":imgUrl} className="card-img-top" alt="My"/>
                    <div className="card-body" style={{color: "Black"}}>
                        <h2 className="card-title text-center">{title}</h2>
                        {/* <p className="card-text text-start">{descriptions}...</p> */}
                        <p className='text-muted'> {descriptions} <b> . . .<Link to={newsUrl} target='_blank p-3'> Know More</Link> </b>
                        </p>
                        <Link to="/buy" rel='noreferrer' className="btn btn-sm btn-info"> Purchase </Link>
                    </div>
                </div>
            </>
        )
    }
}

export default SecCompEle