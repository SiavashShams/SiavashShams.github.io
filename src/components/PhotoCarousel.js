import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useIsPresent, useReducedMotion } from 'framer-motion';

const wrap = (index, total) => (index + total) % total;

function PhotoPanel({ items, direction, full, reduced, onSwipe, onDrag }) {
  const present = useIsPresent();
  const variants = {
    enter: d => ({ x: reduced ? 0 : d * 32, opacity: reduced ? 1 : 0 }),
    center: { x: 0, opacity: 1 },
    exit: d => ({ x: reduced ? 0 : d * -32, opacity: 0 })
  };
  return <motion.div className={`carousel-panel ${full ? 'carousel-panel-full' : 'carousel-panel-strip'}`}
    custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
    transition={{ duration: reduced ? 0 : 0.36, ease: [0.22, 1, 0.36, 1] }}
    drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={reduced ? 0 : 0.12} dragMomentum={false}
    onDrag={(_, info) => onDrag(info)} onDragEnd={(_, info) => onSwipe(info)}
    aria-hidden={!present} style={{ pointerEvents: present ? 'auto' : 'none' }}>
    {items.map(photo => full
      ? <img key={photo.id} src={photo.src} alt={photo.caption} width={photo.width} height={photo.height} draggable={false}/>
      : <figure key={photo.id}><div className="carousel-thumbnail"><img src={photo.src} alt={photo.caption} width={photo.width} height={photo.height} draggable={false}/></div><figcaption>{photo.shortCaption || photo.caption}</figcaption></figure>)}
  </motion.div>;
}

export default function PhotoCarousel({ photos, full = false }) {
  const [{ index, direction }, setSelection] = useState({ index: 0, direction: 1 });
  const reduced = useReducedMotion();
  const dragged = useRef(false);
  const total = photos.length;
  const photo = photos[index];
  const move = delta => setSelection(current => ({ index: wrap(current.index + delta, total), direction: Math.sign(delta) }));
  useEffect(() => {
    // Decode upcoming photos in the browser cache before they enter the frame.
    [-1, 0, 1, 2, 3].forEach(offset => {
      const image = new Image();
      image.src = photos[wrap(index + offset, total)].src;
      if (image.decode) image.decode().catch(() => {});
    });
  }, [index, photos, total]);
  const onSwipe = ({ offset, velocity }) => {
    const horizontal = Math.abs(offset.x) > Math.abs(offset.y) * 1.3;
    if (horizontal && (Math.abs(offset.x) > 45 || (Math.abs(offset.x) > 12 && Math.abs(velocity.x) > 450))) move(offset.x < 0 ? 1 : -1);
  };
  const onKeyDown = event => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      move(event.key === 'ArrowLeft' ? -1 : 1);
    }
  };
  const panels = <AnimatePresence initial={false} custom={direction}>
    <PhotoPanel key={index} items={full ? [photo] : [0, 1, 2].map(offset => photos[wrap(index + offset, total)])}
      direction={direction} full={full} reduced={reduced} onSwipe={onSwipe}
      onDrag={({ offset }) => { if (Math.abs(offset.x) > 12 && Math.abs(offset.x) > Math.abs(offset.y) * 1.3) dragged.current = true; }}/>
  </AnimatePresence>;
  return <section className={`photo-carousel ${full ? 'photo-carousel-full' : 'photo-carousel-preview'}`}
    aria-label={full ? 'Photography collection' : 'Photography preview'} aria-roledescription="carousel"
    tabIndex={full ? 0 : undefined} onKeyDown={onKeyDown} onPointerDownCapture={() => { dragged.current = false; }}>
    <div className="carousel-viewport">
      {full ? panels : <Link className="carousel-browse" to="/miscellaneous" draggable={false} aria-label="Open the full photography gallery"
        onClick={event => { if (dragged.current && event.detail > 0) event.preventDefault(); }}>{panels}</Link>}
    </div>
    <div className="carousel-footer">
      <div className="carousel-caption" aria-live="polite" aria-atomic="true">
        <span className="carousel-count"><span className="sr-only">{full ? 'Photo' : 'Starting photo'} </span>{String(index + 1).padStart(2, '0')}<span className="count-divider"> / </span>{String(total).padStart(2, '0')}</span>
        {full ? <p>{photo.caption}</p> : <span className="sr-only">{photo.caption}</span>}
      </div>
      <div className="carousel-controls">
        <button className="carousel-prev" type="button" onClick={() => move(-1)} aria-label="Previous photo"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6"/></svg></button>
        <button className="carousel-next" type="button" onClick={() => move(1)} aria-label="Next photo"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></button>
      </div>
    </div>
    <div className="carousel-progress" aria-hidden="true"><motion.span initial={false} animate={{ scaleX: (index + 1) / total }} transition={{ duration: reduced ? 0 : 0.36, ease: [0.22, 1, 0.36, 1] }}/></div>
  </section>;
}
