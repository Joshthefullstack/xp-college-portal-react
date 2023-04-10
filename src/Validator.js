export default class Validation{
    async getRequest(apiEndpoint){
        const response = await fetch(apiEndpoint, {
            method: "GET"
          })
          const data = await response.json();
          return data;
    }
}