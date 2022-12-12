import { connect } from "mongoose";

export const startConnection = async () =>{
    try {
        const db = await connect("");
        console.log(db.connection.name);
    } catch (error) {
        console.log(error)
    }
}