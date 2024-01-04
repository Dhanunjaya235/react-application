import React, { FC } from 'react';
import './profile.css';
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';
interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
    const {id}=useParams();
    const [params,setParams]=useSearchParams(window.location.pathname);
  return(
    <div className="profile" data-testid="Profile">
    <h1>
      User Profile
    </h1>
    <p>Name  : Dhanunjay</p>
    <p>Id :205</p>
  </div>
  )
}

export default Profile;
