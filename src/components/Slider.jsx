import Carousel from 'react-bootstrap/Carousel';
import SliderItem from './SliderItem'


function Slider() {
  return (
    <Carousel interval={50000}>
      <Carousel.Item>
        <SliderItem></SliderItem>
      </Carousel.Item>
      <Carousel.Item>
        <SliderItem></SliderItem>
      </Carousel.Item>
      <Carousel.Item>
        <SliderItem></SliderItem>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;