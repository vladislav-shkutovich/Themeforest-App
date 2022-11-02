import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import {
	centerCoords,
	firstMarkerCoords,
	secondMarkerCoords,
	thirdMarkerCoords,
} from '@config/googleMapConfig'
import { WrapperStyled } from './styled'

export const GoogleMapItem: React.FC = () => {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.REACT_GOOGLE_MAPS_API_KEY as string,
	})

	if (!isLoaded)
		return (
			<WrapperStyled>
				<h3>Map loading...</h3>
			</WrapperStyled>
		)

	return (
		<WrapperStyled>
			<GoogleMap zoom={6} center={centerCoords}>
				<Marker position={firstMarkerCoords} title="Our office in Brest" />
				<Marker position={secondMarkerCoords} title="Our office in Warszawa" />
				<Marker position={thirdMarkerCoords} title="Our office in Praha" />
			</GoogleMap>
		</WrapperStyled>
	)
}
