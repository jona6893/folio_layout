   export const reducer = (state, action) => {
     switch (action.type) {
       case "ADD":
         if (state.find((entry) => entry.id === action.payload.id)) {
           return state.map((entry) => {
             if (entry.id !== action.payload.id) {
               return entry;
             }
             {
               const copy = { ...entry };
               copy.amount = copy.amount + 1;
               return copy;
             }
           });
         } else {
           return state.concat({ ...action.payload, amount: 1 });
         }
       case "REMOVE":
         const subtracted = state.map((item) => {
           if (item.id === action.payload.id) {
             return { ...item, amount: item.amount - 1 };
           }
           return item;
         });
         const filtered = subtracted.filter((item) => item.amount > 0);
         return filtered;
       default:
         return state;
     }
   };