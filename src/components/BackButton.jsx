import { useNavigate } from 'react-router-dom'
import '../App.css'
const BackButton = () => {
  const navigate = useNavigate()

  return (
    <>
      <button onClick={() => navigate(-1)} id="go-back-button">
        <img
          src="/back_button.png"
          alt="back_button"
          width={'40px'}
          id="go-back-button"
        />
      </button>
    </>
  )
}
export default BackButton
