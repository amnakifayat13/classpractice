import Link from "next/link"

export default async function Home(){
  // interface IBook{
  //   title:string,
  //   id:number

  // }
  //  const Books : IBook[] =[
  //   {
  //   title:"The Day",
  //   id:1
  //  },
  //  {
  //   title:"The Night",
  //   id:2
  //  },
  //  {
  //   title:"The summer",
  //   id:3
  //  },
  // ]
  const res = await fetch("https://simple-books-api.glitch.me/books",{
    method: "GET"
  })
  const books:IBook[] = await res.json()
    
  interface IBook{
    "id": number,
    "name": string,
    "type":string,
    "available": boolean

  }
  
  
  return(
    <>
    {books.map((book) =>{
      return (
        <Link href={`/books/${book.id}`} key={book.id}> 
          <h1>{book.name}</h1>
          <h1>{book.available}</h1>
        </Link>
      )
    })}
  {/* <h1>{Books[0].title}</h1>
  <h2>{Books[1].id}</h2>
  <h2>{JSON.stringify(Books)}</h2> */}
    </>
  )
}