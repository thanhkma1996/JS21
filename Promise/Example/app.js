var user = [
    {
        id: 1,
        name: "Kien Dam"
    },

    {
        id: 2,
        name: "Thanh Nguyen"
    },

    {
        id: 3,
        name: "Duong Nguyen"
    }
]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: " Da lam xong r nhe"
    },

    {
        id: 2,
        user_id: 2,
        content: " Chua xong dau "
    },

    {
        id: 3,
        user_id: 3,
        content: "Lam di"
    }
];

//  1 lay ra comment
// 2 tu comment lay ra user id
// 3. Tu user_id lay ra user tuong ứng''

// Fake API

function getUserById(userIds){
    return new Promise(function(resolve){
        var result = user.filter(function(user){
            return userIds.includes(user.id);
        });

        resolve(result);
    });
}

function getComment(){
    return new Promise(function(resolve){
       setTimeout(function(){
            resolve(comments)
       },1000);
    });
}

// getUserById([1,2,3])
//     .then(function(user){
//         console.log(user);
//     });

getComment()
    .then(function(comments){
        // console.log(comments);
        var userIds = comments.map(function (comment) {
            return comment.user_id;
        })

        return getUserById(userIds)
            .then(function(user){
                return {
                    user: user,
                    comments: comments
                }
            });
    })

    .then(function(data){
        // console.log(user.name);
        // data.user.forEach(function(user){
        //     console.log(user.name);
        // });

        var comentBlock = document.getElementById("comment-box");
        var html = '';

        data.comments.forEach(function(comment){
            var user = data.user.find(function(user){
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content} </li>` ;
        });

        comentBlock.innerHTML = html;
    });