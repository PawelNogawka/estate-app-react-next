//headers: {
 //   'X-RapidAPI-Key': '7e0b20fa2amsh686db9b8fd3725ap180af5jsnc241c6dbd921',
 //   'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//  }





import axios from "axios";


export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': '7e0b20fa2amsh686db9b8fd3725ap180af5jsnc241c6dbd921' ,
    },
  });
    
  return data;
}