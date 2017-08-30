import * as React from 'react';
// 注意这个方法前面有async关键字
//  async getMoviesFromApi() {
//     try {
//       // 注意这里的await语句，其所在的函数必须有async关键字声明
//       let response = await fetch('https://facebook.github.io/react-native/movies.json');
//       let responseJson = await response.json();
//       return responseJson.movies;
//     } catch(error) {
//       console.error(error);
//     }
//   }