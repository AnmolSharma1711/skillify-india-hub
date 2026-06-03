/**
 * Renders a row of CourseCards and coordinates which card's panel is open.
 *
 * Why this exists: each card schedules a delayed close so the user can move
 * the cursor into the panel. Without a shared coordinator, hovering a second
 * card while the first is still in its grace window would leave TWO panels
 * on screen at once. This component owns a single `openId` so opening one
 * card immediately closes any other.
 */
import { useCallback, useRef, useState } from "react";

import type { Course } from "@/config/courses";
import { CourseCard } from "./CourseCard";

/** Grace period (ms) before a panel closes after the cursor leaves. */
const CLOSE_DELAY_MS = 1000;

export function CoursesGrid({
  courses,
  className,
}: {
  courses: Course[];
  className?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }, []);

  const openCard = useCallback(
    (id: string) => {
      // Switching cards: cancel any pending close and swap instantly.
      cancelClose();
      setOpenId(id);
    },
    [cancelClose],
  );

  const scheduleClose = useCallback(
    (id: string) => {
      cancelClose();
      timer.current = setTimeout(() => {
        // Only close if no other card has taken over in the meantime.
        setOpenId((current) => (current === id ? null : current));
      }, CLOSE_DELAY_MS);
    },
    [cancelClose],
  );

  const closeNow = useCallback(
    (id: string) => {
      cancelClose();
      setOpenId((current) => (current === id ? null : current));
    },
    [cancelClose],
  );

  return (
    <div className={className}>
      {courses.map((c, i) => (
        <CourseCard
          key={c.id}
          course={c}
          // Cards in the right half of the grid open a LEFT-anchored panel so
          // the panel never lands on top of the card and triggers a hover loop.
          side={i >= Math.ceil(courses.length / 2) ? "left" : "right"}
          open={openId === c.id}
          onOpen={() => openCard(c.id)}
          onScheduleClose={() => scheduleClose(c.id)}
          onCancelClose={cancelClose}
          onCloseNow={() => closeNow(c.id)}
        />
      ))}
    </div>
  );
}