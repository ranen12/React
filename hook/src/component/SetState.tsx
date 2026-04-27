// let hooks =[];
// let currentIndex = 0;

// function useState(initialValue){
//     const index = currentIndex;

//     if(hooks[index]===undefined){
//         hooks[index]=initialValue;
//     }

//     function setState(newValue){
//         hooks[index]=newValue;
//         render();
//     }
//     currentIndex++;
//     return[hooks[index],setState];
// }