
document.addEventListener("DOMContentLoaded", function () {

    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("username-input");

    const statsContainer =document.querySelector(".stats-container");

    //validating username

    function validateUsername(username) {
        if (username.trim() === "") {
            alert("Empty Username");
            return false;
        }

        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if (!isMatching) {
            alert("Invalid Username");
        }
        return isMatching;
    }

    async function fetchUserDetails(username) {
        try {
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;


            //jugad to fetch data from leetcode api
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
            const targetUrl = 'https://leetcode.com/graphql/';

            const graphql = JSON.stringify({
                query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
                variables: { "username": `${username}` }
            })
            const requestOptions = {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: graphql,
            };

            //taking response from the api

            const response = fetch(proxyUrl + targetUrl, requestOptions);
            if (!response.ok) {
                throw new Error("Unable to fetch user details");

            }

            //getting response in json format
            const parsedData = await response.json();
            console.log("Logging Data:", parsedData);

            displayUserData(parsedData);
        }

        catch (error) {
            statsContainer.innerHTML = `<p>${error.message}</p>`
        }
        finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }


    function displayUserData(parsedData){

    }





    searchButton.addEventListener('click', function() {
        const username = usernameInput.value;
        console.log("Login username: ", username);
        if(validateUsername(username)) {
            fetchUserDetails(username);
        }
    })



});
