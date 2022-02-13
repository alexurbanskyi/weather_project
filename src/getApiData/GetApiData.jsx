// Асинхронная функция которая принимает аргументом URL для получения данніх с API 


async function getApiData (url){
  try{
    const response = await fetch(url)
    if (!response.ok) {
      console.error('Ошибка 404!!!')
      return false
    }
    
    return await response.json()
  } catch(err) {
    console.error('Некоректно введенный адресс!!!')
    return false
  }
}


export default getApiData;