import Photos from "./photos";

export default async function  Sanity(){
    const res = await fetch("http://localhost:3001/api/hello") 
    const data = await res.json()
    console.log(data)
return(
    <>
    <div>sanity class</div>
    <div><Photos/></div>
</>
)
}