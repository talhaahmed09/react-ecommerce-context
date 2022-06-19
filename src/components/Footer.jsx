
  import styled from "styled-components";
  import { mobile } from "../responsive/responsive";
  import { PhoneOutlined, MailOutlined }   from "@ant-design/icons";

  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>     <svg
              className="b-loaded"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 278 32"
              aria-label="Hayneedle Logo"
              width="240px"
              height="30px"
            >
              <g id="b90422e4-2e93-436a-80f6-2b99d9cb717b" data-name="Layer 2">
                <g
                  id="eab9588a-1b6a-455e-a072-455eac2ebcc7"
                  data-name="Blue dot hayneedle"
                >
                  <g
                    id="f0d0e8a2-e67c-4653-b5de-5499d9faa688"
                    data-name="HAYNEEDLE"
                    fill="#ffffff"
                  >
                    <path d="M27.29,1.21v30H22.66V17.17H5.45V31.24H.83v-30H5.45V13.42H22.66V1.21Z"></path>
                    <path d="M50.68,20.94H40.48L36,31.24H31.48l13.39-30h3.07L60,31.24H54.82ZM49.3,17.47,45.82,8.83,42,17.46Z"></path>
                    <path d="M70,19.18l-11.58-18H64L72.9,14.86,81.12,1.22h4.79L74.85,19.3V31.24H70Z"></path>
                    <path d="M117.37,1.21V31.34h-2.53L94.51,9.65V31.24h-4.2v-30h2.56l20.3,21.69V1.21Z"></path>
                    <path d="M143.87,27.46l-.6,3.77H124.7V1.16h18.19l-.62,3.77H129.33V13.7h11.44l-.55,3.52H129.33V27.46Z"></path>
                    <path d="M168.17,27.46l-.63,3.78H149V1.16h18.16l-.62,3.77H153.63V13.7h11.44l-.54,3.52h-10.9V27.46Z"></path>
                    <path d="M201.15,15.53c0,6.38-3.38,15.92-19.63,15.92-1.91,0-5.25-.15-8.22-.43V1.45a65.47,65.47,0,0,1,9.06-.72C197,.73,201.15,8.55,201.15,15.53Zm-5,.29c0-5.25-2.67-11.31-13.69-11.31-1.39,0-3.2.1-4.53.2V27.58c1.33.09,3.1.18,4.38.18,11.22,0,13.84-6.76,13.84-12Z"></path>
                    <path d="M225.45,27.46l-.62,3.77H207.21v-30h4.62V27.46Z"></path>
                    <path d="M249.06,27.46l-.61,3.77H229.89V1.16h18.18l-.62,3.77H234.52V13.7H246l-.55,3.52H234.52V27.46Z"></path>
                  </g>
                  <g
                    id="b77ae1e8-455a-423f-ad81-0b101c652315"
                    data-name="Hayneedle blue dot"
                  >
                    <circle
                      cx="255.81"
                      cy="6.37"
                      r="5.02"
                      fill="#ffffff"
                    ></circle>
                  </g>
                </g>
              </g>
            </svg></Logo>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
             <i src="../../public/icons/facebook-f-brands.svg"></i>
            </SocialIcon>
            <SocialIcon color="E4405F">
            <i src="../../public/icons/instagram-brands.svg"></i>
            </SocialIcon>
            <SocialIcon color="55ACEE">
            <i src="../../public/icons/twitter-brands.svg"></i>
            </SocialIcon>
            <SocialIcon color="E60023">
            <i src="../../public/icons/pinterest-brands.svg"></i>
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <i src="../../public/icons/location-dot-solid.svg"  style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
          </ContactItem>
          <ContactItem>
            <PhoneOutlined style={{marginRight:"10px"}}/> +1 234 56 78
          </ContactItem>
          <ContactItem>
            <MailOutlined  style={{marginRight:"10px"}} /> contact@lama.dev
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;
  