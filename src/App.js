import { useState } from 'react';
// import Card from 'react-bootstrap/Card';
import ClassicTemplate from './components/ClassicTemplate';
import ModernTemplate from './components/ModernTemplate';
import VintageTemplate from './components/VintageTemplate';
import AudioPlayer from './components/AudioPlayer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicInvitation from './PublicInvitation';

import './App.css';

function MainAppContent() {

  const [formData, setFormData] = useState({
    brideName: '',
    groomName: '',
    weddingDate: '',
    location: '',
    template: 'classic',
    couplePhoto: null,
    themeColor: '#d48fb8'
  });

  const [shareLink, setShareLink] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const generateShareLink = () => {
    const invitationId = Math.random().toString(36).substring(2, 9);
    // Add read-only flag to the saved data
    const publicData = { ...formData, isPublicView: true };
    localStorage.setItem(`invitation_${invitationId}`, JSON.stringify(publicData));
    
    // Use '/view' path for public links
    const publicUrl = `${window.location.origin}/view/${invitationId}`;
    setShareLink(publicUrl);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPreview(true);
    generateShareLink();
  };

  const generatePreview = () => {
    switch(formData.template) {
      case 'modern':
        return <ModernTemplate data={formData} />;
      case 'vintage':
        return <VintageTemplate data={formData} />;
      default:
        return <ClassicTemplate data={formData} />;
    }

  };

  return (
    
    <div className="app-container">
      <AudioPlayer />
      {!showPreview ? (
        <div className="form-container">
          <h2>Create Your Wedding Invitation</h2>
          <form id="invitation-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="brideName">Bride's Name</label>
              <input 
                type="text" 
                id="brideName" 
                name="brideName"
                value={formData.brideName}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="groomName">Groom's Name</label>
              <input 
                type="text" 
                id="groomName" 
                name="groomName"
                value={formData.groomName}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="weddingDate">Wedding Date</label>
              <input 
                type="datetime-local" 
                id="weddingDate" 
                name="weddingDate"
                value={formData.weddingDate}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input 
                type="text" 
                id="location" 
                name="location"
                value={formData.location}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="template">Select Template</label>
              <select 
                id="template" 
                name="template"
                value={formData.template}
                onChange={handleChange}
              >
                <option value="classic">Classic</option>
                <option value="modern">Modern</option>
                <option value="vintage">Vintage</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="themeColor">Theme Color</label>
              <input 
                type="color" 
                id="themeColor" 
                name="themeColor"
                value={formData.themeColor}
                onChange={handleChange}
              />
            </div>
          
            <button type="submit">Generate Invitation</button>
          </form>
        </div>
      ) : (
        <div id="preview-container">
          <h2>Your Invitation Preview</h2>
          {generatePreview()}
          <button onClick={() => setShowPreview(false)}>Edit Invitation</button>
          {/* <button id="share-btn">Share Invitation</button> */}
          <div className="share-section">
            <input 
              type="text" 
              value={shareLink} 
              readOnly 
              onClick={(e) => e.target.select()}
            />
            <button onClick={() => {
              navigator.clipboard.writeText(shareLink);
              alert('Link copied to clipboard!');
            }}>Copy Link</button>
            <button onClick={() => window.open(`mailto:?body=${encodeURIComponent(shareLink)}`)}>Email</button>
          </div>
        </div>
      )}
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/view/:id" element={<PublicInvitation />} />
        <Route path="/*" element={<MainAppContent />} />
      </Routes>
    </Router>
  );
};

export default App;
