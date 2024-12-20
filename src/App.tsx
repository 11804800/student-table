import { getStudents } from "./utils"
import { useEffect, useState } from "react"
import students from "../data/student.json";
import StudentTable from "./pages/StudentTable";
import PageNavigation from "./pages/PageNavigation";



function App() {

  const [studentsdata, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [dataLoading,setDataLoading]=useState(false);

  //for loading till the data is loaded
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      setDataLoading(true);
      const data:any = await getStudents(10, currentPage);
      setStudents(data);
      setTotalPages(Math.floor(students.length / 10));
      setLoading(false);
      setDataLoading(false);
    };
    fetchStudents();
  }, [currentPage]);

  if(loading)
  {
    return (
      <div className="w-full h-screen flex justify-center items-center font-medium text-md">
        Loading ...
      </div>
    )
  }
  else
  {
    return (
      <div className="flex flex-col justify-center items-center w-full h-screen p-4 gap-5">
        {
          dataLoading ?
          <div className="w-full h-[70%] flex justify-center items-center font-medium text-md">
            Loading ...
          </div>
          :
          <StudentTable students={studentsdata}/>
        }
        <PageNavigation setCurrentPage={setCurrentPage} totalPages={totalPages} currentPage={currentPage}/>
      </div>
    )
  }
}

export default App
