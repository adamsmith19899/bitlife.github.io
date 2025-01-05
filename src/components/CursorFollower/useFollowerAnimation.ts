import { useRef, useEffect, CSSProperties } from 'react';
import { Position } from './types';
import { lerp } from './utils';

export function useFollowerAnimation(targetPosition: Position) {
  const ref = useRef<HTMLDivElement>(null);
  const currentPos = useRef<Position>({ x: 0, y: 0 });
  const frameRef = useRef<number>();

  useEffect(() => {
    function animate() {
      if (!ref.current) return;

      currentPos.current = {
        x: lerp(currentPos.current.x, targetPosition.x, 0.15),
        y: lerp(currentPos.current.y, targetPosition.y, 0.15),
      };

      ref.current.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px)`;
      frameRef.current = requestAnimationFrame(animate);
    }

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [targetPosition]);

  const style: CSSProperties = {
    transform: `translate(${targetPosition.x}px, ${targetPosition.y}px)`,
  };

  return { ref, style };
}