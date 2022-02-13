
   function ChangeColor(temp){
    
      let col = 'black'
       if (temp <= -10) {
         col = 'rgb(15, 11, 247)'
        }else if (temp <= -5){
          col = 'rgb(15, 11, 247)'
        }else if (temp <= 0){
          col = 'rgb(70, 234, 255)'
        }else if (temp > 0){
          col = 'rgb(213, 79, 79)'
        }
       return col;
     }

     export default ChangeColor