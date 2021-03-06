var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
        title: 'Article One is here!',
        heading: 'Article One',
        date: '12 Feb, 2017',
        content: `
                <p>Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. </p>
                <p>Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. </p>
                <p>Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. </p>
                `
    },
    'article-two' : {
        title: 'Article Two is here!',
        heading: 'Article Two',
        date: '12 Feb, 2017',
        content: `
            <p>Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. </p>
            <p>Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. </p>
            <p>Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. </p>
            `
    },
    'article-three' : {
        title: 'Article Three is here!',
        heading: 'Article Three',
        date: '12 Feb, 2017',
        content: `
            <p>Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. </p>
            <p>Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. </p>
            <p>Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. </p>
            `
    },
    'article-four' : {
        title: 'Four is more!',
        heading: 'Article 4',
        date: '12 Feb, 2017',
        content: `
            <p>Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. </p>
            <p>Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. </p>
            <p>Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. Lorem ipsum is sum of all ipsum lorems. </p>
            `
    }
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>${title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="/styles/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                    <a href="/">Home</a>
                    <hr/>
                    <h1>${heading}</h1>
                    <div>Date: ${date}</div>
                    <div>${content}</div>
                </div>
            </body>
        </html>
    `;
    
    return htmlTemplate;    
    }

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/profile', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile.html'));
});

//counter endpoint
var counter = 0;
app.get('/counter', function (req, res) {
    counter++;
    res.send(counter.toString());
});

//generic code to fetch any article
app.get('/:blah', function (req, res) {
  var blah = req.params.blah;
  res.send(createTemplate(articles[blah]));
});

/*
app.get('/article-one', function (req, res) {
  res.send(createTemplate(articles.articleOne));
});

app.get('/article-two', function (req, res) {
  res.send(createTemplate(articles.articleTwo));
});

app.get('/article-three', function (req, res) {
  res.send(createTemplate(articles.articleThree));
});
*/

/*app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});*/

//generic code to fetch any style
app.get('/styles/:blah', function (req, res) {
    var blah = req.params.blah;
    res.sendFile(path.join(__dirname, 'styles', blah));
});

/*app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/profile.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile.js'));
});*/

//generic code to fetch any script
app.get('/scripts/:blah', function (req, res) {
    var blah = req.params.blah;
    res.sendFile(path.join(__dirname, 'scripts', blah));
});

//generic code to fetch any image
app.get('/images/:blah', function (req, res) {
    var blah = req.params.blah;
    res.sendFile(path.join(__dirname, 'images', blah));
});

/*app.get('/images/chaplin.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'images', 'chaplin.png'));
});

app.get('/images/xkcd52.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'images', 'xkcd52.jpg'));
});*/

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
