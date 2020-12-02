import { memo} from 'react'
const AddPage = memo(function AddPage(props) {
    const {addAction, num} = props

    console.log('AddPage')

    return (
        <div>
            <p>{num}</p>
            <button onClick={addAction}>num加1</button>
        </div>
    )
})

export default AddPage