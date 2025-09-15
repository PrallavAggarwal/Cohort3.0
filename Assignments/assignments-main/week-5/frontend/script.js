//  start from here

//let SubmitButton = document.querySelector('#signup')

// console.log("typed details : ");
// console.log(`email : ${email} , username : ${username} , password : ${password}`)

// async function sendRequest() {
//   let response = await fetch(url, {
//     method: "POST",
//     body: JSON.stringify({ email: email, username: username, password: password })
//   })
//   console.log("response from signup request : \n", response);
//   let data = await response.json();
//   console.log("formatted data from req. : \n", data);
// }


let data = null;
document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  let email = document.querySelector('#signup-email').value;
  let username = document.querySelector('#signup-username').value;
  let password = document.querySelector('#signup-password').value;
  let url = 'http://localhost:3001/api/v1/user/signup'
  console.log(`email : ${email} , username : ${username} , password : ${password}`)
  try {
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      mode: 'cors',
      body: JSON.stringify({ email: email, username: username, password: password })
    })

    // let response = await axios.post(url, {
    //   email: email,
    //   username: username,
    //   password: password
    // })
    console.log("response from signup request : \n", response);
    data = await response.json();
    console.log("formatted data from req. : \n", data);
    if (data.success) {
      document.getElementById('notification').innerHTML = `<h2>Signed up success Now login.</h2>`
      document.getElementById('sign-up').style.display = "none";
      document.getElementById('sign-in').style.display = "block";
    }
    else {
      document.getElementById('notification').innerHTML = `<h2>Signed up success Now login.</h2>`
    }
  }
  catch (error) {
    document.getElementById('notification').innerHTML = `<h2>Signed up failed due to server error</h2>`
    console.log("Error while fetching sign up request.", error)
  }
})

document.getElementById('signin-form').addEventListener('submit', async (e) => {
  try {
    e.preventDefault();
    let email = document.querySelector('#signin-email').value;
    let password = document.querySelector('#signin-password').value;

    let url = 'http://localhost:3001/api/v1/user/login';
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password })
    })
    let data = await response.json();
    console.log("response : ", response.headers)
    console.log("response.headers.get('Token') : ", response.headers.get('Token'))
    console.log("response.headers.get('token') : ", response.headers.get('token'))

    console.log("data : ", data);
    console.log("token : ", data.token)
    localStorage.setItem('token', data.token);
    if (data.success) {
      document.getElementById('notification').innerHTML = `<h2>Log in success.</h2>`
      document.getElementById('sign-in').style.display = "none";
      document.getElementById('todo').style.display = "block";
      loadTodos()

      //log-out add krna h.
      document.getElementById('logout').addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        document.getElementById('todo').style.display = "none";
        window.location.reload();
      })
    }
    else {
      document.getElementById('notification').innerHTML = `<h2>${data.message}</h2>`
    }

  } catch (error) {
    document.getElementById('notification').innerHTML = `<h2>some error occured while sending request.</h2>`
    console.log("error while sending request : ", error)
  }
})

if (data) {

}


async function loadTodos() {
  try {
    let token = localStorage.getItem('token')
    let response = await fetch('http://localhost:3001/api/v1/user/todo/read', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        "Token": `${token}`,
      }
    })
    let data = await response.json();
    console.log("data for todo/read : \n", data)
    data.todos.forEach((e, index) => {
      console.log("todo : ", e);
      let li = document.createElement('li')
      li.innerHTML = `${index + 1} : ${e.title}`;

      li.setAttribute('id', e.id);
      document.getElementById('list-of-todo').appendChild(li)
    })

    return;

  } catch (error) {
    console.log("some error occured while reading todo.", error)
  }
}

document.getElementById('create-todo').addEventListener('click', async (e) => {
  try {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let token = localStorage.getItem('token');
    let res = await fetch('http://localhost:3001/api/v1/user/todo/create', {
      method: "POST",
      body: JSON.stringify({ title: title, description: description }),
      headers: {
        "Content-Type": "application/json",
        "Token": token,
      }
    })
    let data = await res.json();
    if (data.success) {
      console.log("todo created");
      loadTodos()
    }
    else {
      console.log("todo not created.")
    }
  } catch (error) {
    console.log("create todo failed.")
  }
})


document.getElementById('Already-have-account').addEventListener('click', (e) => {
  document.getElementById('notification').innerHTML = `<h2>Appriciated. Now login.</h2>`
  document.getElementById('sign-up').style.display = "none";
  document.getElementById('sign-in').style.display = "block";
})
