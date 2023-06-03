import React from 'react';

const ContactPage = () => {
return (
<div style={{ backgroundColor: '#e8f5e9', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
<h2 style={{ color: '#388e3c', marginBottom: '20px' }}>Contactez-nous</h2>
<form>
<div style={{ marginBottom: '10px', textAlign: 'center' }}>
<label style={{ color: '#388e3c', display: 'block', marginBottom: '5px', textAlign: 'center' }}>Nom:</label>
<input type="text" style={{ border: '1px solid #388e3c', borderRadius: '5px', padding: '5px' }} />
</div>
<div style={{ marginBottom: '10px', textAlign: 'center' }}>
<label style={{ color: '#388e3c', display: 'block', marginBottom: '5px', textAlign: 'center' }}>Email:</label>
<input type="email" style={{ border: '1px solid #388e3c', borderRadius: '5px', padding: '5px' }} />
</div>
<div style={{ marginBottom: '10px', textAlign: 'center' }}>
<label style={{ color: '#388e3c', display: 'block', marginBottom: '5px', textAlign: 'center' }}>Message:</label>
<textarea style={{ border: '1px solid #388e3c', borderRadius: '5px', padding: '5px' }}></textarea>
</div>
<button type="submit" style={{ backgroundColor: '#388e3c', color: '#ffffff', border: 'none', borderRadius: '5px', padding: '10px 20px' }}>Envoyer</button>
</form>
</div>
);
};

export default ContactPage;