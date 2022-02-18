import { useEffect } from "react";

function ManyDaysData(cityId, SetManyDaysData){
 
   useEffect(() => {
      fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=191434b87648073ccd31963c4dc456d1&lang=ru`)
      .then(response => response.json())
      .then(json =>{ 
         let data = {
            arr: json.list,
            name: json.city.name
         }
         SetManyDaysData(data)
      }
   )},[cityId])

}
export default ManyDaysData;