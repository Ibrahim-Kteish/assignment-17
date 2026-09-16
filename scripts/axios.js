const url = "https://jsonplaceholder.typicode.com/todos";

const resultPromise = axios.get(url);

resultPromise
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log("Axios called");
    });
