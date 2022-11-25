import 'react-modal-video/scss/modal-video.scss'
import ModalVideo from 'react-modal-video'
import { IYouTubeModal } from '@interfaces/propsInterfaces'
import { ModalWrapper } from './styled'

export const YouTubeModal: React.FC<IYouTubeModal> = ({ isOpen, handleOpening }) => {
	return (
		<ModalWrapper>
			<ModalVideo
				channel="youtube"
				youtube={{ autoplay: 0 }}
				isOpen={isOpen}
				onClose={handleOpening}
				allowFullScreen
				videoId="79ojlwMzs0Q"
			/>
		</ModalWrapper>
	)
}
