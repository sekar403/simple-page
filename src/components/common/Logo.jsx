import React from 'react'

export default function Logo(props) {
  return  <img className={props.className} src={props.href} alt={props.alt} width={props.width} height={props.height} />
}
