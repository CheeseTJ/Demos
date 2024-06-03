// let startCount = 0;
// let count = 1;
// let stop = Infinity; 
// // outer:for(let i =startCount;i<count;i++){ 
// //   postMessage(i)
// //   if(startCount>=stop){
// //     break outer;
// //   }
// // }
// setInterval(()=>{
//   count++;
//   postMessage(count)
// },1000)
// self.onmessage = ev => {
//   console.log(ev);
//   let fn  = ev.data.split('$$')[0] == 'end';
//   fn&& self.terminate();
//   // let content = 
//   // 关闭worker
//   // self.close()
//   console.log(self);
//   postMessage(ev.data + ' 呵呵~')
// }

let  xh  =new XMLHttpRequest();
xh.open('get','./count.js');
xh.send(null);
xh.onreadystatechange = () =>{
  if(xh.readyState == 4){
    console.log(xh,30);
    postMessage(xh.response)
  }
}