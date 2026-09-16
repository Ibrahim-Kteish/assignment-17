function getPromise() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Done");
        }, 3000);
    });
}

async function getPromiseResult() {
    console.log("First line in getPromiseResult");

    try {
        const result = await getPromise();
        console.log(result);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Promise finished");
    }

    console.log("Last line in getPromiseResult");
}

getPromiseResult();
