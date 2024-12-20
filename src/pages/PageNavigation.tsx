import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

function PageNavigation({ setCurrentPage, totalPages, currentPage }: { setCurrentPage: any, totalPages: number, currentPage: number }) {
  const Pages: number[] = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#"  onClick={()=>setCurrentPage(currentPage--)} />
        </PaginationItem>
        {
          Pages.map((item: number) => {
            return (
              <PaginationItem key={item} onClick={()=>setCurrentPage(item)}>
                <PaginationLink href="#" isActive={currentPage==item}>{item}</PaginationLink>
              </PaginationItem>
            )
          })
        }
        <PaginationItem>
          <PaginationNext href="#" onClick={()=>setCurrentPage(currentPage++)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PageNavigation;
