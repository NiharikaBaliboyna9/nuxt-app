export default defineEventHandler(async (event) => {
    try{
        
        const url= 'https://jsx63ciwv4.execute-api.us-west-2.amazonaws.com/v1/users'
        const response= await fetch(url,{
            method:'GET'
        });
        console.log(response)
        return response;

    }
    catch(error){

    }
    console.log('server route requested')
    return {
      hello: "world",
    };
  });
