import TestRenderer from "react-test-renderer";
import {Paginator} from "./Paginator";




describe('Paginator component test', ()=> {
  test('pages count is 11 but should shown only 10', () => {
    const testRenderer = TestRenderer.create(<Paginator currentPage={1} onPageChange={() => {
    }} pageSize={1} totalItemsCount={15} portionSize={10}/>)
    const span = testRenderer.root.findAllByType('span')
    expect(span.length).toBe(12) //2 spans in icons
    
  })
  test('if pages count is more than 10 button next should be shown', () => {
    const testRenderer = TestRenderer.create(<Paginator currentPage={1} onPageChange={() => {
    }} pageSize={1} totalItemsCount={20} portionSize={10}/>)
    const button = testRenderer.root.findAllByType('button')
    expect(button.length).toBe(1)
  })
})
