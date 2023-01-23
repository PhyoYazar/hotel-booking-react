import { Link } from "react-router-dom";
import styled from "styled-components";

interface ButtonInterface {
  children?: React.ReactNode;

  href?: string;

  textsize?: string;
  bordercolor?: string;
  textcolor?: string;
  bgcolor?: string;
  bghovercolor?: string;
}

const getButton = (props: ButtonInterface) => {
  return <ButtonStyled {...props}>{props.children}</ButtonStyled>;
};

const Button = (props: ButtonInterface) => {
  return (
    <>
      {props.href ? (
        <Link to={props.href}>{getButton(props)}</Link>
      ) : (
        getButton(props)
      )}
    </>
  );
};

export default Button;

const ButtonStyled = styled.button<ButtonInterface>`
  padding: 6px 20px;
  border-radius: 30px;
  font-weight: ${({ theme }) => theme.fontWeight.semilg};

  font-size: ${({ theme, textsize }) =>
    textsize ? textsize : theme.fontSize.sm}px;

  border: 1.5px solid
    ${({ theme, bordercolor }) =>
      bordercolor ? bordercolor : theme.colors.neutral200};

  color: ${({ theme, textcolor }) =>
    textcolor ? textcolor : theme.colors.neutral200};

  background-color: ${({ theme, bgcolor }) =>
    bgcolor ? bgcolor : theme.colors.emerald500};

  &:hover {
    /* transform: translateY(-0.3px); */

    background-color: ${({ theme, bghovercolor }) =>
      bghovercolor ? bghovercolor : theme.colors.emerald900};
  }

  &:active {
    transform: translateY(0.2px) scale(1.02);
  }

  transition: all ${({ theme }) => theme.transition};
`;

// const MyButton = React.forwardRef(({ onClick, href }, ref) => {
//     return (
//       <a href={href} onClick={onClick} ref={ref}>
//         Click Me
//       </a>
//     )
//   })
