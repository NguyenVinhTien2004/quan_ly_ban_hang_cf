const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(__dirname));

// Route chính
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Lấy IP address
const os = require('os');
const interfaces = os.networkInterfaces();
let localIP = 'localhost';

for (const name of Object.keys(interfaces)) {
    for (const interface of interfaces[name]) {
        if (interface.family === 'IPv4' && !interface.internal) {
            localIP = interface.address;
            break;
        }
    }
}

app.listen(PORT, '0.0.0.0', () => {
    console.log('='.repeat(50));
    console.log('🚀 MOCHA DELIGHT SERVER');
    console.log('='.repeat(50));
    console.log(`📱 Máy này: http://localhost:${PORT}`);
    console.log(`🌐 Máy khác: http://${localIP}:${PORT}`);
    console.log('='.repeat(50));
});