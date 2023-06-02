import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/ThirdComp.css'
import { Header } from './Header';

export class ThirdCompEle extends Component {

    constructor(props) {
        super(props);
        this.state = { articles: [] }
    }

    componentDidMount() {
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(resp => resp.json())
        .then(resp => this.setState({ articles: resp }));
    }

    render() {

        return (
            <>
                <section className="gallery" id="gallery">
                    <Header />
                    <div className="box-container">
                        {this.state.articles.map((e) => {
                            return <div className='container col-md-4' key={e.show.id}>
                                <div className="box text-center">
                                    <img src={e.show.image.medium} alt="" className='text-center'/>
                                    <div className="content">
                                        <h3>{e.show.name}</h3>
                                        <small className='text-muted'> Genres : {e.show.genres[0]}  {e.show.genres[1]}</small>
                                        <p className='card-text'><small className='text-muted'>Status : {e.show.status}</small> </p>
                                        <Link to='/ele' rel='noreferrer' className="btn btn-sm btn-info mx-3">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </section>

            </>
        )
    }
}

export default ThirdCompEle