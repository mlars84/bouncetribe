import React from 'react'
import styled from 'styled-components'
import {BtLink} from 'styled'
import {purple, grey600, grey200, white} from 'theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 660px;
  margin: auto;
  align-items: center;
`

export const Paper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: ${white};
  margin-top: 60px;
  border: 1px solid ${grey200};
`

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const SmallImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  margin: 5px;
  object-fit: cover;
`

const LargeImage = styled.img`
  height: 600px;
  width: 600px;
  object-fit: cover;
  margin: 20px 0;
`


export const Portrait = (props) => {
  return (
    <BtLink
      to={props.to}
    >
      <SmallImg
        {...props}
      />
    </BtLink>
  )
}

export const Artwork = (props) => {
  return (
    <BtLink
      to={props.to}
    >
      <LargeImage
        {...props}
      />
    </BtLink>
  )
}

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled(BtLink)`
  color: ${purple};
  font-size: 18px;
  font-weight: 400;
  &:hover {
    text-decoration: underline;
  }
`

export const Handle = styled(BtLink)`
  color: ${grey600};
  font-weight: 400;
  font-size: 14px;
  margin-top: 5px;
  &:hover {
    text-decoration: underline;
  }
`

export const Genre = styled.span`
  display: flex;
  font-weight: 400;
  align-items: center;
  color: ${white};
  font-size: 15px;
  line-height: 15px;
  background-color: ${purple};
  padding: 10px 15px;
  border-radius: 10px;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
`

export const Value = styled.span`
  display: flex;
  font-size: 18px;
  margin: 0 10px 0 5px;
`