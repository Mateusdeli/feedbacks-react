import styled from 'styled-components'
import Heading from '../../components/Heading'

const ListingContainer = styled.div`
  display: flex;
  
  gap: 67px;

  padding: 1.5rem 0;
`

const ListingText = styled(Heading)`
    padding-top: 1.5rem;
`

export { ListingContainer, ListingText }
