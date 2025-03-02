# Nexus Web Application

A web application for tracking state nexus thresholds and calculating nexus status for businesses.

---

## Roadmap: Achieving a “Wiki” Feel

The current system supports a workflow similar to a moderated wiki:
- Users can leave comments on a state’s detail page,
- They can submit proposed edits (“pending updates”),
- Admins can review, approve, or reject those edits,
- A revision history exists for each state, and
- Comments can be read by everyone.

To expand this into a fully “Wikipedia-like” experience:

1. **Discussion Threads for Each Pending Edit**
   Give each proposed edit its own dedicated comments section so users can talk about the new submission specifically.
2. **Community Voting**
   Show up/down votes on pending updates in the UI, with a threshold for auto-approval or admin guidance.
3. **Side-by-Side Diffs**
   Implement a clearer diff or color-coded highlighting in the “pending updates” detail.
4. **User Notifications & Watchlists**
   Let users “watch” states and receive notifications whenever there’s a new proposed edit or comment.
5. **Multi-User Approval & Rollbacks**
   Consider letting power users or a group-based approach revert or finalize edits, not just an admin.

These features will help transition from an admin-centric site into a more open, wiki-style collaborative environment.

---

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Firebase account

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd nexus-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password)
   - Create a Firestore database
   - Get your Firebase configuration from Project Settings > General > Your Apps > Firebase SDK snippet > Config

4. Configure environment variables:
   - Copy the `.env.example` file to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Fill in your Firebase configuration in the `.env` file:
     ```
     REACT_APP_FIREBASE_API_KEY=your-api-key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
     REACT_APP_FIREBASE_PROJECT_ID=your-project-id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     REACT_APP_FIREBASE_APP_ID=your-app-id
     REACT_APP_FIREBASE_MEASUREMENT_ID=your-measurement-id
     ```

### Seeding the Database

The application includes a script to seed the Firestore database with sample state nexus data.

1. Install the required development dependencies:
   ```bash
   npm install --save-dev ts-node dotenv
   ```

2. Run the seed script:
   ```bash
   npm run seed
   ```

   This will add the sample state data to your Firestore database.

   To clear existing data before seeding:
   ```bash
   npm run seed:clear
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### Creating an Admin User

To access the admin features, you need to create a user and grant them admin privileges:

1. Sign up for an account using the application's signup form.
2. Manually update the user document in Firestore to set `isAdmin: true`:
   - Go to the Firebase Console > Firestore Database
   - Find the `users` collection
   - Locate your user document (by email or UID)
   - Edit the document to add or update the `isAdmin` field to `true`

Alternatively, you can use the provided scripts to create or promote admin users:

#### Creating a new admin user:
```bash
npm run create-admin <email> <password> "<display name>"
```

Example:
```bash
npm run create-admin admin@example.com securepassword "Admin User"
```

#### Promoting an existing user to admin:
```bash
npm run promote-admin <user-uid>
```

Example:
```bash
npm run promote-admin abc123xyz456
```

You can find a user's UID in the Firebase Authentication console or in the Firestore `users` collection.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `npm run seed`

Seeds the Firestore database with sample state nexus data.

### `npm run seed:clear`

Clears existing state data and seeds the Firestore database with sample data.

### `npm run create-admin <email> <password> "<display name>"`

Creates a new user with admin privileges in Firebase Authentication and Firestore.

### `npm run promote-admin <user-uid>`

Promotes an existing user to admin by updating their Firestore document.

## Features

- Interactive US map with state nexus information
- Filtering states by various criteria
- Nexus calculator for businesses
- User authentication and authorization
- Admin dashboard for managing state data and users
- Pending updates workflow for community contributions

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).