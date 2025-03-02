# Nexus App

A web application for calculating and visualizing state nexus thresholds for tax purposes.

## Features

- Interactive US map for visualizing nexus thresholds by state
- Detailed state-by-state nexus information
- Nexus calculator to determine tax obligations
- State comparison tool
- User authentication and admin capabilities
- Firebase backend for data storage and authentication

## Technologies Used

- React
- TypeScript
- Firebase (Firestore, Authentication)
- Material UI
- React Simple Maps
- D3-geo

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/woahhhhaa/nexus-app.git
   cd nexus-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with your Firebase configuration:
   ```
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

4. Start the development server:
   ```
   npm start
   ```

### Data Seeding

To seed the database with initial data:

```
npm run seed
```

To clear existing data and reseed:

```
npm run seed:clear
```

### CSV Data Upload

To upload nexus data from a CSV file:

```
npm run upload-csv path/to/your/csv/file.csv
```

To clear existing data before uploading:

```
npm run upload-csv:clear path/to/your/csv/file.csv
```

## Admin Setup

To create an admin user:

```
npm run create-admin
```

To promote an existing user to admin:

```
npm run promote-admin
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.