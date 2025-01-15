import GradeRow from "./GradeRow"

const Grades = () => {
  return (
    <div className="bg-mainColor pb-3 h-fit">
      <div className="flex-row justify-between p-2 ">
        <div className="bg-white p-2 mb-3 text-xl">Home {'>'} Grades</div>
        <div className="flex justify-between items-center bg-myGreen p-4 ">
          <h1 className="font-semibold text-3xl text-white">Report of Grades</h1>
          <div className="flex gap-4 items-center">
            <button className="flex bg-buttonColor text-white px-3 justify-center w-fit h-auto">Print</button>
            <select className="mt-2 p-1 bg-white border border-gray-300 rounded">
              <option>2024-2025 1st Semester</option>
              <option>2023-2024 2nd Semester</option>
              <option>2023-2024 1st Semester</option>
              <option>2022-2023 2nd Semester</option>
              <option>2022-2023 1st Semester</option>
            </select>
          </div>
        </div>
      </div>
      <div className="m-2">
        <GradeRow />
        <GradeRow />
        <GradeRow />
        <GradeRow />
        <GradeRow />
        <GradeRow />
        <GradeRow />
        <GradeRow />
      </div>
    </div >
  )
}

export default Grades