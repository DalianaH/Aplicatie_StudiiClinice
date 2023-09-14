import { Carousel } from '@sefailyasoz/react-carousel'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import './style.css'
export const MyCarousel = () => {

const CarouselData = [
  {
    image: 'https://www.diyarbakirsoz.com/haberresimleri/2023523/sma-hastaligi-nedir-sma-nin-nedeni-nedir-sma-hastaligi-belirtileri287x178.webp',
  },
  {
    image: 'https://www.medbillingexperts.com/blog/wp-content/uploads/2022/06/Healthcare-Claims.jpg',
  },
  {
    image: 'https://www.ucl.ac.uk/news/sites/news/files/styles/large_image/public/heart_stock_cropped_0.jpg?itok=vTb5B103',
  },
  {
    image: 'https://yourcommonwealth.org/wp-content/uploads/2023/01/Lung-cancer-image.jpg',
  },
  {
    image: 'https://newgelplus.com/cdn/shop/articles/Heart_Surgery_1000x.jpg?v=1612474537',
  },
  {
    image: 'https://www.doc.ro/uploads/photos/uploads/2022/IANUARIE/bolile-de-inima-afecteaza-intregul-organism-articol.jpg',
  },
  {
    image: 'https://img.theepochtimes.com/assets/uploads/2023/01/08/Leukemia-1.jpg',
  },
]
  return    <Carousel
              data={CarouselData}
              autoPlay={true}
              rightItem={<FaArrowRight />}
              leftItem={<FaArrowLeft />}
              animationDuration={3000}
              size="normal"
            />
}
