let elUl = document.querySelector('.Ul');
let elSearchInp = document.querySelector('.search');
let elFragment = document.createDocumentFragment();
let elSearchBtn = document.querySelector('.search-btn');
    document.addEventListener('DOMContentLoaded', () => {
        fetch('https://dummyjson.com/posts', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            data.posts.forEach(element => {
                addUI(element);
            })      
            elUl.appendChild(elFragment);


            elSearchBtn.addEventListener('click', searchPost())
            function searchPost(post) {
                let val = elSearchInp.vaue -0;
                if (val !== '') {
                    let found = data.filter(element => val == element.id);
                    console.log('found');
                    found.forEach(element => {
                        addUI(element);
                    })
                    elUl = '';
                    elUl.appendChild(elFragment)
                }
            }
        })
    })  
    function addUI(element) {
        let elLi = document.createElement('li');
                let elTitle = document.createElement('h2');
                let elPost = document.createElement('h4');
                let elReact = document.createElement('h3');
                let elAnchorLI = document.createElement('div')
                let elUserId = document.createElement('h1');
                
                elLi.classList = 'Li';
                elTitle.textContent = element.title+"...";
                elPost.textContent = element.body
                elReact.textContent = "Reactions: " + element.reactions
                element.tags.forEach(el => {
                    let anchor = document.createElement('a');
                    anchor.textContent = "#"+ el;
                    anchor.setAttribute('href', '#');
                    anchor.style.fontSize = `${20}px`
                    elAnchorLI.appendChild(anchor);
                })
                elAnchorLI.style.display = 'flex';
                elAnchorLI.style.gap = `${10}px`;
                elUserId.textContent = "User: " + element.userId; 

                elLi.appendChild(elUserId)
                elLi.appendChild(elTitle);
                elLi.appendChild(elPost);
                elLi.appendChild(elReact);
                elLi.appendChild(elAnchorLI);
                elFragment.appendChild(elLi);
    }

    