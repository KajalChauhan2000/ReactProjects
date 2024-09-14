import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({

       name:"todo",

       initialState:{

        task:[]
       },
       
       reducers:{
        AddTask:(state, action)=>{
            state.task.push(action.payload)
        },

         TaskDelete:(state , action)=>{
            state.task = state.task.filter((key)=>key.id!==action.payload.id);
         },

        TaskComplete:(state,action)=>{
          for(var i=0; i<state.task.length; i++)
            {
                if(state.task[i].id==action.payload.id)
                    {
                        state.task[i].status = false;
                    }
            }
        },

        TaskReOpen:(state,action)=>{
            for(var i=0; i<state.task.length; i++)
              {
                  if(state.task[i].id==action.payload.id)
                      {
                          state.task[i].status = true;
                      }
              }
          },

          EditSaveData:(state , action)=>{
            for(var i=0; i<state.task.length; i++)
                {
                    if(state.task[i].id==action.payload.id)
                        {
                            state.task[i].work = action.payload.work;
                        }
                }
          }
       }
})
export const {AddTask ,TaskDelete ,TaskComplete,TaskReOpen,EditSaveData} = todoSlice.actions;
export default todoSlice.reducer;