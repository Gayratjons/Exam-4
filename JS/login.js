let elLogin = document.querySelector('.login');
let elPassword = document.querySelector('.password');
let elInputBtn = document.querySelector('.input-btn');


elInputBtn.addEventListener('click', async ()=>{
    let username = elLogin.value;
    let password = elPassword.value;
    try{
        if (username && password) {
            let a = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                username,password 
                })
            })
        let b = await a.json();
        if (b.token)  {
            location = 'index.html';
        }else{
            location.reload();
        }
        }
    }catch(error){
        console.log(error);
    }
});


