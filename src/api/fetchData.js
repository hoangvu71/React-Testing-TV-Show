import axios from "axios"
export const fetchData = () => {
    return axios
      .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      ) 
      .then(res => {
        console.log(res);
        return res;
      }
      )
      .catch(err => {
          console.log("Error in fetchData",err);
          return err;
      })
  };