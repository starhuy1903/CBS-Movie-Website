import React from 'react'
import ReactDOM from 'react-dom'
import VideoPlayer from "../VideoPlayer";
import {
    Modal,
    ModalHeader,
    ModalOverlay,
    ModalWrapper,
    PlayerSizer,
    PlayerWrapper
} from "./VideoModal.styles";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const VideoModal = ({isShowing, hide, videoSrc}) =>
    isShowing
        ? ReactDOM.createPortal(
            <>
                <ModalOverlay onClick={hide}/>
                <ModalWrapper
                    aria-modal
                    aria-hidden
                    tabIndex={-1}
                    role="dialog"
                >
                    <Modal>
                        <ModalHeader>
                            <HighlightOffIcon
                                className="closeIcon"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={hide}
                            />
                        </ModalHeader>
                        <PlayerWrapper>
                            <PlayerSizer>
                                <VideoPlayer videosrc={videoSrc} playing={true}/>
                            </PlayerSizer>
                        </PlayerWrapper>
                    </Modal>
                </ModalWrapper>
            </>,
            document.body
        )
        : null

export default VideoModal;