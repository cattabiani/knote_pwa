import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { registerSW } from 'virtual:pwa-register'; // Import the service worker registration

const app = createApp(App);

// Register the service worker
registerSW();

app.mount('#app');