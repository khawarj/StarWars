const BASE_URL = "https://swapi.co/api/";
var axios = require("axios");

function SwapApi(){
    this.findUser = function(user){
        // var user_url = BASE_URL + "people/"+id;
        return axios.get(user.url).then(function(response){
           return response.data;
        });
    };

    this.findByUserName = function(userName){
        return axios.get(BASE_URL+'people/?search='+userName).then(function(response){
            var data = response.data;
            if(data && data.count > 0){
                return data.results;
            }
        })
    };

    this.getPlanets = function(query){
        var url = BASE_URL+'planets/';
        if(query){
            url = url + "?search=" + query;
        }
        return axios.get(url).then(function(response){
            var data = response.data;
            if(data && data.count > 0){
                return data.results;
            }
        })
    }
}



module.exports = new SwapApi();