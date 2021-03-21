// Fetch dung de goij len 1 API{URL} goi len backend va sau đó hiển thị ra FE
// Backend => APi => Fetch => JSON/XML
// JSON.parse -> Javascript types
//  Render ra giao dien HTML
// trang API json free https://jsonplaceholder.typicode.com/

var postAPI = 'https://jsonplaceholder.typicode.com/todos/';

fetch(postAPI)
    .then(function(response){
        return response.json();
    })

    .then(function(posts){
        // console.log(posts);
        var htmls = posts.map(function(post){
            return `<div>
                <p> ${post.title}</p>
                <h2> ${post.id}</h2>
            </div>`
        })

        var content = htmls.join("");

        document.getElementById('box').innerHTML = content;
    });