import db from "@/config/mongodbConfig";
import { Productdetails } from "@/_lib/model/productdetails/productdetails";
import { NextResponse } from "next/server";

export async function GET(request) {

    await db.connect()
    let result = [];

    result = await Productdetails.find({ status: "active" })

    return NextResponse.json({ result: result, success: true })

}

export async function POST(request) {
    const success = false;
    const payload = await request.json();
    await db.connect()

    if (payload.action === "delete") {

        await Productdetails.deleteOne({ prod_id: payload.prod_id });

        const result = await Productdetails.find()

        return NextResponse.json({ result, success: true })

    } else if (payload.action === "edit") {

        await Productdetails.updateOne({ prod_id: payload.prod_id }, payload);

        const result = await Productdetails.find()

        return NextResponse.json({ result, success: true })

    } else {

        const result = await Productdetails.create(payload);

        return NextResponse.json({ result, success: true })

    }


}