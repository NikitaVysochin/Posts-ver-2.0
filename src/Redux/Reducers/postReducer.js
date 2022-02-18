import { ADD_POST, DEL_POST, EDIT_POST } from "../constants";

const initState = JSON.parse(localStorage.getItem("initState")) || {
  posts: [{
    title: "Test",
    news: "",
    link: "",
    tags: [],
    id: 'd11'
  }]
};

export const postReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST:
      localStorage.setItem("initState", JSON.stringify({ ...state, posts: [...state.posts, action.payload] }))
      return { ...state, posts: [...state.posts, action.payload] };

    case DEL_POST:
      const delPost = [...state.posts].filter((elem)=>elem.id!==action.payload.id);
     localStorage.setItem("initState", JSON.stringify({ ...state, posts: delPost }));
     return {...state, posts: delPost} 

     case EDIT_POST:
      const posts = state.posts.map(post=>{
        if(post.id===action.payload.id){
          return action.payload
        }
        return post
      })
      localStorage.setItem("initState", JSON.stringify({ ...state, posts }));
      return { ...state, posts }
  
    
      default:
        return state
  }
}
