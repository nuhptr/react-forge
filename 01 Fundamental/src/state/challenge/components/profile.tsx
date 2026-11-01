import { useState, type ChangeEvent } from "react"

type ProfileType = {
   name: string
   age: number
}

const Profile = () => {
   // Initialize state with an object containing name and age
   const [profile, setProfile] = useState<ProfileType>({
      name: "John Doe",
      age: 30,
   })

   // Function to update the profile state
   const handleProfileUpdate = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target
      setProfile((prevProfile) => ({
         ...prevProfile,
         [name]: value,
      }))
   }

   return (
      <div>
         <h2>User Profile</h2>
         <div>
            <label>
               Name:
               <input type="text" name="name" value={profile.name} onChange={handleProfileUpdate} />
            </label>
         </div>
         <div>
            <label>
               Age:
               <input type="number" name="age" value={profile.age} onChange={handleProfileUpdate} />
            </label>
         </div>

         <h3>Profile Information</h3>
         <p>Name: {profile.name}</p>
         <p>Age: {profile.age}</p>
      </div>
   )
}

export default Profile
