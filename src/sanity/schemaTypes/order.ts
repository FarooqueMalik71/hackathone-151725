// schemas/order.js
export default {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
      validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; new(): any; }; }; }) => Rule.required().min(2).error("First name is required."),
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
      validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; new(): any; }; }; }) => Rule.required().min(2).error("Last name is required."),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule: { required: () => { (): any; new(): any; email: { (): { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; new(): any; }; }; }) => Rule.required().email().error("A valid email is required."),
    },
    {
      name: "phone",
      title: "Phone",
      type: "number", // ✅ Fix: Changed from string to number
      validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; new(): any; }; }; }) =>
        Rule.required().min(1000000000).error("A valid phone number is required."),
    },
    {
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.required().error("Address is required."),
    },
    {
      name: "city",
      title: "City",
      type: "string",
      validation: (Rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.required().error("City is required."),
    },
    {
      name: "zipCode",
      title: "Zip Code",
      type: "string", // ✅ Fix: Still a string but validated to be numbers only
      validation: (Rule: { required: () => { (): any; new(): any; regex: { (arg0: RegExp, arg1: string): any; new(): any; }; }; }) => Rule.required().regex(/^\d+$/, "Zip Code must be numeric."),
    },
    {
      name: "products", // ✅ Fix: Changed from `cartItems` to `products`
      title: "Ordered Products",
      type: "array",
      of: [{ type: "reference", to: { type: "product" } }], 
      validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; new(): any; }; }; }) => Rule.required().min(1).error("At least one product is required."),
    },
    {
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number',
    },
    {
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
      validation: (Rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.required().error("Order date is required."),
    },
    {
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Processing", value: "processing" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
        ],
        layout: "radio",
      },
      initialValue: "pending",
    },
  ],
};
