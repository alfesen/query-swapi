import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { TModal } from '../../types/ui'
import { overlayBase } from '../../css/mixins'
import { Fragment } from 'react'
import { slideUp } from '../../css/keyframes'

const backdropStyles = css(overlayBase, {
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  height: '100vh',
  zIndex: '100',
})

const modalContainerStyles = css(overlayBase, {
  height: '100vh',
})

const modalStyles = css({
  maxWidth: '60rem',
  width: '950%',
  margin: '1rem',
  zIndex: '200',
  backgroundColor: '#fff',
  backfaceVisibility: 'hidden',
  animation: `${slideUp} .6s ease-out`,
})

const Modal = ({ children, onClose }: TModal) => {
  const ModalContainer = styled.div(modalContainerStyles)
  const ModalBackdrop = styled.div(backdropStyles)
  const Modal = styled.div(modalStyles)
  return (
    <Fragment>
      <ModalBackdrop onClick={onClose} />
      <ModalContainer>
        <Modal>{children}</Modal>
      </ModalContainer>
    </Fragment>
  )
}

export default Modal