// Products.jsx

import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Classmate Notebook",
    price: "₹120",
    image:
      "https://m.media-amazon.com/images/I/81BOXvsX76L._SL1500_.jpg",
  },
  {
    id: 2,
    name: "Ball Pen Set",
    price: "₹80",
    image:
      "https://down-ph.img.susercontent.com/file/ph-11134207-7qula-ljz9r1ohjucsde",
  },
  {
    id: 3,
    name: "Sketch Color Kit",
    price: "₹250",
    image:
      "https://m.media-amazon.com/images/I/810EvV+sytL._AC_.jpg",
  },
  {
    id: 4,
    name: "Geometry Box",
    price: "₹180",
    image:
      "https://rukminim1.flixcart.com/image/1408/1408/geometry-box/r/p/7/classmate-victor-original-imadunaapcssyaq2.jpeg?q=90",
  },
  {
    id: 5,
    name: "Sticky Notes",
    price: "₹60",
    image:
      "https://images.unsplash.com/photo-1588072432904-843af37f03ed",
  },
  {
    id: 6,
    name: "Marker Pack",
    price: "₹150",
    image:
      "https://i.pinimg.com/originals/62/a8/31/62a8317afefc9245d9679f8edd25b9f9.jpg",
  },
  {
    id: 7,
    name: "Office File Folder",
    price: "₹90",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.azmlV56Y_WUFU-Y9-B98dQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 8,
    name: "Water Bottle",
    price: "₹220",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
  },
  {
    id: 9,
    name: "Highlighter Set",
    price: "₹140",
    image:
      "https://th.bing.com/th/id/OIP.Z0Vl8pIUd5iV3Y0QHbWztAHaHa?w=205&h=205&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    id: 10,
    name: "Craft Paper Pack",
    price: "₹170",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.8sMHX7aEFd7w5ObyD9mwqQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 11,
    name: "Stapler",
    price: "₹110",
    image:
      "https://i5.walmartimages.com/asr/6a65b433-2d46-4731-be7a-deb211e2ccae.5e89bc204ae9d6ab48a4f9d7bb95e88f.jpeg",
  },
  {
    id: 12,
    name: "Calculator",
    price: "₹450",
    image:
      "https://th.bing.com/th/id/OIP.EACpqEdsAZuNVN6ZXBhZWQHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 13,
    name: "Glue Stick",
    price: "₹40",
    image:
      "https://th.bing.com/th/id/OIP.RYG5QRaeYwjVOs6alHoSjwAAAA?w=212&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
  },
  {
    id: 14,
    name: "Scissors",
    price: "₹95",
    image:
      "https://i5.walmartimages.com/asr/c8facb26-4e85-4cf1-85f5-0148d30ffef9.e35620cc872ce250a298238ec92df54b.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
  },
  {
    id: 15,
    name: "School Bag",
    price: "₹850",
    image:
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa",
  },
  {
    id: 16,
    name: "White Board",
    price: "₹650",
    image:
      "https://th.bing.com/th/id/OIP.xoqVa6y9tu0adQOw4xryQwHaE8?w=261&h=189&c=7&r=0&o=7&pid=1.7&rm=3",
  },

];

export default function Products() {

  const { addToCart } = useContext(CartContext);

  return (
    <Container>

      <Title>Stationery Products</Title>

      <ProductGrid>

        {products.map((product) => (

          <Card key={product.id}>

            <ProductImage
              src={product.image}
              alt={product.name}
            />

            <CardContent>

              <ProductName>
                {product.name}
              </ProductName>

              <Price>
                {product.price}
              </Price>

          <Button
  onClick={() => {
    console.log(product);
    addToCart(product);
  }}
>
  Add To Cart
</Button>

            </CardContent>

          </Card>
        ))}

      </ProductGrid>

    </Container>
  );
}

/* Styled Components */

const Container = styled.div`
  min-height: 100vh;
  padding: 40px;
  background: #f3f4f6;
  background: url("https://png.pngtree.com/background/20211215/original/pngtree-blur-light-spots-warm-color-bokeh-white-light-effect-background-picture-image_1465634.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  margin-bottom: 40px;
  color: #1f2937;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const Card = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  transition: 0.3s;

  /* &:hover {
    transform: translateY(-1px);
  } */
`;

const ProductImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
  text-align: center;
`;

const ProductName = styled.h2`
  font-size: 22px;
  color: #374151;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 20px;
  color: #2563eb;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Button = styled.button`
  background: #2563eb;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;

  &:hover {
    background: #1d4ed8;
  }
`;