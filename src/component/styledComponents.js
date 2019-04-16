//Libs
import styled from 'styled-components';

// Components
import { Link } from 'react-router-dom';

export const Column = styled.div`
  position: relative;
  display: inline-block;

  @media (min-width: 576px) {
    width: 23%;
    margin-right: ${(props) => props.last ? '0' : '2.5%'};
  }

  @media (max-width: 575px) {
    width: 100% !important;
    margin: 30px auto;
  }
`;

export const SupporterWrapper = styled.div`
  cursor: pointer;
  margin-bottom: 9.27%;
  text-align: left;
`;

export const SupportersWrapper = styled.div`
  text-align:center
`;

export const Wrapper = styled.div`
  @media (min-width: 981px) {
    padding: 15px 0;
  }
`;

export const Button = styled.a`
  display: inline-block;
  border-radius: 10px;
  color: #fff;
  background: #F6A623;
  border-width: 3px;
  border-color: #fff;
  border-style: solid;
  padding: 7px 10px 10px 10px;
  height: 40px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;

  &:hover,
  &:focus {
    color: #F6A623;
    background: #fff;
    border-color: #F6A623;
    text-decoration: none;    
  }
`;

export const ButtonBack = styled(Link)`
  display: block;
  width: 30px;
  height: 30px;
  margin-bottom: 20px;
  margin-top: 20px;
  clear: both;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.darkGrey};
  font-family: cts-font;
  font-size: 30px;
  line-height: 30px;
  transition: .2s color;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: ${(props) => props.theme.ctsBlue}
  }
`;

export const Quote = styled.p`
  margin-top: 20px;
  padding-bottom: 1em;
`;

export const StrongText = styled.p`
  font-weight: bold;
  margin-bottom: -5px;
  padding-bottom: 1em;
`;

export const Position = styled(StrongText)`
  text-transform: uppercase;
`;