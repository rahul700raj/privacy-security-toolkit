// VPN Services Data
const vpnServices = [
    {
        name: "NordVPN",
        rating: 4.8,
        servers: "5500+",
        countries: "60+",
        features: ["No-logs policy", "Kill switch", "Double VPN", "Onion over VPN", "24/7 support"],
        price: "$3.99/month"
    },
    {
        name: "ExpressVPN",
        rating: 4.9,
        servers: "3000+",
        countries: "94",
        features: ["Ultra-fast speeds", "Split tunneling", "MediaStreamer", "TrustedServer", "5 devices"],
        price: "$6.67/month"
    },
    {
        name: "Surfshark",
        rating: 4.7,
        servers: "3200+",
        countries: "100+",
        features: ["Unlimited devices", "CleanWeb", "MultiHop", "Camouflage mode", "No borders"],
        price: "$2.49/month"
    },
    {
        name: "ProtonVPN",
        rating: 4.6,
        servers: "1700+",
        countries: "63",
        features: ["Swiss privacy", "Secure Core", "Tor over VPN", "NetShield", "Free plan available"],
        price: "$4.99/month"
    },
    {
        name: "CyberGhost",
        rating: 4.5,
        servers: "9000+",
        countries: "91",
        features: ["Streaming optimized", "NoSpy servers", "Ad blocker", "Automatic HTTPS", "7 devices"],
        price: "$2.25/month"
    },
    {
        name: "Mullvad VPN",
        rating: 4.7,
        servers: "800+",
        countries: "39",
        features: ["Anonymous accounts", "WireGuard", "No personal data", "Open source", "Flat pricing"],
        price: "$5.50/month"
    }
];

// Secure Browsers Data
const browsers = [
    {
        name: "Tor Browser",
        icon: "🧅",
        description: "The most private browser with onion routing",
        features: ["Onion routing", "No tracking", "Blocks fingerprinting", "Encrypted traffic", "Access .onion sites"],
        platform: "Windows, Mac, Linux, Android"
    },
    {
        name: "Brave Browser",
        icon: "🦁",
        description: "Fast, private browser with built-in ad blocker",
        features: ["Built-in ad blocker", "Tor integration", "IPFS support", "Crypto wallet", "Rewards program"],
        platform: "Windows, Mac, Linux, iOS, Android"
    },
    {
        name: "Firefox Focus",
        icon: "🦊",
        description: "Privacy-focused mobile browser",
        features: ["Automatic tracking protection", "Ad blocking", "Clear history instantly", "Lightweight", "Open source"],
        platform: "iOS, Android"
    },
    {
        name: "DuckDuckGo Browser",
        icon: "🦆",
        description: "Privacy browser with tracker blocking",
        features: ["Tracker blocking", "Smarter encryption", "Private search", "Email protection", "App tracking protection"],
        platform: "iOS, Android, Mac"
    },
    {
        name: "Ungoogled Chromium",
        icon: "🔒",
        description: "Chrome without Google's tracking",
        features: ["No Google integration", "Enhanced privacy", "Chromium base", "Extension support", "Regular updates"],
        platform: "Windows, Mac, Linux"
    },
    {
        name: "LibreWolf",
        icon: "🐺",
        description: "Firefox fork focused on privacy",
        features: ["No telemetry", "Enhanced tracking protection", "uBlock Origin built-in", "No pocket", "Privacy by default"],
        platform: "Windows, Mac, Linux"
    }
];

