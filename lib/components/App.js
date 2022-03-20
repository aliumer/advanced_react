import React from 'react';
import DataApi from '../DataApi.js';
import * as data from '../testData.json'
import ArticleList from './ArticleList.js';

const api = new DataApi(data.default.data);

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            articles: api.getArticles(),
            authors: api.getAuthors()
        };

    };

    articleActions = {
        lookupAuthor: (authorId) => {
            return this.state.authors[authorId];
        }
    };

render() {
    return (
        <div>
            <ArticleList
                articles={this.state.articles}
                articleActions={this.articleActions}
            />
        </div>
    )
}
}

export default App;