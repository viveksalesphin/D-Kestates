"use client";

import { useEffect } from "react";
import { track } from "@/lib/tracking";

/** Fires a single ViewContent event when a project page is viewed. */
export default function ViewContentTracker({
  contentName,
  contentCategory,
}: {
  contentName: string;
  contentCategory: string;
}) {
  useEffect(() => {
    track("ViewContent", {
      content_name: contentName,
      content_category: contentCategory,
    });
  }, [contentName, contentCategory]);

  return null;
}
