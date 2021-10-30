const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

import App from './Components/App';

window.app = new App({ ctx, canvas });
app.start();


