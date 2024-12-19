import { NextResponse } from "next/server"

export const GET = () =>{
    return NextResponse.json(
        [
            {
                id:1,
                name: "Maths",
                author: "Amna",
            },
           {
            id:1,
                name: "Science",
                author: "Kifayat",
           }
        ]
    )
}