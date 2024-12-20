import students from "../data/student.json";
export const getStudents = (pageSize: number, pageNumber: number): Promise<any[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const startIndex = (pageNumber - 1) * pageSize;
        const paginatedData = students.slice(startIndex, startIndex + pageSize);
        resolve(paginatedData);
      }, 2000);
    });
  };