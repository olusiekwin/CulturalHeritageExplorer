const africastalking = require('africastalking')({
    apiKey: process.env.AFRICASTALKING_API_KEY,
    username: process.env.AFRICASTALKING_USERNAME
});

const callService = africastalking.VOICE;

exports.makeCall = async ({ to, from }) => {
    try {
        const response = await callService.call({
            to,
            from
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
};
