# kNote PWA

**kNote** is a simple, lightweight Progressive Web App (PWA) for taking notes. It allows users to add, edit, and remove notes, with data stored in the browser's local storage for persistence. The app is built with Vite, Vue, and Vuetify, and it supports offline functionality via a service worker.

## Features

- Add, edit, and delete notes
- Notes are saved locally using browser's local storage
- Offline functionality with a service worker
- Progressive Web App (PWA) ready
- Responsive design using Vuetify

## Tech Stack

- **Vue 3**: JavaScript framework for building the UI
- **Vuetify**: Material Design component library for Vue
- **Vite**: Fast and lightweight build tool
- **Service Worker**: Offline capabilities and caching

## Installation

To get started with kNote locally:

1. Clone the repository:

```bash
git clone https://github.com/yourusername/knote_pwa.git
cd knote_pwa
```

2. Install dependencies:

```bash
npm install
```

3. Run a development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Usage

Once the app is running, you can:

- **Add a note**: Use the input field to create a new note.
- **Edit a note**: Click on any existing note to modify its content.
- **Delete a note**: Remove notes you no longer need.
- **Offline Support**: The app works offline thanks to the service worker, which caches the application and stores notes in the browser's local storage.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.