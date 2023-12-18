
# React + TypeScript + Vite

The application allows users to generate one-time passwords that are valid for 30 seconds. After the expiration, the password is regenerated.

## Getting Started

Follow these steps to get started:

- Install Dependencies

```bash
npm install
```

- Run the application

```bash
npm run dev
```

## Technologies Used

- React
- TypeScript
- Vite
- Playwright

## Testing

This project uses Playwright for end-to-end testing. To run the tests, use the following command:

```bash
npx playwright test
```

## Usage
1. Open the application in your web browser.
2. Enter a user ID in the provided input field. 
3. Click the "Generate" button to generate a one-time password. 
4. The generated password will be displayed along with information about its expiration time.
5. Wait for 30 seconds, and the password will be automatically regenerated.