import { getStudents } from "./utils"
import { useEffect, useState } from "react"
import students from "../data/student.json";



function App() {

  const [studentsdata, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      const data:any = await getStudents(10, currentPage);
      setStudents(data);
      setTotalPages(students.length / 10);
    };
    fetchStudents();
  }, [currentPage]);

  return (
    <div>

    </div>
  )
}

export default App
