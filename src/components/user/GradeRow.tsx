
const GradeRow = () => {
  return (
    <div className="flex-row bg-white p-2">
        <div className="grid grid-cols-[1fr_auto] m-1 gap-4">
          <div className="border-2 border-gray-500 p-3 shadow-lg">
            <h1>Subject:</h1>
          </div>
          <div className="border-2 border-gray-500 bg-gradeBgColor p-3 shadow-lg">
            <h1>0.00</h1>
          </div>
        </div>
      </div>
  )
}

export default GradeRow