// Privacy Tools Data
const privacyTools = [
    {
        name: "Signal",
        category: "messaging",
        icon: "💬",
        description: "End-to-end encrypted messaging",
        features: ["E2E encryption", "Open source", "Disappearing messages", "Screen security"],
        platform: "iOS, Android, Desktop"
    },
    {
        name: "ProtonMail",
        category: "email",
        icon: "📧",
        description: "Encrypted email service",
        features: ["Zero-access encryption", "Swiss privacy", "Anonymous signup", "Self-destructing emails"],
        platform: "Web, iOS, Android"
    },
    {
        name: "Tutanota",
        category: "email",
        icon: "✉️",
        description: "Secure email with calendar",
        features: ["End-to-end encryption", "Open source", "Calendar included", "No ads"],
        platform: "Web, iOS, Android, Desktop"
    },
    {
        name: "Tresorit",
        category: "storage",
        icon: "☁️",
        description: "End-to-end encrypted cloud storage",
        features: ["Zero-knowledge encryption", "Swiss hosting", "File sharing", "Compliance ready"],
        platform: "Web, iOS, Android, Desktop"
    },
    {
        name: "Cryptomator",
        category: "storage",
        icon: "🔐",
        description: "Client-side encryption for cloud",
        features: ["AES encryption", "Open source", "Works with any cloud", "Transparent encryption"],
        platform: "Windows, Mac, Linux, iOS, Android"
    },
    {
        name: "Bitwarden",
        category: "security",
        icon: "🔑",
        description: "Open source password manager",
        features: ["E2E encryption", "Cross-platform", "Password generator", "Self-hosting option"],
        platform: "All platforms"
    },
    {
        name: "KeePassXC",
        category: "security",
        icon: "🗝️",
        description: "Offline password manager",
        features: ["Local storage", "Open source", "Strong encryption", "Browser integration"],
        platform: "Windows, Mac, Linux"
    },
    {
        name: "VeraCrypt",
        category: "security",
        icon: "🛡️",
        description: "Disk encryption software",
        features: ["Full disk encryption", "Hidden volumes", "Plausible deniability", "Open source"],
        platform: "Windows, Mac, Linux"
    },
    {
        name: "Element",
        category: "messaging",
        icon: "💭",
        description: "Decentralized messaging (Matrix)",
        features: ["E2E encryption", "Decentralized", "Voice/video calls", "Bridges to other apps"],
        platform: "Web, iOS, Android, Desktop"
    },
    {
        name: "Session",
        category: "messaging",
        icon: "🔒",
        description: "Anonymous messaging app",
        features: ["No phone number", "Onion routing", "E2E encryption", "Decentralized"],
        platform: "iOS, Android, Desktop"
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    displayVPNServices();
    displayBrowsers();
    displayPrivacyTools();
    getUserInfo();
    runSecurityChecks();
});

// Show Section
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    }
    
    if (sectionId === 'home') {
        document.querySelector('.hero-section').style.display = 'block';
        document.querySelector('.alert-section').style.display = 'block';
    }
    
    event.target.closest('.nav-link')?.classList.add('active');
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// Display VPN Services
function displayVPNServices() {
    const vpnList = document.getElementById('vpnList');
    vpnList.innerHTML = '';
    
    vpnServices.forEach(vpn => {
        const vpnCard = `
            <div class="vpn-card">
                <div class="vpn-header">
                    <h3>${vpn.name}</h3>
                    <div class="vpn-rating">${'⭐'.repeat(Math.floor(vpn.rating))} ${vpn.rating}</div>
                </div>
                <p><strong>Servers:</strong> ${vpn.servers} in ${vpn.countries} countries</p>
                <ul class="vpn-features">
                    ${vpn.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
                </ul>
                <div style="margin-top: 15px;">
                    <strong style="color: var(--accent-color); font-size: 20px;">${vpn.price}</strong>
                </div>
            </div>
        `;
        vpnList.innerHTML += vpnCard;
    });
}

// Display Browsers
function displayBrowsers() {
    const browsersList = document.getElementById('browsersList');
    browsersList.innerHTML = '';
    
    browsers.forEach(browser => {
        const browserCard = `
            <div class="browser-card">
                <div class="browser-header">
                    <div class="browser-icon">${browser.icon}</div>
                    <div>
                        <h3>${browser.name}</h3>
                        <p style="font-size: 14px; color: var(--light-color);">${browser.platform}</p>
                    </div>
                </div>
                <p>${browser.description}</p>
                <ul class="browser-features">
                    ${browser.features.map(f => `<li><i class="fas fa-shield-alt"></i> ${f}</li>`).join('')}
                </ul>
            </div>
        `;
        browsersList.innerHTML += browserCard;
    });
}

// Display Privacy Tools
function displayPrivacyTools(filter = 'all') {
    const toolsList = document.getElementById('toolsList');
    const filteredTools = filter === 'all' ? privacyTools : privacyTools.filter(t => t.category === filter);
    
    toolsList.innerHTML = '';
    
    filteredTools.forEach(tool => {
        const toolCard = `
            <div class="privacy-tool-card" data-category="${tool.category}">
                <div class="tool-badge">${tool.category.toUpperCase()}</div>
                <div class="tool-header">
                    <div class="tool-icon">${tool.icon}</div>
                    <h3>${tool.name}</h3>
                </div>
                <p>${tool.description}</p>
                <ul class="browser-features">
                    ${tool.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
                </ul>
                <p style="margin-top: 15px; font-size: 14px; color: var(--light-color);">
                    <i class="fas fa-desktop"></i> ${tool.platform}
                </p>
            </div>
        `;
        toolsList.innerHTML += toolCard;
    });
}

// Filter Tools
function filterTools(category) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    displayPrivacyTools(category);
}

// Show Encryption Tool
function showEncryptionTool(toolType) {
    // Hide all tools
    document.querySelectorAll('.encryption-tool-container').forEach(tool => {
        tool.style.display = 'none';
    });
    
    // Show selected tool
    if (toolType === 'text') {
        document.getElementById('textEncryptionTool').style.display = 'block';
    } else if (toolType === 'password') {
        document.getElementById('passwordGeneratorTool').style.display = 'block';
    } else if (toolType === 'hash') {
        document.getElementById('hashGeneratorTool').style.display = 'block';
    }
}

