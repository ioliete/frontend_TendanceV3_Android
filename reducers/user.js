import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => { // A mettre dans la fonction Login
      state.value = action.payload;
    },
    logout: (state, action) => { // A mettre dans la fonction Logout
      state.value = null;
    },


    // ! verifier si tout marche ok lorsqu'on met en place le backend et les logins

     addParticipant :(state, action) =>  {
      console.log(action.payload); //todo on doit push l'id de l'event
      // ? reducer pour savoir si un utilisateur a déjà été intéressé par un event ou pas
      state.value.events.partEvents.push(action.payload);
    },
    removeParticipant :(state, action) =>  {
        // state.value.events.partEvents.filter(el => el!== action.payload) //? on filtre avec l'id de l'event
    },
    addInter :(state, action) =>  {
        console.log(action.payload); //todo on doit push l'id de l'event
        state.value.events.interEvents.push(action.payload); 
    },
    removeInter :(state, action) =>  {
        state.value.events.interEvents.filter(el => el!== action.payload) //? on filtre avec l'id de l'event
}

  },
});

export const { login,logout,addParticipant,removeParticipant,addInter,removeInter } = userSlice.actions;
export default userSlice.reducer;