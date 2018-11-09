// import {
//   useState,
//   useEffect
// } from 'react';

import * as one from 'react';
console.log(one);

console.log(useState,useEffect);
const useHooks = () => {
  // 生成函数是组件的data 和 setData
  const [data, setData] = useState(null);
  console.log(data);
  console.log(setData);
  const getData = () => {
    setTimeout(_ => {
      setData(120);
    }, 1000);
  }

  //  Effect，这里相当于componentDidMount
  useEffect(() => {
    getData();
  })

  return data;
}

export default useHooks();