import * as S from './styles'

const Heading = ({
  color = 'black',
  alias = 'sm',
  children,
  ...props
}) => (
  <S.Wrapper alias={alias} color={color} {...props}>
    {children}
  </S.Wrapper>
)

export default Heading
