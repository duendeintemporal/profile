'use client'

import { motion, useReducedMotion } from 'motion/react'

export default function BackgroundImage() {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8, ease: 'easeOut' }}
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-slate-950"
    >
      {/* Blob 1 — Sky (arriba izquierda) */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '55vmax',
          height: '55vmax',
          left: '-15%',
          top: '-20%',
          background:
            'radial-gradient(circle, rgba(56, 189, 248, 0.20) 0%, transparent 65%)',
          filter: 'blur(30px)',
        }}
        animate={
          prefersReduced
            ? {}
            : { x: ['0vw', '20vw', '0vw'], y: ['0vh', '15vh', '0vh'] }
        }
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Blob 2 — Violeta (abajo derecha) */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '50vmax',
          height: '50vmax',
          right: '-10%',
          bottom: '-15%',
          background:
            'radial-gradient(circle, rgba(139, 92, 246, 0.18) 0%, transparent 65%)',
          filter: 'blur(30px)',
        }}
        animate={
          prefersReduced
            ? {}
            : { x: ['0vw', '-25vw', '0vw'], y: ['0vh', '-20vh', '0vh'] }
        }
        transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Blob 3 — Ámbar (centro, muy sutil) */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '40vmax',
          height: '40vmax',
          left: '30%',
          top: '30%',
          background:
            'radial-gradient(circle, rgba(251, 191, 36, 0.08) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
        animate={
          prefersReduced
            ? {}
            : { x: ['0vw', '15vw', '0vw'], y: ['0vh', '-10vh', '0vh'] }
        }
        transition={{ duration: 40, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grid de puntos */}
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(148, 163, 184, 0.7) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(2,6,23,0.85)_100%)]" />
    </motion.div>
  )
}