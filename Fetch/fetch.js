// Fetch dung de goij len 1 API{URL} goi len backend va sau đó hiển thị ra FE
// Backend => APi => Fetch => JSON/XML
// JSON.parse -> Javascript types
//  Render ra giao dien HTML
// trang API json free https://jsonplaceholder.typicode.com/

var postAPI = 'https://jsonplaceholder.typicode.com/comments';

fetch(postAPI)
    .then(function(response){
        return response.json();
    })

    .then(function(posts){
        // console.log(posts);
        var htmls = posts.map(function(post){
            return `<ul>
                <li> ${post.id}</li>
                <li> ${post.name}</li>
                <li> ${post.email}</li>
            </ul>`
        })

        var content = htmls.join("");

        document.getElementById('box').innerHTML = content;
    });