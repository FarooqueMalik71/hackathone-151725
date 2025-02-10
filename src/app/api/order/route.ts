import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client"; // Import your Sanity client

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, address, city, zipCode, products } = body;

    // ✅ Check for missing fields
    if (!firstName || !lastName || !email || !phone || !address || !city || !zipCode || !products?.length) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // ✅ Calculate total price
    let totalPrice = 0;
    for (const item of products) {
      const product = await client.fetch(`*[_id == $id][0]`, { id: item._id });

      if (!product || !product.price) {
        return NextResponse.json({ error: `Product with ID ${item._id} not found` }, { status: 400 });
      }
      totalPrice += product.price * item.quantity; // Ensure quantity is included
    }

    // ✅ Create order object
    const orderData = {
      _type: "order",
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      zipCode,
      products: products.map((item: { _id: any; }) => ({
        _type: "reference",
        _ref: item._id,
      })),
      totalPrice,
      orderDate: new Date().toISOString(),
      status: "pending",
    };

    console.log("Saving Order to Sanity:", orderData); // ✅ Debugging
    const result = await client.create(orderData);
    console.log("Order Created:", result);

    return NextResponse.json({ message: "Order created successfully", sanityOrderId: result._id }, { status: 200 });
  } catch (error) {
    console.error("Order Processing Error:", error);
    return NextResponse.json({ error: "Failed to process order" }, { status: 500 });
  }
}
