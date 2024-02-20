import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import FootprintIcon from './icons/footprint'
import styled from '@emotion/styled'
import Image from 'next/image'
import Head from "next/head";
import css from "@/styles/Home.module.css"

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    (<Link href="/" scroll={false}>
      <LogoBox >
        
        <Image 
            className="logo"
        src="/images/logo_10.svg"
        alt="Logo de Stirwin Castro Gaviria"
        width={30}
        height={30}

        />
       
        <Text
        className="nav_logo"
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
         
         
        >
          Stirwin Castro Gaviria
        </Text>
      </LogoBox>

    </Link>)
  );
}

export default Logo
