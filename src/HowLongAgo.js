const howLongAgo = (peep) => {
  const currentDate = new Date()
  const previousDate = new Date(peep.created_at)
  const timeDifference = currentDate - previousDate
  const minutesDifference = timeDifference / 1000 / 60
  if (minutesDifference < 60) {
    return `${Math.round(minutesDifference)} minutes`
  } else if (minutesDifference < 1440) {
    return `${Math.round(minutesDifference / 60)} hours`
  } else {
    return `${Math.round(minutesDifference / 1440)} days`
  }
}

export default howLongAgo
