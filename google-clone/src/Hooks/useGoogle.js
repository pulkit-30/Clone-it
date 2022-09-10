import { useContext, useEffect, useState } from 'react';
import { key, Custom_key } from '../key';
import QueryContext from '../Context/QueryContext';
import axios from 'axios';
const useGoogle = () => {
  const Context = useContext(QueryContext);
  const [data, updateData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      console.log(Context.Term);
      await axios
        .get(
          `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${Custom_key}&q=${Context.Term}`
        )
        .then((result) => {
          updateData(result.data);
        });
    };
    fetchData();
  }, [Context.Term]);

  return { data };
};

export default useGoogle;
