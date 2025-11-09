
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    
    if (name.length < 3) return alert('❌ Name must be 3+ characters');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return alert('❌ Invalid email');
    if (password.length < 6) return alert('❌ Password must be 6+ characters');
    
    alert('✅ Registration successful!');
    this.reset();
});


document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return alert('❌ Invalid email');
    if (password.length < 6) return alert('❌ Password must be 6+ characters');
    
    alert('✅ Login successful!');
    this.reset();
});

// User Options Click Handler
document.querySelectorAll('.option-card').forEach(card => {
    card.addEventListener('click', function() {
        alert('✅ ' + this.textContent + ' feature activated!');
    });
});