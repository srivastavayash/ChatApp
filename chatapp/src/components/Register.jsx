import React, { useState } from 'react';
import add from '../assets/addAvatar.png';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    setLoading(true);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, `${displayName}_${Date.now()}_${file.name}`);
      await uploadBytesResumable(storageRef, file);

      const downloadURL = await getDownloadURL(storageRef);
      await updateProfile(res.user, {
        displayName,
        photoURL: downloadURL,
      });

      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        photoURL: downloadURL
      });

      await setDoc(doc(db, "userChats", res.user.uid), {
      });
      navigate("/");
      setLoading(false);
    } catch (error) {
      console.error("Registration Error:", error);
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">ChatApp</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" id="username" placeholder='Name' required />
          <input type="email" name="email" id="email" placeholder='xyz@mail.com' required />
          <input type="password" name="password" id="password" placeholder='password' required />
          <input style={{ display: "none" }} type="file" name="file" id="file" accept="image/*" required />
          <label htmlFor="file">
            <img src={add} alt="Add Avatar" />
            <span>Add an Avatar</span>
          </label>
          <button type="submit" disabled={loading}>Sign Up</button>
          {loading && <span>Uploading...</span>}
          {err && <span>Something went wrong!</span>}
        </form>
        <p>Have an account already? <Link to="/login" style={{textDecoration:"none"}}>  Login</Link></p>
      </div>
    </div>
  );
}

export default Register;
