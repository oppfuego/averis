import { connectDB } from "../config/db";
import { cvService } from "../services/cv.service";
import {
    CreateCVOrderRequest,
    CreateCVOrderResponse,
    GetCVOrderResponse,
    GetCVOrdersResponse,
} from "../types/cv.types";

export const cvController = {
    async createOrder(userId: string, email: string, body: CreateCVOrderRequest): Promise<CreateCVOrderResponse> {
        await connectDB();
        const order = await cvService.createOrder(userId, email, body);
        return { order };
    },

    async getOrders(userId: string): Promise<GetCVOrdersResponse> {
        await connectDB();
        const orders = await cvService.getOrders(userId);
        return { orders };
    },

    async getOrder(userId: string, orderId: string): Promise<GetCVOrderResponse> {
        await connectDB();
        const order = await cvService.getOrderById(userId, orderId);
        return { order };
    },
};
