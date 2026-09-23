// Firebase connection for the Invoice to Delivery app. Clear apiKey to go back to local demo mode.
window.I2D_FIREBASE = {
  config: {
    apiKey: "AIzaSyBgr4rtOZIqBalkhkez-Ff1yyFXeTCGzsk",
    authDomain: "falcon2026-d3dd0.firebaseapp.com",
    projectId: "falcon2026-d3dd0",
    storageBucket: "falcon2026-d3dd0.firebasestorage.app",
    messagingSenderId: "653684061419",
    appId: "1:653684061419:web:3bf88b5c77f372467b3aae"
  },
  // Staff sign in with a simple User ID. Behind the scenes it becomes userid@i2d.app
  userDomain: "i2d.app",
  // User ID → role (order / delivery / admin). Keep in step with firestore.rules.
  roles: { user1: "order", user2: "delivery", admin: "admin" },
  // "firestore" = photo saved inside the order (free plan). "storage" = Firebase Storage (Blaze plan).
  photoStorage: "firestore"
};
