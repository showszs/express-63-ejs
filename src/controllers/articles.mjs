export const getArticleHandler = (req, res) => {
    const title = "Articles";

    const articles = [
        { id: 1, title: 'First Article', content: 'This is the content of the first article.' },
        { id: 2, title: 'Second Article', content: 'This is the content of the second article.' },
        { id: 3, title: 'Third Article', content: 'This is the content of the third article.' },
        { id: 4, title: 'Fourth Article', content: 'This is the content of the fourth article.' },
        { id: 5, title: 'Fifth Article', content: 'This is the content of the fifth article.' }
    ];

    res.render('articles', { articles, title });
}


export const postArticleHandler = (req, res) => {
    res.end("Post articles Route")
}

export const getArticleByIdHandler = (req, res) => {
    const articles = [
        { id: 1, title: 'First Article', content: 'This is the content of the first article.' },
        { id: 2, title: 'Second Article', content: 'This is the content of the second article.' },
        { id: 3, title: 'Third Article', content: 'This is the content of the third article.' },
        { id: 4, title: 'Fourth Article', content: 'This is the content of the fourth article.' },
        { id: 5, title: 'Fifth Article', content: 'This is the content of the fifth article.' }
    ];

    const articleId = parseInt(req.params.articleId); 
    const article = articles.find(a => a.id === articleId);

    if (article) {
        res.render('article', { article });
    } else {
        res.status(404).send('Article not found');
    }
}

export const putArticleByIdHandler = (req, res) => {
    const {articleId} = req.params
    res.end(`Put Article by id Route:${articleId}`)
}

export const deleteArticleByIdHandler = (req, res) => {
    const {articleId} = req.params
    res.end(`Delete Article by id Route:${articleId}`)
}