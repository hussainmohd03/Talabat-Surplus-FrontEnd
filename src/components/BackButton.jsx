import { useNavigate } from 'react-router-dom'
const BackButton = () => {
  const navigate = useNavigate()

  return (
    <>
      <button onClick={() => navigate(-1)} className='go-back-button'>X</button>
    </>
  )
}
export default BackButton
