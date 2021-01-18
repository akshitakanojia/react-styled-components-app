import React from 'react'
import { Button } from '../../globalStyles'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { 
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRight,
  SocialIcons,
  SocialIconLink,
  SocialIcon
 } from './Footer.elements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>
          You can unsubscribe at any time.
        </FooterSubText>
        <Form>
          <FormInput name='email' type="email" palceholder="Your Email"/>
            <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinksItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon/>
          </SocialLogo>
          <WebsiteRight> ULTRA © 2020</WebsiteRight>
          <SocialIcons>
            <SocialIconLink href='/' target="_blank" aria-label="Facebook">
              <FaFacebook/>
            </SocialIconLink>
            <SocialIconLink href='/' target="_blank" aria-label="Instagram">
              <FaInstagram/>
            </SocialIconLink>
            <SocialIconLink href='/' target="_blank" aria-label="Youtube">
              <FaYoutube/>
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
