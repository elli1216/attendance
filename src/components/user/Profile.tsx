
const Profile = () => {
  return (
    <div className="flex-row bg-mainColor pb-4">
      <div className="flex-row justify-between p-2 ">
        <div className="bg-white p-2 mb-3 text-xl">Home {'>'} Profile</div>
        <div className="bg-myGreen p-4 font-semibold text-3xl text-white">PROFILE</div>
      </div>
      <div className="grid grid-cols-[1.5fr_1fr] m-2 gap-4">
        <div className="flex-row bg-white p-8 border-2 border-black rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Profile Information</h1>
          <div className="grid grid-cols-[repeat(3,1fr)] gap-4">
            <div className="grid items-center grid-rows-2">
              <label htmlFor="firstName">First Name</label>
              <input className="border p-1" type="text" name="firstName" placeholder="John" />
            </div>
            <div className="grid items-center grid-rows-2">
              <label htmlFor="middleName">Middle Name</label>
              <input className="border p-1" type="text" name="middleName" placeholder="Smith" />
            </div>
            <div className="grid items-center grid-rows-2">
              <label htmlFor="lastName">Last Name</label>
              <input className="border p-1" type="text" name="lastName" placeholder="Doe" />
            </div>
          </div>
          <div className="grid grid-cols-[3fr_1fr_1fr] gap-4">
            <div className="grid items-center grid-rows-2">
              <label htmlFor="birthdate">Birthday</label>
              <input className="border p-1" type="date" name="birthdate" placeholder="johndoe@gmail.com" />
            </div>
            <div className="grid items-center grid-rows-2">
              <label htmlFor="age">Age</label>
              <input className="border p-1" type="number" name="age" placeholder="0" />
            </div>
            <div className="grid items-center grid-rows-2">
              <label htmlFor="gender">Gender</label>
              <input className="border p-1" type="gender" name="gender" placeholder="Male" />
            </div>
          </div>
          <div className="grid grid-cols-[1fr_1fr] gap-4 mb-4">
            <div className="grid items-center grid-rows-2">
              <label htmlFor="email">Email</label>
              <input className="border p-1" type="email" name="email" placeholder="johndoe@gmail.com" />
            </div>
            <div className="grid items-center grid-rows-2">
              <label htmlFor="number">Phone Number</label>
              <input className="border p-1" type="number" name="number" placeholder="09123456789" />
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-6">Address</h1>
          <div className="grid grid-rows-[1fr_1fr] gap-4 mb-4">
            <div className="grid items-center grid-rows-2">
              <label htmlFor="presentAddress">Present Address</label>
              <input className="border p-1" type="text" name="presentAddress" placeholder="Malolos, Bulacan, Philippines" />
            </div>
            <div className="grid items-center grid-rows-2">
              <label htmlFor="permanentAddress">Permanent Address</label>
              <input className="border p-1" type="text" name="permanentAddress" placeholder="Malolos, Bulacan, Philippines" />
            </div>
            <button className="flex bg-buttonColor text-white p-2 justify-center justify-self-end w-fit">Save Changes</button>
          </div>
        </div>
        <div className="grid grid-rows-[repeat(4,_auto)] justify-center content-center justify-items-center gap-2 bg-white p-4 border-2 border-black rounded-lg h-[25rem] shadow-lg">
          <img className="rounded-full w-32 h-32" src="/images/pfp_placeholder.png" alt="" />
          <h1 className="font-bold text-2xl">Juan Dela Cruz</h1>
          <h1 className="">juandelacruz@gmail.com</h1>
          <button className="bg-buttonColor text-white p-1">Edit Avatar</button>
        </div>
      </div>
    </div>
  )
}

export default Profile