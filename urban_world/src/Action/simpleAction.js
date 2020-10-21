import Axios from "axios"

export const simpleAction = (i) => dispatch => {
    dispatch({
        type: 'SIMPLE_ACTION',
        payload: 0
       })

       setTimeout(()=>{
        dispatch({
            type: 'SIMPLE_ACTION',
            payload: i
           })
       }, 500)
    
   }
   export const fetchStars = (repo)=> dispatch => {
    dispatch({
        type: "STARS_PENDING"
    });
    Axios.get(`https://api.github.com/repos/Aparnasuman/${repo}/stargazers`).then(res=>{
        console.log(res.data);
        dispatch({
            type:"STARS_FETCHED",
            payload: {
                repo_id: repo,
                stars: res.data
            }
        })
    })
}