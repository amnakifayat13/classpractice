"use client";
import Image from "next/image"
import {useEffect, useState} from "react"
interface Photo{
    albumId: number;
    id: number;
    title: string;
    url : string;
    thumbnailUrl: string;
}

export default function Photos(){
    const [photosData, setPhotosData] = useState<Photo[]>([])
    const [error, setError] = useState("")
    useEffect(() =>{
        const fetchData = async()=>{
            const res = await fetch("https://jsonplaceholder.typicode.com/photos")
            const data = await res.json()
            setPhotosData(data)


            if(!res.ok){
                setError("Error fetching data")
            }

            fetchData()

        }
    },[])


    return(
        <>
        <h1>Photos</h1>
        <ul>
           { photosData.map((photo)=>{
                return <li key={photo.id}>
                    <Image src = {photo.url} alt={photo.title}
                    width={200} height={200}/>
                </li>
            })}
            
        </ul>
        </>
    )
}