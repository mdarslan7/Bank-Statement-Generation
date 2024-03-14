# Bank Statement Generation Service

## Overview

This assignment project provides a set of services for generating PDF bank statements for users in a banking application. The services include a basic API, a database service, a PDF generation service, and an email service. These services work together to fulfill user requests for bank statements within a specified time period.

## Services

### 1. Basic API

- Accepts a period of time (two dates) and the user's email address ID.
- Exposes an unauthenticated endpoint for simplicity.
- Implemented using Node.js and Express for quick development and ease of use.

### 2. Database Service

- Uses a simple CSV file as a database for storing transactions.
- Reads the CSV file and filters relevant information based on user and date range.
- Implemented in JavaScript for simplicity.

### 3. PDF Generation Service

- Takes in data from the API and generates a PDF of the transaction list.
- Utilizes the 'pdfkit' library for PDF generation.
- Implemented in JavaScript for consistency with the rest of the services.

### 4. Email Service

- Sends the generated PDF as an attachment to the user's email address.
- Uses Nodemailer to interact with an SMTP server (e.g., Gmail, SendGrid).
- Configured to use Gmail for simplicity and ease of integration.

## Usage

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the server: `node index.js`.
4. Hit a POST Request at localhost with necessary the body.

Authorization and Authentication

To enhance security and privacy, we can implement authorization and authentication in the following ways:

- **API Authentication:** Implement API key authentication or OAuth2 for the API to ensure that only authorized clients can request statements.

- **User Authentication:** Require user authentication to access the bank statement generation service. This can be achieved using JWT tokens, OAuth2, or session-based authentication.

- **Secure Email Configuration:** If using email services, secure the email configuration by using environment variables for sensitive information and avoid storing passwords directly in the code.