import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import PublicClassic from './public/PublicClassic';
import PublicModern from './public/PublicModern';
import PublicVintage from './public/PublicVintage';

import { doc, getDoc } from "firebase/firestore";
import { db } from './firebase';



const PublicInvitation = () => {
  const { id } = useParams();
  const [invitationData, setInvitationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {
      const docRef = doc(db, "invitations", id);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        const publicData = { ...docSnap.data(), isPublicView: true };
        setInvitationData(publicData);
      }
      setLoading(false);
    };
  
    fetchData();

    // In production, replace with API call
    const data = localStorage.getItem(`invitation_${id}`);
    
    if (data) {
      const parsedData = JSON.parse(data);
      // Add read-only flag to prevent any modifications
      const publicData = { ...parsedData, isPublicView: true };
      setInvitationData(publicData);
    }
    setLoading(false);

  }, [id]);

  if (loading) return <div className="loading">Loading invitation...</div>;
  if (!invitationData) return <Navigate to="/" />;

  switch(invitationData.template) {

    case 'modern':
      return <PublicModern data={invitationData} />;
    case 'vintage':
      return <PublicVintage data={invitationData} />;
    default:
      return <PublicClassic data={invitationData} />;
  }
};

export default PublicInvitation;