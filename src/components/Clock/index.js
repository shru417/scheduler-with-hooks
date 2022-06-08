import {ClockContainer, Heading, ClockImage, Time} from './styledComponents'

const Clock = () => (
  <ClockContainer>
    <Heading>Clock</Heading>
    <ClockImage
      src="https://assets.ccbp.in/frontend/hooks/clock-img.png"
      alt="clock"
    />
    <Time> 12:00:00 AM </Time>
  </ClockContainer>
)

export default Clock
