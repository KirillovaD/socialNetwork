import React, {useState} from "react";

type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChange: (pageNumber:number) => void
    portionSize?: number


}

export const Paginator: React.FC<PaginatorPropsType> = ({
                                                            totalItemsCount,
                                                            pageSize,
                                                            currentPage,
                                                            onPageChange,
                                                            portionSize = 10
                                                        }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rigthPortionPageNumber = portionNumber * portionSize


    return <div>
        {portionNumber > 1 &&
            <button onClick={()=>{setPortionNumber(portionNumber-1)}}>PREV</button>
        }
        {pages.filter(p=> p>= leftPortionPageNumber && p<=rigthPortionPageNumber)
            .map(p=>{
            return <span onClick={()=>onPageChange(p)}>
                {p}
            </span>

            })}
        {portionCount > portionNumber &&
            <button onClick={()=>{setPortionNumber(portionNumber+1)}}>NEXT</button>}
    </div>
}
