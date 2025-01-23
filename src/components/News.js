import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Snipper from './Snipper';

export default class News extends Component {
    static defaultProps = {
        name: 'stranger',
        country: 'us',
        crgry: 'general',
        pageSize: 10,
    };

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            pages: 1,
            totalResults: 0,
        };
    }

    async fetchNews() {
        const { country, crgry, pageSize } = this.props;
        const { pages } = this.state;
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${crgry}&apiKey=27f333e463c74cc285271e05c13109ba&page=${pages}&pageSize=${pageSize}`;
        this.setState({ loading: true });
        try {
            const data = await fetch(url);
            const parsedData = await data.json();
            if (parsedData.articles) {
                this.setState({
                    articles: parsedData.articles,
                    totalResults: parsedData.totalResults,
                    loading: false,
                });
            } else {
                console.error("No articles found in API response.");
                this.setState({ loading: false });
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            this.setState({ loading: false });
        }
    }

    componentDidMount() {
        this.fetchNews();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.crgry !== this.props.crgry) {
            this.setState({ pages: 1 }, this.fetchNews);
        }
    }

    handlePageChange = (direction) => {
        this.setState(
            (prevState) => ({
                pages: direction === 'next' ? prevState.pages + 1 : prevState.pages - 1,
            }),
            this.fetchNews
        );
    };

    render() {
        const { loading, articles, pages, totalResults } = this.state;
        const { crgry, pageSize } = this.props;

        // Capitalize the first letter of the category for display
        const capitalizedCategory = crgry.charAt(0).toUpperCase() + crgry.slice(1);

        return (
            <div className='container my-5'>
                <h1 className='text-center'>
                    TSocity - Top Headlines {capitalizedCategory !== "General" && `in ${capitalizedCategory}`}
                </h1>
                {loading && <Snipper />}
                <div className="row">
                    {articles.length > 0 ? (
                        articles.map((element) => (
                            <div className="col-md-4" key={element.url}>
                                <NewsItems 
                                    imgUrl={element.urlToImage} 
                                    title={element.title?.slice(0, 67) || ''} 
                                    descp={element.description?.slice(0, 132) || ''} 
                                    newsId={element.url} 
                                    author={element.author}
                                    timeZone={element.publishedAt}
                                />
                            </div>
                        ))
                    ) : (
                        <p>No news articles available at the moment.</p>
                    )}
                </div>
                <div className="container d-flex justify-content-between my-3">
                    <button
                        disabled={pages <= 1}
                        className="btn btn-dark"
                        onClick={() => this.handlePageChange('prev')}
                    >
                        &larr; Previous
                    </button>
                    <button
                        className="btn btn-dark"
                        onClick={() => this.handlePageChange('next')}
                        disabled={pages >= Math.ceil(totalResults / pageSize)}
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        );
    }
}
