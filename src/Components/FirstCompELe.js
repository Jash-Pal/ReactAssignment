import React, { Component } from 'react';
import SecCompEle from './SecCompEle';

export class FirstCompEle extends Component {

    constructor(props) {
        super(props);
        this.state = {articles: []}
    }

    componentDidMount() {
        fetch('https://api.tvmaze.com/search/shows?q=all').then(resp=>resp.json()).then(resp=>this.setState({articles:resp}));
    }

    
    render() {

        return (
            <>
                <div className='container my-5'>
                    <hr></hr>
                        <div className='container'>
                            <div className='row'>
                                {this.state.articles.map((e) => {
                                    return <div className='col-md-4 col-sm-8' key={e.show.id }>
                                        <SecCompEle id={e.show.id} title={e.show.name} imgUrl={e.show.image.medium} genres={e.show.genres} Status={e.show.status} newsUrl={e.show.url}  descriptions={e.show.summary ? e.show.summary.slice(0, 150) : ""}/> 
                                        {/* coz of no stability in text we are using ternary operator to decide its length  */}
                                    </div>
                                })}
                            </div>
                        </div>
                </div>
            </>
        )
    }
}

export default FirstCompEle;