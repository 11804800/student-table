import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


function StudentTable({students}:{students:any}) {
    return (
        <div className="w-[95%] xl:w-[90%]">
            <Table className="border rounded-md shadow-sm">
                <TableHeader className="bg-zinc-100">
                    <TableRow>
                        <TableHead >Name</TableHead>
                        <TableHead>Age</TableHead>
                        <TableHead>Marks</TableHead>
                        <TableHead >Avg Marks</TableHead>
                        <TableHead>Roll Number</TableHead>
                        <TableHead >Class</TableHead>
                        <TableHead >City</TableHead>
                        <TableHead>Attendence</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {students.map((item:any,index:number) => (
                        <TableRow key={index} className={`${index%2!=0 && "bg-blue-100"} text-sm`}>
                            <TableCell className="font-medium">{item?.name}</TableCell>
                            <TableCell className="text-[12px] font-medium">{item?.age}</TableCell>
                            <TableCell className="text-[12px] font-medium">{item?.marks}</TableCell>
                            <TableCell  className="text-[12px] font-medium" >{item?.avgMarks}</TableCell>
                            <TableCell className="text-[12px] font-medium">{item?.rollNumber}</TableCell>
                            <TableCell className="text-[12px] font-medium">{item?.class}</TableCell>
                            <TableCell className="text-[12px] font-medium">{item?.city}</TableCell>
                            <TableCell className="text-[12px] font-medium">{item?.attendance}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default StudentTable
