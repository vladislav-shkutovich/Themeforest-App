import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api'
import { centerCoords, markersCoords, mapOptions } from '@config/googleMapConfig'
import { WrapperStyled } from './styled'

export const GoogleMapItem: React.FC = () => {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
	})

	if (!isLoaded)
		return (
			<WrapperStyled>
				<h3>Map loading...</h3>
			</WrapperStyled>
		)

	return (
		<WrapperStyled>
			<GoogleMap zoom={6} center={centerCoords} options={mapOptions}>
				{markersCoords.map((item) => (
					<MarkerF position={item} title="Our office" key={`${item.lat}${item.lng}`} />
				))}
			</GoogleMap>
		</WrapperStyled>
	)
}
