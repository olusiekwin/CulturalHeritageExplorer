const africastalking = require('africastalking')({
    apiKey: process.env.AFRICASTALKING_API_KEY,
    username: process.env.AFRICASTALKING_USERNAME
});

const smsService = africastalking.SMS;

exports.sendSMS = async ({ to, message }) => {
    try {
        const response = await smsService.send({
            to,
            message
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};
