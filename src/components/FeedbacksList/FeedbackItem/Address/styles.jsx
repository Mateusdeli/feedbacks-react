import styled from 'styled-components'
import Text from '../../../Text'

const AddressContainer = styled.div`
  width: 50%;
`

const Title = styled(Text)`
  text-transform: uppercase;

  font-size: 11px;

  color: ${({ theme }) => theme.colors.darkGray};

  font-weight: 700;

  margin-bottom: 0;

  padding-bottom: 3px;
`

const Address = styled(Text)`
  margin-top: 0;
`

export { AddressContainer, Title, Address }
