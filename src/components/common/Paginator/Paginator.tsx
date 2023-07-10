import React, {useState} from "react";
import s from './paginator.module.css';
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import {Button} from "antd";

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
            <Button icon={<LeftOutlined rev={undefined} />} onClick={() => setPortionNumber(portionNumber - 1)}/>
        }
        {pages.filter(p=> p>= leftPortionPageNumber && p<=rigthPortionPageNumber)
            .map(p=>{
            return <span onClick={()=>onPageChange(p)} className={currentPage === p? s.selectedPage: s.page}>
                {p}
            </span>

            })}
        {portionCount > portionNumber &&
            <Button icon={<RightOutlined rev={undefined}/>} onClick={()=>{setPortionNumber(portionNumber+1)}}/>}
    </div>
}
