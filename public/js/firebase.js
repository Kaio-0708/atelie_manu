const firebaseConfig = {
  apiKey: "AIzaSyDZYB2t1IoVXZCB3jcI8bNUWlLj5SZJw48",
  authDomain: "manu-atelie.firebaseapp.com",
  projectId: "manu-atelie",
  //"manu-atelie.firebasestorage.app",
  storageBucket: "manu-atelie.appspot.com",
  messagingSenderId: "559476762036",
  appId: "1:559476762036:web:a6c663f7977493e556fee1",
  measurementId: "G-9LJRRR9ETF",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function saveOrderToFirebase(orderData) {
  return db
    .collection("orders")
    .doc(orderData.orderId)
    .set(orderData)
    .then(() => console.log("Pedido salvo no Firebase:", orderData.orderId))
    .catch((err) => {
      console.error("Erro ao salvar pedido no Firebase:", err);
      throw err;
    });
}

window.saveOrderToFirebase = saveOrderToFirebase;
