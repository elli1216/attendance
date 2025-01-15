
const Grades = () => {
  return (
    <div className="bg-mainColor pb-4 h-full">
      <div className="flex-row justify-between p-2 ">
        <div className="bg-white p-2 mb-3 text-xl">Home {'>'} Grades</div>
        <div className="flex justify-between items-center bg-myGreen p-4 ">
          <h1 className="font-semibold text-3xl text-white">Report of Grades</h1>
          <select className="mt-2 p-1 bg-white border border-gray-300 rounded">
            <option>2024-2025 1st Semester</option>
            <option>2023-2024 2nd Semester</option>
            <option>2023-2024 1st Semester</option>
            <option>2022-2023 2nd Semester</option>
            <option>2022-2023 1st Semester</option>
          </select>
        </div>
      </div>
      <div className="flex-row bg-white p-3">
        <div className="grid grid-cols-[1fr_auto] m-2 gap-4">
          <div className="border p-3 shadow-lg">
            <h1>Subject:</h1>
          </div>
          <div className="border bg-gradeBgColor p-3 shadow-lg">
            <h1>0.00</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Grades