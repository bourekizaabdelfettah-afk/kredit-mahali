importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB3nwhWlIbSQFZdRNmJmZ2nCiIArG3mYVs",
  authDomain: "kredit-mahali-3fcac.firebaseapp.com",
  projectId: "kredit-mahali-3fcac",
  storageBucket: "kredit-mahali-3fcac.firebasestorage.app",
  messagingSenderId: "653857008624",
  appId: "1:653857008624:web:19daa0044167819cbf8b35"
});

const messaging = firebase.messaging();

// إشعارات في الخلفية
messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(
    payload.notification?.title || 'كريدي محلي',
    {
      body: payload.notification?.body || '',
      icon: '/kredit-mahali/icon.png',
      badge: '/kredit-mahali/icon.png',
      dir: 'rtl',
      lang: 'ar'
    }
  );
});
