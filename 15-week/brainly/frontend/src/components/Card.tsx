import type { ReactElement } from "react"
import { ShareIcon } from "./icons/ShareIcon"

export interface CardProps {
  title: string,
  link: string,
  type: string
}


export function Card({ title, link, type }: CardProps): ReactElement {

  return (
    <div>
      <div className="p-8 bg-white rounded-md border-2 border-gray-200 max-w-96">
        <div className="flex justify-between">
          <div className="flex items-center gap-4 text-gray-500">
            <ShareIcon size={"md"} />
            {title}
          </div>
          <div className="flex items-center gap-4 text-gray-500">
            <ShareIcon size={"md"}></ShareIcon>
            <ShareIcon size={"md"} />
          </div>
        </div>

        <div className="pt-4 p-1">

          {type === 'youtube' && <iframe className="w-full" src={link.replace('watch?v=', 'embed/')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          }

          {type === 'twitter' &&
            <blockquote className="twitter-tweet" >
              <a href={link.replace('x', 'twitter')}></a>

            </blockquote>
          }
        </div>

      </div>

    </div>
  )
}
