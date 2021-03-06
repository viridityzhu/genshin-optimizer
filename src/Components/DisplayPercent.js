import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Stat from "../Stat"

//small helper component to help display calculated values in description text
export default function DisplayPercent(percent, stats, statKey, fixed = 0) {
  if (!percent || !stats || !statKey) return null
  let variant = Stat.getStatVariant(statKey) || "success"
  let value = (percent / 100) * (stats[statKey] || 0)
  let tooltipElement = <span className={`text-${variant}`}>{value?.toFixed?.(fixed) || value}</span>
  let tooltip = <OverlayTrigger
    placement="top"
    overlay={<Tooltip>{percent}% {Stat.getStatNamePretty(statKey)}</Tooltip>}
  >{tooltipElement}</OverlayTrigger>
  return <span>({tooltip})</span>
}