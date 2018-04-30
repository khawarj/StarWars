import swap from './swapApi';


class LoginApi{

    static login(userName, password){
        return swap.search(userName).then(function(res){
            let data = res.data;
            if(data && data.count > 0){
                  let {results} = data;
                  var responseData;
                  for(var i =0 ; i<results.length; i++){
                       if(results[i].name === userName && results[i]['birth_year'] === password){
                           responseData = results[i];
                           break;
                       }
                  }
                  return responseData;
            }

        }).catch(function(err){
            console.log(err);
            return void 0;
        })
    }
}


export default LoginApi;