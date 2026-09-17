"use client";

import { useEffect } from "react";
import { captureUtmsFromUrl } from "@/lib/tracking";

/**
 * Captures UTM / click-id parameters on first load so they persist across
 * navigation and can be attached to the lead form submission. Renders nothing.
 */
export default function UtmCapture() {
  useEffect(() => {
    captureUtmsFromUrl();
  }, []);

  return null;
}
