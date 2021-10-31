const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;
// canvas.width = innerWidth - innerWidth % 20;
// canvas.height = innerHeight - innerHeight % 20;

import App from './Components/App';

window.app = new App({ ctx, canvas });
app.start();
