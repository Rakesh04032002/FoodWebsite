import axios from 'axios';

export const createOrder = async order => {
    try {
        const { data } = await axios.post('/api/orders/create', order);
        return data;
    } catch (error) {
        console.error('Error creating order:', error);
        throw error;
    }
};


export const getNewOrderForCurrentUser = async () => {
    try {
        const { data } = await axios.get('/api/orders/newOrderForCurrentUser');
        console.log('Received order data:', data); // Log the received data
        return data;
    } catch (error) {
        console.error('Error getting new order:', error);
        throw error;
    }
};

export const pay=async(paymentId)=>{
    try{
        const {data}=await axios.put('/api/orders/pay',{paymentId});
        return data;
    }catch(error){

    }
}

export const trackOrderById=async orderId=>{
    const {data}=await axios.get('/api/orders/track/'+orderId);
    return data;
}

export const getAll=async (state)=>{
    const {data}=await axios.get(`/api/orders/${state??''}`);
    return data;
}

export const getAllStatus = async () => {
    const { data } = await axios.get(`/api/orders/allstatus`);
    return data;
};