export const random=(len:number)=>{
  const hash="asdfghj12345";
  const length=hash.length;
  let ans="";
  for(let i=0;i<len;i++){
  ans+=hash[Math.floor(Math.random()*length)]
  }
  return ans;
}