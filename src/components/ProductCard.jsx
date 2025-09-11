import React from "react";
import { Card, Rate, Button } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom"; // ✅ import hook

const ProductCard = ({ title, price, rating, image, id }) => {
    const navigate = useNavigate(); // ✅ create navigate function

    return (
        <Card
            hoverable
            className="rounded-[22px] gap-[11.14px] shadow-md border border-gray-200 w-full sm:w-[383px] p-[16.87px] h-[364px]"
            cover={
                <img
                    alt={title}
                    src={image}
                    className="rounded-t-[5px] h-48 w-full object-cover p-2"
                />
            }
        >
            <div className="flex justify-between">
                <div className="text-md font-semibold mb-2">{title}</div>
                <div className="text-sm text-gray-700 mb-1">{price}</div>
            </div>
            <div>
                <Rate disabled defaultValue={5} className="text-yellow-400 text-xs" />
                <span className="ml-2 text-sm text-gray-600">({rating})</span>
            </div>
            <div>
                <Button
                    onClick={() => navigate(`/order-page/${id}`)} // ✅ now works
                    type="link"
                    icon={<ShoppingOutlined />}
                    className="mt-2 p-0 text-blue-600 hover:text-blue-800"
                >
                    Shop Now
                </Button>
            </div>
        </Card>
    );
};

export default ProductCard;
