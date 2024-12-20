const Flecha = ({ size = 96, rotated = false }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill='currentColor' className={rotated ? 'rotate-180' : 'rotate-0'}>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M11.375 6.22l-5 4a1 1 0 0 0 -.375 .78v6l.006 .112a1 1 0 0 0 1.619 .669l4.375 -3.501l4.375 3.5a1 1 0 0 0 1.625 -.78v-6a1 1 0 0 0 -.375 -.78l-5 -4a1 1 0 0 0 -1.25 0z" />
    </svg>
  )
}

export default Flecha
