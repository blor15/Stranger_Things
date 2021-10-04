const cohortName = '2107-CSU-RM-WEB-PT';
const baseURL = `https://strangers-things.herokuapp.com/api/${cohortName}/`;

fetch(baseURL/users/login, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        user: {
            username: '',
            password: ''
        }
    })
}) .then(response => response.json())
   .then(result => {
       console.log(result);
   })
   .catch(console.error);


