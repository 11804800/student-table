import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

function StudentTable({ students }: { students: any }) {
    return (
        <>
            <div className="w-[95%] xl:w-[90%] md:flex hidden">
                <Table className="border rounded-md shadow-sm ">
                    <TableHeader className="bg-zinc-100">
                        <TableRow>
                            <TableHead >Name</TableHead>
                            <TableHead>Age</TableHead>
                            <TableHead>Marks</TableHead>
                            <TableHead >Avg Marks</TableHead>
                            <TableHead>Roll Number</TableHead>
                            <TableHead >Class</TableHead>
                            <TableHead >City</TableHead>
                            <TableHead >Attendence</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {students.map((item: any, index: number) => {
                            return (
                                <TableRow key={index} className={`${index % 2 != 0 && "bg-blue-100"} text-sm`}>
                                    <TableCell className="font-medium">{item?.name}</TableCell>
                                    <TableCell className="text-[12px] font-medium">{item?.age}</TableCell>
                                    <TableCell className="text-[12px] font-medium">{item?.marks}</TableCell>
                                    <TableCell className="text-[12px] font-medium" >{item?.avgMarks}</TableCell>
                                    <TableCell className="text-[12px] font-medium">{item?.rollNumber}</TableCell>
                                    <TableCell className="text-[12px] font-medium">{item?.class}</TableCell>
                                    <TableCell className="text-[12px] font-medium ">{item?.city}</TableCell>
                                    <TableCell className="text-[12px] font-medium ">{item?.attendance}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
            <div className="h-[80%] overflow-y-auto w-full flex md:hidden flex-col py-5 items-center Scrollbar">
                {
                    students.map((item: any, index: number) => {
                        return (
                            <div key={index} className="p-4 border rounded-lg shadow-md bg-white mb-4 w-[320px]">
                                <p><strong>Name:</strong> {item?.name}</p>
                                <p><strong>Age:</strong> {item?.age}</p>
                                <p><strong>Marks:</strong> {item?.marks}</p>
                                <p><strong>Roll Number:</strong> {item?.rollNumber}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default StudentTable
