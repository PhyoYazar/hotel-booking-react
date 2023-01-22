import styled from 'styled-components';

interface StyledRotateInterface {
  isRotateX?: boolean;
}

interface Props extends StyledRotateInterface {
  frontData: Function;
  backData: Function;
  // frontData: JSX.Element;
  // backData: JSX.Element;
}

const RotateCard = ({ isRotateX, frontData, backData }: Props) => {
  return (
    <StyledRotateCard isRotateX={isRotateX}>
      <div className="card front">{frontData()}</div>

      <div className="card back">{backData()}</div>
    </StyledRotateCard>
  );
};

export default RotateCard;

const StyledRotateCard = styled.div<StyledRotateInterface>`
  width: 250px;
  height: 400px;
  cursor: pointer;

  position: relative;
  perspective: 1500px;
  -moz-perspective: 1500px;

  & .card {
    width: 100%;
    height: 400px;
    position: absolute;
    top: 0;
    left: 0;

    border-radius: 3px;
    overflow: hidden;
    backface-visibility: hidden; /* to hide the back side of card */
    transition: all 0.6s ease;
  }

  & .back {
    background-color: ${({ theme }) => theme.colors.rose200};
    transform: ${({ isRotateX }) =>
      isRotateX ? 'rotateX(180deg)' : 'rotateY(180deg)'};
  }

  & .front {
    background-color: ${({ theme }) => theme.colors.emerald200};
  }

  &:hover .front {
    transform: ${({ isRotateX }) =>
      isRotateX ? 'rotateX(-180deg)' : 'rotateY(-180deg)'};
  }

  &:hover .back {
    transform: ${({ isRotateX }) => (isRotateX ? 'rotateX(0)' : 'rotateY(0)')};
  }
`;
