import  { NextResponse} from "next/server";
import mongoose from "mongoose";
// import { form } from "@/lib/model/form";
import { connectionSrt } from "@/lib/db"

export async function GET(){

     mongoose.connect(connectionSrt)
    

    return NextResponse.json({result:true})
}
// import { NextResponse } from "next/server";
// import mongoose from "mongoose";
// import { connectionStr } from "@/lib/db";

// export async function GET() {
//     try {
//         // Connect to MongoDB
//         await mongoose.connect(connectionStr);

//         // Log a message indicating successful connection (optional)
//         console.log("Connected to MongoDB");

//         // Return a JSON response indicating success
//         return NextResponse.json({ result: true });
//     } catch (error) {
//         // Handle errors
//         console.error("Error connecting to MongoDB:", error);

//         // Return an error response
//         return NextResponse.error(500, "Internal Server Error");
//     }
// }