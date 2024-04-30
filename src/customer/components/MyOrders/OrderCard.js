import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = ({ item, orderId, index, orderDate, orderStatus }) => {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/account/orders/${orderId}/${index}`)} className="p-3 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1 rounded-lg cursor-pointer">
            <Grid
                container
                spacing={2}
                sx={{ justifyContent: "space-between", alignItems: "center" }}
                className="order-card"
            >
                <Grid item lg={2} xs={3}>
                    <div className="flex justify-center items-center">
                        <img
                            className="w-[6rem] h-[6rem] shadow-md rounded-full object-cover"
                            src={item.product?.imageUrls?.[0]?.imageUrl}
                            alt=""
                        />
                    </div>
                </Grid>

                <Grid item lg={6} xs={9}>
                    <div className="space-y-2 flex justify-between items-center flex-wrap">
                        <div>
                            <p className="font-semibold text-xl">
                                {item.product?.title}
                            </p>
                            <p className="text-sm py-1 text-gray-400 font-medium">
                                Weight : {item?.weight} | Size : {item?.width || 16.52} MM
                            </p>
                            <p className="text-sm  text-gray-400 font-medium">
                                Seller: {item.product?.brand}
                            </p>
                        </div>
                        <p className="flex items-start font-semibold lg:text-xl">
                            ₹ {item?.discountedPrice}
                        </p>
                    </div>
                </Grid>

                <Grid lg={4} xs={12}>
                    {orderStatus === 'DELIVERED'
                        ? (
                            <div className="flex lg:items-end md:items-end items-start justify-center flex-col mt-3 pr-5 lg:ml-0 md:ml-0 ml-5">
                                <p className="flex items-center">
                                    <AdjustIcon
                                        sx={{ width: "15px", height: "15px" }}
                                        className="text-green-600 mr-2 text-sm"
                                    />
                                    <span className="font-semibold lg:text-lg">
                                        Delivered on {orderDate}
                                    </span>
                                </p>
                                <p className="text-xs py-1 text-gray-400 font-medium">
                                    Your item has been delivered
                                </p>
                            </div>
                        )
                        : (
                            <span className="flex items-center justify-end mt-3 pr-5 font-semibold lg:text-lg">
                                <AdjustIcon
                                    sx={{ width: "15px", height: "15px" }}
                                    className="text-pink-600 mr-2 text-sm"
                                />
                                <span className="font-semibold lg:text-base">
                                    Expected delivery on March, 03
                                </span>
                            </span>
                        )}
                </Grid>
            </Grid>
        </div>
    );
};

export default OrderCard;