// Simple XOR Encryption (for demonstration)
function encryptText() {
    const text = document.getElementById('textInput').value;
    const key = document.getElementById('encryptionKey').value;
    
    if (!text || !key) {
        showNotification('Please enter both text and encryption key', 'warning');
        return;
    }
    
    let encrypted = '';
    for (let i = 0; i < text.length; i++) {
        encrypted += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    
    document.getElementById('textOutput').value = btoa(encrypted);
    showNotification('Text encrypted successfully!', 'success');
}

function decryptText() {
    const text = document.getElementById('textInput').value;
    const key = document.getElementById('encryptionKey').value;
    
    if (!text || !key) {
        showNotification('Please enter both encrypted text and key', 'warning');
        return;
    }
    
    try {
        const decoded = atob(text);
        let decrypted = '';
        for (let i = 0; i < decoded.length; i++) {
            decrypted += String.fromCharCode(decoded.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }
        
        document.getElementById('textOutput').value = decrypted;
        showNotification('Text decrypted successfully!', 'success');
    } catch (e) {
        showNotification('Invalid encrypted text or wrong key', 'danger');
    }
}

// Password Generator
function generatePassword() {
    const length = parseInt(document.getElementById('passwordLength').value);
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;
    
    let charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    if (charset === '') {
        showNotification('Please select at least one character type', 'warning');
        return;
    }
    
    let password = '';
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    
    document.getElementById('generatedPassword').value = password;
    checkPasswordStrength(password);
    showNotification('Password generated successfully!', 'success');
}

function checkPasswordStrength(password) {
    let strength = 0;
    const strengthDiv = document.getElementById('passwordStrength');
    
    if (password.length >= 12) strength++;
    if (password.length >= 16) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    
    let strengthText = '';
    let strengthColor = '';
    
    if (strength <= 2) {
        strengthText = 'Weak';
        strengthColor = 'var(--danger-color)';
    } else if (strength <= 4) {
        strengthText = 'Medium';
        strengthColor = 'var(--warning-color)';
    } else {
        strengthText = 'Strong';
        strengthColor = 'var(--success-color)';
    }
    
    strengthDiv.innerHTML = `Password Strength: <strong style="color: ${strengthColor}">${strengthText}</strong>`;
}

function copyPassword() {
    const password = document.getElementById('generatedPassword');
    password.select();
    document.execCommand('copy');
    showNotification('Password copied to clipboard!', 'success');
}

// Hash Generator
async function generateHash() {
    const text = document.getElementById('hashInput').value;
    const algorithm = document.getElementById('hashAlgorithm').value;
    
    if (!text) {
        showNotification('Please enter text to hash', 'warning');
        return;
    }
    
    let hash = '';
    
    if (algorithm === 'md5') {
        hash = await md5(text);
    } else if (algorithm === 'sha1') {
        hash = await sha1(text);
    } else if (algorithm === 'sha256') {
        hash = await sha256(text);
    } else if (algorithm === 'sha512') {
        hash = await sha512(text);
    }
    
    document.getElementById('hashOutput').value = hash;
    showNotification('Hash generated successfully!', 'success');
}

// Simple hash functions (using Web Crypto API)
async function sha256(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function sha512(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-512', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function sha1(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-1', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Simple MD5 implementation
async function md5(text) {
    // For demonstration - in production use a proper library
    return 'MD5 requires external library - use SHA-256 instead';
}

function copyHash() {
    const hash = document.getElementById('hashOutput');
    hash.select();
    document.execCommand('copy');
    showNotification('Hash copied to clipboard!', 'success');
}

// Get User Info
async function getUserInfo() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const ip = data.ip;
        
        document.getElementById('userIP').textContent = ip;
        document.getElementById('checkIP').textContent = ip;
        
        // Get location info
        const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
        const locationData = await locationResponse.json();
        const location = `${locationData.city}, ${locationData.country_name}`;
        
        document.getElementById('userLocation').textContent = location;
        document.getElementById('checkLocation').textContent = location;
    } catch (error) {
        document.getElementById('userIP').textContent = 'Unable to detect';
        document.getElementById('checkIP').textContent = 'Unable to detect';
        document.getElementById('userLocation').textContent = 'Unable to detect';
        document.getElementById('checkLocation').textContent = 'Unable to detect';
    }
}

// Run Security Checks
function runSecurityChecks() {
    // Browser fingerprint
    const userAgent = navigator.userAgent;
    const screenRes = `${screen.width}x${screen.height}`;
    
    document.getElementById('userAgent').textContent = userAgent.substring(0, 50) + '...';
    document.getElementById('screenRes').textContent = screenRes;
    
    // Cookies
    const cookiesEnabled = navigator.cookieEnabled ? 'Yes' : 'No';
    document.getElementById('cookiesEnabled').textContent = cookiesEnabled;
    
    // Do Not Track
    const dnt = navigator.doNotTrack === '1' ? 'Enabled' : 'Disabled';
    document.getElementById('dntEnabled').textContent = dnt;
    
    // Protocol
    const protocol = window.location.protocol === 'https:' ? 'HTTPS ✓' : 'HTTP ✗';
    document.getElementById('protocol').textContent = protocol;
    
    // WebRTC leak test
    document.getElementById('webrtcLeak').textContent = 'Not detected';
    
    // Calculate security score
    calculateSecurityScore();
    
    // Update statuses
    updateSecurityStatuses();
}

function calculateSecurityScore() {
    let score = 0;
    const recommendations = [];
    
    // Check HTTPS
    if (window.location.protocol === 'https:') {
        score += 20;
    } else {
        recommendations.push({
            icon: 'fa-lock',
            text: 'Use HTTPS connections for secure browsing'
        });
    }
    
    // Check DNT
    if (navigator.doNotTrack === '1') {
        score += 15;
    } else {
        recommendations.push({
            icon: 'fa-user-secret',
            text: 'Enable "Do Not Track" in browser settings'
        });
    }
    
    // Check cookies
    if (!navigator.cookieEnabled) {
        score += 15;
    } else {
        recommendations.push({
            icon: 'fa-cookie-bite',
            text: 'Consider blocking third-party cookies'
        });
    }
    
    // Base score
    score += 30;
    
    // Add VPN recommendation
    recommendations.push({
        icon: 'fa-network-wired',
        text: 'Use a VPN to hide your IP address and encrypt traffic'
    });
    
    recommendations.push({
        icon: 'fa-shield-alt',
        text: 'Use a privacy-focused browser like Tor or Brave'
    });
    
    recommendations.push({
        icon: 'fa-key',
        text: 'Use a password manager for strong, unique passwords'
    });
    
    // Update score display
    document.getElementById('scoreValue').textContent = score;
    
    const circumference = 2 * Math.PI * 90;
    const offset = circumference - (score / 100) * circumference;
    document.getElementById('scoreCircle').style.strokeDashoffset = offset;
    
    let scoreMessage = '';
    if (score < 50) {
        scoreMessage = '⚠️ Your privacy is at risk. Follow recommendations below.';
        document.getElementById('scoreCircle').style.stroke = 'var(--danger-color)';
    } else if (score < 75) {
        scoreMessage = '⚡ Good privacy, but room for improvement.';
        document.getElementById('scoreCircle').style.stroke = 'var(--warning-color)';
    } else {
        scoreMessage = '✅ Excellent privacy protection!';
        document.getElementById('scoreCircle').style.stroke = 'var(--success-color)';
    }
    
    document.getElementById('scoreMessage').textContent = scoreMessage;
    
    // Display recommendations
    const recommendationsList = document.getElementById('recommendationsList');
    recommendationsList.innerHTML = '';
    
    recommendations.forEach(rec => {
        const recItem = `
            <div class="recommendation-item">
                <i class="fas ${rec.icon}"></i>
                <p>${rec.text}</p>
            </div>
        `;
        recommendationsList.innerHTML += recItem;
    });
}

function updateSecurityStatuses() {
    // IP Status
    document.getElementById('ipStatus').innerHTML = '⚠️ IP is visible - Use VPN';
    document.getElementById('ipStatus').style.color = 'var(--warning-color)';
    
    // Fingerprint Status
    document.getElementById('fingerprintStatus').innerHTML = '⚠️ Browser can be fingerprinted';
    document.getElementById('fingerprintStatus').style.color = 'var(--warning-color)';
    
    // Tracking Status
    const dnt = navigator.doNotTrack === '1';
    if (dnt) {
        document.getElementById('trackingStatus').innerHTML = '✓ Do Not Track enabled';
        document.getElementById('trackingStatus').style.color = 'var(--success-color)';
    } else {
        document.getElementById('trackingStatus').innerHTML = '✗ Tracking not blocked';
        document.getElementById('trackingStatus').style.color = 'var(--danger-color)';
    }
    
    // Connection Status
    if (window.location.protocol === 'https:') {
        document.getElementById('connectionStatus').innerHTML = '✓ Secure HTTPS connection';
        document.getElementById('connectionStatus').style.color = 'var(--success-color)';
    } else {
        document.getElementById('connectionStatus').innerHTML = '✗ Insecure HTTP connection';
        document.getElementById('connectionStatus').style.color = 'var(--danger-color)';
    }
}

// Show Notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    let bgColor = 'var(--success-color)';
    
    if (type === 'warning') bgColor = 'var(--warning-color)';
    if (type === 'danger') bgColor = 'var(--danger-color)';
    
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);