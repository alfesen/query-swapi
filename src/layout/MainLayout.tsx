import { Fragment } from 'react'
import {
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'
import { useModal } from '../hooks/useModal'
import Modal from '../components/UI/Modal'
import FullPersonData from '../components/Units/People/FullPersonData'

const MainLayout = () => {
  const { closeModal } = useModal()
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()

  const hideModal = () => {
    closeModal()
    navigate(location.pathname.split('?')[0])
  }

  const personId = Number(searchParams.get('person'))
  return (
    <Fragment>
      {personId ? (
        <Modal onClose={hideModal}>
          <FullPersonData id={personId} />
        </Modal>
      ) : null}
      <Outlet />
    </Fragment>
  )
}

export default MainLayout