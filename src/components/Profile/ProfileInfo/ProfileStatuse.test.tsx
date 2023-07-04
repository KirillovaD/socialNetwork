import TestRenderer from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

const testRenderer = TestRenderer.create(<ProfileStatus status={'new status'} updateUserStatus={()=>{}}/>)
const testInstance = testRenderer.root
expect(testInstance.findByType(ProfileStatus).props.status).toBe('new status')

describe('ProfileStatus component', ()=>{
  test('status from props should be set', () => {
    const testRenderer = TestRenderer.create(<ProfileStatus status={'new status'} updateUserStatus={() => {
    }}/>)
    const testInstance = testRenderer.root
    expect(testInstance.findByType(ProfileStatus).props.status).toBe('new status')
   
  })
  test('after creation span should be displayed', () => {
    const testRenderer = TestRenderer.create(<ProfileStatus status={'new status'} updateUserStatus={() => {
    }}/>)
    const span = testRenderer.root.findAllByType('span')
    expect(span.length).toBe(1)
  })
  test('after creation span should be displayed', () => {
    const testRenderer = TestRenderer.create(<ProfileStatus status={'new status'} updateUserStatus={() => {
    }}/>)
    const spanText = testRenderer.root.findByType('span').children
    expect(spanText[0]).toBe('new status')
  })
  test('input should be displayed in edit mode', () => {
    const testRenderer = TestRenderer.create(<ProfileStatus status={'new status'} updateUserStatus={() => {
    }}/>)
    const spanProps = testRenderer.root.findByType('span').props
    spanProps.onDoubleClick()
    const inputProps = testRenderer.root.findByType('input').props
    expect(inputProps.value).toBe('new status')
  })
  test('callback should be called', () => {
    const mockCallback = jest.fn()
    const testRenderer = TestRenderer.create(<ProfileStatus status={'new status'} updateUserStatus={mockCallback}/>)
    const testInstance = testRenderer.root.instance
    testInstance.deactivateEditMode()
    expect(mockCallback.mock.calls.length).toBe(1)
  })
})

