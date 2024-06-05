# Cultural Heritage Explorer

## Overview
Cultural Heritage Explorer is an application that leverages Africa's Talking APIs to provide voice, SMS, and USSD services to enhance tourism and cultural experiences.

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/CulturalHeritageExplorer.git
    cd CulturalHeritageExplorer
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file and add your Africa's Talking credentials:
    ```env
    AFRICASTALKING_API_KEY=your_api_key_here
    AFRICASTALKING_USERNAME=your_username_here
    PORT=3000
    ```

4. Start the server:
    ```bash
    npm start
    ```

## Usage

- **Voice Call**: `POST /call`
- **Send SMS**: `POST /send-sms`
- **USSD**: `POST /ussd`

Refer to the respective routes for more details.
