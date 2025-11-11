# Consignment Tracker

A modular, accessible ReactJS application built with Vite and Yarn for transport organizations to track consignments, manage logistics, and support admin operations. Designed for scalability, onboarding, and future backend integration.

## Features

- **Authentication** with Protected Routes.
- **Dashboard** for viewing all consignments.
- **Consignment Detail** View with mock data.
- **Consignment Form** for new entries.
- **Admin Panel** (stubbed for future features).
- **Routing** via React Router.
- **Plain CSS3 styling** with accessible UI.
- **Stubbed API Integration** using `fetch` or `axios`.
- **Built-in React hooks** (`useState`, `useReducer`) for state management.

## Tech Stack

1. **Frontend:** React + Vite.
2. **Routing:** React Router DOM.
3. **State:** `useState`, `useReducer`.
4. **Styling:** Plain CSS.
5. **API Stubs:**  Axios or Fetch.
6. **Package Manager:** Yarn.

## Folder Structure

```
src/
├── components/        # Reusable UI components
├── pages/             # Route-based views
├── services/          # API stubs
├── styles/            # CSS files
├── context/           # Auth and global state
├── hooks/             # Custom hooks (if needed)
├── App.jsx
├── main.jsx

```

## Setup Instructions

```
# Clone the Repo
git clone https://github.com/Zambagarrah/ReactJS_Consignment_Tracker.git
cd ReactJS_Consignment_Tracker

# Install Dependecies
yarn install

# Start Development Server
yarn dev
```

## Authentication

- *Auth State* managed by `AuthContext`
- *Protected Routes* using `ProtectedRoute`
- *Stubbed Login Logic* for demo purposes.

## API Intergration

- All API calls are stubbed using `setTimeout` and mock data.
- Future backend endpoints can be integrated via `services/api.js`.

## Accessibility & UX

- Semantic HTML and ARIA labels.
- Keyboard-friendly forms and navigation.
- Clean, readable layout for all screen sizes.

## Contributing 

1. Fork the Repo.
2. Create a `feature` branch
    ```
    git checkout -b feature/your_feature
    ```
3. Commit with clear messages
    ```
    git commit -m "Add feature X"
    ```
4. Push & Open a PR