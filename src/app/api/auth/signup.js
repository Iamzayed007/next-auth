import { connectToMongoDB } from "@/app/lib/mongoConnect"
import {NextApiRequest} from "next"

const handler = async (req,res)=>{
  connectToMongoDB().catch(err=> res.json(err))
  if (req.method) {
    if (!req.body) {
        return res.status(400).json({error:"data is missing"})
    }
  }
}
export default handler