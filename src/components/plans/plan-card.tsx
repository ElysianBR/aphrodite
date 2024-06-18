import Image from "next/image"
import { DetailedHTMLProps, FC } from "react"

import "./plan.css"

export type Itens = {
    icon?: typeof Image,
    text: string,
}

export interface PlanCardProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string,
    subtitle?: string,
    textDescription?: string,
    itens: Itens[],
    price?: number,
}

const PlanCard: FC<PlanCardProps> = (props) => {
    return (
        <div className="plan-card">
        </div>
    )
}

export default PlanCard;