'use client'

import {useState, useEffect} from 'react';

const page = () => {
  const [data, setData] = useState([]);

  useEffect( ()=>{
    let fetchData = async () => {
      try {
        const apiUrl = process.env.AUTHO;
        console.log("APi", apiUrl);

        //ensuring api is defined before use 
        if (!apiUrl) {
          console.log("Api is not defined ");
          return;
        }

        //fetch the data
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
      } catch (error){
        console.error('Error fetching data:', error);
      }
      }
      fetchData();
  },[]);


  return (
    <div>
      this is from feed
    </div>
  );
}

export default page;
