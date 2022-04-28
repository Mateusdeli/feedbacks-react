import styled from 'styled-components'

const Row = styled.div(
  (props) => `
    display: flex;

    justify-content: ${props.content ?? 'flex-start'};
    align-items: ${props.align ?? 'flex-start'};

    flex-wrap: wrap;
    margin-top: calc(0 * -1);
    margin-right: calc(1.5rem * -0.5);
    margin-left: calc(1.5rem * -0.5);
`,
)

const Col = styled.div`
  flex: 1 0 0%;
`

export { Row, Col }
