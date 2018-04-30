import axios from 'axios';
const BASE_URL = 'http://swapi.co/api/';

class SwapApi{
    static search(query){
        return axios.get(BASE_URL+'people/?search='+query);
    }

    static searchPlanets(query){
        return axios.get('/api/planets/'+query).then(function(result){
            if(result && result.data){
                return result.data;
            }
        })
    }
}

export default SwapApi;