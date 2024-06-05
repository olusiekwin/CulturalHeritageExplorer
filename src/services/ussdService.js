const ussdService = {
    handleUSSD: async (data) => {
        try {
            // Handle USSD logic here
            const { sessionId, serviceCode, phoneNumber, text } = data;
            let response = '';

            if (text === '') {
                response = 'CON Welcome to Cultural Heritage Explorer\n';
                response += '1. Option 1\n';
                response += '2. Option 2\n';
            } else if (text === '1') {
                response = 'END You selected option 1';
            } else if (text === '2') {
                response = 'END You selected option 2';
            } else {
                response = 'END Invalid option';
            }

            return response;
        } catch (error) {
            throw new Error(error);
        }
    }
};

module.exports = ussdService;
