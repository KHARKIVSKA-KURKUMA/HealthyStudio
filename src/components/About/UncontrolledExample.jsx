import Carousel from "react-bootstrap/Carousel";
import CarouselAbout1 from "../../img/about-1.jpg";
import CarouselAbout2 from "../../img/about-2.jpg";
import styled from "styled-components";
import Prev from "../../img/prev.svg";
import Next from "../../img/next.svg";

const StyledCarousel = styled(Carousel)`
  ul {
    display: flex;
    justify-content: center;
  }
  .carousel-indicators {
    display: none;
  }
  .carousel-control-next,
  .carousel-control-prev {
    border: 3px solid #303030;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    top: 50%;
  }
  .carousel-control-prev {
    left: 64px;
  }
  .carousel-control-next {
    right: 64px;
  }
  .carousel-control-next-icon {
    max-width: 16px;
    background-image: url(${Next});
  }
  .carousel-control-prev-icon {
    max-width: 16px;
    background-image: url(${Prev});
  }
`;

function UncontrolledExample() {
  return (
    <StyledCarousel>
      <Carousel.Item>
        {/* <Carousel.Item interval={1000}> */}
        <ul>
          <li className="hello">
            <img src={CarouselAbout1} alt="Example Dish" />
          </li>
          <li>
            <img src={CarouselAbout2} alt="Example Dish" />
          </li>
        </ul>
      </Carousel.Item>
      {/* <Carousel.Item interval={1000}> */}
      <Carousel.Item>
        <ul>
          <li>
            <img src={CarouselAbout1} alt="Example Dish" />
          </li>
          <li>
            <img src={CarouselAbout2} alt="Example Dish" />
          </li>
        </ul>
      </Carousel.Item>
    </StyledCarousel>
  );
}

export default UncontrolledExample;
