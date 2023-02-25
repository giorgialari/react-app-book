// import axios from 'axios'

// export default class LoginService {
//     login(email, password, onSuccess, onError) {
//         axios.post('https://reqres.in/api/login', { email: email, password: password })
//             .then(function (result) {
//                 console.log('login effettuato con successo, token:', result.data);
//                 onSuccess(result.data)
//             }, function (error) {
//                 console.error('errore di login: ', error);
//                 onError(error.response.data)
//             })
//     }
// }

// Correct credentials
// {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }
export default class LoginService {
    login(email, password, onSuccess, onError) {
      fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Errore di rete: ' + response.statusText);
          }
        })
        .then(data => {
          console.log('login effettuato con successo, token:', data);
          onSuccess(data);
        })
        .catch(error => {
          console.error('errore di login: ', error);
          onError(error.message);
        });
    }
  }
  