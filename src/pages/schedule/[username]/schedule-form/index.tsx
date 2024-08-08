import { useState } from 'react'
import { CalendarStep } from './calendar-step'
import { ConfirmStep } from './confirm-step'

export function ScheduleForm() {
  const [selectedDateTime, setSelectDateTime] = useState<Date | null>(null)

  function handleClearSelectedDateTime() {
    setSelectDateTime(null)
  }

  if (selectedDateTime)
    return (
      <ConfirmStep
        schedulingDate={selectedDateTime}
        onCancelConfirmation={handleClearSelectedDateTime}
      />
    )

  return <CalendarStep onSelectDateTime={setSelectDateTime} />
}
