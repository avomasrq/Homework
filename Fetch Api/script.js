// const customArticles = [
//     {
//         userId: 1,
//         id: 1,
//         title: "7 Practical CSS Tips",
//         body: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
//         imageUrl: "./assets/mac.png"
//     },
//     {
//         userId: 1,
//         id: 2,
//         title: "7 Practical CSS Tips",
//         body: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills. To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...",
//         imageUrl: "./assets/nig.png"
//     },
//     {
//         userId: 1,
//         id: 3,
//         title: "7 Practical CSS Tips",
//         body: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...",
//         imageUrl: "./assets/painting.png"
//     },  
//     // {
//     //     userId: 1,
//     //     id: 4,
//     //     title: "eum et est occaecati",
//     //     body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
//     // },
// ]

// const articlesContainer = document.getElementById("articles");
// // const loader = document.getElementById("loader");


// let article = `
//     <div class="d-flex mt-5>
//         <div id="article">
//             <p id="author">Authors name in Topics Name</p>
//             <h3 id="title"></h3>
//             <p id="body"></p>
//             <nav class="navbar fixed-bottom bg-body-tertiary">
//             <div class="container-fluid">
//                 <button class="navbar-brand position-absolute top-50 start-0 translate-middle-y">Java Script</button>
//             </div>
//             </nav>
//         </div>
//         <img src="${item.imageUrl || './assets/default.png'}" class="rounded mx-auto d-block m-lg-5" alt="picture">
//     </div>
//     <hr>
// `

// function getArticlesFromAPI(){
//     return new Promise((res, rej) => {
//         setTimeout(() => res(customArticles), 3000)
//     })
// }

// function getArticleHTML(item) {
//     return `
//     <div class="d-flex mt-5">
//         <div id="article">
//             <p id="author">Authors name in Topics Name</p>
//             <h3 id="title">${item.title}</h3>
//             <p id="body">${item.body}</p>
//             <nav class="navbar fixed-bottom bg-body-tertiary">
//                 <div class="container-fluid">
//                     <button class="navbar-brand position-absolute top-50 start-0 translate-middle-y">Java Script</button>
//                 </div>
//             </nav>  
//         </div>
//         <img src="${item.imageUrl || './assets/default.png'}" class="rounded mx-auto d-block m-lg-5" alt="picture">
//     </div>
//     <hr>
//     `;
// }


// // getArticlesFromAPI()
// //     .then((res) => {
// //         const loader = document.getElementById("loader");
// //         loader.remove()
// //         // loader.className = 'hidden'
// //         res.forEach((item) => {
// //             // article = article.replace('id="title">', `id="title">${item.title}`);
// //             // article = article.replace('id="body">', `id="body">${item.body}`);
        
// //             articlesContainer.innerHTML += getArticleHTML(item);
// //         })    
// //     })

// // fetch('https://jsonplaceholder.typicode.com/posts')
// //     .then(response => response.json())
// //     .then(data => {
// //         const articles = data.slice(0, 3);
// //         customArticles.forEach(item => {
// //             articlesContainer.innerHTML += getArticleHTML(item);
// //         });
// //     })
// //     .catch(error => console.error('Error fetching data:', error));


// getArticlesFromAPI().then((res) => {
//     const loader = document.getElementById("loader");
//     loader.remove();

//     let articlesHTML = '';
//     res.forEach((item) => {
//         articlesHTML += getArticleHTML(item);
//     });
//     articlesContainer.innerHTML = articlesHTML;
// });

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => {
//         const uniqueArticles = data.slice(0, 3).filter(
//             item => !customArticles.some(article => article.id === item.id)
//         );

//         let articlesHTML = '';
//         customArticles.forEach(item => {
//             item.imageUrl = `./assets/image${Math.floor(Math.random() * 3) + 1}.png`; 

//             articlesHTML += getArticleHTML(item);
//         });

//         articlesContainer.innerHTML += articlesHTML;
//     })
//     .catch(error => console.error('Error fetching data:', error));





const customArticles = [
    {
        userId: 1,
        id: 1,
        title: "7 Practical CSS Tips",
        body: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
        imageUrl: "./assets/mac.png"
    },
    {
        userId: 1,
        id: 2,
        title: "7 Practical CSS Tips",
        body: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills. To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...",
        imageUrl: "./assets/nig.png"
    },
    {
        userId: 1,
        id: 3,
        title: "7 Practical CSS Tips",
        body: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills. To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...",
        imageUrl: "./assets/painting.png"
    },
];

const articlesContainer = document.getElementById("articles");

function getArticlesFromAPI() {
    return new Promise((res) => {
        setTimeout(() => res(customArticles), 3000);
    });
}

function getArticleHTML(item) {
    return `
    <div class="d-flex mt-5">
        <div id="article">
            <p id="author">Authors name in Topics Name</p>
            <h3 id="title">${item.title}</h3>
            <p id="body">${item.body}</p>
            <nav class="navbar fixed-bottom bg-body-tertiary">
                <div class="container-fluid">
                    <button class="navbar-brand position-absolute top-50 start-0 translate-middle-y">Java Script</button>
                </div>
            </nav>  
        </div>
        <img src="${item.imageUrl}" class="rounded mx-auto d-block m-lg-5" alt="picture">
    </div>
    <hr>
    `;
}

getArticlesFromAPI().then((res) => {
    const loader = document.getElementById("loader");
    loader.remove();

    let articlesHTML = '';
    res.forEach((item) => {
        articlesHTML += getArticleHTML(item);
    });
    articlesContainer.innerHTML = articlesHTML;
});

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        const uniqueArticles = data.slice(0, 3).filter(
            item => !customArticles.some(article => article.id === item.id)
        );

        let articlesHTML = '';
        uniqueArticles.forEach(item => {
            articlesHTML += getArticleHTML({
                ...item,
                imageUrl: './assets/default.png' 
            });
        });

        articlesContainer.innerHTML += articlesHTML;
    })
    .catch(error => console.error('Error fetching data:', error));
