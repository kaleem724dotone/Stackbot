import React, { useContext } from "react";
import { Form, Input, Button, Checkbox, Divider, Image } from "antd";
import { CartContext } from "../data/CardContext";

const CheckOut = () => {
  const [form] = Form.useForm();
  const { cartItems, total } = useContext(CartContext); // ✅ get cart items + total

  const onFinish = (values) => {
    console.log("Order Placed:", { ...values, cartItems, total });
    // 🚀 you can later send this data to backend API
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Billing Details */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: "First name is required" }]}
          >
            <Input placeholder="Enter first name" />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: "Last name is required" }]}
          >
            <Input placeholder="Enter last name" />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Address is required" }]}
          >
            <Input placeholder="Enter address" />
          </Form.Item>

          <Form.Item
            label="Town/City"
            name="city"
            rules={[{ required: true, message: "City is required" }]}
          >
            <Input placeholder="Enter city" />
          </Form.Item>

          <Form.Item
            label="Postcode / ZIP"
            name="postcode"
            rules={[{ required: true, message: "Postcode is required" }]}
          >
            <Input placeholder="Enter postcode" />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "Phone is required" }]}
          >
            <Input placeholder="Enter phone number" />
          </Form.Item>

          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              { required: true, message: "Email is required" },
              { type: "email", message: "Invalid email" },
            ]}
          >
            <Input placeholder="Enter email address" />
          </Form.Item>

          <Form.Item name="terms" valuePropName="checked">
            <Checkbox>I agree to the terms and conditions</Checkbox>
          </Form.Item>
        </Form>
      </div>

      {/* Order Summary */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Your Order</h2>
        <div className="border rounded-lg p-4">
          {/* Product List */}
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2 mb-2"
              >
                <div className="flex items-center gap-3">
                  <Image src={item.image} width={50} height={50} preview={false} />
                  <span>
                    {item.product} × {item.quantity}
                  </span>
                </div>
                <span>${item.price * item.quantity}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">Your cart is empty</p>
          )}

          {/* Totals */}
          <div className="flex justify-between font-semibold my-2">
            <span>Total</span>
            <span>${total}</span>
          </div>

          {/* Payment Methods */}
          <Divider />
          <div className="flex gap-3 items-center mb-4">
            <Image width={40} src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" preview={false} />
            <Image width={40} src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" preview={false} />
            <Image width={40} src="https://upload.wikimedia.org/wikipedia/commons/4/41/BKash_logo.svg" preview={false} />
          </div>

          {/* Coupon and Place Order */}
          <div className="flex justify-between items-center mb-4">
            <Button className="bg-[#5B47D6] text-white hover:bg-[#4733c5]">
              Apply Coupon
            </Button>
            <Button
              type="primary"
              size="large"
              className="bg-[#5B47D6] hover:bg-[#4733c5]"
              onClick={() => form.submit()}
              disabled={cartItems.length === 0}
            >
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
