interface Params{
    params:{
        id:string;
    }
}
 interface IBook{
    id: number;
    name: string;
    author: string;
    // i have to add more from console


 }

export default async function  Book({params}: Params){
    const {id} = await params
    const res = await fetch(`https://simple-books-api.glitch.me/books/${id}`)
    const data:IBook = await res.json()
   
    return(
        <>
        <h1>{id}</h1>
        <h1>name: {data.name}</h1>
        <h1>Author : {data.author} </h1>
        </>
    )
}