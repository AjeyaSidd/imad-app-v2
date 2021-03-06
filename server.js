var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
       article1: {
           title:'Article 1',
           heading:'Article 1',
           date: '25/6/17',
           content :  `<p>
                   Content for first article.Content for first article.Content for first article.
               </p>
               <p>
                   Content for first article.Content for first article.Content for first article.
               </p>`
       },
       article2 :  {
           title:'Article 2',
           heading:'Article 2',
           date: '26/6/17',
           content : ` <p>
               Content for second article. Content for second article Content for second article 
               Content for second article Content for second article
                   </p>
                   <p>
                      Content for second article. Content for second article Content for second article 
                       Content for second article Content for second article
                   </p> `
           
       }
};
function createTemplate(data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
        <!DOCTYPE html>
    <html>
      <head>
          <title>
              ${title}
          </title>
          <meta name="viewport" content="width=device-width ,initial-scale=1" />
           <link href="/ui/style.css" rel="stylesheet" />
      </head>
      <body>
         <div class="container">
           <div>
               <a href="/">Home</a>
           </div>
           <hr/> <!-- horizontal line -->
           <h1>
               ${heading}
           </h1>
           <div>
               ${date}
           </div>
           <div>
             ${content}
           </div>
         </div>
      </body>
    </html>
    
    `; 
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get("/counter",function(req,res){
    counter++;
    res.send(counter.toString());
});

var names=[];
app.get('/submit-name', function (req, res) {
    var name = req.query.name; // using query parameter
    names.push(name);
    res.send(JSON.stringify(names));
});


 app.get('/:articleName', function(req,res){
    var article=req.params.articleName;
  res.send(createTemplate(articles[article]));
}) ;

/* app.get('/article2', function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'article2.html'));
});
comment out due to 76 */

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js',function (req,res) {
   res.sendFile(path.join(__dirname,'ui','main.js')); 
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
